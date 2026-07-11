function contact() {
  return `
    <main class="flex-grow bg-[#f7f9fb] py-16 px-6 text-[#191c1e]">
      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 class="text-3xl font-black text-[#000615] uppercase tracking-tight mb-4">Connect With Us</h1>
          <p class="text-xs text-[#44474d] leading-relaxed mb-6">
            Contact our structural estimators to process site specifications, material requirements, and engineering operations scheduling.
          </p>
          
          <div class="space-y-4 text-sm">
            <div>
              <div class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Primary Technical Line</div>
              <div class="text-md font-bold text-[#000615]">+233 (0) 500019929</div>
            </div>
            <div>
              <div class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Corporate Email Liaison</div>
              <div class="text-md font-bold text-[#855300]">jptech67@gmail.com</div>
            </div>
            <div>
              <div class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Headquarters Address</div>
              <div class="text-xs text-[#44474d] font-medium leading-relaxed">Tarkwa Mining Operational Corridor, Western Region, Ghana</div>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-[0.25rem] border border-slate-200 shadow-sm">
          <form class="space-y-4" onsubmit="event.preventDefault(); alert('Consultation Request Routed.');">
            <div>
              <label class="block text-[11px] font-bold uppercase text-slate-500 mb-1">Company / Client Name</label>
              <input type="text" class="w-full text-xs p-2.5 border border-slate-300 rounded-[0.25rem] focus:outline-none focus:border-[#000615]" required>
            </div>
            <div>
              <label class="block text-[11px] font-bold uppercase text-slate-500 mb-1">Email Address</label>
              <input type="email" class="w-full text-xs p-2.5 border border-slate-300 rounded-[0.25rem] focus:outline-none focus:border-[#000615]" required>
            </div>
            <div>
              <label class="block text-[11px] font-bold uppercase text-slate-500 mb-1">Scope Statement / Requirements</label>
              <textarea rows="4" class="w-full text-xs p-2.5 border border-slate-300 rounded-[0.25rem] focus:outline-none focus:border-[#000615]" required></textarea>
            </div>
            <button type="submit" class="w-full bg-[#855300] hover:bg-[#684000] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-[0.25rem] transition-all">Submit Consultation Brief</button>
          </form>
        </div>
      </div>
    </main>
  `;
}

export default contact