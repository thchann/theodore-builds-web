import { Github, Linkedin, Code2 } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/thchann",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/thchann",
    icon: Linkedin,
  },
  {
    name: "Devpost",
    url: "https://devpost.com/thchann",
    icon: Code2,
  },
];

export const SocialLinks = () => {
  return (
    <div className="flex gap-6 mt-8">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-cyan transition-colors"
            aria-label={link.name}
          >
            <Icon className="w-6 h-6" />
          </a>
        );
      })}
    </div>
  );
};
