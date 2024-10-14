'use client';

import { CheckCircleIcon, CircleArrowDown, HammerIcon, RocketIcon, SaveIcon, XIcon } from 'lucide-react'
import React, { useCallback, useEffect } from 'react'
import useUpload, { StatusText } from '@/hooks/useUpload';
import { useDropzone } from 'react-dropzone'
import { useRouter } from 'next/navigation';
import { toast } from './ui/use-toast';



function FileUploader() {


    const { progress, status, fileId, handleUpload, fileTooBig } = useUpload();
    const router = useRouter();

    useEffect(() => {
        if (fileId) {
            router.push(`/dashboard/files/${fileId}`)
        }
    }, [fileId, router])




    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        console.log(acceptedFiles)
        const file = acceptedFiles[0];
        if (file) {
            await handleUpload(file)


        } else {


        }
    }, [handleUpload, toast, fileTooBig])


    const statusIcons: { [key in StatusText]: JSX.Element;

    } = {
        [StatusText.UPLOADING]: (
            <RocketIcon className='h-20 w-20 text-indigo-600' />
        ),

        [StatusText.UPLOADED]: (
            <CheckCircleIcon className='h-20 w-20 text-indigo-600' />
        ),
        [StatusText.SAVING]: (
            <SaveIcon className='h-20 w-20 text-indigo-600' />
        ),

        [StatusText.GENERATING]: (
            <HammerIcon className='h-20 w-20 text-indigo-600' />
        ),
        [StatusText.ERROR]: (
            <XIcon className='h-20 w-20 text-indigo-600' />
        )

    }


    const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept } = useDropzone({
        onDrop,
        maxFiles: 1,
        accept: {
            "application/pdf": [".pdf"]
        }
    })

    const uploadInProgress = progress != null && progress >= 0 && progress <= 100;


    return (
        <div className='flex flex-col gap-4 items-center max-w-7xl mx-auto'>
            {uploadInProgress && (
                <div className='mt-32 flex flex-col justify-center items-center gap-5'>
                    <div className={`radial-progress bg-indio-300 text-white border-indigo-600 border-4 ${progress === 100 && "hidden"}`}
                        role='progressbar'
                        style={{
                            // @ts-ignore
                            "--value": progress,
                            "--size": "12rem",
                            "--thickness": "1.3rem"
                        }
                        }>
                        {
                            // @ts-ignore
                            statusIcons[status!]}

                        {progress}%
                    </div>


                    <p className='text-indigo-600 animate-pulse'>{status}</p>
                </div>
            )}

            {!uploadInProgress && (
                <div {...getRootProps()} className={`p-10 border-2 border-dashed mt-10 w-[90%] rounded-lg h-96  flex items-center justify-center border-indigo-600 text-indigo-600 ${isFocused || isDragAccept ? 'bg-indigo-300' : "bg-indigo-100"}`}>
                    <input {...getInputProps()} />

                    <div className='flex flex-col items-center justify-center'>

                        {
                            isDragActive ? (<>
                                <RocketIcon className='h-10 w-10 animate-ping mb-10' />
                                <p>Drop the files here ...</p></>) : (<>
                                    <CircleArrowDown className='h-10 w-10 animate-bounce mb-10' />
                                    <p>Drag and drop some files here, or click to select files.</p></>)


                        }
                    </div>
                </div>
            )}
        </div>
    )
}

export default FileUploader