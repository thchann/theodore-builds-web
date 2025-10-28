import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  link: string;
}

export const ProjectCard = ({ title, description, image, link }: ProjectCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 rounded-lg transition-all hover-glow"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {image && (
          <div className="md:col-span-1">
            <div className="aspect-video rounded overflow-hidden bg-navy-light border border-navy-lighter">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        )}
        <div className={image ? "md:col-span-3" : "md:col-span-4"}>
          <h3 className="text-lg font-bold text-slate-lighter group-hover:text-cyan transition-colors mb-2 flex items-center gap-2">
            {title}
            <ExternalLink className="w-4 h-4 -translate-y-0.5 translate-x-0 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </h3>
          <p className="text-sm text-slate leading-relaxed">{description}</p>
        </div>
      </div>
    </a>
  );
};
