import { Zap, ShieldCheck, Globe } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'Rapid deployment without compromising quality.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparent Policies',
    description: 'Clear billing. 40% retention on cancellation.',
  },
  {
    icon: Globe,
    title: 'Global Standards',
    description: 'International quality code and design standards.',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background" />
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="reveal text-3xl md:text-5xl font-display font-semibold text-white tracking-tight mb-8">
          Precision. Luxury. <span className="text-primary">Performance.</span>
        </h2>
        <p className="reveal stagger-1 text-lg text-muted-foreground font-light leading-relaxed mb-12">
          At Triozen.Tech, we don't just build websites; we craft digital
          legacies. Our approach is rooted in a deep understanding of luxury
          aesthetics.
        </p>

        <div className="reveal stagger-2 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl bg-secondary border border-white/5 hover:border-primary/30 transition-colors"
            >
              <feature.icon className="w-6 h-6 text-primary mb-4" />
              <h4 className="text-white font-medium mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
