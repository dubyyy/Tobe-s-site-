"use client";

import { Flame, Camera, TrendingUp, Users, DollarSign, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const modules = [
  {
    icon: Flame,
    number: "01",
    title: "Find Your Brand DNA",
    description: "Discover what makes you different and turn it into content that hits.",
  },
  {
    icon: Camera,
    number: "02",
    title: "Camera Confidence",
    description: "Show up authentically. No scripts. No cringe. Just you, but magnetic.",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "The Viral Framework",
    description: "The exact system behind content that gets shared, saved, and remembered.",
  },
  {
    icon: Users,
    number: "04",
    title: "Community Building",
    description: "Turn followers into a loyal community that rides for you.",
  },
  {
    icon: DollarSign,
    number: "05",
    title: "Get The Bag",
    description: "Land brand deals, negotiate rates, and build income streams that scale.",
  },
  {
    icon: Sparkles,
    number: "06",
    title: "The Creator Lifestyle",
    description: "Manage your time, energy, and mental health while building your empire.",
  },
];

const ModulesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section className="py-24 md:py-32 bg-card/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-4 mb-16"
        >
          <p className="text-primary font-display font-semibold uppercase tracking-widest text-sm bg-primary/10 w-fit mx-auto px-3 py-1 rounded-full">
            What you'll learn
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold">
            Six modules.{" "}
            <span className="text-gradient-gold">Zero fluff.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A step-by-step roadmap to building a brand that lasts.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {modules.map((mod) => (
            <motion.div key={mod.number} variants={itemVariants}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group p-8 rounded-3xl bg-background border border-border/50 hover:border-primary/40 transition-all duration-500 hover:hover-glow-gold flex flex-col h-full"
              >
                <div className="flex items-center justify-between mb-8">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-all duration-500"
                  >
                    <mod.icon className="w-7 h-7 text-primary/70 group-hover:text-primary transition-colors" />
                  </motion.div>
                  <span className="text-4xl font-display font-black text-muted/10 group-hover:text-primary/10 transition-colors duration-500">
                    {mod.number}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors">{mod.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                  {mod.description}
                </p>
                <div className="mt-auto pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="h-px w-full bg-gradient-to-r from-primary/20 to-transparent" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ModulesSection;
