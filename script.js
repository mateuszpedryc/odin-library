function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    switch (read) {
        case true:
            bookRead = "read";
            break;
        case false:
            bookRead = "not read yet";
            break;
        default:
            bookRead = "no info";
    };

    this.info = function() {
        return title + " by " + author + ", " + pages + " pages" + ", " + bookRead + ".";
    };
}

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);

console.log(book1.info());


// Open pop-up dialog for book input

const addButton = document.getElementById("show-dialog");
const dialog = document.getElementById("dialog");

addButton.addEventListener("click", () => {
    dialog.showModal();
});