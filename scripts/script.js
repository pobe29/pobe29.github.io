let myButton = document.querySelector("button")


function getRecipes() {
    var path = 'recipes/',
    files = ['Bibimbap-with-Flank-Steak-and-Veggies.pdf', 'fra-diavolo-sauce-with-pasta.pdf', 
    'Herbes-de-Provence-Chicken.pdf'],
    i = Math.floor(Math.random()*files.length);
    var url = (path+files[i]);
    window.location.href = url
}


myButton.onclick = () => {
    getRecipes();
}