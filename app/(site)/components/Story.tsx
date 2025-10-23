const Story = () => {
  return (
    <section id="story" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Image/Visual Side */}
          <div className="relative order-first lg:order-none">
            {/* Main Image */}
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg bg-off-white">
              <img
                src="/pink-salt.png"
                alt="Himalayan Mountains where our salt is sourced"
                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-contain"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-pink-light rounded-full flex items-center justify-center">
              <span className="text-xl sm:text-2xl font-serif">🌄</span>
            </div>

            {/* Stats Overlay */}
            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 bg-white rounded-lg shadow-md p-3 sm:p-4">
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl font-serif text-terracotta font-bold">
                  250M+
                </div>
                <div className="text-xs text-text-medium">Years Old</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-text-dark mb-3 sm:mb-4">
                From Ancient Seas to Your Table
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-terracotta rounded-full mb-4 sm:mb-6"></div>
            </div>

            <div className="space-y-3 sm:space-y-4 text-text-medium leading-relaxed text-sm sm:text-base">
              <p>
                Our Himalayan pink salt originates from ancient sea deposits
                deep within the majestic Himalayan mountains. Formed over{" "}
                <strong>250 million years ago</strong>, these pristine salt
                reserves have been protected from modern pollution and
                environmental contaminants.
              </p>

              <p>
                Each crystal is hand-harvested using traditional methods that
                respect both the environment and the cultural heritage of the
                region. We work directly with local communities in Pakistan to
                ensure ethical sourcing and fair trade practices.
              </p>

              <p>
                Unlike regular table salt which is heavily processed and
                stripped of minerals, our salt retains its natural composition
                with <strong>84+ essential trace minerals</strong>
                including magnesium, potassium, calcium, and iron—giving it the
                distinctive pink hue and unique health benefits.
              </p>
            </div>

            {/* Purity Features */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-pink-light rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-terracotta"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-medium text-text-dark">
                  100% Natural
                </span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-pink-light rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-terracotta"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-medium text-text-dark">
                  No Additives
                </span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-pink-light rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-terracotta"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-medium text-text-dark">
                  Ethically Sourced
                </span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-pink-light rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-terracotta"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-medium text-text-dark">
                  Chemical-Free
                </span>
              </div>
            </div>

            {/* Optional CTA */}
            <div className="pt-4 sm:pt-6">
              <button className="bg-terracotta cursor-pointer hover:bg-terracotta-dark text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-colors flex items-center gap-2 text-sm sm:text-base w-full sm:w-auto justify-center">
                Learn Our Sourcing Process
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Comparison Section */}
        <div className="mt-12 sm:mt-16 md:mt-20 bg-off-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-text-dark text-center mb-6 sm:mb-8">
            Why Choose Himalayan Over Regular Salt?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
                <h4 className="text-lg sm:text-xl font-serif text-terracotta mb-3 sm:mb-4">
                  Himalayan Pink Salt
                </h4>
                <ul className="space-y-2 sm:space-y-3 text-left text-text-medium text-sm sm:text-base">
                  <li className="flex items-center gap-2 sm:gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-2 h-2 sm:w-3 sm:h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    84+ Natural Minerals
                  </li>
                  <li className="flex items-center gap-2 sm:gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-2 h-2 sm:w-3 sm:h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    No Additives or Chemicals
                  </li>
                  <li className="flex items-center gap-2 sm:gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-2 h-2 sm:w-3 sm:h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    Ancient & Pristine Source
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
                <h4 className="text-lg sm:text-xl font-serif text-text-light mb-3 sm:mb-4">
                  Regular Table Salt
                </h4>
                <ul className="space-y-2 sm:space-y-3 text-left text-text-medium text-sm sm:text-base">
                  <li className="flex items-center gap-2 sm:gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-2 h-2 sm:w-3 sm:h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    Stripped of Minerals
                  </li>
                  <li className="flex items-center gap-2 sm:gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-2 h-2 sm:w-3 sm:h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    Contains Additives
                  </li>
                  <li className="flex items-center gap-2 sm:gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-2 h-2 sm:w-3 sm:h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    Heavily Processed
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
