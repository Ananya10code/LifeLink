function Hero() {
  return (
    <section className="bg-red-50 min-h-[85vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>
          <h1 className="text-6xl font-bold leading-tight">
            Donate Blood,
            <span className="text-red-600"> Save Lives ❤️</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            LifeLink connects blood donors, hospitals and patients
            on one smart platform to save lives faster.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
              Become a Donor
            </button>

            <button className="border border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-100">
              Find Blood
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className="w-80 h-80 bg-red-200 rounded-full flex items-center justify-center text-8xl">
            ❤️
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;