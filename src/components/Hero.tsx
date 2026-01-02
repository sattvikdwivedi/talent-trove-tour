import { ArrowDown, Github, Linkedin, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container-narrow text-center">
        <div className="animate-fade-in-up">
          <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
            Full-Stack Engineer
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
            Hi, I'm <span className="text-primary">Sattvik</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Passionate software developer with expertise in building scalable web applications. 
            Currently crafting OTT streaming solutions at Arverse and previously working on 
            fintech innovations for Edelweiss.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <Button size="lg" onClick={() => scrollToSection("#projects")} className="px-8">
            View My Work
          </Button>
          <Button variant="outline" size="lg" onClick={() => scrollToSection("#contact")} className="px-8">
            Get in Touch
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 mb-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="https://www.linkedin.com/in/sattvik-dwivedi-277544207/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/sattvikdwivedi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://leetcode.com/u/sattvikdwivedi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Code2 className="h-6 w-6" />
          </a>
        </div>

        <button
          onClick={() => scrollToSection("#skills")}
          className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}
