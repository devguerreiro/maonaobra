import { Suspense } from "react";

import Loading from "@/components/Loading";

import Workers from "./components/Workers";

export default function Page() {
  return (
    <div className="container py-8 space-y-8">
      <h2 className="text-xl font-medium">Banco de Talentos</h2>
      <Suspense fallback={<Loading />}>
        <Workers />
      </Suspense>
    </div>
  );
}
