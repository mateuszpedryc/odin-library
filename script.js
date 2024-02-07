const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const radioButton = document.getElementsByName("is_read");
const addBook = document.getElementById("add-book");
const bookCardsWrapper = document.getElementById("cards-wrapper");
const addButton = document.getElementById("show-dialog");
const dialog = document.getElementById("dialog");
let bookStatus = "";

const myLibrary = [];

// Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

// Push new book into array and pass all values into DOM update function
addBook.addEventListener('click', (e) => {
    e.preventDefault();

    for (i = 0; i < radioButton.length; i++) {
        if (radioButton[i].checked) {
            bookStatus = radioButton[i].value;
        }
    }

    const newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookStatus);

    dialog.close(myLibrary.push(newBook));

    const dataIndex = myLibrary.indexOf(newBook);

    createBookCard(bookTitle.value, bookAuthor.value, bookPages.value, bookStatus, dataIndex);

    console.log(myLibrary);
    console.log(dataIndex);
});

// Function to update DOM
function createBookCard(title, author, pages, status, dataIndex) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.dataset.index = dataIndex;

    const bookPrimaryInfo = document.createElement('div');
    const bookSecondaryInfo = document.createElement('div');
    bookPrimaryInfo.classList.add('book-primary-info');
    bookSecondaryInfo.classList.add('book-secondary-info');

    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const bookPages = document.createElement('p');
    const bookStatus = document.createElement('p');
    bookTitle.classList.add('book-title');
    bookTitle.dataset.index = dataIndex;
    bookAuthor.classList.add('book-author');
    bookPages.classList.add('book-pages');
    bookStatus.classList.add('book-status');

    bookTitle.setAttribute('id', 'book-title');
    bookAuthor.setAttribute('id', 'book-author');
    bookPages.setAttribute('id', 'book-pages');
    bookStatus.setAttribute('id', 'book-status');

    bookTitle.textContent = title;
    bookAuthor.textContent = author;
    bookPages.textContent = pages + ' pages';
    bookStatus.textContent = status;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn-round');
    deleteButton.setAttribute('id', 'delete-button');

    const svgURI = 'http://www.w3.org/2000/svg';

    const svgForButton = document.createElementNS(svgURI, 'svg');
    svgForButton.setAttribute('class', 'icon icon-tabler icon-tabler-xbox-x');
    svgForButton.setAttribute('width', '24');
    svgForButton.setAttribute('height', '24');
    svgForButton.setAttribute('viewBox', '0 0 24 24');
    svgForButton.setAttribute('stroke-width', '1');
    svgForButton.setAttribute('stroke', 'currentColor');
    svgForButton.setAttribute('fill', 'none');
    svgForButton.setAttribute('stroke-linecap', 'round');
    svgForButton.setAttribute('stroke-linejoin', 'round');
    
    const svgPath1 = document.createElementNS(svgURI, 'path');
    svgPath1.setAttribute('d', 'M0 0h24v24H0z');
    svgPath1.setAttribute('fill', 'none');
    svgPath1.setAttribute('stroke', 'none');
    const svgPath2 = document.createElementNS(svgURI, 'path')
    svgPath2.setAttribute('d', 'M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z');
    const svgPath3 = document.createElementNS(svgURI, 'path')
    svgPath3.setAttribute('d', 'M9 8l6 8');
    const svgPath4 = document.createElementNS(svgURI, 'path')
    svgPath4.setAttribute('d', 'M15 8l-6 8');

    svgForButton.appendChild(svgPath1);
    svgForButton.appendChild(svgPath2);
    svgForButton.appendChild(svgPath3);
    svgForButton.appendChild(svgPath4);

    deleteButton.appendChild(svgForButton);

    bookPrimaryInfo.appendChild(bookTitle);
    bookPrimaryInfo.appendChild(bookAuthor);

    bookSecondaryInfo.appendChild(bookPages);
    bookSecondaryInfo.appendChild(bookStatus);

    bookCard.appendChild(bookPrimaryInfo);
    bookCard.appendChild(bookSecondaryInfo);
    bookCard.appendChild(deleteButton);

    bookCardsWrapper.appendChild(bookCard);
    bookCardsWrapper.insertBefore(bookCard, null);
}

// Open pop-up dialog for book input
addButton.addEventListener("click", () => {
    dialog.showModal();
});

// Function to delete book card and remove from array
bookCardsWrapper.addEventListener("click", function(e) {
    const target = e.target.closest("#delete-button");

    if (target) {
        const targetCard = target.parentNode;
        targetCard.remove();
        myLibrary.splice(targetCard.dataset.index, 1);
        console.log(myLibrary);
    } else {
        return;
    };
});