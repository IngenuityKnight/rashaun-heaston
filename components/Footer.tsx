export default function Footer() {
  return (
    <footer className="bg-ink text-bone/60 py-12 px-6 md:px-10 border-t border-bone/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="display text-2xl text-bone">Rashaun Heaston</p>
            <p className="eyebrow mt-2">Detroit · Est. 2016</p>
          </div>

          <div className="flex items-center gap-8 text-sm">
            <a
              href="https://www.royalrootsorganics.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              Royal Roots Organics ↗
            </a>
            <a href="#contact" className="link-underline">
              Get in touch
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-bone/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-bone/40">
          <p>© {new Date().getFullYear()} Rashaun Heaston. All rights reserved.</p>
          <p>Built in Detroit.</p>
        </div>
      </div>
    </footer>
  );
}
