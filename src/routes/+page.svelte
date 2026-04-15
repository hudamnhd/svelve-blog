<script>
  const links = [
    { href: "/quran", label: "quran" },
    { href: "/amalan", label: "amalan" },
    { href: "/bidayatul-hidayah", label: "bidayatul-hidayah" },
    { href: "/renungan-autofagi", label: "renungan-autofagi" }
  ];

  const socials = [
    { href: "https://github.com/hudamnhd", label: "gh" },
    { href: "https://twitter.com/hudamnhd", label: "x" },
    { href: "https://facbook.com/hudamnhd", label: "fb" },
  ];
</script>

<div class="min-h-screen flex items-center justify-center px-6 font-mono">
  <div class="w-full max-w-xs">

    <!-- Header -->
    <header class="mb-12">
      <h1 class="text-lg">huda</h1>
      <p class="text-sm text-muted-foreground">self reminder</p>
    </header>

    <!-- Links -->
    <nav class="flex flex-col">
      {#each links as link}
        <a
          href={link.href}
          class="flex justify-between py-2 text-muted-foreground hover:text-neutral-800 transition"
        >
          <span>{link.label}</span>
          <span>→</span>
        </a>
      {/each}
    </nav>

    <!-- Footer -->
    <footer class="mt-12 pt-4 border-t border-neutral-200 flex gap-4 text-sm text-muted-foreground">
      {#each socials as s}
        <a href={s.href} target="_blank" class="hover:text-foreground transition">
          {s.label}
        </a>
      {/each}
    </footer>

  </div>
</div>
