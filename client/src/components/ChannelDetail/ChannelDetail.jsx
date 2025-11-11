import React from "react";
import { useAtom } from "jotai";
import { atomStats } from "../../Atoms/ChannelAtoms";
import { FaUsers, FaEye, FaVideo } from "react-icons/fa";
import CountUp from "react-countup";

const ChannelDetail = () => {
  const [ChannelStats] = useAtom(atomStats);
  if (!ChannelStats) return null;

  const cards = [
    {
      title: "Subscribers",
      value: ChannelStats.subscriberCount,
      icon: <FaUsers />,
      gradient: "from-pink-500 via-fuchsia-500 to-rose-500",
      accent: "text-pink-600",
    },
    {
      title: "Total Views",
      value: ChannelStats.viewCount,
      icon: <FaEye />,
      gradient: "from-fuchsia-500 via-rose-500 to-pink-500",
      accent: "text-fuchsia-600",
    },
    {
      title: "Videos",
      value: ChannelStats.videoCount,
      icon: <FaVideo />,
      gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
      accent: "text-rose-600",
    },
  ];

  return (
    <section
      className="
        w-full flex flex-wrap sm:flex-nowrap 
        justify-center sm:justify-between 
        gap-3 sm:gap-5 md:gap-6 
        py-3
      "
    >
      {cards.map((card, index) => (
        <div
          key={index}
          className={`
            flex flex-col items-start justify-center
            bg-white/20 backdrop-blur-xl
            border border-white/30 shadow-md
            rounded-2xl relative overflow-hidden
            p-3 sm:p-4 md:p-6
            transition-all duration-500 group
            hover:shadow-[0_8px_25px_rgba(236,72,153,0.25)]
            hover:-translate-y-2 hover:scale-[1.02]
            min-w-[100px] sm:min-w-[140px] md:min-w-[180px]
            max-w-[200px]
          `}
        >
          {/* Gradient overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-500`}
          ></div>

          {/* Accent bar */}
          <div
            className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${card.gradient} rounded-l-2xl transition-all duration-500 group-hover:w-2`}
          ></div>

          {/* Card content */}
          <div className="relative z-10 flex flex-col gap-1 sm:gap-2">
            <div className="flex items-center gap-1.5 sm:gap-2 text-gray-900">
              {React.cloneElement(card.icon, {
                className:
                  "w-4 h-4 sm:w-5 sm:h-5 text-pink-600 group-hover:scale-110 transition-transform duration-300",
              })}
              <span
                className={`text-[11px] sm:text-sm font-semibold ${card.accent}`}
              >
                {card.title}
              </span>
            </div>
            <p className="text-sm sm:text-lg md:text-xl font-bold text-gray-900">
              <CountUp end={card.value} duration={1.8} separator="," />
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ChannelDetail;
