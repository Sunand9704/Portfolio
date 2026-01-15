const projects = [
  {
    category: 'Finance',
    title: 'Vanguard Capital',
    description:
      'A complete rebranding and digital overhaul for a leading venture capital firm. We focused on trust.',
    tags: ['UI/UX', 'React'],
    image:
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    reverse: false,
  },
  {
    category: 'E-Commerce',
    title: 'Noir Apparel',
    description: 'A high-end streetwear Shopify store designed for drop-culture.',
    tags: ['Shopify', 'Liquid'],
    image:
      'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    reverse: true,
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-32 border-t border-white/5 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="reveal text-4xl md:text-5xl font-display font-semibold text-white tracking-tighter mb-16 text-center">
          Selected Works
        </h2>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="reveal group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div
                className={`${
                  project.reverse ? 'lg:order-2' : ''
                } relative rounded-2xl overflow-hidden aspect-video border border-white/5 bg-muted`}
              >
                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div
                className={`${
                  project.reverse ? 'lg:order-1 lg:text-right' : ''
                } space-y-6`}
              >
                <div
                  className={`text-primary text-xs font-bold tracking-widest uppercase mb-2 ${
                    project.reverse ? 'flex lg:justify-end' : ''
                  }`}
                >
                  {project.category}
                </div>
                <h3 className="text-3xl font-display font-medium text-white">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {project.description}
                </p>
                <div
                  className={`flex gap-3 pt-4 ${
                    project.reverse ? 'lg:justify-end' : ''
                  }`}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 text-muted-foreground text-xs rounded-full border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
