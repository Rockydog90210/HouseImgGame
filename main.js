placeGuess = document.getElementById('submitGuess')
const episodeGuess = document.getElementById('episodeGuess')
wrongOrRight = document.getElementById('wrongOrRight')
playAgain = document.getElementById('playAgain')
noRepeatFun = document.getElementById('noRepeatButtion')
hardModeButton = document.getElementById('hardModeEnable')

Correct = document.getElementById('Right')
Incorrect = document.getElementById('Wrong')
Percent = document.getElementById('Percent')

var totCorrect = 0;
var totWrong = 0;
let alreadyGussed = false
let noRepeatButt = false
let hardMode = false

window.addEventListener('load', restartArray);
window.addEventListener('load', tryAgain);
noRepeatFun.addEventListener('click', toggleRepeat);
hardModeButton.addEventListener('click', hardModeToggle);

episodeGuess.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        check();
    }
});
function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}
function toggleRepeat() {
    if (noRepeatButt == false) {
        noRepeatButt = true;
        document.getElementById("noRepeatButtion").style.backgroundColor = '#9da4ad';
    } else if (noRepeatButt == true) {
        noRepeatButt = false;
        document.getElementById("noRepeatButtion").style.backgroundColor = "white";
    }
}

placeGuess.addEventListener('click', check);
playAgain.addEventListener('click', tryAgain);

