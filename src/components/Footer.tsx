const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-background text-center">
      <div className="flex flex-col items-center gap-6">
        <a
          href="#"
          className="text-xl font-bold tracking-tighter text-white font-display uppercase"
        >
          Triozen.Tech
        </a>
        <p className="text-muted-foreground text-xs tracking-wide">
          © {new Date().getFullYear()} Triozen.Tech. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
