import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Footer: React.FC<{ className?: string }> = ({ className = "mt-24" }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <footer
      className={`w-full pb-12 px-4 md:px-8 xl:px-16 flex flex-col items-center justify-center z-10 relative font-figtree ${className}`}
    >
      {/* Logo */}
      <div className="flex items-center justify-center mb-6">
        <img
          src="/Group-238.svg"
          alt="WeCharge Logo"
          className="h-8 md:h-12 w-auto"
        />
      </div>

      {/* Subtext */}
      <p className="font-inter text-gray-300 text-sm md:text-[16px] text-center mb-10 leading-relaxed">
        Building Myanmar's most reliable and accessible electric vehicle
        charging networks.
      </p>

      {/* Divider */}
      <div className="w-full max-w-250 h-px bg-gray-600/40 mb-10"></div>

      {/* Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-12">
        <button
          onClick={() => navigate("/terms")}
          className={`font-semibold py-2.5 px-6 md:px-8 rounded-full transition-all text-sm md:text-[15px] cursor-pointer ${
            pathname === "/terms"
              ? "bg-transparent text-gray-400 hover:text-white"
              : "bg-white text-black hover:bg-gray-200"
          }`}
        >
          Terms & Conditions
        </button>
        <button
          onClick={() => navigate("/privacy")}
          className={`font-semibold py-2.5 px-6 md:px-8 rounded-full transition-all text-sm md:text-[15px] cursor-pointer ${
            pathname === "/privacy"
              ? "bg-transparent text-gray-400 hover:text-white"
              : "bg-white text-black hover:bg-gray-200"
          }`}
        >
          Privacy Policy
        </button>
      </div>

      {/* Copyright */}
      <p className="text-gray-400 text-xs md:text-sm text-center">
        ©2026 WeCharge, All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
