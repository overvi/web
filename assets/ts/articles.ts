//@ts-ignore

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

const articles = articleContainer.querySelectorAll("article");

const articlesArray = Array.from(articles);

function renderArticles(page: number) {
  const startIndex = (page - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const paginatedArticles = articlesArray.slice(startIndex, endIndex);

  articleContainer.innerHTML = "";
  paginatedArticles.forEach((item) => {
    articleContainer.appendChild(item);
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
