let i = 0;
let n = 0;
let currentGallery = 0;
let currentIndex;

const headshotArray = [
    "workImg/headshot/arden1.jpg",
    "workImg/headshot/arden2.jpg",
    "workImg/headshot/aja1.jpg",
    "workImg/headshot/evan1.jpg",
    "workImg/headshot/huy1.jpg",
    "workImg/headshot/huy2.jpg",
    "workImg/headshot/Laurel1.jpg",
    "workImg/headshot/Laurel2.jpg",
    "workImg/headshot/Laurel3.jpg",
    "workImg/headshot/vivi1.jpg"
]
const portraitArray = [
    "workImg/portrait/julie4.jpg",
    "workImg/portrait/julie1.jpg",
    "workImg/portrait/julie2.jpg",
    "workImg/portrait/julie3.jpg",
    "workImg/portrait/julie5.jpg",
    "workImg/portrait/anella1.jpg",
    "workImg/portrait/anella2.jpg",
    "workImg/portrait/anella3.jpg",
    "workImg/portrait/Bloodshot1.jpg",
    "workImg/portrait/Bloodshot2.jpg",
    "workImg/portrait/Bloodshot3.jpg",
    "workImg/other/ghost1.jpg",
    "workImg/other/ghost2.jpg",
    "workImg/grad/kana5.JPG",
    "workImg/grad/kana7.JPG"
]
const production1Array = [
    "workImg/production/godspell/godspell1.JPG",
    "workImg/production/godspell/godspell2.JPG",
    "workImg/production/godspell/godspell3.JPG",
    "workImg/production/godspell/godspell4.JPG",
    "workImg/production/godspell/godspell5.JPG",
    "workImg/production/godspell/godspell6.JPG",
    "workImg/production/godspell/godspell7.JPG",
    "workImg/production/godspell/godspell8.JPG",
    "workImg/production/godspell/godspell9.JPG",
    "workImg/production/godspell/godspell10.JPG",
    "workImg/production/godspell/godspell11.JPG",
    "workImg/production/godspell/godspell12.JPG",
    "workImg/production/godspell/godspell13.JPG",
    "workImg/production/godspell/godspell14.JPG",
    "workImg/production/godspell/godspell15.JPG",
    "workImg/production/godspell/godspell16.JPG",
    "workImg/production/godspell/godspell17.JPG",
    "workImg/production/godspell/godspell18.JPG",
    "workImg/production/godspell/godspell20.JPG",
    "workImg/production/godspell/godspell19.JPG"
]
const production2Array = [
    "workImg/production/artists/artists1.JPG",
    "workImg/production/artists/artists2.JPG",
    "workImg/production/artists/artists3.JPG",
    "workImg/production/artists/artists4.JPG",
    "workImg/production/artists/artists5.JPG",
    "workImg/production/artists/artists6.JPG",
    "workImg/production/artists/artists7.JPG",
    "workImg/production/artists/artists8.JPG",
    "workImg/production/artists/artists9.JPG",
    "workImg/production/artists/artists10.JPG",
    "workImg/production/artists/artists11.JPG",
    "workImg/production/artists/artists12.JPG",
    "workImg/production/artists/artists13.JPG",
    "workImg/production/artists/artists14.JPG",
    "workImg/production/artists/artists15.JPG",
]
const eventArray = [
    "workImg/event/shaddi/shaddi1.jpg",
    "workImg/event/shaddi/shaddi2.jpg",
    "workImg/event/shaddi/shaddi3.jpg",
    "workImg/event/shaddi/shaddi4.jpg",
    "workImg/event/shaddi/shaddi5.jpg",
    "workImg/event/shaddi/shaddi6.jpg",
    "workImg/event/shaddi/shaddi7.jpg",
    "workImg/event/shaddi/shaddi8.jpg",
    "workImg/event/shaddi/shaddi10.jpg",
    "workImg/event/shaddi/shaddi12.jpg",
    "workImg/event/shaddi/shaddi11.jpg",
    "workImg/event/shaddi/shaddi13.jpg",
    "workImg/event/shaddi/shaddi15.jpg",
    "workImg/event/shaddi/shaddi16.jpg",
    "workImg/event/shaddi/shaddi17.jpg",
    "workImg/event/shaddi/shaddi18.jpg",
    "workImg/event/shaddi/shaddi19.jpg",
    "workImg/event/shaddi/shaddi20.jpg",
    "workImg/event/shaddi/shaddi9.jpg",
    "workImg/event/shaddi/shaddi14.jpg"
]
const gradArray = [
    "workImg/grad/Ara5.JPG",
    "workImg/grad/Ara1.JPG",
    "workImg/grad/Ara2.JPG",
    "workImg/grad/Ara9.JPG",
    "workImg/grad/Gill4.JPG",
    "workImg/grad/Gill8.JPG",
    "workImg/grad/Gill10.JPG",
    "workImg/grad/Gill15.JPG",
    "workImg/grad/Gill20.JPG",
    "workImg/grad/Gill24.JPG",
    "workImg/grad/Gill25.JPG",
    "workImg/grad/kana2.JPG",
    "workImg/grad/kana8.JPG",
    "workImg/grad/kana10.JPG"
]

