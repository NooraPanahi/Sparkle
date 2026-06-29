const booksContainer = document.getElementById("books-container");
const favContainer = document.getElementById("fav-container");
const tbrContainer = document.getElementById("tbr-container");
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileNavLinks = document.querySelectorAll("#mobile-nav-links a");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

mobileNavLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
    });
});

function createBookCard(book){
    return `
        <article class="overflow-hidden rounded-2xl border border-emerald-900/50 bg-zinc-900 transition duration-300 hover:-translate-y-1 hover:border-emerald-700">
            <img src="${book.image}" alt="${book.title} Cover" class="h-56 w-full object-cover">
            <div class="p-5">
                <div class="mb-4">
                    <h3 class="mb-1 text-xl font-bold text-zinc-100">${book.title}</h3>
                    <p class="text-sm text-zinc-400">${book.author}</p>
                    <span class="inline-block rounded-full bg-emerald-900/50 px-2 py-1 text-xs text-emerald-300">${book.genre} </span>
                </div>
                <div class="mb-4 flex items-center justify-between">
                    <span class="rounded-full bg-emerald-900 px-3 py-1 text-sm text-emerald-300">⭐ ${book.rating}/10 </span>
                    <span class="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300">${book.status}</span>
                </div>
            </div>
        </article>
    `;
}
function createTBRBookCard(book){
    return `
        <article class="overflow-hidden rounded-2xl border border-emerald-900/50 bg-zinc-900 transition duration-300 hover:-translate-y-1 hover:border-emerald-700">
            <img src="${book.image}" alt="${book.title} Cover" class="h-56 w-full object-cover">
            <div class="p-5">
                <div class="mb-4">
                    <h3 class="mb-1 text-xl font-bold text-zinc-100">${book.title}</h3>
                    <p class="text-sm text-zinc-400">${book.author}</p>
                    <span class="inline-block rounded-full bg-emerald-900/50 px-2 py-1 text-xs text-emerald-300">${book.genre} </span>
                </div>
            </div>
        </article>
    `;
}
function renderBooks(){
    
    let booksHTML = "";

    for (const book of books)
        booksHTML += createBookCard(book);

    booksContainer.innerHTML = booksHTML;
}
function renderFavBooks(){
    const favBooks = books.filter(book => book.favorite);

    let favHTML = "";

    for(const book of favBooks)
        favHTML += createBookCard(book);

    favContainer.innerHTML = favHTML;
}
function renderTBRBooks(){
    const tbrBooks = books.filter(book => book.tbr);

    let tbrHTML = "";

    for(const book of tbrBooks)
        tbrHTML += createTBRBookCard(book);

    tbrContainer.innerHTML = tbrHTML;
}

renderBooks();
renderFavBooks();
renderTBRBooks();