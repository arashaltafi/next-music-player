import Main from "@/components/Main";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-slate-900 border-x-[1px] border-solid border-slate-700/50 flex">
      <SideBar />
      <Main />
    </main>
  );
}
