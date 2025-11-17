import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  viewcode: string;
}

export function PortfolioSection() {
  const projects: ProjectProps[] = [
    {
      title: "AI-Powered Task Management App",
      description: "The client struggled with low productivity and lacked a unified system for organizing tasks across teams.",
      technologies: ["Next Js", "Tailwind CSS", "Shadcn", "OpenAI"],
      image: "/images/placeholder-image1.jpg",
      situation: "The client struggled with low productivity and lacked a unified system for organizing tasks across teams.",
      task: "Build a web application that uses AI to categorize tasks, prioritize workloads, and help teams collaborate more efficiently.",
      action: "I designed and engineered a full-stack Next.js application featuring server actions, vector search for task insights, and an AI assistant powered by OpenAI. Implemented role-based access, responsive UI, and real-time data sync with Supabase.",
      result: "The platform reduced task duplication by 32%, improved team planning accuracy, and became the client’s primary productivity tool.",
      viewcode: "https://github.com",
    },
    {
      title: "CRUD Todo App",
      description: "A responsive todo application showcasing CRUD operations with an emphasis on clean UI and UX.",
      technologies: ["React JS", "Next Js", "Tailwind CSS"],
      image: "/images/todo-app-result.png",
      situation: "Users needed a simple, fast way to manage todos with an attractive interface that worked on mobile and desktop.",
      task: "Build a responsive todo app that supports create, read, update, and delete (CRUD) operations and persists data.",
      action: "Implemented a Next.js frontend with Tailwind CSS for a polished UI, added a lightweight Node.js API for data handling, and used client-side state with local persistence for instant UX.",
      result: "Delivered a fast, responsive app with an intuitive UI—users can manage todos quickly; the design reduced friction and improved task flow.",
      viewcode: "https://github.com",
    },
  ];

  return (
    <section id="portfolio" className="py-12 md:py-20 bg-orange-100 px-4">
      <Container>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-1 w-12 bg-slate-500 rounded-full"></div>
            <h2 className="text-3xl font-bold">Portfolio</h2>
          </div>
          <p className="text-muted-foreground max-w-prose">
            Selected projects that demonstrate practical skills and problem solving.
          </p>

          {projects.map((project, index) => (
            <Card key={index} className="p-6 mt-6 grid gap-6 md:grid-cols-[1fr_420px] items-start bg-slate-100">
              <div>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-muted-foreground">{project.description}</p>

                <div className="mt-4">
                  <h4 className="font-semibold">Project overview (STAR)</h4>
                  <ul className="mt-2 list-disc pl-5 space-y-2 text-sm">
                    <li>
                      <strong>Situation:</strong> Users needed a simple, fast way to manage todos with
                      an attractive interface that worked on mobile and desktop.
                    </li>
                    <li>
                      <strong>Task:</strong> Build a responsive todo app that supports create, read,
                      update, and delete (CRUD) operations and persists data.
                    </li>
                    <li>
                      <strong>Action:</strong> Implemented a Next.js frontend with Tailwind CSS for a
                      polished UI, added a lightweight Node.js API for data handling, and used
                      client-side state with local persistence for instant UX.
                    </li>
                    <li>
                      <strong>Result:</strong> Delivered a fast, responsive app with an intuitive UI—users
                      can manage todos quickly; the design reduced friction and improved task flow.
                    </li>
                  </ul>
                </div>

                <div className="mt-4">
                  <h4 className="font-semibold">Technologies</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <span key={t} className="rounded-full px-3 py-1 text-xs bg-orange-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <a className="rounded-md border px-4 py-2 text-sm bg-orange-500 hover:bg-orange-600 text-white" href="https://github.com/arifdwiyanto/02_fe/blob/2f6915354298d805184e6694c37cb15c4925f11a/src/app/todo/page.tsx">
                    View code
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-md shadow-lg transition-transform duration-300 hover:scale-110">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  width={420}
                  height={280}
                  className="w-full h-auto"
                />
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
