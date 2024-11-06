'use client';
import { useRouter } from "next/navigation";
import { filesize } from "filesize";
import useSubscription from "@/hooks/useSubscription"
import { useTransition } from "react";
import { DownloadCloudIcon, TrashIcon, Loader2Icon } from "lucide-react";
import { Button } from "./ui/button";
import { deleteDocument } from "@/actions/deleteDocument";

function Document({ id, name, size, downloadUrl }:
    {
        id: string;
        name: string;
        size: number;
        downloadUrl: string;
    }
) {
    const { hasActiveMembership } = useSubscription();
    const [isDeleting, startTransition] = useTransition();
    const router = useRouter();




    return (
        <div className="flex flex-col w-64 h-80 rounded-xl bg-white drop-shadow-md justify-between p-4 transition-all transform hover:scale-105 hover:bg-indigo-600 hover:text-white cursor-pointer group">
            <div onClick={() => { router.push(`/dashboard/files/${id}`) }}
                className="flex-1">
                <p className="font-semibold line-clamp-2">{name}</p>
                <p className="text-sm text-gray-500 group-hover:text-indigo-100">{filesize(size)}</p>
            </div>



            {isDeleting ? (<div className="flex"><Loader2Icon className="animate-spin text-red-500" /><p className="text-red-500 ml-2">Deleting</p></div>) : (<div className="flex space-x-2 justify-end">
                <Button variant="outline"
                    disabled={isDeleting || !hasActiveMembership}
                    onClick={() => {
                        const prompt = window.confirm("Are you sure you want to delete this document?");
                        if (prompt) {
                            //delete document
                            startTransition(async () => {
                                await deleteDocument(id);
                            })
                        }
                    }}>
                    <TrashIcon className="h-6 w-6 text-red-500" />
                    {!hasActiveMembership && (
                        <span className="text-red-500 ml-2">Pro Feature</span>
                    )}


                </Button>
                <Button variant="outline" asChild>
                    <a href={downloadUrl} download>
                        <DownloadCloudIcon className="h-6 w-6 text-indigo-600" />
                    </a>
                </Button>
            </div>)}
        </div>
    )
}

export default Document