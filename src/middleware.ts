import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  console.log(params);
  return NextResponse.next();
}

export const config = {
  matcher: ["/database"],
};
