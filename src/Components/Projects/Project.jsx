import React from "react";

function Project(props) {
  return (
    <div className="w-64 rounded-xl border border-gray-300 bg-gray-100 shadow-lg duration-150 hover:scale-[1.02] hover:shadow-xl">
      <img
        className="h-32 w-full rounded-t-xl"
        src="/src/assets/images/shopme-preview.png"
        alt="ShopMe Preview"
      />
      <h3 className="px-3 pt-2 text-center text-lg font-semibold text-gray-900">
        SHOPME
      </h3>

      <div className="mt-1 flex flex-wrap justify-center gap-1 border-b border-t border-gray-300 bg-gray-50 px-2 py-1">
        <img
          className="w-6 duration-150 hover:scale-110"
          src="../src/assets/icons/Official_CSS_Logo.svg"
          alt="CSS Logo"
        />
        <img
          className="w-6 duration-150 hover:scale-110"
          src="../src/assets/icons/Official_CSS_Logo.svg"
          alt="CSS Logo"
        />
        <img
          className="w-6 duration-150 hover:scale-110"
          src="../src/assets/icons/Official_CSS_Logo.svg"
          alt="CSS Logo"
        />
        <img
          className="w-6 duration-150 hover:scale-110"
          src="../src/assets/icons/Official_CSS_Logo.svg"
          alt="CSS Logo"
        />
        <img
          className="w-6 duration-150 hover:scale-110"
          src="../src/assets/icons/Official_CSS_Logo.svg"
          alt="CSS Logo"
        />
        <img
          className="w-6 duration-150 hover:scale-110"
          src="../src/assets/icons/Official_CSS_Logo.svg"
          alt="CSS Logo"
        />
      </div>

      <p className="px-3 py-2 text-center text-sm leading-snug text-gray-700">
        An ecommerce website fully developed by me that has lots of features
        including but not limited to adding products to favorites, cart, and
        viewing orders history, all data is saved to the local storage.
      </p>

      <div className="flex justify-evenly gap-2 px-3 pb-3">
        <button className="w-full scale-105 rounded-lg bg-acc1 px-2 py-1 text-sm font-semibold text-white transition-all hover:bg-acc2 hover:shadow-md">
          Source Code
        </button>
        <button className="w-full scale-105 rounded-lg bg-acc1 px-2 py-1 text-sm font-semibold text-white transition-all hover:bg-acc2 hover:shadow-md">
          Live Demo
        </button>
      </div>
    </div>
  );
}

export default Project;
