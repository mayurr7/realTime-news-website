import React from "react";

const Card = ({ data }) => {
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((currItem, index) => {
            if (!currItem.urlToImage) {
              return null;
            } else {
              return (
                <div
                  key={index}
                  className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
                >
                  <img
                    className="w-full h-48 object-cover"
                    src={currItem.urlToImage}
                    alt={currItem.title}
                  />
                  <div className="p-4">
                    <div className="font-bold text-xl mb-2">
                      {currItem.title}
                    </div>
                    <p className="text-gray-700 text-base">
                      {currItem.description}
                    </p>
                  </div>
                  <div className="px-4 pb-4">
                    <a
                      href={currItem.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700 transition duration-300"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
