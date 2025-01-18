const buttons = document.querySelectorAll(".kategoriler button");
const books = document.querySelectorAll(".kitap1");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.id; 

        if (category === "all") {
            
            books.forEach(book => {
                book.style.display = "block"; 
            });

            
            buttons.forEach(btn => {
                btn.style.display = "inline-block";
            });
        } else {
           
            books.forEach(book => {
                if (book.classList.contains(category)) {
                    book.style.display = "block"; 
                } else {
                    book.style.display = "none";
                }
            });

           
            buttons.forEach(btn => {
                if (btn.id !== category && btn.id !== "all") {
                    btn.style.display = "none"; 
                } else {
                    btn.style.display = "inline-block"; 
                }
            });
        }
    });
});

const searchInput = document.getElementById("arainput");

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim(); 

    books.forEach(book => {
        const bookName = book.querySelector(".kitap-isim").textContent.toLowerCase(); 

        if (bookName.includes(query)) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
});