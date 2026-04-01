export default function Header({mode , setMode}) {
    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 border-b ${
            mode === 'dark' 
            ? "bg-slate-950/80 backdrop-blur-md border-slate-800" 
            : "bg-white/80 backdrop-blur-md border-slate-200/60"
        }`}>
            <div className="w-full mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center group cursor-pointer">
                    <h1 className={`text-2xl font-black tracking-tighter flex items-center transition-colors ${
                        mode === 'dark' ? "text-white" : "text-slate-900"
                    }`}>
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-400 to-violet-400">
                            H
                        </span>
                        <span className="ml-px">ermes</span>
                        <div className="ml-1 w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></div>
                    </h1>
                </div>

                <p className={`hidden md:block text-sm font-medium italic transition-colors ${
                    mode === 'dark' ? "text-slate-400" : "text-slate-500"
                }`}>
                    "Focus on what matters"
                </p>

                <div className="flex items-center gap-4">
                    {mode === 'light' ? (
                        <button 
                            className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 hover:text-indigo-600 hover:bg-white hover:shadow-sm transition-all duration-200 group/mode"
                            onClick={() => setMode("dark")}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                            </svg>
                        </button>
                    ) : (
                        <button 
                            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 hover:text-amber-300 hover:bg-slate-800 hover:shadow-sm transition-all duration-200 group/mode"
                            onClick={() => setMode("light")}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" >
                                <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
                            </svg>
                        </button>
                    )}

                    <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-lg border transition-colors ${
                        mode === 'dark' 
                        ? "bg-slate-900 text-slate-500 border-slate-800" 
                        : "bg-slate-100/50 text-slate-400 border-slate-200/60"
                    }`}>
                        v1.0
                    </span>
                </div>
            </div>
        </header>
    )
}