function updateStat() {
    ++totWrong;
    Correct.textContent = totCorrect;
    Incorrect.textContent = totWrong;
    Percent.textContent = ((totCorrect / totWrong) * 100).toFixed(2);
    if (hardMode == true) {
        if (totCorrect !== totWrong) {
            totCorrect = 0;
            totWrong = 0;
            Correct.textContent = totCorrect;
            Incorrect.textContent = totWrong;
            Percent.textContent = "0"
                restartArray();
        }
    }
}
function hardModeToggle() {
    if (hardMode == false) {
        hardMode = true;
        document.getElementById("hardModeEnable").style.backgroundColor = 'red';
    } else if (hardMode == true) {
        hardMode = false;
        document.getElementById("hardModeEnable").style.backgroundColor = 'white';
    }
}
function restartArray() {
    episodes = ['Season 1 Episode 1', 'Season 1 Episode 2', 'Season 1 Episode 3', 'Season 1 Episode 4', 'Season 1 Episode 5', 'Season 1 Episode 6', 'Season 1 Episode 7', 'Season 1 Episode 8', ]//'Season 1 Episode 9', 'Season 1 Episode 10', 'Season 1 Episode 11', 'Season 1 Episode 12', 'Season 1 Episode 13', 'Season 1 Episode 14', 'Season 1 Episode 15', 'Season 1 Episode 16', 'Season 1 Episode 17', 'Season 1 Episode 18', 'Season 1 Episode 19', 'Season 1 Episode 20', 'Season 1 Episode 21', 'Season 2 Episode 1', 'Season 2 Episode 2', 'Season 2 Episode 3', 'Season 2 Episode 4', 'Season 2 Episode 5', 'Season 2 Episode 6', 'Season 2 Episode 7', 'Season 2 Episode 8', 'Season 2 Episode 9', 'Season 2 Episode 10', 'Season 2 Episode 11', 'Season 2 Episode 12', 'Season 2 Episode 13', 'Season 2 Episode 14', 'Season 2 Episode 15', 'Season 2 Episode 16', 'Season 2 Episode 17', 'Season 2 Episode 18', 'Season 2 Episode 19', 'Season 2 Episode 20', 'Season 2 Episode 21', 'Season 2 Episode 21', 'Season 2 Episode 22', 'Season 2 Episode 23', 'Season 2 Episode 23', 'Season 2 Episode 24', 'Season 3 Episode 1', 'Season 3 Episode 2', 'Season 3 Episode 3', 'Season 3 Episode 4', 'Season 3 Episode 5', 'Season 3 Episode 6', 'Season 3 Episode 7', 'Season 3 Episode 8', 'Season 3 Episode 9', 'Season 3 Episode 10', 'Season 3 Episode 11', 'Season 3 Episode 12', 'Season 3 Episode 13', 'Season 3 Episode 14', 'Season 3 Episode 15', 'Season 3 Episode 16', 'Season 3 Episode 17', 'Season 3 Episode 18', 'Season 3 Episode 19', 'Season 3 Episode 20', 'Season 3 Episode 21', 'Season 3 Episode 22', 'Season 3 Episode 23', 'Season 3 Episode 24', 'Season 4 Episode 1', 'Season 4 Episode 2', 'Season 4 Episode 3', 'Season 4 Episode 4', 'Season 4 Episode 5', 'Season 4 Episode 6', 'Season 4 Episode 7', 'Season 4 Episode 8', 'Season 4 Episode 9', 'Season 4 Episode 10', 'Season 4 Episode 11', 'Season 4 Episode 12', 'Season 4 Episode 13', 'Season 4 Episode 14', 'Season 4 Episode 15', 'Season 4 Episode 16', 'Season 5 Episode 1', 'Season 5 Episode 2', 'Season 5 Episode 3', 'Season 5 Episode 4', 'Season 5 Episode 5', 'Season 5 Episode 6', 'Season 5 Episode 7', 'Season 5 Episode 8', 'Season 5 Episode 9', 'Season 5 Episode 10', 'Season 5 Episode 11', 'Season 5 Episode 12', 'Season 5 Episode 13', 'Season 5 Episode 14', 'Season 5 Episode 15', 'Season 5 Episode 16', 'Season 5 Episode 17', 'Season 5 Episode 18', 'Season 5 Episode 19', 'Season 5 Episode 20', 'Season 5 Episode 21', 'Season 5 Episode 22', 'Season 5 Episode 23', 'Season 5 Episode 24', 'Season 6 Episode 1', 'Season 6 Episode 2', 'Season 6 Episode 3', 'Season 6 Episode 4', 'Season 6 Episode 5', 'Season 6 Episode 6', 'Season 6 Episode 7', 'Season 6 Episode 8', 'Season 6 Episode 9', 'Season 6 Episode 10', 'Season 6 Episode 11', 'Season 6 Episode 12', 'Season 6 Episode 13', 'Season 6 Episode 14', 'Season 6 Episode 15', 'Season 6 Episode 16', 'Season 6 Episode 17', 'Season 6 Episode 18', 'Season 6 Episode 19', 'Season 6 Episode 20', 'Season 6 Episode 21', 'Season 7 Episode 1', ];
    pilotArray = ['images/Pliot/Pilot1.png', 'images/Pliot/Pilot2.png', 'images/Pliot/Pilot3.png', 'images/Pliot/Pilot4.png', 'images/Pliot/Pilot5.png', 'images/Pliot/Pilot6.png', 'images/Pliot/Pilot7.png', 'images/Pliot/Pilot8.png', 'images/Pliot/Pilot9.png', 'images/Pliot/Pilot10.png', 'images/Pliot/Pilot11.png', 'images/Pliot/Pilot12.png', 'images/Pliot/Pilot13.png', 'images/Pliot/Pilot14.png', 'images/Pliot/Pilot15.png', 'images/Pliot/Pilot16.png', 'images/Pliot/Pilot17.png', 'images/Pliot/Pilot18.png', 'images/Pliot/Pilot19.png', 'images/Pliot/Pilot20.png', 'images/Pliot/Pilot21.png', 'images/Pliot/Pilot22.png', 'images/Pliot/Pilot23.png', 'images/Pliot/Pilot24.png', 'images/Pliot/Pilot25.png', 'images/Pliot/Pilot26.png', 'images/Pliot/Pilot27.png', 'images/Pliot/Pilot28.png', 'images/Pliot/Pilot29.png', 'images/Pliot/Pilot30.png', 'images/Pliot/Pilot31.png', 'images/Pliot/Pilot32.png', 'images/Pliot/Pilot33.png', 'images/Pliot/Pilot34.png', 'images/Pliot/Pilot35.png', 'images/Pliot/Pilot36.png', 'images/Pliot/Pilot37.png', 'images/Pliot/Pilot38.png', 'images/Pliot/Pilot39.png', 'images/Pliot/Pilot40.png', 'images/Pliot/Pilot41.png', 'images/Pliot/Pilot42.png', 'images/Pliot/Pilot43.png', 'images/Pliot/Pilot44.png', 'images/Pliot/Pilot45.png', 'images/Pliot/Pilot46.png', 'images/Pliot/Pilot47.png', 'images/Pliot/Pilot48.png', 'images/Pliot/Pilot49.png', 'images/Pliot/Pilot50.png', 'images/Pliot/Pilot51.png', 'images/Pliot/Pilot52.png', 'images/Pliot/Pilot53.png', 'images/Pliot/Pilot54.png', 'images/Pliot/Pilot55.png', 'images/Pliot/Pilot56.png', 'images/Pliot/Pilot57.png', 'images/Pliot/Pilot58.png', 'images/Pliot/Pilot59.png', 'images/Pliot/Pilot60.png', 'images/Pliot/Pilot61.png', 'images/Pliot/Pilot62.png', 'images/Pliot/Pilot63.png', 'images/Pliot/Pilot64.png', 'images/Pliot/Pilot65.png', 'images/Pliot/Pilot66.png', 'images/Pliot/Pilot67.png', 'images/Pliot/Pilot68.png', 'images/Pliot/Pilot69.png', 'images/Pliot/Pilot70.png', 'images/Pliot/Pilot71.png', 'images/Pliot/Pilot72.png', 'images/Pliot/Pilot73.png', 'images/Pliot/Pilot74.png', 'images/Pliot/Pilot75.png', 'images/Pliot/Pilot76.png', 'images/Pliot/Pilot77.png', 'images/Pliot/Pilot78.png', 'images/Pliot/Pilot79.png', 'images/Pliot/Pilot80.png', 'images/Pliot/Pilot81.png', 'images/Pliot/Pilot82.png', 'images/Pliot/Pilot83.png', 'images/Pliot/Pilot84.png', 'images/Pliot/Pilot85.png', 'images/Pliot/Pilot86.png', 'images/Pliot/Pilot87.png', 'images/Pliot/Pilot88.png', 'images/Pliot/Pilot89.png', 'images/Pliot/Pilot90.png', 'images/Pliot/Pilot91.png', 'images/Pliot/Pilot92.png', 'images/Pliot/Pilot93.png', 'images/Pliot/Pilot94.png', 'images/Pliot/Pilot95.png', 'images/Pliot/Pilot96.png', 'images/Pliot/Pilot97.png', 'images/Pliot/Pilot98.png', 'images/Pliot/Pilot99.png', 'images/Pliot/Pilot100.png', 'images/Pliot/Pilot101.png', 'images/Pliot/Pilot102.png', ];
    paternityArray = ['images/Paternity/Paternity1.png', 'images/Paternity/Paternity2.png', 'images/Paternity/Paternity3.png', 'images/Paternity/Paternity4.png', 'images/Paternity/Paternity5.png', 'images/Paternity/Paternity6.png', 'images/Paternity/Paternity7.png', 'images/Paternity/Paternity8.png', 'images/Paternity/Paternity9.png', 'images/Paternity/Paternity10.png', 'images/Paternity/Paternity11.png', 'images/Paternity/Paternity12.png', 'images/Paternity/Paternity13.png', 'images/Paternity/Paternity14.png', 'images/Paternity/Paternity15.png', 'images/Paternity/Paternity16.png', 'images/Paternity/Paternity17.png', 'images/Paternity/Paternity18.png', 'images/Paternity/Paternity19.png', 'images/Paternity/Paternity20.png', 'images/Paternity/Paternity21.png', 'images/Paternity/Paternity22.png', 'images/Paternity/Paternity23.png', 'images/Paternity/Paternity24.png', 'images/Paternity/Paternity25.png', 'images/Paternity/Paternity26.png', 'images/Paternity/Paternity27.png', 'images/Paternity/Paternity28.png', 'images/Paternity/Paternity29.png', 'images/Paternity/Paternity30.png', 'images/Paternity/Paternity31.png', 'images/Paternity/Paternity32.png', 'images/Paternity/Paternity33.png', 'images/Paternity/Paternity34.png', 'images/Paternity/Paternity35.png', 'images/Paternity/Paternity36.png', 'images/Paternity/Paternity37.png', 'images/Paternity/Paternity38.png', 'images/Paternity/Paternity39.png', 'images/Paternity/Paternity40.png', 'images/Paternity/Paternity41.png', 'images/Paternity/Paternity42.png', 'images/Paternity/Paternity43.png', 'images/Paternity/Paternity44.png', 'images/Paternity/Paternity45.png', 'images/Paternity/Paternity46.png', 'images/Paternity/Paternity47.png', 'images/Paternity/Paternity48.png', 'images/Paternity/Paternity49.png', 'images/Paternity/Paternity50.png', 'images/Paternity/Paternity51.png', 'images/Paternity/Paternity52.png', 'images/Paternity/Paternity53.png', 'images/Paternity/Paternity54.png', 'images/Paternity/Paternity55.png', 'images/Paternity/Paternity56.png', 'images/Paternity/Paternity57.png', 'images/Paternity/Paternity58.png', 'images/Paternity/Paternity59.png', 'images/Paternity/Paternity60.png', 'images/Paternity/Paternity61.png', 'images/Paternity/Paternity62.png', 'images/Paternity/Paternity63.png', 'images/Paternity/Paternity64.png', 'images/Paternity/Paternity65.png', 'images/Paternity/Paternity66.png', 'images/Paternity/Paternity67.png', 'images/Paternity/Paternity68.png', 'images/Paternity/Paternity69.png', 'images/Paternity/Paternity70.png', 'images/Paternity/Paternity71.png', 'images/Paternity/Paternity72.png', 'images/Paternity/Paternity73.png', 'images/Paternity/Paternity74.png', 'images/Paternity/Paternity75.png', 'images/Paternity/Paternity76.png', 'images/Paternity/Paternity77.png', 'images/Paternity/Paternity78.png', 'images/Paternity/Paternity79.png', 'images/Paternity/Paternity80.png', 'images/Paternity/Paternity81.png', 'images/Paternity/Paternity82.png', 'images/Paternity/Paternity83.png', 'images/Paternity/Paternity84.png', 'images/Paternity/Paternity85.png', 'images/Paternity/Paternity86.png', 'images/Paternity/Paternity87.png', 'images/Paternity/Paternity88.png', 'images/Paternity/Paternity89.png', 'images/Paternity/Paternity90.png', 'images/Paternity/Paternity91.png', 'images/Paternity/Paternity92.png', 'images/Paternity/Paternity93.png', 'images/Paternity/Paternity94.png', 'images/Paternity/Paternity95.png', 'images/Paternity/Paternity96.png', 'images/Paternity/Paternity97.png', 'images/Paternity/Paternity98.png', 'images/Paternity/Paternity99.png', 'images/Paternity/Paternity100.png', 'images/Paternity/Paternity101.png', 'images/Paternity/Paternity102.png', 'images/Paternity/Paternity103.png', 'images/Paternity/Paternity104.png', 'images/Paternity/Paternity105.png', 'images/Paternity/Paternity106.png', 'images/Paternity/Paternity107.png', 'images/Paternity/Paternity108.png', 'images/Paternity/Paternity109.png', 'images/Paternity/Paternity110.png', 'images/Paternity/Paternity111.png', 'images/Paternity/Paternity112.png', 'images/Paternity/Paternity113.png', 'images/Paternity/Paternity114.png', 'images/Paternity/Paternity115.png', 'images/Paternity/Paternity116.png', 'images/Paternity/Paternity117.png', 'images/Paternity/Paternity118.png', 'images/Paternity/Paternity119.png', 'images/Paternity/Paternity120.png', 'images/Paternity/Paternity121.png', 'images/Paternity/Paternity122.png', 'images/Paternity/Paternity123.png', ];
    occamArray = ['images/Occam/Occam1.png', 'images/Occam/Occam2.png', 'images/Occam/Occam3.png', 'images/Occam/Occam4.png', 'images/Occam/Occam5.png', 'images/Occam/Occam6.png', 'images/Occam/Occam7.png', 'images/Occam/Occam8.png', 'images/Occam/Occam9.png', 'images/Occam/Occam10.png', 'images/Occam/Occam11.png', 'images/Occam/Occam12.png', 'images/Occam/Occam13.png', 'images/Occam/Occam14.png', 'images/Occam/Occam15.png', 'images/Occam/Occam16.png', 'images/Occam/Occam17.png', 'images/Occam/Occam18.png', 'images/Occam/Occam18.png', 'images/Occam/Occam19.png', 'images/Occam/Occam20.png', 'images/Occam/Occam21.png', 'images/Occam/Occam22.png', 'images/Occam/Occam23.png', 'images/Occam/Occam24.png', 'images/Occam/Occam25.png', 'images/Occam/Occam26.png', 'images/Occam/Occam27.png', 'images/Occam/Occam28.png', 'images/Occam/Occam29.png', 'images/Occam/Occam30.png', 'images/Occam/Occam31.png', 'images/Occam/Occam32.png', 'images/Occam/Occam33.png', 'images/Occam/Occam34.png', 'images/Occam/Occam35.png', 'images/Occam/Occam36.png', 'images/Occam/Occam37.png', 'images/Occam/Occam38.png', 'images/Occam/Occam39.png', 'images/Occam/Occam40.png', 'images/Occam/Occam41.png', 'images/Occam/Occam42.png', 'images/Occam/Occam43.png', 'images/Occam/Occam44.png', 'images/Occam/Occam45.png', 'images/Occam/Occam46.png', 'images/Occam/Occam47.png', 'images/Occam/Occam48.png', 'images/Occam/Occam49.png', 'images/Occam/Occam50.png', 'images/Occam/Occam51.png', 'images/Occam/Occam52.png', 'images/Occam/Occam53.png', 'images/Occam/Occam54.png', 'images/Occam/Occam55.png', 'images/Occam/Occam56.png', 'images/Occam/Occam57.png', 'images/Occam/Occam58.png', 'images/Occam/Occam59.png', 'images/Occam/Occam60.png', 'images/Occam/Occam61.png', 'images/Occam/Occam62.png', 'images/Occam/Occam63.png', 'images/Occam/Occam64.png', 'images/Occam/Occam65.png', 'images/Occam/Occam66.png', 'images/Occam/Occam67.png', 'images/Occam/Occam68.png', 'images/Occam/Occam69.png', 'images/Occam/Occam70.png', 'images/Occam/Occam71.png', 'images/Occam/Occam72.png', 'images/Occam/Occam73.png', 'images/Occam/Occam74.png', 'images/Occam/Occam75.png', 'images/Occam/Occam76.png', 'images/Occam/Occam77.png', 'images/Occam/Occam78.png', 'images/Occam/Occam79.png', 'images/Occam/Occam80.png', 'images/Occam/Occam81.png', 'images/Occam/Occam82.png', 'images/Occam/Occam83.png', 'images/Occam/Occam84.png', 'images/Occam/Occam85.png', 'images/Occam/Occam86.png', 'images/Occam/Occam87.png', 'images/Occam/Occam88.png', 'images/Occam/Occam89.png', 'images/Occam/Occam90.png', 'images/Occam/Occam91.png', 'images/Occam/Occam92.png', 'images/Occam/Occam93.png', 'images/Occam/Occam94.png', 'images/Occam/Occam95.png', 'images/Occam/Occam96.png', 'images/Occam/Occam97.png', 'images/Occam/Occam98.png', 'images/Occam/Occam99.png', 'images/Occam/Occam100.png', 'images/Occam/Occam101.png', 'images/Occam/Occam102.png', 'images/Occam/Occam103.png', 'images/Occam/Occam104.png', 'images/Occam/Occam105.png', 'images/Occam/Occam106.png', 'images/Occam/Occam107.png', 'images/Occam/Occam108.png', 'images/Occam/Occam109.png', 'images/Occam/Occam110.png', 'images/Occam/Occam111.png', 'images/Occam/Occam112.png', 'images/Occam/Occam113.png', 'images/Occam/Occam114.png', 'images/Occam/Occam115.png', 'images/Occam/Occam116.png', 'images/Occam/Occam117.png', 'images/Occam/Occam118.png', 'images/Occam/Occam119.png', 'images/Occam/Occam120.png', 'images/Occam/Occam121.png', 'images/Occam/Occam122.png', 'images/Occam/Occam123.png', 'images/Occam/Occam124.png', 'images/Occam/Occam125.png', 'images/Occam/Occam126.png', 'images/Occam/Occam127.png', 'images/Occam/Occam128.png', 'images/Occam/Occam129.png', 'images/Occam/Occam130.png', 'images/Occam/Occam131.png', 'images/Occam/Occam132.png', 'images/Occam/Occam133.png', 'images/Occam/Occam134.png', 'images/Occam/Occam135.png', 'images/Occam/Occam136.png', 'images/Occam/Occam137.png', 'images/Occam/Occam138.png', 'images/Occam/Occam139.png', 'images/Occam/Occam140.png', 'images/Occam/Occam141.png', 'images/Occam/Occam142.png', 'images/Occam/Occam143.png', 'images/Occam/Occam144.png', 'images/Occam/Occam145.png', 'images/Occam/Occam146.png', 'images/Occam/Occam147.png', 'images/Occam/Occam148.png', 'images/Occam/Occam149.png', 'images/Occam/Occam150.png', ];
    MaternityArray = ['images/Maternity/Maternity1.png', 'images/Maternity/Maternity2.png', 'images/Maternity/Maternity3.png', 'images/Maternity/Maternity4.png', 'images/Maternity/Maternity5.png', 'images/Maternity/Maternity6.png', 'images/Maternity/Maternity7.png', 'images/Maternity/Maternity8.png', 'images/Maternity/Maternity9.png', 'images/Maternity/Maternity10.png', 'images/Maternity/Maternity11.png', 'images/Maternity/Maternity12.png', 'images/Maternity/Maternity13.png', 'images/Maternity/Maternity14.png', 'images/Maternity/Maternity15.png', 'images/Maternity/Maternity16.png', 'images/Maternity/Maternity17.png', 'images/Maternity/Maternity18.png', 'images/Maternity/Maternity19.png', 'images/Maternity/Maternity20.png', 'images/Maternity/Maternity21.png', 'images/Maternity/Maternity22.png', 'images/Maternity/Maternity23.png', 'images/Maternity/Maternity24.png', 'images/Maternity/Maternity25.png', 'images/Maternity/Maternity26.png', 'images/Maternity/Maternity27.png', 'images/Maternity/Maternity28.png', 'images/Maternity/Maternity29.png', 'images/Maternity/Maternity30.png', 'images/Maternity/Maternity31.png', 'images/Maternity/Maternity32.png', 'images/Maternity/Maternity33.png', 'images/Maternity/Maternity34.png', 'images/Maternity/Maternity35.png', 'images/Maternity/Maternity36.png', 'images/Maternity/Maternity37.png', 'images/Maternity/Maternity38.png', 'images/Maternity/Maternity39.png', 'images/Maternity/Maternity40.png', 'images/Maternity/Maternity41.png', 'images/Maternity/Maternity42.png', 'images/Maternity/Maternity43.png', 'images/Maternity/Maternity44.png', 'images/Maternity/Maternity45.png', 'images/Maternity/Maternity46.png', 'images/Maternity/Maternity47.png', 'images/Maternity/Maternity48.png', 'images/Maternity/Maternity49.png', 'images/Maternity/Maternity50.png', 'images/Maternity/Maternity51.png', 'images/Maternity/Maternity52.png', 'images/Maternity/Maternity53.png', 'images/Maternity/Maternity54.png', 'images/Maternity/Maternity55.png', 'images/Maternity/Maternity56.png', 'images/Maternity/Maternity57.png', 'images/Maternity/Maternity58.png', 'images/Maternity/Maternity59.png', 'images/Maternity/Maternity60.png', 'images/Maternity/Maternity61.png', 'images/Maternity/Maternity62.png', 'images/Maternity/Maternity63.png', 'images/Maternity/Maternity64.png', 'images/Maternity/Maternity65.png', 'images/Maternity/Maternity66.png', 'images/Maternity/Maternity67.png', 'images/Maternity/Maternity68.png', 'images/Maternity/Maternity69.png', 'images/Maternity/Maternity70.png', 'images/Maternity/Maternity71.png', 'images/Maternity/Maternity72.png', 'images/Maternity/Maternity73.png', 'images/Maternity/Maternity74.png', 'images/Maternity/Maternity75.png', 'images/Maternity/Maternity76.png', 'images/Maternity/Maternity77.png', 'images/Maternity/Maternity78.png', 'images/Maternity/Maternity79.png', 'images/Maternity/Maternity80.png', 'images/Maternity/Maternity81.png', 'images/Maternity/Maternity82.png', 'images/Maternity/Maternity83.png', 'images/Maternity/Maternity84.png', 'images/Maternity/Maternity85.png', 'images/Maternity/Maternity86.png', 'images/Maternity/Maternity87.png', 'images/Maternity/Maternity88.png', 'images/Maternity/Maternity89.png', 'images/Maternity/Maternity90.png', 'images/Maternity/Maternity91.png', 'images/Maternity/Maternity92.png', 'images/Maternity/Maternity93.png', 'images/Maternity/Maternity94.png', 'images/Maternity/Maternity95.png', 'images/Maternity/Maternity96.png', 'images/Maternity/Maternity97.png', 'images/Maternity/Maternity98.png', 'images/Maternity/Maternity99.png', 'images/Maternity/Maternity100.png', 'images/Maternity/Maternity101.png', 'images/Maternity/Maternity102.png', 'images/Maternity/Maternity103.png', 'images/Maternity/Maternity104.png', 'images/Maternity/Maternity105.png', 'images/Maternity/Maternity106.png', 'images/Maternity/Maternity107.png', 'images/Maternity/Maternity108.png', 'images/Maternity/Maternity109.png', 'images/Maternity/Maternity110.png', 'images/Maternity/Maternity111.png', 'images/Maternity/Maternity112.png', 'images/Maternity/Maternity113.png', 'images/Maternity/Maternity114.png', 'images/Maternity/Maternity115.png', 'images/Maternity/Maternity116.png', 'images/Maternity/Maternity117.png', 'images/Maternity/Maternity118.png', 'images/Maternity/Maternity119.png', ]
    DamnedArray = ['images/Damned/Damned1.png', 'images/Damned/Damned2.png', 'images/Damned/Damned3.png', 'images/Damned/Damned4.png', 'images/Damned/Damned4.png', 'images/Damned/Damned5.png', 'images/Damned/Damned6.png', 'images/Damned/Damned7.png', 'images/Damned/Damned8.png', 'images/Damned/Damned9.png', 'images/Damned/Damned10.png', 'images/Damned/Damned11.png', 'images/Damned/Damned12.png', 'images/Damned/Damned13.png', 'images/Damned/Damned14.png', 'images/Damned/Damned15.png', 'images/Damned/Damned16.png', 'images/Damned/Damned17.png', 'images/Damned/Damned18.png', 'images/Damned/Damned19.png', 'images/Damned/Damned20.png', 'images/Damned/Damned21.png', 'images/Damned/Damned22.png', 'images/Damned/Damned23.png', 'images/Damned/Damned24.png', 'images/Damned/Damned25.png', 'images/Damned/Damned26.png', 'images/Damned/Damned27.png', 'images/Damned/Damned28.png', 'images/Damned/Damned29.png', 'images/Damned/Damned30.png', 'images/Damned/Damned31.png', 'images/Damned/Damned32.png', 'images/Damned/Damned33.png', 'images/Damned/Damned34.png', 'images/Damned/Damned35.png', 'images/Damned/Damned36.png', 'images/Damned/Damned37.png', 'images/Damned/Damned38.png', 'images/Damned/Damned39.png', 'images/Damned/Damned40.png', 'images/Damned/Damned41.png', 'images/Damned/Damned42.png', 'images/Damned/Damned43.png', 'images/Damned/Damned44.png', 'images/Damned/Damned45.png', 'images/Damned/Damned46.png', 'images/Damned/Damned47.png', 'images/Damned/Damned48.png', 'images/Damned/Damned49.png', 'images/Damned/Damned50.png', 'images/Damned/Damned51.png', 'images/Damned/Damned52.png', 'images/Damned/Damned53.png', 'images/Damned/Damned54.png', 'images/Damned/Damned55.png', 'images/Damned/Damned56.png', 'images/Damned/Damned57.png', 'images/Damned/Damned58.png', 'images/Damned/Damned59.png', 'images/Damned/Damned60.png', 'images/Damned/Damned61.png', 'images/Damned/Damned62.png', 'images/Damned/Damned63.png', 'images/Damned/Damned64.png', 'images/Damned/Damned65.png', 'images/Damned/Damned66.png', 'images/Damned/Damned67.png', 'images/Damned/Damned68.png', 'images/Damned/Damned69.png', 'images/Damned/Damned70.png', 'images/Damned/Damned71.png', 'images/Damned/Damned72.png', 'images/Damned/Damned73.png', 'images/Damned/Damned74.png', 'images/Damned/Damned75.png', 'images/Damned/Damned76.png', 'images/Damned/Damned77.png', 'images/Damned/Damned78.png', 'images/Damned/Damned79.png', 'images/Damned/Damned80.png', 'images/Damned/Damned81.png', 'images/Damned/Damned82.png', 'images/Damned/Damned83.png', 'images/Damned/Damned84.png', 'images/Damned/Damned85.png', 'images/Damned/Damned86.png', 'images/Damned/Damned87.png', 'images/Damned/Damned88.png', 'images/Damned/Damned89.png', 'images/Damned/Damned90.png', 'images/Damned/Damned91.png', 'images/Damned/Damned92.png', 'images/Damned/Damned93.png', 'images/Damned/Damned94.png', 'images/Damned/Damned95.png', 'images/Damned/Damned96.png', 'images/Damned/Damned97.png', 'images/Damned/Damned98.png', 'images/Damned/Damned99.png', 'images/Damned/Damned100.png', 'images/Damned/Damned100.png', 'images/Damned/Damned101.png', 'images/Damned/Damned102.png', 'images/Damned/Damned103.png', 'images/Damned/Damned104.png', 'images/Damned/Damned105.png', 'images/Damned/Damned106.png', 'images/Damned/Damned107.png', 'images/Damned/Damned108.png', 'images/Damned/Damned109.png', 'images/Damned/Damned110.png', 'images/Damned/Damned111.png', 'images/Damned/Damned112.png', 'images/Damned/Damned113.png', 'images/Damned/Damned114.png', 'images/Damned/Damned115.png', 'images/Damned/Damned116.png', 'images/Damned/Damned117.png', 'images/Damned/Damned118.png', 'images/Damned/Damned119.png', 'images/Damned/Damned120.png', 'images/Damned/Damned121.png', 'images/Damned/Damned122.png', 'images/Damned/Damned123.png', 'images/Damned/Damned124.png', 'images/Damned/Damned125.png', 'images/Damned/Damned126.png', 'images/Damned/Damned127.png', 'images/Damned/Damned128.png', 'images/Damned/Damned129.png', 'images/Damned/Damned130.png', 'images/Damned/Damned131.png', 'images/Damned/Damned132.png', 'images/Damned/Damned133.png', 'images/Damned/Damned134.png', 'images/Damned/Damned135.png', 'images/Damned/Damned136.png', 'images/Damned/Damned137.png', 'images/Damned/Damned138.png', 'images/Damned/Damned139.png', ];
    MethodArray = ['images/Method/Method (1).png', 'images/Method/Method (2).png', 'images/Method/Method (3).png', 'images/Method/Method (4).png', 'images/Method/Method (5).png', 'images/Method/Method (6).png', 'images/Method/Method (7).png', 'images/Method/Method (8).png', 'images/Method/Method (9).png', 'images/Method/Method (10).png', 'images/Method/Method (11).png', 'images/Method/Method (12).png', 'images/Method/Method (13).png', 'images/Method/Method (14).png', 'images/Method/Method (15).png', 'images/Method/Method (16).png', 'images/Method/Method (17).png', 'images/Method/Method (18).png', 'images/Method/Method (19).png', 'images/Method/Method (20).png', 'images/Method/Method (21).png', 'images/Method/Method (22).png', 'images/Method/Method (23).png', 'images/Method/Method (24).png', 'images/Method/Method (25).png', 'images/Method/Method (26).png', 'images/Method/Method (27).png', 'images/Method/Method (28).png', 'images/Method/Method (29).png', 'images/Method/Method (30).png', 'images/Method/Method (31).png', 'images/Method/Method (32).png', 'images/Method/Method (33).png', 'images/Method/Method (34).png', 'images/Method/Method (35).png', 'images/Method/Method (36).png', 'images/Method/Method (37).png', 'images/Method/Method (38).png', 'images/Method/Method (39).png', 'images/Method/Method (40).png', 'images/Method/Method (41).png', 'images/Method/Method (42).png', 'images/Method/Method (43).png', 'images/Method/Method (44).png', 'images/Method/Method (45).png', 'images/Method/Method (46).png', 'images/Method/Method (47).png', 'images/Method/Method (48).png', 'images/Method/Method (49).png', 'images/Method/Method (50).png', 'images/Method/Method (51).png', 'images/Method/Method (52).png', 'images/Method/Method (53).png', 'images/Method/Method (54).png', 'images/Method/Method (55).png', 'images/Method/Method (56).png', 'images/Method/Method (57).png', 'images/Method/Method (58).png', 'images/Method/Method (59).png', 'images/Method/Method (60).png', 'images/Method/Method (61).png', 'images/Method/Method (62).png', 'images/Method/Method (63).png', 'images/Method/Method (64).png', 'images/Method/Method (65).png', 'images/Method/Method (66).png', 'images/Method/Method (67).png', 'images/Method/Method (68).png', 'images/Method/Method (69).png', 'images/Method/Method (70).png', 'images/Method/Method (71).png', 'images/Method/Method (72).png', 'images/Method/Method (73).png', 'images/Method/Method (74).png', 'images/Method/Method (75).png', 'images/Method/Method (76).png', 'images/Method/Method (77).png', 'images/Method/Method (78).png', 'images/Method/Method (79).png', 'images/Method/Method (80).png', 'images/Method/Method (81).png', 'images/Method/Method (82).png', 'images/Method/Method (83).png', 'images/Method/Method (84).png', 'images/Method/Method (85).png', 'images/Method/Method (86).png', 'images/Method/Method (87).png', 'images/Method/Method (88).png', 'images/Method/Method (89).png', 'images/Method/Method (90).png', 'images/Method/Method (91).png', 'images/Method/Method (92).png', 'images/Method/Method (93).png', 'images/Method/Method (94).png', 'images/Method/Method (95).png', 'images/Method/Method (96).png', 'images/Method/Method (97).png', 'images/Method/Method (98).png', 'images/Method/Method (99).png', 'images/Method/Method (100).png', 'images/Method/Method (101).png', 'images/Method/Method (102).png', 'images/Method/Method (103).png', 'images/Method/Method (104).png', 'images/Method/Method (105).png', 'images/Method/Method (106).png', 'images/Method/Method (107).png', 'images/Method/Method (108).png', 'images/Method/Method (109).png', 'images/Method/Method (110).png', 'images/Method/Method (111).png', 'images/Method/Method (112).png', 'images/Method/Method (113).png', 'images/Method/Method (114).png', 'images/Method/Method (115).png', 'images/Method/Method (116).png', 'images/Method/Method (117).png', 'images/Method/Method (118).png', 'images/Method/Method (119).png', 'images/Method/Method (120).png', 'images/Method/Method (121).png', 'images/Method/Method (122).png', 'images/Method/Method (123).png', 'images/Method/Method (124).png', 'images/Method/Method (125).png', 'images/Method/Method (126).png', 'images/Method/Method (127).png', 'images/Method/Method (128).png', 'images/Method/Method (129).png', 'images/Method/Method (130).png', 'images/Method/Method (131).png', 'images/Method/Method (132).png', 'images/Method/Method (133).png', 'images/Method/Method (134).png', ]
	FidelityArray = ['images/Fidelity/fidelity (1).png', 'images/Fidelity/fidelity (2).png', 'images/Fidelity/fidelity (3).png', 'images/Fidelity/fidelity (4).png', 'images/Fidelity/fidelity (5).png', 'images/Fidelity/fidelity (6).png', 'images/Fidelity/fidelity (7).png', 'images/Fidelity/fidelity (8).png', 'images/Fidelity/fidelity (9).png', 'images/Fidelity/fidelity (10).png', 'images/Fidelity/fidelity (11).png', 'images/Fidelity/fidelity (12).png', 'images/Fidelity/fidelity (13).png', 'images/Fidelity/fidelity (14).png', 'images/Fidelity/fidelity (15).png', 'images/Fidelity/fidelity (16).png', 'images/Fidelity/fidelity (17).png', 'images/Fidelity/fidelity (18).png', 'images/Fidelity/fidelity (19).png', 'images/Fidelity/fidelity (20).png', 'images/Fidelity/fidelity (21).png', 'images/Fidelity/fidelity (22).png', 'images/Fidelity/fidelity (23).png', 'images/Fidelity/fidelity (24).png', 'images/Fidelity/fidelity (25).png', 'images/Fidelity/fidelity (26).png', 'images/Fidelity/fidelity (27).png', 'images/Fidelity/fidelity (28).png', 'images/Fidelity/fidelity (29).png', 'images/Fidelity/fidelity (30).png', 'images/Fidelity/fidelity (31).png', 'images/Fidelity/fidelity (32).png', 'images/Fidelity/fidelity (33).png', 'images/Fidelity/fidelity (34).png', 'images/Fidelity/fidelity (35).png', 'images/Fidelity/fidelity (36).png', 'images/Fidelity/fidelity (37).png', 'images/Fidelity/fidelity (38).png', 'images/Fidelity/fidelity (39).png', 'images/Fidelity/fidelity (40).png', 'images/Fidelity/fidelity (41).png', 'images/Fidelity/fidelity (42).png', 'images/Fidelity/fidelity (43).png', 'images/Fidelity/fidelity (44).png', 'images/Fidelity/fidelity (45).png', 'images/Fidelity/fidelity (46).png', 'images/Fidelity/fidelity (47).png', 'images/Fidelity/fidelity (48).png', 'images/Fidelity/fidelity (49).png', 'images/Fidelity/fidelity (50).png', 'images/Fidelity/fidelity (51).png', 'images/Fidelity/fidelity (52).png', 'images/Fidelity/fidelity (53).png', 'images/Fidelity/fidelity (54).png', 'images/Fidelity/fidelity (55).png', 'images/Fidelity/fidelity (56).png', 'images/Fidelity/fidelity (57).png', 'images/Fidelity/fidelity (58).png', 'images/Fidelity/fidelity (59).png', 'images/Fidelity/fidelity (60).png', 'images/Fidelity/fidelity (61).png', 'images/Fidelity/fidelity (62).png', 'images/Fidelity/fidelity (63).png', 'images/Fidelity/fidelity (64).png', 'images/Fidelity/fidelity (65).png', 'images/Fidelity/fidelity (66).png', 'images/Fidelity/fidelity (67).png', 'images/Fidelity/fidelity (68).png', 'images/Fidelity/fidelity (69).png', 'images/Fidelity/fidelity (70).png', 'images/Fidelity/fidelity (71).png', 'images/Fidelity/fidelity (72).png', 'images/Fidelity/fidelity (73).png', 'images/Fidelity/fidelity (74).png', 'images/Fidelity/fidelity (75).png', 'images/Fidelity/fidelity (76).png', 'images/Fidelity/fidelity (77).png', 'images/Fidelity/fidelity (78).png', 'images/Fidelity/fidelity (79).png', 'images/Fidelity/fidelity (80).png', 'images/Fidelity/fidelity (81).png', 'images/Fidelity/fidelity (82).png', 'images/Fidelity/fidelity (83).png', 'images/Fidelity/fidelity (84).png', 'images/Fidelity/fidelity (85).png', 'images/Fidelity/fidelity (86).png', 'images/Fidelity/fidelity (87).png', 'images/Fidelity/fidelity (88).png', 'images/Fidelity/fidelity (89).png', 'images/Fidelity/fidelity (90).png', 'images/Fidelity/fidelity (91).png', 'images/Fidelity/fidelity (92).png', 'images/Fidelity/fidelity (93).png', 'images/Fidelity/fidelity (94).png', 'images/Fidelity/fidelity (95).png', 'images/Fidelity/fidelity (96).png', 'images/Fidelity/fidelity (97).png', 'images/Fidelity/fidelity (98).png', 'images/Fidelity/fidelity (99).png', 'images/Fidelity/fidelity (100).png', 'images/Fidelity/fidelity (101).png', 'images/Fidelity/fidelity (102).png', 'images/Fidelity/fidelity (103).png', 'images/Fidelity/fidelity (104).png', 'images/Fidelity/fidelity (105).png', 'images/Fidelity/fidelity (106).png', 'images/Fidelity/fidelity (107).png', 'images/Fidelity/fidelity (108).png', 'images/Fidelity/fidelity (109).png', 'images/Fidelity/fidelity (110).png', 'images/Fidelity/fidelity (111).png', 'images/Fidelity/fidelity (112).png', 'images/Fidelity/fidelity (113).png', 'images/Fidelity/fidelity (114).png', 'images/Fidelity/fidelity (115).png', 'images/Fidelity/fidelity (116).png', 'images/Fidelity/fidelity (117).png', 'images/Fidelity/fidelity (118).png', 'images/Fidelity/fidelity (119).png', 'images/Fidelity/fidelity (120).png', 'images/Fidelity/fidelity (121).png', 'images/Fidelity/fidelity (122).png', 'images/Fidelity/fidelity (123).png', 'images/Fidelity/fidelity (124).png', 'images/Fidelity/fidelity (125).png', 'images/Fidelity/fidelity (126).png', 'images/Fidelity/fidelity (127).png', 'images/Fidelity/fidelity (128).png', 'images/Fidelity/fidelity (129).png', 'images/Fidelity/fidelity (130).png', 'images/Fidelity/fidelity (131).png', 'images/Fidelity/fidelity (132).png', 'images/Fidelity/fidelity (133).png', 'images/Fidelity/fidelity (134).png', 'images/Fidelity/fidelity (135).png', 'images/Fidelity/fidelity (136).png', 'images/Fidelity/fidelity (137).png', 'images/Fidelity/fidelity (138).png', 'images/Fidelity/fidelity (139).png', 'images/Fidelity/fidelity (140).png', 'images/Fidelity/fidelity (141).png', 'images/Fidelity/fidelity (142).png', 'images/Fidelity/fidelity (143).png', 'images/Fidelity/fidelity (144).png', 'images/Fidelity/fidelity (145).png', 'images/Fidelity/fidelity (146).png', 'images/Fidelity/fidelity (147).png', 'images/Fidelity/fidelity (148).png', 'images/Fidelity/fidelity (149).png', 'images/Fidelity/fidelity (150).png', 'images/Fidelity/fidelity (151).png', 'images/Fidelity/fidelity (152).png', 'images/Fidelity/fidelity (153).png', 'images/Fidelity/fidelity (154).png', 'images/Fidelity/fidelity (155).png', 'images/Fidelity/fidelity (156).png', 'images/Fidelity/fidelity (157).png', 'images/Fidelity/fidelity (158).png', 'images/Fidelity/fidelity (159).png', 'images/Fidelity/fidelity (160).png', 'images/Fidelity/fidelity (161).png', 'images/Fidelity/fidelity (162).png', 'images/Fidelity/fidelity (163).png', 'images/Fidelity/fidelity (164).png', 'images/Fidelity/fidelity (165).png', 'images/Fidelity/fidelity (166).png', 'images/Fidelity/fidelity (167).png', 'images/Fidelity/fidelity (168).png', 'images/Fidelity/fidelity (169).png', 'images/Fidelity/fidelity (170).png', 'images/Fidelity/fidelity (171).png', 'images/Fidelity/fidelity (172).png', 'images/Fidelity/fidelity (173).png', 'images/Fidelity/fidelity (174).png', 'images/Fidelity/fidelity (175).png', 'images/Fidelity/fidelity (176).png', 'images/Fidelity/fidelity (177).png', 'images/Fidelity/fidelity (178).png', 'images/Fidelity/fidelity (179).png', 'images/Fidelity/fidelity (180).png', 'images/Fidelity/fidelity (181).png', 'images/Fidelity/fidelity (182).png', 'images/Fidelity/fidelity (183).png', 'images/Fidelity/fidelity (184).png', 'images/Fidelity/fidelity (185).png', 'images/Fidelity/fidelity (186).png', 'images/Fidelity/fidelity (187).png', 'images/Fidelity/fidelity (188).png', 'images/Fidelity/fidelity (189).png', 'images/Fidelity/fidelity (190).png', 'images/Fidelity/fidelity (191).png', 'images/Fidelity/fidelity (192).png', 'images/Fidelity/fidelity (193).png', 'images/Fidelity/fidelity (194).png', 'images/Fidelity/fidelity (195).png', 'images/Fidelity/fidelity (196).png', 'images/Fidelity/fidelity (197).png', 'images/Fidelity/fidelity (198).png', 'images/Fidelity/fidelity (199).png', 'images/Fidelity/fidelity (200).png',] 
	PoisonArray = ['images/Poison/Poison (1).png',  'images/Poison/Poison (2).png',  'images/Poison/Poison (3).png',  'images/Poison/Poison (4).png',  'images/Poison/Poison (5).png',  'images/Poison/Poison (6).png',  'images/Poison/Poison (7).png',  'images/Poison/Poison (8).png',  'images/Poison/Poison (9).png',  'images/Poison/Poison (10).png',  'images/Poison/Poison (11).png',  'images/Poison/Poison (12).png',  'images/Poison/Poison (13).png',  'images/Poison/Poison (14).png',  'images/Poison/Poison (15).png',  'images/Poison/Poison (16).png',  'images/Poison/Poison (17).png',  'images/Poison/Poison (18).png',  'images/Poison/Poison (19).png',  'images/Poison/Poison (20).png',  'images/Poison/Poison (21).png',  'images/Poison/Poison (22).png',  'images/Poison/Poison (23).png',  'images/Poison/Poison (24).png',  'images/Poison/Poison (25).png',  'images/Poison/Poison (26).png',  'images/Poison/Poison (27).png',  'images/Poison/Poison (28).png',  'images/Poison/Poison (29).png',  'images/Poison/Poison (30).png',  'images/Poison/Poison (31).png',  'images/Poison/Poison (32).png',  'images/Poison/Poison (33).png',  'images/Poison/Poison (34).png',  'images/Poison/Poison (35).png',  'images/Poison/Poison (36).png',  'images/Poison/Poison (37).png',  'images/Poison/Poison (38).png',  'images/Poison/Poison (39).png',  'images/Poison/Poison (40).png',  'images/Poison/Poison (41).png',  'images/Poison/Poison (42).png',  'images/Poison/Poison (43).png',  'images/Poison/Poison (44).png',  'images/Poison/Poison (45).png',  'images/Poison/Poison (46).png',  'images/Poison/Poison (47).png',  'images/Poison/Poison (48).png',  'images/Poison/Poison (49).png',  'images/Poison/Poison (50).png',  'images/Poison/Poison (51).png',  'images/Poison/Poison (52).png',  'images/Poison/Poison (53).png',  'images/Poison/Poison (54).png',  'images/Poison/Poison (55).png',  'images/Poison/Poison (56).png',  'images/Poison/Poison (57).png',  'images/Poison/Poison (58).png',  'images/Poison/Poison (59).png',  'images/Poison/Poison (60).png',  'images/Poison/Poison (61).png',  'images/Poison/Poison (62).png',  'images/Poison/Poison (63).png',  'images/Poison/Poison (64).png',  'images/Poison/Poison (65).png',  'images/Poison/Poison (66).png',  'images/Poison/Poison (67).png',  'images/Poison/Poison (68).png',  'images/Poison/Poison (69).png',  'images/Poison/Poison (70).png',  'images/Poison/Poison (71).png',  'images/Poison/Poison (72).png',  'images/Poison/Poison (73).png',  'images/Poison/Poison (74).png',  'images/Poison/Poison (75).png',  'images/Poison/Poison (76).png',  'images/Poison/Poison (77).png',  'images/Poison/Poison (78).png',  'images/Poison/Poison (79).png',  'images/Poison/Poison (80).png',  'images/Poison/Poison (81).png',  'images/Poison/Poison (82).png',  'images/Poison/Poison (83).png',  'images/Poison/Poison (84).png',  'images/Poison/Poison (85).png',  'images/Poison/Poison (86).png',  'images/Poison/Poison (87).png',  'images/Poison/Poison (88).png',  'images/Poison/Poison (89).png',  'images/Poison/Poison (90).png',  'images/Poison/Poison (91).png',  'images/Poison/Poison (92).png',  'images/Poison/Poison (93).png',  'images/Poison/Poison (94).png',  'images/Poison/Poison (95).png',  'images/Poison/Poison (96).png',  'images/Poison/Poison (97).png',  'images/Poison/Poison (98).png',  'images/Poison/Poison (99).png',  'images/Poison/Poison (100).png',  'images/Poison/Poison (101).png',  'images/Poison/Poison (102).png',  'images/Poison/Poison (103).png',  'images/Poison/Poison (104).png',  'images/Poison/Poison (105).png',  'images/Poison/Poison (106).png',  'images/Poison/Poison (107).png',  'images/Poison/Poison (108).png',  'images/Poison/Poison (109).png',  'images/Poison/Poison (110).png',  'images/Poison/Poison (111).png',  'images/Poison/Poison (112).png',  'images/Poison/Poison (113).png',  'images/Poison/Poison (114).png',  'images/Poison/Poison (115).png',  'images/Poison/Poison (116).png',  'images/Poison/Poison (117).png',  'images/Poison/Poison (118).png',  'images/Poison/Poison (119).png',  'images/Poison/Poison (120).png',  'images/Poison/Poison (121).png',  'images/Poison/Poison (122).png',  'images/Poison/Poison (123).png',  'images/Poison/Poison (124).png',  'images/Poison/Poison (125).png',  'images/Poison/Poison (126).png',  'images/Poison/Poison (127).png',  'images/Poison/Poison (128).png',  'images/Poison/Poison (129).png',  'images/Poison/Poison (130).png',  'images/Poison/Poison (131).png',  'images/Poison/Poison (132).png',  'images/Poison/Poison (133).png',  'images/Poison/Poison (134).png',  'images/Poison/Poison (135).png',  'images/Poison/Poison (136).png',  'images/Poison/Poison (137).png',  'images/Poison/Poison (138).png',  'images/Poison/Poison (139).png',  'images/Poison/Poison (140).png',  'images/Poison/Poison (141).png',  'images/Poison/Poison (142).png',  'images/Poison/Poison (143).png',  'images/Poison/Poison (144).png',  'images/Poison/Poison (145).png',  'images/Poison/Poison (146).png',  'images/Poison/Poison (147).png',  'images/Poison/Poison (148).png',  'images/Poison/Poison (149).png',  'images/Poison/Poison (150).png',  'images/Poison/Poison (151).png',  'images/Poison/Poison (152).png',  'images/Poison/Poison (153).png',  'images/Poison/Poison (154).png',  'images/Poison/Poison (155).png',  'images/Poison/Poison (156).png',  'images/Poison/Poison (157).png',  'images/Poison/Poison (158).png',  'images/Poison/Poison (159).png',  'images/Poison/Poison (160).png',  'images/Poison/Poison (161).png',  'images/Poison/Poison (162).png',   'images/Poison/Poison (163).png',  'images/Poison/Poison (164).png',  'images/Poison/Poison (165).png',  'images/Poison/Poison (166).png',  'images/Poison/Poison (167).png',  'images/Poison/Poison (168).png',  'images/Poison/Poison (169).png',  'images/Poison/Poison (170).png',  'images/Poison/Poison (171).png',  'images/Poison/Poison (172).png',  'images/Poison/Poison (173).png',  'images/Poison/Poison (174).png',  'images/Poison/Poison (175).png',  'images/Poison/Poison (176).png',  'images/Poison/Poison (177).png',  'images/Poison/Poison (178).png',  'images/Poison/Poison (179).png',  'images/Poison/Poison (180).png',  'images/Poison/Poison (181).png',  'images/Poison/Poison (182).png',  'images/Poison/Poison (183).png',  'images/Poison/Poison (184).png',  'images/Poison/Poison (185).png',  'images/Poison/Poison (186).png',  'images/Poison/Poison (187).png',  'images/Poison/Poison (188).png',  'images/Poison/Poison (189).png',  'images/Poison/Poison (190).png',  'images/Poison/Poison (191).png',  'images/Poison/Poison (192).png',  'images/Poison/Poison (193).png',  'images/Poison/Poison (194).png',  'images/Poison/Poison (195).png',  'images/Poison/Poison (196).png',  'images/Poison/Poison (197).png',  'images/Poison/Poison (198).png',  'images/Poison/Poison (199).png',  'images/Poison/Poison (200).png',  'images/Poison/Poison (201).png',  'images/Poison/Poison (202).png',  'images/Poison/Poison (203).png',  'images/Poison/Poison (204).png',  'images/Poison/Poison (205).png',  'images/Poison/Poison (206).png',  'images/Poison/Poison (207).png',  'images/Poison/Poison (208).png',  'images/Poison/Poison (209).png',  'images/Poison/Poison (210).png',  'images/Poison/Poison (211).png',  'images/Poison/Poison (212).png',  'images/Poison/Poison (213).png',  'images/Poison/Poison (214).png',  'images/Poison/Poison (215).png',  'images/Poison/Poison (216).png',  'images/Poison/Poison (217).png',  'images/Poison/Poison (218).png',  'images/Poison/Poison (219).png',  'images/Poison/Poison (220).png',  'images/Poison/Poison (221).png',  ]
}

