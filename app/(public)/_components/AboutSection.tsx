"use client";

import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.7 }}
              className="aspect-[3/4] rounded-[2.5rem] overflow-hidden border-4 border-background shadow-2xl relative z-10"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1 }}
                src='/hero-tobeszn.jpg'
                alt="Tobeszn"
                className="w-full h-full object-cover"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
              />
            </motion.div>
            
            {/* Background frames */}
            <motion.div
              initial={{ opacity: 0, x: 0, y: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ x: -8, y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="absolute -top-6 -left-6 w-full h-full border-2 border-primary/20 rounded-[2.5rem] -z-0"
            />
            <motion.div
              initial={{ opacity: 0, x: 0, y: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ x: 8, y: 8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="absolute -bottom-6 -right-6 w-full h-full bg-primary/5 rounded-[2.5rem] -z-0"
            />

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-background border border-border shadow-2xl rounded-[2rem] p-6 z-20 hover:hover-glow-gold"
            >
              <p className="font-display font-black text-4xl text-gradient-gold leading-none">500K+</p>
              <p className="text-muted-foreground text-sm font-bold uppercase tracking-widest mt-1">followers</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <p className="text-primary font-display font-semibold uppercase tracking-widest text-sm bg-primary/10 w-fit px-3 py-1 rounded-full">
                Meet your instructor
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-extrabold leading-tight">
                I'm <span className="text-gradient-gold">Tobeszn.</span>
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed"
            >
              <p>
                Content creator. Fashion lover. Law background turned full-time creator. 
                I built my brand from zero — no connections, no industry hookups, just strategy, consistency, and audacity.
              </p>
              <p>
                I've worked with some of the biggest brands in Nigeria and beyond. 
                I've cracked the code on what makes content go viral, and I've helped thousands of creators do the same.
              </p>
              <motion.p
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
                className="text-foreground font-semibold italic border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-2xl"
              >
                "This course is everything I wish someone told me when I started. No theory. No fluff. Just the exact playbook."
              </motion.p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {["Creator", "Fashion", "Lifestyle", "Influence", "Strategy"].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                  className="px-5 py-2 rounded-full text-sm font-bold border border-border bg-background hover:border-primary/40 hover:text-primary transition-all duration-300 cursor-default shadow-sm"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
