import NavBar from "./components/nav/nav-bar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex p-24">
        <div className="flex flex-col gap-8 w-fit mx-auto">
          <a
            href="/iban-generator"
            className="p-2 bg-white text-black font-bold text-xl"
          >
            IBAN Generator
          </a>
        </div>
      </main>
    </>
  );
}
