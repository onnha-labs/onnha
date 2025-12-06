import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Background from "./Background";

export default function Hero() {
  return (
    <section className="relative w-full h-auto flex flex-col justify-center items-center pt-24 z-10">
      {/* Background Abstract Shapes */}
      <Background />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Animated Badge */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-luxury-200 bg-white/50 backdrop-blur-sm text-xs font-medium uppercase tracking-widest text-luxury-600 shadow-sm hover:shadow-md transition-all cursor-default">
            <span className="w-1.5 h-1.5 rounded-full bg-luxury-500 animate-pulse"></span>
            Coming Soon
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 mb-6 ">
          onnha AI
          <span className="block text-4xl md:text-6xl lg:text-7xl mt-2 bg-clip-text text-transparent bg-linear-to-r from-gray-900 via-gray-700 to-luxury-600 h-22">
            Personal Branding Builder
          </span>
        </h1>

        {/* Subheadline (Thai + English context) */}
        <p className="text-lg md:text-2xl text-gray-500 max-w-4xl font-thai font-light leading-relaxed mb-10">
          A platform that helps you start building your online presence,{" "}
          <br className="hidden md:block" />
          with AI that analyzes the path that suits you.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <button
            type="button"
            className="cursor-pointer group relative px-8 py-4 bg-gray-900 text-white rounded-full font-medium text-lg overflow-hidden shadow-lg shadow-gray-200 hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="absolute inset-0 w-full h-full bg-linear-to-r from-luxury-500 to-luxury-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative flex items-center gap-2">
              Join Waitlist
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
          </button>

          <button
            type="button"
            className="cursor-pointer group px-8 py-4 bg-white text-gray-600 border border-gray-200 rounded-full font-medium text-lg hover:border-gray-400 hover:text-gray-900 transition-all hover:bg-gray-50"
          >
            <span className="flex items-center gap-2">
              Learn More
              <ChevronRight
                size={18}
                className="text-gray-400 group-hover:text-gray-900 transition-colors"
              />
            </span>
          </button>
        </div>

        {/* Micro-text / Social Proof */}
        <div className="mt-12 flex flex-col items-center gap-3">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 overflow-hidden"
              >
                <Image
                  src={`https://picsum.photos/100/100?random=${i}`}
                  alt="User"
                  className="w-full h-full object-cover opacity-80"
                  width={32}
                  height={32}
                />
              </div>
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-white bg-luxury-100 flex items-center justify-center text-[10px] font-bold text-luxury-600">
              +2k
            </div>
          </div>
          <p className="text-sm text-gray-400 font-medium flex items-center gap-1.5">
            <Sparkles size={14} className="text-luxury-400" />
            Empowering creators, professionals, and beginners.
          </p>
        </div>
      </div>

      {/* 3D Glass Card / Dashboard Preview (Abstract Representation) */}
      <div
        className="mt-16 w-full max-w-6xl mx-auto px-4 perspective-1000"
        style={{ perspective: "1000px" }}
      >
        <div className="relative rounded-t-3xl border border-gray-200/60 bg-white/40 backdrop-blur-xl shadow-2xl overflow-hidden h-64 md:h-96">
          <div className="absolute inset-0 bg-linear-to-b from-white/60 to-transparent pointer-events-none" />

          {/* Abstract UI Mockup */}
          <div className="p-8 md:p-12 flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-luxury-100 to-white shadow-inner mb-6 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-luxury-200/50" />
            </div>
            <div className="h-4 w-32 bg-gray-200/50 rounded-full mb-3" />
            <div className="h-3 w-48 bg-gray-100/50 rounded-full" />

            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-luxury-300/10 rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-blue-100/10 rounded-full blur-3xl" />
          </div>

          {/* Grid overlay for tech feel */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-size-[64px_64px]" />
        </div>
      </div>
    </section>
  );
}