function tryAgain() {
    episodeX = randomValueFromArray(episodes);
   // episodeX = 'Season 1 Episode 8';
    updateImg();
    wrongOrRight.textContent = '';
    document.getElementById('housePNG').src = "houseNet.png";
    episodeGuess.value = '';
    alreadyGussed = false;
}
function updateImg() {
    if (episodeX == 'Season 1 Episode 1') {
        S1E1Img();
    } else if (episodeX == 'Season 1 Episode 2') {
        S1E2Img();
    } else if (episodeX == 'Season 1 Episode 3') {
        S1E3Img();
    } else if (episodeX == 'Season 1 Episode 4') {
        S1E4Img();
    } else if (episodeX == 'Season 1 Episode 5') {
        S1E5Img();
    } else if (episodeX == 'Season 1 Episode 6') {
        S1E6Img();
    } else if (episodeX == 'Season 1 Episode 7') {
        S1E7Img();
    } else if (episodeX == 'Season 1 Episode 8') {
        S1E8Img();
    } else if (episodeX == 'Season 1 Episode 9') {
        S1E9Img();
    } else if (episodeX == 'Season 1 Episode 10') {
        S1E10Img();
    } else if (episodeX == 'Season 1 Episode 11') {
        S1E11Img();
    } else if (episodeX == 'Season 1 Episode 12') {
        S1E12Img();
    } else if (episodeX == 'Season 1 Episode 13') {
        S1E13Img();
    } else if (episodeX == 'Season 1 Episode 14') {
        S1E14Img();
    } else if (episodeX == 'Season 1 Episode 15') {
        S1E15Img();
    } else if (episodeX == 'Season 1 Episode 16') {
        S1E16Img();
    } else if (episodeX == 'Season 1 Episode 17') {
        S1E17Img();
    } else if (episodeX == 'Season 1 Episode 18') {
        S1E18Img();
    } else if (episodeX == 'Season 1 Episode 19') {
        S1E19Img();
    } else if (episodeX == 'Season 1 Episode 20') {
        S1E20Img();
    } else if (episodeX == 'Season 1 Episode 21') {
        S1E21Img();
    } else if (episodeX == 'Season 2 Episode 1') {
        S2E1Img();
    } else if (episodeX == 'Season 2 Episode 2') {
        S2E2Img();
    } else if (episodeX == 'Season 2 Episode 3') {
        S2E3Img();
    } else if (episodeX == 'Season 2 Episode 4') {
        S2E4Img();
    } else if (episodeX == 'Season 2 Episode 5') {
        S2E5Img();
    } else if (episodeX == 'Season 2 Episode 6') {
        S2E6Img();
    } else if (episodeX == 'Season 2 Episode 7') {
        S2E7Img();
    } else if (episodeX == 'Season 2 Episode 8') {
        S2E8Img();
    } else if (episodeX == 'Season 2 Episode 9') {
        S2E9Img();
    } else if (episodeX == 'Season 2 Episode 10') {
        S2E10Img();
    } else if (episodeX == 'Season 2 Episode 11') {
        S2E11Img();
    } else if (episodeX == 'Season 2 Episode 12') {
        S2E12Img();
    } else if (episodeX == 'Season 2 Episode 13') {
        S2E13Img();
    } else if (episodeX == 'Season 2 Episode 14') {
        S2E14Img();
    } else if (episodeX == 'Season 2 Episode 15') {
        S2E15Img();
    } else if (episodeX == 'Season 2 Episode 16') {
        S2E16Img();
    } else if (episodeX == 'Season 2 Episode 17') {
        S2E17Img();
    } else if (episodeX == 'Season 2 Episode 18') {
        S2E18Img();
    } else if (episodeX == 'Season 2 Episode 19') {
        S2E19Img();
    } else if (episodeX == 'Season 2 Episode 20') {
        S2E20Img();
    } else if (episodeX == 'Season 2 Episode 21') {
        S2E21Img();
    } else if (episodeX == 'Season 2 Episode 22') {
        S2E22Img();
    } else if (episodeX == 'Season 2 Episode 23') {
        S2E23Img();
    } else if (episodeX == 'Season 2 Episode 24') {
        S2E24Img();
    } else if (episodeX == 'Season 3 Episode 1') {
        S3E1Img();
    } else if (episodeX == 'Season 3 Episode 2') {
        S3E2Img();
    } else if (episodeX == 'Season 3 Episode 3') {
        S3E3Img();
    } else if (episodeX == 'Season 3 Episode 4') {
        S3E4Img();
    } else if (episodeX == 'Season 3 Episode 5') {
        S3E5Img();
    } else if (episodeX == 'Season 3 Episode 6') {
        S3E6Img();
    } else if (episodeX == 'Season 3 Episode 7') {
        S3E7Img();
    } else if (episodeX == 'Season 3 Episode 8') {
        S3E8Img();
    } else if (episodeX == 'Season 3 Episode 9') {
        S3E9Img();
    } else if (episodeX == 'Season 3 Episode 10') {
        S3E10Img();
    } else if (episodeX == 'Season 3 Episode 11') {
        S3E11Img();
    } else if (episodeX == 'Season 3 Episode 12') {
        S3E12Img();
    } else if (episodeX == 'Season 3 Episode 13') {
        S3E13Img();
    } else if (episodeX == 'Season 3 Episode 14') {
        S3E14Img();
    } else if (episodeX == 'Season 3 Episode 15') {
        S3E15Img();
    } else if (episodeX == 'Season 3 Episode 16') {
        S3E16Img();
    } else if (episodeX == 'Season 3 Episode 17') {
        S3E17Img();
    } else if (episodeX == 'Season 3 Episode 18') {
        S3E18Img();
    } else if (episodeX == 'Season 3 Episode 19') {
        S3E19Img();
    } else if (episodeX == 'Season 3 Episode 20') {
        S3E20Img();
    } else if (episodeX == 'Season 3 Episode 21') {
        S3E21Img();
    } else if (episodeX == 'Season 3 Episode 22') {
        S3E22Img();
    } else if (episodeX == 'Season 3 Episode 23') {
        S3E23Img();
    } else if (episodeX == 'Season 3 Episode 24') {
        S3E24Img();
    } else if (episodeX == 'Season 4 Episode 1') {
        S4E1Img();
    } else if (episodeX == 'Season 4 Episode 2') {
        S4E2Img();
    } else if (episodeX == 'Season 4 Episode 3') {
        S4E3Img();
    } else if (episodeX == 'Season 4 Episode 4') {
        S4E4Img();
    } else if (episodeX == 'Season 4 Episode 5') {
        S4E5Img();
    } else if (episodeX == 'Season 4 Episode 6') {
        S4E6Img();
    } else if (episodeX == 'Season 4 Episode 7') {
        S4E7Img();
    } else if (episodeX == 'Season 4 Episode 8') {
        S4E8Img();
    } else if (episodeX == 'Season 4 Episode 9') {
        S4E9Img();
    } else if (episodeX == 'Season 4 Episode 10') {
        S4E10Img();
    } else if (episodeX == 'Season 4 Episode 11') {
        S4E11Img();
    } else if (episodeX == 'Season 4 Episode 12') {
        S4E12Img();
    } else if (episodeX == 'Season 4 Episode 13') {
        S4E13Img();
    } else if (episodeX == 'Season 4 Episode 14') {
        S4E14Img();
    } else if (episodeX == 'Season 4 Episode 15') {
        S4E15Img();
    } else if (episodeX == 'Season 4 Episode 16') {
        S4E16Img();
    } else if (episodeX == 'Season 5 Episode 1') {
        S5E1Img();
    } else if (episodeX == 'Season 5 Episode 2') {
        S5E2Img();
    } else if (episodeX == 'Season 5 Episode 3') {
        S5E3Img();
    } else if (episodeX == 'Season 5 Episode 4') {
        S5E4Img();
    } else if (episodeX == 'Season 5 Episode 5') {
        S5E5Img();
    } else if (episodeX == 'Season 5 Episode 6') {
        S5E6Img();
    } else if (episodeX == 'Season 5 Episode 7') {
        S5E7Img();
    } else if (episodeX == 'Season 5 Episode 8') {
        S5E8Img();
    } else if (episodeX == 'Season 5 Episode 9') {
        S5E9Img();
    } else if (episodeX == 'Season 5 Episode 10') {
        S5E10Img();
    } else if (episodeX == 'Season 5 Episode 11') {
        S5E11Img();
    } else if (episodeX == 'Season 5 Episode 12') {
        S5E12Img();
    } else if (episodeX == 'Season 5 Episode 13') {
        S5E13Img();
    }
}

