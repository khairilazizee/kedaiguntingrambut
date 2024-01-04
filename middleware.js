import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req) {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({ req, res })
    // await supabase.auth.getSession();

    const { data: { user } } = await supabase.auth.getUser();

    if (!user && req.nextUrl.pathname.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL('/login', req.url))
    }

    if (user && req.nextUrl.pathname === "/login") {
        return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return res;
}