function gallery(){
    //headshot
    for (let i=0; i < headshotArray.length; i++){
        let img = document.createElement("img");
        let src = document.getElementById("headshotGallery");

        img.src = "../../" + headshotArray[i];
        img.addEventListener('click', function(){
            currentIndex = i;
            showOverlay(this.src);
        })
        src.appendChild(img);
    }
    //production 1 (God Spell)
    for (let i=0; i < production1Array.length; i++){
        let div = document.createElement("div");
        let img = document.createElement("img");
        let src = document.getElementById("production1Gallery");

        img.src = "../../" + production1Array[i];
        img.addEventListener('click', function(){
            currentIndex = i;
            showOverlay(this.src);
        })
        div.classList.add("image-container");
        div.appendChild(img);
        src.appendChild(div);
    }
    //production 2 (We are Artists)
    for (i=0; i < production2Array.length; i++){
        let img = document.createElement("img");
        let src = document.getElementById("production2Gallery");

        img.src = "../../" + production2Array[i];
        img.addEventListener('click', function(){
            currentIndex = i;
            showOverlay(this.src);
        })
        src.appendChild(img);
    }
    //Graduation
    for (i=0; i < gradArray.length; i++){
        let div = document.createElement("div");
        let img = document.createElement("img");
        let src = document.getElementById("gradGallery");

        img.src = "../../" + gradArray[i];
        img.addEventListener('click', function(){
            currentIndex = i;
            showOverlay(this.src);
        })
        div.classList.add("image-container");
        div.appendChild(img);
        src.appendChild(div);
    }
    //event
    for (i=0; i < eventArray.length; i++){
        let div = document.createElement("div");
        let img = document.createElement("img");
        let src = document.getElementById("eventGallery");

        img.src = "../../" + eventArray[i];
        img.addEventListener('click', function(){
            currentIndex = i;
            showOverlay(this.src);
        })
        div.classList.add("image-container");
        div.appendChild(img);
        src.appendChild(img);
    }
    //portraits
    for (i=0; i < portraitArray.length-1; i++){
        let div = document.createElement("div");
        let img = document.createElement("img");
        let src = document.getElementById("portraitGallery");

        img.src = "../../" + portraitArray[i];
        img.addEventListener('click', function(){
            currentIndex = i;
            showOverlay(this.src);
        })
        div.classList.add("image-container");
        div.appendChild(img);
        src.appendChild(img);
    }
} 

// overlay
function showOverlay(src) {
    const overlayImage = document.getElementById('overlayImage');
    const overlay = document.getElementById('overlay');

    overlayImage.src = src;
    overlay.style.display = 'flex';
    for(let i=0; i < headshotArray.length -1; i++){
        if(overlayImage.src.includes(headshotArray[i])){
            currentIndex = i;
            return;
        }
    }
    for(let i=0; i < production1Array.length -1; i++){
        if(overlayImage.src.includes(production1Array[i])){
            currentIndex = i;
            currentGallery = 1;
            return
        }
    }
    for(let i=0; i < production2Array.length -1; i++){
        if(overlayImage.src.includes(production2Array[i])){
            overlay.style.display = 'flex';
            currentIndex = i;
            currentGallery = 2;
            return;
        }
    }
    for(let i=0; i < gradArray.length -1; i++){
        if(overlayImage.src.includes(gradArray[i])){
            currentIndex = i;
            return
        }
    }
    for(let i=0; i < eventArray.length -1; i++){
        if(overlayImage.src.includes(eventArray[i])){
            currentIndex = i;
            return
        }
    }
    for(let i=0; i < portraitArray.length -1; i++){
        if(overlayImage.src.includes(portraitArray[i])){
            currentIndex = i;
            return
        }
    }
}

