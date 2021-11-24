function setClass(className) {
  document.querySelector("div").className = className;
}

var articles = document.querySelectorAll("article");
var buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    var buttonid = this.id;
    var modifiedid = buttonid.replace("button-", "");
    var textid = document.getElementById(modifiedid);
    textid.scrollIntoView({ behavior: "smooth" });
  });
});

var sections = document.querySelectorAll("section");
let options = {
  rootMargin: "0px 0px -200px 0px",
  threshold: 0,
};
/* Just making the observer */
var observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(`${entry.target.id} is intersecting.`);
      setClass(entry.target.dataset.class);
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});
