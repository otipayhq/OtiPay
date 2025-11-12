export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-3xl font-bold text-foreground mb-8">Cookie Policy</h1>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. What are Cookies?</h2>
              <p>
                Cookies are small pieces of data stored on your device (computer, tablet, or mobile phone) when you
                visit our website. They help us remember information about your visit, such as your preferences and
                login information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Cookies</h2>
              <p>OtiPay uses cookies for various purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>
                  <strong>Authentication:</strong> To keep you logged in
                </li>
                <li>
                  <strong>Preferences:</strong> To remember your settings and preferences
                </li>
                <li>
                  <strong>Security:</strong> To prevent fraud and enhance security
                </li>
                <li>
                  <strong>Analytics:</strong> To understand how users interact with our platform
                </li>
                <li>
                  <strong>Performance:</strong> To optimize website performance
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Types of Cookies We Use</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser
                </li>
                <li>
                  <strong>Persistent Cookies:</strong> Cookies that remain on your device for a specified period
                </li>
                <li>
                  <strong>First-party Cookies:</strong> Cookies set by OtiPay
                </li>
                <li>
                  <strong>Third-party Cookies:</strong> Cookies set by our partners for analytics and advertising
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Managing Cookies</h2>
              <p>Most web browsers allow you to control cookies through their settings. You can:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Accept or reject cookies</li>
                <li>Delete cookies from your device</li>
                <li>Set your browser to notify you when a cookie is being sent</li>
                <li>Disable cookies entirely</li>
              </ul>
              <p className="mt-3">
                Please note that disabling cookies may affect your ability to use certain features of our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Third-party Cookies</h2>
              <p>
                We may use third-party service providers who set cookies for analytics and other purposes. These
                include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Google Analytics for website usage analysis</li>
                <li>Stripe for payment processing</li>
                <li>Social media platforms for integration</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. GDPR Compliance</h2>
              <p>
                If you are a resident of the European Union, we comply with the General Data Protection Regulation
                (GDPR) regarding cookies and will obtain your consent before setting non-essential cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Changes to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time. We encourage you to review this policy periodically
                to stay informed about how we use cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact Us</h2>
              <p>If you have questions about our Cookie Policy, please contact us at privacy@otibaco.com</p>
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
