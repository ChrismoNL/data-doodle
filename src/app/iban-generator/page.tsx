"use client";
import { IBAN } from "ibankit";
import { useState } from "react";
import NavBar from "../components/nav/nav-bar";
import { toast } from "react-toastify";

export default function IbanGeneratorPage() {
  const [ibanNumbers, setIbanNumbers] = useState<string[]>([]);

  const GenerateNewIban = () => {
    const newIban = IBAN.random();
    setIbanNumbers([...ibanNumbers, newIban.toString()]);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast("Iban copied to clipboard!");
  };

  return (
    <>
      <NavBar title="IBAN Generator" />
      <main className="flex p-8 mx-auto justify-center flex-col gap-8 w-fit text-center">
        <div className="w-64 flex flex-col gap-4 items-center">
          {ibanNumbers.map((iban, index) => (
            <button
              key={index}
              className="relative w-fit group cursor-pointer flex flex-row gap-2"
              onClick={() => copyToClipboard(iban)}
            >
              <div className="opacity-100 group-hover:opacity-70 text-md">
                {iban}
              </div>
              <svg className="w-4 h-4 opacity-100 group-hover:opacity-70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z" stroke="#ffffff" strokeWidth="1.5"></path> <path d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5" stroke="#ffffff" strokeWidth="1.5"></path> </g></svg>
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-4 w-64">
          <button
            className="p-2 bg-white text-black font-bold text-xl"
            onClick={() => GenerateNewIban()}
          >
            Generate
          </button>
          <button
            className="p-2 bg-white text-black font-bold text-xl"
            onClick={() => setIbanNumbers([])}
          >
            Reset
          </button>
        </div>
      </main>
    </>
  );
}
