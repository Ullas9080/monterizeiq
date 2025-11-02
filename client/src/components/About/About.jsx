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
    },
    {
      title: "💡 Empowering Creators",
      accent: "text-indigo-600",
      points: [
        "🤖 AI-based tools to enhance your YouTube strategies.",
        "📈 Track views, subscribers, and engagement efficiently.",
        "🎥 Understand audience behavior with data-driven clarity.",
        "🏆 Turn analytics into actions that grow your audience.",
      ],
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center py-16 px-6">
      <div className="2xl:max-w-6xl max-w-4xl w-full flex flex-col md:flex-row justify-between items-center gap-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`
              group relative w-full md:w-1/2 rounded-3xl p-8 shadow-md 
              bg-white border border-pink-200 transition-all duration-500 
              hover:scale-105 hover:shadow-2xl hover:text-white 
              hover:bg-linear-to-br from-indigo-500 to-pink-500
            `}
          >
            <div className="relative z-10">
              <h2
                className={`text-2xl font-bold mb-4 ${card.accent} group-hover:text-white`}
              >
                {card.title}
              </h2>

              <ul className="space-y-2 text-[15px] font-medium leading-relaxed">
                {card.points.map((p, i) => (
                  <li
                    key={i}
                    className="transition-all duration-300 group-hover:translate-x-1"
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
