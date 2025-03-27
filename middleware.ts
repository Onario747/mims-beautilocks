// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { verifyToken } from "@/lib/auth";

// // Define protected routes that require authentication
// const protectedRoutes = ["/cart", "/account", "/orders", "/wishlist"];
// const adminRoutes = ["/admin"];
// const authRoutes = ["/login", "/signup", "/admin/login"];

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except:
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      * - public folder
//      * - api routes
//      */
//     "/((?!_next/static|_next/image|favicon.ico|public|api).*)",
//   ],
// };

// export async function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   // Check if the current path is a protected route
//   const isProtectedRoute = protectedRoutes.some((path) =>
//     pathname.startsWith(path)
//   );
//   const isAdminRoute = adminRoutes.some((path) => pathname.startsWith(path));
//   const isAuthRoute = authRoutes.some((path) => pathname === path);

//   // If it's not a protected route or admin route, allow access
//   if (!isProtectedRoute && !isAdminRoute) {
//     return NextResponse.next();
//   }

//   // Get token from cookie
//   const token = request.cookies.get("token")?.value;

//   // For auth routes (login/signup), if user is already logged in, redirect to home
//   if (isAuthRoute && token) {
//     const payload = await verifyToken(token);
//     if (payload) {
//       // If trying to access admin login and user is admin, redirect to admin dashboard
//       if (pathname === "/admin/login" && payload.role === "ADMIN") {
//         return NextResponse.redirect(new URL("/admin", request.url));
//       }
//       // For other auth routes, redirect to home
//       return NextResponse.redirect(new URL("/", request.url));
//     }
//   }

//   // If no token and trying to access protected route, redirect to login
//   if (!token && isProtectedRoute) {
//     const url = new URL("/login", request.url);
//     url.searchParams.set("callbackUrl", pathname);
//     return NextResponse.redirect(url);
//   }

//   // If no token and trying to access admin route (except login), redirect to admin login
//   if (!token && isAdminRoute && !isAuthRoute) {
//     return NextResponse.redirect(new URL("/admin/login", request.url));
//   }

//   // Verify token for protected routes
//   if (token) {
//     const payload = await verifyToken(token);
//     if (!payload) {
//       // Token is invalid, redirect to login
//       return NextResponse.redirect(new URL("/login", request.url));
//     }

//     // Check admin routes access
//     if (isAdminRoute && payload.role !== "ADMIN") {
//       return NextResponse.redirect(new URL("/", request.url));
//     }
//   }

//   return NextResponse.next();
// }

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

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
    "/((?!_next/static|_next/image|favicon.ico|public|api).*)",
  ],
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow only the homepage ("/")
  if (pathname !== "/") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
