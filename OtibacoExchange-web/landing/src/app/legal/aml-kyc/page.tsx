export default function AMLKYCPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-3xl font-bold text-foreground mb-8">AML/KYC Policy</h1>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Anti-Money Laundering (AML) Policy</h2>
              <p>
                OtiBacoExchange is committed to maintaining the highest standards of integrity and transparency in all
                our operations. We strictly comply with all applicable anti-money laundering (AML) and counter-terrorist
                financing (CTF) regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Know Your Customer (KYC) Requirements</h2>
              <p>
                As part of our commitment to AML compliance, we implement a comprehensive KYC program that requires all
                users to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Provide valid government-issued identification</li>
                <li>Verify their residential address</li>
                <li>Disclose source of funds</li>
                <li>Complete beneficial ownership verification for corporate accounts</li>
                <li>Undergo ongoing compliance monitoring</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Customer Due Diligence (CDD)</h2>
              <p>
                We conduct customer due diligence as part of our KYC process. This includes verification of customer
                identity, assessment of potential risks, and monitoring of customer transactions for suspicious
                activity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Enhanced Due Diligence (EDD)</h2>
              <p>
                For high-risk customers or transactions, we perform enhanced due diligence procedures. This may include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Enhanced identity verification</li>
                <li>Beneficial ownership identification</li>
                <li>Source of wealth verification</li>
                <li>Transaction pattern analysis</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Suspicious Activity Reporting</h2>
              <p>
                We monitor all transactions for signs of suspicious activity and report suspected money laundering to
                the appropriate financial intelligence unit as required by law. Users should not expect notification of
                such reports.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Prohibited Activities</h2>
              <p>OtiBacoExchange prohibits the use of our platform for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Money laundering or terrorist financing</li>
                <li>Sanctions violations</li>
                <li>Fraud or deception</li>
                <li>Illegal activities</li>
                <li>Circumventing AML/KYC requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Account Freezing and Termination</h2>
              <p>
                OtiBacoExchange reserves the right to freeze or terminate accounts that are found to be in violation of
                our AML/KYC policies or applicable regulations.
              </p>
            </section>

            <section>
              <p className="text-sm">Last Updated: January 2025</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
