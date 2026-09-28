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
        <main className="flex-1 flex flex-col lg:flex-row items-center justify-between mt-12 lg:mt-16 relative z-10 w-full mx-auto gap-12 lg:gap-8 mb-2">
          {/* Left Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:gap-8 z-10 w-full pt-[80px]">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-[100px] font-bold leading-[1.1] uppercase m-0 tracking-tight whitespace-nowrap animate-slide-in-left"
              style={{ fontFamily: "'WinnerSans', sans-serif" }}
            >
              THE FUTURE IS
              <br />
              FULLY CHARGED.
            </h1>

            <p className="font-inter text-[20px] text-gray-200 leading-[1.5] max-w-full m-0">
              Meet We Charge—the only app you need to manage your home AC
              charger and find high-speed AC/DC public stations on the go. From
              your garage to the open roads, we keep you connected with an
              intelligent map and seamless charger integration.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mt-10 md:mt-10 lg:mt-16 w-full">
              {/* Google Play */}
              <button className="flex items-center justify-center bg-white text-black px-2 sm:px-6 py-2 rounded-3xl gap-3 sm:gap-4 hover:scale-105 transition-transform border-none cursor-pointer w-full sm:w-auto">
                <svg
                  viewBox="0 0 39 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-8 sm:w-8 sm:h-9 object-contain"
                >
                  <path
                    d="M18.209 21.0131L0.166504 40.3442C0.168199 40.3476 0.168198 40.3527 0.169893 40.3562C0.724031 42.4552 2.622 44 4.87583 44C5.77737 44 6.62298 43.7537 7.34827 43.3226L7.40589 43.2883L27.7141 31.4587L18.209 21.0131Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M36.4614 17.7214L36.4444 17.7095L27.6765 12.579L17.7986 21.4525L27.7121 31.4568L36.4325 26.3777C37.9611 25.5428 38.9999 23.9159 38.9999 22.041C38.9999 20.1763 37.9763 18.558 36.4614 17.7214Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M0.166072 3.65445C0.0576168 4.05818 0 4.48244 0 4.92038V39.08C0 39.518 0.0576168 39.9422 0.167767 40.3442L18.8288 21.5075L0.166072 3.65445Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M18.3422 21.9998L27.6795 12.5754L7.39499 0.703018C6.65783 0.256521 5.79697 -8.58307e-05 4.87679 -8.58307e-05C2.62296 -8.58307e-05 0.721604 1.54811 0.167465 3.64888C0.167465 3.65059 0.165771 3.6523 0.165771 3.65401L18.3422 21.9998Z"
                    fill="#34A853"
                  />
                </svg>
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
                <svg
                  viewBox="0 0 42 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-8 sm:w-8 sm:h-9 object-contain"
                >
                  <path
                    d="M35.0795 27.6534C35.1049 25.6603 35.6305 23.706 36.6073 21.9725C37.5841 20.2389 38.9803 18.7824 40.6661 17.7385C39.5952 16.1979 38.1824 14.93 36.5399 14.0356C34.8974 13.1412 33.0706 12.6449 31.2044 12.586C27.2234 12.1651 23.3641 14.9855 21.3355 14.9855C19.2676 14.9855 16.1443 12.6278 12.7809 12.6975C10.6054 12.7683 8.48524 13.4056 6.62693 14.5471C4.76862 15.6887 3.23557 17.2957 2.17714 19.2115C-2.40761 27.2074 1.01221 38.9586 5.4041 45.4219C7.60147 48.5868 10.1695 52.122 13.5299 51.9967C16.8181 51.8593 18.0462 49.8846 22.0154 49.8846C25.9478 49.8846 27.1 51.9967 30.5285 51.917C34.057 51.8593 36.28 48.738 38.4003 45.5432C39.9791 43.2881 41.194 40.7957 42 38.1584C39.9501 37.2851 38.2007 35.8232 36.97 33.9551C35.7394 32.087 35.0818 29.8954 35.0795 27.6534Z"
                    fill="black"
                  />
                  <path
                    d="M28.6037 8.33545C30.5276 6.00909 31.4754 3.01894 31.2459 0C28.3067 0.310958 25.5916 1.72596 23.6418 3.96306C22.6884 5.05595 21.9583 6.32738 21.493 7.70468C21.0278 9.08198 20.8366 10.5381 20.9304 11.9899C22.4006 12.0051 23.855 11.6842 25.1841 11.0512C26.5132 10.4181 27.6825 9.4896 28.6037 8.33545Z"
                    fill="black"
                  />
                </svg>
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
            <div className="relative w-full aspect-square rounded-full flex items-center justify-center -mt-20">
              <img
                src="/images/handwecharg.svg"
                alt="App Interface"
                className="z-10 w-[85%] h-auto object-contain drop-shadow-2xl animate-shake-once"
              />
            </div>
          </div>
        </main>

        {/* Smart Station Discovery Section */}
        <section className="w-full max-w-[1600px] px-4 md:px-8 xl:px-16 mx-auto mt-14 mb-12 z-10 flex flex-col items-center">
          {/* Stats Row */}
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mb-15">
            {/* Stat 1 */}
            <div
              className="flex-1 w-full min-w-70 max-w-125 flex flex-col items-center justify-center py-6 px-6 rounded-[20px] bg-linear-to-br from-crimson/10 to-black/40 backdrop-blur-md"
              style={{ border: "2px solid", color: "#ff0044" }}
            >
              <div className="flex flex-col items-center">
                <h2 className="text-white text-xl font-inter font-normal mb-2 text-center">
                  Total Chargers Integrated
                </h2>
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
            </div>
            {/* Stat 2 */}
            <div
              className="flex-1 w-full min-w-70 max-w-125 flex flex-col items-center justify-center py-6 px-6 rounded-[20px] bg-linear-to-br from-crimson/10 to-black/40 backdrop-blur-md"
              style={{ border: "2px solid", color: "#ff0044" }}
            >
              <h2 className="text-white text-xl font-inter font-normal mb-2 text-center">
                Total Stations
              </h2>
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
              className="flex-1 w-full min-w-70 max-w-125 flex flex-col items-center justify-center py-6 px-6 rounded-[20px] bg-linear-to-br from-crimson/10 to-black/40 backdrop-blur-md"
              style={{ border: "2px solid", color: "#ff0044" }}
            >
              <h2 className="text-white text-xl font-inter font-normal mb-2 text-center">
                Total Energy Usage
              </h2>
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
          <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-between">
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
            <div className="flex-1 flex flex-col items-end text-right justify-center py-2 mt-8 lg:mt-0">
              <h2
                className="text-white text-3xl lg:text-[36px] font-bold uppercase leading-[1.1] whitespace-nowrap"
                style={{ fontFamily: "'WinnerSans', sans-serif" }}
              >
                SMART STATION DISCOVERY
                <br />& PLUG FILTERING
              </h2>

              <div
                className="flex flex-col w-full font-inter"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <div className="flex flex-col items-end mb-2">
                  <div className="text-white text-2xl md:text-[28px] font-bold tracking-wide font-inter leading-none">
                    Nearby Station Discovery
                  </div>
                  <p className="text-gray-200 text-base md:text-[18px] max-w-[500px] leading-tight font-inter mt-1">
                    Instantly locate the nearest charging points via
                    high-accuracy GPS and an interactive map interface.
                  </p>
                </div>

                <div className="flex flex-col items-end mb-2">
                  <div className="text-white text-2xl md:text-[28px] font-bold tracking-wide font-inter leading-none">
                    Advanced Plug Filtering
                  </div>
                  <p className="text-gray-200 text-base md:text-[18px] max-w-[500px] leading-tight font-inter mt-1">
                    Filter by connector types (CCS1, CCS2, GB/T, etc.) to ensure
                    a perfect match for your vehicle's hardware.
                  </p>
                </div>

                <div className="flex flex-col items-end mb-2">
                  <div className="text-white text-2xl md:text-[28px] font-bold tracking-wide font-inter leading-none">
                    Real-Time Availability
                  </div>
                  <p className="text-gray-200 text-base md:text-[18px] max-w-[500px] leading-tight font-inter mt-1">
                    View live status updates to see which chargers are
                    "Available," "Occupied," or "Under Maintenance" before you
                    arrive.
                  </p>
                </div>

                <div className="flex flex-col items-end mb-2">
                  <div className="text-white text-2xl md:text-[28px] font-bold tracking-wide font-inter leading-none">
                    Distance & Efficiency
                  </div>
                  <p className="text-gray-200 text-base md:text-[18px] max-w-[500px] leading-tight font-inter mt-1">
                    View the exact distance to each station and get optimized
                    navigation routes to save battery life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Find Us Everywhere Section */}
        <section className="w-full max-w-350 px-4 md:px-8 xl:px-16 mx-auto mb-32 z-10 flex flex-col items-center">
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
          <div
            className="w-full h-[60vh] rounded-3xl border border-crimson relative overflow-hidden bg-[#121212] drop-shadow-2xl"
            style={{ border: "2px solid", color: "#ff0044" }}
          >
            {/* Static Map Image */}
            <img
              src="/images/map_228.svg"
              alt="WeCharge Map Locations"
              className="w-full h-full object-cover border-2 absolute inset-0 z-0 opacity-80"
            />

            {/* Subtle inner dark gradient overlays for map edges to blend better */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#080808] to-transparent pointer-events-none z-10 opacity-80"></div>
            <div className="absolute top-0 left-0 right-0 h-16 bg-linear-to-b from-[#080808] to-transparent pointer-events-none z-10 opacity-60"></div>
          </div>
        </section>

        {/* Charging Experience Section */}
        <section className="w-full max-w-350 md:px-8 xl:px-16 mx-auto z-10 flex flex-col-reverse lg:flex-row items-center lg:items-stretch justify-between gap-12 lg:gap-20">
          {/* Left Side - Text */}
          <div className="flex-1 flex flex-col items-start text-left justify-center">
            <h2
              className="text-white text-3xl lg:text-[36px] font-bold uppercase leading-[1.1] mb-12"
              style={{ fontFamily: "'WinnerSans', sans-serif" }}
            >
              CHARGING EXPERIENCE
            </h2>

            <div
              className="flex flex-col w-full"
              style={{ fontFamily: "'WinnerSans', sans-serif" }}
            >
              <div className="flex flex-col items-start">
                <div className="text-white text-xl md:text-[24px] font-bold tracking-wide">
                  Scan to Charge
                </div>
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
          <div className="flex-1 flex flex-col items-end text-right justify-center">
            <h2
              className="text-white text-3xl lg:text-[42px] font-bold uppercase leading-[1.1] mb-12 max-w-150"
              style={{ fontFamily: "'WinnerSans', sans-serif" }}
            >
              EASY AND SEAMLESS PAYMENT WITH MMQR
            </h2>

            <div
              className="flex flex-col w-full items-end font-inter"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <div className="flex flex-col items-end">
                <div
                  className="text-white text-xl md:text-[24px] font-bold tracking-wide"
                  style={{ fontFamily: "'WinnerSans', sans-serif" }}
                >
                  Checking Balance and Points
                </div>
                <p className="text-gray-200 text-sm md:text-[16px] max-w-125 leading-relaxed font-inter">
                  Easily view your points. Points are valued at 1 Point = 1
                  Kyat.
                </p>
              </div>

              <div className="flex flex-col items-end">
                <div
                  className="text-white text-xl md:text-[24px] font-bold tracking-wide"
                  style={{ fontFamily: "'WinnerSans', sans-serif" }}
                >
                  Charging History
                </div>
                <p className="text-gray-200 text-sm md:text-[16px] max-w-125 leading-relaxed font-inter">
                  Accurately track your charging costs and usage history in real
                  time.
                </p>
              </div>

              <div className="flex flex-col items-end">
                <div
                  className="text-white text-xl md:text-[24px] font-bold tracking-wide"
                  style={{ fontFamily: "'WinnerSans', sans-serif" }}
                >
                  Payment Options
                </div>
                <p className="text-gray-200 text-sm md:text-[16px] max-w-125 leading-relaxed font-inter">
                  Pay conveniently via MMQR, which is integrated with all local
                  banks.
                </p>
              </div>

              <div className="flex flex-col items-end">
                <div
                  className="text-white text-xl md:text-[24px] font-bold tracking-wide"
                  style={{ fontFamily: "'WinnerSans', sans-serif" }}
                >
                  Coupons and Discounts
                </div>
                <p className="text-gray-200 text-sm md:text-[16px] max-w-125 leading-relaxed font-inter">
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
          <div className="flex-1 flex flex-col items-start text-left justify-center">
            <h2
              className="text-white text-4xl lg:text-[46px] font-bold uppercase leading-[1.1] mb-12"
              style={{ fontFamily: "'WinnerSans', sans-serif" }}
            >
              CHARGING HISTORY
            </h2>

            <div
              className="flex flex-col w-full"
              style={{ fontFamily: "'WinnerSans', sans-serif" }}
            >
              <div className="flex flex-col items-start mb-2">
                <div className="text-white text-xl md:text-[24px] font-bold tracking-wide">
                  Hybrid Tracking System
                </div>
                <p className="text-gray-200 text-sm md:text-[16px] max-w-125 leading-relaxed">
                  Easily switch between home charger and public charging station
                  records to compare your charging history and spending
                  patterns.
                </p>
              </div>

              <div className="flex flex-col items-start mb-2">
                <div className="text-white text-xl md:text-[24px] font-bold tracking-wide">
                  Cost Summary
                </div>
                <p className="text-gray-200 text-sm md:text-[16px] max-w-125 leading-relaxed">
                  Displays total costs in Points or Myanmar Kyat (MMK).
                </p>
              </div>

              <div className="flex flex-col items-start mb-2">
                <div className="text-white text-xl md:text-[24px] font-bold tracking-wide">
                  Time & Date
                </div>
                <p className="text-gray-200 text-sm md:text-[16px] max-w-125 leading-relaxed">
                  View precise timestamps for the start and end of each charging
                  session.
                </p>
              </div>

              <div className="flex flex-col items-start mb-2">
                <div className="text-white text-xl md:text-[24px] font-bold tracking-wide">
                  Smart Filtering
                </div>
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
              className="text-white text-3xl lg:text-[42px] font-bold uppercase leading-[1.1] mb-12 max-w-162.5 z-10 relative"
              style={{ fontFamily: "'WinnerSans', sans-serif" }}
            >
              QUICK REGISTRATION &<br />
              VEHICLE TRACKING
            </h2>

            <div
              className="flex flex-col gap-12 w-full items-end z-10 relative font-inter"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <div className="flex flex-col items-end">
                <div className="text-white text-xl md:text-[24px] font-bold mb-3 tracking-wide font-inter">
                  Account Creation via Phone Number
                </div>
                <p className="text-gray-200 text-sm md:text-[16px] max-w-137.5 leading-relaxed font-inter">
                  Create an account in seconds using just your phone number and
                  start using the services immediately without any complicated
                  steps.
                </p>
              </div>

              <div className="flex flex-col items-end">
                <div className="text-white text-xl md:text-[28px] font-bold mb-3 tracking-wide font-inter">
                  Adding Vehicle Information to Your Account
                </div>
                <p className="text-gray-200 text-sm md:text-[16px] max-w-137.5 leading-relaxed font-inter">
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
