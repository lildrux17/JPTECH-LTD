
import { asset } from "../utils/assets.js";

function service() {
  return `
    <main class="flex-grow bg-[#f7f9fb] text-[#191c1e] font-sans">
      
      <section class="relative bg-[#000615] pt-36 pb-36 px-6 overflow-hidden min-h-[620px]">
        <div class="absolute inset-0 z-0">
          <video autoplay muted loop playsinline poster="${asset("WhatsApp Image 2026-06-23 at 15.03.22.jpeg")}" class="w-full h-full object-cover">
            <source src="${asset("WhatsApp Video 2026-06-23 at 15.03.31.mp4")}" type="video/mp4" />
          </video>
          <div class="absolute inset-0 bg-[#000615]/70"></div>
        </div>
        <div class="relative z-10 max-w-7xl mx-auto text-center md:text-left">
          <span class="text-sm font-bold tracking-widest text-[#fea619] uppercase block mb-2">Core Capabilities Portfolio</span>
          <h1 class="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">Industrial Technical Services</h1>
        </div>
      </section>

      <section class="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7">
          <span class="text-sm font-bold tracking-widest text-[#855300] uppercase block mb-1">Specialization 01</span>
          <h2 class="text-3xl md:text-4xl font-black text-[#000615] uppercase tracking-tight mb-6">Geomembrane & Liner Deployments</h2>
          <p class="text-base md:text-lg text-[#44474d] leading-relaxed mb-6">
            JPTECH engineers premium containment architectures built to isolate hazardous compounds and secure vital resources safely. Our field deployment squads handle full-scale logistics and professional placement tasks across heavy containment corridors.
          </p>
          
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div class="p-4 bg-white border border-slate-200 rounded-[0.25rem] shadow-sm">
              <h4 class="text-sm font-bold text-[#000615] uppercase mb-1">Liner Installations</h4>
              <p class="text-sm md:text-base text-[#44474d] leading-relaxed">Precision laying of robust containment systems for industrial ponds, leach pads, processing plants, and spill containments.</p>
            </div>
            <div class="p-4 bg-white border border-slate-200 rounded-[0.25rem] shadow-sm">
              <h4 class="text-sm font-bold text-[#000615] uppercase mb-1">Covers & Solutions</h4>
              <p class="text-sm md:text-base text-[#44474d] leading-relaxed">High-performance floating covers and specialized infrastructure caps designed to control evaporation and environmental pollution risks.</p>
            </div>
            <div class="p-4 bg-white border border-slate-200 rounded-[0.25rem] shadow-sm">
              <h4 class="text-sm font-bold text-[#000615] uppercase mb-1">Consultancy Services</h4>
              <p class="text-sm md:text-base text-[#44474d] leading-relaxed">Advanced geomembrane consulting, material compatibility assessments, and complete preconstruction layout management.</p>
            </div>
          </div>
        </div>
        
        <div class="lg:col-span-5">
          <img src="${asset("WhatsApp Image 2026-06-23 at 15.03.15.jpeg")}" alt="Liner Seaming Alignment Setup" class="w-full h-80 object-cover rounded-[0.25rem] border border-slate-200 shadow-sm">
        </div>
      </section>

      <section class="bg-white border-t border-b border-slate-200 py-20 px-6">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-5 order-last lg:order-first">
            <img src="${asset("WhatsApp Image 2026-06-23 at 15.03.21.jpeg")}" alt="Extrusion Seam Welding Diagnostics" class="w-full h-80 object-cover rounded-[0.25rem] border border-slate-200 shadow-sm">
          </div>

          <div class="lg:col-span-7">
            <span class="text-sm font-bold tracking-widest text-[#855300] uppercase block mb-1">Specialization 02</span>
            <h2 class="text-3xl md:text-4xl font-black text-[#000615] uppercase tracking-tight mb-6">Maintenance & Remedial Engineering</h2>
            <p class="text-base md:text-lg text-[#44474d] leading-relaxed mb-6">
              Prolonging the operational lifespan and safety of pre-existing containment assets is central to our support model. We deploy localized diagnostics to locate and neutralize systemic leak risks instantly.
            </p>

            <div class="space-y-4">
              <div class="flex gap-4 p-4 bg-[#f7f9fb] border border-slate-200 rounded-[0.25rem]">
                <div class="font-mono font-bold text-[#fea619] text-sm">A</div>
                <div>
                  <h4 class="text-sm font-bold uppercase text-[#000615] mb-1">Precision Liner Repairs</h4>
                  <p class="text-sm md:text-base text-[#44474d] leading-relaxed">Rapid patching operations targeting cuts, surface tears, or acute punctures on any containment surface.</p>
                </div>
              </div>
              <div class="flex gap-4 p-4 bg-[#f7f9fb] border border-slate-200 rounded-[0.25rem]">
                <div class="font-mono font-bold text-[#fea619] text-sm">B</div>
                <div>
                  <h4 class="text-sm font-bold uppercase text-[#000615] mb-1">Relining & System Modifications</h4>
                  <p class="text-sm md:text-base text-[#44474d] leading-relaxed">Stripping degraded layout zones and welding modified structural expansions to adjust for changing containment volumes.</p>
                </div>
              </div>
              <div class="flex gap-4 p-4 bg-[#f7f9fb] border border-slate-200 rounded-[0.25rem]">
                <div class="font-mono font-bold text-[#fea619] text-sm">C</div>
                <div>
                  <h4 class="text-sm font-bold uppercase text-[#000615] mb-1">Onsite Integrity Inspections</h4>
                  <p class="text-sm md:text-base text-[#44474d] leading-relaxed">Rigorous visual and non-destructive testing checks to ensure subgrade stability and long-term security.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7">
          <span class="text-sm font-bold tracking-widest text-[#855300] uppercase block mb-1">Specialization 03</span>
          <h2 class="text-3xl md:text-4xl font-black text-[#000615] uppercase tracking-tight mb-6">Civil & Structural Construction</h2>
          <p class="text-base md:text-lg text-[#44474d] leading-relaxed mb-6">
            Beyond industrial textiles, JPTECH maintains full-scale heavy civil support workflows. From structural anchors to complex ground leveling, we configure safe bases for critical installations.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="p-5 bg-white border border-slate-200 rounded-[0.25rem] shadow-sm flex items-start gap-3">
              <span class="text-[#fea619] font-bold text-xs mt-0.5">✔</span>
              <div>
                <h5 class="text-sm font-bold text-[#000615] uppercase mb-1">Earthworks & Excavation</h5>
                <p class="text-sm md:text-base text-[#44474d] leading-relaxed">Heavy subgrade prep, soil leveling, and deep slope trimming for precise sheet anchoring layouts.</p>
              </div>
            </div>
            <div class="p-5 bg-white border border-slate-200 rounded-[0.25rem] shadow-sm flex items-start gap-3">
              <span class="text-[#fea619] font-bold text-xs mt-0.5">✔</span>
              <div>
                <h5 class="text-sm font-bold text-[#000615] uppercase mb-1">Concrete Footings & Structural Foundations</h5>
                <p class="text-sm md:text-base text-[#44474d] leading-relaxed">Forming robust anchor channels, structural concrete pours, and solid retaining alignments.</p>
              </div>
            </div>
            <div class="p-5 bg-white border border-slate-200 rounded-[0.25rem] shadow-sm flex items-start gap-3">
              <span class="text-[#fea619] font-bold text-xs mt-0.5">✔</span>
              <div>
                <h5 class="text-sm font-bold text-[#000615] uppercase mb-1">Industrial Grouting & Tiling</h5>
                <p class="text-sm md:text-base text-[#44474d] leading-relaxed">Applying targeted structural fluid-fills and industrial masonry works for clean asset channels.</p>
              </div>
            </div>
            <div class="p-5 bg-white border border-slate-200 rounded-[0.25rem] shadow-sm flex items-start gap-3">
              <span class="text-[#fea619] font-bold text-xs mt-0.5">✔</span>
              <div>
                <h5 class="text-sm font-bold text-[#000615] uppercase mb-1">Labor Supply Frameworks</h5>
                <p class="text-sm md:text-base text-[#44474d] leading-relaxed">Direct hiring networks supplying vetted technicians, certified welders, and specialized engineering labor.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5">
          <img src="${asset("WhatsApp Image 2026-06-23 at 15.03.15 (1).jpeg")}" alt="Civil Foundations and Base Prep" class="w-full h-80 object-cover rounded-[0.25rem] border border-slate-200 shadow-sm">
        </div>
      </section>

      <section class="bg-slate-900 text-white py-16 px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h3 class="text-xl md:text-2xl font-black uppercase tracking-tight mb-4 text-[#fea619]">Rigorous Standards, Zero Compromise</h3>
          <p class="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Every layer we seal, repair, or dig passes through the strict supervision of personnel holding specialized certifications from the Ghana Institution of Engineers (GhIE) and De-Namud. We build for endurance.
          </p>
        </div>
      </section>

    </main>
  `;
}

export default service;
