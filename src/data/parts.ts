import managerExample from "@/assets/manager-example.jpg";
import firefighterExample from "@/assets/firefighter-example.jpg";
import exileExample from "@/assets/exile-example.jpg";

export interface Part {
  cat: "manager" | "firefighter" | "exile";
  id: string;
  label: string;
  img: string;
}

export const parts: Part[] = [
  // Managers
  { cat: "manager", id: "inner_critic", label: "Inner Critic / Judge", img: managerExample },
  { cat: "manager", id: "perfectionist", label: "Perfectionist", img: managerExample },
  { cat: "manager", id: "people_pleaser", label: "People‑Pleaser", img: managerExample },
  { cat: "manager", id: "worrier", label: "Worrier / Risk‑Manager", img: managerExample },
  { cat: "manager", id: "controller", label: "Controller", img: managerExample },
  { cat: "manager", id: "striver", label: "Striver / Achiever", img: managerExample },
  { cat: "manager", id: "planner", label: "Planner / Intellectualizer", img: managerExample },

  // Firefighters
  { cat: "firefighter", id: "anger", label: "Rage‑Blaster", img: firefighterExample },
  { cat: "firefighter", id: "addict", label: "Addict / Binge‑Part", img: firefighterExample },
  { cat: "firefighter", id: "self_harm", label: "Self‑Harm", img: firefighterExample },
  { cat: "firefighter", id: "dissociator", label: "Dissociator", img: firefighterExample },
  { cat: "firefighter", id: "impulsive", label: "Impulsive Shopper", img: firefighterExample },
  { cat: "firefighter", id: "sexual_risk", label: "Risky Sexual Part", img: firefighterExample },
  { cat: "firefighter", id: "escape_artist", label: "Escape Artist", img: firefighterExample },

  // Exiles
  { cat: "exile", id: "shame_child", label: "Shame‑Child", img: exileExample },
  { cat: "exile", id: "terrified_child", label: "Terrified Child", img: exileExample },
  { cat: "exile", id: "lonely_child", label: "Lonely / Abandoned", img: exileExample },
  { cat: "exile", id: "grief_part", label: "Grief‑Stricken", img: exileExample },
  { cat: "exile", id: "guilt_bearer", label: "Guilt‑Bearer", img: exileExample },
  { cat: "exile", id: "hurt_infant", label: "Hurt / Wounded Infant", img: exileExample }
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