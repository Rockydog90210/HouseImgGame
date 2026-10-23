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
episodes = ['Season 1 Episode 1', 'Season 1 Episode 2', 'Season 1 Episode 3', 'Season 1 Episode 4', 'Season 1 Episode 5', 'Season 1 Episode 6',] //'Season 1 Episode 7', 'Season 1 Episode 8', 'Season 1 Episode 9', 'Season 1 Episode 10', 'Season 1 Episode 11', 'Season 1 Episode 12', 'Season 1 Episode 13', 'Season 1 Episode 14', 'Season 1 Episode 15', 'Season 1 Episode 16', 'Season 1 Episode 17', 'Season 1 Episode 18', 'Season 1 Episode 19', 'Season 1 Episode 20', 'Season 1 Episode 21', 'Season 2 Episode 1', 'Season 2 Episode 2', 'Season 2 Episode 3', 'Season 2 Episode 4', 'Season 2 Episode 5', 'Season 2 Episode 6', 'Season 2 Episode 7', 'Season 2 Episode 8', 'Season 2 Episode 9', 'Season 2 Episode 10', 'Season 2 Episode 11', 'Season 2 Episode 12', 'Season 2 Episode 13', 'Season 2 Episode 14', 'Season 2 Episode 15', 'Season 2 Episode 16', 'Season 2 Episode 17', 'Season 2 Episode 18', 'Season 2 Episode 19', 'Season 2 Episode 20', 'Season 2 Episode 21', 'Season 2 Episode 21', 'Season 2 Episode 22', 'Season 2 Episode 23', 'Season 2 Episode 23', 'Season 2 Episode 24', 'Season 3 Episode 1', 'Season 3 Episode 2', 'Season 3 Episode 3', 'Season 3 Episode 4', 'Season 3 Episode 5', 'Season 3 Episode 6', 'Season 3 Episode 7', 'Season 3 Episode 8', 'Season 3 Episode 9', 'Season 3 Episode 10', 'Season 3 Episode 11', 'Season 3 Episode 12', 'Season 3 Episode 13', 'Season 3 Episode 14', 'Season 3 Episode 15', 'Season 3 Episode 16', 'Season 3 Episode 17', 'Season 3 Episode 18', 'Season 3 Episode 19', 'Season 3 Episode 20', 'Season 3 Episode 21', 'Season 3 Episode 22', 'Season 3 Episode 23', 'Season 3 Episode 24', 'Season 4 Episode 1', 'Season 4 Episode 2', 'Season 4 Episode 3', 'Season 4 Episode 4', 'Season 4 Episode 5', 'Season 4 Episode 6', 'Season 4 Episode 7', 'Season 4 Episode 8', 'Season 4 Episode 9', 'Season 4 Episode 10', 'Season 4 Episode 11', 'Season 4 Episode 12', 'Season 4 Episode 13', 'Season 4 Episode 14', 'Season 4 Episode 15', 'Season 4 Episode 16', 'Season 5 Episode 1', 'Season 5 Episode 2', 'Season 5 Episode 3', 'Season 5 Episode 4', 'Season 5 Episode 5', 'Season 5 Episode 6', 'Season 5 Episode 7', 'Season 5 Episode 8', 'Season 5 Episode 9', 'Season 5 Episode 10', 'Season 5 Episode 11', 'Season 5 Episode 12', 'Season 5 Episode 13', 'Season 5 Episode 14', 'Season 5 Episode 15', 'Season 5 Episode 16', 'Season 5 Episode 17', 'Season 5 Episode 18', 'Season 5 Episode 19', 'Season 5 Episode 20', 'Season 5 Episode 21', 'Season 5 Episode 22', 'Season 5 Episode 23', 'Season 5 Episode 24', 'Season 6 Episode 1', 'Season 6 Episode 2', 'Season 6 Episode 3', 'Season 6 Episode 4', 'Season 6 Episode 5', 'Season 6 Episode 6', 'Season 6 Episode 7', 'Season 6 Episode 8', 'Season 6 Episode 9', 'Season 6 Episode 10', 'Season 6 Episode 11', 'Season 6 Episode 12', 'Season 6 Episode 13', 'Season 6 Episode 14', 'Season 6 Episode 15', 'Season 6 Episode 16', 'Season 6 Episode 17', 'Season 6 Episode 18', 'Season 6 Episode 19', 'Season 6 Episode 20', 'Season 6 Episode 21', 'Season 7 Episode 1', ];
    pilotArray = ['Pilot1.png', 'Pilot2.png', 'Pilot3.png', 'Pilot4.png', 'Pilot5.png', 'Pilot6.png', 'Pilot7.png', 'Pilot8.png', 'Pilot9.png', 'Pilot10.png', 'Pilot11.png', 'Pilot12.png', 'Pilot13.png', 'Pilot14.png', 'Pilot15.png', 'Pilot16.png', 'Pilot17.png', 'Pilot18.png', 'Pilot19.png', 'Pilot20.png', 'Pilot21.png', 'Pilot22.png', 'Pilot23.png', 'Pilot24.png', 'Pilot25.png', 'Pilot26.png', 'Pilot27.png', 'Pilot28.png', 'Pilot29.png', 'Pilot30.png', 'Pilot31.png', 'Pilot32.png', 'Pilot33.png', 'Pilot34.png', 'Pilot35.png', 'Pilot36.png', 'Pilot37.png', 'Pilot38.png', 'Pilot39.png', 'Pilot40.png', 'Pilot41.png', 'Pilot42.png', 'Pilot43.png', 'Pilot44.png', 'Pilot45.png', 'Pilot46.png', 'Pilot47.png', 'Pilot48.png', 'Pilot49.png', 'Pilot50.png', 'Pilot51.png', 'Pilot52.png', 'Pilot53.png', 'Pilot54.png', 'Pilot55.png', 'Pilot56.png', 'Pilot57.png', 'Pilot58.png', 'Pilot59.png', 'Pilot60.png', 'Pilot61.png', 'Pilot62.png', 'Pilot63.png', 'Pilot64.png', 'Pilot65.png', 'Pilot66.png', 'Pilot67.png', 'Pilot68.png', 'Pilot69.png', 'Pilot70.png', 'Pilot71.png', 'Pilot72.png', 'Pilot73.png', 'Pilot74.png', 'Pilot75.png', 'Pilot76.png', 'Pilot77.png', 'Pilot78.png', 'Pilot79.png', 'Pilot80.png', 'Pilot81.png', 'Pilot82.png', 'Pilot83.png', 'Pilot84.png', 'Pilot85.png', 'Pilot86.png', 'Pilot87.png', 'Pilot88.png', 'Pilot89.png', 'Pilot90.png', 'Pilot91.png', 'Pilot92.png', 'Pilot93.png', 'Pilot94.png', 'Pilot95.png', 'Pilot96.png', 'Pilot97.png', 'Pilot98.png', 'Pilot99.png', 'Pilot100.png', 'Pilot101.png', 'Pilot102', ];
    paternityArray = ['Paternity1.png', 'Paternity2.png', 'Paternity3.png', 'Paternity4.png', 'Paternity5.png', 'Paternity6.png', 'Paternity7.png', 'Paternity8.png', 'Paternity9.png', 'Paternity10.png', 'Paternity11.png', 'Paternity12.png', 'Paternity13.png', 'Paternity14.png', 'Paternity15.png', 'Paternity16.png', 'Paternity17.png', 'Paternity18.png', 'Paternity19.png', 'Paternity20.png', 'Paternity21.png', 'Paternity22.png', 'Paternity23.png', 'Paternity24.png', 'Paternity25.png', 'Paternity26.png', 'Paternity27.png', 'Paternity28.png', 'Paternity29.png', 'Paternity30.png', 'Paternity31.png', 'Paternity32.png', 'Paternity33.png', 'Paternity34.png', 'Paternity35.png', 'Paternity36.png', 'Paternity37.png', 'Paternity38.png', 'Paternity39.png', 'Paternity40.png', 'Paternity41.png', 'Paternity42.png', 'Paternity43.png', 'Paternity44.png', 'Paternity45.png', 'Paternity46.png', 'Paternity47.png', 'Paternity48.png', 'Paternity49.png', 'Paternity50.png', 'Paternity51.png', 'Paternity52.png', 'Paternity53.png', 'Paternity54.png', 'Paternity55.png', 'Paternity56.png', 'Paternity57.png', 'Paternity58.png', 'Paternity59.png', 'Paternity60.png', 'Paternity61.png', 'Paternity62.png', 'Paternity63.png', 'Paternity64.png', 'Paternity65.png', 'Paternity66.png', 'Paternity67.png', 'Paternity68.png', 'Paternity69.png', 'Paternity70.png', 'Paternity71.png', 'Paternity72.png', 'Paternity73.png', 'Paternity74.png', 'Paternity75.png', 'Paternity76.png', 'Paternity77.png', 'Paternity78.png', 'Paternity79.png', 'Paternity80.png', 'Paternity81.png', 'Paternity82.png', 'Paternity83.png', 'Paternity84.png', 'Paternity85.png', 'Paternity86.png', 'Paternity87.png', 'Paternity88.png', 'Paternity89.png', 'Paternity90.png', 'Paternity91.png', 'Paternity92.png', 'Paternity93.png', 'Paternity94.png', 'Paternity95.png', 'Paternity96.png', 'Paternity97.png', 'Paternity98.png', 'Paternity99.png', 'Paternity100.png', 'Paternity101.png', 'Paternity102.png', 'Paternity103.png', 'Paternity104.png', 'Paternity105.png', 'Paternity106.png', 'Paternity107.png', 'Paternity108.png', 'Paternity109.png', 'Paternity110.png', 'Paternity111.png', 'Paternity112.png', 'Paternity113.png', 'Paternity114.png', 'Paternity115.png', 'Paternity116.png', 'Paternity117.png', 'Paternity118.png', 'Paternity119.png', 'Paternity120.png', 'Paternity121.png', 'Paternity122.png', 'Paternity123.png', ];
    occamArray = ['Occam1.png', 'Occam2.png', 'Occam3.png', 'Occam4.png', 'Occam5.png', 'Occam6.png', 'Occam7.png', 'Occam8.png', 'Occam9.png', 'Occam10.png', 'Occam11.png', 'Occam12.png', 'Occam13.png', 'Occam14.png', 'Occam15.png', 'Occam16.png', 'Occam17.png', 'Occam18.png', 'Occam18.png', 'Occam19.png', 'Occam20.png', 'Occam21.png', 'Occam22.png', 'Occam23.png', 'Occam24.png', 'Occam25.png', 'Occam26.png', 'Occam27.png', 'Occam28.png', 'Occam29.png', 'Occam30.png', 'Occam31.png', 'Occam32.png', 'Occam33.png', 'Occam34.png', 'Occam35.png', 'Occam36.png', 'Occam37.png', 'Occam38.png', 'Occam39.png', 'Occam40.png', 'Occam41.png', 'Occam42.png', 'Occam43.png', 'Occam44.png', 'Occam45.png', 'Occam46.png', 'Occam47.png', 'Occam48.png', 'Occam49.png', 'Occam50.png', 'Occam51.png', 'Occam52.png', 'Occam53.png', 'Occam54.png', 'Occam55.png', 'Occam56.png', 'Occam57.png', 'Occam58.png', 'Occam59.png', 'Occam60.png', 'Occam61.png', 'Occam62.png', 'Occam63.png', 'Occam64.png', 'Occam65.png', 'Occam66.png', 'Occam67.png', 'Occam68.png', 'Occam69.png', 'Occam70.png', 'Occam71.png', 'Occam72.png', 'Occam73.png', 'Occam74.png', 'Occam75.png', 'Occam76.png', 'Occam77.png', 'Occam78.png', 'Occam79.png', 'Occam80.png', 'Occam81.png', 'Occam82.png', 'Occam83.png', 'Occam84.png', 'Occam85.png', 'Occam86.png', 'Occam87.png', 'Occam88.png', 'Occam89.png', 'Occam90.png', 'Occam91.png', 'Occam92.png', 'Occam93.png', 'Occam94.png', 'Occam95.png', 'Occam96.png', 'Occam97.png', 'Occam98.png', 'Occam99.png', 'Occam100.png', 'Occam101.png', 'Occam102.png', 'Occam103.png', 'Occam104.png', 'Occam105.png', 'Occam106.png', 'Occam107.png', 'Occam108.png', 'Occam109.png', 'Occam110.png', 'Occam111.png', 'Occam112.png', 'Occam113.png', 'Occam114.png', 'Occam115.png', 'Occam116.png', 'Occam117.png', 'Occam118.png', 'Occam119.png', 'Occam120.png', 'Occam121.png', 'Occam122.png', 'Occam123.png', 'Occam124.png', 'Occam125.png', 'Occam126.png', 'Occam127.png', 'Occam128.png', 'Occam129.png', 'Occam130.png', 'Occam131.png', 'Occam132.png', 'Occam133.png', 'Occam134.png', 'Occam135.png', 'Occam136.png', 'Occam137.png', 'Occam138.png', 'Occam139.png', 'Occam140.png', 'Occam141.png', 'Occam142.png', 'Occam143.png', 'Occam144.png', 'Occam145.png', 'Occam146.png', 'Occam147.png', 'Occam148.png', 'Occam149.png', 'Occam150.png', ];
    MaternityArray = ['Maternity1.png', 'Maternity2.png', 'Maternity3.png', 'Maternity4.png', 'Maternity5.png', 'Maternity6.png', 'Maternity7.png', 'Maternity8.png', 'Maternity9.png', 'Maternity10.png', 'Maternity11.png', 'Maternity12.png', 'Maternity13.png', 'Maternity14.png', 'Maternity15.png', 'Maternity16.png', 'Maternity17.png', 'Maternity18.png', 'Maternity19.png', 'Maternity20.png', 'Maternity21.png', 'Maternity22.png', 'Maternity23.png', 'Maternity24.png', 'Maternity25.png', 'Maternity26.png', 'Maternity27.png', 'Maternity28.png', 'Maternity29.png', 'Maternity30.png', 'Maternity31.png', 'Maternity32.png', 'Maternity33.png', 'Maternity34.png', 'Maternity35.png', 'Maternity36.png', 'Maternity37.png', 'Maternity38.png', 'Maternity39.png', 'Maternity40.png', 'Maternity41.png', 'Maternity42.png', 'Maternity43.png', 'Maternity44.png', 'Maternity45.png', 'Maternity46.png', 'Maternity47.png', 'Maternity48.png', 'Maternity49.png', 'Maternity50.png', 'Maternity51.png', 'Maternity52.png', 'Maternity53.png', 'Maternity54.png', 'Maternity55.png', 'Maternity56.png', 'Maternity57.png', 'Maternity58.png', 'Maternity59.png', 'Maternity60.png', 'Maternity61.png', 'Maternity62.png', 'Maternity63.png', 'Maternity64.png', 'Maternity65.png', 'Maternity66.png', 'Maternity67.png', 'Maternity68.png', 'Maternity69.png', 'Maternity70.png', 'Maternity71.png', 'Maternity72.png', 'Maternity73.png', 'Maternity74.png', 'Maternity75.png', 'Maternity76.png', 'Maternity77.png', 'Maternity78.png', 'Maternity79.png', 'Maternity80.png', 'Maternity81.png', 'Maternity82.png', 'Maternity83.png', 'Maternity84.png', 'Maternity85.png', 'Maternity86.png', 'Maternity87.png', 'Maternity88.png', 'Maternity89.png', 'Maternity90.png', 'Maternity91.png', 'Maternity92.png', 'Maternity93.png', 'Maternity94.png', 'Maternity95.png', 'Maternity96.png', 'Maternity97.png', 'Maternity98.png', 'Maternity99.png', 'Maternity100.png', 'Maternity101.png', 'Maternity102.png', 'Maternity103.png', 'Maternity104.png', 'Maternity105.png', 'Maternity106.png', 'Maternity107.png', 'Maternity108.png', 'Maternity109.png', 'Maternity110.png', 'Maternity111.png', 'Maternity112.png', 'Maternity113.png', 'Maternity114.png', 'Maternity115.png', 'Maternity116.png', 'Maternity117.png', 'Maternity118.png', 'Maternity119.png', ]
    DamnedArray = ['Damned1.png', 'Damned2.png', 'Damned3.png', 'Damned4.png', 'Damned4.png', 'Damned5.png', 'Damned6.png', 'Damned7.png', 'Damned8.png', 'Damned9.png', 'Damned10.png', 'Damned11.png', 'Damned12.png', 'Damned13.png', 'Damned14.png', 'Damned15.png', 'Damned16.png', 'Damned17.png', 'Damned18.png', 'Damned19.png', 'Damned20.png', 'Damned21.png', 'Damned22.png', 'Damned23.png', 'Damned24.png', 'Damned25.png', 'Damned26.png', 'Damned27.png', 'Damned28.png', 'Damned29.png', 'Damned30.png', 'Damned31.png', 'Damned32.png', 'Damned33.png', 'Damned34.png', 'Damned35.png', 'Damned36.png', 'Damned37.png', 'Damned38.png', 'Damned39.png', 'Damned40.png', 'Damned41.png', 'Damned42.png', 'Damned43.png', 'Damned44.png', 'Damned45.png', 'Damned46.png', 'Damned47.png', 'Damned48.png', 'Damned49.png', 'Damned50.png', 'Damned51.png', 'Damned52.png', 'Damned53.png', 'Damned54.png', 'Damned55.png', 'Damned56.png', 'Damned57.png', 'Damned58.png', 'Damned59.png', 'Damned60.png', 'Damned61.png', 'Damned62.png', 'Damned63.png', 'Damned64.png', 'Damned65.png', 'Damned66.png', 'Damned67.png', 'Damned68.png', 'Damned69.png', 'Damned70.png', 'Damned71.png', 'Damned72.png', 'Damned73.png', 'Damned74.png', 'Damned75.png', 'Damned76.png', 'Damned77.png', 'Damned78.png', 'Damned79.png', 'Damned80.png', 'Damned81.png', 'Damned82.png', 'Damned83.png', 'Damned84.png', 'Damned85.png', 'Damned86.png', 'Damned87.png', 'Damned88.png', 'Damned89.png', 'Damned90.png', 'Damned91.png', 'Damned92.png', 'Damned93.png', 'Damned94.png', 'Damned95.png', 'Damned96.png', 'Damned97.png', 'Damned98.png', 'Damned99.png', 'Damned100.png', 'Damned100.png', 'Damned101.png', 'Damned102.png', 'Damned103.png', 'Damned104.png', 'Damned105.png', 'Damned106.png', 'Damned107.png', 'Damned108.png', 'Damned109.png', 'Damned110.png', 'Damned111.png', 'Damned112.png', 'Damned113.png', 'Damned114.png', 'Damned115.png', 'Damned116.png', 'Damned117.png', 'Damned118.png', 'Damned119.png', 'Damned120.png', 'Damned121.png', 'Damned122.png', 'Damned123.png', 'Damned124.png', 'Damned125.png', 'Damned126.png', 'Damned127.png', 'Damned128.png', 'Damned129.png', 'Damned130.png', 'Damned131.png', 'Damned132.png', 'Damned133.png', 'Damned134.png', 'Damned135.png', 'Damned136.png', 'Damned137.png', 'Damned138.png', 'Damned139.png', ];
}

