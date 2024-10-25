import Documents from "@/components/documents";
export const dynamic = "force-dynamic";

function Dashboard() {


  return (
    <div className='max-w-7xl mx-auto'>
      <h1 className='text-3xl p-5 bg-gray-100 font-extralight'>My Documents</h1>

      <Documents />

    </div>
  )
}

export default Dashboard