function sayWow(){
    var ran = getRandom(22);
    var path = 'wow/wow' + ran + '.mp3';

    var audio = new Audio(path);
    audio.play();
}

function getRandom(max) {
    return Math.floor(Math.random() * 1000) % max;
}