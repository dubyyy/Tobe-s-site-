"use client";

import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const FinalCTASection = () => {
  return (
    <section className="py-24 md:py-40 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] rounded-full bg-primary/10 blur-[150px] animate-pulse" />
      </div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-primary font-display font-bold uppercase tracking-widest text-sm bg-primary/10 px-4 py-2 rounded-full"
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              <Zap className="w-4 h-4 fill-current" />
            </motion.div>
            YOUR TIME IS NOW
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-display font-black tracking-tighter leading-[0.9] sm:leading-[0.85]"
          >
            You've been consuming.
            <br />
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gradient-gold inline-block"
            >
              Time to create.
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium px-4 sm:px-0"
          >
            The next cohort starts soon. Once it's full, it's closed. 
            Your future audience is already scrolling — <span className="text-foreground underline decoration-primary/30 underline-offset-4">go find them.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col items-center gap-6 pt-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/subscribe">
                <Button variant="hero" size="lg" className="px-8 sm:px-12 md:px-16 py-6 sm:py-8 text-lg sm:text-xl md:text-2xl h-auto rounded-[2rem] shadow-2xl shadow-primary/20 w-full sm:w-auto max-w-md sm:max-w-none">
                  Enroll Now — Let's Go
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;

