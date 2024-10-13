"use server";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { GenerateEmbeddingsInPineconeVectorStore } from "@/lib/langchain";
import { adminDb } from "../../firebaseAdmin";

export async function GenerateEmbeddings(docId: string) {
  auth().protect();
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not found");
  }

  await GenerateEmbeddingsInPineconeVectorStore(docId);

  let stripeCustomerId;

  const user = await adminDb.collection("users").doc(userId).get();

  stripeCustomerId = user.data()?.stripeCustomerId;

  if (!stripeCustomerId) {

    await adminDb.collection("users").doc(userId).set({
      hasActiveMembership: false
    });
  }
 

  
  revalidatePath("/dashboard");

  return { completed: true };
}
