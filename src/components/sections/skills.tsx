import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

export function SkillsSection() {
  const frontend = ["HTML", "CSS", "JavaScript", "ReactJS"];
  const backend = ["NodeJS", "MySQL"];
  const devops = ["Docker", "Git", "CI/CD"];

  return (
    <section id="skills" className="py-12 md:py-20 bg-muted/50 px-4">
      <Container>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-1 w-12 bg-orange-500 rounded-full"></div>
            <h2 className="text-3xl font-bold">Skills</h2>
          </div>
          <p className="text-muted-foreground max-w-prose">
            A concise overview of front-end, back-end, and tools I work with.
          </p>

          <div className="grid gap-4 sm:grid-cols-3 mt-6">
            <Card className="p-6 bg-orange-50">
              <h3 className="text-lg font-semibold mb-3 text-center">Front-end</h3>
              <ul className="space-y-2 text-left mt-2">
                {frontend.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <Check className="h-4 w-4 mt-1 text-primary" />
                    <span className="text-sm">{s}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 bg-orange-50">
              <h3 className="text-lg font-semibold mb-3 text-center">Back-end</h3>
              <ul className="space-y-2 text-left mt-2">
                {backend.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <Check className="h-4 w-4 mt-1 text-primary" />
                    <span className="text-sm">{s}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 bg-orange-50">
              <h3 className="text-lg font-semibold mb-3 text-center">DevOps & Tools</h3>
              <ul className="space-y-2 text-left mt-2">
                {devops.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <Check className="h-4 w-4 mt-1 text-primary" />
                    <span className="text-sm">{s}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
