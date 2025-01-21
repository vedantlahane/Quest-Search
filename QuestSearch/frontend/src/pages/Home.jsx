import { useState } from "react";
import React from "react";
const Home = () => {
  const [search, setSearch] = useState("");
  return (
    <section className="font-mono text-xl w-4/5 mx-auto">
      <div className="inset-y-0 text-2xl flex font-semibold bg-teal-50 max-w-2xl mx-auto rounded-lg gap-8">
      <div className=" inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
            className="size-8 "
          >
            <path 
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for Quests"
          className="bg-white p-4 m-2 mx-4 rounded-lg w-4/5 ring-slate-400"
        />
        <div className="flex justify-center items-center">
        
        </div>
        </div>
          {/* Display Search Query */}
      <div className="mt-4">
        <p className="text-gray-100">
          You searched for: <span className="font-medium">{search}</span>
        </p>
      </div>
    </section>
  );
};
export default Home;
