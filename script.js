const myLibrary = [];

function Book(author, title, pages, read) {
    if (!new.target) {
        throw Error("use new operator");
    }
    this.id = crypto.randomUUID();
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(author, title, pages, read) {
    let book = new Book(author, title, pages, read);
    myLibrary.push(book);
}

function createBookCard(myLibrary) {
    library = document.querySelector(".books")
    for (item in myLibrary) {
        card = document.createElement('div')
        card.classList.add("card");
        author = document.createElement('div')
        author.innerHTML = `Author: ${myLibrary[item].author}`
        title = document.createElement('div')
        title.innerHTML = `Title: ${myLibrary[item].title}`
        pages = document.createElement('div')
        pages.innerHTML = `Pages: ${myLibrary[item].pages}`
        read = document.createElement('div')
        read.innerHTML = `read: ${myLibrary[item].read}`
        card.appendChild(author)
        card.appendChild(title)
        card.appendChild(pages)
        card.appendChild(read)
        library.appendChild(card)
    }
}