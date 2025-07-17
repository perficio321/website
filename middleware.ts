// export { auth as middleware } from "@/auth"/


import { auth } from "@/auth";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
const protectedRoutes = ["/dashboard", "/settings", "/profile"];


export default async function middleware(request: NextRequest) {
    const session = await auth();
    const adminRoutes = ["/dashboard", "/admin", "/upload-pdf","create-post","edit-post/*","show-contacts"];
    const url = request.nextUrl;
    const isAdmin = session?.user?.role === "ADMIN" || session?.user?.role === "SUPERADMIN";


    const isAdminProtected = adminRoutes.some((route) =>
        request.nextUrl.pathname.startsWith(route)
    );


    if (isAdminProtected) {
        if (!session || !isAdmin) {
            const absoluteUrl = new URL("/sign-in", request.nextUrl.origin);
            return NextResponse.redirect(absoluteUrl.toString());
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}