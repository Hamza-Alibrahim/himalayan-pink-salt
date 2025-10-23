import Testimonial from "./Testimonial";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Professional Chef",
      location: "New York, NY",
      rating: 5,
      text: "As a professional chef, I've tried every salt available. This Himalayan pink salt has transformed my dishes. The mineral complexity and pure flavor are unmatched. My customers constantly compliment the enhanced taste of our seasoned dishes.",
      image: "/chef-avatar.jpg",
      verified: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Health Coach",
      location: "Los Angeles, CA",
      rating: 5,
      text: "I recommend this salt to all my clients. The 84+ trace minerals make a noticeable difference in electrolyte balance. My clients report better hydration and reduced muscle cramps. It's the only salt I trust for optimal health.",
      image: "/health-coach-avatar.jpg",
      verified: true,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Home Cook",
      location: "Austin, TX",
      rating: 5,
      text: "I was skeptical at first, but after one use I was converted! The flavor is so much cleaner than regular salt. My family noticed the difference immediately. The grinder is perfect and the salt doesn't clump. Worth every penny!",
      image: "/home-cook-avatar.jpg",
      verified: true,
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      role: "Nutritionist",
      location: "Boston, MA",
      rating: 5,
      text: "From a nutritional standpoint, this salt is superior. The natural mineral content supports thyroid function and hydration. I've switched my practice exclusively to recommending Himalayan salt, and this brand is the purest I've found.",
      image: "/doctor-avatar.jpg",
      verified: true,
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Yoga Instructor",
      location: "Portland, OR",
      rating: 5,
      text: "I use this salt for both cooking and bath soaks. The bath crystals are incredibly relaxing and my skin has never felt better. It's become an essential part of my self-care routine. The quality is exceptional.",
      image: "/yoga-avatar.jpg",
      verified: true,
    },
    {
      id: 6,
      name: "Robert Martinez",
      role: "Food Blogger",
      location: "Chicago, IL",
      rating: 5,
      text: "I've featured this salt on my blog multiple times. The pink hue makes food photography stunning, and the taste elevates every recipe. My followers constantly ask where they can get it. Simply the best salt available.",
      image: "/blogger-avatar.jpg",
      verified: true,
    },
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-24 bg-off-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-text-dark mb-3 sm:mb-4">
            Loved by Thousands
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-medium max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what chefs, health experts,
            and home cooks are saying about our Himalayan pink salt.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-8 sm:mb-12 md:mb-16">
          <div className="text-center px-2 sm:px-0">
            <div className="text-xl sm:text-2xl md:text-3xl font-serif text-terracotta font-bold">
              4.9/5
            </div>
            <div className="text-xs sm:text-sm text-text-medium">
              Average Rating
            </div>
          </div>
          <div className="text-center px-2 sm:px-0">
            <div className="text-xl sm:text-2xl md:text-3xl font-serif text-terracotta font-bold">
              2,500+
            </div>
            <div className="text-xs sm:text-sm text-text-medium">
              Happy Customers
            </div>
          </div>
          <div className="text-center px-2 sm:px-0">
            <div className="text-xl sm:text-2xl md:text-3xl font-serif text-terracotta font-bold">
              98%
            </div>
            <div className="text-xs sm:text-sm text-text-medium">Recommend</div>
          </div>
          <div className="text-center px-2 sm:px-0">
            <div className="text-xl sm:text-2xl md:text-3xl font-serif text-terracotta font-bold">
              100%
            </div>
            <div className="text-xs sm:text-sm text-text-medium">
              Satisfaction
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Social Proof Logos */}
        <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-sm border border-border-light">
          <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-text-dark text-center mb-6 sm:mb-8">
            Featured In
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 opacity-60">
            <div className="text-lg sm:text-xl md:text-2xl font-serif text-text-dark font-bold text-center">
              Food & Wine
            </div>
            <div className="text-lg sm:text-xl md:text-2xl font-serif text-text-dark font-bold text-center">
              Health Magazine
            </div>
            <div className="text-lg sm:text-xl md:text-2xl font-serif text-text-dark font-bold text-center">
              Chef's Choice
            </div>
            <div className="text-lg sm:text-xl md:text-2xl font-serif text-text-dark font-bold text-center">
              Well+Good
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16">
          <div className="bg-terracotta text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif mb-3 sm:mb-4">
              Join Thousands of Satisfied Customers
            </h3>
            <p className="text-pink-light mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Experience the difference that pure, mineral-rich Himalayan salt
              can make in your cooking and health.
            </p>
            <button className="cursor-pointer bg-white text-terracotta hover:bg-off-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium transition-colors text-sm sm:text-base w-full sm:w-auto">
              Shop Now - Join the Community
            </button>
            <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-pink-light">
              ⭐️⭐️⭐️⭐️⭐️ Rated 4.9/5 by 2,500+ customers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
