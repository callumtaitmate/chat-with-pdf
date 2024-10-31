import FileUploader from '@/components/fileUploader'

export const maxDuration = 45; // This function can run for a maximum of 45 seconds
export const dynamic = 'force-dynamic';

function UploadPage() {

    return (
        <FileUploader />
    )
}

export default UploadPage