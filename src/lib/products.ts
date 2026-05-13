export type Product = {
  id: string;
  name: string;
  model: string;
  category: string;
  watt: string;
  image: string;
  description: string;
};

import ap1010 from "@/assets/products/ap1010-wave.jpeg";
import ap9045 from "@/assets/products/ap9045-cob.jpeg";
import ap1004 from "@/assets/products/ap1004-deepdown.jpeg";
import ap2062 from "@/assets/products/ap2062-cob.jpeg";
import sconce from "@/assets/products/wall-sconce-bedroom.jpeg";
import panel3in1 from "@/assets/products/3in1-panel.jpeg";
import fab621 from "@/assets/products/fab621-classic-cob.jpeg";
import cylinder from "@/assets/products/cob-surface-cylinder.jpeg";
import ap3605 from "@/assets/products/ap3605-outdoor-wall.jpeg";
import ap5002 from "@/assets/products/ap5002-wardrobe.jpeg";

export const PRODUCTS: Product[] = [
  {
    id: "ap1010",
    name: "Wave Outdoor Wall Light",
    model: "AP1010",
    category: "Outdoor Lights",
    watt: "12W",
    image: ap1010,
    description: "Sculptural wave-form facade light for stone and feature walls.",
  },
  {
    id: "ap9045",
    name: "Premium COB Spotlight",
    model: "AP9045",
    category: "COB Lights",
    watt: "45W",
    image: ap9045,
    description: "High-output COB downlight for showrooms and feature lighting.",
  },
  {
    id: "ap1004",
    name: "Deepdown Panel LED",
    model: "AP1004",
    category: "Panel Lights",
    watt: "12W / 18W",
    image: ap1004,
    description: "Deep-recessed 3CCT panel light. Black or white housing.",
  },
  {
    id: "ap2062",
    name: "Anti-Glare COB Downlight",
    model: "AP2062",
    category: "COB Lights",
    watt: "7W",
    image: ap2062,
    description: "Copper reflector COB for low-glare residential ceilings.",
  },
  {
    id: "sconce",
    name: "Designer Wall Sconce",
    model: "BLS-WS01",
    category: "Wall Lights",
    watt: "9W",
    image: sconce,
    description: "Mesh-pattern brass wall sconce for bedside ambient light.",
  },
  {
    id: "3in1",
    name: "3-in-1 Deepdown Panel",
    model: "AP1004-3CCT",
    category: "Smart Lights",
    watt: "12W & 18W",
    image: panel3in1,
    description: "Toggle between White, Warm White & Natural White via switch.",
  },
  {
    id: "fab621",
    name: "Classic COB Light",
    model: "FAB-621",
    category: "COB Lights",
    watt: "3W – 50W",
    image: fab621,
    description: "Glare-free recessed COB. Perfect for showrooms, offices, homes.",
  },
  {
    id: "cylinder",
    name: "COB Surface Cylinder",
    model: "BLS-CYL",
    category: "Track Lights",
    watt: "12W",
    image: cylinder,
    description: "Surface-mounted cylinder spotlights — round and square.",
  },
  {
    id: "ap3605",
    name: "Outdoor Wall Light SQ",
    model: "AP3605-SQ",
    category: "Outdoor Lights",
    watt: "5W / WW",
    image: ap3605,
    description: "Weather-rated up/down outdoor sconce for facades and gates.",
  },
  {
    id: "ap5002",
    name: "Rechargeable Wardrobe Bar",
    model: "AP5002",
    category: "Decorative Lights",
    watt: "2W / 4W",
    image: ap5002,
    description: "Motion-sensor rechargeable LED bar for wardrobes & cabinets.",
  },
];

export const CATEGORIES = [
  "All",
  "COB Lights",
  "Panel Lights",
  "Profile Lights",
  "Pendant Lights",
  "Track Lights",
  "Outdoor Lights",
  "Wall Lights",
  "Decorative Lights",
  "Smart Lights",
] as const;
