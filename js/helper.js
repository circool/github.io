function setInit() {
    document.getElementById('description').innerHTML = x[0];
    document.getElementById('body').style.backgroundImage= x[1];
    document.getElementById('main').style.color= x[2];

}
function setMode (notes, clr, pict) {
    document.getElementById('description').innerHTML = notes;
    document.getElementById('main').style.color = clr;
    document.getElementById('body').style.backgroundImage = pict;


}

function setDescription (notes) {
    document.getElementById('description').innerHTML = notes;
}