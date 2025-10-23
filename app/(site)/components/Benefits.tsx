import Benefit from "./Benefit";

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      icon: (
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-terracotta"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      ),
      title: "Culinary Excellence",
      description:
        "Transform your cooking with nature's perfect seasoning that enhances flavors naturally.",
      features: [
        "Enhances natural food flavors",
        "Perfect for grilling and roasting",
        "Ideal as finishing salt",
        "Balanced mineral composition",
      ],
    },
    {
      id: 2,
      icon: (
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-terracotta"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "Health & Wellness",
      description:
        "Support your body's natural balance with 84+ essential minerals and electrolytes.",
      features: [
        "Rich in essential minerals",
        "Supports hydration",
        "Promotes pH balance",
        "Aids digestion naturally",
      ],
    },
    {
      id: 3,
      icon: (
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-terracotta"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Beauty & Bath",
      description:
        "Create spa-like experiences at home with therapeutic salt baths and beauty treatments.",
      features: [
        "Detoxifies and rejuvenates skin",
        "Soothes muscle tension",
        "Improves skin texture",
        "Natural exfoliation",
      ],
    },
    {
      id: 4,
      icon: (
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-terracotta"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
          />
        </svg>
      ),
      title: "Home & Ambiance",
      description:
        "Purify your space and create warm, relaxing environments with natural salt products.",
      features: [
        "Salt lamps purify air",
        "Creates warm ambiance",
        "Natural negative ions",
        "Reduces allergens",
      ],
    },
  ];

  return (
    <section id="benefits" className="py-12 sm:py-16 md:py-24 bg-off-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-text-dark mb-3 sm:mb-4">
            Benefits & Uses
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-medium max-w-3xl mx-auto leading-relaxed">
            Discover the versatile applications of Himalayan pink salt that go
            beyond the kitchen. From health benefits to home wellness,
            experience nature's miracle in every aspect of your life.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {benefits.map((benefit) => (
            <Benefit key={benefit.id} benefit={benefit} />
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 sm:mt-16 md:mt-20 bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-sm border border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            {/* Content */}
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-text-dark mb-3 sm:mb-4">
                Why Choose Himalayan Pink Salt?
              </h3>
              <p className="text-text-medium mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Unlike regular table salt, our Himalayan pink salt is completely
                natural and contains no additives or anti-caking agents. Each
                crystal is packed with the essential minerals your body needs to
                thrive.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                <div className="text-center p-3 sm:p-4 bg-pink-light rounded-lg">
                  <div className="text-lg sm:text-xl md:text-2xl font-serif text-terracotta font-bold">
                    84+
                  </div>
                  <div className="text-xs sm:text-sm text-text-medium mt-1">
                    Essential Minerals
                  </div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-pink-light rounded-lg">
                  <div className="text-lg sm:text-xl md:text-2xl font-serif text-terracotta font-bold">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm text-text-medium mt-1">
                    Natural & Pure
                  </div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-pink-light rounded-lg">
                  <div className="text-lg sm:text-xl md:text-2xl font-serif text-terracotta font-bold">
                    0
                  </div>
                  <div className="text-xs sm:text-sm text-text-medium mt-1">
                    Additives
                  </div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-pink-light rounded-lg">
                  <div className="text-lg sm:text-xl md:text-2xl font-serif text-terracotta font-bold">
                    250M+
                  </div>
                  <div className="text-xs sm:text-sm text-text-medium mt-1">
                    Years Old
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center order-first lg:order-last">
              <div className="bg-pink-light rounded-xl sm:rounded-2xl p-4 sm:p-6 w-full max-w-xs sm:max-w-sm md:max-w-md">
                <img
                  src="/pink-salt.png"
                  alt="Himalayan Salt Uses"
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
