import Link from "next/link";
import React from "react";

export default function NoticeCard({ date, title, description }) {
  const dateConversion = new Date(date);

  const year = dateConversion.getFullYear();
  const month = dateConversion.toLocaleString("default", { month: "long" });
  const day = dateConversion.getDate();

  const formattedDate = `${day} ${month} ${year}`;
  // console.log(formattedDate);

  return (
    <article className="rounded-xl w-full    bg-white p-0.5 shadow-sm border border-rose-800 transition hover:shadow-sm">
      <div className="rounded-[10px] bg-white p-4  sm:p-6">
        <div className=" text-lg text-gray-500 font-bold flex items-center">
          <svg
            class="h-5 w-5 text-gray-500 mr-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <circle cx="12" cy="12" r="10" />{" "}
            <polyline points="12 6 12 12 16 14" />
          </svg>
          {formattedDate}
        </div>

        <h3 className="mt-0.5 text-lg font-medium text-gray-900">{title}</h3>
        <h3 className="mt-0.5 text-md font-medium text-gray-600">
          {description}
        </h3>

        <div className="mt-4 flex flex-wrap gap-1">
          <Link href="#">
            <div className="whitespace-nowrap rounded-full bg-rose-800 px-3 py-2 font-bold text-white flex items-center hover:scale-105 hover:cursor-pointer">
              Download
              <svg
                className="h-5 w-5 ml-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />{" "}
                <polyline points="7 10 12 15 17 10" />{" "}
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
}
