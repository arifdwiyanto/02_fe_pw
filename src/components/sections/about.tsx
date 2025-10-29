import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";

export function AboutSection() {
    const skills = [
        { name: "ReactJS", logo: "/images/reactjs-logo.svg" },
        { name: "NextJS", logo: "/images/nextjs-logo.svg" },
        { name: "Tailwind CSS", logo: "/images/tailwindcss-logo.svg" },
        { name: "NodeJS", logo: "/images/nodejs-logo.svg" },
        { name: "MySQL", logo: "/images/mysql-logo.svg" },
        { name: "Ubuntu", logo: "/images/ubuntu-logo.svg" },
        { name: "Git", logo: "/images/git-logo.svg" },
        { name: "Docker", logo: "/images/docker-logo.svg" },
    ];
    const values = [
        {
            title: "Quality-Driven",
            description: "Committed to writing clean, maintainable, and efficient code.",
        },
        {
            title: "Detail-Oriented",
            description: "Strong attention to detail in both design and functionality.",
        },
        {
            title: "Effective Communication",
            description: "Clear and proactive communication throughout project lifecycle.",
        },
    ];

    return (
        <section id="about" className="py-12 md:py-20 bg-orange-100">
            <Container>
                <div className="space-y-12">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="h-1 w-12 bg-slate-500 rounded-full"></div>
                            <h2 className="text-3xl font-bold">About Me</h2>
                        </div>
                        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-8">
                            With a strong foundation in web development and a passion for creating innovative solutions,
                            I specialize in building modern web applications. My journey in tech started with a deep
                            curiosity for creating user-friendly interfaces and has evolved into expertise in full-stack development.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold tracking-tighter">My Skills</h3>
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                            {skills.map((skill) => (
                                <Card key={skill.name} className="p-4 text-center font-medium bg-orange-50 hover:bg-slate-300">
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="rounded-full p-2 inline-flex">
                                            <img src={skill.logo} alt={`${skill.name} logo`} className="h-15 w-15" />
                                        </div>
                                        <span className="mt-2">{skill.name}</span>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold tracking-tighter">Key Values</h3>
                        <div className="grid gap-6 sm:grid-cols-3">
                            {values.map((value) => (
                                <Card key={value.title} className="p-6 bg-orange-50 hover:bg-slate-300">
                                    <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                                    <p className="text-muted-foreground">{value.description}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}