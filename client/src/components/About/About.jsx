import React from "react";

const About = () => {
  const cards = [
    {
      title: "🎯 Why MonetizeIQ?",
      accent: "text-pink-600",
      points: [
        "📊 Get real-time analytics of your YouTube performance.",
        "🚀 Compare your channel with others using AI insights.",
        "🔎 Discover trends that boost engagement and growth.",
        "💡 Optimize your videos for better reach and monetization.",
      ],
      gradient: "from-pink-400 to-fuchsia-500",
    },
    {
      title: "💡 Empowering Creators",
      accent: "text-fuchsia-600",
      points: [
        "🤖 AI-based tools to enhance your YouTube strategies.",
        "📈 Track views, subscribers, and engagement efficiently.",
        "🎥 Understand audience behavior with data-driven clarity.",
        "🏆 Turn analytics into actions that grow your audience.",
      ],
      gradient: "from-fuchsia-500 to-rose-500",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center py-20 px-4 sm:px-8 bg-transparent relative z-10">
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 w-full max-w-6xl">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`
              relative flex-1 rounded-3xl p-8 
              bg-linear-to-br from-white/80 via-pink-50/70 to-white/60 
              backdrop-blur-xl border border-pink-100/60 
              shadow-2xl
              transition-all duration-500 group
              hover:shadow-[0_8px_25px_rgba(236,72,153,0.18)]
              hover:-translate-y-2 hover:border-pink-200/70
            `}
          >
            {/* Accent line */}
            <div
              className={`absolute left-0 top-0 h-full w-1 rounded-l-3xl bg-linear-to-b ${card.gradient} transition-all duration-500 group-hover:w-2`}
            ></div>

            {/* Soft glow on hover */}
            <div
              className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-linear-to-br ${card.gradient}`}
            ></div>

            <div className="relative z-10 flex flex-col h-full">
              <h2
                className={`text-2xl font-semibold mb-5 ${card.accent} group-hover:text-gray-900`}
              >
                {card.title}
              </h2>

              <ul className="space-y-3 text-gray-700 text-[15px] leading-relaxed">
                {card.points.map((p, i) => (
                  <li
                    key={i}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
