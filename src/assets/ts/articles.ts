import "@ts/nav";
import articleImage from "/assets/images/articles.png";

const paginationNumbers = document.querySelectorAll(".pagination-number");
const prevPagination = document.querySelector(".prev-article-page");
const nextPagintation = document.querySelector(".next-article-page");
const articleContainer = document.querySelector(".articles")!;
const paginationContainer = document.querySelector(".article-page-number")!;

paginationNumbers.forEach((number) => {
  number.addEventListener("click", (ev) => {
    paginationNumbers.forEach((item) => {
      item.classList.remove("active-pagination");
    });

    const target = ev.target as HTMLButtonElement;
    target.classList.add("active-pagination");
  });
});

prevPagination?.addEventListener("click", () => {
  const activePagination = document.querySelector(".active-pagination");

  if (activePagination == paginationNumbers[0]) return;

  activePagination?.previousElementSibling?.classList.add("active-pagination");
  activePagination?.classList.remove("active-pagination");
});

nextPagintation?.addEventListener("click", () => {
  const activePagination = document.querySelector(".active-pagination");
  if (activePagination == paginationNumbers[paginationNumbers.length - 1])
    return;

  activePagination?.nextElementSibling?.classList.add("active-pagination");
  activePagination?.classList.remove("active-pagination");
});

// Articles

const articlesPerPage = 4;
let currentPage = 1;

const articles = [
  {
    img: articleImage,
    description: "تخفیف حداکثری هتل های شیراز بfsdه مناسبت روز شیراز ",
  },
  {
    img: articleImage,
    description: "تخفیف حداکثffdaf<br/>sdadsfdasfdas",
  },
  {
    img: articleImage,
    description: "تfsdafdsخفیف حداکثری هتلبیسبیسشبشسی",
  },
  {
    img: articleImage,
    description: "تخفیف حداکثری هتل های شیراز به منfdsaاسبت روز شیراز ",
  },
  {
    img: articleImage,
    description: "تخفیف حداکثری هتل های شیراز به مناسبت روز شیراز ",
  },
  {
    img: articleImage,
    description: "تخفیف حداکثری هتل های شیراز به مناسبت روز شیراز ",
  },
  {
    img: articleImage,
    description: "تخفیف حداکثری هتل های شیراز به مناسبت روز شیراز ",
  },
  {
    img: articleImage,
    description: "تخفیف حداکثری هتل های شیراز به مناسبت روز شیراز ",
  },
  {
    img: articleImage,
    description: "تخفیف حداکثری هتل های شیراز به مناسبت روز شیراز ",
  },
  {
    img: articleImage,
    description: "تخفیف حداکثری هتل های شیراز به مناسبت روز شیراز ",
  },
];

