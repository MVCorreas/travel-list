import Image from "next/image";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Form from "./components/Form";
import PackingList from "./components/PackingList";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
     <Header />
     <Form />
     <PackingList />
     <Stats />
    </div>
  );
}
