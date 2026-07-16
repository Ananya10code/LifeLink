function Features() {
  const features = [
    {
      title: "Find Donors",
      icon: "🩸",
      description: "Search nearby blood donors instantly."
    },
    {
      title: "Emergency Requests",
      icon: "🚑",
      description: "Raise emergency blood requests."
    },
    {
      title: "Blood Banks",
      icon: "🏥",
      description: "Check blood availability in hospitals."
    },
    {
      title: "Nearby Hospitals",
      icon: "📍",
      description: "Locate hospitals and blood banks."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        Our Services
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-red-50 rounded-xl p-8 shadow hover:shadow-xl transition"
          >
            <div className="text-5xl">{feature.icon}</div>

            <h3 className="mt-4 text-xl font-bold">
              {feature.title}
            </h3>

            <p className="mt-2 text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;