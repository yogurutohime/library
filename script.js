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
    this.showed = false;
}

function addBookToLibrary(author, title, pages, read) {
    let book = new Book(author, title, pages, read);
    myLibrary.push(book);
}

function createBookCard(myLibrary) {
    library = document.querySelector(".library")
    filteredLibrary = myLibrary.filter(item => item.showed == false)
    for (item in filteredLibrary) {
        card = document.createElement('div')
        card.classList.add("card");
        author = document.createElement('div')
        author.innerHTML = `Author: ${filteredLibrary[item].author}`
        title = document.createElement('div')
        title.innerHTML = `Title: ${filteredLibrary[item].title}`
        pages = document.createElement('div')
        pages.innerHTML = `Pages: ${filteredLibrary[item].pages}`
        button = document.createElement('button')
        if (filteredLibrary[item].read == true) {
            button.innerHTML = 'Read';
        } else {
            button.innerHTML = 'Not read'
        }
        remove = document.createElement("button")
        remove.classList.add("remove")
        remove.innerHTML = "REMOVE"
        card.appendChild(author)
        card.appendChild(title)
        card.appendChild(pages)
        card.appendChild(button)
        card.appendChild(remove)
        card.setAttribute('data', `${filteredLibrary[item].id}`)
        library.appendChild(card)
    }
    for (item of filteredLibrary) {
        for (book of myLibrary) {
            if (book.id == item.id) {
                book.showed = true;
            }
        }
    }
}

function getValueFromForm() {
    author = document.getElementById("author").value
    title = document.getElementById("title").value
    pages = document.getElementById("pages").value
    read = document.getElementById("read").checked
    return author, title, pages, read
}

function clearForm() {
    document.getElementById("author").value = ''
    document.getElementById("title").value = ''
    document.getElementById("pages").value = ''
    check = document.querySelector(".check")
    console.log(check.checked)
    check.checked = false;
}

dialog = document.querySelector("dialog")

submit = document.querySelector(".submit")
submit.addEventListener("click", e => {
    e.preventDefault()
    author, title, pages, read = getValueFromForm()
    clearForm()
    addBookToLibrary(author, title, pages, read)
    createBookCard(myLibrary)
    dialog.close()
})


