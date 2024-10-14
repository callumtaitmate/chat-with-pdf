import HeroData from "@/components/HeroData";

export default function Home() {
  return (
    <main className="flex-1 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-slate-300 overflow-y-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-indigo-600 h-100">
      <HeroData />
    </main>
  );
}
