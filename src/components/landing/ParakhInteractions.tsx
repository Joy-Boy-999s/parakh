"use client";

import { useEffect } from "react";

type Cleanup = () => void;

const FAQ_ITEMS = [
    {
        q: "Is PARAKH ITMS fully compliant with the PARAKH Guidelines for Question Paper Standardization?",
        a: "Yes. Every feature maps directly to the 7-step framework — from Assessment Design (Step 1) through Moderation (Step 7). The system enforces ability mapping (Awareness, Sensitivity, Creativity), difficulty classification, blueprint validation, and competency codes at every stage.",
    },
    {
        q: "Can we deploy this for our state board with our own subjects and curriculum?",
        a: "Absolutely. PARAKH ITMS is fully configurable — you can add your board's subjects, chapters, languages, and blueprint structures. The AP Board of Intermediate Education currently runs it with 20+ subjects across 16 languages.",
    },
    {
        q: "What languages are supported for question paper generation?",
        a: "Currently English, Telugu, Hindi, Bengali, Tamil, Kannada, Malayalam, Marathi, Gujarati, Odia, Punjabi, Assamese, Konkani, Meitei, Mizo, and Nepali. The system is designed to support any language — additional languages can be configured during deployment for your board.",
    },
    {
        q: "How does Secure Print work? Is there any risk of paper leaks?",
        a: "Secure Print mode generates the paper directly in the browser and sends it to the printer without ever saving it to the database. Once printed, no digital copy exists in the system. This eliminates the primary vector for question paper leaks.",
    },
    {
        q: "Can we use both AI and Manual paper generation?",
        a: "Yes. AI generation auto-assembles papers based on difficulty distribution and blueprint rules. Manual generation gives paper setters full control to pick individual questions chapter-by-chapter, with the system validating against the blueprint in real-time. Most boards use both depending on the situation.",
    },
    {
        q: "Is the system cloud-based or on-premise?",
        a: "Both options are available — cloud-hosted SaaS solution or on-premise installation within your board's data centre. We recommend discussing your security requirements during the demo.",
    },
];

export function ParakhInteractions() {
    useEffect(() => {
        const cleanups: Cleanup[] = [];

        const onScroll = () => {
            const nav = document.getElementById("nav");
            if (!nav) {
                return;
            }
            nav.classList.toggle("scrolled", window.scrollY > 15);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        cleanups.push(() => window.removeEventListener("scroll", onScroll));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("vis");
                    }
                });
            },
            { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
        );

        document.querySelectorAll(".anim").forEach((el) => observer.observe(el));
        cleanups.push(() => observer.disconnect());

        const onAnchorClick = (event: Event) => {
            const target = event.currentTarget as HTMLAnchorElement;
            const href = target.getAttribute("href");
            if (!href || !href.startsWith("#")) {
                return;
            }

            const destination = document.querySelector(href);
            if (!destination) {
                return;
            }

            event.preventDefault();
            destination.scrollIntoView({ behavior: "smooth", block: "start" });
        };

        const internalAnchors = Array.from(document.querySelectorAll('a[href^="#"]'));
        internalAnchors.forEach((anchor) => anchor.addEventListener("click", onAnchorClick));
        cleanups.push(() => {
            internalAnchors.forEach((anchor) => anchor.removeEventListener("click", onAnchorClick));
        });

        const faqContainer = document.getElementById("faq-container");
        if (faqContainer && faqContainer.children.length === 0) {
            FAQ_ITEMS.forEach((faq) => {
                const item = document.createElement("div");
                item.className = "faq-item anim";

                const button = document.createElement("button");
                button.className = "faq-q";

                const question = document.createElement("span");
                question.textContent = faq.q;

                const icon = document.createElement("span");
                icon.className = "faq-icon";
                icon.textContent = "+";

                button.append(question, icon);

                const answerWrap = document.createElement("div");
                answerWrap.className = "faq-a";

                const answer = document.createElement("p");
                answer.textContent = faq.a;

                answerWrap.appendChild(answer);

                const toggle = () => {
                    button.classList.toggle("open");
                    answerWrap.classList.toggle("open");
                };

                button.addEventListener("click", toggle);
                cleanups.push(() => button.removeEventListener("click", toggle));

                item.append(button, answerWrap);
                faqContainer.appendChild(item);
                observer.observe(item);
            });
        }

        const heroApp = document.querySelector<HTMLElement>(".hero-app");
        if (heroApp) {
            const onEnter = () => {
                heroApp.style.transform = "perspective(1200px) rotateY(0) rotateX(0)";
            };
            const onLeave = () => {
                heroApp.style.transform = "perspective(1200px) rotateY(-3deg) rotateX(1deg)";
            };

            heroApp.addEventListener("mouseenter", onEnter);
            heroApp.addEventListener("mouseleave", onLeave);
            cleanups.push(() => {
                heroApp.removeEventListener("mouseenter", onEnter);
                heroApp.removeEventListener("mouseleave", onLeave);
            });
        }

        return () => {
            cleanups.forEach((cleanup) => cleanup());
        };
    }, []);

    return null;
}
