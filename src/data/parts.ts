// Manager images
import innerCritic from "@/assets/inner-critic.jpg";
import perfectionist from "@/assets/perfectionist.jpg";
import peoplePleaser from "@/assets/people-pleaser.jpg";
import worrier from "@/assets/worrier.jpg";
import controller from "@/assets/controller.jpg";
import striver from "@/assets/striver.jpg";
import planner from "@/assets/planner.jpg";

// Firefighter images
import rageBlaster from "@/assets/rage-blaster.jpg";
import addict from "@/assets/addict.jpg";
import selfHarm from "@/assets/self-harm.jpg";
import dissociator from "@/assets/dissociator.jpg";
import impulsiveShopper from "@/assets/impulsive-shopper.jpg";
import riskySexual from "@/assets/risky-sexual.jpg";
import escapeArtist from "@/assets/escape-artist.jpg";

// Exile images
import shameChild from "@/assets/shame-child.jpg";
import terrifiedChild from "@/assets/terrified-child.jpg";
import lonelyChild from "@/assets/lonely-child.jpg";
import griefPart from "@/assets/grief-part.jpg";
import guiltBearer from "@/assets/guilt-bearer.jpg";
import hurtInfant from "@/assets/hurt-infant.jpg";

export interface Part {
  cat: "manager" | "firefighter" | "exile";
  id: string;
  label: string;
  img: string;
}

export const parts: Part[] = [
  // Managers
  { cat: "manager", id: "inner_critic", label: "Inner Critic / Judge", img: innerCritic },
  { cat: "manager", id: "perfectionist", label: "Perfectionist", img: perfectionist },
  { cat: "manager", id: "people_pleaser", label: "People‑Pleaser", img: peoplePleaser },
  { cat: "manager", id: "worrier", label: "Worrier / Risk‑Manager", img: worrier },
  { cat: "manager", id: "controller", label: "Controller", img: controller },
  { cat: "manager", id: "striver", label: "Striver / Achiever", img: striver },
  { cat: "manager", id: "planner", label: "Planner / Intellectualizer", img: planner },

  // Firefighters
  { cat: "firefighter", id: "anger", label: "Rage‑Blaster", img: rageBlaster },
  { cat: "firefighter", id: "addict", label: "Addict / Binge‑Part", img: addict },
  { cat: "firefighter", id: "self_harm", label: "Self‑Harm", img: selfHarm },
  { cat: "firefighter", id: "dissociator", label: "Dissociator", img: dissociator },
  { cat: "firefighter", id: "impulsive", label: "Impulsive Shopper", img: impulsiveShopper },
  { cat: "firefighter", id: "sexual_risk", label: "Risky Sexual Part", img: riskySexual },
  { cat: "firefighter", id: "escape_artist", label: "Escape Artist", img: escapeArtist },

  // Exiles
  { cat: "exile", id: "shame_child", label: "Shame‑Child", img: shameChild },
  { cat: "exile", id: "terrified_child", label: "Terrified Child", img: terrifiedChild },
  { cat: "exile", id: "lonely_child", label: "Lonely / Abandoned", img: lonelyChild },
  { cat: "exile", id: "grief_part", label: "Grief‑Stricken", img: griefPart },
  { cat: "exile", id: "guilt_bearer", label: "Guilt‑Bearer", img: guiltBearer },
  { cat: "exile", id: "hurt_infant", label: "Hurt / Wounded Infant", img: hurtInfant }
];

export const getCategoryEmoji = (category: Part["cat"]) => {
  switch (category) {
    case "manager": return "🛠️";
    case "firefighter": return "🔥";
    case "exile": return "💔";
  }
};

export const getCategoryTitle = (category: Part["cat"]) => {
  switch (category) {
    case "manager": return "Managers";
    case "firefighter": return "Firefighters";
    case "exile": return "Exiles";
  }
};

export const getCategoryDescription = (category: Part["cat"]) => {
  switch (category) {
    case "manager": return "proactive protectors";
    case "firefighter": return "reactive protectors";
    case "exile": return "vulnerable parts";
  }
};