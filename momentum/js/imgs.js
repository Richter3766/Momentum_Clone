const background = document.querySelector("#background");

const imgName = []
const imgNum = 11;

for(let i = 0;i < imgNum;i++){
    imgName.push("img/" + String(i).padStart(3, "0") + ".jpg");
}

const imgIdx = Math.floor(Math.random()*imgName.length) ;
const curImg = imgName[imgIdx];

const newImg = document.createElement("img");
newImg.src = curImg;

background.append(newImg);