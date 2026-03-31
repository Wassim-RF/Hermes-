export default function Filter({ setFilter, filter }) {
    return (
        <div className="inline-flex bg-slate-100/80 p-1 rounded-xl border border-slate-200 shadow-inner">
            <button 
                onClick={() => setFilter("All")}
                className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all duration-200 ${
                    filter === "All" 
                    ? "bg-white text-indigo-600 shadow-sm ring-1 ring-slate-200/50" 
                    : "text-slate-400 hover:text-slate-600 hover:bg-white/40"
                }`}
            >
                All
            </button>
            
            <button 
                onClick={() => setFilter("Complete")}
                className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all duration-200 ${
                    filter === "Complete" 
                    ? "bg-white text-indigo-600 shadow-sm ring-1 ring-slate-200/50" 
                    : "text-slate-400 hover:text-slate-600 hover:bg-white/40"
                }`}
            >
                Complete
            </button>
            
            <button 
                onClick={() => setFilter("Incomplete")}
                className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all duration-200 ${
                    filter === "Incomplete" 
                    ? "bg-white text-indigo-600 shadow-sm ring-1 ring-slate-200/50" 
                    : "text-slate-400 hover:text-slate-600 hover:bg-white/40"
                }`}
            >
                Incomplete
            </button>
        </div>
    );
}