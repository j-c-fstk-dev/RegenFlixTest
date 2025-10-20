import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('sb:token');

  const protectedRoutes = ['/home', '/cursos', '/perfil', '/assistir'];
  const adminRoutes = ['/admin'];

  const isProtectedRoute = protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route));
  const isAdminRoute = adminRoutes.some(route => req.nextUrl.pathname.startsWith(route));

  if (!token && (isProtectedRoute || isAdminRoute)) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  if (isAdminRoute) {
    // In a real application, you would need to verify the user's role here.
    // For now, we will just redirect if there is no token.
    if (!token) {
      return NextResponse.redirect(new URL('/home', req.url));
    }
  }

  return NextResponse.next();
}
