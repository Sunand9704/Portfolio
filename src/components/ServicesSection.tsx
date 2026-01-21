import { LayoutTemplate, ShoppingBag, Smartphone, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: LayoutTemplate,
    title: 'Web Design & UI/UX',
    description:
      "Bespoke digital environments tailored to your brand's narrative. We focus on conversion-driven layouts.",
    accentColor: 'bg-primary/5 group-hover:bg-primary/10',
  },
  {
    icon: ShoppingBag,
    title: 'E-Commerce',
    description:
      'High-converting stores with seamless checkout experiences.',
    accentColor: 'bg-blue-500/5 group-hover:bg-blue-500/10',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile experiences (iOS & Android). We engineer scalable apps using  React Native.',
    accentColor: 'bg-emerald-500/5 group-hover:bg-emerald-500/10',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 reveal">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-white tracking-tighter mb-4">
              Our Expertise
            </h2>
            <p className="text-muted-foreground max-w-md text-lg font-light">
              Comprehensive digital services designed for growth and impact.
            </p>
          </div>
          <div className="h-[1px] flex-1 bg-white/10 mx-8 hidden md:block mb-4" />
          <a
            href="#contact"
            className="text-primary hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
          >
            Discuss Requirements <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`reveal stagger-${index} hover-card p-10 rounded-2xl bg-secondary/50 border border-white/5 relative overflow-hidden group`}
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 ${service.accentColor} rounded-bl-full -mr-8 -mt-8 transition-all`}
              />
              <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-display font-medium text-white mb-4">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
