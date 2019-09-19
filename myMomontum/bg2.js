const body = document.querySelector("body");

const IMG_NUM = 10;

function setBackImg(imgNum){
    const img = new Image();
    img.src = `images/${imgNum + 1}.jpg`;
    img.classList.add('bgImage');
    body.prepend(img);
}

function genRandom(){
    const imgNumber = Math.floor(Math.random() * IMG_NUM);
    return imgNumber;
}

function init(){
    const imgNum = genRandom();
    setBackImg(imgNum);
}

init();