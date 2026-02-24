import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] md:w-[40%] h-[40%] bg-primary/10 blur-[80px] md:blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] md:w-[40%] h-[40%] bg-primary/5 blur-[80px] md:blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight leading-[1.15] sm:leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100 px-2 sm:px-0">
            Stop Consuming. <br className="hidden sm:block" />
            <span className="text-gradient-gold">Start Creating.</span>
          </h1>

          <p className="max-w-[700px] text-muted-foreground text-base sm:text-lg md:text-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200 px-4 sm:px-0">
            Master the art of content creation, brand building, and monetization 
            with Tobeszn. Join 2,000+ students turning their passion into a career.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto px-4 sm:px-0 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
            <Link
              className={buttonVariants({
                variant: "hero",
                size: "lg",
                className: "w-full sm:w-auto px-8 py-6 text-base sm:text-lg group",
              })}
              href="/courses"
            >
              Start Learning Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              className={buttonVariants({
                size: "lg",
                variant: "outline",
                className: "w-full sm:w-auto px-8 py-6 text-base sm:text-lg border-primary/20 hover:bg-primary/5",
              })}
              href="#modules"
            >
              <Play className="mr-2 w-4 h-4 fill-current" />
              Watch Trailer
            </Link>
          </div>

          {/* Social Proof Mini */}
          <div className="pt-8 md:pt-12 flex flex-col items-center gap-3 md:gap-4 animate-in fade-in duration-1000 delay-500">
            <div className="flex -space-x-2 md:-space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center overflow-hidden">
                   <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="student" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-background bg-primary flex items-center justify-center text-[8px] md:text-[10px] font-bold text-white">
                2k+
              </div>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground">
              Joined by <span className="font-bold text-foreground">2,000+</span> creators
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
