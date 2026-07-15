import { asset } from "../utils/assets.js";

function footer() {
  return `
    <footer class="bg-[#000615] text-white border-t-4 border-[#855300] pt-12 pb-6 font-sans">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-3">
            <img src="${asset("logo.png")}" alt="JPTECH" class="h-8 w-auto object-contain rounded-[0.25rem]">
            <span class="text-md font-bold tracking-wider uppercase text-white">JPTECH</span>
          </div>
          <p class="text-xs text-[#7587a7] leading-relaxed">
            Registered infrastructure and geosynthetics engineering company executing industrial containment, geomembrane linings, and foundational civil services across major mining networks in Ghana.
          </p>
        </div>

        <div>
          <h4 class="text-xs font-bold uppercase tracking-widest text-[#fea619] mb-4 border-l-2 border-[#855300] pl-2">Our Capabilities</h4>
          <ul class="text-xs text-slate-400 space-y-2.5">
            <li><a href="/services" data-link class="hover:text-white transition-colors">Geomembrane Liners & Supply</a></li>
            <li><a href="/services" data-link class="hover:text-white transition-colors">Floating Covers & Basin Linings</a></li>
            <li><a href="/services" data-link class="hover:text-white transition-colors">Remedial Repairs & Extrusion Welding</a></li>
            <li><a href="/services" data-link class="hover:text-white transition-colors">Civil Construction & Earthworks</a></li>
            <li><a href="/services" data-link class="hover:text-white transition-colors">Structural Foundations & Grouting</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-xs font-bold uppercase tracking-widest text-[#fea619] mb-4 border-l-2 border-[#855300] pl-2">Corporate Information</h4>
          <ul class="text-xs text-slate-400 space-y-2.5">
            <li><a href="/about" data-link class="hover:text-white transition-colors">About Our Agency</a></li>
            <li><a href="/projects" data-link class="hover:text-white transition-colors">Project Portfolio Gallery</a></li>
            <li><a href="/about" data-link class="hover:text-white transition-colors">Environmental Risk Policies</a></li>
            <li><a href="/contact" data-link class="hover:text-white transition-colors">Office Location & Contacts</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-xs font-bold uppercase tracking-widest text-[#fea619] mb-4 border-l-2 border-[#855300] pl-2">Headquarters</h4>
          <p class="text-xs text-slate-400 leading-relaxed mb-3">
            Tarkwa Mining Hub,<br>
            Western Region, Ghana
          </p>
          <div class="flex flex-col gap-1.5 text-xs text-[#7587a7]">
            <span class="text-white font-medium">+233 (0) 242445491</span>
            <span>jptech67@gmail.com</span>
          </div>
        </div>

      </div>

      <div class="max-w-7xl mx-auto px-6 mt-10 pt-4 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p class="text-[11px] text-slate-500">
          &copy; 2026 JPTECH. All Rights Reserved. Built under the Business Names Act, 1962 (Act 151).
        </p>
        <div class="text-[11px] text-slate-500 flex gap-4">
          <span class="flex items-center gap-1"><span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span> HSE Compliant</span>
          <span>Quality Assured Seams</span>
        </div>
      </div>
    </footer>
  `;
}

export default footer