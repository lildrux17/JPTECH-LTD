function service() {
  return `
    <main class="flex-grow bg-[#f7f9fb] py-16 px-6 text-[#191c1e]">
      <div class="max-w-6xl mx-auto text-center mb-12">
        <h1 class="text-3xl md:text-4xl font-black text-[#000615] uppercase tracking-tight">Core Competencies & Capabilities</h1>
        <div class="h-1 w-16 bg-[#855300] mx-auto mt-4"></div>
      </div>
      
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white p-6 rounded-[0.25rem] border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 bg-[#0b1f3a] text-[#fea619] rounded-[0.25rem] flex items-center justify-center mb-4 font-bold text-lg">01</div>
            <h3 class="text-lg font-bold uppercase text-[#000615] mb-2">Geomembrane & Containment Systems</h3>
            <p class="text-xs text-[#44474d] leading-relaxed mb-4">
              Premium supply, precision deployment, and structural inspection of flexible containment configurations. Expertly certified execution of extrusion and wedge seaming/welding techniques for industrial layouts.
            </p>
          </div>
          <img src="/WhatsApp Image 2026-06-23 at 15.03.06.jpeg" class="w-full h-48 object-cover rounded-[0.25rem] mt-2" alt="Containment Assembly">
        </div>

        <div class="bg-white p-6 rounded-[0.25rem] border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 bg-[#0b1f3a] text-[#fea619] rounded-[0.25rem] flex items-center justify-center mb-4 font-bold text-lg">02</div>
            <h3 class="text-lg font-bold uppercase text-[#000615] mb-2">Civil Works & Structural Support</h3>
            <p class="text-xs text-[#44474d] leading-relaxed mb-4">
              Comprehensive operational groundwork including precision earthworks, structural concrete footing, industrial grouting matrices, specialized tiling configurations, and managed professional labor deployment.
            </p>
          </div>
          <img src="/WhatsApp Image 2026-06-23 at 14.41.59.jpeg" class="w-full h-48 object-cover rounded-[0.25rem] mt-2" alt="Civil Construction Base">
        </div>
      </div>
    </main>
  `;
}

export default service