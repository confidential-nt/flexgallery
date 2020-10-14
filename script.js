const panels = document.querySelectorAll(".panel");

function toggleActive(event){
    if(event.propertyName.includes("flex")){
        this.classList.toggle("open-active");
    }
    //사파리에선 flex라고 해야, 다른 브라우저에선 flex-grow라고 해야 먹히므로 두 가지 경우 다 수용하기 위해....
}

function toggleOpen(){
    this.classList.toggle("open");
}

panels.forEach(panel => panel.addEventListener("click",toggleOpen));

panels.forEach(panel => panel.addEventListener("transitionend",toggleActive));