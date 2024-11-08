// Importing the necessary components
import { LibraryController } from "./controllers/LibraryController.js";
import { BookForm } from "./views/BookForm.js";
import { BookList } from "./views/BookList.js";

// Initialize instances of the BookForm, BookList, and LibraryController
const bookForm = new BookForm();
const bookList = new BookList();
const libraryController = new LibraryController(bookForm, bookList);

// Render the book form and pass the addBook method of the controller as a callback
bookForm.render(libraryController.addBook.bind(libraryController));

// Render the book list, passing the books and the delete and edit methods from the controller
bookList.render(
    libraryController.books,  // Assuming `books` is an array in the controller
    libraryController.deleteBook.bind(libraryController),
    libraryController.editBook.bind(libraryController)
);

// Add event listener for theme toggle button
const themeToggleButton = document.getElementById("theme-toggle");
if (themeToggleButton) {
    themeToggleButton.addEventListener(
        "click",
        libraryController.toggleTheme.bind(libraryController)
    );
}

// Initialize the theme based on the current state
libraryController.initTheme();
