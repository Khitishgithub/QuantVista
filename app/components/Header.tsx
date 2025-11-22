import Link from "next/link";


const Header = () => {
  return (
    <div className="bg-linear-to-b from-slate-50 to-white text-slate-900">
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-linear-to-br from-indigo-600 to-cyan-400 flex items-center justify-center text-white font-bold">
            QV
          </div>
          <div>
            <h1 className="text-lg font-semibold">QuantVista</h1>
            <p className="text-xs text-slate-500">
              Intelligent portfolio insight
            </p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link className="hover:text-indigo-600" href="#features">
            Features
          </Link>
          <Link className="hover:text-indigo-600" href="#tech">
            Tech
          </Link>
          
          <a
            className="rounded-md bg-indigo-600 text-white px-4 py-2 text-sm hover:bg-indigo-700"
            href="#get-started"
          >
            Get Started
          </a>
        </nav>
        <button className="md:hidden p-2 rounded-md bg-slate-100">☰</button>
      </header>
    </div>
  );
};

export default Header;
