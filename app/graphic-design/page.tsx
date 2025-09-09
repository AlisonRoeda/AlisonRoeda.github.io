import Link from "next/link";

// Force deployment refresh
export default function GraphicDesign() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-black text-slate-700 mb-8 tracking-tight">
          GRAPHIC DESIGN
        </h1>
        <p className="text-2xl md:text-3xl text-slate-600 font-medium">
          Coming Soon
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-block bg-slate-700 text-white px-8 py-4 font-bold text-lg uppercase tracking-wider hover:bg-slate-600 transition-colors duration-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}