import React, { useState } from "react";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, techstack = [], previewUrl }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="cursor-pointer">
      <Link href={previewUrl} className="block">
        {/* Image Section */}
        <div
          className="h-52 md:h-72 rounded-t-xl relative group"
          style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition duration-500 hidden group-hover:flex items-center justify-center p-4">
            <div className="flex gap-2 flex-wrap justify-center">
              {techstack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-white text-black text-xs px-3 py-1 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>

      {/* Content Section */}
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <Link href={previewUrl}>
          <h5 className="text-lg font-semibold mb-2">{title}</h5>
        </Link>

        {/* Description with toggle */}
        <p className={`text-[#ADB7BE] text-sm transition-all ${expanded ? "line-clamp-none" : "line-clamp-3"
          }`}>
          {description}
        </p>

        {description.length > 120 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setExpanded(!expanded);
            }}
            className="text-blue-400 mt-2 text-sm hover:underline"
          >
            {expanded ? "See less" : "See more"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
