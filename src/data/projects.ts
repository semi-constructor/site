export const projects = [
  {
    slug: "local-fm",
    title: "Local.fm",
    subtitle: "Self-Hosted Music Analytics",
    description: "A self-hosted music statistics dashboard that brings scrobbling back to your own hardware. Track your listening habits on Spotify with detailed analytics, daily summaries, and yearly recaps.",
    longDescription: "Local.fm was built to solve the fragmentation of music statistics. Instead of waiting for Spotify Wrapped, this application runs continuously on your own server, collecting and analyzing listening data in real-time. It features a stunning UI built with Next.js 15, robust data processing via Prisma and PostgreSQL, and runs seamlessly in a Docker environment.",
    tools: ["Next.js 15", "PostgreSQL", "Tailwind CSS", "Spotify API", "TypeScript", "Docker", "Prisma"],
    website: "",
    github: "https://github.com/semi-constructor/local.fm",
    image: "https://github.com/semi-constructor/local.fm/raw/main/screenshots/landing.png",
    images: [
      "https://github.com/semi-constructor/local.fm/raw/main/screenshots/history.png",
      "https://github.com/semi-constructor/local.fm/raw/main/screenshots/top-artists.png",
      "https://github.com/semi-constructor/local.fm/raw/main/screenshots/lifetime.png",
      "https://github.com/semi-constructor/local.fm/raw/main/screenshots/recap.png"
    ]
  },
  {
    slug: "vaultscope",
    title: "VaultScope",
    subtitle: "High-Performance Bare-Metal & VPS Hosting",
    description: "VaultScope is my primary infrastructure business providing dedicated servers and VPS solutions. Engineered from the ground up for maximum performance, low latency, and rock-solid reliability.",
    longDescription: "VaultScope represents a deep dive into bare-metal infrastructure and enterprise virtualization. As the founder and lead architect, I handle everything from hardware provisioning and complex network configurations via Proxmox VE, to building the customer-facing management dashboards using Vite, TypeScript, and Rust. It's a complete ecosystem that bridges low-level system administration with a sleek, modern web application experience. We focus on delivering uncompromising performance to developers and businesses.",
    tools: ["Vite", "Rust", "TypeScript", "Proxmox", "Debian", "Docker", "Nginx"],
    website: "https://vaultscope.de",
    github: "https://github.com/VaultScope",
    image: "/vaultscope/og-image.png",
    images: [
      "/vaultscope/hero.png",
      "/vaultscope/logo.png"
    ]
  },
  {
    slug: "pegasus",
    title: "Pegasus",
    subtitle: "Advanced Discord Moderation",
    description: "Stop hitting paywalls. Get advanced moderation, custom economy, and ticket systems with absolutely zero limitations. Built by the community, for the community.",
    longDescription: "Pegasus is a feature-rich Discord bot designed to replace expensive premium alternatives. It scales efficiently using Node.js and PostgreSQL, providing lightning-fast command execution and robust data integrity for thousands of servers. The web dashboard allows easy configuration via a Next.js frontend.",
    tools: ["Next.js", "Discord.js", "Node.js", "PostgreSQL"],
    website: "https://pegasusbot.app",
    github: "https://github.com/semiconstructor/pegasus",
    image: "/pegasus/overview.png",
    images: [
      "/pegasus/ticketboard.png",
      "/pegasus/transactions.png",
      "/pegasus/achievements.png"
    ]
  }
];
