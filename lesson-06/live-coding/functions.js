function tuWas() {
  const headline = document.getElementById("headline");
  headline.textContent = "Spannender Kurs ever!";

  const button = document.getElementById("button");
  button.classList.toggle("larger");

  document.getElementById("photo").src =
    "https://images.pexels.com/photos/40784/drops-of-water-water-nature-liquid-40784.jpeg?auto=compress&cs=tinysrgb&w=400";

  document.getElementById("photo").style.transform =
    "rotate(" + i + "deg) translateY(130px)";
}
