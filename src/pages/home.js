function home() {
  return `
    <main class="flex-grow bg-[#f7f9fb] text-[#191c1e] font-sans">
      
      <!-- HERO SECTION MAIN BANNER -->
      <section class="relative bg-[#000615] min-h-[85vh] flex items-center px-6 py-20 overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img src="/src/assets/WhatsApp Image 2026-06-23 at 15.03.13.jpeg" alt="JPTECH Heavy Installation Site" class="w-full h-full object-cover opacity-40">
          <div class="absolute inset-0 bg-gradient-to-r from-[#000615] via-[#000615]/80 to-transparent"></div>
        </div>

        <div class="relative z-10 max-w-4xl mx-auto md:mx-0 w-full md:pl-12 text-center md:text-left">
          <span class="inline-flex items-center gap-1.5 bg-[#fea619] text-[#684000] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-[0.25rem] mb-6">
            <span class="w-1.5 h-1.5 bg-[#855300] rounded-full animate-pulse"></span> Registration: Act 1962 Compliant
          </span>
          <h1 class="text-4xl md:text-6xl font-black uppercase text-white tracking-tight leading-tight mb-6">
            Geomembrane Liners & <br><span class="text-[#fea619]">Civil Construction</span>
          </h1>
          <p class="text-sm md:text-base text-slate-300 max-w-2xl mb-8 leading-relaxed">
            Based in Tarkwa, JPTECH  specializes in the professional deployment of flexible geomembrane liners, floating covers, material supply, and structural civil solutions across premium mining environments.
          </p>
          <div class="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="/services" data-link class="bg-[#855300] hover:bg-[#684000] text-white text-xs font-bold uppercase tracking-wider px-6 py-4 rounded-[0.25rem] shadow-md border-b-2 border-black/40 transition-all active:translate-y-px">
              Our Capabilities
            </a>
            <a href="/contact" data-link class="bg-[#0b1f3a] hover:bg-[#132d4e] text-white text-xs font-bold uppercase tracking-wider px-6 py-4 rounded-[0.25rem] border border-slate-700 transition-all">
              Request Assessment
            </a>
          </div>
        </div>
      </section>

      <!-- DATA LEDGER & REGULATORY COMPLIANCE BAR -->
      <section class="bg-[#0b1f3a] border-b border-slate-800 py-6 px-6 text-white shadow-inner">
        <div class="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-6 text-center md:text-left">
          <div class="flex items-center gap-3">
            <div class="p-2 bg-[#000615] rounded-[0.25rem] text-[#fea619] font-mono text-xs font-bold">REG</div>
            <div>
              <div class="text-[10px] text-slate-400 uppercase font-semibold">Registration Number</div>
              <div class="text-xs font-mono font-bold text-white">BN176440226</div>
            </div>
          </div>
          <div class="hidden md:block h-6 w-px bg-slate-700"></div>
          <div class="flex items-center gap-3">
            <div class="p-2 bg-[#000615] rounded-[0.25rem] text-[#fea619] font-mono text-xs font-bold">TIN</div>
            <div>
              <div class="text-[10px] text-slate-400 uppercase font-semibold">Tax Identification Number</div>
              <div class="text-xs font-mono font-bold text-white">P0066841704</div>
            </div>
          </div>
          <div class="hidden md:block h-6 w-px bg-slate-700"></div>
          <div class="flex items-center gap-3">
            <div class="p-2 bg-[#000615] rounded-[0.25rem] text-[#fea619] font-mono text-xs font-bold">LOC</div>
            <div>
              <div class="text-[10px] text-slate-400 uppercase font-semibold">Operational Headquarters</div>
              <div class="text-xs font-bold text-white">Tarkwa, Western Region, Ghana</div>
            </div>
          </div>
        </div>
      </section>

      <!-- CORPORATE PROFILE & PHILOSOPHY STRATIFICATION -->
      <section class="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7">
          <span class="text-xs font-bold tracking-widest text-[#855300] uppercase block mb-2">Corporate Profile</span>
          <h2 class="text-3xl font-black text-[#000615] uppercase tracking-tight mb-6">About JPTECH</h2>
          <p class="text-xs md:text-sm text-[#44474d] leading-relaxed mb-4">
            JPTECH is a specialized containment and engineering firm operating from the growing mining hub of Tarkwa. We deliver expert flexible geomembrane liners, floating covers, professional material configurations, precise infrastructure adjustments, and dedicated consulting frameworks.
          </p>
          <p class="text-xs md:text-sm text-[#44474d] leading-relaxed mb-6 font-medium text-[#000615]">
            Our philosophy focuses tightly on a dedicated team-approach. We systematically prioritize the client's long-term containment security and project requirements by implementing transparent, continuous, and open reporting tracks across all milestones.
          </p>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div class="p-4 bg-white border border-slate-200 rounded-[0.25rem] shadow-sm">
              <span class="text-xs font-bold text-[#855300] uppercase tracking-wider block mb-1">Our Mission</span>
              <p class="text-[11px] text-[#44474d] leading-relaxed">To provide customers with premium quality geomembrane applications and civil works at competitive prices, protecting field infrastructure integrity safely.</p>
            </div>
            <div class="p-4 bg-white border border-slate-200 rounded-[0.25rem] shadow-sm">
              <span class="text-xs font-bold text-[#855300] uppercase tracking-wider block mb-1">Team Dynamics</span>
              <p class="text-[11px] text-[#44474d] leading-relaxed">Treating all project managers, engineers, and suppliers as respected members of a collaborative group to ensure high customer satisfaction and site reliability.</p>
            </div>
          </div>
        </div>
        
        <div class="lg:col-span-5 grid grid-cols-2 gap-4">
          <img src="/src/assets/WhatsApp Image 2026-06-23 at 15.03.13 (1).jpeg" alt="HDPE Sheet Welding Operation" class="w-full h-64 object-cover rounded-[0.25rem] shadow border border-slate-200">
          <img src="/src/assets/WhatsApp Image 2026-06-23 at 15.03.13 (2).jpeg" alt="JPTECH Engineering Crew Assembly" class="w-full h-64 object-cover rounded-[0.25rem] shadow border border-slate-200">
        </div>
      </section>

      <!-- CONCEPTS, PRODUCTS & TECHNICAL CREDENTIALS -->
      <section class="bg-white py-20 px-6 border-t border-b border-slate-200">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-black text-[#000615] uppercase tracking-tight">Core Competencies</h2>
            <p class="text-xs text-[#44474d] mt-2 max-w-xl mx-auto">High-performance material deployment, structural layout welding, and precision earthworks construction.</p>
            <div class="h-1 w-12 bg-[#855300] mx-auto mt-4"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- FIELD 1 -->
            <div class="bg-[#f7f9fb] p-6 rounded-[0.25rem] border border-slate-200 flex flex-col justify-between shadow-sm">
              <div>
                <div class="text-xs font-bold tracking-widest text-[#855300] mb-2 uppercase">Liner Infrastructure</div>
                <h3 class="text-lg font-black text-[#000615] uppercase mb-3">Geomembrane Work</h3>
                <p class="text-xs text-[#44474d] leading-relaxed mb-6">
                  Expert laying of premium containment systems engineered specifically for high-demand leach pads, specialized holding ponds, floating cover components, and treatment plants.
                </p>
              </div>
              <img src="/src/assets/WhatsApp Image 2026-06-23 at 15.03.15.jpeg" alt="Liner Seaming Setup" class="w-full h-44 object-cover rounded-[0.25rem] border border-slate-200 shadow-sm">
            </div>

            <!-- FIELD 2 -->
            <div class="bg-[#f7f9fb] p-6 rounded-[0.25rem] border border-slate-200 flex flex-col justify-between shadow-sm">
              <div>
                <div class="text-xs font-bold tracking-widest text-[#855300] mb-2 uppercase">Structural Civil Support</div>
                <h3 class="text-lg font-black text-[#000615] uppercase mb-3">General Construction</h3>
                <p class="text-xs text-[#44474d] leading-relaxed mb-6">
                  Comprehensive engineering fields including industrial earthworks layout, precise concrete footings alignment, structural grouting systems, tiling, and expert site labor supply.
                </p>
              </div>
              <img src="/src/assets/WhatsApp Image 2026-06-23 at 15.03.15 (1).jpeg" alt="Civil Foundation Frameworks" class="w-full h-44 object-cover rounded-[0.25rem] border border-slate-200 shadow-sm">
            </div>

            <!-- FIELD 3 -->
            <div class="bg-[#f7f9fb] p-6 rounded-[0.25rem] border border-slate-200 flex flex-col justify-between shadow-sm">
              <div>
                <div class="text-xs font-bold tracking-widest text-[#855300] mb-2 uppercase">Accredited Engineering</div>
                <h3 class="text-lg font-black text-[#000615] uppercase mb-3">Technical Standards</h3>
                <p class="text-xs text-[#44474d] leading-relaxed mb-6">
                  Personnel hold verified field certifications from GhIE / SAID in Geosynthetics and Soil Reinforcement, alongside advanced De-Namud training profiles for extrusion and wedge welding layouts.
                </p>
              </div>
              <img src="/src/assets/WhatsApp Image 2026-06-23 at 15.03.21.jpeg" alt="Extrusion Seam Welding Diagnostics" class="w-full h-44 object-cover rounded-[0.25rem] border border-slate-200 shadow-sm">
            </div>
          </div>
        </div>
      </section>

      <!-- ACTIVE FIELD OPERATIONS GALLERY SECTION -->
      <section class="py-20 px-6 max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-black text-[#000615] uppercase tracking-tight">Active Operations Portfolio</h2>
          <p class="text-xs text-[#44474d] mt-2">Verified field logs documenting dynamic material deployments and quality assurance assessments.</p>
          <div class="h-1 w-12 bg-[#855300] mx-auto mt-4"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div class="bg-white p-3 border border-slate-200 rounded-[0.25rem] shadow-sm">
            <img src="/src/assets/WhatsApp Image 2026-06-23 at 15.03.21 (1).jpeg" alt="HDPE Alignment Action" class="w-full h-52 object-cover rounded-[0.15rem] mb-3">
            <span class="text-[10px] font-bold uppercase tracking-wider text-[#855300]">Mining Leach Pads & Infrastructure</span>
          </div>

          <div class="bg-white p-3 border border-slate-200 rounded-[0.25rem] shadow-sm">
            <img src="/src/assets/WhatsApp Image 2026-06-23 at 15.03.21 (2).jpeg" alt="Precision Seam Calibration" class="w-full h-52 object-cover rounded-[0.15rem] mb-3">
            <span class="text-[10px] font-bold uppercase tracking-wider text-[#855300]">Water Treatment & Holding Ponds</span>
          </div>

          <div class="bg-white p-3 border border-slate-200 rounded-[0.25rem] shadow-sm">
            <img src="/src/assets/WhatsApp Image 2026-06-23 at 15.03.22.jpeg" alt="HDPE Geomembrane Seam Checks" class="w-full h-52 object-cover rounded-[0.15rem] mb-3">
            <span class="text-[10px] font-bold uppercase tracking-wider text-[#855300]">Remedial Repairs & System Relining</span>
          </div>
        </div>
      </section>

      <!-- LOGO MARQUEE FOR TRUSTED CLIENT MARKS -->
      <section class="bg-slate-100 border-t border-slate-200 py-16 px-6">
        <div class="max-w-6xl mx-auto text-center">
          <span class="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-8">Corporate Subcontract Networks & Partners</span>
          <div class="flex flex-wrap justify-center items-center gap-4 md:gap-6 opacity-85 grayscale hover:grayscale-0 transition-all">
            <span class="bg-white border border-slate-200 text-[11px] font-black tracking-wider text-[#000615] px-4 py-2.5 rounded-[0.25rem] shadow-sm">GENSER</span>
            <span class="bg-white border border-slate-200 text-[11px] font-black tracking-wider text-[#000615] px-4 py-2.5 rounded-[0.25rem] shadow-sm">MEDITERRANEAN PROJECT LTD</span>
            <span class="bg-white border border-slate-200 text-[11px] font-black tracking-wider text-[#000615] px-4 py-2.5 rounded-[0.25rem] shadow-sm">RABOTECH GHANA LTD</span>
            <span class="bg-white border border-slate-200 text-[11px] font-black tracking-wider text-[#000615] px-4 py-2.5 rounded-[0.25rem] shadow-sm">DE-NAMUD COMPANY</span>
            <span class="bg-white border border-slate-200 text-[11px] font-black tracking-wider text-[#000615] px-4 py-2.5 rounded-[0.25rem] shadow-sm">GECOBLAST COMPANY</span>
            <span class="bg-white border border-slate-200 text-[11px] font-black tracking-wider text-[#000615] px-4 py-2.5 rounded-[0.25rem] shadow-sm">ITEMA COMPANY</span>
            <span class="bg-white border border-slate-200 text-[11px] font-black tracking-wider text-[#000615] px-4 py-2.5 rounded-[0.25rem] shadow-sm">GROUP FIVE CONSTRUCTION</span>
            <span class="bg-white border border-slate-200 text-[11px] font-black tracking-wider text-[#000615] px-4 py-2.5 rounded-[0.25rem] shadow-sm">ISOMETRICK CO. LTD</span>
          </div>
        </div>
      </section>

    </main>
  `;
}

export default home;