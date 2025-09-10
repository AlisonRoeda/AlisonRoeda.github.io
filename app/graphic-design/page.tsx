import Link from "next/link";

export default function GraphicDesign() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tight">
              GRAPHIC DESIGN
            </h1>
            <Link
              href="/"
              className="bg-slate-700 text-white px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-slate-600 transition-colors duration-200 rounded-lg"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Simple Image Test */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Test Images</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <img 
                src="/images/graphic-design/chalkguys-1.png" 
                alt="Chalk Guys 1"
                className="w-full h-48 object-cover border"
              />
              <p className="text-sm mt-2">Chalk Guys 1</p>
            </div>
            <div>
              <img 
                src="/images/graphic-design/ChalkGuys-2.png" 
                alt="Chalk Guys 2"
                className="w-full h-48 object-cover border"
              />
              <p className="text-sm mt-2">Chalk Guys 2</p>
            </div>
            <div>
              <img 
                src="/images/graphic-design/Poster.png" 
                alt="Poster"
                className="w-full h-48 object-cover border"
              />
              <p className="text-sm mt-2">Poster</p>
            </div>
            <div>
              <img 
                src="/images/graphic-design/Insta Post part 2.png" 
                alt="Instagram Post"
                className="w-full h-48 object-cover border"
              />
              <p className="text-sm mt-2">Instagram Post</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}