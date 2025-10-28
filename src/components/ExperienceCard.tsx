import { ExternalLink } from "lucide-react";

interface ExperienceCardProps {
  period: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  link?: string;
}

export const ExperienceCard = ({
  period,
  title,
  company,
  description,
  technologies,
  link,
}: ExperienceCardProps) => {
  const CardWrapper = link ? "a" : "div";
  const cardProps = link
    ? {
        href: link,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "group block p-6 rounded-lg transition-all hover-glow cursor-pointer",
      }
    : {
        className: "group block p-6 rounded-lg transition-all",
      };

  return (
    <CardWrapper {...cardProps}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-1">
          <p className="text-xs font-mono text-slate uppercase tracking-wider">{period}</p>
        </div>
        <div className="md:col-span-3">
          <h3 className="text-lg font-bold text-slate-lighter group-hover:text-cyan transition-colors mb-1 flex items-center gap-2">
            {title} · {company}
            {link && (
              <ExternalLink className="w-4 h-4 -translate-y-0.5 translate-x-0 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            )}
          </h3>
          <p className="text-sm text-slate leading-relaxed mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-mono text-cyan bg-cyan/10 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};
