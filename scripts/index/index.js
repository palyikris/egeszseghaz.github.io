
let topnavOption = document.querySelector("#topnavOption")

topnavOption.addEventListener("mouseover", () => {
    document.getElementById("topnavSpan").style.width = "100%"
})
topnavOption.addEventListener("mouseout", () => {
    document.getElementById("topnavSpan").style.width = "0%"
})

// ! --------------------------------------------------------------

let topnavOption1 = document.querySelector("#topnavOption1")

topnavOption1.addEventListener("mouseover", () => {
    document.getElementById("topnavSpan1").style.width = "100%"
})
topnavOption1.addEventListener("mouseout", () => {
    document.getElementById("topnavSpan1").style.width = "0%"
})

// ! ---------------------------------------------------------------

let topnavOption2 = document.querySelector("#topnavOption2")

topnavOption2.addEventListener("mouseover", () => {
    document.getElementById("topnavSpan2").style.width = "100%"
})
topnavOption2.addEventListener("mouseout", () => {
    document.getElementById("topnavSpan2").style.width = "0%"
})

// ! -------------------------------------------------------------

let topnavOption3 = document.querySelector("#topnavOption3")

topnavOption3.addEventListener("mouseover", () => {
    document.getElementById("topnavSpan3").style.width = "100%"
})
topnavOption3.addEventListener("mouseout", () => {
    document.getElementById("topnavSpan3").style.width = "0%"
})

// ! ------------------------------------------------------------

let topnavOption4 = document.querySelector("#topnavOption4")

topnavOption4.addEventListener("mouseover", () => {
    document.getElementById("topnavSpan4").style.width = "100%"
})
topnavOption4.addEventListener("mouseout", () => {
    document.getElementById("topnavSpan4").style.width = "0%"
})


// ! ---------------------------------------------------------------------------------------

function toSecondPage(){
    let pages = document.querySelectorAll(".page");
    pages.forEach(page => {
        page.style.display = "none";
    })
    document.getElementById("second").style.display = "flex";
    let spans = document.querySelectorAll(".topnav button span")
    spans.forEach(span => {
        span.style.width = "0";
    })
    document.getElementById("topnavSpan1").style.width = "100%"
}

// ! ------------------------------------------------------------------

function toThirdPage(){
    let pages = document.querySelectorAll(".page");
    pages.forEach(page => {
        page.style.display = "none";
    })
    document.getElementById("third").style.display = "flex";
    let spans = document.querySelectorAll(".topnav button span")
    spans.forEach(span => {
        span.style.width = "0";
    })
    document.getElementById("topnavSpan2").style.width = "100%"
}

// ! -------------------------------------------------------------------------

function toFourthPage(){
    let pages = document.querySelectorAll(".page");
    pages.forEach(page => {
        page.style.display = "none";
    })
    document.getElementById("fourth").style.display = "flex";
    let spans = document.querySelectorAll(".topnav button span")
    spans.forEach(span => {
        span.style.width = "0";
    })
    document.getElementById("topnavSpan3").style.width = "100%"
}

// ! -------------------------------------------------------------------

function toFifthPage(){
    let pages = document.querySelectorAll(".page");
    pages.forEach(page => {
        page.style.display = "none";
    })
    document.getElementById("fifth").style.display = "flex";
    let spans = document.querySelectorAll(".topnav button span")
    spans.forEach(span => {
        span.style.width = "0";
    })
    document.getElementById("topnavSpan4").style.width = "100%"
}

// ! -------------------------------------------------------------------

function toFirstPage(){
    let pages = document.querySelectorAll(".page");
    pages.forEach(page => {
        page.style.display = "none";
    })
    document.getElementById("first").style.display = "flex";
    let spans = document.querySelectorAll(".topnav button span")
    spans.forEach(span => {
        span.style.width = "0";
    })
    document.getElementById("topnavSpan").style.width = "100%"
}

