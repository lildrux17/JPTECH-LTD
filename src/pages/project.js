import { asset } from "../utils/assets.js";

function project() {
  const projectsList = [
    {
      title: "Mining Leach Pads & Secure Base Isolation",
      category: "Mining Infrastructure",
      description: "Heavy-duty geomembrane deployments engineered explicitly for robust chemical containment, soil preservation, and absolute leakage prevention under high load capacities.",
      image: asset("WhatsApp Image 2026-06-23 at 15.03.21 (1).jpeg")
    },
    {
      title: "Industrial Ponds & Processing Water Treatment",
      category: "Water Treatment & Ponds",
      description: "Large-scale synthetic liner installations built for continuous municipal filtration, raw water processing plants, and custom floating barrier control configurations.",
      image: asset("WhatsApp Image 2026-06-23 at 15.03.21 (2).jpeg")
    },
    {
      title: "Remedial Infrastructure Overhauls & Relining",
      category: "Maintenance & Repairs",
      description: "Rapid-response localized patch management, subsoil protection restoration, cut extensions, and complete structural system overhauls to stop leaks instantly.",
      image: asset("WhatsApp Image 2026-06-23 at 15.03.22.jpeg")
    },
    {
      title: "HDPE Sheet Thermal Calibration & Thermal Seaming",
      category: "Quality Assurance",
      description: "On-site destructive testing and high-temperature thermal wedge tracking to eliminate micro-punctures and guarantee flawless containment integrity.",
      image: asset("WhatsApp Image 2026-06-23 at 15.03.11 (1).jpeg")
    },
    {
      title: "Industrial Ground Preparation & Subgrade Grading",
      category: "Civil Earthworks",
      description: "Precision rock clearings, soil compaction runs, and deep anchor trench digging to establish smooth, risk-free foundations prior to liner deployment.",
      image: asset("WhatsApp Image 2026-06-23 at 15.03.15 (1).jpeg")
    },
    {
      title: "Extrusion Seam Welding Diagnostics",
      category: "Quality Control",
      description: "Handheld extrusion bead welding implementations over intricate pipe penetrations, corners, and patch edges to seal hard-to-reach containment junctions.",
      image: asset("WhatsApp Image 2026-06-23 at 15.03.21.jpeg")
    },
    {
      title: "Liner Panel Deployment & Alignment Sequencing",
      category: "Field Operations",
      description: "Strategic unrolling and alignment stabilization of master HDPE rolls across sloped containment walls to maximize material yields and reduce stress wrinkles.",
      image: asset("WhatsApp Image 2026-06-23 at 15.03.15.jpeg")
    },
    {
      title: "Corporate Field Inspection & Technical Surveys",
      category: "Consultancy",
      description: "Preconstruction layout surveying and physical liner health monitoring assessments by certified engineers to identify structural reinforcement points.",
      image: asset("WhatsApp Image 2026-06-23 at 15.03.11.jpeg")
    },
    {
      title: "Heavy Anchoring Channel Foundations",
      category: "Structural Works",
      description: "Executing structural concrete footings, ballast anchor assemblies, and high-grade grouting to permanently lock upper geomembrane boundaries in place.",
      image: asset("WhatsApp Image 2026-06-23 at 15.03.08.jpeg")
    },
    {
      title: "Site Handover Validation Checks",
      category: "Client Review",
      description: "Final air-pressure channel testing and spark testing logs mapped across all structural seams to verify zero-leak containment compliance before asset filling.",
      image: asset("WhatsApp Image 2026-06-23 at 15.03.10.jpeg")
    }
  ];

  return `
    <main class="flex-grow bg-[#f7f9fb] text-[#191c1e] font-sans">
      
      <section class="relative bg-[#000615] pt-36 pb-36 px-6 overflow-hidden min-h-[620px]">
        <div class="absolute inset-0 z-0">
          <video autoplay muted loop playsinline poster="${asset("WhatsApp Image 2026-06-23 at 15.03.24.jpeg")}" class="w-full h-full object-cover">
            <source src="${asset("WhatsApp Video 2026-06-23 at 15.03.22.mp4")}" type="video/mp4" />
          </video>
          <div class="absolute inset-0 bg-[#000615]/70"></div>
        </div>
        <div class="relative z-10 max-w-7xl mx-auto text-center md:text-left">
          <span class="text-sm font-bold tracking-widest text-[#fea619] uppercase block mb-2">Field Implementations Log</span>
          <h1 class="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">Active Operations Portfolio</h1>
        </div>
      </section>

      <section class="max-w-7xl mx-auto py-12 px-6 border-b border-slate-200">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div class="bg-white p-4 border border-slate-200 rounded-[0.25rem] shadow-sm">
            <div class="text-xl font-black text-[#000615]">100%</div>
            <div class="text-sm text-slate-400 font-bold uppercase tracking-wider">Destructive Weld Compliance</div>
          </div>
          <div class="bg-white p-4 border border-slate-200 rounded-[0.25rem] shadow-sm">
            <div class="text-2xl font-black text-[#000615]">GhIE</div>
            <div class="text-sm text-slate-400 font-bold uppercase tracking-wider">Trained Site Supervision</div>
          </div>
          <div class="bg-white p-4 border border-slate-200 rounded-[0.25rem] shadow-sm">
            <div class="text-2xl font-black text-[#000615]">0 / Leak</div>
            <div class="text-sm text-slate-400 font-bold uppercase tracking-wider">Containment Target Metrics</div>
          </div>
          <div class="bg-white p-4 border border-slate-200 rounded-[0.25rem] shadow-sm">
            <div class="text-2xl font-black text-[#000615]">HDPE</div>
            <div class="text-sm text-slate-400 font-bold uppercase tracking-wider">Premium Certified Seaming</div>
          </div>
        </div>
      </section>

      <section class="max-w-7xl mx-auto py-16 px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          ${projectsList.map((proj) => `
            <div class="bg-white border border-slate-200 rounded-[0.25rem] overflow-hidden shadow-sm flex flex-col justify-between group">
              
              <div class="relative h-64 w-full overflow-hidden bg-[#000615]">
                <img 
                  src="${proj.image}" 
                  alt="${proj.title}" 
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102 opacity-95"
                  loading="lazy"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-[#000615]/40 to-transparent"></div>
                <span class="absolute top-4 left-4 bg-[#0b1f3a] text-white text-sm font-bold uppercase tracking-wider px-2.5 py-1 rounded-[0.15rem]">
                  ${proj.category}
                </span>
              </div>

              <div class="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 class="text-xl font-black text-[#000615] uppercase tracking-tight mb-2">
                    ${proj.title}
                  </h3>
                  <p class="text-sm md:text-base text-[#44474d] leading-relaxed mb-6">
                    ${proj.description}
                  </p>
                </div>

                <div class="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                  <div class="flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                    <span class="text-sm font-bold uppercase tracking-wider text-[#44474d]">Active Deployment Log</span>
                  </div>
                  <span class="text-sm font-mono text-slate-400 uppercase">Tarkwa Hub Operations Base</span>
                </div>
              </div>

            </div>
          `).join('')}
        </div>
      </section>

      <section class="bg-white border-t border-slate-200 py-16 px-6 text-center">
        <div class="max-w-3xl mx-auto">
          <h4 class="text-sm font-bold uppercase text-[#000615] tracking-wider mb-2">Technical Standards Validation Framework</h4>
          <p class="text-sm md:text-base text-[#44474d] leading-relaxed">
            All documented site operations are conducted by specialized personnel under active compliance guidelines from the Ghana Institution of Engineers (GhIE), the South African Institute of Draughting (SAID), and direct De-Namud Quality Control programs.
          </p>
        </div>
      </section>

    </main>
  `;
}

export default project;