const infolist = document.querySelectorAll(".info-list li");
const infocontent = document.querySelectorAll(".info-content div");

infolist.forEach((element) => {
  element.addEventListener("click", function () {
    // Remove "active" class from all elements
    infolist.forEach((el) => {
      el.classList.remove("active");
    });

    // Add "active" class to the clicked element
    this.classList.add("active");

    // Hide all content divs
    infocontent.forEach((content) => {
      content.style.display = "none";
    });

    // Display the content div with the matching data-class attribute
    const dataclass = this.getAttribute("data-class");
    const contenttoshow = document.querySelector(dataclass);
    contenttoshow.style.opacity = "1";
    contenttoshow.style.display = "block";
  });
});
