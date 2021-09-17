document.addEventListener("DOMContentLoaded", () => {

  let header = document.querySelector('.header')
  let crumbs = document.querySelector('.crumbs');

  function breadMargin() {
    return crumbs.style.paddingTop = `calc(${header.offsetHeight}px)`
  }

  breadMargin()
});