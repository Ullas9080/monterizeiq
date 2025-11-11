import { useState } from "react";
import About from "../components/About/About";
import { TypeAnimation } from "react-type-animation";
import { useDispatch } from "react-redux";
import { fetchChannelName } from "../app/features/channelNameSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const [inputLink, setInputLink] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => setInputLink(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchChannelName(inputLink));
    navigate("/channelList");
  };

  return (
    <div className="flex flex-col min-h-screen w-full overflow-hidden relative">


      <nav className="flex items-center justify-start p-4 w-full bg-transparent z-10 ml-4">
        <img
          src="/src/assets/logo.svg"
          alt="Logo"
          className="w-32 sm:w-40 md:w-48 drop-shadow-md hover:scale-105 transition-transform duration-300"
        />
      </nav>

      <div className="flex flex-col items-center justify-center grow px-6 text-center space-y-10 relative z-10">
        <TypeAnimation
          sequence={[
            "AI-Powered Insights for Creators",
            1200,
            "Create Smarter with Data",
            1200,
            "Turn Analytics into Action",
            1200,
            "Your YouTube Success Starts Here",
            1200,
          ]}
          wrapper="span"
          speed={40}
          className="bg-linear-to-r from-pink-500 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent 
                     font-semibold text-2xl sm:text-3xl md:text-4xl drop-shadow-sm"
          repeat={Infinity}
        />


        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center gap-4 w-full max-w-2xl 
                     backdrop-blur-xl bg-white/60 border border-pink-100/60 
                     shadow-2xl rounded-2xl p-6 
                     transition-all duration-300 hover:shadow-[0_8px_30px_rgba(240,100,200,0.12)]"
        >
          <input
            name="userLink"
            type="text"
            placeholder="Paste your YouTube channel link here..."
            required
            onChange={handleChange}
            className="flex-1 w-full py-3 px-5 rounded-lg border border-pink-100 
                       bg-white/70 text-gray-800 placeholder-gray-500 
                       focus:outline-none focus:ring-2 focus:ring-fuchsia-400 
                       transition duration-200"
          />

          <button
            type="submit"
            className="w-full md:w-auto py-3 px-8 rounded-xl font-semibold text-white 
                       bg-linear-to-r from-pink-500 via-fuchsia-500 to-indigo-500 
                       shadow-md hover:shadow-lg hover:scale-105 
                       transition-transform duration-200"
          >
            Show Result
          </button>
        </form>
      </div>

      {/* About Section */}
      <div className="relative z-10">
        <About />
      </div>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-600 relative z-10">
        © {new Date().getFullYear()}{" "}
        <span className="text-fuchsia-500 font-medium">MonterizeIQ</span> — Empowering YouTube Growth 🚀
      </footer>
    </div>
  );
};

export default Home;
