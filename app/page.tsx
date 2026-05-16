export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      <div className="max-w-3xl mx-auto px-6 py-20">

        {/* Hero */}
        <section className="text-center mb-20">
          <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            Developer Tools
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            Calculate the Real Cost of Every Pull Request
          </h1>
          <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
            Connect your GitHub repos and instantly see how much each PR costs in developer time — review cycles, back-and-forth, and total hours billed.
          </p>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
          >
            Start Free Trial — $16/mo
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">No credit card required for 14-day trial. Cancel anytime.</p>
        </section>

        {/* Pricing */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
          <div className="border border-[#58a6ff] rounded-xl p-8 bg-[#161b22] max-w-sm mx-auto text-center">
            <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
            <div className="text-5xl font-bold text-white mb-1">$16</div>
            <div className="text-[#8b949e] text-sm mb-6">per month</div>
            <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
              <li className="flex items-start gap-2"><span className="text-[#58a6ff] font-bold mt-0.5">✓</span>Unlimited GitHub repos</li>
              <li className="flex items-start gap-2"><span className="text-[#58a6ff] font-bold mt-0.5">✓</span>Real-time webhook tracking</li>
              <li className="flex items-start gap-2"><span className="text-[#58a6ff] font-bold mt-0.5">✓</span>Configurable hourly rates per engineer</li>
              <li className="flex items-start gap-2"><span className="text-[#58a6ff] font-bold mt-0.5">✓</span>PR cost dashboard & CSV export</li>
              <li className="flex items-start gap-2"><span className="text-[#58a6ff] font-bold mt-0.5">✓</span>Up to 25 team members</li>
            </ul>
            <a
              href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
              className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
            >
              Get Started
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
              <h3 className="font-semibold text-white mb-2">How does it connect to GitHub?</h3>
              <p className="text-[#8b949e] text-sm">You install our GitHub App on your organization. It uses webhooks to capture PR events in real time — no polling, no manual imports.</p>
            </div>
            <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
              <h3 className="font-semibold text-white mb-2">How is cost calculated?</h3>
              <p className="text-[#8b949e] text-sm">You set an hourly rate per engineer. We track time from PR open to merge, including review cycles and comment threads, then multiply by the configured rate.</p>
            </div>
            <div className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
              <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
              <p className="text-[#8b949e] text-sm">Yes. Cancel from your account dashboard at any time. You keep access until the end of your billing period with no hidden fees.</p>
            </div>
          </div>
        </section>

        <footer className="text-center mt-20 text-xs text-[#6e7681]">
          &copy; {new Date().getFullYear()} GitHub PR Cost Calculator. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
