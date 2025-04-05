import Image from "next/image";

const ProjectCard = ({ title, description, github, itch, image }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      {image && (
        <Image src={image} alt={title} width={500} height={300} className="rounded-md" />
      )}
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <p className="text-gray-600 mt-1">{description}</p>
      {github && (
        <a href={github} target="_blank" className="text-black-500 mt-2 inline-block hover:underline" >
          View on GitHub
        </a>
      )}
      <div>
        {itch && (
          <a href={itch} target="_blank" className="text-black-500 mt-2 inline-block hover:underline">
            Donwload in Itch.io
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