//headshot functions
function nextHeadshot(){
    if (currentIndex < headshotArray.length - 1){
        currentIndex += 1;
    }
    updateHeadshot();
}
function prevHeadshot(){
    if (currentIndex > 0){
        currentIndex -= 1;
    }
    updateHeadshot();
}
function updateHeadshot(){
    const overlayImage = document.getElementById('overlayImage');
    overlayImage.src = "../../" + headshotArray[currentIndex];
}

//Production functions
function nextProduction(){
    const overlayImage = document.getElementById('overlayImage');

    if (currentGallery == 1){
        for(let i=0; i < production1Array.length -1; i++){
            if(overlayImage.src.includes(production1Array[i])){
                if (currentIndex < production1Array.length - 1){
                    currentIndex += 1;
                }
                updateProduction1();
                return;
            }
        }
    }else if (currentGallery == 2){
        for(let i=0; i < production2Array.length -1; i++){
            if(overlayImage.src.includes(production2Array[i])){
                if (currentIndex < production2Array.length - 1){
                    currentIndex += 1;
                    console.log(currentIndex);
                }
                updateProduction2();
                return;
            }
        }
    } 
}
function prevProduction(){
    const overlayImage = document.getElementById('overlayImage');
    if (currentGallery == 1){
        for(let i=0; i < production1Array.length -1; i++){
            if(overlayImage.src.includes(production1Array[i])){
                if (currentIndex > 0){
                    currentIndex -= 1;
                }
                updateProduction1();
                return;
            }
        }
    }else if (currentGallery == 2){
        for(let i=0; i < production2Array.length -1; i++){
            if(overlayImage.src.includes(production2Array[i])){
                if (currentIndex > 0){
                    currentIndex -= 1;
                }
                updateProduction2();
                return;
            }
        }
    } 
}
function updateProduction1(){
    const overlayImage = document.getElementById('overlayImage');
    overlayImage.src = "../../" + production1Array[currentIndex];
}
function updateProduction2(){
    const overlayImage = document.getElementById('overlayImage');
    overlayImage.src = "../../" + production2Array[currentIndex];
}

//grad functions
function nextGrad(){
    if (currentIndex < gradArray.length - 1){
        console.log(currentIndex);
        currentIndex += 1;
        console.log(currentIndex);
    }
    updateGrad();
}
function prevGrad(){
    if (currentIndex > 0){
        currentIndex -= 1;
    }
    updateGrad();
}
function updateGrad(){
    const overlayImage = document.getElementById('overlayImage');
    overlayImage.src = "../../" + gradArray[currentIndex];
}

//event functions
function nextEvent(){
    if (currentIndex < eventArray.length - 1){
        currentIndex += 1;
    }
    updateEvent();
}
function prevEvent(){
    if (currentIndex > 0){
        currentIndex -= 1;
    }
    updateEvent();
}
function updateEvent(){
    const overlayImage = document.getElementById('overlayImage');
    overlayImage.src = "../../" + eventArray[currentIndex];
}

//portrait functions
function nextPortrait(){
    if (currentIndex < portraitArray.length - 1){
        currentIndex += 1;
    }
    updateEvent();
}
function prevPortrait(){
    if (currentIndex > 0){
        currentIndex -= 1;
    }
    updateEvent();
}
function updateEvent(){
    const overlayImage = document.getElementById('overlayImage');
    overlayImage.src = "../../" + portraitArray[currentIndex];
}

function hideOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

document.getElementById('close').addEventListener('click', hideOverlay);

$(".drop").click(function(){
    $(".dropdown").toggle("fast");
  });
$(".drop").mouseleave(function(){
    $(".dropdown").slideUp("fast");
});

gallery();