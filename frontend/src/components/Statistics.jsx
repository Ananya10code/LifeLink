function Statistics() {

  const stats = [
    {
      number: "10,000+",
      title: "Registered Donors",
    },
    {
      number: "350+",
      title: "Partner Hospitals",
    },
    {
      number: "25,000+",
      title: "Lives Saved",
    },
    {
      number: "24/7",
      title: "Emergency Support",
    },
  ];

  return (
    <section className="bg-red-600 py-20 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          Our Impact
        </h2>

        <div className="grid md:grid-cols-4 gap-10">

          {stats.map((stat, index) => (

            <div
              key={index}
              className="text-center"
            >

              <h1 className="text-5xl font-bold">
                {stat.number}
              </h1>

              <p className="mt-3 text-lg">
                {stat.title}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Statistics;