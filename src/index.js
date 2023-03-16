let body = document.querySelector("body");
let container = document.querySelector(".container");
let starImg = document.querySelector(".starImg");
let reviewContainer = document.querySelector(".reviewContainer");
let button = document.querySelector("button");
let starContianer = document.querySelector(".starContianer");
let newSpan = document.createElement("span");
let h1 = document.querySelector("h1");
let p = document.querySelector("p");

let spans = document.querySelectorAll("span");
spans.forEach((span) => {
  span.addEventListener("click", () => {
    spans.forEach((s) => (s.style.backgroundColor = ""));
    span.style.backgroundColor = "hsl(25, 97%, 53%)";

    button.addEventListener("click", () => {
      newSpan.innerHTML = `You selected  ${span.innerText} out of 5`;
      starImg.setAttribute("src", "../images/illustration-thank-you.svg");
      starContianer.after(newSpan);
      button.remove();
      h1.innerHTML = "Thank you!";
      p.innerHTML =
        "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
      reviewContainer.remove();
      let linker = document.createElement("link");
      linker.href = "./style/thankyouStyle.css";
      linker.type = "text/css";
      linker.rel = "stylesheet";
      document.head.append(linker);
    });
  });
});
