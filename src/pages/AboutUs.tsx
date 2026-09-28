import { FunctionComponent } from "react";
import NavMenu from "../components/NavMenu";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export type AboutUs = {};

const AboutUs: FunctionComponent<AboutUs> = ({}) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="w-full min-h-screen flex flex-col font-inter pt-8 px-8 lg:px-24 overflow-x-hidden relative">
        {/* Header */}
        <div className="relative z-20">
          <NavMenu />
        </div>

        {/* Hero Section */}
        <main className="flex-1 flex flex-col lg:flex-row items-center justify-between mt-12 lg:mt-16 relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-12 lg:gap-8">
          {/* Left Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:gap-8 z-10 w-full pt-[80px]">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] xl:text-[75px] font-bold leading-[1.1] uppercase m-0 tracking-tight whitespace-nowrap"
              style={{ fontFamily: "'WinnerSans', sans-serif" }}
            >
              THE FUTURE IS
              <br />
              FULLY CHARGED.
            </h1>

            <p className="text-base sm:text-xl lg:text-[18px] xl:text-[30px] text-gray-200 leading-[1.5] max-w-full md:max-w-[600px] xl:max-w-[650px] m-0">
              Meet We Charge—the only app you need to manage your home AC
              charger and find high-speed AC/DC public stations on the go. From
              your garage to the open roads, we keep you connected with an
              intelligent map and seamless charger integration.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mt-6 md:mt-10 lg:mt-12 w-full">
              {/* Google Play */}
              <button className="flex items-center justify-center bg-white text-black px-4 sm:px-6 py-3 rounded-3xl gap-3 sm:gap-4 hover:scale-105 transition-transform border-none cursor-pointer w-full sm:w-auto">
                <img
                  src="/Playstore.svg"
                  alt="Play Store"
                  className="w-7 h-8 sm:w-8 sm:h-9 object-contain"
                />
                <div className="text-left font-figtree">
                  <div className="text-[10px] sm:text-[12px] font-semibold uppercase leading-tight">
                    GET IT ON
                  </div>
                  <div className="text-[18px] sm:text-[22px] font-bold leading-tight mt-0.5">
                    Google Play
                  </div>
                </div>
              </button>

              {/* App Store */}
              <button className="flex items-center justify-center bg-white text-black px-4 sm:px-6 py-3 rounded-3xl gap-3 sm:gap-4 hover:scale-105 transition-transform border-none cursor-pointer w-full sm:w-auto">
                <img
                  src="/Apple.svg"
                  alt="Apple"
                  className="w-7 h-8 sm:w-8 sm:h-9 object-contain"
                />
                <div className="text-left font-figtree">
                  <div className="text-[10px] sm:text-[12px] font-semibold uppercase leading-tight">
                    DOWNLOAD ON THE
                  </div>
                  <div className="text-[18px] sm:text-[22px] font-bold leading-tight mt-0.5">
                    App Store
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Content - Phone Hand */}
          <div className="flex-1 w-full flex justify-center lg:justify-end items-center mt-12 lg:mt-0 relative">
            <div className="relative w-full max-w-[450px] lg:max-w-[550px] aspect-square rounded-full flex items-center justify-center -mt-25">
              <img
                src="/images/handwecharg.svg"
                alt="App Interface"
                className="z-10 w-full h-auto object-contain drop-shadow-2xl animate-shake-once"
              />
            </div>
          </div>
        </main>

        {/* Smart Station Discovery Section */}
        <section className="w-full max-w-[1600px] px-4 md:px-8 xl:px-16 mx-auto mt-20 mb-32 z-10 flex flex-col items-center">
          {/* Stats Row */}
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mb-24">
            {/* Stat 1 */}
            <div
              className="flex-1 w-full min-w-70 max-w-125 flex flex-col items-center justify-center py-10 px-6 rounded-[20px] bg-linear-to-br from-crimson/10 to-black/40 backdrop-blur-md"
              style={{ border: "2px solid", color: "#ff0044" }}
            >
              <h3 className="text-white text-xl font-figtree font-normal mb-2 text-center">
                Total Chargers Integrated
              </h3>
              <div
                className="text-crimson text-6xl md:text-[72px] font-bold tracking-wide mt-2"
                style={{
                  fontFamily: "'WinnerSans', sans-serif",
                  lineHeight: 1,
                }}
              >
                10,000
              </div>
            </div>
            {/* Stat 2 */}
            <div
              className="flex-1 w-full min-w-70 max-w-125 flex flex-col items-center justify-center py-10 px-6 rounded-[20px] bg-linear-to-br from-crimson/10 to-black/40 backdrop-blur-md"
              style={{ border: "2px solid", color: "#ff0044" }}
            >
              <h3 className="text-white text-xl font-figtree font-normal mb-2 text-center">
                Total Stations
              </h3>
              <div
                className="text-crimson text-6xl md:text-[72px] font-bold tracking-wide mt-2"
                style={{
                  fontFamily: "'WinnerSans', sans-serif",
                  lineHeight: 1,
                }}
              >
                999
              </div>
            </div>
            {/* Stat 3 */}
            <div
              className="flex-1 w-full min-w-70 max-w-125 flex flex-col items-center justify-center py-10 px-6 rounded-[20px] bg-linear-to-br from-crimson/10 to-black/40 backdrop-blur-md"
              style={{ border: "2px solid", color: "#ff0044" }}
            >
              <h3 className="text-white text-xl font-figtree font-normal mb-2 text-center">
                Total Energy Usage
              </h3>
              <div
                className="text-crimson text-6xl md:text-[72px] font-bold tracking-wide mt-2"
                style={{
                  fontFamily: "'WinnerSans', sans-serif",
                  lineHeight: 1,
                }}
              >
                1M KW
              </div>
            </div>
          </div>

          {/* Info Area */}
          <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-12 lg:gap-20">
            {/* Left Side - Phones Image */}
            <div className="flex-1 flex justify-start items-center w-full max-w-175 relative">
              <div className="absolute inset-0 bg-[#ff0044] opacity-20 blur-[100px] rounded-full z-0"></div>
              {/* Update the src to point to the exact image of the three phones you have */}
              <img
                src="/images/Layer_1.svg"
                alt="Smart Station App Interface"
                className="w-full h-auto max-h-200 object-contain z-10 relative drop-shadow-2xl"
              />
            </div>

            {/* Right Side - Features List */}
            <div className="flex-1 flex flex-col items-end text-right justify-center py-2">
              <h2
                className="text-white text-4xl lg:text-[46px] font-bold uppercase leading-[1.1]"
                style={{ fontFamily: "'WinnerSans', sans-serif" }}
              >
                SMART STATION DISCOVERY
                <br />& PLUG FILTERING
              </h2>

              <div
                className="flex flex-col gap-6 mt-8 w-full"
                style={{ fontFamily: "'WinnerSans', sans-serif" }}
              >
                <div className="flex flex-col items-end">
                  <h3 className="text-white text-xl md:text-[22px] font-bold mb-1 tracking-wide">
                    Nearby Station Discovery
                  </h3>
                  <p className="text-gray-200 text-sm md:text-[16px] max-w-125 leading-relaxed">
                    Instantly locate the nearest charging points via
                    high-accuracy GPS and an interactive map interface.
                  </p>
                </div>

                <div className="flex flex-col items-end">
                  <h3 className="text-white text-xl md:text-[22px] font-bold mb-1 tracking-wide">
                    Advanced Plug Filtering
                  </h3>
                  <p className="text-gray-200 text-sm md:text-[16px] max-w-125 leading-relaxed">
                    Filter by connector types (CCS1, CCS2, GB/T, etc.) to ensure
                    a perfect match for your vehicle's hardware.
                  </p>
                </div>

                <div className="flex flex-col items-end">
                  <h3 className="text-white text-xl md:text-[22px] font-bold mb-1 tracking-wide">
                    Real-Time Availability
                  </h3>
                  <p className="text-gray-200 text-sm md:text-[16px] max-w-125 leading-relaxed">
                    View live status updates to see which chargers are
                    "Available," "Occupied," or "Under Maintenance" before you
                    arrive.
                  </p>
                </div>

                <div className="flex flex-col items-end">
                  <h3 className="text-white text-xl md:text-[22px] font-bold mb-1 tracking-wide">
                    Distance & Efficiency
                  </h3>
                  <p className="text-gray-200 text-sm md:text-[16px] max-w-125 leading-relaxed">
                    View the exact distance to each station and get optimized
                    navigation routes to save battery life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Find Us Everywhere Section */}
        <section className="w-full max-w-350 px-4 md:px-8 xl:px-16 mx-auto mt-10 mb-32 z-10 flex flex-col items-center">
          <div className="text-center mb-12">
            <h2
              className="text-white text-4xl md:text-5xl lg:text-[50px] font-bold uppercase leading-[1.1] mb-4"
              style={{ fontFamily: "'WinnerSans', sans-serif" }}
            >
              FIND US EVERYWHERE
            </h2>
            <p className="text-gray-300 text-base md:text-[19px] font-figtree">
              Explore our growing network of 999 EV Charging Stations across
              Myanmar.
            </p>
          </div>

          {/* Map Container */}
          <div className="w-full h-125 md:h-150 rounded-3xl border border-crimson relative overflow-hidden bg-[#121212] drop-shadow-2xl">
            {/* Static Map Image */}
            <img
              src="/images/map_228.svg"
              alt="WeCharge Map Locations"
              className="w-full h-full object-cover absolute inset-0 z-0 opacity-80"
            />

            {/* Subtle inner dark gradient overlays for map edges to blend better */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#080808] to-transparent pointer-events-none z-10 opacity-80"></div>
            <div className="absolute top-0 left-0 right-0 h-16 bg-linear-to-b from-[#080808] to-transparent pointer-events-none z-10 opacity-60"></div>
          </div>
        </section>

        {/* Charging Experience Section */}
        <section className="w-full max-w-350 px-4 md:px-8 xl:px-16 mx-auto mt-20 mb-32 z-10 flex flex-col-reverse lg:flex-row items-center lg:items-stretch justify-between gap-12 lg:gap-20">
          {/* Left Side - Text */}
          <div className="flex-1 flex flex-col items-start text-left justify-center py-4">
            <h2
              className="text-white text-4xl lg:text-[48px] font-bold uppercase leading-[1.1] mb-12"
              style={{ fontFamily: "'WinnerSans', sans-serif" }}
            >
              CHARGING EXPERIENCE
            </h2>

            <div
              className="flex flex-col gap-10 w-full"
              style={{ fontFamily: "'WinnerSans', sans-serif" }}
            >
              <div className="flex flex-col items-start">
                <h3 className="text-white text-xl md:text-[24px] font-bold mb-2 tracking-wide">
                  Scan to Charge
                </h3>
                <p className="text-gray-200 text-sm md:text-[16px] max-w-125 leading-relaxed">
                  Simply scan the QR code on any public charging station to
                  instantly start charging your EV.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <h3 className="text-white text-xl md:text-[24px] font-bold mb-2 tracking-wide">
                  Remote Stop Feature
                </h3>
                <p className="text-gray-200 text-sm md:text-[16px] max-w-125 leading-relaxed">
                  You can Start/Stop charging directly through the app to
                  complete your charging session and process payment. Once
                  stopped, the flow of electricity will cut off immediately.
                </p>
              </div>
            </div>

            {/* Decorative Dots Pattern */}
            <div className="flex gap-6 mt-16 max-w-100 w-full items-center">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <div
                  key={`dot-${i}`}
                  className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${[0, 4, 6, 9].includes(i) ? "bg-crimson shadow-[0_0_8px_2px_#ff0044]" : "bg-[#ff0044] opacity-20"}`}
                ></div>
              ))}
            </div>
          </div>

          {/* Right Side - Phones Image */}
          <div className="flex-1 flex justify-end items-center w-full max-w-175 relative">
            <div className="absolute inset-0 bg-[#ff0044] opacity-20 blur-[100px] rounded-full z-0"></div>
            <img
              src="/images/charge-history.svg"
              alt="Charging Experience App Interface"
              className="w-full h-auto max-h-200 object-contain z-10 relative drop-shadow-2xl"
            />
          </div>
        </section>

        {/* Payment & Top Up Section */}
        <section className="w-full max-w-350 px-4 md:px-8 xl:px-16 mx-auto mt-20 mb-32 z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Side - Phones Image */}
          <div className="flex-1 flex justify-start items-center w-full max-w-150 relative">
            {/* Vertical Decorative Dots (Left Edge) */}
            <div className="absolute -left-8 md:-left-12 top-1/2 -translate-y-1/2 flex-col gap-6 opacity-80 hidden lg:flex">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                <div
                  key={`dot-v-${i}`}
                  className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${[1, 3, 6].includes(i) ? "bg-crimson shadow-[0_0_8px_1.5px_#ff0044]" : "bg-[#ff0044] opacity-20"}`}
                ></div>
              ))}
            </div>

            <div className="absolute inset-0 bg-[#ff0044] opacity-10 blur-[100px] rounded-full z-0"></div>
            <img
              src="/images/Group_242.svg"
              alt="Payment and Top Up Interface"
              className="w-full h-auto max-h-200 object-contain z-10 relative drop-shadow-2xl"
            />
          </div>

          {/* Right Side - Text */}
          <div className="flex-1 flex flex-col items-end text-right justify-center py-4">
            <h2
              className="text-white text-4xl lg:text-[46px] font-bold uppercase leading-[1.1] mb-12 max-w-150"
              style={{ fontFamily: "'WinnerSans', sans-serif" }}
            >
              EASY AND SEAMLESS PAYMENT WITH MMQR
            </h2>

            <div
              className="flex flex-col gap-10 w-full items-end"
              style={{ fontFamily: "'WinnerSans', sans-serif" }}
            >
              <div className="flex flex-col items-end">
                <h3 className="text-white text-xl md:text-[24px] font-bold mb-2 tracking-wide">
                  Checking Balance and Points
                </h3>
                <p className="text-gray-200 text-sm md:text-[16px] max-w-125 leading-relaxed">
                  Easily view your points. Points are valued at 1 Point = 1
                  Kyat.
                </p>
              </div>

              <div className="flex flex-col items-end">
                <h3 className="text-white text-xl md:text-[24px] font-bold mb-2 tracking-wide">
                  Charging History
                </h3>
                <p className="text-gray-200 text-sm md:text-[16px] max-w-125 leading-relaxed">
                  Accurately track your charging costs and usage history in real
                  time.
                </p>
              </div>

              <div className="flex flex-col items-end">
                <h3 className="text-white text-xl md:text-[24px] font-bold mb-2 tracking-wide">
                  Payment Options
                </h3>
                <p className="text-gray-200 text-sm md:text-[16px] max-w-125 leading-relaxed">
                  Pay conveniently via MMQR, which is integrated with all local
                  banks.
                </p>
              </div>

              <div className="flex flex-col items-end">
                <h3 className="text-white text-xl md:text-[24px] font-bold mb-2 tracking-wide">
                  Coupons and Discounts
                </h3>
                <p className="text-gray-200 text-sm md:text-[16px] max-w-125 leading-relaxed">
                  Easily apply your available discount coupons during charging
                  sessions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Charging History Section */}
        <section className="w-full max-w-350 px-4 md:px-8 xl:px-16 mx-auto mt-20 mb-32 z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Side - Text */}
          <div className="flex-1 flex flex-col items-start text-left justify-center py-4">
            <h2
              className="text-white text-4xl lg:text-[46px] font-bold uppercase leading-[1.1] mb-12"
              style={{ fontFamily: "'WinnerSans', sans-serif" }}
            >
              CHARGING HISTORY
            </h2>

            <div
              className="flex flex-col gap-10 w-full"
              style={{ fontFamily: "'WinnerSans', sans-serif" }}
            >
              <div className="flex flex-col items-start">
                <h3 className="text-white text-xl md:text-[24px] font-bold mb-2 tracking-wide">
                  Hybrid Tracking System
                </h3>
                <p className="text-gray-200 text-sm md:text-[16px] max-w-125 leading-relaxed">
                  Easily switch between home charger and public charging station
                  records to compare your charging history and spending
                  patterns.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <h3 className="text-white text-xl md:text-[24px] font-bold mb-2 tracking-wide">
                  Cost Summary
                </h3>
                <p className="text-gray-200 text-sm md:text-[16px] max-w-125 leading-relaxed">
                  Displays total costs in Points or Myanmar Kyat (MMK).
                </p>
              </div>

              <div className="flex flex-col items-start">
                <h3 className="text-white text-xl md:text-[24px] font-bold mb-2 tracking-wide">
                  Time & Date
                </h3>
                <p className="text-gray-200 text-sm md:text-[16px] max-w-125 leading-relaxed">
                  View precise timestamps for the start and end of each charging
                  session.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <h3 className="text-white text-xl md:text-[24px] font-bold mb-2 tracking-wide">
                  Smart Filtering
                </h3>
                <p className="text-gray-200 text-sm md:text-[16px] max-w-125 leading-relaxed">
                  Accurately search past usage records and charging data by date
                  or location.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Phones Image */}
          <div className="flex-1 flex justify-end items-center w-full max-w-175 relative">
            {/* Background Grid Pattern (Right Edge) */}
            <div className="absolute -right-8 md:-right-16 top-1/2 -translate-y-1/2 grid-cols-4 md:grid-cols-5 gap-6 opacity-80 hidden lg:grid z-0">
              {[...Array(30)].map((_, i) => (
                <div
                  key={`grid-dot-ring-${i}`}
                  className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full ${[2, 9, 13, 21, 28].includes(i) ? "bg-crimson shadow-[0_0_8px_1.5px_#ff0044]" : "bg-transparent border border-crimson/30"}`}
                ></div>
              ))}
            </div>

            <div className="absolute inset-0 bg-[#ff0044] opacity-20 blur-[100px] rounded-full z-0"></div>
            <img
              src="/images/Group_236.svg"
              alt="Charging History App Interface"
              className="w-full h-auto max-h-200 object-contain z-10 relative drop-shadow-2xl"
            />
          </div>
        </section>
        {/* Registration & Tracking Section */}
        <section className="w-full max-w-350 px-4 md:px-8 xl:px-16 mx-auto mt-20 mb-32 z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Side - Phones Image */}
          <div className="flex-1 flex justify-start items-center w-full max-w-175 relative">
            <div className="absolute inset-0 bg-[#ff0044] opacity-20 blur-[100px] rounded-full z-0"></div>
            <img
              src="/images/charging_history.svg"
              alt="Quick Registration App Interface"
              className="w-full h-auto max-h-200 object-contain z-10 relative drop-shadow-2xl"
            />
          </div>

          {/* Right Side - Text */}
          <div className="flex-1 flex flex-col items-end text-right justify-center py-4 relative">
            {/* Background Grid Pattern (Top Right Edge) */}
            <div className="absolute -right-8 md:-right-16 -top-12 grid-cols-4 md:grid-cols-6 gap-6 opacity-80 hidden lg:grid z-0">
              {[...Array(18)].map((_, i) => (
                <div
                  key={`reg-grid-dot-${i}`}
                  className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full ${[4, 10, 15].includes(i) ? "bg-crimson shadow-[0_0_8px_1.5px_#ff0044]" : "bg-transparent border border-crimson/30"}`}
                ></div>
              ))}
            </div>

            <h2
              className="text-white text-4xl lg:text-[46px] font-bold uppercase leading-[1.1] mb-12 max-w-162.5 z-10 relative"
              style={{ fontFamily: "'WinnerSans', sans-serif" }}
            >
              QUICK REGISTRATION &<br />
              VEHICLE TRACKING
            </h2>

            <div
              className="flex flex-col gap-12 w-full items-end z-10 relative"
              style={{ fontFamily: "'WinnerSans', sans-serif" }}
            >
              <div className="flex flex-col items-end">
                <h3 className="text-white text-xl md:text-[24px] font-bold mb-3 tracking-wide">
                  Account Creation via Phone Number
                </h3>
                <p className="text-gray-200 text-sm md:text-[16px] max-w-137.5 leading-relaxed">
                  Create an account in seconds using just your phone number and
                  start using the services immediately without any complicated
                  steps.
                </p>
              </div>

              <div className="flex flex-col items-end">
                <h3 className="text-white text-xl md:text-[24px] font-bold mb-3 tracking-wide">
                  Adding Vehicle Information to Your Account
                </h3>
                <p className="text-gray-200 text-sm md:text-[16px] max-w-137.5 leading-relaxed">
                  By saving your car's details in your account, you will receive
                  the best and most compatible service for your vehicle every
                  time you charge.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
