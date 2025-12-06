import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "@/app/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";

const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const isThai = locale === "th";
  const localePath = isThai ? "th" : "en";

  const descriptionEn =
    "onnha – AI-powered personal branding builder that helps beginners design their online presence, plan content, and grow an audience with data-driven guidance.";
  const descriptionTh =
    "onnha – แพลตฟอร์มสร้าง Personal Branding ด้วย AI สำหรับผู้เริ่มต้น ช่วยวางตัวตนบนโลกออนไลน์ วางแผนคอนเทนต์ และเติบโตบนโซเชียลอย่างเป็นระบบ";

  const keywordsEn = [
    "onnha",
    "personal branding",
    "personal branding tool",
    "ai personal branding",
    "ai content planner",
    "build online presence",
    "creator tools",
    "creator business",
    "thai creator",
  ];

  const keywordsTh = [
    "onnha",
    "สร้างตัวตนออนไลน์",
    "personal branding",
    "เครื่องมือ personal branding",
    "แพลตฟอร์มสร้างตัวตน",
    "วางแผนคอนเทนต์",
    "คอนเทนต์ครีเอเตอร์",
    "สร้างแบรนด์ส่วนตัว",
    "เริ่มต้นสร้างตัวตน",
  ];

  const description = isThai ? descriptionTh : descriptionEn;
  const keywords = isThai ? keywordsTh : keywordsEn;

  return {
    title: {
      template: "%s - onnha",
      default: "onnha - AI-powered personal branding builder",
    },
    description,
    alternates: {
      canonical: `https://onnha.com/${localePath}`,
      languages: {
        en: "https://onnha.com/en",
        th: "https://onnha.com/th",
      },
    },
    keywords,
    twitter: {
      title: {
        template: "%s - onnha",
        default: "onnha - AI-powered personal branding builder",
      },
      description,
      card: "summary_large_image",
      site: "onnha",
      images: [
        {
          url: "https://onnha.com/og-image.png",
          alt: "onnha open graph image",
          secureUrl: "https://onnha.com/og-image.png",
        },
      ],
    },
    openGraph: {
      type: "website",
      locale: isThai ? "th_TH" : "en_US",
      url: `https://onnha.com/${localePath}`,
      siteName: "onnha",
      title: {
        template: "%s - onnha",
        default: "onnha - AI-powered personal branding builder",
      },
      description,
      images: [
        {
          url: "https://onnha.com/og-image.png",
          alt: "onnha open graph image",
          secureUrl: "https://onnha.com/og-image.png",
          width: 1024,
          height: 1024,
        },
      ],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  setRequestLocale(locale);
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${prompt.className} antialiased`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
