function client() {
  return `
    <main class="flex-grow bg-[#f7f9fb] py-16 px-6 text-[#191c1e]">
      <div class="max-w-4xl mx-auto text-center mb-12">
        <h1 class="text-3xl font-black text-[#000615] uppercase tracking-tight">Industrial Partnerships</h1>
        <p class="text-xs text-[#44474d] mt-2">Supporting primary operators and subcontractor networks across the mining landscape.</p>
      </div>

      <div class="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div class="bg-white p-6 border border-slate-200 rounded-[0.25rem] flex items-center justify-center text-center h-32 shadow-sm">
          <span class="text-sm font-bold uppercase tracking-wider text-slate-400">Mining Contractors</span>
        </div>
        <div class="bg-white p-6 border border-slate-200 rounded-[0.25rem] flex items-center justify-center text-center h-32 shadow-sm">
          <span class="text-sm font-bold uppercase tracking-wider text-slate-400">Environmental Engineers</span>
        </div>
        <div class="bg-white p-6 border border-slate-200 rounded-[0.25rem] flex items-center justify-center text-center h-32 shadow-sm">
          <span class="text-sm font-bold uppercase tracking-wider text-slate-400">Civil Infrastructure Firms</span>
        </div>
      </div>
    </main>
  `;
}

export default client