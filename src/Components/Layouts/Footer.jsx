export default function Footer() {
    return (
        <footer className="w-full py-8 mt-auto border-t border-slate-100/60">
            <div className="max-w-4xl mx-auto px-6 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-slate-400 font-medium">
                <p className="hover:text-indigo-500 transition-colors cursor-default">
                    Hermes <span className="font-black text-slate-900">Task Manager</span>
                </p>

                <p>
                &copy; 2026 &bull; <span className="text-slate-800">Wassim.Dev</span>
                </p>
            </div>
        </footer>
    );
}