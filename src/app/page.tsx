import HeroData from "@/components/HeroData";

export default function Home() {
  return (
    <main className="flex-1 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-slate-300 overflow-y-auto">
      <HeroData />
    </main>
  );
}
