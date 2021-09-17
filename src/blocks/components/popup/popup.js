let goToPopup = document.querySelectorAll('.go-to-popup')
let container = document.querySelector('.popup__container')
let sectionPopup = document.querySelector('.popup')
let closePopup = document.querySelector('.popup__close')
let arr = []


function popup() {
    
    goToPopup.forEach((el, ind)=>{
        el.addEventListener('click',()=>{
            if(window.innerWidth > 678){
            sectionPopup.classList.add('active-popup')
            container.innerHTML = '';
            let cloneEl = el.cloneNode(true)
            arr.push(cloneEl)
            container.appendChild(arr[0])
            arr = []
            }else{
                arr = []
            }
        })
    })
    
    closePopup.addEventListener('click', ()=>{
        if(window.innerWidth > 678){
        container.innerHTML = '';
        sectionPopup.classList.remove('active-popup')
        }
    })
}
popup()

