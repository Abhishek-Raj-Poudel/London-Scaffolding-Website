import logo from "@/assets/logo.png";

const services = [
  {
    title: "Domestic Scaffolding",
    href: "/services/domestic-scaffolding-london",
  },
  {
    title: "Commercial Scaffolding",
    href: "/services/commercial-scaffolding-london",
  },
  { title: "Temporary Roofs", href: "/services/temporary-roof-scaffolding" },
  { title: "Tube & Fitting", href: "/services/tube-and-fitting-scaffolding" },
  { title: "Scaffold Inspections", href: "/services/scaffold-inspections" },
];

const areas = [
  { title: "North London", href: "/areas/north-london-scaffolding" },
  { title: "South London", href: "/areas/south-london-scaffolding" },
  { title: "East London", href: "/areas/east-london-scaffolding" },
  { title: "West London", href: "/areas/west-london-scaffolding" },
  { title: "Central London", href: "/areas/central-london-scaffolding" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-white/10">
      <div className="wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Company Info */}
          <div className="space-y-6">
            <a href="/" className="text-2xl font-bold tracking-tighter">
              <img
                src={logo.src}
                alt="Logo"
                className={"h-10 brightness-0 invert mb-10"}
              />
            </a>
            <p className="text-white/70 typo-base leading-relaxed">
              Premium scaffolding solutions across London. Family-run business
              with 10+ years of industry expertise and safety excellence.
            </p>
            <div className="flex gap-4">
              {/* Safety Badges Placeholder */}
              <div className="flex flex-wrap gap-3">
                <div
                  className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center border border-white/20"
                  title="CITB Registered"
                >
                  <span className="text-[10px] font-bold">CITB</span>
                </div>
                <div
                  className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center border border-white/20"
                  title="CISRS Qualified"
                >
                  <span className="text-[10px] font-bold">CISRS</span>
                </div>
                <div
                  className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center border border-white/20"
                  title="Fully Insured"
                >
                  <span className="text-[10px] font-bold">INSURED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-bold mb-6 typo-lg">Our Services</h4>
            <ul className="space-y-4">
              {services.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors typo-base"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
              {/* <li>
                <a
                  href="/services"
                  className="text-white font-semibold hover:underline typo-base"
                >
                  View All Services →
                </a>
              </li> */}
            </ul>
          </div>

          {/* Column 3: Areas */}
          <div>
            <h4 className="font-bold mb-6 typo-lg">Areas We Cover</h4>
            <ul className="space-y-4">
              {areas.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors typo-base"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/areas-we-cover"
                  className="text-white font-semibold hover:underline typo-base"
                >
                  All Locations →
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="space-y-6">
            <div>
              <h4 className="font-bold mb-4 typo-lg">Contact Us</h4>
              <ul className="space-y-3 typo-base text-white/70">
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <a
                    href="tel:+44208XXX XXXX"
                    className="text-white/70 hover:text-white transition-colors typo-base"
                  >
                    020 8XXX XXXX
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <a
                    href="mailto:[EMAIL_ADDRESS]"
                    className="text-white/70 hover:text-white transition-colors typo-base"
                  >
                    info@londonscaffolding.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 typo-lg">Business Hours</h4>
              <ul className="space-y-2 typo-sm text-white/70">
                <li className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span>07:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sat:</span>
                  <span>08:00 - 14:00</span>
                </li>
                <li className="flex justify-between font-semibold text-white/90">
                  <span>Sun:</span>
                  <span>Emergency Only</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="typo-sm text-white/50">
            © {new Date().getFullYear()} London Scaffolding Ltd. All rights
            reserved.
          </p>
          <div className="flex gap-6 typo-sm text-white/50">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
