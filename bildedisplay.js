
const vitnemålbtn = document.querySelector("#vitnemålbtn");
const modal = document.querySelector("#modal");




function displayModal(e) {
    e.preventDefault()
    modal.style.display = "block"
}

function hideModal(e) {
    console.log((e.target != modal) );
    if (e.target === modal) {
        console.log("yo");
        modal.style.display = "none"
        // window.removeEventListener("click", hideModal)
    }
}

vitnemålbtn.addEventListener("click", displayModal)
window.addEventListener("click", hideModal)