"use client";
import { CountryCode, IBAN } from "ibankit";
import { useEffect, useState } from "react";
import NavBar from "../components/nav/nav-bar";
import IbanCountrySelector from "../components/inputs/iban-country-selector";
import CopyValueButton from "../components/buttons/copy-value-button";

export default function IbanGeneratorPage() {
  const [ibanNumbers, setIbanNumbers] = useState<string[]>([]);
  const [country, setCountry] = useState<CountryCode | "*">("*");

  const GenerateNewIban = () => {
    let newIban = "";
    try {
      if(country !== "*") {
        newIban = IBAN.random(country).toString();
      } else {
        newIban = IBAN.random().toString();
      }
    } catch (e) {
      console.error(e);
    }

    if (newIban?.length > 0) {
      setIbanNumbers([newIban.toString(), ...ibanNumbers]);
    } else {
      GenerateNewIban();
    }
  };

  const setAndSaveCountry = (country: CountryCode | "*") => {
    setCountry(country);
    localStorage.setItem("iban-country", country);
  };

  useEffect(() => {
    const savedCountry = localStorage.getItem("iban-country");
    if (savedCountry) {
      setCountry(savedCountry as CountryCode);
    }
  }, []);

  return (
    <>
      <NavBar title="IBAN Generator" />
      <main className="flex p-8 mx-auto justify-center flex-row gap-8 w-fit text-center">
        <div className="flex flex-col gap-8 w-fit mx-auto">
          <div className="flex flex-row gap-4 w-fit mx-auto h-fit">
            <button
              className="p-2 bg-white text-black font-bold text-xl w-24"
              onClick={() => GenerateNewIban()}
            >
              Generate
            </button>
            <button
              className="p-2 bg-white text-black font-bold text-xl w-24"
              onClick={() => setIbanNumbers([])}
            >
              Clear
            </button>
          </div>
          <div className="flex flex-col gap-2 text-left">
          <span className="text-white">Country:</span>
          <IbanCountrySelector country={country} setCountry={setAndSaveCountry} />
          </div>
        </div>
        <div className="w-1 bg-white"></div>
        <div className="w-64 flex flex-col gap-8 items-center">
          {ibanNumbers.map((iban) => (
            <div key={iban} className="flex flex-row gap-4">
              <CopyValueButton value={iban} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
