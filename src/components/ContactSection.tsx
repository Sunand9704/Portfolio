import { Mail, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-32 border-t border-white/5 bg-neutral-925 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-primary/5 to-transparent" />
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <h2 className="reveal text-4xl md:text-5xl font-display font-semibold text-white tracking-tighter mb-6">
          Let's Build Something Great
        </h2>
        <p className="reveal stagger-1 text-muted-foreground mb-12 font-light text-lg">
          Ready to elevate your digital presence? Reach out directly via email or
          WhatsApp.
        </p>

        <div className="reveal stagger-2 space-y-4">
          <div className="p-8 bg-secondary/80 backdrop-blur-md border border-white/10 rounded-2xl hover:border-primary/30 transition-all duration-300 group">
            <span className="block text-xs text-primary uppercase tracking-widest mb-3">
              Email Us
            </span>
            <a
              href="mailto:triozen.tech@gmail.com"
              className="text-xl md:text-3xl font-medium text-white group-hover:text-primary transition-colors break-all"
            >
              triozen.tech@gmail.com
            </a>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="mailto:triozen.tech@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition-all w-full md:w-auto"
            >
              <Mail className="w-[18px] h-[18px]" />
              Send Email
            </a>
            <a
              href="https://wa.me/9398334115"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white text-sm font-semibold rounded-full hover:bg-[#20bd5a] transition-all w-full md:w-auto"
            >
              <MessageCircle className="w-[18px] h-[18px]" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
