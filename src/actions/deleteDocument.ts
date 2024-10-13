"use server";
import { adminDb } from "../../firebaseAdmin";
import { indexName } from "@/lib/langchain";
import pineconeClient from "@/lib/pinecone";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { adminStorage } from "../../firebaseAdmin";

export async function deleteDocument(docId: string) {
  auth().protect();

  const { userId } = await auth();

  //delete the document from database

  await adminDb
    .collection("users")
    .doc(userId!)
    .collection("files")
    .doc(docId)
    .delete();

  await adminStorage
    .bucket(process.env.FIREBASE_STORAGE_BUCKET)
    .file(`users/${userId}/files/${docId}`)
    .delete();

  const index = await pineconeClient.index(indexName);
  await index.namespace(docId).deleteAll();

  revalidatePath("/dashboard");
}
