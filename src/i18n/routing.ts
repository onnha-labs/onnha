import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";
export type Locale = (typeof routing.locales)[number];

export const routing = defineRouting({
  locales: ["en", "th"],
  defaultLocale: "th",
  pathnames: {
    "/": "/",
  },
  localeDetection: true,
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
