import { Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Full-Stack Engineer",
    company: "Arverse",
    period: "May 2025 - Present",
    description: [
      "Developing a scalable OTT streaming platform supporting 100K+ concurrent users with adaptive streaming",
      "Implementing DRM integration for secure content delivery across multiple devices",
      "Optimizing APIs and integrated Firebase Analytics for real-time tracking",
      "Improving system observability using custom dashboards for KPI monitoring",
    ],
    technologies: ["React", "NestJS", "TypeScript", "Firebase", "DRM", "Streaming"],
    current: true,
  },
  {
    title: "Software Developer",
    company: "Binmile Technology",
    client: "Client: Edelweiss",
    period: "June 2024 - March 2025",
    description: [
      "Developed real-time financial data processing for loans, stocks, and mutual funds",
      "Built Node.js-based middleware for seamless data synchronization across APIs",
      "Implemented notification service processing 10K+ alerts per day",
      "Optimized database queries reducing latency by 30%",
    ],
    technologies: ["Node.js", "Angular", "PostgreSQL", "RabbitMQ", "Redis"],
    current: false,
  },
];

export function WorkExperience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
            Career
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Work Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/30 transition-colors">
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Briefcase className="h-4 w-4 text-primary" />
                      <span className="text-sm text-primary font-medium">{exp.period}</span>
                      {exp.current && (
                        <Badge className="bg-primary/10 text-primary border-primary/20">
                          Current
                        </Badge>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-muted-foreground font-medium mb-1">
                      {exp.company}
                    </p>
                    {exp.client && (
                      <p className="text-sm text-muted-foreground mb-4">{exp.client}</p>
                    )}

                    <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
