"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="space-y-2">
        <p>● Platforms & Technologies: Flutter, Android, iOS</p>
        <p>● Programming Languages: Dart, Kotlin, Swift</p>
        <p>● Tools & Services: Google Firebase</p>
        <p>● Core Competencies:</p>
        <ul className="list-disc pl-5">
          <li>Innovative Development: Skilled in creating custom, cutting-edge applications that align with specific device requirements and user needs.</li>
          <li>Industry Expertise: Deep understanding of industry standards, best practices, and protocols in application development.</li>
          <li>Testing & Debugging: Proficient in rigorous testing, debugging, and troubleshooting to ensure optimal app functionality.</li>
          <li>Work Ethic: Strong commitment to work flexibility, often going the extra mile with patience and enthusiasm.</li>
          <li>Continuous Learning: Dedicated to self-improvement and staying updated on the latest technologies and methodologies.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Work Experience",
    id: "work-experience",
    content: (
      <div className="space-y-4">
        <div>
          <p className="font-bold">Flutter Team Lead – Codexia Technologies (October 2022 – Present)</p>
          <ul className="list-disc pl-5">
            <li>Spearheading end-to-end development of high-quality mobile applications across Android & iOS platforms.</li>
            <li>Driving performance optimization, best practices, and code quality in cross-platform projects.</li>
            <li>Collaborating with cross-functional teams, providing technical leadership, and ensuring timely delivery.</li>
            <li>Mentoring team members, promoting technical growth, and fostering an environment of continuous improvement.</li>
          </ul>
          <p className="font-semibold mt-2">Notable Projects:</p>
          <ul className="list-disc pl-5">
            <li>Akpk (Android & iOS) – Developed a financial management app tailored for Malaysian users…</li>
            <li>BagTalk (Android & iOS) – Built a crypto-focused social media platform…</li>
            <li>Kombo24 (Android & iOS) – Engineered a salon booking app…</li>
            <li>Gymbarn (Android & iOS) – Designed a fitness app…</li>
            <li>Physiomobile (Android & iOS) – Developed a specialized physiotherapy rehabilitation suite…</li>
            <li>Klusknit (Android & iOS) – Built a community platform…</li>
            <li>Sinegy (Android & iOS) – Developed a secure cryptocurrency trading app…</li>
            <li>Body First (Android & iOS) – Engineered a wellness app…</li>
            <li>Presults (Android & iOS) – Built an archiving solution…</li>
          </ul>
        </div>
        <div>
          <p className="font-bold">Flutter Developer – AppsTree (May 2020 – September 2022)</p>
          <ul className="list-disc pl-5">
            <li>Enhanced app architecture and led development projects across native and Flutter platforms.</li>
            <li>Conducted code reviews, mentored junior developers, and established best practices for efficient, high-quality development.</li>
            <li>Delivered scalable, reliable applications within agile and sprint frameworks.</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="About Me" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            With 7 years of experience in native and cross-platform (Flutter) development, I have a proven track record
            of leading high-quality, scalable mobile applications across diverse domains. Currently serving as a Flutter
            Team Lead, I focus on driving innovation and fostering strong client relationships by consistently exceeding
            expectations. Whether it’s taking over an existing project, enhancing team resources, or creating a new
            application from scratch, I am adaptable, quality-driven, and detail-oriented.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("work-experience")}
              active={tab === "work-experience"}
            >
              Work Experience
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
