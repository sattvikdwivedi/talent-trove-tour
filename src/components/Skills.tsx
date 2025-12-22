import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "C/C++", "Python", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Angular", "NestJS", "Express.js", "Ionic", "Node.js"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Docker", "AWS", "RabbitMQ", "Firebase", "Git", "Linux"],
  },
  {
    title: "Concepts",
    skills: ["RESTful APIs", "Microservices", "DRM Integration", "Real-time Systems", "Performance Optimization"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
            Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card rounded-lg p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm font-medium"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
