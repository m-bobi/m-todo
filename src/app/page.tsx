import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center">
        <Link
          href={"#"}
          className="text-1xl font-medium px-4 py-2 rounded hover:bg-slate-100 outline-none  md:block lg:block hidden"
        >
          Lists
        </Link>
        <h1 className="text-3xl font-extrabold">TODO</h1>
        <Link
          href={"#"}
          className="text-1xl font-medium px-4 py-2 rounded hover:bg-slate-100 outline-none  md:block lg:block hidden"
        >
          Settings
        </Link>
        <Link href={"#"} className="md:hidden lg:hidden block">
          <Image
            src={"assets/menu.svg"}
            width={30}
            height={30}
            alt={"menu"}
          ></Image>
        </Link>
      </header>
      <hr className="w-auto" />
    </>
  );
}
