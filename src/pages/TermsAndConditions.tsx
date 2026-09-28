import { FunctionComponent } from "react";
import NavMenu from "../components/NavMenu";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export type TermsAndConditions = {};

const TermsAndConditions: FunctionComponent<TermsAndConditions> = ({}) => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col font-inter pt-8 px-8 lg:px-24 overflow-x-hidden relative">
      {/* Header */}
      <div className="relative z-20">
        <NavMenu />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col mt-12 lg:mt-24 relative z-10 w-full  pb-32">
        <h1
          className="text-4xl lg:text-[56px] font-bold leading-[1.1] uppercase m-0 tracking-tight mb-8"
          style={{ fontFamily: "'WinnerSans', sans-serif" }}
        >
          WeCharge Terms & Conditions
        </h1>

        <div className="text-gray-300 text-base md:text-lg leading-relaxed flex flex-col gap-8 p-8 w-full">
          <p className="font-semibold text-white text-[18px]">Effective Date:</p>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              1. Introduction and Acceptance
            </h2>
            <p className="mb-2 text-[18px]">
              These Terms and Conditions ("Terms") govern your access to and use
              of the WeCharge mobile application, website, digital wallet, map
              features, and payment portal (collectively, the "Service")
              operated by WeCharge Myanmar Company Limited (Registration
              Number:145721075, located at 45-T, Tay Nu Yin Road, 7th Ward,
              Mayangone Township, Yangon, Myanmar.
            </p>
            <p className="text-[18px]">
              By creating an account, accessing the platform, initiating a
              charging session, or using the MMQR payment portal, you agree to
              be bound by these Terms and the WeCharge Privacy Policy. If you do
              not agree to these Terms, you must not use the Service. In
              accordance with Myanmar's Electronic Transactions Law, your
              electronic acceptance of these terms constitutes a valid, legally
              binding consumer contract.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              2. Eligibility and User Accounts
            </h2>
            <p className="mb-2 text-[18px]">
              To use the WeCharge platform, you must be at least 18 years of
              age. By registering, you warrant that you meet this minimum age
              requirement and possess the legal capacity to enter into a binding
              contract under Myanmar law.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Account Accuracy:</strong> You must provide accurate,
                current, and complete registration and payment information.
              </li>
              <li>
                <strong>Security:</strong> You are responsible for safeguarding
                your account credentials, password, and mobile device. You agree
                to take full responsibility for all activities, charging
                sessions, and MMQR payments that occur under your account.
              </li>
              <li>
                <strong>Unauthorized Access:</strong> You must notify us
                immediately at our official business address or support channels
                if you suspect any unauthorized access to your account.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              3. Platform Scope and Role of WeCharge
            </h2>
            <p className="mb-2 text-[18px]">
              WeCharge is an e-Mobility Software Provider (EMP), not a physical
              charging station operator.
            </p>
            <p className="text-[18px]">
              Our Service is designed to help electric vehicle (EV) drivers
              locate charging points, track charging sessions, and process
              payments. Unless explicitly stated otherwise, WeCharge does not
              own, operate, install, or maintain the physical charging stations,
              the electrical infrastructure, or the parking facilities shown in
              the app.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              4. Maps, Station Information, and Route Planning
            </h2>
            <p className="mb-2 text-[18px]">
              The WeCharge map interface (powered by Google Maps) displays
              station locations, availability, charging power, and pricing based
              on data provided by independent Charge Point Operators (CPOs) and
              private hosts.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>No Guarantee of Availability:</strong> Map data is
                provided for informational purposes only. We do not guarantee
                that a station will be online, accessible, unoccupied, or
                accurately priced upon your arrival.
              </li>
              <li>
                <strong>User Verification:</strong> You are responsible for
                verifying the physical pricing displays, parking rules, and
                station operating hours before plugging in your vehicle.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              5. Public Charging Sessions
            </h2>
            <p className="mb-2 text-[18px]">
              When initiating a session at a public or semi-public charging
              point through the WeCharge app:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                You agree to comply with all rules, idle fees, and time limits
                imposed by the independent operator of that specific charging
                station.
              </li>
              <li>
                WeCharge acts solely as a digital facilitator to initiate the
                session and process the payment.
              </li>
              <li>
                We disclaim all liability for interrupted sessions, power
                fluctuations, or hardware failures originating from third-party
                public chargers.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              6. Home Charger Sharing
            </h2>
            <p className="mb-2 text-[18px]">
              WeCharge permits the sharing of private/home chargers on our
              network. If you choose to list your home charger for public or
              peer-to-peer (P2P) use:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-2">
              <li>
                <strong>Host Responsibility:</strong> You warrant that you own
                or have explicit legal authority to share the charger. You are
                solely responsible for ensuring the charger is professionally
                installed, strictly complies with Myanmar's electrical grid
                safety standards, and is safe for public use.
              </li>
              <li>
                <strong>Guest Responsibility:</strong> Drivers utilizing a
                shared home charger must do so respectfully, vacating the
                premises promptly upon completion of the charge.
              </li>
            </ul>
            <p className="text-[18px]">
              WeCharge provides only the software to connect hosts and guests
              and process payments. We assume no liability for property damage,
              electrical faults, or disputes arising at residential premises.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              7. Payments & Wallet
            </h2>
            <h3 className="text-lg font-semibold text-white mt-4 mb-2">
              1. In-App Wallet and Points System
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>Currency Conversion:</strong> All charging services and
                transactions within the application are processed using our
                proprietary in-app currency, referred to as "Points" (Pts).
              </li>
              <li>
                <strong>Funding the Wallet:</strong> When you add funds to your
                wallet using Myanmar Kyat (MMK), the corresponding amount will
                be converted into Points (Pts) and credited to your in-app
                balance.
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-4 mb-2">
              2. Minimum Balance and Top-Up Requirements
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>Minimum Top-Up:</strong> To activate and use the in-app
                wallet, users must make a minimum top-up of 10,000 MMK.
              </li>
              <li>
                <strong>Reserved Holding Balance:</strong> A base balance of
                10,000 MMK (or 10,000 in Pts) is held in your wallet as a
                standard security reserve.
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-4 mb-2">
              3. Charging Session Rules and Warnings
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>Initiating a Session:</strong> To successfully start a
                new charging session, your wallet balance must be strictly at or
                above the minimum required threshold of 10,000 MMK. Sessions
                cannot be initiated if the balance is below this amount.
              </li>
              <li>
                <strong>Low Balance Warning:</strong> During an active charging
                session, usage fees are continuously deducted from your
                available balance (the amount exceeding your 10,000 MMK
                reserve). If your available balance depletes and your total
                wallet balance drops to the 10,000 MMK reserve limit, a "Low
                Balance Warning" will be issued via the application.
              </li>
              <li>
                <strong>Automatic Session Termination:</strong> Upon triggering
                the low balance warning and hitting the 10,000 MMK threshold,
                the ongoing charging session will be automatically terminated to
                prevent your account from falling into a negative balance. To
                resume charging, you must top up your wallet.
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-4 mb-2">
              4. Account Deletion and Refund Policy
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Refund Eligibility:</strong> The 10,000 MMK (or Pts
                equivalent) held as a reserved balance remains your property.
              </li>
              <li>
                <strong>Account Deletion:</strong> If you choose to permanently
                delete your account, the reserved 10,000 MMK / Points will be
                fully refunded to you.
              </li>
              <li>
                <strong>Processing:</strong> Refunds upon account deletion will
                be processed and returned to your original payment method or
                designated bank account, provided there are no pending disputes,
                outstanding fees, or violations of our general terms of service.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              8. Hardware Responsibility and Safety Disclaimers
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                WeCharge assumes zero responsibility for physical hardware.
              </li>
              <li>
                You are entirely responsible for the compatibility, safety, and
                condition of your electric vehicle, charging cables, and
                adapters.
              </li>
              <li>
                You must not use frayed, damaged, or modified cables, or attempt
                to tamper with, reverse-engineer, or physically force a
                connection with any charging station.
              </li>
              <li>
                <strong>Emergency Protocol:</strong> In the event of an
                electrical fire, shock, or immediate physical danger, do not
                rely on the WeCharge app. Contact local emergency services
                immediately.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              9. Third-Party Integrations
            </h2>
            <p className="text-[18px]">
              The Service relies on third-party integrations, including but not
              limited to Google Maps for location services and local banking
              partners for MMQR payment processing. Your use of the Service is
              subject to the continuous availability of these third-party APIs.
              WeCharge is not liable for app outages, payment failures, or
              route-planning errors caused by third-party downtime.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              10. Cancellations, Disputes, and Refunds
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Session Disputes:</strong> If you believe you were
                overcharged due to a software error, you must lodge a dispute
                via WeCharge customer support within 7 days of the transaction.
              </li>
              <li>
                <strong>Refund Processing:</strong> Refunds for failed sessions
                (where you were charged but no energy was dispensed) will be
                verified against the digital meter logs.
              </li>
              <li>
                WeCharge cannot refund third-party parking fines, physical
                overstay tickets, or independent operator idle fees.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              11. Limitation of Liability
            </h2>
            <p className="mb-2 text-[18px]">
              To the maximum extent permitted by the laws of Myanmar:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                WeCharge provides the Service on an "as-is" and "as-available"
                basis, without warranties of any kind, express or implied.
              </li>
              <li>
                WeCharge shall not be liable for any indirect, incidental,
                consequential, or punitive damages, including lost profits, loss
                of data, vehicle damage, electrical fires, or personal injury
                resulting from your use of the Service, a third-party charger,
                or a shared home charger.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              12. Governing Law and Jurisdiction
            </h2>
            <p className="text-[18px]">
              These Terms and any disputes arising out of or related to your use
              of WeCharge shall be governed by and construed in accordance with
              the laws of the Republic of the Union of Myanmar, including the
              Electronic Transactions Law and Consumer Protection Law. Any legal
              actions or proceedings shall be brought exclusively in the
              competent courts of Yangon, Myanmar.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              13. Future Features
            </h2>
            <p className="text-[18px]">
              WeCharge reserves the right to modify the Service, add new
              features (such as station ownership, advanced network roaming, or
              fleet management), or update these Terms at any time. Material
              changes to the Terms will be communicated to you via the app or
              email. Continued use of the Service following such updates
              constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              14. Contact Information
            </h2>
            <p className="mb-2 text-[18px]">
              For legal notices, billing disputes, or customer support, please
              contact WeCharge:
            </p>
            <ul className="list-none space-y-2 text-white">
              <li>
                <strong className="text-gray-300">Business Address:</strong>{" "}
                45-T, Tay Nu Yin Road, 7th Ward, Mayangone Township, Yangon,
                Myanmar
              </li>
              <li>
                <strong className="text-gray-300">Email:</strong>{" "}
                <a
                  href="mailto:wecharge.mm@gmail.com"
                  className="text-crimson hover:underline"
                >
                  wecharge.mm@gmail.com
                </a>
              </li>
              <li>
                <strong className="text-gray-300">Phone:</strong> +959 967 996
                777
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer className="mt-auto" />
    </div>
  );
};

export default TermsAndConditions;
