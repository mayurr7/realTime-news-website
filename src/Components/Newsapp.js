import React, { useEffect, useState } from "react";
import Card from "./Card";

const Newsapp = () => {
  const [open, setOpen] = useState(false);
  const [searchName, setsearchName] = useState("India");
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState(null);
  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

  const getData = async () => {
    try {
      setError(null); // Reset error before fetching new data
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${searchName}&apiKey=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const jsonData = await response.json();
      if (jsonData.articles.length === 0) {
        throw new Error("No articles found");
      }

      setNewsData(jsonData.articles);
    } catch (error) {
      setError(error.message);
      setNewsData([]);
    }
  };


  useEffect(() => {
    getData();
  }, [searchName]);

  const handleInput = (e) => {
    setsearchName(e.target.value);
  };

  const switchInput = (e) => {
    setsearchName(e.target.value);
  };
  return (
    <>
      <nav className="bg-gray-700 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="text-3xl font-bold text-white">
                NewsHub.
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button
                className="text-white focus:outline-none"
                onClick={() => setOpen(!open)}
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>

            {/* Links (Desktop) */}
            <div className="hidden md:flex space-x-8">
              <button
                className="text-white hover:text-red-600  px-3 py-2 rounded-md text-xl font-medium"
                onClick={switchInput}
                value="world"
              >
                World
              </button>

              <button
                className="text-white hover:text-red-600  px-3 py-2 rounded-md text-xl font-medium"
                onClick={switchInput}
                value="politics"
              >
                Politics
              </button>

              <button
                className="text-white hover:text-red-600  px-3 py-2 rounded-md text-xl font-medium"
                onClick={switchInput}
                value="technology"
              >
                Technology
              </button>

              <button
                className="text-white hover:text-red-600  px-3 py-2 rounded-md text-xl font-medium"
                onClick={switchInput}
                value="sports"
              >
                Sports
              </button>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center relative">
              <div className="flex border border-gray-300 rounded-3xl overflow-hidden">
                <input
                  value={searchName}
                  onChange={handleInput}
                  type="text"
                  className="pl-4 pr-4 py-2 text-sm w-64 focus:outline-none"
                  placeholder="Search news..."
                />
                <button
                  className="bg-purple-500 text-white px-4 py-2  hover:bg-purple-900 focus:outline-none"
                  onClick={() => getData()}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu  */}
        <div className={`${open ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button
              className="text-white hover:text-red-600  px-3 py-2 rounded-md text-xl font-medium"
              onClick={switchInput}
              value="home"
            >
              Home
            </button>
            <button
              className="text-white hover:text-red-600  px-3 py-2 rounded-md text-xl font-medium"
              onClick={switchInput}
              value="world"
            >
              World
            </button>

            <button
              className="text-white hover:text-red-600  px-3 py-2 rounded-md text-xl font-medium"
              onClick={switchInput}
              value="politics"
            >
              Politics
            </button>

            <button
              className="text-white hover:text-red-600  px-3 py-2 rounded-md text-xl font-medium"
              onClick={switchInput}
              value="technology"
            >
              Technology
            </button>

            <button
              className="text-white hover:text-red-600  px-3 py-2 rounded-md text-xl font-medium"
              onClick={switchInput}
              value="sports"
            >
              Sports
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 mt-6">
        {error ? (
          <div className="text-center text-red-500 font-bold text-lg">
            {error} {/* Show error message */}
          </div>
        ) : (
          <Card data={newsData} />
        )}
      </div>

      <div>
        <Card data={newsData} />
      </div>
    </>
  );
};

export default Newsapp;
