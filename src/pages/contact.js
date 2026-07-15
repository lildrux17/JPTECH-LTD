function contact() {
  return `
    <main class="flex-grow bg-[#f7f9fb] text-[#191c1e] font-sans">
      
      <!-- HERO HEADER AREA -->
      <section class="relative bg-[#000615] py-24 px-6 overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img src="/src/assets/about.jpg" alt="JPTECH Connect Header Background" class="w-full h-full object-cover opacity-25">
          <div class="absolute inset-0 bg-[#000615]/70"></div>
        </div>
        <div class="relative z-10 max-w-7xl mx-auto text-center md:text-left">
          <h1 class="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            Connect with Industrial Expertise
          </h1>
          <p class="text-xs md:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Providing high-capacity engineering solutions across Ghana and West Africa. Reach out to our technical team today.
          </p>
        </div>
      </section>

      <!-- DUAL COLUMN INPUT & DIRECT CHANNELS CORRIDOR -->
      <section class="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <!-- LEFT COLUMN: DIRECT CORRESPONDENCE INFRASTRUCTURE -->
        <div class="lg:col-span-5 space-y-6">
          <div>
            <h2 class="text-xl font-black text-[#000615] uppercase tracking-tight mb-2">Direct Communication</h2>
            <p class="text-xs text-[#44474d] leading-relaxed">
              Our regional headquarters in Ghana is ready to handle your project specifications and technical inquiries.
            </p>
          </div>

          <!-- Card 1: Email -->
          <div class="p-5 bg-white border border-slate-200 rounded-[0.25rem] shadow-sm flex items-center gap-4">
            <div class="w-10 h-10 bg-[#855300] flex items-center justify-center rounded-[0.15rem] shrink-0">
              <span class="text-white text-xs">✉</span>
            </div>
            <div>
              <span class="text-[9px] font-bold uppercase text-slate-400 block tracking-wider mb-0.5">Email Us</span>
              <a href="mailto:jptech67@gmail.com" class="text-xs font-black text-[#000615] tracking-tight hover:underline">jptech67@gmail.com</a>
            </div>
          </div>

          <!-- Card 2: Phone -->
          <div class="p-5 bg-white border border-slate-200 rounded-[0.25rem] shadow-sm flex items-center gap-4">
            <div class="w-10 h-10 bg-[#855300] flex items-center justify-center rounded-[0.15rem] shrink-0">
              <span class="text-white text-xs">📞</span>
            </div>
            <div>
              <span class="text-[9px] font-bold uppercase text-slate-400 block tracking-wider mb-0.5">Call Technical Support</span>
              <a href="tel:+233242445491" class="text-xs font-black text-[#000615] tracking-tight hover:underline">+233 242445491</a>
            </div>
          </div>

          <!-- Card 3: Physical Address Base -->
          <div class="p-5 bg-white border border-slate-200 rounded-[0.25rem] shadow-sm flex items-center gap-4">
            <div class="w-10 h-10 bg-[#855300] flex items-center justify-center rounded-[0.15rem] shrink-0">
              <span class="text-white text-xs">📍</span>
            </div>
            <div>
              <span class="text-[9px] font-bold uppercase text-slate-400 block tracking-wider mb-0.5">Regional Office</span>
              <p class="text-xs font-black text-[#000615] uppercase tracking-tight leading-tight">Tarkwa, Ghana</p>
              <span class="text-[10px] text-[#44474d] block">West African Industrial Hub</span>
            </div>
          </div>

          <!-- WhatsApp Green Corridor Launcher -->
          <a href="https://wa.me/233242445491" target="_blank" class="w-full flex items-center justify-center gap-2 bg-[#1ed760] hover:bg-[#1abe54] text-white font-bold uppercase tracking-wider text-[11px] py-4 rounded-[0.25rem] transition-colors shadow-sm">
            <span>💬</span> Message on WhatsApp
          </a>
        </div>

        <!-- RIGHT COLUMN: STRUCTURED INQUIRY LEDGER FORM -->
        <div class="lg:col-span-7 bg-white border border-slate-200 rounded-[0.25rem] shadow-sm p-8 relative">
          <div class="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-transparent via-transparent to-slate-50 border-t border-r border-slate-200 rounded-tr-[0.25rem] pointer-events-none"></div>
          
          <h3 class="text-lg font-black text-[#000615] uppercase tracking-tight mb-6">Inquiry Form</h3>
          
          <form class="space-y-4" onsubmit="event.preventDefault();">
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Field: Project Name -->
              <div>
                <label class="block text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1">Project Name</label>
                <input type="text" placeholder="e.g. Obuasi Site Expansion" class="w-full bg-slate-50 border border-slate-200 rounded-[0.15rem] p-3 text-xs focus:outline-none focus:border-[#000615] transition-colors">
              </div>
              <!-- Field: Service Selector -->
              <div>
                <label class="block text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1">Service Type</label>
                <div class="relative">
                  <select class="w-full bg-slate-50 border border-slate-200 rounded-[0.15rem] p-3 text-xs appearance-none focus:outline-none focus:border-[#000615] transition-colors">
                    <option>Structural Engineering</option>
                    <option>Geomembrane Installation</option>
                    <option>Remedial Maintenance</option>
                    <option>Civil Earthworks</option>
                  </select>
                  <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400 text-[10px]">▼</div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Field: Your Name -->
              <div>
                <label class="block text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1">Your Name</label>
                <input type="text" placeholder="Full Name" class="w-full bg-slate-50 border border-slate-200 rounded-[0.15rem] p-3 text-xs focus:outline-none focus:border-[#000615] transition-colors">
              </div>
              <!-- Field: Contact Number -->
              <div>
                <label class="block text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1">Contact Number</label>
                <input type="tel" placeholder="+233..." class="w-full bg-slate-50 border border-slate-200 rounded-[0.15rem] p-3 text-xs focus:outline-none focus:border-[#000615] transition-colors">
              </div>
            </div>

            <!-- Field: Project Details Area -->
            <div>
              <label class="block text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1">Project Details</label>
              <textarea rows="4" placeholder="Briefly describe the scope of work and technical requirements..." class="w-full bg-slate-50 border border-slate-200 rounded-[0.15rem] p-3 text-xs focus:outline-none focus:border-[#000615] transition-colors resize-none"></textarea>
            </div>

            <!-- Submit Action Key -->
            <button type="submit" class="w-full bg-[#000615] hover:bg-slate-800 text-white font-bold uppercase tracking-wider text-[10px] py-4 rounded-[0.25rem] transition-colors flex items-center justify-center gap-2">
              Request Quote <span>→</span>
            </button>

            <!-- Metadata Timestamp Support -->
            <div class="text-center pt-2">
              <span class="text-[9px] font-medium text-slate-400">Typical response time: <strong class="text-[#855300]">2-4 business hours</strong></span>
            </div>

          </form>
        </div>
      </section>

      <!-- BOTTOM INTERACTIVE CARTOGRAPHY AREA -->
      <section class="max-w-7xl mx-auto px-6 pb-20">
        <div class="relative rounded-[0.25rem] overflow-hidden border border-slate-200 shadow-sm bg-slate-200 h-80">
          
          <!-- Mock Map Panel Collage Matrix matching image visual structure -->
          <div class="absolute inset-0 grid grid-cols-3 h-full w-full opacity-80">
            <div class="bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] bg-slate-100 border-r border-slate-200/50"></div>
            <div class="bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] bg-slate-100 border-r border-slate-200/50"></div>
            <div class="bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] bg-slate-100"></div>
          </div>
          
          <!-- Abstract Line Layout overlays to simulate the grid from your mockup -->
          <div class="absolute inset-0 pointer-events-none opacity-40">
            <div class="absolute top-1/4 left-0 w-full h-0.5 bg-sky-400"></div>
            <div class="absolute top-2/3 left-0 w-full h-0.5 bg-emerald-400"></div>
            <div class="absolute top-0 left-1/3 w-0.5 h-full bg-orange-300"></div>
          </div>

          <!-- Floating Anchor Action Marker Box -->
          <div class="absolute bottom-6 left-6 max-w-sm bg-[#000615]/95 border border-slate-800 p-6 rounded-[0.15rem] text-white z-10 shadow-lg">
            <h4 class="text-sm font-black uppercase tracking-tight mb-1">Visit Our Site</h4>
            <p class="text-[10px] text-slate-300 leading-relaxed mb-4">
              Please schedule ahead for facility tours or on-site project consultations.
            </p>
            <a href="https://maps.google.com" target="_blank" class="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-[#fea619] hover:underline">
              <span>🧭</span> Get Directions
            </a>
          </div>
        </div>
      </section>

    </main>
  `;
}

export default contact;