function S1E1Img() {
    var episodeImg = randomValueFromArray(pilotArray);
    document.getElementById('episodePNG').src = episodeImg;
    if (noRepeatButt == true) {
        episodePreDelete = pilotArray.indexOf(episodeImg);
        episodeDelete = pilotArray.splice(episodePreDelete, 1);
    }
    if (pilotArray.length == 0) {
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 1 Episode 1');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    }
}
function S1E2Img() {
    var episodeImg = randomValueFromArray(paternityArray);
    document.getElementById('episodePNG').src = episodeImg;
    if (noRepeatButt == true) {
        episodePreDelete = paternityArray.indexOf(episodeImg);
        episodeDelete = paternityArray.splice(episodePreDelete, 1);
    }
    if (paternityArray.length == 0) {
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 1 Episode 2');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    }
}
function S1E3Img() {
    var episodeImg = randomValueFromArray(occamArray);
    document.getElementById('episodePNG').src = episodeImg;
    if (noRepeatButt == true) {
        episodePreDelete = occamArray.indexOf(episodeImg);
        episodeDelete = occamArray.splice(episodePreDelete, 1);
    }
    if (occamArray.length == 0) {
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 1 Episode 3');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    }
}
function S1E4Img() {
    episodeImg = randomValueFromArray(MaternityArray);

    document.getElementById('episodePNG').src = episodeImg;
    if (noRepeatButt == true) {
        episodePreDelete = MaternityArray.indexOf(episodeImg);
        episodeDelete = MaternityArray.splice(episodePreDelete, 1);
    }
    if (MaternityArray.length == 0) {
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 1 Episode 4');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    }
}

function S1E5Img() {
    episodeImg = randomValueFromArray(DamnedArray);

    document.getElementById('episodePNG').src = episodeImg;
    if (noRepeatButt == true) {
        episodePreDelete = DamnedArray.indexOf(episodeImg);
        episodeDelete = DamnedArray.splice(episodePreDelete, 1);
    }
    if (DamnedArray.length == 0) {
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 1 Episode 5');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    }
}
function S1E6Img() {

    episodeImg = randomValueFromArray(MethodArray);

    document.getElementById('episodePNG').src = episodeImg;
    if (noRepeatButt == true) {
        episodePreDelete = MethodArray.indexOf(episodeImg);
        episodeDelete = MethodArray.splice(episodePreDelete, 1);
    }
    if (MethodArray.length == 0) {
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 1 Episode 6');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    }
}
function S1E7Img() {

    episodeImg = randomValueFromArray(FidelityArray);

    document.getElementById('episodePNG').src = episodeImg;
    if (noRepeatButt == true) {
        episodePreDelete = FidelityArray.indexOf(episodeImg);
        episodeDelete = FidelityArray.splice(episodePreDelete, 1);
    }
    if (FidelityArray.length == 0) {
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 1 Episode 7');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    }
}
function S1E8Img() {

    episodeImg = randomValueFromArray(PoisonArray);

    document.getElementById('episodePNG').src = episodeImg;
    if (noRepeatButt == true) {
        episodePreDelete = PoisonArray.indexOf(episodeImg);
        episodeDelete = PoisonArray.splice(episodePreDelete, 1);
    }
    if (PoisonArray.length == 0) {
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 1 Episode 8');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    }
}
function check() {
    if (alreadyGussed == false) {
        check2();
        alreadyGussed = true;
    } else if (alreadyGussed == true) {
        tryAgain();
        alreadyGussed = false;
    }
}

function check2() {
    if (episodeX == 'Season 1 Episode 1') {
        S1E1();
    } else if (episodeX == 'Season 1 Episode 2') {
        S1E2();
    } else if (episodeX == 'Season 1 Episode 3') {
        S1E3();
    } else if (episodeX == 'Season 1 Episode 4') {
        S1E4();
    } else if (episodeX == 'Season 1 Episode 5') {
        S1E5();
    } else if (episodeX == 'Season 1 Episode 6') {
        S1E6();
    } else if (episodeX == 'Season 1 Episode 7') {
        S1E7();
    } else if (episodeX == 'Season 1 Episode 8') {
        S1E8();
    } else if (episodeX == 'Season 1 Episode 9') {
        S1E9();
    } else if (episodeX == 'Season 1 Episode 10') {
        S1E10();
    } else if (episodeX == 'Season 1 Episode 11') {
        S1E11();
    } else if (episodeX == 'Season 1 Episode 12') {
        S1E12();
    } else if (episodeX == 'Season 1 Episode 13') {
        S1E13();
    } else if (episodeX == 'Season 1 Episode 14') {
        S1E14();
    } else if (episodeX == 'Season 1 Episode 15') {
        S1E15();
    } else if (episodeX == 'Season 1 Episode 16') {
        S1E16();
    } else if (episodeX == 'Season 1 Episode 17') {
        S1E17();
    } else if (episodeX == 'Season 1 Episode 18') {
        S1E18();
    } else if (episodeX == 'Season 1 Episode 19') {
        S1E19();
    } else if (episodeX == 'Season 1 Episode 20') {
        S1E20();
    } else if (episodeX == 'Season 1 Episode 21') {
        S1E21();
    } else if (episodeX == 'Season 2 Episode 1') {
        S2E1();
    } else if (episodeX == 'Season 2 Episode 2') {
        S2E2();
    } else if (episodeX == 'Season 2 Episode 3') {
        S2E3();
    } else if (episodeX == 'Season 2 Episode 4') {
        S2E4();
    } else if (episodeX == 'Season 2 Episode 5') {
        S2E5();
    } else if (episodeX == 'Season 2 Episode 6') {
        S2E6();
    } else if (episodeX == 'Season 2 Episode 7') {
        S2E7();
    } else if (episodeX == 'Season 2 Episode 8') {
        S2E8();
    } else if (episodeX == 'Season 2 Episode 9') {
        S2E9();
    } else if (episodeX == 'Season 2 Episode 10') {
        S2E10();
    } else if (episodeX == 'Season 2 Episode 11') {
        S2E11();
    } else if (episodeX == 'Season 2 Episode 12') {
        S2E12();
    } else if (episodeX == 'Season 2 Episode 13') {
        S2E13();
    } else if (episodeX == 'Season 2 Episode 14') {
        S2E14();
    } else if (episodeX == 'Season 2 Episode 15') {
        S2E15();
    } else if (episodeX == 'Season 2 Episode 16') {
        S2E16();
    } else if (episodeX == 'Season 2 Episode 17') {
        S2E17();
    } else if (episodeX == 'Season 2 Episode 18') {
        S2E18();
    } else if (episodeX == 'Season 2 Episode 19') {
        S2E19();
    } else if (episodeX == 'Season 2 Episode 20') {
        S2E20();
    } else if (episodeX == 'Season 2 Episode 21') {
        S2E21();
    } else if (episodeX == 'Season 2 Episode 22') {
        S2E22();
    } else if (episodeX == 'Season 2 Episode 23') {
        S2E23();
    } else if (episodeX == 'Season 2 Episode 24') {
        S2E24();
    } else if (episodeX == 'Season 3 Episode 1') {
        S3E1();
    } else if (episodeX == 'Season 3 Episode 2') {
        S3E2();
    } else if (episodeX == 'Season 3 Episode 3') {
        S3E3();
    } else if (episodeX == 'Season 3 Episode 4') {
        S3E4();
    } else if (episodeX == 'Season 3 Episode 5') {
        S3E5();
    } else if (episodeX == 'Season 3 Episode 6') {
        S3E6();
    } else if (episodeX == 'Season 3 Episode 7') {
        S3E7();
    } else if (episodeX == 'Season 3 Episode 8') {
        S3E8();
    } else if (episodeX == 'Season 3 Episode 9') {
        S3E9();
    } else if (episodeX == 'Season 3 Episode 10') {
        S3E10();
    } else if (episodeX == 'Season 3 Episode 11') {
        S3E11();
    } else if (episodeX == 'Season 3 Episode 12') {
        S3E12();
    } else if (episodeX == 'Season 3 Episode 13') {
        S3E13();
    } else if (episodeX == 'Season 3 Episode 14') {
        S3E14();
    } else if (episodeX == 'Season 3 Episode 15') {
        S3E15();
    } else if (episodeX == 'Season 3 Episode 16') {
        S3E16();
    } else if (episodeX == 'Season 3 Episode 17') {
        S3E17();
    } else if (episodeX == 'Season 3 Episode 18') {
        S3E18();
    } else if (episodeX == 'Season 3 Episode 19') {
        S3E19();
    } else if (episodeX == 'Season 3 Episode 20') {
        S3E20();
    } else if (episodeX == 'Season 3 Episode 21') {
        S3E21();
    } else if (episodeX == 'Season 3 Episode 22') {
        S3E22();
    } else if (episodeX == 'Season 3 Episode 23') {
        S3E23();
    } else if (episodeX == 'Season 3 Episode 24') {
        S3E24();
    } else if (episodeX == 'Season 4 Episode 1') {
        S4E1();
    } else if (episodeX == 'Season 4 Episode 2') {
        S4E2();
    } else if (episodeX == 'Season 4 Episode 3') {
        S4E3();
    } else if (episodeX == 'Season 4 Episode 4') {
        S4E4();
    } else if (episodeX == 'Season 4 Episode 5') {
        S4E5();
    } else if (episodeX == 'Season 4 Episode 6') {
        S4E6();
    } else if (episodeX == 'Season 4 Episode 7') {
        S4E7();
    } else if (episodeX == 'Season 4 Episode 8') {
        S4E8();
    } else if (episodeX == 'Season 4 Episode 9') {
        S4E9();
    } else if (episodeX == 'Season 4 Episode 10') {
        S4E10();
    } else if (episodeX == 'Season 4 Episode 11') {
        S4E11();
    } else if (episodeX == 'Season 4 Episode 12') {
        S4E12();
    } else if (episodeX == 'Season 4 Episode 13') {
        S4E13();
    } else if (episodeX == 'Season 4 Episode 14') {
        S4E14();
    } else if (episodeX == 'Season 4 Episode 15') {
        S4E15();
    } else if (episodeX == 'Season 4 Episode 16') {
        S4E16();
    } else if (episodeX == 'Season 5 Episode 1') {
        S5E1();
    } else if (episodeX == 'Season 5 Episode 2') {
        S5E2();
    } else if (episodeX == 'Season 5 Episode 3') {
        S5E3();
    } else if (episodeX == 'Season 5 Episode 4') {
        S5E4();
    } else if (episodeX == 'Season 5 Episode 5') {
        S5E5();
    } else if (episodeX == 'Season 5 Episode 6') {
        S5E6();
    } else if (episodeX == 'Season 5 Episode 7') {
        S5E7();
    } else if (episodeX == 'Season 5 Episode 8') {
        S5E8();
    } else if (episodeX == 'Season 5 Episode 9') {
        S5E9();
    } else if (episodeX == 'Season 5 Episode 10') {
        S5E10();
    } else if (episodeX == 'Season 5 Episode 11') {
        S5E11();
    } else if (episodeX == 'Season 5 Episode 12') {
        S5E12();
    } else if (episodeX == 'Season 5 Episode 13') {
        S5E13();
    }
}

function S1E1() {
    if (episodeGuess.value == 'Pilot') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Pilot') {
        wrongOrRight.textContent = 'wrong - Pilot';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S1E2() {
    if (episodeGuess.value == 'Paternity') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;

    } else if (episodeGuess.value !== 'Paternity') {
        wrongOrRight.textContent = 'wrong - Paternity';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S1E3() {
    if (episodeGuess.value == "Occam's Razor") {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== "Occam's Razor") {
        wrongOrRight.textContent = "Wrong - Occam's Razor";
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S1E4() {
    if (episodeGuess.value == 'Maternity') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Maternity') {
        wrongOrRight.textContent = 'wrong - Maternity';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S1E5() {
    if (episodeGuess.value == 'Damned If You Do') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Damned If You Do') {
        wrongOrRight.textContent = 'wrong - Damned If You Do';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S1E6() {
    if (episodeGuess.value == 'The Socratic Method') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'The Socratic Method') {
        wrongOrRight.textContent = 'wrong - The Socratic Method';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S1E7() {
    if (episodeGuess.value == 'Fidelity') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Fidelity') {
        wrongOrRight.textContent = 'wrong - Fidelity';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S1E8() {
    if (episodeGuess.value == 'Posion') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Posion') {
        wrongOrRight.textContent = 'wrong - Posion';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S1E9() {
    if (episodeGuess.value == 'DNR') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'DNR') {
        wrongOrRight.textContent = 'wrong - DNR';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S1E10() {
    if (episodeGuess.value == 'Histories') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Histories') {
        wrongOrRight.textContent = 'wrong - Histories';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
        updateStat();
    }
}
function S1E11() {
    if (episodeGuess.value == 'Detox') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Detox') {
        wrongOrRight.textContent = 'wrong - Detox';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S1E12() {
    if (episodeGuess.value == 'Sports Medicine') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Sports Medicine') {
        wrongOrRight.textContent = 'wrong - Sports Medicine';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S1E13() {
    if (episodeGuess.value == 'Cursed') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Cursed') {
        wrongOrRight.textContent = 'wrong - Cursed';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S1E14() {
    if (episodeGuess.value == 'Control') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Control') {
        wrongOrRight.textContent = 'wrong - Control';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S1E15() {
    if (episodeGuess.value == 'Mob Rules') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Mob Rules') {
        wrongOrRight.textContent = 'wrong - Mob Rules';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S1E16() {
    if (episodeGuess.value == 'Heavy') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Heavy') {
        wrongOrRight.textContent = 'wrong - Heavy';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S1E17() {
    if (episodeGuess.value == 'Role Model') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Role Model') {
        wrongOrRight.textContent = 'wrong - Role Model';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S1E18() {
    if (episodeGuess.value == 'Babies & Bathwater') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Babies & Bathwater') {
        wrongOrRight.textContent = 'wrong - Babies & Bathwater';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S1E19() {
    if (episodeGuess.value == 'Kids') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Kids') {
        wrongOrRight.textContent = 'wrong - Kids';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S1E20() {
    if (episodeGuess.value == 'Love Hurts') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Love Hurts') {
        wrongOrRight.textContent = 'wrong - Love Hurts';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S1E21() {
    if (episodeGuess.value == 'Three Stories') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Three Stories') {
        wrongOrRight.textContent = 'wrong - Three Stories';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S1E22() {
    if (episodeGuess.value == 'Honeymoon') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Honeymoon') {
        wrongOrRight.textContent = 'wrong - Honeymoon';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S2E1() {
    if (episodeGuess.value == 'Acceptance') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Acceptance') {
        wrongOrRight.textContent = 'wrong - Acceptance';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S2E2() {
    if (episodeGuess.value == 'Autopsy') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Autopsy') {
        wrongOrRight.textContent = 'wrong - Autopsy';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S2E3() {
    if (episodeGuess.value == 'Humpty Dumpty') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Humpty Dumpty') {
        wrongOrRight.textContent = 'wrong - Humpty Dumpty';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S2E4() {
    if (episodeGuess.value == 'TB or Not TB') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'TB or Not TB') {
        wrongOrRight.textContent = 'wrong - TB or Not TB';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S2E5() {
    if (episodeGuess.value == "Daddy's Boy") {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== "Daddy's Boy") {
        wrongOrRight.textContent = "wrong - Daddy's Boy";
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S2E6() {
    if (episodeGuess.value == 'Spin') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Spin') {
        wrongOrRight.textContent = 'wrong - Spin';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S2E7() {
    if (episodeGuess.value == 'Hunting') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Hunting') {
        wrongOrRight.textContent = 'wrong - Hunting';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S2E8() {
    if (episodeGuess.value == 'The Mistake') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'The Mistake') {
        wrongOrRight.textContent = 'wrong - The Mistake';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S2E9() {
    if (episodeGuess.value == 'Deception') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Deception') {
        wrongOrRight.textContent = 'wrong - Deception';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S2E10() {
    if (episodeGuess.value == 'Failure to Communicate') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Failure to Communicate') {
        wrongOrRight.textContent = 'wrong - Failure to Communicate';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S2E11() {
    if (episodeGuess.value == 'Need to Know') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Need to Know') {
        wrongOrRight.textContent = 'wrong - Need to Know';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S2E12() {
    if (episodeGuess.value == 'Distractions') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Distractions') {
        wrongOrRight.textContent = 'wrong - Distractions';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S2E13() {
    if (episodeGuess.value == 'Skin Deep') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Skin Deep') {
        wrongOrRight.textContent = 'wrong - Skin Deep';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S2E14() {
    if (episodeGuess.value == 'Sex Kills') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Sex Kills') {
        wrongOrRight.textContent = 'wrong - Sex Kills';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S2E15() {
    if (episodeGuess.value == 'Clueless') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Clueless') {
        wrongOrRight.textContent = 'wrong - Clueless';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S2E16() {
    if (episodeGuess.value == 'Safe') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Safe') {
        wrongOrRight.textContent = 'wrong - Safe';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S2E17() {
    if (episodeGuess.value == 'All In') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'All In') {
        wrongOrRight.textContent = 'wrong - All In';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S2E18() {
    if (episodeGuess.value == 'Sleeping Dogs Lie') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Sleeping Dogs Lie') {
        wrongOrRight.textContent = 'wrong - Sleeping Dogs Lie';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S2E19() {
    if (episodeGuess.value == 'House vs. God') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'House vs. God') {
        wrongOrRight.textContent = 'wrong - House vs. God';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S2E20() {
    if (episodeGuess.value == 'Euphoria: part 1') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Euphoria: part 1') {
        wrongOrRight.textContent = 'wrong - Euphoria: part 1';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S2E21() {
    if (episodeGuess.value == 'Euphoria: part 2') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Euphoria: part 2') {
        wrongOrRight.textContent = 'wrong - Euphoria: part 2';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S2E22() {
    if (episodeGuess.value == 'Forever') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Forever') {
        wrongOrRight.textContent = 'wrong - Forever';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S2E23() {
    if (episodeGuess.value == "Who's Your Daddy?") {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== "Who's Your Daddy?") {
        wrongOrRight.textContent = "wrong - Who's Your Daddy?";
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S2E24() {
    if (episodeGuess.value == 'No Reason') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'No Reason') {
        wrongOrRight.textContent = 'wrong - No Reason';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S3E1() {
    if (episodeGuess.value == 'Meaning') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Meaning') {
        wrongOrRight.textContent = 'wrong - Meaning';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S3E2() {
    if (episodeGuess.value == 'Cane and Able') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Cane and Able') {
        wrongOrRight.textContent = 'wrong - Cane and Able';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S3E3() {
    if (episodeGuess.value == 'Informed Consent') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Informed Consent') {
        wrongOrRight.textContent = 'wrong - Informed Consent';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S3E4() {
    if (episodeGuess.value == 'Lines in the Sand') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Lines in the Sand') {
        wrongOrRight.textContent = 'wrong - Lines in the Sand';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S3E5() {
    if (episodeGuess.value == 'Fools for Love') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Fools for Love') {
        wrongOrRight.textContent = 'wrong - Fools for Love';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S3E6() {
    if (episodeGuess.value == 'Que Sera Sera') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.value == 'Que Será Será') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Que Sera Sera') {
        wrongOrRight.textContent = 'wrong - Que Sera Sera';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S3E7() {
    if (episodeGuess.value == 'Son of Coma Guy') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Son of Coma Guy') {
        wrongOrRight.textContent = 'wrong - Son of Coma Guy';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S3E8() {
    if (episodeGuess.value == 'Whac-A-Mole') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Whac-A-Mole') {
        wrongOrRight.textContent = 'wrong - Whac-A-Mole';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S3E9() {
    if (episodeGuess.value == 'Finding Judas') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Finding Judas') {
        wrongOrRight.textContent = 'wrong - Finding Judas';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S3E10() {
    if (episodeGuess.value == 'Merry Little Christmas') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Merry Little Christmas') {
        wrongOrRight.textContent = 'wrong - Merry Little Christmas';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S3E11() {
    if (episodeGuess.value == 'Words and Deeds') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Words and Deeds') {
        wrongOrRight.textContent = 'wrong - Words and Deeds';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S3E12() {
    if (episodeGuess.value == 'One Day, One Room') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'One Day, One Room') {
        wrongOrRight.textContent = 'wrong - One Day, One Room';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S3E13() {
    if (episodeGuess.value == 'Needle in a Haystack') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Needle in a Haystack') {
        wrongOrRight.textContent = 'wrong - Needle in a Haystack';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S3E14() {
    if (episodeGuess.value == 'Insensitive') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Insensitive') {
        wrongOrRight.textContent = 'wrong - Insensitive';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S3E15() {
    if (episodeGuess.value == 'Half-wit') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Half-wit') {
        wrongOrRight.textContent = 'wrong - Half-wit';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S3E16() {
    if (episodeGuess.value == 'Top Secret') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Top Secret') {
        wrongOrRight.textContent = 'wrong - Top Secret';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S3E17() {
    if (episodeGuess.value == 'Fetal Position') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Fetal Position') {
        wrongOrRight.textContent = 'wrong - Fetal Position';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S3E18() {
    if (episodeGuess.value == 'Airborne') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Airborne') {
        wrongOrRight.textContent = 'wrong - Airborne';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S3E19() {
    if (episodeGuess.value == 'Act Your Age') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Act Your Age') {
        wrongOrRight.textContent = 'wrong - Act Your Age';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S3E20() {
    if (episodeGuess.value == 'House Training') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'House Training') {
        wrongOrRight.textContent = 'wrong - House Training';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S3E21() {
    if (episodeGuess.value == 'Family') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Family') {
        wrongOrRight.textContent = 'wrong - Family';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S3E22() {
    if (episodeGuess.value == 'Resignation') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Resignation') {
        wrongOrRight.textContent = 'wrong - Resignation';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S3E23() {
    if (episodeGuess.value == 'The Jerk') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'The Jerk') {
        wrongOrRight.textContent = 'wrong - The Jerk';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S3E24() {
    if (episodeGuess.value == 'Human Error') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Human Error') {
        wrongOrRight.textContent = 'wrong - Human Error';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S4E1() {
    if (episodeGuess.value == 'Alone') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Alone') {
        wrongOrRight.textContent = 'wrong - Alone';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S4E2() {
    if (episodeGuess.value == 'The Right Stuff') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'The Right Stuff') {
        wrongOrRight.textContent = 'wrong - The Right Stuff';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S4E3() {
    if (episodeGuess.value == '97 Seconds') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== '97 Seconds') {
        wrongOrRight.textContent = 'wrong - 97 Seconds';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S4E4() {
    if (episodeGuess.value == 'Guardian Angels') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Guardian Angels') {
        wrongOrRight.textContent = 'wrong - Guardian Angels';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S4E5() {
    if (episodeGuess.value == 'Mirror Mirror') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Mirror Mirror') {
        wrongOrRight.textContent = 'wrong - Mirror Mirror';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S4E6() {
    if (episodeGuess.value == 'Whatever It Takes') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Whatever It Takes') {
        wrongOrRight.textContent = 'wrong - Whatever It Takes';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S4E7() {
    if (episodeGuess.value == 'Ugly') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Ugly') {
        wrongOrRight.textContent = 'wrong - Ugly';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S4E8() {
    if (episodeGuess.value == "You Don't Want to Know") {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== "You Don't Want to Know") {
        wrongOrRight.textContent = "wrong - You Don't Want to Know";
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S4E9() {
    if (episodeGuess.value == 'Games') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Games') {
        wrongOrRight.textContent = 'wrong - Games';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S4E10() {
    if (episodeGuess.value == "It's a Wonderful Lie") {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== "It's a Wonderful Lie") {
        wrongOrRight.textContent = "wrong - It's a Wonderful Lie";
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S4E11() {
    if (episodeGuess.value == 'Frozen') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Frozen') {
        wrongOrRight.textContent = 'wrong - Frozen';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S4E12() {
    if (episodeGuess.value == "Don't Ever Change") {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== "Don't Ever Change") {
        wrongOrRight.textContent = "wrong - Don't Ever Change";
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S4E13() {
    if (episodeGuess.value == 'No More Mr. Nice Guy') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'No More Mr. Nice Guy') {
        wrongOrRight.textContent = 'wrong - No More Mr. Nice Guy';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S4E14() {
    if (episodeGuess.value == 'Living the Dream') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Living the Dream') {
        wrongOrRight.textContent = 'wrong - Living the Dream';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S4E15() {
    if (episodeGuess.value == "House's Head") {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== "House's Head") {
        wrongOrRight.textContent = "wrong - House's Head";
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S4E16() {
    if (episodeGuess.value == "Wilson's Heart") {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== "Wilson's Heart") {
        wrongOrRight.textContent = "wrong - Wilson's Heart";
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S5E1() {
    if (episodeGuess.value == 'Dying Changes Everything') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Dying Changes Everything') {
        wrongOrRight.textContent = 'wrong - Dying Changes Everything';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S5E2() {
    if (episodeGuess.value == 'Not Cancer') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Not Cancer') {
        wrongOrRight.textContent = 'wrong - Not Cancer';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S5E3() {
    if (episodeGuess.value == 'Adverse Events') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Adverse Events') {
        wrongOrRight.textContent = 'wrong - Adverse Events';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S5E4() {
    if (episodeGuess.value == 'Birthmarks') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Birthmarks') {
        wrongOrRight.textContent = 'wrong - Birthmarks';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S5E5() {
    if (episodeGuess.value == 'Lucky Thirteen') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Lucky Thirteen') {
        wrongOrRight.textContent = 'wrong - Lucky Thirteen';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S5E6() {
    if (episodeGuess.value == 'Joy') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Joy') {
        wrongOrRight.textContent = 'wrong - Joy';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S5E7() {
    if (episodeGuess.value == 'The Itch') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'The Itch') {
        wrongOrRight.textContent = 'wrong - The Itch';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S5E8() {
    if (episodeGuess.value == 'Emancipation') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Emancipation') {
        wrongOrRight.textContent = 'wrong - Emancipation';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S5E9() {
    if (episodeGuess.value == 'Last Resort') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Last Resort') {
        wrongOrRight.textContent = 'wrong - Last Resort';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S5E10() {
    if (episodeGuess.value == 'Let Them Eat Cake') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Let Them Eat Cake') {
        wrongOrRight.textContent = 'wrong - Let Them Eat Cake';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S5E11() {
    if (episodeGuess.value == 'Joy to the World') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Joy to the World') {
        wrongOrRight.textContent = 'wrong - Joy to the World';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S5E12() {
    if (episodeGuess.value == 'Painless') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Painless') {
        wrongOrRight.textContent = 'wrong - Painless';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
function S5E13() {
    if (episodeGuess.value == 'Big Baby') {
        wrongOrRight.textContent = 'Right';
        wrongOrRight.style.color = 'green';
        document.getElementById('housePNG').src = "houseHappy.png";
        ++totCorrect;
    } else if (episodeGuess.Value !== 'Big Baby') {
        wrongOrRight.textContent = 'wrong - Big Baby';
        wrongOrRight.style.color = 'red';
        document.getElementById('housePNG').src = "houseSad.png";
    }
    updateStat();
}
