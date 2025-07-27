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
  description: string;
}

export const parts: Part[] = [
  // Managers
  {
    cat: "manager",
    id: "inner_critic",
    label: "Inner Critic",
    img: innerCritic,
    description: "The Inner Critic is the harsh internal voice that points out flaws, mistakes, and shortcomings. This part believes that by criticizing you first, it can prevent others from rejecting or hurting you. It's trying to help you improve and avoid the pain of external criticism.\n\nThe Inner Critic often sounds like disapproving parents, teachers, or peers from your past. While its intentions are protective, its methods can be damaging, leading to low self-esteem, perfectionism, and self-sabotage. This part fears that without its vigilant criticism, you'll become lazy, arrogant, or make terrible mistakes.\n\nWhen the Inner Critic is healed and not driving the system, it can offer valuable feedback and self-reflection without the harsh judgment. It can become an inner mentor that encourages growth and learning with compassion rather than criticism."
  },
  {
    cat: "manager",
    id: "perfectionist",
    label: "Perfectionist",
    img: perfectionist,
    description: "The Perfectionist is the part of you that believes everything must be flawless to be acceptable. This part works tirelessly to prevent mistakes, criticism, or failure by setting impossibly high standards. It often developed early in life as a way to gain approval or avoid rejection.\n\nThis part can be both a tremendous asset and a source of suffering. While it drives excellence and attention to detail, it can also create paralysis, self-criticism, and burnout. The Perfectionist fears that if things aren't perfect, something terrible will happen—rejection, abandonment, or proof of unworthiness.\n\nWhen this part is balanced and not in exile, it contributes valuable qualities like conscientiousness, quality control, and integrity. Learning to appreciate this part while helping it relax its grip can lead to sustainable excellence without the crushing pressure."
  },
  {
    cat: "manager",
    id: "people_pleaser",
    label: "People Pleaser",
    img: peoplePleaser,
    description: "The People Pleaser is the part that prioritizes others' needs, feelings, and approval above your own. This part learned early that being liked and avoiding conflict were essential for safety and belonging. It's hypervigilant about others' moods and works hard to keep everyone happy.\n\nWhile this part brings gifts of empathy, consideration, and harmony-building, it can also lead to resentment, exhaustion, and loss of authentic self-expression. The People Pleaser often fears that saying 'no' or expressing authentic needs will result in abandonment or rejection.\n\nThis part holds valuable qualities like compassion and social awareness. When it doesn't feel it has to carry the entire burden of maintaining relationships, it can contribute to genuine connection and mutual care rather than one-sided caretaking."
  },
  {
    cat: "manager",
    id: "worrier",
    label: "Worrier",
    img: worrier,
    description: "The Worrier is the part that anticipates potential problems, dangers, and worst-case scenarios. This part believes that by thinking through every possible threat, it can prevent bad things from happening or at least prepare you for them. It's constantly scanning for danger and planning contingencies.\n\nWhile this part can help with genuine preparation and risk assessment, it can also create anxiety, sleepless nights, and paralysis. The Worrier often catastrophizes and imagines scenarios that are unlikely to occur. It fears that if it stops worrying, something terrible will happen that it could have prevented.\n\nThis part carries valuable gifts of foresight, preparedness, and protective care. When it's not overwhelmed by the job of preventing all possible harm, it can contribute reasonable caution and planning without the exhausting mental loops of constant worry."
  },
  {
    cat: "manager",
    id: "controller",
    label: "Controller",
    img: controller,
    description: "The Controller is the part that tries to manage outcomes, other people, and circumstances to create safety and predictability. This part often developed in response to chaos, unpredictability, or powerlessness. It believes that if it can just control enough variables, nothing bad will happen.\n\nThis part can manifest as micromanaging, overthinking, difficulty delegating, or trying to control others' emotions and reactions. While it seeks to protect you, it can create tension in relationships and anxiety when things don't go according to plan.\n\nThe Controller carries important qualities like leadership, planning abilities, and protective instincts. When this part learns to trust that you can handle uncertainty and that others can be responsible for themselves, it can contribute valuable organizational skills without the exhausting burden of trying to control everything."
  },
  {
    cat: "manager",
    id: "achiever",
    label: "Achiever",
    img: striver,
    description: "The Achiever is the ambitious part that pushes you toward achievement, success, and recognition. This part learned that worth comes through accomplishment and that love and acceptance must be earned through performance. It's always reaching for the next goal, promotion, or milestone.\n\nThe Striver can drive impressive achievements and provides motivation and determination. However, it can also create workaholism, burnout, and a sense that you're never enough unless you're constantly achieving. This part fears that if you stop striving, you'll become lazy, unsuccessful, or unworthy of love.\n\nWhen balanced, this part contributes valuable qualities like ambition, persistence, and goal-orientation. It can help you achieve meaningful objectives without the compulsive need to prove your worth through constant achievement."
  },
  {
    cat: "manager",
    id: "intellectualizer",
    label: "Intellectualizer",
    img: planner,
    description: "The Intellectualizer is the organized part that creates structure, schedules, and systems to ensure everything runs smoothly. This part values efficiency, preparation, and having a clear roadmap for the future. It often developed to create predictability in an unpredictable world.\n\nWhile this part brings valuable organizational skills and helps achieve goals, it can become rigid and anxious when plans don't work out. The Planner might struggle with spontaneity and can become overwhelmed when faced with too many variables or unexpected changes.\n\nThis part carries gifts of organization, strategic thinking, and practical wisdom. When it doesn't feel solely responsible for preventing chaos, it can contribute excellent planning abilities while remaining flexible and adaptive to life's inevitable surprises."
  },

  // Firefighters
  {
    cat: "firefighter",
    id: "rage_blaster",
    label: "Rage Blaster",
    img: rageBlaster,
    description: "The Rage Blaster is the part that explodes with anger when triggered, often disproportionately to the current situation. This part developed to protect vulnerable exile parts from further harm. It believes that if it's fierce and intimidating enough, it can stop threats and defend against hurt.\n\nThis part often carries unexpressed anger from past wounds and injustices. While its protective intent is valuable, its methods can damage relationships and create more problems. The Rage Blaster fears that without its fierce protection, you'll be hurt, taken advantage of, or disrespected.\n\nWhen this part is witnessed and understood, it can become a powerful force for healthy boundaries and standing up for yourself and others. Its protective energy can be channeled into appropriate assertiveness and advocacy rather than explosive reactivity."
  },
  {
    cat: "firefighter",
    id: "addict",
    label: "Addict",
    img: addict,
    description: "The Addict is the part that turns to substances, behaviors, or activities for relief from emotional pain. This part developed as a survival mechanism to cope with overwhelming feelings, trauma, or unbearable life circumstances. It seeks immediate relief and escape from suffering.\n\nWhile this part's methods may be destructive, its intentions are protective—it's trying to help you survive and find some relief from pain. The Addict fears that without its coping mechanisms, the pain will be unbearable or that you won't be able to function.\n\nThis part carries the wisdom of knowing when you need comfort and relief. When healed and no longer desperate, it can guide you toward healthy forms of pleasure, relaxation, and self-soothing that truly nourish rather than harm."
  },
  {
    cat: "firefighter",
    id: "self_harm",
    label: "Self‑Harm",
    img: selfHarm,
    description: "The Self-Harm Part turns pain inward through physical or emotional self-injury. This part often developed as a way to cope with overwhelming emotions, to feel something when numb, or to express pain that couldn't be communicated otherwise. It might cut, burn, or engage in other forms of self-punishment.\n\nWhile this part's methods are concerning, it's trying to help in the only way it knows how. It might be attempting to release emotional pressure, create a sense of control, or express anger that can't be directed elsewhere. This part often carries tremendous pain and needs gentle understanding.\n\nWhen witnessed with compassion and given alternative ways to express and release pain, this part can transform its destructive energy into powerful creativity, advocacy, or healing work. It carries deep sensitivity and the ability to understand suffering."
  },
  {
    cat: "firefighter",
    id: "dissociator",
    label: "Dissociator",
    img: dissociator,
    description: "The Dissociator is the part that disconnects from present reality when situations become overwhelming. This part learned to 'leave' mentally or emotionally as a survival mechanism, often in response to trauma, stress, or unbearable circumstances. It can create a sense of watching life from outside yourself.\n\nThis part might cause you to feel spacey, disconnected, or like you're living in a fog. While dissociation can be protective in extreme situations, it can also interfere with daily life, relationships, and emotional processing when used chronically.\n\nThe Dissociator carries important survival wisdom and the ability to transcend immediate circumstances when necessary. When it feels safe to be present, this part can contribute valuable perspective-taking abilities and the capacity for profound inner awareness."
  },
  {
    cat: "firefighter",
    id: "impulsive",
    label: "Impulsive Shopper",
    img: impulsiveShopper,
    description: "The Impulsive Shopper is the part that seeks immediate gratification and emotional relief through purchasing. This part might buy things to feel better, fill an emotional void, or gain a temporary sense of control and empowerment. Shopping becomes a way to self-soothe and avoid difficult feelings.\n\nWhile this part seeks comfort and pleasure, its methods can create financial stress and clutter. The Impulsive Shopper often regrets purchases later but feels compelled in the moment. It fears that without this outlet, there will be no way to feel better or treat yourself.\n\nThis part knows the value of treating yourself well and seeking beauty and comfort. When healed, it can guide healthy self-care and mindful consumption that truly enhances your life rather than providing temporary emotional band-aids."
  },
  {
    cat: "firefighter",
    id: "risky_lover",
    label: "Risky Lover",
    img: riskySexual,
    description: "The Risky Lover engages in sexual behaviors that may be dangerous, inappropriate, or compulsive. This part often carries wounds related to sexuality, intimacy, or personal boundaries. It might seek validation, power, or escape through sexual encounters or behaviors.\n\nThis part may have learned that sexual attention was the only way to feel valued or desired, or it might be attempting to reclaim power after sexual trauma. While its methods can be harmful, this part is often trying to meet legitimate needs for connection, pleasure, or autonomy.\n\nWhen healed and integrated, this part can contribute to healthy sexuality, appropriate intimacy, and the ability to experience pleasure without shame or compulsion. It carries wisdom about desire, passion, and the importance of human connection."
  },
  {
    cat: "firefighter",
    id: "escape_artist",
    label: "Escape Artist",
    img: escapeArtist,
    description: "The Escape Artist is the part that finds ways to avoid difficult emotions, situations, or responsibilities. This part might use distraction, procrastination, fantasy, or literal escape to avoid what feels overwhelming. It developed to protect you from experiences that seemed too much to handle.\n\nThis part can manifest through endless scrolling, binge-watching, daydreaming, or simply 'checking out' mentally when things get intense. While it provides temporary relief, it can also prevent you from engaging with important aspects of life and processing necessary emotions.\n\nThe Escape Artist carries valuable creativity and the ability to find respite when truly needed. When it's not running the show out of fear, it can contribute healthy forms of recreation, imagination, and knowing when legitimate breaks are needed."
  },

  // Exiles
  {
    cat: "exile",
    id: "shame_child",
    label: "Shame Child",
    img: shameChild,
    description: "The Shame Child is the part that carries deep feelings of being fundamentally flawed, bad, or wrong. This part might have received messages that it was too much, not enough, or somehow defective. It believes that if people really knew it, they would reject or abandon it.\n\nThis part often hides and feels enormous fear about being seen or known. It might sabotage relationships or opportunities because it believes it doesn't deserve good things. The Shame Child fears that its core defectiveness will be discovered and confirmed.\n\nWhen this part receives consistent messages of unconditional worth and belonging, it can transform shame into humility and self-acceptance. It carries the gift of deep authenticity and the ability to connect with others who struggle with feelings of unworthiness."
  },
  {
    cat: "exile",
    id: "terrified_child",
    label: "Terrified Child",
    img: terrifiedChild,
    description: "The Terrified Child is the part that lives in constant fear and hypervigilance. This part might have experienced trauma, violence, or chronic threat and remains stuck in that state of terror. It sees danger everywhere and expects the worst to happen at any moment.\n\nThis part can cause anxiety, panic attacks, and difficulty feeling safe even in objectively safe situations. It needs enormous patience and gentle reassurance to begin trusting that the danger has passed. The Terrified Child fears that letting down its guard will result in terrible harm.\n\nWhen this part begins to feel genuinely safe and protected, it can become incredibly brave and resilient. It carries wisdom about real danger and the capacity to help others who are afraid. Its hypervigilance can transform into healthy intuition and protective instincts."
  },
  {
    cat: "exile",
    id: "lonely_child",
    label: "Lonely Child",
    img: lonelyChild,
    description: "The Lonely Child is the part that carries feelings of isolation, abandonment, and longing for connection. This part might have experienced emotional or physical abandonment early in life and still carries that wound. It desperately wants to be seen, understood, and included.\n\nThis part often feels invisible or forgotten and might act out in ways that seek attention or connection. It carries deep sadness about being alone and fears that it's fundamentally unlovable or destined to be isolated. The Lonely Child needs reassurance that it's worthy of love and belonging.\n\nWhen this part is witnessed and comforted, it brings gifts of empathy, sensitivity to others who are isolated, and a deep appreciation for authentic connection. It can guide you toward meaningful relationships and help you recognize when others are struggling with loneliness."
  },
  {
    cat: "exile",
    id: "grief_stricken",
    label: "Grief-Stricken",
    img: griefPart,
    description: "The Grief-Stricken Part holds all the losses, disappointments, and heartbreaks that haven't been fully processed or honored. This part might carry sadness about lost relationships, missed opportunities, childhood that was lost, or dreams that died. It needs to mourn what was lost.\n\nThis part can feel overwhelmingly sad and might be avoided by other parts that fear being consumed by grief. The Grief Part fears that if it starts crying, it might never stop, or that its sadness will drive others away. It needs permission to feel and express its pain.\n\nWhen this part is allowed to grieve fully and is companioned through its losses, it can become a source of deep compassion, wisdom, and appreciation for life's preciousness. It helps you love more fully by understanding the reality of loss and impermanence."
  },
  {
    cat: "exile",
    id: "guilt_bearer",
    label: "Guilt Bearer",
    img: guiltBearer,
    description: "The Guilt Bearer is the part that carries responsibility for things that went wrong, often taking on blame that isn't actually yours to carry. This part might feel guilty about family problems, others' emotions, or traumatic events it couldn't control. It believes it's responsible for others' pain.\n\nThis part can create chronic self-blame and the feeling that you're always doing something wrong. It might have taken on guilt to make sense of chaotic or harmful situations, believing that if it was its fault, then it had some control. The Guilt Bearer fears that if it stops taking responsibility, terrible things will happen.\n\nWhen this part learns to distinguish between appropriate responsibility and misplaced guilt, it can become a source of healthy accountability and moral wisdom. It carries valuable sensitivity to ethics and the impact of actions on others."
  },
  {
    cat: "exile",
    id: "hurt_infant",
    label: "Hurt Infant",
    img: hurtInfant,
    description: "The Hurt Infant is the most vulnerable part that carries very early wounds and needs. This part might have experienced neglect, trauma, or inadequate care in the earliest years of life. It holds primal fears about survival, safety, and having its basic needs met.\n\nThis part can feel incredibly raw and vulnerable, often triggering protective parts to work overtime to keep it safe. The Hurt Infant needs gentle care, consistent reassurance, and patient healing. It might not even have words for its pain—just feelings and body sensations.\n\nWhen held with tenderness and given the care it needed but didn't receive, this part can become a source of wonder, innocence, and pure love. It carries the capacity for joy, trust, and the ability to receive care without defensiveness."
  }
];

export const getCategoryEmoji = (category: Part["cat"]) => {
  switch (category) {
    case "manager": return "🛡️";
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
