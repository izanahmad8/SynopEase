import React from "react";
import { logo } from "../assets";

const Home = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="SynopEase" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/izanahmad8")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Article With
        <br className=" max-md:hidden" />
        <span className="orange_gradient"> OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Streamline your reading experience with SynopEase, an open-source
        article summarizer designed to condense lengthy articles into succinct
        and comprehensible summaries.
      </h2>
    </header>
  );
};

export default Home;
