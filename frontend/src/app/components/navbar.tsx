/* eslint-disable @next/next/no-img-element */
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full py-5 pr-5">
      <div className="bg-gray-100 py-5 rounded-xl px-5 flex justify-between items-center">
        <p className="font-extrabold text-xl">TRIPLE S AGENTS</p>

        <div className="flex gap-2 items-center">
          <div>
            <form className="w-[120%] pr-20 ">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-300 focus:border-red-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-red-500 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          <div className="rounded-full overflow-hidden border-2 border-red-500 min-w-[48px] w-[48px] h-[48px] mb-auto">
            <img
              src="https://server.blix.gg/imgproxy/6i-Ne0hx5wE_su_Pb2EussaOSpAjuV6-ghBDnCHo9Hw/rs:fit:260:260:0/g:no/aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3ZhbG9yYW50L2ltYWdlcy80LzRkL0JyaW1zdG9uZV9pY29uLnBuZw.webp"
              alt="image"
            />
          </div>
          <div>
            <h1 className="font-semibold text-base">Brimstone</h1>
            <p className="text-xs font-semibold text-gray-400">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
