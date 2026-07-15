function Nav() {
    const path = window.location.pathname;
    const isActive = (href) => {
        if (href === "/") return path === "/" || path === "/home";
        return path === href;
    };

    const linkClass = (href) => {
        const base = "transition-colors py-2 border-b-2 border-transparent hover:border-[#fea619]";
        return isActive(href)
            ? `text-white border-[#fea619] ${base}`
            : `text-slate-300 hover:text-[#fea619] ${base}`;
    };

    const contactButtonClass = isActive("/contact")
        ? "bg-[#684000] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-[0.25rem] shadow-md border-b-2 border-black/40 transition-all"
        : "bg-[#855300] hover:bg-[#684000] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-[0.25rem] shadow-md border-b-2 border-black/40 active:translate-y-px transition-all";

    return `
    <header class="w-full font-sans shadow-sm">
        <div class="bg-[#0B1F3A] text-[#7587a7] text-xs py-2 px-4 border-b border-slate-800 flex justify-between items-center">
            <div class="flex items-center gap-6">
                <span class="flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 text-[#fea619]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    +233 242445491
                </span>

                <span class="flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 text-[#fea619]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    jptech67@gmail.com
                </span>
            </div>

            <div class="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                Operations Base: <span class="text-white">Tarkwa, Ghana</span>
            </div>
        </div>

        <nav class="bg-[#000615] text-white px-6 py-4 flex justify-between items-center">

            <!-- Logo -->
            <a href="/" data-link class="flex items-center gap-3 group">
                <img src="./public/jptech icon.svg" alt="JPTECH" class="h-10 w-auto object-contain rounded-[0.25rem]">

                <div class="flex flex-col border-l border-slate-700 pl-3">
                    <span class="text-lg font-bold tracking-tight uppercase leading-none text-white group-hover:text-[#fea619] transition-colors">
                        JPTECH
                    </span>
                </div>
            </a>

            <!-- Navigation -->
            <ul class="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">

                <li>
                    <a href="/" data-link class="${linkClass('/')}">
                        Home
                    </a>
                </li>

                <li>
                    <a href="/about" data-link class="${linkClass('/about')}">
                        About Us
                    </a>
                </li>

                <li>
                    <a href="/services" data-link class="${linkClass('/services')}">
                        Services
                    </a>
                </li>

                <li>
                    <a href="/projects" data-link class="${linkClass('/projects')}">
                        Projects
                    </a>
                </li>

                <li>
                    <a href="/clients" data-link class="${linkClass('/clients')}">
                        Clients
                    </a>
                </li>

            </ul>

            <!-- Contact Button -->
            <div class="hidden md:block">
                <a href="/contact" data-link class="${contactButtonClass}">
                    Request Qoute
                </a>
            </div>

            <!-- Mobile Menu -->
            <button class="block md:hidden text-slate-300 hover:text-white focus:outline-none" aria-label="Toggle Menu" data-menu-toggle="mobile-menu" aria-expanded="false">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>

        </nav>

        <div id="mobile-menu" class="md:hidden hidden bg-[#000615] px-6 py-4">
            <ul class="flex flex-col gap-3 text-sm font-medium tracking-wide">
                <li>
                    <a href="/" data-link class="${linkClass('/')}">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/about" data-link class="${linkClass('/about')}">
                        About Us
                    </a>
                </li>
                <li>
                    <a href="/services" data-link class="${linkClass('/services')}">
                        Services
                    </a>
                </li>
                <li>
                    <a href="/projects" data-link class="${linkClass('/projects')}">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="/clients" data-link class="${linkClass('/clients')}">
                        Clients
                    </a>
                </li>
                <li>
                    <a href="/contact" data-link class="${contactButtonClass} w-full text-center">
                        Request Consultation
                    </a>
                </li>
            </ul>
        </div>

    </header>
    `;
}

export default Nav;