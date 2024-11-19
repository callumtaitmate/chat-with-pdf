import Documents from "@/components/documents";
import SearchForm from "@/components/SearchForm";
export const dynamic = "force-dynamic";

function Dashboard() {


  return (
    <div className='max-w-7xl mx-auto'>
      <h1 className='text-3xl p-5 bg-gray-100 font-extralight'>My Documents</h1>

      <Documents />
      
      <h1 className='text-3xl p-5 font-extralight'>Search Reports</h1>

      <SearchForm />

    </div>
  )
}

export default Dashboard