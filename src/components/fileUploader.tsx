'use client'
import { CircleArrowDown, RocketIcon } from 'lucide-react'
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
function FileUploader() {

    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Do something with the files
    }, [])
    const { getRootProps, getInputProps, isDragActive, isFocused } = useDropzone({ onDrop })

    return (
        <div className='flex flex-col gap-4 items-center max-w-7xl mx-auto'>

            <div {...getRootProps()} className={`p-10 border-2 border-dashed mt-10 w-[90%] rounded-lg h-96  flex items-center justify-center border-indigo-600 text-indigo-600 ${isFocused || isDragActive ? 'bg-indigo-300' : "bg-indigo-100"}`}>
                <input {...getInputProps()} />

                <div className='flex flex-col items-center justify-center'>

                    {
                        isDragActive ? (<>
                            <RocketIcon className='h-10 w-10 animate-ping mb-10' />
                            <p>Drop the files here ...</p></>) : (<>
                                <CircleArrowDown className='h-10 w-10 animate-bounce mb-10' />
                                <p>Drag n drop some files here, or click to select files</p></>)


                    }
                </div>
            </div>
        </div>
    )
}

export default FileUploader