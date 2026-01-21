import { Mail } from 'lucide-react';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4 items-end">
      {/* Email Floating Button */}
      <a
        href="mailto:muhammadzeeshanabbas324@gmail.com"
        className="group relative flex items-center justify-center w-14 h-14 bg-muted text-white rounded-full border border-white/10 shadow-lg hover:bg-primary hover:text-black hover:scale-110 transition-all duration-300"
      >
        {/* Tooltip */}
        <span className="absolute right-16 bg-white text-black text-xs font-bold px-3 py-2 rounded-lg opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shadow-xl flex items-center gap-2">
          Send Email
          <div className="absolute top-1/2 -right-1 -mt-1 w-2 h-2 bg-white rotate-45" />
        </span>
        <Mail className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingButtons;
