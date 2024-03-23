
export let darkMode = false;
export const button = document.querySelector("header button");

export const themeAnalisys= () => {
    const html = document.querySelector("html")  
    darkMode = JSON.parse(localStorage.getItem("theme")) 
    if(darkMode){ 
        button.classList.add("header__btn--dark-mode");
        html.classList.toggle("dark-mode") 
    }
    console.log(darkMode)
}

themeAnalisys()

export const themeChange = () => {
    const html = document.querySelector("html") 
    button.classList.toggle("header__btn--dark-mode")
    html.classList.toggle("dark-mode") 
    darkMode = !darkMode 
    localStorage.setItem("theme", JSON.stringify(darkMode))
}

button.addEventListener("click", themeChange); 
