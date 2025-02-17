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
     * - auth routes
     * - admin login
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public|login|signup|admin/login).*)",
  ],
  runtime: "nodejs",
};

export async function middleware(request: NextRequest) {
  // Get token from cookie
  const token = request.cookies.get("token")?.value;

  // Check if it's an admin route
  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");

  // If no token, redirect to appropriate login page
  if (!token) {
    const url = request.nextUrl.clone();
    url.pathname = isAdminRoute ? "/admin/login" : "/login";
    return NextResponse.redirect(url);
  }

  // Verify token
  const payload = await verifyToken(token);
  if (!payload) {
    const url = request.nextUrl.clone();
    url.pathname = isAdminRoute ? "/admin/login" : "/login";
    return NextResponse.redirect(url);
  }

  // For admin routes, check if user is admin
  if (isAdminRoute && payload.role !== "ADMIN") {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
