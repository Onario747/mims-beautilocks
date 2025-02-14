import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "@/lib/auth";

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     * - api routes
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
  runtime: "nodejs",
};

export async function middleware(request: NextRequest) {
  // Get token from cookie
  const token = request.cookies.get("token")?.value;

  // If no token, redirect to login
  if (!token) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Verify token
  const payload = await verifyToken(token);
  if (!payload) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
