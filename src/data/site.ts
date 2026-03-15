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
  addressLine: "Rue de l'Olive 13A",
  postalCode: "7100",
  country: "Belgique",
  countryCode: "BE",
  addressFull: "Rue de l'Olive 13A, 7100 La Louvière, Belgique",
  email: "mirac.colak@outlook.com",
  phoneDisplay: "0487 11 88 77",
  phoneHref: "+32487118877",
  latitude: 50.4601438,
  longitude: 4.1373533,
  siteUrl: "https://www.boxingclubcolak.com",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.483166874987!2d4.1373533!3d50.4601438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c230554045f8f5%3A0xc6c4f4a3e9c7f6b!2sRue%20de%20l'Olive%2013A%2C%207100%20La%20Louvi%C3%A8re%2C%20Belgique!5e0!3m2!1sfr!2sbe!4v1710000000000!5m2!1sfr!2sbe",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rue%20de%20l%27Olive%2013A%2C%207100%20La%20Louvi%C3%A8re",
  googleDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Rue%20de%20l%27Olive%2013A%2C%207100%20La%20Louvi%C3%A8re",
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
    audience: "Compétiteurs, débutants et récréants",
    time: "18h00 - 20h00",
  },
  {
    day: "Mardi",
    schemaDay: "Tuesday",
    audience: "Débutants et récréants",
    time: "18h00 - 20h00",
  },
  {
    day: "Mercredi",
    schemaDay: "Wednesday",
    audience: "Compétiteurs",
    time: "18h00 - 20h00",
  },
  {
    day: "Jeudi",
    schemaDay: "Thursday",
    audience: "Débutants et récréants",
    time: "18h00 - 20h00",
  },
  {
    day: "Vendredi",
    schemaDay: "Friday",
    audience: "Compétiteurs",
    time: "18h00 - 20h00",
  },
  {
    day: "Samedi",
    schemaDay: "Saturday",
    audience: "Boxe fitness femmes",
    time: "10h00 - 11h00",
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
  const womenFitnessImage = findPublicFileByPrefix("whatsapp");

  return [
    {
      date: "2026-03-14",
      category: "Nouveau",
      title: "Cours de boxe fitness exclusivement pour les femmes",
      excerpt:
        "Nouveau rendez-vous le samedi matin: boxe cardio, renforcement musculaire et boxe technique.",
      urgent: true,
      image: womenFitnessImage
        ? resolveOptimizedPublicPath(womenFitnessImage)
        : undefined,
      imageAlt:
        "Affiche du cours de boxe fitness pour femmes du Boxing Club Colak",
      details: ["Samedi 10h00 - 11h00", "15 EUR la séance", "50 EUR les 5 séances"],
      link: {
        href: "/contact?sujet=fitness-femmes",
        label: "Demander une place",
      },
    },
    {
      date: "2026-03-10",
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
    {
      date: "2026-03-06",
      category: "Organisation",
      title: "Présentez-vous 15 minutes avant votre premier entraînement",
      excerpt:
        "Cela permet de vous orienter et de démarrer dans de bonnes conditions.",
      urgent: false,
      link: {
        href: "/contact",
        label: "Poser une question au coach",
      },
    },
    {
      date: "2026-02-27",
      category: "Planning",
      title: "Les créneaux compétiteurs restent maintenus en milieu et fin de semaine",
      excerpt:
        "Les séances du mercredi et du vendredi restent dédiées au travail compétiteur.",
      urgent: false,
      link: {
        href: "#horaires",
        label: "Voir le planning",
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
  "Cours boxe fitness femmes",
  "Inscription (Novice / Loisir)",
  "Inscription (Compétiteur)",
  "Question générale",
  "Partenariat / Presse",
] as const;
