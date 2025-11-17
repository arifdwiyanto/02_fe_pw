import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="hero" className="pt-24 pb-12 md:pt-32 md:pb-20 bg-muted/50 px-4">
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I&apos;m <span className="text-orange-500">Arif</span>
              </h1>
              <h2 className="text-lg font-medium text-muted-foreground sm:text-xl">
                Full Stack Web Developer
              </h2>
            </div>

            <p className="max-w-2xl leading-normal text-muted-foreground sm:text-lg sm:leading-8">
              Passionate web developer crafting modern and user-friendly applications.
              Specializing in full-stack development with expertise in React, Next.js,
              Node.js, and modern web technologies.
            </p>

            <div className="flex flex-wrap items-center md:justify-start justify-center gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                <Link href="#portfolio">View Portfolio</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-orange-500 hover:text-orange-600">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end bg-transparent">
            <Image
              src="/images/programming-illustration.svg"
              alt="Profile image"
              width={400}
              height={400}
              priority
              className="w-[280px] md:w-[400px] h-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}