'use client';
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import { Document, Page, pdfjs } from "react-pdf";
import { Input } from "./ui/input";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Loader2Icon, RotateCw, ZoomInIcon, ZoomOutIcon } from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`



function PDFViewer({ url }: { url: string }) {

    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [file, setFile] = useState<Blob | null>(null);
    const [rotation, setRotation] = useState<number>(0);
    const [scale, setScale] = useState<number>(1);


    useEffect(() => {
        const fetchFile = async () => {
            const response = await fetch(url);
            const file = await response.blob();

            setFile(file);
        }

        fetchFile();

    }, [url])

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }): void => {
        setNumPages(numPages);
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="sticky top-0 z-50 bg-gray-100 p-2 rounded-b-lg">
                <div className="max-w-7xl px-1 grid grid-cols-7 gap-1 text-sm">
                    <Button
                        variant="outline"
                        disabled={pageNumber === 1}
                        onClick={() => {
                            if (pageNumber > 1) {
                                setPageNumber(pageNumber - 1)
                            }
                        }}>
                        Prev
                    </Button>
                    <div>
                        <Input type="number" max={numPages} min={0} placeholder="Skip to" onChange={(e) => setPageNumber(e.target.valueAsNumber)} className="p-2"></Input>
                    </div>
                    <p className="flex items-center justify-center text-sm">{pageNumber} of {numPages}</p>
                    <Button
                        className="text-sm"
                        variant="outline"
                        disabled={pageNumber === numPages}
                        onClick={() => {
                            if (pageNumber < numPages!) {
                                setPageNumber(pageNumber + 1)
                            }
                        }}>Next</Button>

                    <Button variant="outline"
                        onClick={() => setRotation((rotation + 90) % 360)}><RotateCw />
                    </Button>

                    <Button
                        variant="outline"
                        disabled={scale >= 1.7}
                        onClick={() => { setScale(scale * 1.2) }}>
                        <ZoomInIcon />
                    </Button>
                    <Button
                        variant="outline"
                        disabled={scale <= 0.5}
                        onClick={() => { setScale(scale / 1.2) }}>
                        <ZoomOutIcon />
                    </Button>


                </div>
            </div>

            {
                !file ? (
                    <Loader2Icon className="animate-spin h-20 w-20 text-indigo-600 mt-20" />
                ) : (
                    <Document
                        loading={null}
                        file={file}
                        rotate={rotation}
                        onLoadSuccess={onDocumentLoadSuccess}
                        className="m-4 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-300 overflow-y-scroll">
                        <Page
                            className="shadow-lg"
                            scale={scale}
                            pageNumber={pageNumber}
                        />
                    </Document>
                )
            }


        </div >
    )
}

export default PDFViewer