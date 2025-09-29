"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Akpk (Android & iOS)",
    description:
      "Developed a financial management app tailored for Malaysian users. Enables customers to consolidate loans, credit card dues, and liabilities into manageable installments. Features include loan calculators, financial advisory tools, and educational courses.",
    image: "/images/projects/akpk.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "BagTalk (Android & iOS)",
    description:
      "Crypto-focused social media platform allowing users to create posts, engage in group discussions ('talks'), and follow trending crypto topics—similar to Twitter, but niche and crypto-first.",
    image: "/images/projects/bagtalk.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Kombo24 (Android & iOS)",
    description:
      "Salon booking app enabling users to browse services, view availability, and schedule appointments with stylists and salons. Includes user profile management, service reviews, booking history, and push notifications.",
    image: "/images/projects/kombo24.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Physiomobile (Android & iOS)",
    description:
      "Specialized physiotherapy suite with three integrated apps for Patient, Therapist, and Customer Service, supporting tailored physiotherapy for neurological issues, sports injuries, and post-surgery care.",
    image: "/images/projects/physiomobile.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Refundo Web Chat (Flutter Web App)",
    description:
      "Built a chat app using Twilio’s chat API for backend with custom APIs for user authentication and media handling.",
    image: "/images/projects/refundo.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Trs PaySlips (Android & iOS)",
    description:
      "Created an automated pay slip app leveraging Google Sheets macros and Firebase to display employee pay slips in PDF format.",
    image: "/images/projects/trspayslips.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Alkhamy (Flutter – iOS & Android)",
    description:
      "AI-powered wellness app focused on holistic mental, emotional, and spiritual healing. Integrated Agora for live video sessions and Socket.IO for real-time chat.",
    image: "/images/projects/alkhamy.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "InstaSalam (Android & iOS)",
    description:
      "Comprehensive app featuring Quran translations, prayer tracking, Qibla direction, community sharing, and mosque management functionalities.",
    image: "/images/projects/instasalam.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "MealMap (Android & iOS)",
    description:
      "Subscription-based nutrition app with Stripe integration and daily intake tracking for personalized diet plans.",
    image: "/images/projects/mealmap.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Health Care App (Android & iOS)",
    description:
      "White-labeled telehealth platform featuring secure video consultations via Agora, real-time chat with Socket.IO, EHR integration, appointment bookings, and full health record management.",
    image: "/images/projects/healthcare.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "WordPress Website – GearShorts",
    description:
      "Designed and developed an interactive, customized WordPress site focusing on user experience and easy navigation.",
    image: "/images/projects/gearshorts.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.gearshorts.com",
  },
  {
    id: 12,
    title: "Ertugrul Series (Android)",
    description:
      "Built Android app for Islamic drama series with Firebase for secure content management and streaming.",
    image: "/images/projects/ertugrul.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 13,
    title: "MirajTv (Android)",
    description:
      "Developed Android app for Islamic TV series content with Firebase backend for secure content management.",
    image: "/images/projects/mirajtv.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 14,
    title: "HideEncryp (Android App)",
    description:
      "Developed an Android app for file encryption, allowing users to secure images and files with automatic deletion of originals. Implemented PHP backend for secure user login and unique device registration.",
    image: "/images/projects/hideencryp.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