function renderArticles(page: number) {
  const startIndex = (page - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const paginatedArticles = articles.slice(startIndex, endIndex);

  articleContainer.innerHTML = "";
  paginatedArticles.forEach((item) => {
    articleContainer.innerHTML += ` <article class="rounded-3xl border bg-white p-2">
                        <div>
                          <div class="relative">
                            <img
                              class="rounded-2xl"
                              src=${item.img}
                              alt=""
                            />
                            <div
                              class="absolute right-5 top-0 mt-3 flex items-center gap-3"
                            >
                              <div class="rounded-full bg-green-600 p-2">
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5.01988 1.90918C5.31983 1.90918 5.56281 2.14279 5.56281 2.4312V3.4839C6.04446 3.47525 6.58451 3.47525 7.19234 3.47525H10.0873C10.6944 3.47525 11.2344 3.47525 11.7161 3.48462V2.43192C11.7161 2.14351 11.959 1.90918 12.259 1.90918C12.5589 1.90918 12.8019 2.14279 12.8019 2.4312V3.53149C13.8438 3.61152 14.5281 3.80836 15.0299 4.29217C15.5332 4.77526 15.7379 5.43284 15.8209 6.43507L15.8785 6.95637H1.45801V6.43434C1.54165 5.43212 1.74642 4.77454 2.24897 4.29145C2.75153 3.80836 3.43506 3.6108 4.47695 3.53077V2.4312C4.47695 2.14279 4.71993 1.90918 5.01988 1.90918Z"
                                    fill="white"
                                  />
                                  <path
                                    opacity="0.5"
                                    d="M15.8788 10.5563V9.11425C15.8788 8.50931 15.8759 7.43065 15.8665 6.95117H1.46543C1.45606 7.43065 1.45822 8.50931 1.45822 9.11425V10.5563C1.45822 13.2753 1.45822 14.6352 2.30327 15.4795C3.14759 16.3245 4.50673 16.3245 7.22644 16.3245H10.1105C12.8288 16.3245 14.1887 16.3245 15.0337 15.4795C15.8788 14.6352 15.8788 13.2753 15.8788 10.5563Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M12.9941 12.7223C12.9941 12.9136 12.9182 13.0969 12.7829 13.2322C12.6477 13.3674 12.4643 13.4433 12.2731 13.4433C12.0819 13.4433 11.8985 13.3674 11.7632 13.2322C11.628 13.0969 11.5521 12.9136 11.5521 12.7223C11.5521 12.5311 11.628 12.3477 11.7632 12.2125C11.8985 12.0773 12.0819 12.0013 12.2731 12.0013C12.4643 12.0013 12.6477 12.0773 12.7829 12.2125C12.9182 12.3477 12.9941 12.5311 12.9941 12.7223ZM12.9941 9.83821C12.9941 10.0294 12.9182 10.2128 12.7829 10.3481C12.6477 10.4833 12.4643 10.5592 12.2731 10.5592C12.0819 10.5592 11.8985 10.4833 11.7632 10.3481C11.628 10.2128 11.5521 10.0294 11.5521 9.83821C11.5521 9.64699 11.628 9.46359 11.7632 9.32837C11.8985 9.19315 12.0819 9.11719 12.2731 9.11719C12.4643 9.11719 12.6477 9.19315 12.7829 9.32837C12.9182 9.46359 12.9941 9.64699 12.9941 9.83821ZM9.38899 12.7223C9.38899 12.9136 9.31302 13.0969 9.1778 13.2322C9.04258 13.3674 8.85919 13.4433 8.66796 13.4433C8.47673 13.4433 8.29333 13.3674 8.15812 13.2322C8.0229 13.0969 7.94693 12.9136 7.94693 12.7223C7.94693 12.5311 8.0229 12.3477 8.15812 12.2125C8.29333 12.0773 8.47673 12.0013 8.66796 12.0013C8.85919 12.0013 9.04258 12.0773 9.1778 12.2125C9.31302 12.3477 9.38899 12.5311 9.38899 12.7223ZM9.38899 9.83821C9.38899 10.0294 9.31302 10.2128 9.1778 10.3481C9.04258 10.4833 8.85919 10.5592 8.66796 10.5592C8.47673 10.5592 8.29333 10.4833 8.15812 10.3481C8.0229 10.2128 7.94693 10.0294 7.94693 9.83821C7.94693 9.64699 8.0229 9.46359 8.15812 9.32837C8.29333 9.19315 8.47673 9.11719 8.66796 9.11719C8.85919 9.11719 9.04258 9.19315 9.1778 9.32837C9.31302 9.46359 9.38899 9.64699 9.38899 9.83821ZM5.78385 12.7223C5.78385 12.9136 5.70789 13.0969 5.57267 13.2322C5.43745 13.3674 5.25405 13.4433 5.06282 13.4433C4.8716 13.4433 4.6882 13.3674 4.55298 13.2322C4.41776 13.0969 4.3418 12.9136 4.3418 12.7223C4.3418 12.5311 4.41776 12.3477 4.55298 12.2125C4.6882 12.0773 4.8716 12.0013 5.06282 12.0013C5.25405 12.0013 5.43745 12.0773 5.57267 12.2125C5.70789 12.3477 5.78385 12.5311 5.78385 12.7223ZM5.78385 9.83821C5.78385 10.0294 5.70789 10.2128 5.57267 10.3481C5.43745 10.4833 5.25405 10.5592 5.06282 10.5592C4.8716 10.5592 4.6882 10.4833 4.55298 10.3481C4.41776 10.2128 4.3418 10.0294 4.3418 9.83821C4.3418 9.64699 4.41776 9.46359 4.55298 9.32837C4.6882 9.19315 4.8716 9.11719 5.06282 9.11719C5.25405 9.11719 5.43745 9.19315 5.57267 9.32837C5.70789 9.46359 5.78385 9.64699 5.78385 9.83821Z"
                                    fill="white"
                                  />
                                </svg>
                              </div>
                              <div>
                                <input
                                  placeholder="اردیبهشت 1402"
                                  class="w-[9rem] rounded-full p-2 outline-none"
                                  type="date"
                                />
                              </div>
                            </div>
                          </div>
                          <p class="py-4">
                            ${item.description}
                          </p>
                          <div class="flex justify-between border-t pt-3">
                            <div class="flex gap-2">
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  opacity="0.5"
                                  d="M11.3573 17.0603L10.9057 17.8237C10.5032 18.5037 9.49734 18.5037 9.094 17.8237L8.64234 17.0603C8.29234 16.4687 8.11734 16.172 7.83567 16.0087C7.554 15.8445 7.19984 15.8387 6.4915 15.8262C5.44484 15.8087 4.789 15.7445 4.239 15.5162C3.73348 15.3068 3.27414 14.9998 2.88723 14.6129C2.50031 14.226 2.1934 13.7667 1.984 13.2612C1.6665 12.4962 1.6665 11.5253 1.6665 9.58366V8.75032C1.6665 6.02282 1.6665 4.65866 2.28067 3.65699C2.62404 3.09632 3.09521 2.62487 3.65567 2.28116C4.65817 1.66699 6.02317 1.66699 8.74984 1.66699H11.2498C13.9773 1.66699 15.3415 1.66699 16.344 2.28116C16.9044 2.62463 17.3755 3.09579 17.719 3.65616C18.3332 4.65866 18.3332 6.02366 18.3332 8.75032V9.58366C18.3332 11.5253 18.3332 12.4962 18.0165 13.2612C17.807 13.7668 17.5 14.2261 17.1129 14.6131C16.7258 15 16.2663 15.3069 15.7607 15.5162C15.2107 15.7445 14.5548 15.8078 13.5082 15.8262C12.7998 15.8387 12.4457 15.8445 12.164 16.0087C11.8823 16.172 11.7073 16.4678 11.3573 17.0603Z"
                                  fill="#B2B2B2"
                                />
                                <path
                                  d="M6.0415 7.5C6.0415 7.33424 6.10735 7.17527 6.22456 7.05806C6.34177 6.94085 6.50074 6.875 6.6665 6.875H13.3332C13.4989 6.875 13.6579 6.94085 13.7751 7.05806C13.8923 7.17527 13.9582 7.33424 13.9582 7.5C13.9582 7.66576 13.8923 7.82473 13.7751 7.94194C13.6579 8.05915 13.4989 8.125 13.3332 8.125H6.6665C6.50074 8.125 6.34177 8.05915 6.22456 7.94194C6.10735 7.82473 6.0415 7.66576 6.0415 7.5ZM6.0415 10.4167C6.0415 10.2509 6.10735 10.0919 6.22456 9.97472C6.34177 9.85751 6.50074 9.79167 6.6665 9.79167H11.2498C11.4156 9.79167 11.5746 9.85751 11.6918 9.97472C11.809 10.0919 11.8748 10.2509 11.8748 10.4167C11.8748 10.5824 11.809 10.7414 11.6918 10.8586C11.5746 10.9758 11.4156 11.0417 11.2498 11.0417H6.6665C6.50074 11.0417 6.34177 10.9758 6.22456 10.8586C6.10735 10.7414 6.0415 10.5824 6.0415 10.4167Z"
                                  fill="#B2B2B2"
                                />
                              </svg>
                              <p class="text-sm text-gray-300">۵ دیدگاه</p>
                            </div>
                            <div class="flex items-center gap-3">
                              <button
                                class="rounded-full bg-gray-100 p-1 px-3 transition-all duration-700"
                              >
                                ادامه مطلب
                              </button>
                              <button>
                                <svg
                                  width="25"
                                  height="25"
                                  viewBox="0 0 26 26"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle cx="13" cy="13" r="13" fill="#2FAC66" />
                                  <g clip-path="url(#clip0_28_253)">
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M14.98 6.93039C15.0414 6.98299 15.0918 7.04717 15.1284 7.11926C15.1649 7.19136 15.1869 7.26994 15.1931 7.35054C15.1993 7.43113 15.1895 7.51215 15.1643 7.58897C15.1392 7.66579 15.0991 7.73689 15.0465 7.79822L10.4686 13.1397L15.0465 18.4812C15.1022 18.5421 15.1451 18.6135 15.1726 18.6912C15.2002 18.7689 15.2118 18.8514 15.2069 18.9337C15.2019 19.0161 15.1804 19.0965 15.1437 19.1704C15.107 19.2443 15.0559 19.31 14.9933 19.3637C14.9307 19.4174 14.8579 19.4579 14.7793 19.4829C14.7007 19.5079 14.6179 19.5169 14.5358 19.5093C14.4537 19.5016 14.3739 19.4775 14.3013 19.4385C14.2287 19.3994 14.1647 19.3461 14.113 19.2818L9.19149 13.54C9.09596 13.4285 9.04346 13.2865 9.04346 13.1397C9.04346 12.9929 9.09596 12.8509 9.19149 12.7394L14.113 6.99765C14.2192 6.87395 14.3702 6.79746 14.5328 6.785C14.6954 6.77254 14.8562 6.82513 14.98 6.93121V6.93039Z"
                                      fill="white"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_28_253">
                                      <rect
                                        width="13.5652"
                                        height="13.5652"
                                        fill="white"
                                        transform="translate(6.21729 6.21777)"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </article>`;
  });
}

renderArticles(currentPage);

function nextPage() {
  const totalPages = Math.ceil(articles.length / articlesPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderArticles(currentPage);
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderArticles(currentPage);
  }
}

nextPagintation?.addEventListener("click", () => nextPage());
prevPagination?.addEventListener("click", () => prevPage());

function renderPagination() {
  const totalPages = Math.ceil(articles.length / articlesPerPage);
  paginationContainer.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const paginationElement = document.createElement("div");
    paginationElement.classList.add(
      "pagination-number",
      "flex",
      "size-[45.33px]",
      "items-center",
      "justify-center",
      "rounded-full",
      "border-2",
      "border-gray-300",
      "text-2xl",
      "font-extrabold",
      "text-gray-300",
    );
    if (i === currentPage) {
      paginationElement.classList.add("active-pagination");
    }
    paginationElement.textContent = String(i);
    paginationElement.addEventListener("click", () => {
      currentPage = i;
      renderArticles(currentPage);
      renderPagination();
    });
    paginationContainer.appendChild(paginationElement);
  }
}

// Initial render
renderArticles(currentPage);
renderPagination();
