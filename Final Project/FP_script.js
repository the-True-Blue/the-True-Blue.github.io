window.addEventListener("load", function () {
  let comicPageIndex = 0;
  let comicPanelIndex = 0;
  const comicBook = document.querySelector(".comic-book");
  const comicPages = document.querySelectorAll(".comic-book .page");
  const resetBtn = document.getElementById("btn-reset");
  function gotoComicPageNumber(n) {
    if (n > comicPages.length || n < 1) return false;
    comicPages.forEach((el) => el.classList.remove("active"));
    comicPageIndex = n - 1;
    comicPanelIndex = 0;
    comicPages[comicPageIndex].classList.add("active");
  }
  gotoComicPageNumber(1);
  function gotoComicPanelNumber(n) {
    const panelEls = comicPages[comicPageIndex].querySelectorAll(".panel");
    if (n > panelEls.length || n < 1) return false;

    comicPanelIndex = n - 1;

    panelEls[comicPanelIndex].classList.add("active");
  }
  comicBook.addEventListener("click", function (e) {
    if (comicPanelIndex < comicPages[comicPageIndex].children.length - 1) {
      gotoComicPanelNumber(comicPanelIndex + 2);
    } else {
      gotoComicPageNumber(comicPageIndex + 2);
    }
  });

  function resetComicBook() {
    comicPages.forEach((el) => {
      el.classList.remove("active");
      el.querySelectorAll(".panel").forEach((el) =>
        el.classList.remove("active")
      );
    });
    gotoComicPageNumber(1);
  }
  resetBtn.addEventListener("click", resetComicBook);
});
