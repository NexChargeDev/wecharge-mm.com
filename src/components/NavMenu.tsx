import { FunctionComponent, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

export type NavMenuType = {
  className?: string;
};

const NavMenu: FunctionComponent<NavMenuType> = ({ className = "" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isContacts = location.pathname === "/contacts";

  const onAboutUsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContactsTextClick = useCallback(() => {
    navigate("/contacts");
  }, [navigate]);

  return (
    <header
      className={`w-full max-w-[1780px] flex items-start justify-end pt-0 pb-5.25 px-0 box-border text-left text-2xl text-gray-200 font-inter ${className}`}
    >
      <Box className="flex-1 flex items-start justify-between gap-5 max-w-full">
        <Box className="flex flex-col items-start pt-2.5 pb-0 px-0 box-border max-w-full">
          <Box className="self-stretch flex items-start max-w-full z-4">
            <Box
              className="self-stretch flex-1 overflow-hidden flex items-center max-w-full cursor-pointer"
              onClick={onAboutUsTextClick}
            >
              <img loading="lazy" alt="Logo" src="/Group-238.svg" className="w-3/5" />
            </Box>
          </Box>
        </Box>
        <Box className="w-65 lg:w-75 xl:w-88.75 flex items-start gap-6 lg:gap-10 xl:gap-13 max-w-full mq900:hidden mq450:gap-[26px]">
          <Box
            className="h-10 lg:h-12 xl:h-14.25 flex-1 relative flex items-center justify-center cursor-pointer"
            onClick={onAboutUsTextClick}
          >
            {!isContacts && (
              <Box className="absolute inset-0 rounded-[28.5px] [background:radial-gradient(80.78%_207.89%_at_50%_50%,rgba(8,8,8,0)_43.43%,#ff0044_100%)] z-4" />
            )}
            <Typography
              className={`m-0! relative z-5 font-semibold text-[14px] lg:text-[16px] xl:text-[18px] ${!isContacts ? "text-white" : "text-gray-300"}`}
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
              className={`m-0! relative z-5 font-semibold text-[14px] lg:text-[16px] xl:text-[18px] ${isContacts ? "text-white" : "text-gray-300"}`}
              variant="inherit"
              variantMapping={{ inherit: "h3" }}
            >
              Contacts
            </Typography>
          </Box>
        </Box>
      </Box>
    </header>
  );
};

export default NavMenu;
