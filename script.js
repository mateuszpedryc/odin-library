const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const radioButton = document.getElementsByName("is_read");
const radioButtonRead = document.getElementById("book-read");
const radioButtonNotRead = document.getElementById("book-not-read");
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

    // console.log(myLibrary);
    // console.log(dataIndex);
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

    const editButton = document.createElement('button');
    editButton.classList.add('btn-round');
    editButton.setAttribute('id', 'edit-button');

    const svgURI = 'http://www.w3.org/2000/svg';

    const svgForDeleteButton = document.createElementNS(svgURI, 'svg');
    svgForDeleteButton.setAttribute('class', 'icon icon-tabler icon-tabler-xbox-x');
    svgForDeleteButton.setAttribute('width', '24');
    svgForDeleteButton.setAttribute('height', '24');
    svgForDeleteButton.setAttribute('viewBox', '0 0 24 24');
    svgForDeleteButton.setAttribute('stroke-width', '1');
    svgForDeleteButton.setAttribute('stroke', 'currentColor');
    svgForDeleteButton.setAttribute('fill', 'none');
    svgForDeleteButton.setAttribute('stroke-linecap', 'round');
    svgForDeleteButton.setAttribute('stroke-linejoin', 'round');
    const svgDeletePath1 = document.createElementNS(svgURI, 'path');
    svgDeletePath1.setAttribute('d', 'M0 0h24v24H0z');
    svgDeletePath1.setAttribute('fill', 'none');
    svgDeletePath1.setAttribute('stroke', 'none');
    const svgDeletePath2 = document.createElementNS(svgURI, 'path')
    svgDeletePath2.setAttribute('d', 'M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z');
    const svgDeletePath3 = document.createElementNS(svgURI, 'path')
    svgDeletePath3.setAttribute('d', 'M9 8l6 8');
    const svgDeletePath4 = document.createElementNS(svgURI, 'path')
    svgDeletePath4.setAttribute('d', 'M15 8l-6 8');

    const svgForEditButton = document.createElementNS(svgURI, 'svg');
    svgForEditButton.setAttribute('class', 'icon icon-tabler icon-tabler-edit');
    svgForEditButton.setAttribute('width', '24');
    svgForEditButton.setAttribute('height', '24');
    svgForEditButton.setAttribute('viewBox', '0 0 24 24');
    svgForEditButton.setAttribute('stroke-width', '1');
    svgForEditButton.setAttribute('stroke', 'currentColor');
    svgForEditButton.setAttribute('fill', 'none');
    svgForEditButton.setAttribute('stroke-linecap', 'round');
    svgForEditButton.setAttribute('stroke-linejoin', 'round');
    const svgEditPath1 = document.createElementNS(svgURI, 'path');
    svgEditPath1.setAttribute('d', 'M0 0h24v24H0z');
    svgEditPath1.setAttribute('fill', 'none');
    svgEditPath1.setAttribute('stroke', 'none');
    const svgEditPath2 = document.createElementNS(svgURI, 'path')
    svgEditPath2.setAttribute('d', 'M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1');
    const svgEditPath3 = document.createElementNS(svgURI, 'path')
    svgEditPath3.setAttribute('d', 'M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z');
    const svgEditPath4 = document.createElementNS(svgURI, 'path')
    svgEditPath4.setAttribute('d', 'M16 5l3 3');

    svgForDeleteButton.appendChild(svgDeletePath1);
    svgForDeleteButton.appendChild(svgDeletePath2);
    svgForDeleteButton.appendChild(svgDeletePath3);
    svgForDeleteButton.appendChild(svgDeletePath4);

    svgForEditButton.appendChild(svgEditPath1);
    svgForEditButton.appendChild(svgEditPath2);
    svgForEditButton.appendChild(svgEditPath3);
    svgForEditButton.appendChild(svgEditPath4);

    deleteButton.appendChild(svgForDeleteButton);
    editButton.appendChild(svgForEditButton);

    bookPrimaryInfo.appendChild(bookTitle);
    bookPrimaryInfo.appendChild(bookAuthor);
    bookSecondaryInfo.appendChild(bookPages);
    bookSecondaryInfo.appendChild(bookStatus);

    bookCard.appendChild(bookPrimaryInfo);
    bookCard.appendChild(bookSecondaryInfo);
    bookCard.appendChild(editButton);
    bookCard.appendChild(deleteButton);

    bookCardsWrapper.appendChild(bookCard);
    bookCardsWrapper.insertBefore(bookCard, null);
}

// Open pop-up dialog for book input
addButton.addEventListener("click", () => {
    dialog.showModal();
});

// Function to delete book card and remove from array
bookCardsWrapper.addEventListener("click", (e) => {
    const target = e.target.closest("#delete-button");
    const targets = document.getElementsByClassName('book-card');

    if (target) {
        const targetCard = target.parentNode;
        targetCard.remove();
        myLibrary.splice(targetCard.dataset.index, 1);
        console.log(myLibrary);
        console.log(targets);
        console.log(Array.from(targets));
        Array.from(targets).forEach((element) => console.log(element));
        Array.from(targets).forEach((element) => element.dataset.index = Array.from(targets).indexOf(element)); 
        console.log(myLibrary);
    } else {
        return;
    };
});

//Function to edit book status and save changes to array
bookCardsWrapper.addEventListener("click", (e) => {
    const target = e.target.closest("#edit-button");
    // const targets = document.getElementsByClassName('book-card');

    if (target) {
        const targetCard = target.parentNode;
        const targetIndex = targetCard.dataset.index;

        console.log((targetCard.children[1]).children[1].textContent);
        console.log(targetIndex);

        if ((targetCard.children[1]).children[1].textContent === 'Read') {
            (targetCard.children[1]).children[1].textContent = 'Not read yet';
            // myLibrary.find(x => x.id = targetCard.dataset.index).read = 'Not read yet';
            myLibrary[targetIndex].read = 'Not read yet';
        } else if((targetCard.children[1]).children[1].textContent === 'Not read yet'){
            (targetCard.children[1]).children[1].textContent = 'Read';
            myLibrary[targetIndex].read = 'Read';
        };
        console.log(myLibrary);
    } else {
        return;
    };
});

//Toggle dark-mode
let darkMode = localStorage.getItem('darkMode');
const modeToggleButton = document.getElementById("btn-mode-select");
const documentBody = document.body;

function enableDarkMode() {
    documentBody.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
};

function disableDarkMode() {
    documentBody.classList.remove('dark-mode');
    localStorage.setItem('darkMode', null);
};

if (darkMode === 'enabled') {
    enableDarkMode();
};

modeToggleButton.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');

    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    };
});