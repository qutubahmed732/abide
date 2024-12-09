const menu_button = document.querySelector("#menu_button");
menu_button.addEventListener("click", ()=>{
    const navbar_items = document.querySelector("#navbar_items")

    if(navbar_items.style.display == "block"){
        navbar_items.style.display = "none";
    } else {
        navbar_items.style.display = "block";
    }
})