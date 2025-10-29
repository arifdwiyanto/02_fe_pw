import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

const testimonials: TestimonialProps[] = [
  {
    content: "Arif delivered our project ahead of schedule with exceptional quality. His attention to detail and clear communication made the development process smooth and efficient.",
    author: "Sarah Johnson",
    role: "Product Manager",
    company: "InnovateTech",
    image: "https://avatar.vercel.sh/sarah"
  },
  {
    content: "Working with Arif was a great experience. His technical expertise and problem-solving skills helped us overcome complex challenges in our web application.",
    author: "Michael Chen",
    role: "CTO",
    company: "StartupFlow",
    image: "https://avatar.vercel.sh/michael"
  },
  {
    content: "Arif's approach to UI and UX improvements noticeably increased our user engagement. He iterates quickly and communicates progress clearly throughout the project.",
    author: "Emily Davis",
    role: "Senior Designer",
    company: "CreativeStudio",
    image: "https://avatar.vercel.sh/emily"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 md:py-20 bg-orange-100">
      <Container>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-1 w-12 bg-slate-500 rounded-full"></div>
            <h2 className="text-3xl font-bold">Testimonials</h2>
          </div>
          <p className="text-muted-foreground max-w-prose">
            What clients and colleagues say about working with me.
          </p>

          <div className="grid gap-6 md:grid-cols-2 mt-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-slate-100">
                <div className="space-y-4">
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>

                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.image} alt={testimonial.author} />
                      <AvatarFallback>
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}