import { useEffect, useState } from "react";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="hidden lg:block">
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`group flex items-center gap-4 transition-all ${
                activeSection === item.id ? "active" : ""
              }`}
            >
              <span
                className={`h-px transition-all ${
                  activeSection === item.id
                    ? "w-16 bg-cyan"
                    : "w-8 bg-slate group-hover:w-16 group-hover:bg-slate-light"
                }`}
              />
              <span
                className={`text-xs uppercase tracking-widest font-bold transition-colors ${
                  activeSection === item.id
                    ? "text-cyan"
                    : "text-slate group-hover:text-slate-light"
                }`}
              >
                {item.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
