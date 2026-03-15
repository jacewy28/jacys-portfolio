// import Image from "next/image";
// import Link from "next/link";
import HomePage from "./components/homePage";
import Header from "./components/header";

export default function Home() {
  return (
    <>

      {/* 'scalable vector graphic' from w3schools */}
      <svg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg' style={{ display: "none" }}>
        <filter id='noiseFilter'>
          <feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch' />
        </filter>
      </svg>

      <div className="relative" style={{ height: "100vh" }}>
        
        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/John_William_Waterhouse_-_La_Belle_Dame_sans_Merci_%281893%29.jpg/960px-John_William_Waterhouse_-_La_Belle_Dame_sans_Merci_%281893%29.jpg')]
          bg-right scale-102"
          style={{ filter: "blur(4px)" }}
        />

        <div className="absolute inset-0 opacity-20"
          style={{ filter: "url(#noiseFilter)" }}
        />

        <div className="relative flex flex-row w-full h-screen">
  
        <div className="w-1/3 flex items-center justify-center">
          <HomePage />
        </div>

        <div className="w-2/3 flex items-center justify-center">
          <h6 style={{ fontSize: '2rem', color: '#fffa67' }}>welcome to my portfolio</h6>
        </div>

      </div>

    </div>
    </>
  );
}
