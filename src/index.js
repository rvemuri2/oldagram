import posts from "./data.js";

const container = document.querySelector(".container");
const postMethods = () => {
  posts.map((postData) => {
    const postElement = document.createElement("section");
    postElement.classList.add("user-info");
    postElement.innerHTML = `
    <section class="card">
    <section class="header">
    <img src=${postData.avatar} class="avatar" />
    <div class="user-details">
      <h2 class="name">${postData.name}</h2>
      <h2 class="location">${postData.location}</h2>
    </div>
  </section>
  <section>
    <img src=${postData.post} class="img" />
  </section>

  <section class="icons">
    <img src="../images/icon-heart.png" class="heart" />
    <img src="../images/icon-comment.png" class="comment" />
    <img src="../images/icon-dm.png" class="dm" />
  </section>
  <section class="likes">
    <h2 class="count">${postData.likes}</h2>
    <h2>Likes</h2>
  </section>
  <section class="user-comment">
    <h2 class="username">${postData.username}</h2>
    <h2 class="actual-comment">${postData.comment}</h2>
  </section>
  </section>
    `;
    container.appendChild(postElement);
  });
};
postMethods();
