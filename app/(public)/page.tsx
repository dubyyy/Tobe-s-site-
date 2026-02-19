import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Link from "next/link";

interface featureProps {
  title: string;
  description: string;
  icon: string;
}

const features: featureProps[] = [
  {
    title: "Expert-Led Courses",
    description:
      "Learn directly from Tobeszn with carefully crafted courses designed to help you succeed.",
    icon: "📚",
  },
  {
    title: "Engaging Content",
    description:
      "Access interactive lessons, practical exercises, and real-world examples to enhance your skills.",
    icon: "🎮",
  },
  {
    title: "Track Your Growth",
    description:
      "Monitor your progress with detailed analytics and celebrate your achievements along the way.",
    icon: "📊",
  },
  {
    title: "Exclusive Community",
    description:
      "Connect with fellow learners in Tobeszn's community and grow together.",
    icon: "👥",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant="outline">Learn from Tobeszn</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Master New Skills with Tobeszn
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Join Tobeszn&apos;s exclusive learning platform. Access premium courses,
            expert insights, and content designed to accelerate your growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              className={buttonVariants({
                size: "lg",
              })}
              href="/courses"
            >
              Explore Courses
            </Link>

            <Link
              className={buttonVariants({
                size: "lg",
                variant: "outline",
              })}
              href="/login"
            >
              Sign in
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  );
}
