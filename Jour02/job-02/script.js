document.addEventListener("DOMContentLoaded", () => {
    function myAddCount(n){ 
        p.textContent = n;
    }

    const btn = document.getElementById("add-count-btn");
    const p = document.getElementById("count-displayer");
    let number = 0;
    myAddCount(number);
    btn.addEventListener("click", ()=>{
        number++;
        myAddCount(number);
    })
})