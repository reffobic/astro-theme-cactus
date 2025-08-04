export interface DesignProject {
  title: string;
  date: string;
  description: string;
  category: string; // e.g., "Logo Design", "Branding", "UI/UX", "Print", etc.
  images: {
    url: string;
    alt: string;
    thumbnail?: boolean; // If this is the thumbnail to show in the grid
  }[];
  tags?: string[];
  client?: string;
  detailsUrl?: string; // Optional URL to link to for more details
}

export const designProjects: DesignProject[] = [
  {
    title: "Modern Brand Identity",
    date: "Jun 2025",
    description: "A complete brand identity for a tech startup, including logo, color palette, typography, and brand guidelines.",
    category: "Branding",
    images: [
      {
        url: "/images/designs/brand-identity/logo.png",
        alt: "Logo design",
        thumbnail: true
      },
      {
        url: "/images/designs/brand-identity/colors.png",
        alt: "Color palette"
      },
      {
        url: "/images/designs/brand-identity/typography.png",
        alt: "Typography system"
      }
    ],
    tags: ["Logo Design", "Brand Guidelines", "Typography"],
    client: "TechStart Inc."
  },
  {
    title: "Mobile App UI/UX",
    date: "Mar 2025",
    description: "User interface and experience design for a fitness tracking mobile application.",
    category: "UI/UX",
    images: [
      {
        url: "/images/designs/fitness-app/screens.png",
        alt: "Fitness app screens",
        thumbnail: true
      },
      {
        url: "/images/designs/fitness-app/onboarding.png",
        alt: "Onboarding flow"
      }
    ],
    tags: ["Mobile Design", "User Experience", "Prototyping"]
  },
  {
    title: "Event Poster Series",
    date: "Jan 2025",
    description: "A series of posters for a music festival, featuring different artists and themes.",
    category: "Print",
    images: [
      {
        url: "/images/designs/music-festival/poster1.jpg",
        alt: "Music festival poster - Day 1",
        thumbnail: true
      },
      {
        url: "/images/designs/music-festival/poster2.jpg",
        alt: "Music festival poster - Day 2"
      },
      {
        url: "/images/designs/music-festival/poster3.jpg",
        alt: "Music festival poster - Day 3"
      }
    ],
    tags: ["Print Design", "Typography", "Illustration"],
    client: "SoundWave Festival"
  }
];
