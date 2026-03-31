export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
            <div className="w-full mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center group cursor-pointer">
                    <h1 className="text-2xl font-black tracking-tighter text-slate-900 flex items-center">
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-600 to-violet-500">
                            H
                        </span>
                        <span className="ml-px">ermes</span>
                        <div className="ml-1 w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse"></div>
                    </h1>
                </div>

                <p className="hidden md:block text-slate-500 text-sm font-medium italic">
                    "Focus on what matters"
                </p>

                <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-2 py-1 rounded">
                        v1.0
                    </span>
                </div>
            </div>
        </header>
    )
}