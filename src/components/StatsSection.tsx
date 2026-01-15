const stats = [
  { value: '500+', label: 'Projects' },
  { value: '98%', label: 'Success Rate' },
  { value: '24/7', label: 'Support' },
  { value: 'Global', label: 'Client Base' },
];

const StatsSection = () => {
  return (
    <section className="border-y border-white/5 bg-secondary/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5">
          {stats.map((stat, index) => (
            <div key={stat.label} className={`reveal stagger-${index}`}>
              <h3 className="text-3xl font-display font-medium text-white mb-1">
                {stat.value}
              </h3>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
