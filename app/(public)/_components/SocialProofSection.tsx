"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Chioma A.",
    handle: "@chioma.creates",
    text: "I went from 200 followers to 15K in 3 months. Tobeszn's framework actually works. No cap.",
    stat: "15K followers in 3 months",
  },
  {
    name: "David O.",
    handle: "@davidofilms",
    text: "Landed my first brand deal worth ₦500K after Module 5. This course pays for itself.",
    stat: "₦500K first brand deal",
  },
  {
    name: "Amara N.",
    handle: "@amarastyle_",
    text: "I was scared to even post a selfie. Now I'm creating reels that get 100K+ views. Wild.",
    stat: "100K+ views per reel",
  },
  {
    name: "Tunde M.",
    handle: "@tundetalks",
    text: "The confidence module alone changed my life. I show up differently now — online AND offline.",
    stat: "Complete mindset shift",
  },
];

const SocialProofSection = () => {
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

  const statsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const statItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-4 mb-16"
        >
          <p className="text-primary font-display font-semibold uppercase tracking-widest text-sm bg-primary/10 w-fit mx-auto px-3 py-1 rounded-full">
            Don't take our word for it
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold">
            They showed up.{" "}
            <span className="text-gradient-gold">They blew up.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Real results from creators just like you who decided to take the leap.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {testimonials.map((t, i) => (
            <motion.div key={i} variants={itemVariants}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-3xl bg-card border border-border/50 space-y-6 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 relative group h-full"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + j * 0.05, duration: 0.3 }}
                    >
                      <Star className="w-4 h-4 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-foreground text-base sm:text-lg md:text-xl leading-relaxed italic font-medium">"{t.text}"</p>
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${t.name}`} alt={t.name} />
                    </div>
                    <div>
                      <p className="font-display font-bold text-base">{t.name}</p>
                      <p className="text-muted-foreground text-sm">{t.handle}</p>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-primary bg-primary/10 px-4 py-1.5 rounded-full shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    {t.stat}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-24 relative"
        >
          <motion.div
            variants={statsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto p-10 rounded-[3rem] bg-secondary/20 border border-border/50 backdrop-blur-sm relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-[3rem] -z-10" />
            {[
              { num: "2,000+", label: "Students enrolled" },
              { num: "500K+", label: "Combined reach" },
              { num: "₦50M+", label: "Deals closed by students" },
              { num: "4.9/5", label: "Course rating" },
            ].map((s, i) => (
              <motion.div
                key={i}
                variants={statItemVariants}
                className="text-center space-y-2 group"
              >
                <motion.p
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-gradient-gold"
                >
                  {s.num}
                </motion.p>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
