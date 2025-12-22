import { GraduationCap, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    institution: "KIET Group of Institutions",
    location: "Ghaziabad, India",
    period: "2020 - 2024",
    achievements: ["Data Structures", "Algorithms", "Software Engineering", "Database Systems"],
  },
];

const certifications = [
  {
    title: "Competitive Programming",
    platforms: ["LeetCode", "GeeksforGeeks"],
    description: "Active problem solver with consistent practice in DSA and algorithms",
  },
];

export function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
            Background
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Education
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Education Card */}
          {education.map((edu) => (
            <div
              key={edu.institution}
              className="bg-card rounded-lg p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-primary font-medium mb-1">{edu.period}</p>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground font-medium mb-1">{edu.field}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {edu.institution}, {edu.location}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement) => (
                      <Badge key={achievement} variant="secondary" className="text-xs">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Certifications Card */}
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-card rounded-lg p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-primary font-medium mb-1">Ongoing</p>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {cert.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.platforms.map((platform) => (
                      <Badge key={platform} variant="secondary" className="text-xs">
                        {platform}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
