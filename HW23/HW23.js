const animateHeading = () => {
    let heading = document.getElementById('heading1');
    heading.classList.add('w3-animate-left');
}
function changeBG() {
    let theDiv = document.getElementById('div1');
    theDiv.style.backgroundColor = 'Green';
    theDiv.style.color = 'White';
    theDiv.style.textAlign = 'Center';
}
const createPara = () => {
    let theDiv = document.getElementById('div2');
    let p = document.createElement('p');
    p.innerText = 'The real story!!!';
    theDiv.appendChild(p);
    theDiv.classList.add('Colorfont');
}

