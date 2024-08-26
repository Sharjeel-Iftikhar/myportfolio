import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

type ProjectCardProps = {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: StaticImageData;
  source_code_link: string;
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: ProjectCardProps) => {
  return (
    <>
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[500px]"> {/* Fixed height */}
        <div className="relative w-full h-[230px]">
          <Image
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition-transform duration-300 hover:scale-110"
            >
              <img
                src={"/assets/github.png"}
                alt="source code"
                className="w-1/2 h-1/2 object-contain bg-transparent transition-opacity duration-300 opacity-50 hover:opacity-100"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] line-clamp-3 overflow-hidden text-ellipsis">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
