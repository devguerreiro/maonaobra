import { NextRequest, NextResponse } from "next/server";

import { getEngineers } from "./app/appwrite";

export async function middleware(request: NextRequest) {
  const params = request.nextUrl.searchParams;

  const engineers = await getEngineers();

  const token = params.get("token");

  const isAllowed =
    token && engineers.some((engineer) => engineer.token === token);
  if (!isAllowed)
    return NextResponse.redirect(new URL("/forbidden", request.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/database"],
};
