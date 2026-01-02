import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Med Care",
    subtitle: "Healthcare Appointment Management",
    description:
      "A comprehensive healthcare management system enabling patients to book and manage doctor appointments. Features include real-time scheduling, appointment tracking, and secure patient data management with role-based access control.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "REST APIs"],
    image: null,
    github: "https://github.com/sattvikdwivedi",
    live: null,
  },
  {
    title: "OTT Streaming Platform",
    subtitle: "Scalable Video Streaming Solution",
    description:
      "Enterprise-grade OTT platform supporting 100K+ concurrent users with adaptive bitrate streaming. Integrated DRM for secure content delivery and Firebase Analytics for real-time user behavior tracking.",
    technologies: ["React", "NestJS", "TypeScript", "Firebase", "DRM"],
    image: null,
    github: null,
    live: null,
    featured: true,
  },
  {
    title: "Financial Data Platform",
    subtitle: "Real-time Fintech Processing",
    description:
      "Real-time financial data processing system for loans, stocks, and mutual funds. Built middleware for seamless data synchronization and notification service processing 10K+ alerts daily.",
    technologies: ["Node.js", "Angular", "PostgreSQL", "RabbitMQ", "Redis"],
    image: null,
    github: null,
    live: null,
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Featured Projects
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary/30 transition-all hover:shadow-lg group"
            >
              {/* Project image placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <span className="text-4xl font-display font-bold text-primary/30">
                  {project.title.charAt(0)}
                </span>
              </div>

              <div className="p-6">
                {project.featured && (
                  <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">
                    Featured
                  </Badge>
                )}
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-primary mb-3">{project.subtitle}</p>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button size="sm" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
