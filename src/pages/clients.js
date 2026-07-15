function clients() {
  // Extracted partners directly from the corporate layout blueprint
  const partnerList = [
    { name: "Mediterranean Project Limited", subtext: "Structural Logistics", logo: "/src/assets/logo-mediterranean.png" },
    { name: "De-Namud", subtext: "Heavy Fabrication", logo: "/src/assets/image_ebfcf7.png" },
    { name: "Geoblast", subtext: "Surface Engineering", logo: "/src/assets/logo-geoblast.png" },
    { name: "Itema", subtext: "Advanced Machinery", logo: "/src/assets/logo-itema.png" },
    { name: "Genser", subtext: "Power Solutions", logo: "/src/assets/logo-genser.png" },
    { name: "Rabotech Ghana", subtext: "Mining Support", logo: "/src/assets/logo-rabotech.png" },
    { name: "Kamit Services", subtext: "Consulting & Supply", logo: "/src/assets/logo-kamit.png" },
    { name: "Isometrick Company Limited", subtext: "Precision Drafting", logo: "/src/assets/logo-isometrick.png" }
  ];

  return `
    <main class="flex-grow bg-[#f7f9fb] text-[#191c1e] font-sans">
      
      <!-- HERO BANNER SECTION -->
      <section class="relative bg-[#000615] pt-28 pb-24 px-6 text-white text-center md:text-left overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img src="/src/assets/WhatsApp Image 2026-06-23 at 15.03.13.jpeg" alt="Corporate Partnership Background" class="w-full h-full object-cover opacity-40">
          <div class="absolute inset-0 bg-[#000615]/70"></div>
        </div>
        <div class="relative z-10 max-w-7xl mx-auto">
          <span class="inline-block text-[10px] font-bold tracking-widest text-[#fea619] uppercase bg-white/5 border border-[#fea619]/20 px-3 py-1 rounded-[0.15rem] mb-4">
            Global Partnership
          </span>
          <h1 class="text-3xl md:text-5xl font-black uppercase tracking-tight max-w-3xl mb-4 leading-none">
            Built on Foundation of Trust
          </h1>
          <p class="text-xs md:text-sm text-slate-300 max-w-2xl leading-relaxed mb-8">
            We collaborate with industry leaders to deliver world-class engineering solutions. Our clients represent the pinnacle of industrial expertise across Africa and Europe.
          </p>
          
          <!-- Key Metrics Ledger Bar -->
          <div class="flex items-center gap-6 border-t border-slate-800 pt-6 max-w-md mx-auto md:mx-0">
            <div>
              <span class="text-xl md:text-2xl font-black text-white">10+</span>
              <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Years of Expertise</span>
            </div>
            <div class="h-8 w-px bg-slate-800"></div>
            <div>
              <span class="text-xl md:text-2xl font-black text-white">20+</span>
              <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Successful Projects</span>
            </div>
          </div>
        </div>
      </section>

      <!-- TRUSTED PARTNERS LISTING -->
      <section class="max-w-7xl mx-auto py-20 px-6">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 class="text-2xl font-black text-[#000615] uppercase tracking-tight mb-2">Our Trusted Partners</h2>
            <p class="text-xs text-[#44474d] max-w-xl leading-relaxed">
              Forging long-term relationships through technical excellence and uncompromising safety standards. Our portfolio includes diverse leaders in mining, logistics, and heavy industry.
            </p>
          </div>
          <!-- Right Segment Categorization Filters -->
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1.5 bg-white border border-slate-200 text-[10px] font-bold uppercase tracking-wider text-[#44474d] rounded-[0.15rem]">Mining</span>
            <span class="px-3 py-1.5 bg-white border border-slate-200 text-[10px] font-bold uppercase tracking-wider text-[#44474d] rounded-[0.15rem]">Engineering</span>
            <span class="px-3 py-1.5 bg-white border border-slate-200 text-[10px] font-bold uppercase tracking-wider text-[#44474d] rounded-[0.15rem]">Infrastructure</span>
          </div>
        </div>

        <!-- 4x2 PARTNERS CARDS GRID -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          ${partnerList.map((partner) => `
            <div class="bg-white border border-slate-200 rounded-[0.25rem] p-6 shadow-sm flex flex-col items-center text-center justify-between min-h-[180px]">
              <!-- Mock Image Logo Container -->
              <div class="h-16 w-full flex items-center justify-center bg-slate-50 border border-slate-100 rounded-[0.15rem] p-2 mb-4">
                <img src="${partner.logo}" alt="${partner.name} logo asset" class="max-h-full max-w-full object-contain filter grayscale opacity-75 group-hover:opacity-100 mix-blend-multiply" onerror="this.style.display='none'">
              </div>
              <div>
                <h3 class="text-xs font-black text-[#000615] uppercase tracking-tight mb-1">
                  ${partner.name}
                </h3>
                <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
                  ${partner.subtext}
                </span>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- SPLIT VALUE PROPOSITION SECTION -->
      <section class="bg-white border-t border-b border-slate-200 py-20 px-6">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Image Box + Overlay Badge -->
          <div class="lg:col-span-6 relative rounded-[0.25rem] overflow-hidden shadow-md h-80 bg-slate-900">
            <img src="/src/assets/WhatsApp Image 2026-06-23 at 15.03.11.jpeg" alt="Industrial Processing Infrastructure" class="w-full h-full object-cover opacity-80">
            <!-- Floating Overlay Segment Card -->
            <div class="absolute bottom-4 left-4 right-4 bg-[#000615]/95 border border-slate-800 p-5 rounded-[0.15rem] text-white">
              <span class="text-[9px] font-bold text-[#fea619] tracking-widest uppercase block mb-1">ISO Certified Project</span>
              <h4 class="text-sm font-black uppercase tracking-tight mb-1">Mining Infrastructure Overhaul</h4>
              <p class="text-[10px] text-slate-300 leading-relaxed mb-3">A multi-phase partnership with Mediterranean Project Limited.</p>
              <div class="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                <span class="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                0 LTI (Lost Time Injury)
              </div>
            </div>
          </div>

          <!-- Description Text Panel -->
          <div class="lg:col-span-6">
            <h2 class="text-2xl font-black text-[#000615] uppercase tracking-tight mb-6">Beyond Just Service Delivery</h2>
            
            <div class="space-y-6">
              <div>
                <h4 class="text-xs font-bold text-[#000615] uppercase tracking-wider mb-1">Strategic Alignment</h4>
                <p class="text-[11px] md:text-xs text-[#44474d] leading-relaxed">
                  We don't just work for you; we work with you. Every project is aligned with your long-term operational goals and strict infrastructure safety protocols.
                </p>
              </div>
              
              <div class="h-px w-full bg-slate-100"></div>

              <div>
                <h4 class="text-xs font-bold text-[#000615] uppercase tracking-wider mb-1">Technical Integrity</h4>
                <p class="text-[11px] md:text-xs text-[#44474d] leading-relaxed">
                  Our engineering team brings decades of experience to complex structural challenges, ensuring structural reliability that lasts for generations.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- BOTTOM ACTION CALL (CTA) -->
      <section class="bg-[#000615] py-20 px-6 text-center text-white">
        <div class="max-w-3xl mx-auto">
          <h3 class="text-xl md:text-2xl font-black uppercase tracking-tight mb-3">
            Ready to Elevate Your Next Project?
          </h3>
          <p class="text-xs text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Join our portfolio of industry leaders and experience the JPTECH standard of engineering excellence and professional reliability.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <a href="/contact" data-link class="px-6 py-3 bg-[#fea619] hover:bg-[#e09110] text-[#000615] text-xs font-bold uppercase tracking-wider rounded-[0.25rem] transition-colors shadow-sm">
              Work With Us
            </a>
            <a href="/services" data-link class="px-6 py-3 bg-transparent hover:bg-white/5 border border-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-[0.25rem] transition-colors">
              Our Services
            </a>
          </div>
        </div>
      </section>

    </main>
  `;
}

export default clients;