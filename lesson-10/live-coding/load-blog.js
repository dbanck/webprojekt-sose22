// waits for all static HTML to be loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("HTML geladen!");

  // <article>
  const article = document.createElement("article");

  // <div class="article-image">
  const left = document.createElement("div");
  left.classList.add("article-image");

  // <div class="article-description">
  const right = document.createElement("div");
  right.classList.add("article-description");

  // <h2>Winterliche Drehorte in Alberta</h2>
  const headline = document.createElement("h2");
  headline.textContent = "Winterliche Drehorte in Alberta";

  // <p>Der Schnee peitscht mir ohne Pause...
  const description = document.createElement("p");
  description.textContent =
    "Der Schnee peitscht mir ohne Pause ins Gesicht, immer fester kralle ich mich an den seitlichen Griffen des Schneemobils fest und für einen Moment habe ich das Gefühl mitten in einem Bondfilm gelandet zu...";

  // <img src="https
  const image = document.createElement("img");
  image.src =
    "https://www.filmtourismus.de/wp-content/uploads/2018/12/alberta-spray-lakes-winter-360x240.jpg";
  image.alt = "Ich vor einem Gletschersee in Canada";

  left.appendChild(image);

  right.appendChild(headline);
  right.appendChild(description);

  article.appendChild(left);
  article.appendChild(right);

  document.getElementById("blog-content").appendChild(article);
});
