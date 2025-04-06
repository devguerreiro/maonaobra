import { NextRequest, NextResponse } from "next/server";

export type DataEngineer = {
  Token: string;
  Nome: string;
  Contato: string;
};

type Data = {
  data: Array<DataEngineer>;
  currentPage: number;
  totalPage: number;
};

export async function middleware(request: NextRequest) {
  console.log(request);

  const params = request.nextUrl.searchParams;

  const response = await fetch(process.env.GOOGLE_SHEET_ENGINEERS_URL, {
    method: "GET",
  });
  const data = (await response.json()) as Data;

  const token = params.get("token");

  const isAllowed =
    token && data.data.some((engineer) => engineer.Token === token);
  if (!isAllowed)
    return NextResponse.redirect(new URL("/forbidden", request.url));

  return NextResponse.next();
}

export const config = {
  matcher: "/database",
};
