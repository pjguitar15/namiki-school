import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { defaultLocale, isValidLocale } from "./app/constants/i18n";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  const locale =
    firstSegment && isValidLocale(firstSegment) ? firstSegment : defaultLocale;

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-current-locale", locale);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.cookies.set("namiki-language", locale, { path: "/" });
  return response;
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|icon.png|apple-icon.png|robots.txt|sitemap.xml|manifest.webmanifest).*)"],
};
