export function Footer() {
  return (
    <footer className="w-full border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} Tony (Semiconstructor). All rights reserved.
        </p>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <a href="mailto:tony@vaultscope.de" className="hover:text-primary transition-colors">
            tony@vaultscope.de
          </a>
          <a href="https://github.com/semiconstructor" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
