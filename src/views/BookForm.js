export class BookForm {
  constructor() {
    this.formContainer = document.getElementById("book-form");
  }

  render(onSubmit) {
    this.formContainer.innerHTML = `
       <div class="card form-card glassy shadow-neumorphic">
          <div class="card-body">
              <h2 class="h4 mb-3">Tambah/Edit Buku</h2>
              <form id="book-form">
                  <div class="mb-3">
                      <label for="title" class="form-label">Judul Buku</label>
                      <input type="text" class="neumorphic-input form-control rounded-pill" id="title" placeholder="Judul Buku" required>
                  </div>
                  <div class="mb-3">
                      <label for="author" class="form-label">Penulis</label>
                      <input type="text" class="neumorphic-input form-control rounded-pill" id="author" placeholder="Nama Penulis" required>
                  </div>
                  <div class="mb-3">
                      <label for="year" class="form-label">Tahun Terbit</label>
                      <input type="number" class="neumorphic-input form-control rounded-pill" id="year" placeholder="Tahun" required>
                  </div>

                  <!-- Wrap the button in a div for centering -->
                  <div class="button-container">
                      <button type="submit" class="neumorphic-button btn w-100 rounded-pill shadow-neumorphic">
                          Simpan Buku
                      </button>
                  </div>
              </form>
          </div>
      </div>
    `;

    this.formContainer.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();

      const title = document.getElementById("title").value;
      const author = document.getElementById("author").value;
      const year = document.getElementById("year").value;

      onSubmit(title, author, year);

      this.resetForm();
    });
  }

  fillForm(book) {
    document.getElementById("title").value = book.title;
    document.getElementById("author").value = book.author;
    document.getElementById("year").value = book.year;
  }

  resetForm() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("year").value = "";
  }
}
