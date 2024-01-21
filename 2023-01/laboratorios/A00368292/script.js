const commentText = document.getElementById("comment-text");
const commentBtn = document.getElementById("comment-btn");
const postsContainer = document.querySelector(".posts");
const modal = document.getElementById("modal");
const modalCloseBtn = document.querySelector(".close");
const modalCancelBtn = document.getElementById("cancel-btn");
const modalDiscardBtn = document.getElementById("discard-btn");


commentBtn.addEventListener("click", addPost);


commentText.addEventListener("input", updateCommentBtn);


modalCancelBtn.addEventListener("click", closeModal);


modalDiscardBtn.addEventListener("click", discardComment);


modalCloseBtn.addEventListener("click", closeModal);


function addPost() {
  
  const post = document.createElement("div");
  post.classList.add("post");

  
  const postHeader = document.createElement("h3");
  postHeader.textContent = "Publicación:";
  const postContent = document.createElement("p");
  postContent.textContent = commentText.value;

  
  post.appendChild(postHeader);
  post.appendChild(postContent);

  
  postsContainer.appendChild(post);

  
  commentText.value = "";

  
  updateCommentBtn();
}


function updateCommentBtn() {
  
  if (commentText.value.length > 0) {
    commentBtn.classList.remove("disabled");
  } else {
    commentBtn.classList.add("disabled");
  }
}


function showConfirmationModal() {
 
  modal.style.display = "block";
}


function closeModal() {
  
  modal.style.display = "none";
}


function discardComment() {
  
  commentText.value = "";

  
  updateCommentBtn();

  
  closeModal();
}
