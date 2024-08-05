import Sidebar from "@/components/Sidebar";
import Image from "next/image"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = {firstName: "Priyanshu", lastName:"Paul"};

  return (
   <main className="flex h-screen w-full font-inter">
    <Sidebar user={loggedIn}/>

    <div className="flex size-full flex-col">
      <div className="root-layout">
        <Image 
        src="/icons/logo.svg"
        width={34}
        height={34}
        alt="menu"
        />
        <div></div>
      </div> 
    </div>
    {children}
   </main>
  );
}