function tryAgain() {
    episodeX = randomValueFromArray(episodes);
   // episodeX = 'Season 1 Episode 6';
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
    episodeImg = randomValueFromArray(pilotArray);
    if (episodeImg == 'Pilot1.png') {
        document.getElementById('episodePNG').src = " Pilot1.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot1.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot2.png') {
        document.getElementById('episodePNG').src = " Pilot2.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot2.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot3.png') {
        document.getElementById('episodePNG').src = " Pilot3.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot3.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot4.png') {
        document.getElementById('episodePNG').src = " Pilot4.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot4.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot5.png') {
        document.getElementById('episodePNG').src = " Pilot5.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot5.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot6.png') {
        document.getElementById('episodePNG').src = " Pilot6.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot6.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot7.png') {
        document.getElementById('episodePNG').src = " Pilot7.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot7.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot8.png') {
        document.getElementById('episodePNG').src = " Pilot8.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot8.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot9.png') {
        document.getElementById('episodePNG').src = " Pilot9.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot9.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot10.png') {
        document.getElementById('episodePNG').src = " Pilot10.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot10.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot11.png') {
        document.getElementById('episodePNG').src = " Pilot11.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot11.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot12.png') {
        document.getElementById('episodePNG').src = " Pilot12.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot12.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot13.png') {
        document.getElementById('episodePNG').src = " Pilot13.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot13.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot14.png') {
        document.getElementById('episodePNG').src = " Pilot14.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot14.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot15.png') {
        document.getElementById('episodePNG').src = " Pilot15.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot15.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot16.png') {
        document.getElementById('episodePNG').src = " Pilot16.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot16.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot17.png') {
        document.getElementById('episodePNG').src = " Pilot17.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot17.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot18.png') {
        document.getElementById('episodePNG').src = " Pilot18.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot18.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot19.png') {
        document.getElementById('episodePNG').src = " Pilot19.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot19.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot20.png') {
        document.getElementById('episodePNG').src = " Pilot20.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot20.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot21.png') {
        document.getElementById('episodePNG').src = " Pilot21.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot21.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot22.png') {
        document.getElementById('episodePNG').src = " Pilot22.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot22.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot23.png') {
        document.getElementById('episodePNG').src = " Pilot23.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot23.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot24.png') {
        document.getElementById('episodePNG').src = " Pilot24.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot24.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot25.png') {
        document.getElementById('episodePNG').src = " Pilot25.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot25.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot26.png') {
        document.getElementById('episodePNG').src = " Pilot26.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot26.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot27.png') {
        document.getElementById('episodePNG').src = " Pilot27.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot27.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot28.png') {
        document.getElementById('episodePNG').src = " Pilot28.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot28.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot29.png') {
        document.getElementById('episodePNG').src = " Pilot29.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot29.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot30.png') {
        document.getElementById('episodePNG').src = " Pilot30.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot30.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot31.png') {
        document.getElementById('episodePNG').src = " Pilot31.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot31.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot32.png') {
        document.getElementById('episodePNG').src = " Pilot32.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot32.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot33.png') {
        document.getElementById('episodePNG').src = " Pilot33.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot33.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot34.png') {
        document.getElementById('episodePNG').src = " Pilot34.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot34.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot35.png') {
        document.getElementById('episodePNG').src = " Pilot35.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot35.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot36.png') {
        document.getElementById('episodePNG').src = " Pilot36.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot36.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot37.png') {
        document.getElementById('episodePNG').src = " Pilot37.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot37.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot38.png') {
        document.getElementById('episodePNG').src = " Pilot38.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot38.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot39.png') {
        document.getElementById('episodePNG').src = " Pilot39.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot39.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot40.png') {
        document.getElementById('episodePNG').src = " Pilot40.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot40.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot41.png') {
        document.getElementById('episodePNG').src = " Pilot41.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot41.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot42.png') {
        document.getElementById('episodePNG').src = " Pilot42.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot42.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot43.png') {
        document.getElementById('episodePNG').src = " Pilot43.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot43.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot44.png') {
        document.getElementById('episodePNG').src = " Pilot44.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot44.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot45.png') {
        document.getElementById('episodePNG').src = " Pilot45.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot45.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot46.png') {
        document.getElementById('episodePNG').src = " Pilot46.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot46.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot47.png') {
        document.getElementById('episodePNG').src = " Pilot47.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot47.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot48.png') {
        document.getElementById('episodePNG').src = " Pilot48.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot48.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot49.png') {
        document.getElementById('episodePNG').src = " Pilot49.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot49.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot50.png') {
        document.getElementById('episodePNG').src = " Pilot50.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot50.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot51.png') {
        document.getElementById('episodePNG').src = " Pilot51.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot51.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot52.png') {
        document.getElementById('episodePNG').src = " Pilot52.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot52.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot53.png') {
        document.getElementById('episodePNG').src = " Pilot53.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot53.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot54.png') {
        document.getElementById('episodePNG').src = " Pilot54.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot54.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot55.png') {
        document.getElementById('episodePNG').src = " Pilot55.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot55.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot56.png') {
        document.getElementById('episodePNG').src = " Pilot56.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot56.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot57.png') {
        document.getElementById('episodePNG').src = " Pilot57.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot57.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot58.png') {
        document.getElementById('episodePNG').src = " Pilot58.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot58.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot59.png') {
        document.getElementById('episodePNG').src = " Pilot59.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot59.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot60.png') {
        document.getElementById('episodePNG').src = " Pilot60.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot60.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot61.png') {
        document.getElementById('episodePNG').src = " Pilot61.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot61.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot62.png') {
        document.getElementById('episodePNG').src = " Pilot62.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot62.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot63.png') {
        document.getElementById('episodePNG').src = " Pilot63.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot63.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot64.png') {
        document.getElementById('episodePNG').src = " Pilot64.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot64.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot65.png') {
        document.getElementById('episodePNG').src = " Pilot65.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot65.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot66.png') {
        document.getElementById('episodePNG').src = " Pilot66.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot66.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot67.png') {
        document.getElementById('episodePNG').src = " Pilot67.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot67.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot68.png') {
        document.getElementById('episodePNG').src = " Pilot68.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot68.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot69.png') {
        document.getElementById('episodePNG').src = " Pilot69.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot69.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot70.png') {
        document.getElementById('episodePNG').src = " Pilot70.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot70.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot71.png') {
        document.getElementById('episodePNG').src = " Pilot71.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot71.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot72.png') {
        document.getElementById('episodePNG').src = " Pilot72.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot72.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot73.png') {
        document.getElementById('episodePNG').src = " Pilot73.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot73.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot74.png') {
        document.getElementById('episodePNG').src = " Pilot74.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot74.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot75.png') {
        document.getElementById('episodePNG').src = " Pilot75.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot75.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot76.png') {
        document.getElementById('episodePNG').src = " Pilot76.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot76.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot77.png') {
        document.getElementById('episodePNG').src = " Pilot77.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot77.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot78.png') {
        document.getElementById('episodePNG').src = " Pilot78.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot78.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot79.png') {
        document.getElementById('episodePNG').src = " Pilot79.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot79.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot80.png') {
        document.getElementById('episodePNG').src = " Pilot80.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot80.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot81.png') {
        document.getElementById('episodePNG').src = " Pilot81.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot81.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot82.png') {
        document.getElementById('episodePNG').src = " Pilot82.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot82.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot83.png') {
        document.getElementById('episodePNG').src = " Pilot83.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot83.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot84.png') {
        document.getElementById('episodePNG').src = " Pilot84.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot84.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot85.png') {
        document.getElementById('episodePNG').src = " Pilot85.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot85.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot86.png') {
        document.getElementById('episodePNG').src = " Pilot86.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot86.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot87.png') {
        document.getElementById('episodePNG').src = " Pilot87.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot87.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot88.png') {
        document.getElementById('episodePNG').src = " Pilot88.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot88.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot89.png') {
        document.getElementById('episodePNG').src = " Pilot89.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot89.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot90.png') {
        document.getElementById('episodePNG').src = " Pilot90.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot90.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot91.png') {
        document.getElementById('episodePNG').src = " Pilot91.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot91.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot92.png') {
        document.getElementById('episodePNG').src = " Pilot92.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot92.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot93.png') {
        document.getElementById('episodePNG').src = " Pilot93.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot93.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot94.png') {
        document.getElementById('episodePNG').src = " Pilot94.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot94.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot95.png') {
        document.getElementById('episodePNG').src = " Pilot95.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot95.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot96.png') {
        document.getElementById('episodePNG').src = " Pilot96.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot96.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot97.png') {
        document.getElementById('episodePNG').src = " Pilot97.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot97.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot98.png') {
        document.getElementById('episodePNG').src = " Pilot98.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot98.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot99.png') {
        document.getElementById('episodePNG').src = " Pilot99.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot99.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot100.png') {
        document.getElementById('episodePNG').src = " Pilot100.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot100.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot101.png') {
        document.getElementById('episodePNG').src = " Pilot101.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot101.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Pilot102.png') {
        document.getElementById('episodePNG').src = " Pilot102.png";
        if (noRepeatButt == true) {
            episodePreDelete = pilotArray.indexOf('Pilot102.png');
            episodeDelete = pilotArray.splice(episodePreDelete, 1);
        }
    } else if (noRepeatButt == true) {
        episodePreDelete = episodes.indexOf('Season 1 Episode 1');
        episodeDelete = episodes.splice(episodePreDelete, 1);
    }
}
function S1E2Img() {
    episodeImg = randomValueFromArray(paternityArray);
    if (episodeImg == 'Paternity1.png') {
        document.getElementById('episodePNG').src = "Paternity1.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity1.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity2.png') {
        document.getElementById('episodePNG').src = "Paternity2.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity2.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity3.png') {
        document.getElementById('episodePNG').src = "Paternity3.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity3.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity4.png') {
        document.getElementById('episodePNG').src = "Paternity4.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity4.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity5.png') {
        document.getElementById('episodePNG').src = "Paternity5.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity5.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity6.png') {
        document.getElementById('episodePNG').src = "Paternity6.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity6.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity7.png') {
        document.getElementById('episodePNG').src = "Paternity7.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity7.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity8.png') {
        document.getElementById('episodePNG').src = "Paternity8.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity8.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity9.png') {
        document.getElementById('episodePNG').src = "Paternity9.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity9.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity10.png') {
        document.getElementById('episodePNG').src = "Paternity10.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity10.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity11.png') {
        document.getElementById('episodePNG').src = "Paternity11.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity11.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity12.png') {
        document.getElementById('episodePNG').src = "Paternity12.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity12.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity13.png') {
        document.getElementById('episodePNG').src = "Paternity13.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity13.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity14.png') {
        document.getElementById('episodePNG').src = "Paternity14.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity14.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity15.png') {
        document.getElementById('episodePNG').src = "Paternity15.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity15.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity16.png') {
        document.getElementById('episodePNG').src = "Paternity16.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity16.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity17.png') {
        document.getElementById('episodePNG').src = "Paternity17.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity17.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity18.png') {
        document.getElementById('episodePNG').src = "Paternity18.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity18.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity19.png') {
        document.getElementById('episodePNG').src = "Paternity19.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity19.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity20.png') {
        document.getElementById('episodePNG').src = "Paternity20.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity20.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity21.png') {
        document.getElementById('episodePNG').src = "Paternity21.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity21.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity22.png') {
        document.getElementById('episodePNG').src = "Paternity22.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity22.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity23.png') {
        document.getElementById('episodePNG').src = "Paternity23.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity23.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity24.png') {
        document.getElementById('episodePNG').src = "Paternity24.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity24.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity25.png') {
        document.getElementById('episodePNG').src = "Paternity25.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity25.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity26.png') {
        document.getElementById('episodePNG').src = "Paternity26.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity26.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity27.png') {
        document.getElementById('episodePNG').src = "Paternity27.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity27.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity28.png') {
        document.getElementById('episodePNG').src = "Paternity28.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity28.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity29.png') {
        document.getElementById('episodePNG').src = "Paternity29.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity29.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity30.png') {
        document.getElementById('episodePNG').src = "Paternity30.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity30.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity31.png') {
        document.getElementById('episodePNG').src = "Paternity31.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity31.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity32.png') {
        document.getElementById('episodePNG').src = "Paternity32.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity32.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity33.png') {
        document.getElementById('episodePNG').src = "Paternity33.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity33.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity34.png') {
        document.getElementById('episodePNG').src = "Paternity34.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity34.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity35.png') {
        document.getElementById('episodePNG').src = "Paternity35.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity35.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity36.png') {
        document.getElementById('episodePNG').src = "Paternity36.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity36.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity37.png') {
        document.getElementById('episodePNG').src = "Paternity37.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity37.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity38.png') {
        document.getElementById('episodePNG').src = "Paternity38.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity38.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity39.png') {
        document.getElementById('episodePNG').src = "Paternity39.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity39.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity40.png') {
        document.getElementById('episodePNG').src = "Paternity40.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity40.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity41.png') {
        document.getElementById('episodePNG').src = "Paternity41.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity41.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity42.png') {
        document.getElementById('episodePNG').src = "Paternity42.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity42.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity43.png') {
        document.getElementById('episodePNG').src = "Paternity43.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity43.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity44.png') {
        document.getElementById('episodePNG').src = "Paternity44.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity44.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity45.png') {
        document.getElementById('episodePNG').src = "Paternity45.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity45.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity46.png') {
        document.getElementById('episodePNG').src = "Paternity46.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity46.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }

    } else if (episodeImg == 'Paternity47.png') {
        document.getElementById('episodePNG').src = "Paternity47.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity47.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity48.png') {
        document.getElementById('episodePNG').src = "Paternity48.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity48.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity49.png') {
        document.getElementById('episodePNG').src = "Paternity49.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity49.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity50.png') {
        document.getElementById('episodePNG').src = "Paternity50.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity50.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity51.png') {
        document.getElementById('episodePNG').src = "Paternity51.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity51.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity52.png') {
        document.getElementById('episodePNG').src = "Paternity52.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity52.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity53.png') {
        document.getElementById('episodePNG').src = "Paternity53.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity53.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity54.png') {
        document.getElementById('episodePNG').src = "Paternity54.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity54.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity55.png') {
        document.getElementById('episodePNG').src = "Paternity55.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity55.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity56.png') {
        document.getElementById('episodePNG').src = "Paternity56.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity56.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity57.png') {
        document.getElementById('episodePNG').src = "Paternity57.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity57.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity58.png') {
        document.getElementById('episodePNG').src = "Paternity58.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity58.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity59.png') {
        document.getElementById('episodePNG').src = "Paternity59.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity59.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity60.png') {
        document.getElementById('episodePNG').src = "Paternity60.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity60.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity61.png') {
        document.getElementById('episodePNG').src = "Paternity61.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity61.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity62.png') {
        document.getElementById('episodePNG').src = "Paternity62.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity62.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity63.png') {
        document.getElementById('episodePNG').src = "Paternity63.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity63.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity64.png') {
        document.getElementById('episodePNG').src = "Paternity64.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity64.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity65.png') {
        document.getElementById('episodePNG').src = "Paternity65.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity65.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity66.png') {
        document.getElementById('episodePNG').src = "Paternity66.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity66.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity67.png') {
        document.getElementById('episodePNG').src = "Paternity67.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity67.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity68.png') {
        document.getElementById('episodePNG').src = "Paternity68.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity68.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity69.png') {
        document.getElementById('episodePNG').src = "Paternity69.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity69.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity70.png') {
        document.getElementById('episodePNG').src = "Paternity70.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity70.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity71.png') {
        document.getElementById('episodePNG').src = "Paternity71.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity71.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity72.png') {
        document.getElementById('episodePNG').src = "Paternity72.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity72.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity73.png') {
        document.getElementById('episodePNG').src = "Paternity73.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity73.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity74.png') {
        document.getElementById('episodePNG').src = "Paternity74.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity74.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity75.png') {
        document.getElementById('episodePNG').src = "Paternity75.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity75.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity76.png') {
        document.getElementById('episodePNG').src = "Paternity76.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity76.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity77.png') {
        document.getElementById('episodePNG').src = "Paternity77.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity77.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity78.png') {
        document.getElementById('episodePNG').src = "Paternity78.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity78.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity79.png') {
        document.getElementById('episodePNG').src = "Paternity79.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity79.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity80.png') {
        document.getElementById('episodePNG').src = "Paternity80.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity80.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity81.png') {
        document.getElementById('episodePNG').src = "Paternity81.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity81.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity82.png') {
        document.getElementById('episodePNG').src = "Paternity82.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity82.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity83.png') {
        document.getElementById('episodePNG').src = "Paternity83.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity83.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity84.png') {
        document.getElementById('episodePNG').src = "Paternity84.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity84.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity85.png') {
        document.getElementById('episodePNG').src = "Paternity85.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity85.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity86.png') {
        document.getElementById('episodePNG').src = "Paternity86.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity86.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity87.png') {
        document.getElementById('episodePNG').src = "Paternity87.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity87.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity88.png') {
        document.getElementById('episodePNG').src = "Paternity88.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity88.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity89.png') {
        document.getElementById('episodePNG').src = "Paternity89.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity89.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity90.png') {
        document.getElementById('episodePNG').src = "Paternity90.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity90.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity91.png') {
        document.getElementById('episodePNG').src = "Paternity91.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity91.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity92.png') {
        document.getElementById('episodePNG').src = "Paternity92.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity92.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity93.png') {
        document.getElementById('episodePNG').src = "Paternity93.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity93.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity94.png') {
        document.getElementById('episodePNG').src = "Paternity94.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity94.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity95.png') {
        document.getElementById('episodePNG').src = "Paternity95.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity95.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity96.png') {
        document.getElementById('episodePNG').src = "Paternity96.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity96.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity97.png') {
        document.getElementById('episodePNG').src = "Paternity97.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity97.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity98.png') {
        document.getElementById('episodePNG').src = "Paternity98.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity98.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity99.png') {
        document.getElementById('episodePNG').src = "Paternity99.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity99.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity100.png') {
        document.getElementById('episodePNG').src = "Paternity100.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity100.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity101.png') {
        document.getElementById('episodePNG').src = "Paternity101.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity101.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity102.png') {
        document.getElementById('episodePNG').src = "Paternity102.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity102.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity103.png') {
        document.getElementById('episodePNG').src = "Paternity103.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity103.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity104.png') {
        document.getElementById('episodePNG').src = "Paternity104.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity104.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity105.png') {
        document.getElementById('episodePNG').src = "Paternity105.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity105.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity106.png') {
        document.getElementById('episodePNG').src = "Paternity106.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity106.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity107.png') {
        document.getElementById('episodePNG').src = "Paternity107.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity107.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity108.png') {
        document.getElementById('episodePNG').src = "Paternity108.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity108.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity109.png') {
        document.getElementById('episodePNG').src = "Paternity109.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity109.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity110.png') {
        document.getElementById('episodePNG').src = "Paternity110.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity110.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity111.png') {
        document.getElementById('episodePNG').src = "Paternity111.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity111.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity112.png') {
        document.getElementById('episodePNG').src = "Paternity112.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity112.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity113.png') {
        document.getElementById('episodePNG').src = "Paternity113.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity113.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity114.png') {
        document.getElementById('episodePNG').src = "Paternity114.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity114.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity115.png') {
        document.getElementById('episodePNG').src = "Paternity115.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity115.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity116.png') {
        document.getElementById('episodePNG').src = "Paternity116.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity116.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity117.png') {
        document.getElementById('episodePNG').src = "Paternity117.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity117.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity118.png') {
        document.getElementById('episodePNG').src = "Paternity118.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity118.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity119.png') {
        document.getElementById('episodePNG').src = "Paternity119.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity119.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity120.png') {
        document.getElementById('episodePNG').src = "Paternity120.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity120.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity121.png') {
        document.getElementById('episodePNG').src = "Paternity121.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity121.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity122.png') {
        document.getElementById('episodePNG').src = "Paternity122.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity122.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Paternity123.png') {
        document.getElementById('episodePNG').src = "Paternity123.png";
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf('Paternity123.png');
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        }
    } else if (noRepeatButt == true) {
        episodePreDelete = episodes.indexOf('Season 1 Episode 2');
        episodeDelete = episodes.splice(episodePreDelete, 1);
    }
}
function S1E3Img() {
    episodeImg = randomValueFromArray(occamArray);
    if (episodeImg == 'Occam1.png') {
        document.getElementById('episodePNG').src = " Occam1.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam1.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam2.png') {
        document.getElementById('episodePNG').src = "Occam2.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam2.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam3.png') {
        document.getElementById('episodePNG').src = "Occam3.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam3.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam4.png') {
        document.getElementById('episodePNG').src = "Occam4.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam4.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam5.png') {
        document.getElementById('episodePNG').src = "Occam5.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam5.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam6.png') {
        document.getElementById('episodePNG').src = "Occam6.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam6.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam7.png') {
        document.getElementById('episodePNG').src = "Occam7.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam7.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam8.png') {
        document.getElementById('episodePNG').src = "Occam8.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam8.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam9.png') {
        document.getElementById('episodePNG').src = "Occam9.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam9.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam10.png') {
        document.getElementById('episodePNG').src = "Occam10.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam10.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam11.png') {
        document.getElementById('episodePNG').src = "Occam11.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam11.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam12.png') {
        document.getElementById('episodePNG').src = "Occam12.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam12.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam13.png') {
        document.getElementById('episodePNG').src = "Occam13.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam13.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam14.png') {
        document.getElementById('episodePNG').src = "Occam14.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam14.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam15.png') {
        document.getElementById('episodePNG').src = "Occam15.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam15.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam16.png') {
        document.getElementById('episodePNG').src = "Occam16.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam16.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam17.png') {
        document.getElementById('episodePNG').src = "Occam17.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam17.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam18.png') {
        document.getElementById('episodePNG').src = "Occam18.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam18.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam19.png') {
        document.getElementById('episodePNG').src = "Occam19.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam19.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam20.png') {
        document.getElementById('episodePNG').src = "Occam20.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam20.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam21.png') {
        document.getElementById('episodePNG').src = "Occam21.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam21.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam22.png') {
        document.getElementById('episodePNG').src = "Occam22.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam22.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam23.png') {
        document.getElementById('episodePNG').src = "Occam23.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam23.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam24.png') {
        document.getElementById('episodePNG').src = "Occam24.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam24.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam25.png') {
        document.getElementById('episodePNG').src = "Occam25.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam25.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam26.png') {
        document.getElementById('episodePNG').src = "Occam26.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam26.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam27.png') {
        document.getElementById('episodePNG').src = "Occam27.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam27.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam28.png') {
        document.getElementById('episodePNG').src = "Occam28.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam28.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam29.png') {
        document.getElementById('episodePNG').src = "Occam29.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam29.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam30.png') {
        document.getElementById('episodePNG').src = "Occam30.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam30.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam31.png') {
        document.getElementById('episodePNG').src = "Occam31.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam31.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam32.png') {
        document.getElementById('episodePNG').src = "Occam32.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam32.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam33.png') {
        document.getElementById('episodePNG').src = "Occam33.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam33.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam34.png') {
        document.getElementById('episodePNG').src = "Occam34.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam34.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam35.png') {
        document.getElementById('episodePNG').src = "Occam35.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam35.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam36.png') {
        document.getElementById('episodePNG').src = "Occam36.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam36.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam37.png') {
        document.getElementById('episodePNG').src = "Occam37.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam37.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam38.png') {
        document.getElementById('episodePNG').src = "Occam38.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam38.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam39.png') {
        document.getElementById('episodePNG').src = "Occam39.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam39.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam40.png') {
        document.getElementById('episodePNG').src = "Occam40.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam40.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam41.png') {
        document.getElementById('episodePNG').src = "Occam41.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam41.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam42.png') {
        document.getElementById('episodePNG').src = "Occam42.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam42.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam43.png') {
        document.getElementById('episodePNG').src = "Occam43.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam43.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam44.png') {
        document.getElementById('episodePNG').src = "Occam44.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam44.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam45.png') {
        document.getElementById('episodePNG').src = "Occam45.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam45.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam46.png') {
        document.getElementById('episodePNG').src = "Occam46.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam46.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam47.png') {
        document.getElementById('episodePNG').src = "Occam47.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam47.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam48.png') {
        document.getElementById('episodePNG').src = "Occam48.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam48.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam49.png') {
        document.getElementById('episodePNG').src = "Occam49.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam49.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam50.png') {
        document.getElementById('episodePNG').src = "Occam50.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam50.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam51.png') {
        document.getElementById('episodePNG').src = "Occam51.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam51.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam52.png') {
        document.getElementById('episodePNG').src = "Occam52.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam52.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam53.png') {
        document.getElementById('episodePNG').src = "Occam53.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam53.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam54.png') {
        document.getElementById('episodePNG').src = "Occam54.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam54.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam55.png') {
        document.getElementById('episodePNG').src = "Occam55.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam55.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam56.png') {
        document.getElementById('episodePNG').src = "Occam56.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam56.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam57.png') {
        document.getElementById('episodePNG').src = "Occam57.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam57.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam58.png') {
        document.getElementById('episodePNG').src = "Occam58.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam58.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam59.png') {
        document.getElementById('episodePNG').src = "Occam59.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam59.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam60.png') {
        document.getElementById('episodePNG').src = "Occam60.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam60.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam61.png') {
        document.getElementById('episodePNG').src = "Occam61.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam61.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam62.png') {
        document.getElementById('episodePNG').src = "Occam62.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam62.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam63.png') {
        document.getElementById('episodePNG').src = "Occam63.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam63.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam64.png') {
        document.getElementById('episodePNG').src = "Occam64.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam64.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam65.png') {
        document.getElementById('episodePNG').src = "Occam65.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam65.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam66.png') {
        document.getElementById('episodePNG').src = "Occam66.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam66.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam67.png') {
        document.getElementById('episodePNG').src = "Occam67.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam67.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam68.png') {
        document.getElementById('episodePNG').src = "Occam68.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam68.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam69.png') {
        document.getElementById('episodePNG').src = "Occam69.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam69.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam70.png') {
        document.getElementById('episodePNG').src = "Occam70.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam70.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam71.png') {
        document.getElementById('episodePNG').src = "Occam71.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam71.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam72.png') {
        document.getElementById('episodePNG').src = "Occam72.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam72.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam73.png') {
        document.getElementById('episodePNG').src = "Occam73.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam73.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam74.png') {
        document.getElementById('episodePNG').src = "Occam74.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam74.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam75.png') {
        document.getElementById('episodePNG').src = "Occam75.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam75.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam76.png') {
        document.getElementById('episodePNG').src = "Occam76.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam76.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam77.png') {
        document.getElementById('episodePNG').src = "Occam77.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam77.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam78.png') {
        document.getElementById('episodePNG').src = "Occam78.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam78.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam79.png') {
        document.getElementById('episodePNG').src = "Occam79.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam79.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam80.png') {
        document.getElementById('episodePNG').src = "Occam80.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam80.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam81.png') {
        document.getElementById('episodePNG').src = "Occam81.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam81.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam82.png') {
        document.getElementById('episodePNG').src = "Occam82.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam82.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam83.png') {
        document.getElementById('episodePNG').src = "Occam83.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam83.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam84.png') {
        document.getElementById('episodePNG').src = "Occam84.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam84.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam85.png') {
        document.getElementById('episodePNG').src = "Occam85.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam85.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam86.png') {
        document.getElementById('episodePNG').src = "Occam86.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam86.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam87.png') {
        document.getElementById('episodePNG').src = "Occam87.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam87.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam88.png') {
        document.getElementById('episodePNG').src = "Occam88.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam88.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam89.png') {
        document.getElementById('episodePNG').src = "Occam89.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam89.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam90.png') {
        document.getElementById('episodePNG').src = "Occam90.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam90.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam91.png') {
        document.getElementById('episodePNG').src = "Occam91.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam91.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam92.png') {
        document.getElementById('episodePNG').src = "Occam92.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam92.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam93.png') {
        document.getElementById('episodePNG').src = "Occam93.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam93.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam94.png') {
        document.getElementById('episodePNG').src = "Occam94.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam94.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam95.png') {
        document.getElementById('episodePNG').src = "Occam95.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam95.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam96.png') {
        document.getElementById('episodePNG').src = "Occam96.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam96.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam97.png') {
        document.getElementById('episodePNG').src = "Occam97.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam97.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam98.png') {
        document.getElementById('episodePNG').src = "Occam98.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam98.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam99.png') {
        document.getElementById('episodePNG').src = "Occam99.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam99.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam100.png') {
        document.getElementById('episodePNG').src = "Occam100.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam100.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam101.png') {
        document.getElementById('episodePNG').src = "Occam101.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam101.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam102.png') {
        document.getElementById('episodePNG').src = "Occam102.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam102.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam103.png') {
        document.getElementById('episodePNG').src = "Occam103.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam103.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam104.png') {
        document.getElementById('episodePNG').src = "Occam104.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam104.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam105.png') {
        document.getElementById('episodePNG').src = "Occam105.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam105.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam106.png') {
        document.getElementById('episodePNG').src = "Occam106.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam106.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam107.png') {
        document.getElementById('episodePNG').src = "Occam107.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam107.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam108.png') {
        document.getElementById('episodePNG').src = "Occam108.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam108.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam109.png') {
        document.getElementById('episodePNG').src = "Occam109.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam109.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam110.png') {
        document.getElementById('episodePNG').src = "Occam110.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam110.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam111.png') {
        document.getElementById('episodePNG').src = "Occam111.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam111.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam112.png') {
        document.getElementById('episodePNG').src = "Occam112.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam112.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam113.png') {
        document.getElementById('episodePNG').src = "Occam113.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam113.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam114.png') {
        document.getElementById('episodePNG').src = "Occam114.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam114.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam115.png') {
        document.getElementById('episodePNG').src = "Occam115.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam115.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam116.png') {
        document.getElementById('episodePNG').src = "Occam116.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam116.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam117.png') {
        document.getElementById('episodePNG').src = "Occam117.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam117.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam118.png') {
        document.getElementById('episodePNG').src = "Occam118.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam118.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam119.png') {
        document.getElementById('episodePNG').src = "Occam119.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam119.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam120.png') {
        document.getElementById('episodePNG').src = "Occam120.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam120.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam121.png') {
        document.getElementById('episodePNG').src = "Occam121.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam121.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam122.png') {
        document.getElementById('episodePNG').src = "Occam122.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam122.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam123.png') {
        document.getElementById('episodePNG').src = "Occam123.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam123.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam124.png') {
        document.getElementById('episodePNG').src = "Occam124.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam124.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam125.png') {
        document.getElementById('episodePNG').src = "Occam125.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam125.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam126.png') {
        document.getElementById('episodePNG').src = "Occam126.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam126.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam127.png') {
        document.getElementById('episodePNG').src = "Occam127.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam127.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam128.png') {
        document.getElementById('episodePNG').src = "Occam128.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam128.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam129.png') {
        document.getElementById('episodePNG').src = "Occam129.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam129.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam130.png') {
        document.getElementById('episodePNG').src = "Occam130.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam130.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam131.png') {
        document.getElementById('episodePNG').src = "Occam131.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam131.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam132.png') {
        document.getElementById('episodePNG').src = "Occam132.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam132.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam133.png') {
        document.getElementById('episodePNG').src = "Occam133.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam133.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam134.png') {
        document.getElementById('episodePNG').src = "Occam134.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam134.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam135.png') {
        document.getElementById('episodePNG').src = "Occam135.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam135.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam136.png') {
        document.getElementById('episodePNG').src = "Occam136.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam136.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam137.png') {
        document.getElementById('episodePNG').src = "Occam137.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam137.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam138.png') {
        document.getElementById('episodePNG').src = "Occam138.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam138.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam139.png') {
        document.getElementById('episodePNG').src = "Occam139.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam139.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam140.png') {
        document.getElementById('episodePNG').src = "Occam140.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam140.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam141.png') {
        document.getElementById('episodePNG').src = "Occam141.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam141.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam142.png') {
        document.getElementById('episodePNG').src = "Occam142.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam142.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam143.png') {
        document.getElementById('episodePNG').src = "Occam143.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam143.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam144.png') {
        document.getElementById('episodePNG').src = "Occam144.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam144.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam145.png') {
        document.getElementById('episodePNG').src = "Occam145.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam145.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam146.png') {
        document.getElementById('episodePNG').src = "Occam146.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam146.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam147.png') {
        document.getElementById('episodePNG').src = "Occam147.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam147.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam148.png') {
        document.getElementById('episodePNG').src = "Occam148.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam148.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam149.png') {
        document.getElementById('episodePNG').src = "Occam149.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam149.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Occam150.png') {
        document.getElementById('episodePNG').src = "Occam150.png";
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf('Occam150.png');
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        }
    } else if (noRepeatButt == true) {
        episodePreDelete = episodes.indexOf('Season 1 Episode 3');
        episodeDelete = episodes.splice(episodePreDelete, 1);
    }
}
function S1E4Img() {
    episodeImg = randomValueFromArray(MaternityArray);
    if (episodeImg == 'Maternity1.png') {
        document.getElementById('episodePNG').src = " Maternity1.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity1.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity2.png') {
        document.getElementById('episodePNG').src = "Maternity2.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity2.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity3.png') {
        document.getElementById('episodePNG').src = "Maternity3.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity3.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity4.png') {
        document.getElementById('episodePNG').src = "Maternity4.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity4.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity5.png') {
        document.getElementById('episodePNG').src = "Maternity5.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity5.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity6.png') {
        document.getElementById('episodePNG').src = "Maternity6.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity6.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity7.png') {
        document.getElementById('episodePNG').src = "Maternity7.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity7.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity8.png') {
        document.getElementById('episodePNG').src = "Maternity8.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity8.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity9.png') {
        document.getElementById('episodePNG').src = "Maternity9.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity9.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity10.png') {
        document.getElementById('episodePNG').src = "Maternity10.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity10.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity11.png') {
        document.getElementById('episodePNG').src = "Maternity11.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity11.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity12.png') {
        document.getElementById('episodePNG').src = "Maternity12.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity12.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity13.png') {
        document.getElementById('episodePNG').src = "Maternity13.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity13.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity14.png') {
        document.getElementById('episodePNG').src = "Maternity14.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity14.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity15.png') {
        document.getElementById('episodePNG').src = "Maternity15.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity15.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity16.png') {
        document.getElementById('episodePNG').src = "Maternity16.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity16.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity17.png') {
        document.getElementById('episodePNG').src = "Maternity17.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity17.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity18.png') {
        document.getElementById('episodePNG').src = "Maternity18.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity18.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity19.png') {
        document.getElementById('episodePNG').src = "Maternity19.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity19.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity20.png') {
        document.getElementById('episodePNG').src = "Maternity20.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity20.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity21.png') {
        document.getElementById('episodePNG').src = "Maternity21.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity21.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity22.png') {
        document.getElementById('episodePNG').src = "Maternity22.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity22.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity23.png') {
        document.getElementById('episodePNG').src = "Maternity23.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity23.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity24.png') {
        document.getElementById('episodePNG').src = "Maternity24.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity24.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity25.png') {
        document.getElementById('episodePNG').src = "Maternity25.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity25.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity26.png') {
        document.getElementById('episodePNG').src = "Maternity26.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity26.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity27.png') {
        document.getElementById('episodePNG').src = "Maternity27.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity27.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity28.png') {
        document.getElementById('episodePNG').src = "Maternity28.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity28.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity29.png') {
        document.getElementById('episodePNG').src = "Maternity29.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity29.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity30.png') {
        document.getElementById('episodePNG').src = "Maternity30.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity30.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity31.png') {
        document.getElementById('episodePNG').src = "Maternity31.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity31.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity32.png') {
        document.getElementById('episodePNG').src = "Maternity32.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity32.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity33.png') {
        document.getElementById('episodePNG').src = "Maternity33.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity33.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity34.png') {
        document.getElementById('episodePNG').src = "Maternity34.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity34.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity35.png') {
        document.getElementById('episodePNG').src = "Maternity35.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity35.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity36.png') {
        document.getElementById('episodePNG').src = "Maternity36.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity36.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity37.png') {
        document.getElementById('episodePNG').src = "Maternity37.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity37.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity38.png') {
        document.getElementById('episodePNG').src = "Maternity38.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity38.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity39.png') {
        document.getElementById('episodePNG').src = "Maternity39.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity39.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity40.png') {
        document.getElementById('episodePNG').src = "Maternity40.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity40.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity41.png') {
        document.getElementById('episodePNG').src = "Maternity41.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity41.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity42.png') {
        document.getElementById('episodePNG').src = "Maternity42.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity42.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity43.png') {
        document.getElementById('episodePNG').src = "Maternity43.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity43.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity44.png') {
        document.getElementById('episodePNG').src = "Maternity44.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity44.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity45.png') {
        document.getElementById('episodePNG').src = "Maternity45.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity45.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity46.png') {
        document.getElementById('episodePNG').src = "Maternity46.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity46.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity47.png') {
        document.getElementById('episodePNG').src = "Maternity47.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity47.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity48.png') {
        document.getElementById('episodePNG').src = "Maternity48.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity48.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity49.png') {
        document.getElementById('episodePNG').src = "Maternity49.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity49.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity50.png') {
        document.getElementById('episodePNG').src = "Maternity50.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity50.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity51.png') {
        document.getElementById('episodePNG').src = "Maternity51.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity51.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity52.png') {
        document.getElementById('episodePNG').src = "Maternity52.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity52.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity53.png') {
        document.getElementById('episodePNG').src = "Maternity53.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity53.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity54.png') {
        document.getElementById('episodePNG').src = "Maternity54.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity54.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity55.png') {
        document.getElementById('episodePNG').src = "Maternity55.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity55.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity56.png') {
        document.getElementById('episodePNG').src = "Maternity56.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity56.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity57.png') {
        document.getElementById('episodePNG').src = "Maternity57.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity57.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity58.png') {
        document.getElementById('episodePNG').src = "Maternity58.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity58.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity59.png') {
        document.getElementById('episodePNG').src = "Maternity59.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity59.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity60.png') {
        document.getElementById('episodePNG').src = "Maternity60.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity60.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity61.png') {
        document.getElementById('episodePNG').src = "Maternity61.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity61.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity62.png') {
        document.getElementById('episodePNG').src = "Maternity62.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity62.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity63.png') {
        document.getElementById('episodePNG').src = "Maternity63.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity63.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity64.png') {
        document.getElementById('episodePNG').src = "Maternity64.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity64.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity65.png') {
        document.getElementById('episodePNG').src = "Maternity65.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity65.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity66.png') {
        document.getElementById('episodePNG').src = "Maternity66.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity66.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity67.png') {
        document.getElementById('episodePNG').src = "Maternity67.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity67.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity68.png') {
        document.getElementById('episodePNG').src = "Maternity68.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity68.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity69.png') {
        document.getElementById('episodePNG').src = "Maternity69.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity69.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity70.png') {
        document.getElementById('episodePNG').src = "Maternity70.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity70.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity71.png') {
        document.getElementById('episodePNG').src = "Maternity71.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity71.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity72.png') {
        document.getElementById('episodePNG').src = "Maternity72.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity72.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity73.png') {
        document.getElementById('episodePNG').src = "Maternity73.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity73.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity74.png') {
        document.getElementById('episodePNG').src = "Maternity74.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity74.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity75.png') {
        document.getElementById('episodePNG').src = "Maternity75.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity75.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity76.png') {
        document.getElementById('episodePNG').src = "Maternity76.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity76.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity77.png') {
        document.getElementById('episodePNG').src = "Maternity77.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity77.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity78.png') {
        document.getElementById('episodePNG').src = "Maternity78.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity78.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity79.png') {
        document.getElementById('episodePNG').src = "Maternity79.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity79.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity80.png') {
        document.getElementById('episodePNG').src = "Maternity80.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity80.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity81.png') {
        document.getElementById('episodePNG').src = "Maternity81.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity81.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity82.png') {
        document.getElementById('episodePNG').src = "Maternity82.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity82.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity83.png') {
        document.getElementById('episodePNG').src = "Maternity83.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity83.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity84.png') {
        document.getElementById('episodePNG').src = "Maternity84.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity84.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity85.png') {
        document.getElementById('episodePNG').src = "Maternity85.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity85.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity86.png') {
        document.getElementById('episodePNG').src = "Maternity86.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity86.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity87.png') {
        document.getElementById('episodePNG').src = "Maternity87.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity87.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity88.png') {
        document.getElementById('episodePNG').src = "Maternity88.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity88.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity89.png') {
        document.getElementById('episodePNG').src = "Maternity89.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity89.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity90.png') {
        document.getElementById('episodePNG').src = "Maternity90.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity90.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity91.png') {
        document.getElementById('episodePNG').src = "Maternity91.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity91.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity92.png') {
        document.getElementById('episodePNG').src = "Maternity92.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity92.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity93.png') {
        document.getElementById('episodePNG').src = "Maternity93.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity93.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity94.png') {
        document.getElementById('episodePNG').src = "Maternity94.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity94.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity95.png') {
        document.getElementById('episodePNG').src = "Maternity95.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity95.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity96.png') {
        document.getElementById('episodePNG').src = "Maternity96.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity96.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity97.png') {
        document.getElementById('episodePNG').src = "Maternity97.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity97.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity98.png') {
        document.getElementById('episodePNG').src = "Maternity98.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity98.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity99.png') {
        document.getElementById('episodePNG').src = "Maternity99.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity99.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity100.png') {
        document.getElementById('episodePNG').src = "Maternity100.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity100.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity101.png') {
        document.getElementById('episodePNG').src = "Maternity101.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity101.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity102.png') {
        document.getElementById('episodePNG').src = "Maternity102.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity102.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity103.png') {
        document.getElementById('episodePNG').src = "Maternity103.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity103.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity104.png') {
        document.getElementById('episodePNG').src = "Maternity104.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity104.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity105.png') {
        document.getElementById('episodePNG').src = "Maternity105.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity105.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity106.png') {
        document.getElementById('episodePNG').src = "Maternity106.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity106.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity107.png') {
        document.getElementById('episodePNG').src = "Maternity107.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity107.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity108.png') {
        document.getElementById('episodePNG').src = "Maternity108.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity108.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity109.png') {
        document.getElementById('episodePNG').src = "Maternity109.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity109.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity110.png') {
        document.getElementById('episodePNG').src = "Maternity110.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity110.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity111.png') {
        document.getElementById('episodePNG').src = "Maternity111.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity111.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity112.png') {
        document.getElementById('episodePNG').src = "Maternity112.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity112.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity113.png') {
        document.getElementById('episodePNG').src = "Maternity113.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity113.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity114.png') {
        document.getElementById('episodePNG').src = "Maternity114.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity114.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity115.png') {
        document.getElementById('episodePNG').src = "Maternity115.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity115.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity116.png') {
        document.getElementById('episodePNG').src = "Maternity116.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity116.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity117.png') {
        document.getElementById('episodePNG').src = "Maternity117.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity117.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity118.png') {
        document.getElementById('episodePNG').src = "Maternity118.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity118.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Maternity119.png') {
        document.getElementById('episodePNG').src = "Maternity119.png";
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf('Maternity119.png');
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
    } else if (noRepeatButt == true) {
        episodePreDelete = episodes.indexOf('Season 1 Episode 4');
        episodeDelete = episodes.splice(episodePreDelete, 1);
    }
}

