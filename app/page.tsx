import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <><div className="flex flex-row gap-4">
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/projects">Projects</Link>
    </div><div className="flex flex-col gap-4 mt-4">
        <h1>Hello</h1>
        <p>This is a paragraph.</p>
        <img src="/file.svg" alt="logo" width={30}></img>
      </div></>
  );
}
