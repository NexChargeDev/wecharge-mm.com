import { FunctionComponent } from "react";
import NavMenu from "../components/NavMenu";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export type ContactUsProps = {};

const ContactUs: FunctionComponent<ContactUsProps> = ({}) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full min-h-screen flex flex-col font-inter pt-8 px-8 lg:px-24 overflow-x-hidden relative"
    >
      {/* Red Glow Background Effect */}
      <div 
        className="absolute top-0 left-0 w-200 h-full pointer-events-none"
        style={{
          background: "radial-gradient(circle at 0% 50%, rgba(220, 20, 60, 0.4) 0%, rgba(8, 8, 8, 0) 70%)"
        }}
      />
      
      {/* Right Dots Pattern Effect (simplified) */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ff0044 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0"
        }}
      />

      {/* Header */}
      <div className="relative z-20">
        <NavMenu />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center mt-12 lg:mt-24 relative z-10 w-full max-w-[1600px] mx-auto pb-32">
        <h1
          className="text-5xl lg:text-[64px] font-bold leading-[1.1] uppercase m-0 tracking-tight mb-12"
          style={{ fontFamily: "'WinnerSans', sans-serif" }}
        >
          CONTACT US
        </h1>

        <div className="flex flex-col gap-6 text-lg">
          {/* Phone */}
          <div className="flex items-center gap-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff0044" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span className="font-semibold">+959 967 996 777</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff0044" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span className="font-semibold">wecharge.mm@gmail.com</span>
          </div>

          {/* Web */}
          <div className="flex items-center gap-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff0044" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span className="font-semibold">wecharge-mm.com</span>
          </div>

          {/* Address */}
          <div className="flex items-center gap-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff0044" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span className="font-semibold">45-T, Tay Nu Yin Road, 7th Ward, Mayangone Township, Yangon, Myanmar</span>
          </div>
        </div>
      </main>

      <Footer className="mt-auto" />
    </div>
  );
};

export default ContactUs;
