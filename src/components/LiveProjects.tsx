
import { ExternalLink } from 'lucide-react';

const developedProjects = [
    {
        title: "Brelis Streetwear",
        description: "Premium streetwear brand combining urban spirit with elite craftsmanship. Exclusive drops of oversized hoodies and tees.",
        link: "https://brelis.in/",
        category: "E-Commerce / Fashion",
        image: "https://res.cloudinary.com/dk6rrrwum/image/upload/v1769016260/Screenshot_2026-01-21_at_10.51.29_PM_wpxtsn.png"
    },
    {
        title: "CBM360 TIV",
        description: "Testing, Inspection & Certification Services. Ensuring safety, security, and sustainability worldwide with expert advisory.",
        link: "https://cbm360tiv.com/services",
        category: "Corporate / Industrial",
        image: "https://res.cloudinary.com/dk6rrrwum/image/upload/v1769016253/Screenshot_2026-01-21_at_10.51.16_PM_ige3de.png"
    },
    {
        title: "Inspectors 360",
        description: "Leading provider of recruitment, staffing, and HR administration. Specializing in technical staff and industrial equipment supply.",
        link: "https://inspectors360.com/services",
        category: "HR / Logistics",
        image: "https://res.cloudinary.com/dk6rrrwum/image/upload/v1769016262/Screenshot_2026-01-21_at_10.51.59_PM_nqaerm.png"
    },
    {
        title: "Custom Graphics 4U",
        description: "Dynamic online design tool for custom t-shirts and apparel. High-quality printing with a focus on creativity and fast delivery.",
        link: "https://customgraphics4u.com/",
        category: "Web Application / Design",
        image: "https://res.cloudinary.com/dk6rrrwum/image/upload/v1769016255/Screenshot_2026-01-21_at_10.52.25_PM_rl4pyu.png"
    },
    {
        title: "Solnexx",
        description: "Innovative digital solutions empowering businesses with scalable technology and strategic design.",
        link: "https://solnexx.com/",
        category: "Corporate / Technology",
        image: "https://res.cloudinary.com/dk6rrrwum/image/upload/v1769016257/Screenshot_2026-01-21_at_10.51.43_PM_c6izcp.png"
    },
];

const developingProjects = [
    {
        title: "Zythova",
        description: "Next-generation web application currently in active development phase. Focusing on performance and user scalability.",
        link: "https://nevyrafron.onrender.com/",
        category: "Under Development",
        image: "https://res.cloudinary.com/dk6rrrwum/image/upload/v1769016255/Screenshot_2026-01-21_at_10.52.52_PM_kgackl.png"
    },
    {
        title: "Skilltwin UX Mastery",
        description: "Interactive learning platform for UX/UI enthusiasts. Building the future of design education.",
        link: "https://skilltwin-ux-mastery-frontend.onrender.com/",
        category: "Education / EdTech",
        image: "https://res.cloudinary.com/dk6rrrwum/image/upload/v1769016736/Screenshot_2026-01-21_at_11.02.06_PM_arlsw4.png"
    }
];

const LiveProjects = () => {
    const renderProjectCard = (project: typeof developedProjects[0], index: number) => (
        <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`reveal stagger-${(index % 3) + 1} group relative p-8 rounded-2xl border border-white/5 bg-secondary/30 hover-card overflow-hidden block transition-all duration-300`}
        >
            {/* Background Glow */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                    <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                        {project.category}
                    </span>
                    <div
                        className="p-2 rounded-full bg-white/5 border border-white/10 text-white group-hover:bg-primary group-hover:text-black transition-all duration-300"
                    >
                        <ExternalLink size={18} />
                    </div>
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
                    <div
                        className="group/btn relative px-6 py-3 bg-white/5 border border-white/10 text-white text-xs font-semibold rounded-full overflow-hidden transition-all duration-300 inline-flex items-center gap-2 group-hover:bg-primary group-hover:text-black group-hover:border-primary"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View Project
                            <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </span>
                    </div>
                </div>
            </div>
        </a>
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
