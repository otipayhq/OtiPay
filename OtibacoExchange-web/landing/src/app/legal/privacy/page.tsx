export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-3xl font-bold text-foreground mb-8">Privacy Policy</h1>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p>
                OtiBacoExchange ("Company," "we," "us," or "our") operates the website. This page informs you of our
                policies regarding the collection, use, and disclosure of personal data when you use our service and the
                choices you have associated with that data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Information Collection and Use</h2>
              <p>We collect several different types of information for various purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>
                  <strong>Account Information:</strong> Name, email address, phone number, and profile information
                </li>
                <li>
                  <strong>Financial Information:</strong> Bank account details, transaction history, and cryptocurrency
                  holdings
                </li>
                <li>
                  <strong>Device Information:</strong> IP address, browser type, operating system
                </li>
                <li>
                  <strong>Usage Data:</strong> Pages visited, time spent on pages, and actions taken
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Use of Data</h2>
              <p>OtiBacoExchange uses the collected data for various purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>To provide and maintain our service</li>
                <li>To notify you about changes to our service</li>
                <li>To allow you to participate in interactive features of our service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our service</li>
                <li>To monitor the usage of our service</li>
                <li>To detect, prevent, and address technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Security of Data</h2>
              <p>
                The security of your data is important to us but remember that no method of transmission over the
                Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable
                means to protect your personal data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last Updated" date at the bottom of this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at privacy@otibaco.com</p>
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
