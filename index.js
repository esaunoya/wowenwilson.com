var wows_paths = [  "wow/wow0.mp3",
                    "wow/wow1.mp3",
                    "wow/wow2.mp3",
                    "wow/wow3.mp3",
                    "wow/wow4.mp3",
                    "wow/wow5.mp3",
                    "wow/wow6.mp3",
                    "wow/wow7.mp3",
                    "wow/wow8.mp3",
                    "wow/wow9.mp3",
                    "wow/wow10.mp3",
                    "wow/wow11.mp3",
                    "wow/wow12.mp3",
                    "wow/wow13.mp3",
                    "wow/wow14.mp3",
                    "wow/wow15.mp3",
                    "wow/wow16.mp3",
                    "wow/wow17.mp3",
                    "wow/wow18.mp3",
                    "wow/wow19.mp3",
                    "wow/wow20.mp3",
                    "wow/wow21.mp3",
                    "wow/wow22.mp3"];

var wows = [];
for(var x = 0; x < wows_paths.length; x++) wows.push(new Audio(wows_paths[x]));

function sayWow(){
    // var ran = getRandom(23);

    // var path = `wow/${ran == 23 ? 'kachow' : 'wow'+ran}.mp3`;
    // var audio = new Audio(path);
    wows[getRandom(wows_paths.length)].play();
}

function getRandom(max) {
    return (Math.floor(Math.random() * 1000) % max);
}