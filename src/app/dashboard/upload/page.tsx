import FileUploader from '@/components/fileUploader'

export const maxDuration = 30; // This function can run for a maximum of 30 seconds
export const dynamic = 'force-dynamic';

function UploadPage() {

    return (
        <FileUploader />
    )
}

export default UploadPage