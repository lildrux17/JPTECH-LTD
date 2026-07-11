function project() {
  const images = [
    '/WhatsApp Image 2026-06-23 at 15.03.08.jpeg',
    '/WhatsApp Image 2026-06-23 at 15.03.10.jpeg',
    '/WhatsApp Image 2026-06-23 at 15.03.11 (1).jpeg',
    '/WhatsApp Image 2026-06-23 at 14.45.22.jpeg'
  ];

  return `
    <main class="flex-grow bg-[#f7f9fb] py-16 px-6 text-[#191c1e]">
      <div class="max-w-6xl mx-auto text-center mb-12">
        <h1 class="text-3xl md:text-4xl font-black text-[#000615] uppercase tracking-tight">On-Site Project Portfolio</h1>
        <p class="text-xs text-[#44474d] mt-2">Verified field records showing structural containment installations and asset configuration deployments.</p>
      </div>

      <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        ${images.map((src, index) => `
          <div class="relative bg-[#000615] rounded-[0.25rem] overflow-hidden shadow group h-64">
            <img src="${src}" alt="Field Action ${index + 1}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
            <div class="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/90 via-transparent to-transparent opacity-80"></div>
            <div class="absolute bottom-3 left-3 right-3">
              <span class="text-[10px] uppercase font-bold tracking-wider text-[#fea619]">Active Deployment Site</span>
            </div>
          </div>
        `).join('')}
      </div>
    </main>
  `;
}

export default project