function S1E5Img() {
    episodeImg = randomValueFromArray(DamnedArray);
    if (episodeImg == 'Damned1.png') {
        document.getElementById('episodePNG').src = "Damned1.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned1.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned2.png') {
        document.getElementById('episodePNG').src = "Damned2.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned2.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned3.png') {
        document.getElementById('episodePNG').src = "Damned3.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned3.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned4.png') {
        document.getElementById('episodePNG').src = "Damned4.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned4.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned5.png') {
        document.getElementById('episodePNG').src = "Damned5.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned5.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned6.png') {
        document.getElementById('episodePNG').src = "Damned6.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned6.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned7.png') {
        document.getElementById('episodePNG').src = "Damned7.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned7.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned8.png') {
        document.getElementById('episodePNG').src = "Damned8.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned8.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned9.png') {
        document.getElementById('episodePNG').src = "Damned9.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned9.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned10.png') {
        document.getElementById('episodePNG').src = "Damned10.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned10.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned11.png') {
        document.getElementById('episodePNG').src = "Damned11.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned11.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned12.png') {
        document.getElementById('episodePNG').src = "Damned12.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned12.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned13.png') {
        document.getElementById('episodePNG').src = "Damned13.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned13.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned14.png') {
        document.getElementById('episodePNG').src = "Damned14.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned14.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned15.png') {
        document.getElementById('episodePNG').src = "Damned15.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned15.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned16.png') {
        document.getElementById('episodePNG').src = "Damned16.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned16.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned17.png') {
        document.getElementById('episodePNG').src = "Damned17.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned17.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned18.png') {
        document.getElementById('episodePNG').src = "Damned18.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned18.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned19.png') {
        document.getElementById('episodePNG').src = "Damned19.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned19.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned20.png') {
        document.getElementById('episodePNG').src = "Damned20.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned20.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned21.png') {
        document.getElementById('episodePNG').src = "Damned21.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned21.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned22.png') {
        document.getElementById('episodePNG').src = "Damned22.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned22.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned23.png') {
        document.getElementById('episodePNG').src = "Damned23.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned23.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned24.png') {
        document.getElementById('episodePNG').src = "Damned24.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned24.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned25.png') {
        document.getElementById('episodePNG').src = "Damned25.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned25.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned26.png') {
        document.getElementById('episodePNG').src = "Damned26.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned26.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned27.png') {
        document.getElementById('episodePNG').src = "Damned27.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned27.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned28.png') {
        document.getElementById('episodePNG').src = "Damned28.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned28.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned29.png') {
        document.getElementById('episodePNG').src = "Damned29.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned29.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned30.png') {
        document.getElementById('episodePNG').src = "Damned30.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned30.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned31.png') {
        document.getElementById('episodePNG').src = "Damned31.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned31.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned32.png') {
        document.getElementById('episodePNG').src = "Damned32.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned32.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned33.png') {
        document.getElementById('episodePNG').src = "Damned33.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned33.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned34.png') {
        document.getElementById('episodePNG').src = "Damned34.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned34.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned35.png') {
        document.getElementById('episodePNG').src = "Damned35.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned35.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned36.png') {
        document.getElementById('episodePNG').src = "Damned36.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned36.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned37.png') {
        document.getElementById('episodePNG').src = "Damned37.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned37.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned38.png') {
        document.getElementById('episodePNG').src = "Damned38.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned38.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned39.png') {
        document.getElementById('episodePNG').src = "Damned39.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned39.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned40.png') {
        document.getElementById('episodePNG').src = "Damned40.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned40.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned41.png') {
        document.getElementById('episodePNG').src = "Damned41.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned41.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned42.png') {
        document.getElementById('episodePNG').src = "Damned42.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned42.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned43.png') {
        document.getElementById('episodePNG').src = "Damned43.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned43.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned44.png') {
        document.getElementById('episodePNG').src = "Damned44.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned44.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned45.png') {
        document.getElementById('episodePNG').src = "Damned45.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned45.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned46.png') {
        document.getElementById('episodePNG').src = "Damned46.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned46.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned47.png') {
        document.getElementById('episodePNG').src = "Damned47.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned47.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned48.png') {
        document.getElementById('episodePNG').src = "Damned48.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned48.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned49.png') {
        document.getElementById('episodePNG').src = "Damned49.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned49.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned50.png') {
        document.getElementById('episodePNG').src = "Damned50.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned50.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned51.png') {
        document.getElementById('episodePNG').src = "Damned51.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned51.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned52.png') {
        document.getElementById('episodePNG').src = "Damned52.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned52.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned53.png') {
        document.getElementById('episodePNG').src = "Damned53.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned53.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned54.png') {
        document.getElementById('episodePNG').src = "Damned54.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned54.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned55.png') {
        document.getElementById('episodePNG').src = "Damned55.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned55.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned56.png') {
        document.getElementById('episodePNG').src = "Damned56.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned56.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned57.png') {
        document.getElementById('episodePNG').src = "Damned57.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned57.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned58.png') {
        document.getElementById('episodePNG').src = "Damned58.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned58.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned59.png') {
        document.getElementById('episodePNG').src = "Damned59.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned59.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned60.png') {
        document.getElementById('episodePNG').src = "Damned60.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned60.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned61.png') {
        document.getElementById('episodePNG').src = "Damned61.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned61.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned62.png') {
        document.getElementById('episodePNG').src = "Damned62.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned62.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned63.png') {
        document.getElementById('episodePNG').src = "Damned63.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned63.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned64.png') {
        document.getElementById('episodePNG').src = "Damned64.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned64.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned65.png') {
        document.getElementById('episodePNG').src = "Damned65.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned65.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned66.png') {
        document.getElementById('episodePNG').src = "Damned66.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned66.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned67.png') {
        document.getElementById('episodePNG').src = "Damned67.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned67.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned68.png') {
        document.getElementById('episodePNG').src = "Damned68.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned68.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned69.png') {
        document.getElementById('episodePNG').src = "Damned69.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned69.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned70.png') {
        document.getElementById('episodePNG').src = "Damned70.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned70.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned71.png') {
        document.getElementById('episodePNG').src = "Damned71.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned71.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned72.png') {
        document.getElementById('episodePNG').src = "Damned72.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned72.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned73.png') {
        document.getElementById('episodePNG').src = "Damned73.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned73.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned74.png') {
        document.getElementById('episodePNG').src = "Damned74.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned74.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned75.png') {
        document.getElementById('episodePNG').src = "Damned75.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned75.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned76.png') {
        document.getElementById('episodePNG').src = "Damned76.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned76.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned77.png') {
        document.getElementById('episodePNG').src = "Damned77.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned77.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned78.png') {
        document.getElementById('episodePNG').src = "Damned78.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned78.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned79.png') {
        document.getElementById('episodePNG').src = "Damned79.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned79.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned80.png') {
        document.getElementById('episodePNG').src = "Damned80.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned80.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned81.png') {
        document.getElementById('episodePNG').src = "Damned81.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned81.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned82.png') {
        document.getElementById('episodePNG').src = "Damned82.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned82.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned83.png') {
        document.getElementById('episodePNG').src = "Damned83.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned83.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned84.png') {
        document.getElementById('episodePNG').src = "Damned84.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned84.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned85.png') {
        document.getElementById('episodePNG').src = "Damned85.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned85.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned86.png') {
        document.getElementById('episodePNG').src = "Damned86.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned86.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned87.png') {
        document.getElementById('episodePNG').src = "Damned87.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned87.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned88.png') {
        document.getElementById('episodePNG').src = "Damned88.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned88.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned89.png') {
        document.getElementById('episodePNG').src = "Damned89.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned89.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned90.png') {
        document.getElementById('episodePNG').src = "Damned90.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned90.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned91.png') {
        document.getElementById('episodePNG').src = "Damned91.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned91.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned92.png') {
        document.getElementById('episodePNG').src = "Damned92.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned92.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned93.png') {
        document.getElementById('episodePNG').src = "Damned93.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned93.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned94.png') {
        document.getElementById('episodePNG').src = "Damned94.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned94.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned95.png') {
        document.getElementById('episodePNG').src = "Damned95.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned95.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned96.png') {
        document.getElementById('episodePNG').src = "Damned96.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned96.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned97.png') {
        document.getElementById('episodePNG').src = "Damned97.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned97.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned98.png') {
        document.getElementById('episodePNG').src = "Damned98.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned98.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned99.png') {
        document.getElementById('episodePNG').src = "Damned99.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned99.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned100.png') {
        document.getElementById('episodePNG').src = "Damned100.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned100.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned101.png') {
        document.getElementById('episodePNG').src = "Damned101.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned101.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned102.png') {
        document.getElementById('episodePNG').src = "Damned102.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned102.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned103.png') {
        document.getElementById('episodePNG').src = "Damned103.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned103.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned104.png') {
        document.getElementById('episodePNG').src = "Damned104.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned104.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned105.png') {
        document.getElementById('episodePNG').src = "Damned105.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned105.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned106.png') {
        document.getElementById('episodePNG').src = "Damned106.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned106.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned107.png') {
        document.getElementById('episodePNG').src = "Damned107.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned107.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned108.png') {
        document.getElementById('episodePNG').src = "Damned108.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned108.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned109.png') {
        document.getElementById('episodePNG').src = "Damned109.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned109.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned110.png') {
        document.getElementById('episodePNG').src = "Damned110.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned110.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned111.png') {
        document.getElementById('episodePNG').src = "Damned111.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned111.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned112.png') {
        document.getElementById('episodePNG').src = "Damned112.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned112.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned113.png') {
        document.getElementById('episodePNG').src = "Damned113.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned113.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned114.png') {
        document.getElementById('episodePNG').src = "Damned114.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned114.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned115.png') {
        document.getElementById('episodePNG').src = "Damned115.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned115.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned116.png') {
        document.getElementById('episodePNG').src = "Damned116.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned116.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned117.png') {
        document.getElementById('episodePNG').src = "Damned117.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned117.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned118.png') {
        document.getElementById('episodePNG').src = "Damned118.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned118.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned119.png') {
        document.getElementById('episodePNG').src = "Damned119.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned119.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned120.png') {
        document.getElementById('episodePNG').src = "Damned120.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned120.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned121.png') {
        document.getElementById('episodePNG').src = "Damned121.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned121.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned122.png') {
        document.getElementById('episodePNG').src = "Damned122.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned122.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned123.png') {
        document.getElementById('episodePNG').src = "Damned123.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned123.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned124.png') {
        document.getElementById('episodePNG').src = "Damned124.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned124.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned125.png') {
        document.getElementById('episodePNG').src = "Damned125.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned125.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned126.png') {
        document.getElementById('episodePNG').src = "Damned126.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned126.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned127.png') {
        document.getElementById('episodePNG').src = "Damned127.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned127.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned128.png') {
        document.getElementById('episodePNG').src = "Damned128.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned128.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned129.png') {
        document.getElementById('episodePNG').src = "Damned129.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned129.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned130.png') {
        document.getElementById('episodePNG').src = "Damned130.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned130.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned131.png') {
        document.getElementById('episodePNG').src = "Damned131.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned131.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned132.png') {
        document.getElementById('episodePNG').src = "Damned132.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned132.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned133.png') {
        document.getElementById('episodePNG').src = "Damned133.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned133.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned134.png') {
        document.getElementById('episodePNG').src = "Damned134.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned134.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned135.png') {
        document.getElementById('episodePNG').src = "Damned135.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned135.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned136.png') {
        document.getElementById('episodePNG').src = "Damned136.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned136.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned137.png') {
        document.getElementById('episodePNG').src = "Damned137.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned137.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned138.png') {
        document.getElementById('episodePNG').src = "Damned138.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned138.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Damned139.png') {
        document.getElementById('episodePNG').src = "Damned139.png";
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf('Damned139.png');
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    } else if (noRepeatButt == true) {
        episodePreDelete = episodes.indexOf('Season 1 Episode 5');
        episodeDelete = episodes.splice(episodePreDelete, 1);
    }
}
MethodArray = ['Method (1).png', 'Method (1).png', 'Method (2).png', 'Method (3).png', 'Method (4).png', 'Method (5).png', 'Method (6).png', 'Method (7).png', 'Method (8).png', 'Method (9).png', 'Method (10).png', 'Method (11).png', 'Method (12).png', 'Method (13).png', 'Method (14).png', 'Method (15).png', 'Method (16).png', 'Method (17).png', 'Method (18).png', 'Method (19).png', 'Method (20).png', 'Method (21).png', 'Method (22).png', 'Method (23).png', 'Method (24).png', 'Method (25).png', 'Method (26).png', 'Method (27).png', 'Method (28).png', 'Method (29).png', 'Method (30).png', 'Method (31).png', 'Method (32).png', 'Method (33).png', 'Method (34).png', 'Method (35).png', 'Method (36).png', 'Method (37).png', 'Method (38).png', 'Method (39).png', 'Method (40).png', 'Method (41).png', 'Method (42).png', 'Method (43).png', 'Method (44).png', 'Method (45).png', 'Method (46).png', 'Method (47).png', 'Method (48).png', 'Method (49).png', 'Method (50).png', 'Method (51).png', 'Method (52).png', 'Method (53).png', 'Method (54).png', 'Method (55).png', 'Method (56).png', 'Method (57).png', 'Method (58).png', 'Method (59).png', 'Method (60).png', 'Method (61).png', 'Method (62).png', 'Method (63).png', 'Method (64).png', 'Method (65).png', 'Method (66).png', 'Method (67).png', 'Method (68).png', 'Method (69).png', 'Method (70).png', 'Method (71).png', 'Method (72).png', 'Method (73).png', 'Method (74).png', 'Method (75).png', 'Method (76).png', 'Method (77).png', 'Method (78).png', 'Method (79).png', 'Method (80).png', 'Method (81).png', 'Method (82).png', 'Method (83).png', 'Method (84).png', 'Method (85).png', 'Method (86).png', 'Method (87).png', 'Method (88).png', 'Method (89).png', 'Method (90).png', 'Method (91).png', 'Method (92).png', 'Method (93).png', 'Method (94).png', 'Method (95).png', 'Method (96).png', 'Method (97).png', 'Method (98).png', 'Method (99).png', 'Method (100).png', 'Method (101).png', 'Method (102).png', 'Method (103).png', 'Method (104).png', 'Method (105).png', 'Method (106).png', 'Method (107).png', 'Method (108).png', 'Method (109).png', 'Method (110).png', 'Method (111).png', 'Method (112).png', 'Method (113).png', 'Method (114).png', 'Method (115).png', 'Method (116).png', 'Method (117).png', 'Method (118).png', 'Method (119).png', 'Method (120).png', 'Method (121).png', 'Method (122).png', 'Method (123).png', 'Method (124).png', 'Method (125).png', 'Method (126).png', 'Method (127).png', 'Method (128).png', 'Method (129).png', 'Method (130).png', 'Method (131).png', 'Method (132).png', 'Method (133).png', 'Method (134).png', ]
function S1E6Img() {

    episodeImg = randomValueFromArray(MethodArray);

    if (episodeImg == 'Method (1).png') {
        document.getElementById('episodePNG').src = "Method (1).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (1).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (2).png') {
        document.getElementById('episodePNG').src = "Method (2).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (2).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (3).png') {
        document.getElementById('episodePNG').src = "Method (3).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (3).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (4).png') {
        document.getElementById('episodePNG').src = "Method (4).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (4).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (5).png') {
        document.getElementById('episodePNG').src = "Method (5).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (5).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (6).png') {
        document.getElementById('episodePNG').src = "Method (6).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (6).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (7).png') {
        document.getElementById('episodePNG').src = "Method (7).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (7).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (8).png') {
        document.getElementById('episodePNG').src = "Method (8).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (8).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (9).png') {
        document.getElementById('episodePNG').src = "Method (9).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (9).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (10).png') {
        document.getElementById('episodePNG').src = "Method (10).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (10).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (11).png') {
        document.getElementById('episodePNG').src = "Method (11).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (11).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (12).png') {
        document.getElementById('episodePNG').src = "Method (12).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (12).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (13).png') {
        document.getElementById('episodePNG').src = "Method (13).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (13).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (14).png') {
        document.getElementById('episodePNG').src = "Method (14).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (14).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (15).png') {
        document.getElementById('episodePNG').src = "Method (15).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (15).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (16).png') {
        document.getElementById('episodePNG').src = "Method (16).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (16).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (17).png') {
        document.getElementById('episodePNG').src = "Method (17).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (17).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (18).png') {
        document.getElementById('episodePNG').src = "Method (18).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (18).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (19).png') {
        document.getElementById('episodePNG').src = "Method (19).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (19).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (20).png') {
        document.getElementById('episodePNG').src = "Method (20).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (20).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (21).png') {
        document.getElementById('episodePNG').src = "Method (21).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (21).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (22).png') {
        document.getElementById('episodePNG').src = "Method (22).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (22).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (23).png') {
        document.getElementById('episodePNG').src = "Method (23).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (23).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (24).png') {
        document.getElementById('episodePNG').src = "Method (24).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (24).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (25).png') {
        document.getElementById('episodePNG').src = "Method (25).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (25).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (26).png') {
        document.getElementById('episodePNG').src = "Method (26).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (26).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (27).png') {
        document.getElementById('episodePNG').src = "Method (27).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (27).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (28).png') {
        document.getElementById('episodePNG').src = "Method (28).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (28).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (29).png') {
        document.getElementById('episodePNG').src = "Method (29).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (29).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (30).png') {
        document.getElementById('episodePNG').src = "Method (30).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (30).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (31).png') {
        document.getElementById('episodePNG').src = "Method (31).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (31).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (32).png') {
        document.getElementById('episodePNG').src = "Method (32).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (32).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (33).png') {
        document.getElementById('episodePNG').src = "Method (33).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (33).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (34).png') {
        document.getElementById('episodePNG').src = "Method (34).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (34).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (35).png') {
        document.getElementById('episodePNG').src = "Method (35).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (35).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (36).png') {
        document.getElementById('episodePNG').src = "Method (36).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (36).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (37).png') {
        document.getElementById('episodePNG').src = "Method (37).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (37).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (38).png') {
        document.getElementById('episodePNG').src = "Method (38).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (38).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (39).png') {
        document.getElementById('episodePNG').src = "Method (39).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (39).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (40).png') {
        document.getElementById('episodePNG').src = "Method (40).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (40).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (41).png') {
        document.getElementById('episodePNG').src = "Method (41).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (41).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (42).png') {
        document.getElementById('episodePNG').src = "Method (42).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (42).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (43).png') {
        document.getElementById('episodePNG').src = "Method (43).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (43).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (44).png') {
        document.getElementById('episodePNG').src = "Method (44).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (44).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (45).png') {
        document.getElementById('episodePNG').src = "Method (45).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (45).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (46).png') {
        document.getElementById('episodePNG').src = "Method (46).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (46).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (47).png') {
        document.getElementById('episodePNG').src = "Method (47).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (47).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (48).png') {
        document.getElementById('episodePNG').src = "Method (48).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (48).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (49).png') {
        document.getElementById('episodePNG').src = "Method (49).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (49).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (50).png') {
        document.getElementById('episodePNG').src = "Method (50).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (50).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (51).png') {
        document.getElementById('episodePNG').src = "Method (51).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (51).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (52).png') {
        document.getElementById('episodePNG').src = "Method (52).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (52).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (53).png') {
        document.getElementById('episodePNG').src = "Method (53).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (53).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (54).png') {
        document.getElementById('episodePNG').src = "Method (54).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (54).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (55).png') {
        document.getElementById('episodePNG').src = "Method (55).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (55).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (56).png') {
        document.getElementById('episodePNG').src = "Method (56).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (56).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (57).png') {
        document.getElementById('episodePNG').src = "Method (57).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (57).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (58).png') {
        document.getElementById('episodePNG').src = "Method (58).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (58).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (59).png') {
        document.getElementById('episodePNG').src = "Method (59).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (59).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (60).png') {
        document.getElementById('episodePNG').src = "Method (60).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (60).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (61).png') {
        document.getElementById('episodePNG').src = "Method (61).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (61).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (62).png') {
        document.getElementById('episodePNG').src = "Method (62).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (62).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (63).png') {
        document.getElementById('episodePNG').src = "Method (63).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (63).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (64).png') {
        document.getElementById('episodePNG').src = "Method (64).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (64).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (65).png') {
        document.getElementById('episodePNG').src = "Method (65).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (65).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (66).png') {
        document.getElementById('episodePNG').src = "Method (66).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (66).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (67).png') {
        document.getElementById('episodePNG').src = "Method (67).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (67).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (68).png') {
        document.getElementById('episodePNG').src = "Method (68).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (68).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (69).png') {
        document.getElementById('episodePNG').src = "Method (69).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (69).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (70).png') {
        document.getElementById('episodePNG').src = "Method (70).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (70).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (71).png') {
        document.getElementById('episodePNG').src = "Method (71).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (71).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (72).png') {
        document.getElementById('episodePNG').src = "Method (72).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (72).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (73).png') {
        document.getElementById('episodePNG').src = "Method (73).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (73).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (74).png') {
        document.getElementById('episodePNG').src = "Method (74).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (74).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (75).png') {
        document.getElementById('episodePNG').src = "Method (75).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (75).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (76).png') {
        document.getElementById('episodePNG').src = "Method (76).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (76).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (77).png') {
        document.getElementById('episodePNG').src = "Method (77).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (77).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (78).png') {
        document.getElementById('episodePNG').src = "Method (78).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (78).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (79).png') {
        document.getElementById('episodePNG').src = "Method (79).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (79).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (80).png') {
        document.getElementById('episodePNG').src = "Method (80).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (80).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (81).png') {
        document.getElementById('episodePNG').src = "Method (81).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (81).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (82).png') {
        document.getElementById('episodePNG').src = "Method (82).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (82).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (83).png') {
        document.getElementById('episodePNG').src = "Method (83).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (83).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (84).png') {
        document.getElementById('episodePNG').src = "Method (84).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (84).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (85).png') {
        document.getElementById('episodePNG').src = "Method (85).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (85).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (86).png') {
        document.getElementById('episodePNG').src = "Method (86).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (86).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (87).png') {
        document.getElementById('episodePNG').src = "Method (87).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (87).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (88).png') {
        document.getElementById('episodePNG').src = "Method (88).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (88).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (89).png') {
        document.getElementById('episodePNG').src = "Method (89).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (89).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (90).png') {
        document.getElementById('episodePNG').src = "Method (90).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (90).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (91).png') {
        document.getElementById('episodePNG').src = "Method (91).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (91).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (92).png') {
        document.getElementById('episodePNG').src = "Method (92).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (92).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (93).png') {
        document.getElementById('episodePNG').src = "Method (93).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (93).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (94).png') {
        document.getElementById('episodePNG').src = "Method (94).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (94).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (95).png') {
        document.getElementById('episodePNG').src = "Method (95).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (95).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (96).png') {
        document.getElementById('episodePNG').src = "Method (96).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (96).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (97).png') {
        document.getElementById('episodePNG').src = "Method (97).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (97).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (98).png') {
        document.getElementById('episodePNG').src = "Method (98).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (98).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (99).png') {
        document.getElementById('episodePNG').src = "Method (99).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (99).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (100).png') {
        document.getElementById('episodePNG').src = "Method (100).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (100).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (101).png') {
        document.getElementById('episodePNG').src = "Method (101).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (101).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (102).png') {
        document.getElementById('episodePNG').src = "Method (102).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (102).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (103).png') {
        document.getElementById('episodePNG').src = "Method (103).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (103).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (104).png') {
        document.getElementById('episodePNG').src = "Method (104).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (104).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (105).png') {
        document.getElementById('episodePNG').src = "Method (105).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (105).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (106).png') {
        document.getElementById('episodePNG').src = "Method (106).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (106).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (107).png') {
        document.getElementById('episodePNG').src = "Method (107).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (107).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (108).png') {
        document.getElementById('episodePNG').src = "Method (108).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (108).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (109).png') {
        document.getElementById('episodePNG').src = "Method (109).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (109).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (110).png') {
        document.getElementById('episodePNG').src = "Method (110).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (110).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (111).png') {
        document.getElementById('episodePNG').src = "Method (111).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (111).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (112).png') {
        document.getElementById('episodePNG').src = "Method (112).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (112).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (113).png') {
        document.getElementById('episodePNG').src = "Method (113).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (113).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (114).png') {
        document.getElementById('episodePNG').src = "Method (114).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (114).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (115).png') {
        document.getElementById('episodePNG').src = "Method (115).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (115).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (116).png') {
        document.getElementById('episodePNG').src = "Method (116).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (116).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (117).png') {
        document.getElementById('episodePNG').src = "Method (117).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (117).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (118).png') {
        document.getElementById('episodePNG').src = "Method (118).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (118).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (119).png') {
        document.getElementById('episodePNG').src = "Method (119).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (119).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (120).png') {
        document.getElementById('episodePNG').src = "Method (120).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (120).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (121).png') {
        document.getElementById('episodePNG').src = "Method (121).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (121).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (122).png') {
        document.getElementById('episodePNG').src = "Method (122).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (122).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (123).png') {
        document.getElementById('episodePNG').src = "Method (123).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (123).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (124).png') {
        document.getElementById('episodePNG').src = "Method (124).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (124).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (125).png') {
        document.getElementById('episodePNG').src = "Method (125).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (125).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (126).png') {
        document.getElementById('episodePNG').src = "Method (126).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (126).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (127).png') {
        document.getElementById('episodePNG').src = "Method (127).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (127).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (128).png') {
        document.getElementById('episodePNG').src = "Method (128).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (128).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (129).png') {
        document.getElementById('episodePNG').src = "Method (129).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (129).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (130).png') {
        document.getElementById('episodePNG').src = "Method (130).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (130).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (131).png') {
        document.getElementById('episodePNG').src = "Method (131).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (131).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (132).png') {
        document.getElementById('episodePNG').src = "Method (132).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (132).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (133).png') {
        document.getElementById('episodePNG').src = "Method (133).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (133).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (episodeImg == 'Method (134).png') {
        document.getElementById('episodePNG').src = "Method (134).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (134).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    } else if (noRepeatButt == true) {
        episodePreDelete = episodes.indexOf('Season 1 Episode 6');
        episodeDelete = episodes.splice(episodePreDelete, 1);
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
