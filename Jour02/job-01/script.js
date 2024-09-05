document.addEventListener("DOMContentLoaded", () => {
    const myChangeBackgroundColor = () => {
        if(window.innerWidth >= 1337){
            document.documentElement.style.backgroundColor = "#ffb703";
        } else if(window.innerWidth < 1337 && window.innerWidth >= 505){
            document.documentElement.style.backgroundColor = "#d90429";
        } else {
            document.documentElement.style.backgroundColor = "#003049";
        }
    }

    myChangeBackgroundColor();
    window.addEventListener("resize", () => {myChangeBackgroundColor()});
})
