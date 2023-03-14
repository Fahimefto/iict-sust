import React from "react";

export default function EventCard({ date, location, title, description }) {
  const dateConversion = new Date(date);

  const year = dateConversion.getFullYear();
  const month = dateConversion.toLocaleString("default", { month: "long" });
  const day = dateConversion.getDate();

  const formattedDate = `${day} ${month} ${year}`;
  return (
    <article className="overflow-hidden rounded-lg  transition border border-rose-800 shadow-sm hover:bg-gray-100 min-h-full h-[500px] mr-2">
      <img
        alt="Office"
        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        className="h-56 w-full object-cover"
      />

      <div className="bg-white p-4 sm:p-6 flex flex-col">
        <div className=" text-sm text-gray-700 flex gap-5 mb-2">
          <div className="flex items-center ">
            <svg
              className="h-5 w-5 text-red-800 mr-1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <rect x="4" y="5" width="16" height="16" rx="2" />{" "}
              <line x1="16" y1="3" x2="16" y2="7" />{" "}
              <line x1="8" y1="3" x2="8" y2="7" />{" "}
              <line x1="4" y1="11" x2="20" y2="11" />{" "}
              <line x1="11" y1="15" x2="12" y2="15" />{" "}
              <line x1="12" y1="15" x2="12" y2="18" />
            </svg>
            <h2 className="font-bold">{formattedDate}</h2>
          </div>
          <div className="flex items-center font">
            <svg
              className="h-5 w-5 text-red-800 mr-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />{" "}
              <circle cx="12" cy="10" r="3" />
            </svg>
            <h2 className="font-bold">{location}</h2>
          </div>
        </div>

        <div>
          <h3 className="mt-0.5 text-lg text-gray-800">{title}</h3>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
          {description}
        </p>
        <button className="bg-rose-800 w-fit px-3 py-2 mt-3 rounded-md  text-white font-bold text-sm hover:scale-105 ease-in-out duration-200 flex items-center">
          View Details
          <svg
            className="h-5 w-5 ml-1"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWdth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <circle cx="12" cy="12" r="9" />{" "}
            <line x1="16" y1="12" x2="8" y2="12" />{" "}
            <line x1="16" y1="12" x2="12" y2="16" />{" "}
            <line x1="16" y1="12" x2="12" y2="8" />
          </svg>
        </button>
      </div>
    </article>
  );
}
