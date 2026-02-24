"use client";

import { TrendingDown, EyeOff, RefreshCw, VideoOff } from "lucide-react";
import { motion } from "framer-motion";

const pains = [
  {
    icon: TrendingDown,
    text: "Posting consistently but getting zero engagement",
  },
  {
    icon: RefreshCw,
    text: "Overthinking every caption, every reel, every post",
  },
  {
    icon: EyeOff,
    text: "Watching others blow up while you stay invisible",
  },
  {
    icon: VideoOff,
    text: "Scared to show your face and be yourself on camera",
  },
];

const PainSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center space-y-6 mb-16"
        >
          <p className="text-primary font-display font-semibold uppercase tracking-widest text-sm bg-primary/10 w-fit mx-auto px-3 py-1 rounded-full">
            Real talk
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-tight">
            You're doing{" "}
            <span className="text-gradient-gold">everything</span>
            <br />
            but nothing's working.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-xl mx-auto px-4 sm:px-0">
            You've got the ideas. The aesthetic. The vision. But your content isn't hitting. And you know you're meant for more.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {pains.map((pain, i) => (
            <motion.div key={i} variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-background/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors"
                >
                  <pain.icon className="w-6 h-6 text-primary/70 group-hover:text-primary transition-colors" />
                </motion.div>
                <p className="text-foreground/80 group-hover:text-foreground font-medium text-base sm:text-lg leading-snug transition-colors pt-2">
                  {pain.text}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground text-base sm:text-lg">
            Sound familiar?{" "}
            <span className="text-primary font-bold inline-flex items-center gap-1">
              Good. That means you're ready.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PainSection;
