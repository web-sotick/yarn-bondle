let parent = document.querySelectorAll("nav>ul>li")
let linkNav = document.querySelectorAll("nav>ul>li>a")
let child = document.querySelectorAll('nav>ul>li>ul')

parent.forEach((parentLi, indLi) => {

    child.forEach(childUl => {

        if (parentLi.contains(childUl)) {
            parentLi.classList.add('arrow_menu')

            linkNav.forEach((link, indLink) => {
                if (window.location.href === link.href && indLi === indLink) {
                    link.classList.add('link')
                    parentLi.classList.remove('arrow_menu')
                    parentLi.classList.add('arrow_menu_link')

                }
            })
        }
    });
});

linkNav.forEach(link => {
    if (window.location.href === link.href) {
        link.classList.add('link')
        link.classList.remove('arrow_menu')
    }
})