const commentInput = document.querySelector("#yorumInput");
const commentButton = document.querySelector("#yorumButton");
const commentsContainer = document.querySelector(".yorumlar");


commentButton.addEventListener("click", () => {
    const commentText = commentInput.value.trim();

    if (commentText) {
        
        const newComment = document.createElement("p");
        newComment.textContent = commentText;

       
        commentsContainer.appendChild(newComment);

        
        commentInput.value = "";
    } else {
        alert("Please enter a valid comment!");
    }
});