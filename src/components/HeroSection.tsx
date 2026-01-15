import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-blob" />
        <div className="absolute top-[40%] right-[10%] w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[30%] w-96 h-96 bg-blue-900/10 rounded-full blur-[100px] animate-blob animation-delay-4000" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="reveal active inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium uppercase tracking-wider mb-8 hover:bg-primary/10 transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Accepting New Clients
        </div>

        <h1 className="reveal active stagger-1 font-display text-5xl md:text-7xl lg:text-9xl font-semibold text-white tracking-tighter leading-[0.9] mb-8">
          JIGIRIS<span className="text-neutral-700">_TECH</span>
        </h1>

        <p className="reveal active stagger-2 text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-12 leading-relaxed">
          We are a digital powerhouse crafting immersive web experiences,
          high-performance e-commerce systems, and strategic brand identities.
        </p>

        <div className="reveal active stagger-3 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-primary text-black text-sm font-semibold rounded-full overflow-hidden transition-all duration-300 w-full sm:w-auto"
          >
            <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full opacity-20" />
            <span className="relative flex items-center justify-center gap-2">
              Start Project{' '}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a
            href="#portfolio"
            className="px-8 py-4 bg-transparent border border-white/10 text-white text-sm font-medium rounded-full hover:bg-white/5 transition-all duration-300 w-full sm:w-auto backdrop-blur-sm"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
