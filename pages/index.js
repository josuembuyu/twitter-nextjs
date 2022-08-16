import Head from "next/head";
import Image from "next/image";
import Sidebar from "../componets/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        {/* Feed */}
        {/* Widgets */}

        {/* Modal */}
      </main>
    </div>
  );
}
