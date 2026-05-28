import { existsSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

const publicDir = fileURLToPath(new URL("../../public/", import.meta.url));

export const resolveOptimizedPublicPath = (originalPath: string) => {
  const cleanPath = originalPath.replace(/^\//, "");
  const baseName = cleanPath.replace(/\.[^.]+$/, "");
  const optimizedPath = `/optimized/${baseName}.webp`;
  const optimizedFsPath = fileURLToPath(
    new URL(`../../public${optimizedPath}`, import.meta.url),
  );

  return existsSync(optimizedFsPath) ? optimizedPath : originalPath;
};

const findPublicFileByPrefix = (prefix: string) => {
  try {
    const match = readdirSync(publicDir).find((file) =>
      file.toLowerCase().startsWith(prefix.toLowerCase()),
    );

    return match ? `/${match}` : undefined;
  } catch {
    return undefined;
  }
};

export const clubInfo = {
  name: "BOXING CLUB COLAK",
  city: "La Louvière",
  region: "Hainaut",
  addressLine: "2, Rue Victor Boch",
  postalCode: "7100",
  country: "Belgique",
  countryCode: "BE",
  addressFull: "2, Rue Victor Boch, 7100 La Louvière, Belgique",
  email: "mirac.colak@outlook.com",
  phoneDisplay: "0487 11 88 77",
  phoneHref: "+32487118877",
  latitude: 50.4601438,
  longitude: 4.1373533,
  siteUrl: "https://www.boxingclubcolak.com",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.483166874987!2d4.1373533!3d50.4601438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s2%20Rue%20Victor%20Boch%2C%207100%20La%20Louvi%C3%A8re%2C%20Belgique!5e0!3m2!1sfr!2sbe!4v1710000000000!5m2!1sfr!2sbe",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=2%20Rue%20Victor%20Boch%2C%207100%20La%20Louvi%C3%A8re",
  googleDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=2%20Rue%20Victor%20Boch%2C%207100%20La%20Louvi%C3%A8re",
  wazeUrl: "https://www.waze.com/ul?ll=50.4601438,4.1373533&navigate=yes",
  areaServed: ["La Louvière", "Binche", "Manage", "Morlanwelz", "Le Roeulx"],
  socialLinks: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/boxing.club.colak/",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100089497443998",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@boxing.club.colak",
    },
  ],
} as const;

export const trainingSchedule = [
  {
    day: "Lundi",
    schemaDay: "Monday",
    slots: [
      { audience: "Compétiteurs, débutants et récréants", time: "18h00 - 20h00", opens: "18:00", closes: "20:00" },
    ],
  },
  {
    day: "Mercredi",
    schemaDay: "Wednesday",
    slots: [
      { audience: "Boxe éducative — enfants", time: "17h00 - 18h00", opens: "17:00", closes: "18:00" },
      { audience: "Boxe féminine", time: "17h00 - 18h00", opens: "17:00", closes: "18:00" },
      { audience: "Compétiteurs, débutants et récréants", time: "18h00 - 20h00", opens: "18:00", closes: "20:00" },
    ],
  },
  {
    day: "Vendredi",
    schemaDay: "Friday",
    slots: [
      { audience: "Boxe éducative — enfants", time: "17h00 - 18h00", opens: "17:00", closes: "18:00" },
      { audience: "Boxe féminine", time: "17h00 - 18h00", opens: "17:00", closes: "18:00" },
      { audience: "Compétiteurs, débutants et récréants", time: "18h00 - 20h00", opens: "18:00", closes: "20:00" },
    ],
  },
] as const;

export const homeHighlights = [
  {
    title: "Débutants bien encadrés",
    text: "Les bases sont posées proprement, sans brûler les étapes.",
  },
  {
    title: "Loisir avec exigence",
    text: "Un vrai rythme de travail pour progresser sans improvisation.",
  },
  {
    title: "Compétition structurée",
    text: "Un suivi adapté pour celles et ceux qui veulent aller plus loin.",
  },
] as const;

export const getHomeAnnouncements = () => {
  return [
    {
      date: "2026-05-18",
      category: "Jeunesse",
      title: "Section jeunesse — Boxe éducative & Psychomotricité",
      excerpt:
        "Le Boxing Club Colak développe sa section jeunesse avec des séances de boxe éducative et psychomotricité, encadrées par des coachs diplômés et boxeurs licenciés à la Ligue Francophone de Boxe.",
      urgent: false,
      details: ["Mercredi 17h00 - 18h00", "Vendredi 17h00 - 18h00"],
      link: {
        href: "/contact?sujet=essai",
        label: "Inscrire mon enfant",
      },
    },
    {
      date: "2026-05-18",
      category: "Féminine",
      title: "Boxe féminine — Ouvert à toutes",
      excerpt:
        "Séances adaptées aux débutantes : cardio, renforcement musculaire et initiation technique à la boxe anglaise. Un cadre bienveillant, progressif et encadré.",
      urgent: false,
      details: ["Mercredi 17h00 - 18h00", "Vendredi 17h00 - 18h00"],
      link: {
        href: "/contact?sujet=essai",
        label: "Réserver une séance",
      },
    },
    {
      date: "2026-05-18",
      category: "Reprise",
      title: "Reprise des entraînements — Lundi 18 mai à 18h00",
      excerpt:
        "La nouvelle salle est prête. On commence fort à l'École Communale du Bocage (Salle de Gym), Rue Victor Boch 2, La Louvière.",
      urgent: true,
      details: ["Lundi 18h00 – 20h00", "Chaussures propres obligatoires", "Cotisation en ordre requise"],
      link: {
        href: "/contact?sujet=essai",
        label: "Rejoindre le club",
      },
    },
    {
      date: "2026-05-10",
      category: "Essai",
      title: "Les séances d'essai se réservent via la page contact",
      excerpt:
        "Les premières venues se préparent à l'avance pour orienter chaque profil vers le bon créneau.",
      urgent: false,
      link: {
        href: "/contact?sujet=essai",
        label: "Réserver une séance d'essai",
      },
    },
  ];
};

export const faqItems = [
  {
    question: "Peut-on commencer la boxe anglaise sans expérience ?",
    answer:
      "Oui. Les débutants sont intégrés dans un cadre clair et progressif.",
  },
  {
    question: "Le club convient-il à une pratique loisir sérieuse ?",
    answer:
      "Oui. La pratique loisir garde un vrai niveau d'exigence.",
  },
  {
    question: "Comment réserver une séance d'essai ?",
    answer:
      "Le plus simple est de passer par le formulaire de contact.",
  },
  {
    question: "Que faut-il prévoir pour un premier cours ?",
    answer:
      "Une tenue de sport, de l'eau et l'envie de travailler sérieusement.",
  },
] as const;

export const contactSubjects = [
  "Séance d'essai gratuite",
  "Inscription (Novice / Loisir)",
  "Inscription (Compétiteur)",
  "Question générale",
  "Partenariat / Presse",
] as const;
