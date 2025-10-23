const Hero = () => {
  return (
    <section id="home" className="bg-pink-dark">
      <div className="container mx-auto">
        <div className="flex items-center justify-center px-4 pb-10 lg:py-20">
          <div className="container mx-auto">
            <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-12">
              {/* Text Content */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 leading-tight">
                  Pure Himalayan Pink Salt
                </h1>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-white mb-6">
                  Nature's Ancient Mineral Treasure
                </h2>
                <p className="text-sm sm:text-base text-pink-medium md:text-lg mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Harvested from pristine Himalayan mountains, our salt contains
                  84+ essential trace minerals. Experience enhanced flavor,
                  better health, and natural purity in every crystal—free from
                  modern pollutants and additives.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <button className="bg-pink-light cursor-pointer hover:bg-pink-medium transition-colors text-terracotta px-6 py-3 rounded-full font-medium text-sm sm:text-base">
                    Shop Now
                  </button>
                  <button className="border border-white cursor-pointer hover:bg-pink-light hover:text-terracotta transition-colors text-white px-6 py-3 rounded-full font-medium text-sm sm:text-base">
                    Discover Benefits
                  </button>
                </div>
              </div>

              {/* Image Section */}
              <div className="w-full lg:w-1/2 flex justify-center items-center mb-6 lg:mb-0">
                <img
                  src="/pink-salt.png"
                  alt="Pure Himalayan Pink Salt Crystals"
                  className="w-full max-w-md sm:max-w-lg md:max-w-xl h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
