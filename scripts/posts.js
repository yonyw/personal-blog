const posts = [
  {
    title: "JavaScript Snake Game",
    desc: "Created a snake game using JavaScript and embedded it into my OS-style site.",
    image: "assets/images/enter-dunegon.jpeg",
    link: "pages/projects.html"
  },
  {
    title: "Terminal Portfolio v1",
    desc: "Built a fake operating system UI using HTML and CSS.",
    image: "assets/images/globe.gif",
    link: "pages/projects.html"
  },
  {
    title: "Linux Exploration Log",
    desc: "Experimenting with Linux commands and terminal workflows.",
    image: "assets/images/rayquza.jpg",
    link: "pages/projects.html"
  },
  {
    title: "Web Dev Setup",
    desc: "Setting up my dev environment and learning workflow basics.",
    image: "assets/images/enter-dunegon.jpeg",
    link: "pages/projects.html"
  }
];

let currentPost = 0;

function loadPost(index) {
  const post = posts[index];

  document.getElementById("post-title").textContent = post.title;
  document.getElementById("post-desc").textContent = post.desc;
  document.getElementById("post-link").href = post.link;
}

function loadPreviousPosts() {
  const container = document.getElementById("previous-posts");

  const previous = posts.filter((_, i) => i !== currentPost);

  container.innerHTML = previous.slice(0, 3).map(post => {
    return `
    <div class="previous-posts">
      <a style="text-decoration: None;" href="${post.link}">
        <div>
          <h4>${post.title}</h4>
          <p>${post.desc}</p>
        </div>
      </a>
    </div>
    `;
  }).join("");
}

function init() {
  loadPost(currentPost);
  loadPreviousPosts();
}

init();