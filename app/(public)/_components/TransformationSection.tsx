"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const befores = [
  "Invisible online",
  "Inconsistent posting",
  "Zero brand deals",
  "Scared of camera",
  "No engagement",
];

const afters = [
  "Recognized creator",
  "Content machine",
  "Brands in your DMs",
  "Camera confident",
  "Loyal community",
];

const TransformationSection = () => {
  const beforeVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const afterVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const itemVariantsRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-4 mb-16"
        >
          <p className="text-primary font-display font-semibold uppercase tracking-widest text-sm bg-primary/10 w-fit mx-auto px-3 py-1 rounded-full">
            The glow up
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold">
            From <span className="text-muted-foreground/50 line-through decoration-primary/50">lurker</span> to{" "}
            <span className="text-gradient-gold">leader</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Stop watching from the sidelines. It's time to build your own empire.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Mobile version (stacked) */}
          <div className="flex flex-col md:hidden gap-8">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="space-y-3"
             >
                <h3 className="text-center text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">The Old Way</h3>
                {befores.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-4 rounded-xl bg-secondary/30 border border-border text-center text-muted-foreground font-medium"
                  >
                    {item}
                  </motion.div>
                ))}
             </motion.div>
             <motion.div
               initial={{ opacity: 0, scale: 0.5 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.5 }}
               className="flex justify-center"
             >
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-primary rotate-90" />
                </div>
             </motion.div>
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.6 }}
               className="space-y-3"
             >
                <h3 className="text-center text-sm font-bold uppercase tracking-widest text-primary mb-4">The Tobeszn Way</h3>
                {afters.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                    className="p-4 rounded-xl bg-primary/5 border border-primary/20 text-center text-foreground font-semibold shadow-sm"
                  >
                    {item}
                  </motion.div>
                ))}
             </motion.div>
          </div>

          {/* Desktop version */}
          <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-8 items-center">
            {/* Before column */}
            <motion.div
              variants={beforeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              <h3 className="text-sm font-display font-bold uppercase tracking-widest text-muted-foreground text-center mb-6">
                The Old Way
              </h3>
              {befores.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, x: -5 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 rounded-2xl bg-secondary/20 border border-border/50 text-center text-muted-foreground font-medium transition-all hover:bg-secondary/40"
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>

            {/* Arrow column */}
            <div className="flex flex-col items-center justify-center gap-6 py-10">
              <div className="h-full w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent absolute top-0 bottom-0" />
              {befores.map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="relative z-10 w-10 h-10 rounded-full bg-background border border-primary/20 flex items-center justify-center shadow-sm"
                >
                  <ArrowRight className="w-5 h-5 text-primary" />
                </motion.div>
              ))}
            </div>

            {/* After column */}
            <motion.div
              variants={afterVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              <h3 className="text-sm font-display font-bold uppercase tracking-widest text-primary text-center mb-6">
                The Tobeszn Way
              </h3>
              {afters.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariantsRight}
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 rounded-2xl bg-primary/5 border border-primary/20 text-center text-foreground font-bold shadow-lg shadow-primary/5 transition-all hover:bg-primary/10"
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
