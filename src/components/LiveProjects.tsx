
import { ExternalLink } from 'lucide-react';

const developedProjects = [
    {
        title: "Solnexx",
        description: "Innovative digital solutions empowering businesses with scalable technology and strategic design.",
        link: "https://solnexx.com/",
        category: "Corporate / Technology",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "CBM360 TIV",
        description: "Testing, Inspection & Certification Services. Ensuring safety, security, and sustainability worldwide with expert advisory.",
        link: "https://cbm360tiv.com/services",
        category: "Corporate / Industrial",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Inspectors 360",
        description: "Leading provider of recruitment, staffing, and HR administration. Specializing in technical staff and industrial equipment supply.",
        link: "https://inspectors360.com/services",
        category: "HR / Logistics",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Brelis Streetwear",
        description: "Premium streetwear brand combining urban spirit with elite craftsmanship. Exclusive drops of oversized hoodies and tees.",
        link: "https://brelis.in/",
        category: "E-Commerce / Fashion",
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Custom Graphics 4U",
        description: "Dynamic online design tool for custom t-shirts and apparel. High-quality printing with a focus on creativity and fast delivery.",
        link: "https://customgraphics4u.com/",
        category: "Web Application / Design",
        image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

const developingProjects = [
    {
        title: "Zythova",
        description: "Next-generation web application currently in active development phase. Focusing on performance and user scalability.",
        link: "https://nevyrafron.onrender.com/",
        category: "Under Development",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Skilltwin UX Mastery",
        description: "Interactive learning platform for UX/UI enthusiasts. Building the future of design education.",
        link: "https://skilltwin-ux-mastery-frontend.onrender.com/",
        category: "Education / EdTech",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

const LiveProjects = () => {
    const renderProjectCard = (project: typeof developedProjects[0], index: number) => (
        <div
            key={project.title}
            className={`reveal stagger-${(index % 3) + 1} group relative p-8 rounded-2xl border border-white/5 bg-secondary/30 hover-card overflow-hidden`}
        >
            {/* Background Glow */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                    <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                        {project.category}
                    </span>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-primary hover:text-black transition-all duration-300"
                    >
                        <ExternalLink size={18} />
                    </a>
                </div>

                <div className="mb-8 overflow-hidden rounded-xl aspect-[16/9] border border-white/5">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                </div>

                <h3 className="text-2xl font-display font-medium text-white mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                </h3>

                <p className="text-muted-foreground font-light text-sm leading-relaxed mb-8 flex-grow">
                    {project.description}
                </p>

                <div className="pt-6 border-t border-white/5">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative px-6 py-3 bg-white/5 border border-white/10 text-white text-xs font-semibold rounded-full overflow-hidden transition-all duration-300 inline-flex items-center gap-2 hover:bg-primary hover:text-black hover:border-primary"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View Project
                            <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );

    return (
        <section id="live-projects" className="py-32 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full grid-pattern opacity-40 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="reveal text-4xl md:text-6xl font-display font-semibold text-white tracking-tighter mb-4">
                            Project <span className="text-primary italic">Showcase</span>
                        </h2>
                        <p className="reveal stagger-1 text-muted-foreground text-lg font-light leading-relaxed">
                            A selection of our deployed works and ongoing developments.
                        </p>
                    </div>
                </div>

                {/* Developer Projects Section */}
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px bg-white/10 flex-grow" />
                        <h3 className="text-2xl font-display text-white font-medium tracking-tight">Developed <span className="text-primary">Projects</span></h3>
                        <div className="h-px bg-white/10 flex-grow" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {developedProjects.map((project, index) => renderProjectCard(project, index))}
                    </div>
                </div>

                {/* Under Developing Section */}
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px bg-white/10 flex-grow" />
                        <h3 className="text-2xl font-display text-white font-medium tracking-tight">Under <span className="text-primary">Development</span></h3>
                        <div className="h-px bg-white/10 flex-grow" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {developingProjects.map((project, index) => renderProjectCard(project, index))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LiveProjects;
