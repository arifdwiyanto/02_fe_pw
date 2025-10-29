"use client"

import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: <FaGithub className="w-5 h-5" aria-hidden />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: <FaLinkedin className="w-5 h-5" aria-hidden />,
    },
  ];

  return (
    <section id="contact" className="py-12 md:py-20 bg-muted/50">
      <Container>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-1 w-12 bg-orange-500 rounded-full"></div>
            <h2 className="text-3xl font-bold">Get in Touch</h2>
          </div>
          <p className="text-muted-foreground max-w-prose">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>

          <div className="grid gap-8 md:grid-cols-[1fr_400px] mt-8">
            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    className="min-h-[150px]"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                  Send Message
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
                <div className="space-y-2">
                  <p className="text-sm">
                    Email:{" "}
                    <a
                      href="mailto:your.email@example.com"
                      className="text-primary hover:underline"
                    >
                      arif@example.com
                    </a>
                  </p>

                  <div className="pt-4">
                    <h4 className="text-sm font-medium mb-2">Connect with me:</h4>
                    <div className="flex gap-4">
                      {socialLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label={link.name}
                        >
                          {link.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}