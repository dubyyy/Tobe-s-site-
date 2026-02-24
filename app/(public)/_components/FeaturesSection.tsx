"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Sparkles, TrendingUp, Heart } from "lucide-react";
import { motion } from "framer-motion";

interface featureProps {
  title: string;
  description: string;
  icon: any;
  color: string;
}

const features: featureProps[] = [
  {
    title: "Expert-Led Courses",
    description:
      "Learn directly from Tobeszn with carefully crafted courses designed to help you succeed.",
    icon: GraduationCap,
    color: "text-primary",
  },
  {
    title: "Engaging Content",
    description:
      "Access interactive lessons, practical exercises, and real-world examples to enhance your skills.",
    icon: Sparkles,
    color: "text-amber-500",
  },
  {
    title: "Track Your Growth",
    description:
      "Monitor your progress with detailed analytics and celebrate your achievements along the way.",
    icon: TrendingUp,
    color: "text-amber-600",
  },
  {
    title: "Exclusive Community",
    description:
      "Connect with fellow learners in Tobeszn's community and grow together.",
    icon: Heart,
    color: "text-amber-700",
  },
];

const FeaturesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <p className="text-primary font-display font-semibold uppercase tracking-widest text-sm">
            Why choose us
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold">
            Everything you need to <span className="text-gradient-gold">succeed</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group border-border bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 h-full">
                <CardHeader>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6`}
                  >
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </motion.div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
