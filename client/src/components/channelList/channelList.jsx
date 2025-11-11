import React from "react";
import { useSelector } from "react-redux";
import { useAtom} from "jotai";
import { atomStats } from "../../Atoms/ChannelAtoms";
import { useNavigate } from "react-router-dom";

const ChannelList = () => {
  const [ChannelStats, setDataChannelStats] = useAtom(atomStats);
  const { data, loading, error } = useSelector((state) => state.channelName);
  const navigate=useNavigate()

  const handleClick = (channel) => {
    setDataChannelStats(channel);
    navigate('/dashboard')
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-rose-500 font-medium text-lg">
        Loading channels...
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-red-500 font-medium text-lg">
        {error}
      </div>
    );

  if (!data?.data?.length)
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-gray-500">
        No channels found.
      </div>
    );

  return (
    <section className="min-h-screen py-16 px-6 bg-linear-to-br from-fuchsia-100 via-rose-50 to-orange-50 transition-all duration-700">
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-12 bg-linear-to-r from-fuchsia-500 via-rose-500 to-orange-500 bg-clip-text text-transparent">
        🎥 Explore Your Channel
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {data.data.map((channel) => (
          <div
            key={channel.channelId}
            className="relative group rounded-3xl overflow-hidden bg-white/80 backdrop-blur-xl border 
                       border-rose-100 shadow-[0_4px_15px_rgba(0,0,0,0.05)] 
                       hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] 
                       hover:-translate-y-2 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-linear-to-br from-fuchsia-100/60 via-rose-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col items-center p-8 text-center space-y-4">
              <img
                src={channel.logo}
                alt={channel.title}
                className="w-24 h-24 rounded-full border-2 border-rose-200 shadow-sm group-hover:scale-105 transition-transform duration-300"
              />

              <h2 className="text-lg font-semibold text-zinc-800">
                {channel.title}
              </h2>

              <p className="text-sm text-zinc-500">
                Subscribers:{" "}
                <span className="text-rose-600 font-medium">
                  {channel.subscriberCount}
                </span>
              </p>

              <button
                className="mt-3 px-5 py-2 text-sm rounded-xl font-medium text-white 
                           bg-linear-to-r from-fuchsia-500 via-rose-500 to-orange-400 
                           shadow-sm hover:shadow-lg hover:scale-105 transition-all"
                onClick={() => handleClick(channel)}
              >
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChannelList;
