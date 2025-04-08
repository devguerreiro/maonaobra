import Link from "next/link";

export default function Header() {
  return (
    <header className="z-10 h-20 bg-card sticky left-0 top-0 flex items-center">
      <div className="container">
        <Link href="/" className="inline-block">
          <h1 className="font-medium text-2xl">
            <span className="border-b-4 border-primary">Mão</span> na{" "}
            <strong className="text-primary">Obra</strong>
          </h1>
        </Link>
      </div>
    </header>
  );
}
