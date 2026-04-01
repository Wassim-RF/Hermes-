export default function Filter({ setFilter, filter , mode }) {
    return (
        <div className={`inline-flex p-1 rounded-xl border transition-all duration-300 shadow-inner ${
            mode === 'dark' 
            ? "bg-slate-900 border-slate-800 shadow-black/20" 
            : "bg-slate-100/80 border-slate-200 shadow-inner"
        }`}>
            {["All", "Complete", "Incomplete"].map((f) => (
                <button 
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all duration-200 ${
                        filter === f 
                        ? (mode === 'dark' 
                            ? "bg-slate-800 text-indigo-400 shadow-lg ring-1 ring-slate-700" 
                            : "bg-white text-indigo-600 shadow-sm ring-1 ring-slate-200/50")
                        : (mode === 'dark'
                            ? "text-slate-500 hover:text-slate-300 hover:bg-slate-800/40"
                            : "text-slate-400 hover:text-slate-600 hover:bg-white/40")
                    }`}
                >
                    {f}
                </button>
            ))}
        </div>
    );
}