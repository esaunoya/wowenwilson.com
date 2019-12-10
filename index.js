function sayWow(){
    var ran = getRandom(23);

    if(ran == 23)
    {
        var path = 'wow/kachow.mp3';
    }
    else{
        var path = 'wow/wow' + ran + '.mp3';
    }

    var audio = new Audio(path);
    audio.play();
}

function getRandom(max) {
    return (Math.floor(Math.random() * 1000) % max) + 1;
}