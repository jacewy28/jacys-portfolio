// import Image from "next/image";
// import Link from "next/link";
import HomePage from "./components/homePage";
import Header from "./components/header";

export default function Home() {
  return (
    <>
    <div className="bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/John_William_Waterhouse_-_La_Belle_Dame_sans_Merci_%281893%29.jpg/960px-John_William_Waterhouse_-_La_Belle_Dame_sans_Merci_%281893%29.jpg')]
     bg-right" style={{height: "100vh"}}>
    <div className="flex flex-row gap-2 justify-left items-center">
    <HomePage />
    </div>
    </div>
    </>
  );
}
