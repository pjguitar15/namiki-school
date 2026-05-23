import type { LanguageCode } from "./content";

export const locales: LanguageCode[] = ["ja", "en"];
export const defaultLocale: LanguageCode = "ja";

const EXTERNAL_PROTOCOL_PATTERN = /^(?:[a-z][a-z\d+\-.]*:)?\/\//i;

export const isValidLocale = (value: string): value is LanguageCode =>
  locales.includes(value as LanguageCode);

export const getAlternateLocale = (locale: LanguageCode): LanguageCode =>
  locale === "ja" ? "en" : "ja";

export const stripLocaleFromPath = (pathname: string) => {
  const normalizedPath = pathname || "/";

  for (const locale of locales) {
    if (normalizedPath === `/${locale}`) {
      return "/";
    }

    if (normalizedPath.startsWith(`/${locale}/`)) {
      return normalizedPath.slice(locale.length + 1);
    }
  }

  return normalizedPath;
};

export const localizePath = (pathname: string, locale: LanguageCode) => {
  const barePath = stripLocaleFromPath(pathname);

  if (barePath === "/") {
    return `/${locale}`;
  }

  return `/${locale}${barePath}`;
};

export const localizeHref = (href: string, locale: LanguageCode) => {
  if (
    !href ||
    href.startsWith("#") ||
    href.startsWith("?") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    EXTERNAL_PROTOCOL_PATTERN.test(href)
  ) {
    return href;
  }

  const hashIndex = href.indexOf("#");
  const searchIndex = href.indexOf("?");
  const splitIndex =
    hashIndex === -1
      ? searchIndex
      : searchIndex === -1
        ? hashIndex
        : Math.min(hashIndex, searchIndex);

  const pathname = splitIndex === -1 ? href : href.slice(0, splitIndex);
  const suffix = splitIndex === -1 ? "" : href.slice(splitIndex);

  if (!pathname.startsWith("/")) {
    return href;
  }

  return `${localizePath(pathname, locale)}${suffix}`;
};

export const replaceLocaleInPathname = (
  pathname: string,
  locale: LanguageCode,
) => localizePath(stripLocaleFromPath(pathname), locale);
