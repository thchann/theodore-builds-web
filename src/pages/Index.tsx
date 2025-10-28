import { Navigation } from "@/components/Navigation";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SocialLinks } from "@/components/SocialLinks";
import { ArrowUpRight } from "lucide-react";

import lynkImage from "@/assets/lynk.png";
import classSenseImage from "@/assets/class-sense.jpg";
import revelImage from "@/assets/revel.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-navy">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-12 lg:py-20">
        <div className="lg:flex lg:gap-12">
          {/* Left Column - Fixed on desktop */}
          <aside className="lg:sticky lg:top-20 lg:h-screen lg:w-1/2 lg:py-20 mb-16 lg:mb-0">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h1 className="text-5xl font-bold text-slate-lighter mb-3">
                  Theodore Chan
                </h1>
                <h2 className="text-xl font-semibold text-slate-light mb-4">
                  Full-Stack Engineer
                </h2>
                <p className="text-lg text-slate max-w-sm mb-8">
                  I like to build functional, beautiful web-applications.
                </p>
                <Navigation />
              </div>
              <SocialLinks />
            </div>
          </aside>

          {/* Right Column - Scrollable content */}
          <main className="lg:w-1/2 lg:py-20">
            {/* About Section */}
            <section id="about" className="mb-24 scroll-mt-20">
              <div className="space-y-4 text-slate leading-relaxed">
                <p>
                  My passion lies in developing functional, attractive interfaces where technical
                  depth and clean architecture naturally complement a modern, user-centered design.
                  After working on an iOS application, I found my favorite part was designing
                  screens with elegant components and smooth transitions — giving users the freedom
                  to explore well-crafted functionality through a visually engaging experience.
                </p>
                <p>
                  Currently, I'm a student at{" "}
                  <span className="text-cyan font-semibold">Trinity University</span>, pursuing
                  full-stack development. Through the university's H-E-B industry partnership, I
                  work as a Junior Developer collaborating with H-E-B engineers to design and deploy
                  production-grade systems that serve hundreds of vendors across Texas.
                </p>
                <p>
                  In the past, I've had the opportunity to create software across a range of domains
                  — from developing a production-grade facial engagement model for other
                  universities, to building a full-stack social platform that connects people
                  through shared experiences, to mentoring peers in Trinity's ACM chapter. Each
                  experience has deepened my passion for designing systems that balance technical
                  depth with creativity and human impact.
                </p>
                <p>
                  Aside from programming, I find myself climbing, playing music for friends, and
                  developing amazing chicken breast recipes.
                </p>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="mb-24 scroll-mt-20">
              <div className="space-y-4">
                <ExperienceCard
                  period="Sept 2025 — Present"
                  title="Software Engineer Fellow"
                  company="H-E-B"
                  description="Developed and deployed a full-stack vendor submission platform for H-E-B's Quest for Texas Best competition. Implemented secure authentication, containerized services, and CI/CD pipelines, ensuring smooth onboarding and reliable performance for 600+ vendors."
                  technologies={["JavaScript", "TypeScript", "FastAPI", "Flyway", "Docker", "DBeaver"]}
                />
                <ExperienceCard
                  period="May 2025 — Aug 2025"
                  title="Machine Learning Researcher"
                  company="Trinity University"
                  link="https://github.com/thchann/class_sense"
                  description="Developed Class Sense, an AI-driven engagement analysis tool used by multiple universities to study student focus and participation. Designed and trained a dual-input transformer model combining facial and behavioral features, achieving high predictive accuracy and demonstrating the potential of multimodal learning in real-time education settings."
                  technologies={["TensorFlow", "NumPy", "PyTorch", "Python", "OpenCV", "MARLIN", "OpenFace"]}
                />
                <ExperienceCard
                  period="Sept 2024 — Present"
                  title="Computer Science Tutor"
                  company="Association for Computing Machinery"
                  description="Lead initiatives within Trinity's ACM chapter to help students navigate computer science pathways and technical careers. Organized coding workshops, mentorship sessions, and internship prep events that fostered collaboration and growth across the CS community."
                  technologies={["Python", "Java", "Data Structures and Algorithms"]}
                />
                <ExperienceCard
                  period="Jan 2024 — Dec 2024"
                  title="Linear Algebra Tutor"
                  company="Trinity University"
                  description="Tutor undergraduate students in Calculus and Linear Algebra, focusing on helping them build conceptual understanding and problem-solving confidence. Develop personalized study strategies and guide students through complex topics like multivariable optimization, matrix operations, and eigenvalue applications."
                  technologies={["Matrix Multiplication"]}
                />
                <ExperienceCard
                  period="Mar 2022 — Jun 2022"
                  title="Software Engineer Intern"
                  company="ZACD"
                  link="https://github.com/thchann/ranking-website"
                  description="Engineered a PHP/MySQL analytics dashboard that ingested over 20,000 property records per quarter, enabling real-time search, filtering, and performance ranking across ZACD's real-estate portfolio. Automated manual Excel workflows and delivered quarterly data-driven insights that informed market strategy. Presented algorithmic updates and growth analytics directly to the COO during monthly sprint reviews."
                  technologies={["PHP", "MySQL", "Bootstrap", "JavaScript"]}
                />
                <a
                  href="/Theo_Resume_Swivel.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan font-semibold hover:underline mt-6 group"
                >
                  View Full Resume
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="mb-24 scroll-mt-20">
              <div className="space-y-4">
                <ProjectCard
                  title="Lynk"
                  description="Peer-to-peer iOS app enabling instant 'tap-to-share' contact exchanges between nearby users. Built with SwiftUI and Auth0 authentication, connected to a FastAPI backend with MongoDB persistence."
                  image={lynkImage}
                  link="https://github.com/GustavoBelaunde2004/Lynk"
                />
                <ProjectCard
                  title="Class Sense"
                  description="Multimodal engagement-prediction system combining facial features (OpenFace) and video embeddings (MARLIN) in a dual-input transformer network for ed-tech analytics."
                  image={classSenseImage}
                  link="https://github.com/thchann/Class_Sense"
                />
                <ProjectCard
                  title="Revel"
                  description="Full-stack social event platform allowing users to host, discover, and join parties through a clean, mobile-first interface."
                  image={revelImage}
                  link="https://github.com/thchann/Revel"
                />
                <ProjectCard
                  title="NeuroChain"
                  description="Educational machine learning framework bridging classical algorithms and modern deep learning, illustrating the path from perceptrons to GPT-style architectures."
                  link="https://github.com/thchann/NeuroChain"
                />
                <a
                  href="https://github.com/thchann?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan font-semibold hover:underline mt-6 group"
                >
                  View Full Project Archive
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </section>

            {/* Footer */}
            <footer className="text-xs text-slate mt-24">
              <p>
                Designed in <span className="text-slate-light">Figma</span> and coded in{" "}
                <span className="text-slate-light">Visual Studio Code</span>. Built with{" "}
                <span className="text-slate-light">React</span> and{" "}
                <span className="text-slate-light">Tailwind CSS</span>.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
