function openModal(){
    document.querySelector('.modal').style.display = 'block'
    document.querySelector('#menu').style.display = 'none'
    document.querySelector('#close').style.display = 'block'
}

function closeModal(){
    document.querySelector('.modal').style.display = 'none'
    document.querySelector('#close').style.display = 'none'
    document.querySelector('#menu').style.display = 'block'
}