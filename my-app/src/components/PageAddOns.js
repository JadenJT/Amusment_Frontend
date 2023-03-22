/*Adds navigation*/
const nav = document.querySelector('.navbar');
fetch('../../components/nav.html')
.then(res => res.text())
.then(data => {
    nav.innerHTML = data;
})

/*Adds footer*/
const ftr = document.querySelector('.footer');
fetch('../../components/footer.html')
.then(res => res.text())
.then(data => {
    ftr.innerHTML = data;
})