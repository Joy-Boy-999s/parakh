export type NavLink = {
    label: string;
    href: string;
};

export type InfoCard = {
    title: string;
    description: string;
};

export type Step = {
    number: string;
    title: string;
    description: string;
};

export type Feature = {
    title: string;
    description: string;
    tags: string[];
};

export const navLinks: NavLink[] = [
    { label: "Why PARAKH ITMS", href: "#problem" },
    { label: "7-Step Compliance", href: "#compliance" },
    { label: "Features", href: "#features" },
    { label: "Contact", href: "#contact" },
];

export const trustItems: string[] = [
    "PARAKH Guidelines Compliant",
    "NEP 2020 Aligned",
    "16 Languages",
    "Board-Ready Deployment",
];

export const problemCards: InfoCard[] = [
    {
        title: "Inconsistent Distribution of Marks",
        description:
            "Marks often miss the real cognitive demand of content, which reduces assessment validity.",
    },
    {
        title: "Uneven Allocation Across Question Types",
        description:
            "Objective, short-answer, and long-answer questions are not balanced by blueprint goals.",
    },
    {
        title: "No Blueprint-First Design",
        description:
            "Without structured blueprints, equivalence across papers and boards becomes difficult to sustain.",
    },
];

export const frameworkSteps: Step[] = [
    {
        number: "01",
        title: "Assessment Design",
        description: "Define weightage by abilities, content, question type, and estimated difficulty.",
    },
    {
        number: "02",
        title: "Assessment Blueprint",
        description: "Create chapter x ability mapping with section-level marks and constraints.",
    },
    {
        number: "03",
        title: "Question Authoring",
        description: "Write competency-mapped questions with multilingual support and metadata.",
    },
    {
        number: "04",
        title: "Paper Assembly",
        description: "Generate papers through AI or manual selection while respecting blueprint logic.",
    },
    {
        number: "05",
        title: "Scoring Key",
        description: "Attach marks and marking points to maintain objective and fair evaluation.",
    },
    {
        number: "06",
        title: "Question Analysis",
        description: "Audit distribution by ability, chapter, language, and difficulty in real time.",
    },
    {
        number: "07",
        title: "Moderation",
        description: "Finalize print-ready papers after moderation and compliance review.",
    },
];

export const featureCards: Feature[] = [
    {
        title: "Competency-Mapped Question Bank",
        description:
            "Manage a large multilingual question bank tagged by ability, sub-ability, difficulty, and competency code.",
        tags: ["Awareness", "Sensitivity", "Creativity", "Difficulty Mix", "16 Languages"],
    },
    {
        title: "Blueprint-Driven Generation",
        description:
            "Design sections and marks first, then generate papers that preserve distribution constraints.",
        tags: ["Section Rules", "Chapter Mapping", "Validation", "PDF Preview"],
    },
    {
        title: "AI + Manual Workflows",
        description:
            "Use AI for speed and manual selection for full control, with real-time guardrails in both flows.",
        tags: ["Multiple Sets", "Difficulty Percentages", "Live Validation"],
    },
    {
        title: "Analytics and Governance",
        description:
            "Track generation trends, language usage, difficulty spread, and moderation outcomes from one dashboard.",
        tags: ["Board Insights", "Secure Print", "Audit Trail"],
    },
];
