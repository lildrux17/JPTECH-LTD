import { asset } from "../utils/assets.js";

function logoCarousel(partners) {
  const repeatedItems = [...partners, ...partners];

  return `
    <section class="logo-carousel bg-slate-100 border-t border-slate-200 py-16 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-8">
          <p class="text-sm font-bold uppercase tracking-widest text-slate-400">
            Corporate Subcontract Networks & Partners
          </p>
        </div>

        <div class="logo-carousel__viewport" aria-label="Partner logo carousel" role="region">
          <ul class="logo-carousel__track" role="list">
            ${repeatedItems
              .map(
                (partner) => `
                  <li class="logo-carousel__item" role="listitem">
                    <img src="${asset(partner.logo)}" alt="${partner.name} logo" />
                  </li>
                `
              )
              .join("")}
          </ul>
        </div>
      </div>
    </section>
  `;
}

export default logoCarousel;
