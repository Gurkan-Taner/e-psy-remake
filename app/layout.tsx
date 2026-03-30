import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  weight: ["300", "400", "500", "600"],
});

const APP_URL = "https://epsy.gurkan-taner.fr";
const APP_NAME = "E-Psy";
const APP_DESCRIPTION =
  "E-Psy connecte anonymement des personnes qui traversent les mêmes épreuves : anxiété, stress, mal-être, burn-out. Choisissez de parler ou d'écouter — quelqu'un qui comprend est là.";

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: `${APP_NAME} — Parler ou écouter, à deux c'est moins lourd`,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  keywords: [
    "soutien émotionnel en ligne",
    "parler à quelqu'un anonymement",
    "écoute bienveillante gratuite",
    "aide anxiété stress en ligne",
    // Longue traîne — GEO / réponses directe
    "comment parler de mon anxiété à quelqu'un",
    "je me sens seul je veux parler à quelqu'un",
    "trouver quelqu'un qui m'écoute sans me juger",
    "soutien entre pairs santé mentale",
    // Thématiques spécifiques de l'app
    "groupe de parole en ligne",
    "communauté bien-être mental",
    "burn-out soutien entre pairs",
    "mal-être psychologique aide gratuite",
    "plateforme écoute bienveillante",
  ],
  authors: [{ name: APP_NAME, url: APP_URL }],
  creator: APP_NAME,
  publisher: APP_NAME,

  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/",
    },
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: APP_URL,
    siteName: APP_NAME,
    title: `${APP_NAME} - Parler ou écouter, à deux c'est moins lourd`,
    description: APP_DESCRIPTION,
    images: [
      {
        url: "/og-image.png", // 1200×630 px — à créer
        width: 1200,
        height: 630,
        alt: "E-Psy — Plateforme d'écoute et de soutien émotionnel entre pairs",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },

  category: "health",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": `${APP_URL}/#webapp`,
      name: APP_NAME,
      url: APP_URL,
      description: APP_DESCRIPTION,
      applicationCategory: "HealthApplication",
      operatingSystem: "Web, iOS, Android",
      inLanguage: "fr-FR",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
      },
      featureList: [
        "Mise en relation anonyme par thématique émotionnelle",
        "Choix du rôle : parler ou écouter",
        "Thèmes disponibles : anxiété, stress, mal-être, burn-out, solitude, deuil",
        "Sans inscription obligatoire",
        "Disponible 24h/24",
      ],
    },

    {
      "@type": "FAQPage",
      "@id": `${APP_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Comment fonctionne E-Psy ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sur E-Psy, vous choisissez d'abord si vous souhaitez parler ou écouter, puis vous sélectionnez un thème (anxiété, stress, mal-être, burn-out, solitude…). L'application vous met alors en relation anonyme avec une autre personne ayant sélectionné le même thème et le rôle complémentaire.",
          },
        },
        {
          "@type": "Question",
          name: "Est-ce que E-Psy est gratuit ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, E-Psy est entièrement gratuit. L'objectif est de rendre le soutien émotionnel accessible à tous, sans barrière financière.",
          },
        },
        {
          "@type": "Question",
          name: "E-Psy remplace-t-il un psychologue ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Non. E-Psy est une plateforme de soutien entre pairs, pas un service de santé mentale professionnelle. Si vous traversez une crise sévère, consultez un professionnel de santé.",
          },
        },
        {
          "@type": "Question",
          name: "Quels sujets peut-on aborder sur E-Psy ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "E-Psy couvre des thématiques variées : anxiété, stress au travail, mal-être général, burn-out, solitude, deuil, problèmes relationnels, et bien d'autres. Chaque sujet permet une mise en relation ciblée.",
          },
        },
        {
          "@type": "Question",
          name: "Mes données sont-elles protégées sur E-Psy ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "E-Psy est conçu dans le respect de la vie privée. Les échanges sont anonymes et aucune donnée n'est sauvegardée.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${playfair.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
