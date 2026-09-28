import { FunctionComponent } from "react";
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";

export type PrivacyPolicy = {};

const PrivacyPolicy: FunctionComponent<PrivacyPolicy> = ({}) => {
  return (
    <div className="w-full min-h-screen flex flex-col font-inter pt-8 px-8 lg:px-24 overflow-x-hidden relative">
      {/* Header */}
      <div className="relative z-20">
        <NavMenu />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col mt-12 lg:mt-24 relative z-10 w-full pb-32">
        <h1
          className="text-4xl lg:text-[56px] font-bold leading-[1.1] uppercase m-0 tracking-tight mb-8"
          style={{ fontFamily: "'WinnerSans', sans-serif" }}
        >
          WeCharge Privacy Policy
        </h1>

        <div className="text-gray-300 text-base md:text-lg leading-relaxed flex flex-col gap-8 p-8 w-full">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
            Effective Date:
          </h3>

          <p className="text-[18px]">
            This Privacy Policy explains how WeCharge Myanmar Company Limited
            collects, uses, protects, and discloses your personal information.
            As an e-Mobility Software Provider operating in the Republic of the
            Union of Myanmar, we are committed to safeguarding your privacy in
            connection with your use of the WeCharge mobile application, digital
            wallet, map features, and payment portal (the "Service").
          </p>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              1. Legal Framework
            </h2>
            <p className="text-[18px]">
              While Myanmar does not currently possess a single comprehensive
              Personal Data Protection Act, our data practices are designed to
              comply with existing statutory frameworks, primarily the
              Electronic Transactions Law (as amended in 2021) and the
              Constitution of Myanmar. The 2021 amendments to the Electronic
              Transactions Law explicitly outline duties for the systematic
              management and protection of personal information, imposing
              stringent penalties for the failure to secure personal data.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              2. Information We Collect
            </h2>
            <p className="text-[18px] mb-2">
              To provide seamless EV charging and payment services, we collect
              the following categories of information:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[18px]">
              <li>
                <strong>Identity & Contact Data:</strong> When you create an
                account, we collect your name and phone number, but will only
                show your user ID to the facility owners.
              </li>
              <li>
                <strong>Payment & Transaction Data:</strong> To facilitate your
                in-app wallet and Points (Pts) system, we collect transaction
                logs regarding your Myanmar Kyat (MMK) top-ups and wallet Point
                balances. We monitor your account to enforce the minimum 10,000
                MMK top-up requirement and maintain the 10,000 MMK (or Pts
                equivalent) security reserve. We also process data related to
                any refunds issued upon account deletion. (Note: We do not store
                your raw bank account or credit card numbers, as local banking
                partners handle the underlying MMQR transfers).
              </li>
              <li>
                <strong>Location & Route Data:</strong> With your device
                permission, we collect precise GPS location data to display
                nearby charging stations, provide accurate route planning via
                Google Maps, and confirm you are physically at a station when
                initiating a charge.
              </li>
              <li>
                <strong>Charging & Vehicle Data:</strong> We record charging
                session details, including station IDs, connector types,
                start/stop times, consumed energy (kWh), and related vehicle
                connection metrics.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              3. How We Use Your Information
            </h2>
            <p className="mb-2 text-[18px]">
              We strictly use your personal data to operate, maintain, and
              improve the WeCharge platform:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[18px]">
              <li>
                <strong>Service Delivery & Wallet Management:</strong> To map
                charging stations, initiate charging sessions (verifying your
                balance is strictly at or above the 10,000 MMK threshold), and
                continuously deduct usage fees from your available balance
                exceeding the reserve during active sessions. We also use this
                data to issue "Low Balance Warnings" and automatically terminate
                charging sessions when your balance hits the 10,000 MMK reserve
                limit to prevent negative balances.
              </li>
              <li>
                <strong>P2P Network Operation:</strong> To make your shared home
                charger visible to other users and securely settle payments
                between hosts and guest drivers.
              </li>
              <li>
                <strong>Dispute Resolution:</strong> To investigate and resolve
                billing discrepancies or refund requests within our 7-day
                dispute window, utilizing digital meter logs to verify consumed
                energy.
              </li>
              <li>
                <strong>Safety & Security:</strong> To monitor for fraudulent
                transactions, account misuse, or unauthorized hardware access.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              4. Disclosure and Third-Party Sharing
            </h2>
            <p className="mb-2 text-[18px]">
              WeCharge does not sell your personal data. We only share
              information with third parties when necessary to fulfill our
              service obligations or comply with the law:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[18px]">
              <li>
                <strong>Charge Point Operators (CPOs) & Hosts:</strong> We share
                anonymized or strictly necessary session data with independent
                operators or home charger hosts so they can manage their
                physical infrastructure.
              </li>
              <li>
                <strong>Service Providers:</strong> We transmit location queries
                to Google Maps to render routing data and share transaction
                references with local banking partners to facilitate the MMQR
                gateway.
              </li>
              <li>
                <strong>Legal & Regulatory Authorities:</strong> We may disclose
                personal data if required to do so by Myanmar authorities. Under
                the Electronic Transactions Law and other regulations, the
                government maintains the authority to request data for reasons
                concerning national security, stability, or the investigation of
                cyber misuse.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              5. Data Security and Retention
            </h2>
            <p className="mb-2 text-[18px]">
              We implement industry-standard encryption and security protocols
              to protect your account and session data.
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>
                <strong>Retention:</strong> We retain your account data for as
                long as your account remains active. Transaction logs and
                billing history are retained for up to 7 years to comply with
                Myanmar's financial auditing and electronic evidence
                regulations.
              </li>
              <li>
                <strong>Home Location Privacy:</strong> For users sharing a home
                charger, exact residential addresses are restricted to
                role-based access and are only fully revealed to guest drivers
                who have successfully booked or initiated a verified session.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              6. Your User Rights
            </h2>
            <p className="mb-2 text-[18px]">
              Depending on your use of the Service, you retain the ability to:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[18px]">
              <li>
                Access, review, and update your personal information directly
                within the WeCharge app.
              </li>
              <li>
                Withdraw location tracking permissions via your mobile device
                settings (though this will disable map-based station discovery).
              </li>
              <li>
                <strong>Account Deletion & Refund:</strong> Request permanent
                account deletion and the subsequent destruction of non-essential
                data. Upon account deletion, the reserved 10,000 MMK (or Pts
                equivalent) will be fully refunded to your original payment
                method or designated bank account, provided there are no pending
                disputes, outstanding fees, or violations of our general terms
                of service.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              7. Contact Information
            </h2>
            <p className="mb-2 text-[18px]">
              If you have any questions regarding this Privacy Policy or wish to
              exercise your data rights, please contact our support team:
            </p>
            <p className="mb-2 text-[18px]">
              <strong>WeCharge Myanmar Company Limited</strong>
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[18px]">
              <li>
                <strong>Business Address:</strong> 45-T, Tay Nu Yin Road, 7th
                Ward, Mayangone Township, Yangon, Myanmar
              </li>
              <li>
                <strong>Email / Phone:</strong>{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      `mailto:wecharge.mm` + `@` + `gmail.com`;
                  }}
                  className="text-blue-400 hover:underline"
                >
                  wecharge.mm<span>@</span>gmail.com
                </a>{" "}
                / +959 967 996 777
              </li>
            </ul>
            <p className="mt-4">
              We will update this document as Myanmar's data protection
              landscape evolves. We will notify you of any material changes via
              the WeCharge app.
            </p>
          </section>
        </div>
      </main>

      <Footer className="mt-auto" />
    </div>
  );
};

export default PrivacyPolicy;
