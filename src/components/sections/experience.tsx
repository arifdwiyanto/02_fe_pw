import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";

interface ExperienceProps {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

const experiences: ExperienceProps[] = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    period: "2023 - Present",
    responsibilities: [
      "Led development of multiple web applications using React and Node.js",
      "Improved application performance by 40% through code optimization",
      "Mentored junior developers and conducted code reviews",
      "Implemented CI/CD pipelines and automated testing strategies"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations Inc",
    period: "2021 - 2023",
    responsibilities: [
      "Developed and maintained client projects using modern web technologies",
      "Collaborated with cross-functional teams to deliver high-quality solutions",
      "Integrated third-party APIs and services into applications",
      "Optimized database queries and implemented caching strategies"
    ]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-12 md:py-20 bg-muted/50">
      <Container>
        <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="h-1 w-12 bg-orange-500 rounded-full"></div>
          <h2 className="text-3xl font-bold">Experience</h2>
        </div>
          <p className="text-muted-foreground max-w-prose">
            My professional journey in software development.
          </p>

          <div className="space-y-6 mt-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-nowrap">
                    {exp.period}
                  </p>
                </div>
                <ul className="mt-4 space-y-2 list-disc list-inside text-sm text-muted-foreground">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}