import { useEffect, useState } from "react";

const navItems = [
  { id: "about", label: "About", number: "01" },
  { id: "experience", label: "Experience", number: "02" },
  { id: "projects", label: "Projects", number: "03" },
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
      <ul className="space-y-6">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`group flex items-center gap-4 transition-all ${
                activeSection === item.id ? "active" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`font-mono text-xs font-bold transition-all ${
                    activeSection === item.id
                      ? "text-cyan scale-110"
                      : "text-slate group-hover:text-cyan group-hover:scale-105"
                  }`}
                >
                  {item.number}
                </span>
                <div
                  className={`h-2 w-2 rounded-full transition-all ${
                    activeSection === item.id
                      ? "bg-cyan shadow-[0_0_8px_hsl(var(--cyan))] scale-125"
                      : "bg-navy-lighter group-hover:bg-slate group-hover:scale-110"
                  }`}
                />
              </div>
              <span
                className={`text-xs uppercase tracking-widest font-bold transition-colors ${
                  activeSection === item.id
                    ? "text-slate-lighter"
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
