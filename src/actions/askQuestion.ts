"use server";
import { auth } from "@clerk/nextjs/server";
import { generateLangchainCompletion } from "@/lib/langchain";
import { adminDb } from "../../firebaseAdmin";
import { Message } from "@/components/Chat";

const PRO_LIMIT = 20;
const FREE_LIMIT = 3;

export async function askQuestion(id: string, question: string) {
  const { userId } = await auth();

  const chatRef = await adminDb
    .collection("users")
    .doc(userId!)
    .collection("files")
    .doc(id)
    .collection("chat");

  const chatSnapshot = await chatRef.get();
  const userMessages = chatSnapshot.docs.filter(
    (doc) => doc.data().role === "human"
  );

  const userRef = await adminDb.collection("users").doc(userId!).get();
  console.log("debug2 -", userRef.data());

  if (!userRef.data()?.hasActiveMembership) {
    console.log(userRef.data()?.hasActiveMembership)
    console.log("debug3", userMessages.length, FREE_LIMIT);
    if (userMessages.length >= FREE_LIMIT) {
      return {
        success: false,
        message: `You'll need to upgrade to PRO to ask more than ${FREE_LIMIT} questions.`,
      };
    }
  }

  if (userRef.data()?.hasActiveMembership) {
    console.log("debug4", userMessages.length, PRO_LIMIT);
    if (userMessages.length >= PRO_LIMIT) {
      return {
        success: false,
        message: `You've run out of questions. Upgrade using the button in the top right of your screen.`,
      };
    }
  }

  const userMessage: Message = {
    role: "human",
    message: question,
    createdAt: new Date(),
  };

  await chatRef.add(userMessage);

  //generate reply

  const reply = await generateLangchainCompletion(id, question);

  const aiMessage: Message = {
    role: "ai",
    message: reply,
    createdAt: new Date(),
  };

  await chatRef.add(aiMessage);

  return { success: true, message: null };
}
