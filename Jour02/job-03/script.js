document.addEventListener("DOMContentLoaded", () => {
    function myDisplayText(){ 
        p.textContent = n;
    }

    function myTurnBold(){ 
        console.log("cl b")
        p.style.fontWeight = "bolder";
    }
    function myTurnItalic(){ 
        console.log("cl i")
        p.style.fontStyle = "italic";
    }
    function myClearText(){ 
        console.log("cl c")
        p.style.fontWeight = "normal";
        p.style.fontStyle = "normal";
    }

    const bold = document.getElementById("turn-text-bold");
    const italic = document.getElementById("turn-text-italic");
    const reset = document.getElementById("turn-clear-text");
    const p = document.getElementById("text-displayer");
  
    bold.addEventListener("click", ()=>{
        myTurnBold();
    })
    italic.addEventListener("click", ()=>{
        myTurnItalic();
    })
    reset.addEventListener("click", ()=>{
        myClearText();
    })
})