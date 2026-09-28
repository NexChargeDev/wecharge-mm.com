import { FunctionComponent, useCallback, useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

export type NavMenuType = {
  className?: string;
};

const NavMenu: FunctionComponent<NavMenuType> = ({ className = "" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isContacts = location.pathname === "/contacts";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContactsTextClick = useCallback(() => {
    navigate("/contacts");
  }, [navigate]);

  return (
    <header
      className={`w-full max-w-[1780px] flex items-center justify-end pt-0 pb-5.25 px-0 box-border text-left text-2xl text-gray-200 font-inter ${className}`}
    >
      <Box className="flex-1 flex items-center justify-between gap-5 max-w-full">
        <Box className="flex flex-col items-start pt-2.5 pb-0 px-0 box-border max-w-full">
          <Box className="self-stretch flex items-center max-w-full z-4">
            <Box
              className="self-stretch flex-1 overflow-hidden flex items-center max-w-full cursor-pointer"
              onClick={onAboutUsTextClick}
            >
              <img
                loading="lazy"
                alt="Logo"
                src="/Group-238.svg"
                className="w-3/5"
              />
            </Box>
          </Box>
        </Box>

        {/* Desktop Menu */}
        <Box className="w-65 lg:w-75 xl:w-88.75 hidden lg:flex items-center gap-6 lg:gap-10 xl:gap-13 max-w-full">
          <Box
            className="h-10 lg:h-12 xl:h-14.25 flex-1 relative flex items-center justify-center cursor-pointer"
            onClick={onAboutUsTextClick}
          >
            {!isContacts && (
              <Box className="absolute inset-0 rounded-[28.5px] [background:radial-gradient(80.78%_207.89%_at_50%_50%,rgba(8,8,8,0)_43.43%,#ff0044_100%)] z-4" />
            )}
            <Typography
              className={`font-inter m-0! relative z-5 font-semibold text-[14px] ${!isContacts ? "text-white" : "text-gray-300"}`}
              variant="inherit"
              variantMapping={{ inherit: "h3" }}
            >
              About Us
            </Typography>
          </Box>
          <Box
            className="h-10 lg:h-12 xl:h-14.25 flex-1 relative flex items-center justify-center cursor-pointer"
            onClick={onContactsTextClick}
          >
            {isContacts && (
              <Box className="absolute inset-0 rounded-[28.5px] [background:radial-gradient(80.78%_207.89%_at_50%_50%,rgba(8,8,8,0)_43.43%,#ff0044_100%)] z-4" />
            )}
            <Typography
              className={`font-inter m-0! relative z-5 font-semibold text-[14px] ${isContacts ? "text-white" : "text-gray-300"}`}
              variant="inherit"
              variantMapping={{ inherit: "h3" }}
            >
              Contacts
            </Typography>
          </Box>
        </Box>

        {/* Mobile Hamburger Icon */}
        <Box className="lg:hidden flex items-center z-10">
          <IconButton
            onClick={() => setIsMenuOpen(true)}
            sx={{ color: "white" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </IconButton>
        </Box>
      </Box>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <Box className="fixed inset-0 z-[100] bg-[#080808] flex flex-col items-center justify-center gap-10">
          <div
            className="absolute top-0 left-0 w-200 h-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 0% 50%, rgba(220, 20, 60, 0.4) 0%, rgba(8, 8, 8, 0) 70%)",
            }}
          />

          {/* Right Dots Pattern Effect (simplified) */}
          <div
            className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#ff0044 1px, transparent 1px)",
              backgroundPosition: "0 0",
              backgroundSize: "20px 20px"
            }}
          />

          <IconButton
            onClick={() => setIsMenuOpen(false)}
            sx={{ color: "white", position: "absolute", top: 24, right: 24, zIndex: 10 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>

          <Typography
            className={`font-inter text-3xl font-semibold cursor-pointer transition-colors z-10 relative ${!isContacts ? "text-[#ff0044]" : "text-white hover:text-gray-300"}`}
            onClick={() => {
              onAboutUsTextClick();
              setIsMenuOpen(false);
            }}
          >
            About Us
          </Typography>

          <Typography
            className={`font-inter text-3xl font-semibold cursor-pointer transition-colors z-10 relative ${isContacts ? "text-[#ff0044]" : "text-white hover:text-gray-300"}`}
            onClick={() => {
              onContactsTextClick();
              setIsMenuOpen(false);
            }}
          >
            Contacts
          </Typography>
        </Box>
      )}
    </header>
  );
};

export default NavMenu;
