export default function Footer({mode}) {
    return (
        <footer className={`w-full py-8 mt-auto border-t transition-colors duration-500 ${
            mode === 'dark' ? "border-slate-800 bg-slate-950" : "border-slate-100/60 bg-white"
        }`}>
            <div className={`max-w-4xl mx-auto px-6 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-medium transition-colors ${
                mode === 'dark' ? "text-slate-500" : "text-slate-400"
            }`}>
                <p className="hover:text-indigo-500 transition-colors cursor-default">
                    Hermes <span className={`font-black transition-colors ${
                        mode === 'dark' ? "text-slate-200" : "text-slate-900"
                    }`}>Task Manager</span>
                </p>

                <p>
                    &copy; 2026 &bull; <span className={`transition-colors ${
                        mode === 'dark' ? "text-slate-300" : "text-slate-800"
                    }`}>Wassim.Dev</span>
                </p>
            </div>
        </footer>
    );
}