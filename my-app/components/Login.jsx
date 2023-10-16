"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className=" ">
      <img src="/img/front.gif" alt="front" className="h-screen w-screen" />

      <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex animate-pulse items-end justify-center">
        <button
          onClick={() => signIn()}
          className="md:text-4xl py-10 text-2xl text-white hover:text-teal-300 font-bold"
        >
          Click To See The App
        </button>
      </div>
    </div>
  );
}
