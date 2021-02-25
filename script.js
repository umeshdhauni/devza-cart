function showPanel(val) {
    let header = document.querySelector('#mainHeader');
    if (val) {
        header.classList.add('active');
    }
    else {
        header.classList.remove('active');
    }
}