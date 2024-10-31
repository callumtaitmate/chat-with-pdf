"use client";

import { useUser } from "@clerk/nextjs";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { storage, db } from "../../firebase";
import { setDoc, doc } from "firebase/firestore";
import { GenerateEmbeddings } from "@/actions/generateEmbeddings";
import useSubscription from "@/hooks/useSubscription";
import { toast } from "@/components/ui/use-toast";

export enum StatusText {
  UPLOADING = "Uploading file...",
  UPLOADED = "File uploaded successfully.",
  SAVING = "Saving file to database...",
  GENERATING = "Generating AI embeddings... This will only take a few seconds.",
  ERROR = "Please use the feedback form on the homepage to log any comments.",
}

export type Status = StatusText[keyof StatusText];

function useUpload() {
  const [progress, setProgress] = useState<number | null>(null);
  const [fileId, setFileId] = useState<string | null>(null);
  const [status, setStatus] = useState<any | null>(null);
  const { user } = useUser();
  const { hasActiveMembership } = useSubscription();



  const fileLimit = (hasActiveMembership ? 21000 : 1024);
  const [fileTooBig, setFileTooBig] = useState<any | null>(null);

  const handleUpload = async (file: File) => {
    if (!file || !user) return;

    //free/pro limits

    const fileSize = file.size;
    const fileSizeInKB = fileSize / 1024;

    if (fileSizeInKB < fileLimit) {
      // code success should be here

      const fileIdToUploadTo = uuidv4();
      const storageRef = ref(
        storage,
        `users/${user.id}/files/${fileIdToUploadTo}`
      );

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setStatus(StatusText.UPLOADING);
          setProgress(percent);
        },
        (error) => {
          console.error("Error uploading file", error);
        },
        async () => {
          setStatus(StatusText.UPLOADED);

          const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);

          setStatus(StatusText.SAVING);

          await setDoc(doc(db, "users", user.id, "files", fileIdToUploadTo), {
            name: file.name,
            size: file.size,
            type: file.type,
            downloadUrl: downloadUrl,
            ref: uploadTask.snapshot.ref.fullPath,
            createdAt: new Date(),
          });

          setStatus(StatusText.GENERATING);

          await GenerateEmbeddings(fileIdToUploadTo);

          setFileId(fileIdToUploadTo);
        }
      );
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Filesize too big. Click Upgrade to access greater filesizes.",
        duration: 2000,
      });
    }
  };

  return { progress, status, fileId, handleUpload, fileTooBig };
}

export default useUpload;
