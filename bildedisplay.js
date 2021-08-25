
const vitnemål = document.querySelector("#vitnemål");
const modal = document.querySelector("#modal");




function displayModal() {
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

vitnemål.addEventListener("click", displayModal)
window.addEventListener("click", hideModal)