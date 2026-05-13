export default function Footer() {
  return (
    <footer className="bg-ink text-bone/35 border-t border-bone/10 px-6 md:px-10 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <p className="display text-bone text-lg">Rashaun Heaston</p>

        <div className="flex flex-wrap items-center gap-6 text-xs">
          <a
            href="https://www.royalrootsorganics.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline hover:text-bone/60 transition-colors"
          >
            Royal Roots Organics ↗
          </a>
          <a href="#contact" className="link-underline hover:text-bone/60 transition-colors">
            Get in touch
          </a>
          <span>© {new Date().getFullYear()}</span>
          <span>Detroit, MI</span>
        </div>
      </div>
    </footer>
  );
}
