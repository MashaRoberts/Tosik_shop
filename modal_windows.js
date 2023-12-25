

// let modalOpen =document.querySelector('.popular-btn-basket');
// let modal = document.querySelector('.modal-over');
// let modalClose = document.querySelector('.content_close');
// modalOpen.onclick = function(){
//     modal.style.display = "block";
// }


// modalClose.onclick = function(){
//     modal.style.display = "none";
// }
function showModal(modalName){
    let modal = document.querySelector(modalName);
    modal.style.display = "block";
}


function closeModal(modalName){
    let modal = document.querySelector(modalName);
    modal.style.display = "none";
}


