	placeGuess = document.getElementById('submitGuess')
    const episodeGuess = document.getElementById('episodeGuess')
    wrongOrRight = document.getElementById('wrongOrRight')
    playAgain = document.getElementById('playAgain')
    noRepeatFun = document.getElementById('noRepeatButtion')
    hardModeButton = document.getElementById('hardModeEnable')
    easyModeButton = document.getElementById('easyModeEnable')

    Correct = document.getElementById('Right')
    Incorrect = document.getElementById('Wrong')
    Percent = document.getElementById('Percent')

    var totCorrect = 0;
	var totWrong = 0;
	let alreadyGussed = false
    let noRepeatButt = false
    let hardMode = false
    let easyMode = false

window.addEventListener('load', restartArray);
window.addEventListener('load', tryAgain);
noRepeatFun.addEventListener('click', toggleRepeat);
hardModeButton.addEventListener('click', hardModeToggle);
easyModeButton.addEventListener('click', easyModeToggle);

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
function easyModeToggle() {
    if (easyMode == false) {
        easyMode = true;
        document.getElementById("easyModeEnable").style.backgroundColor = 'green';
    } else if (easyMode == true) {
        easyMode = false;
        document.getElementById("easyModeEnable").style.backgroundColor = 'white';
    }
}
function restartArray() {
    episodes = ['Season 1 Episode 1', 'Season 1 Episode 2', 'Season 1 Episode 3', 'Season 1 Episode 4', 'Season 1 Episode 5', 'Season 1 Episode 6', 'Season 1 Episode 7', 'Season 1 Episode 8', 'Season 1 Episode 9', 'Season 1 Episode 10', 'Season 1 Episode 11', ]//'Season 1 Episode 12', 'Season 1 Episode 13', 'Season 1 Episode 14', 'Season 1 Episode 15', 'Season 1 Episode 16', 'Season 1 Episode 17', 'Season 1 Episode 18', 'Season 1 Episode 19', 'Season 1 Episode 20', 'Season 1 Episode 21', 'Season 2 Episode 1', 'Season 2 Episode 2', 'Season 2 Episode 3', 'Season 2 Episode 4', 'Season 2 Episode 5', 'Season 2 Episode 6', 'Season 2 Episode 7', 'Season 2 Episode 8', 'Season 2 Episode 9', 'Season 2 Episode 10', 'Season 2 Episode 11', 'Season 2 Episode 12', 'Season 2 Episode 13', 'Season 2 Episode 14', 'Season 2 Episode 15', 'Season 2 Episode 16', 'Season 2 Episode 17', 'Season 2 Episode 18', 'Season 2 Episode 19', 'Season 2 Episode 20', 'Season 2 Episode 21', 'Season 2 Episode 21', 'Season 2 Episode 22', 'Season 2 Episode 23', 'Season 2 Episode 23', 'Season 2 Episode 24', 'Season 3 Episode 1', 'Season 3 Episode 2', 'Season 3 Episode 3', 'Season 3 Episode 4', 'Season 3 Episode 5', 'Season 3 Episode 6', 'Season 3 Episode 7', 'Season 3 Episode 8', 'Season 3 Episode 9', 'Season 3 Episode 10', 'Season 3 Episode 11', 'Season 3 Episode 12', 'Season 3 Episode 13', 'Season 3 Episode 14', 'Season 3 Episode 15', 'Season 3 Episode 16', 'Season 3 Episode 17', 'Season 3 Episode 18', 'Season 3 Episode 19', 'Season 3 Episode 20', 'Season 3 Episode 21', 'Season 3 Episode 22', 'Season 3 Episode 23', 'Season 3 Episode 24', 'Season 4 Episode 1', 'Season 4 Episode 2', 'Season 4 Episode 3', 'Season 4 Episode 4', 'Season 4 Episode 5', 'Season 4 Episode 6', 'Season 4 Episode 7', 'Season 4 Episode 8', 'Season 4 Episode 9', 'Season 4 Episode 10', 'Season 4 Episode 11', 'Season 4 Episode 12', 'Season 4 Episode 13', 'Season 4 Episode 14', 'Season 4 Episode 15', 'Season 4 Episode 16', 'Season 5 Episode 1', 'Season 5 Episode 2', 'Season 5 Episode 3', 'Season 5 Episode 4', 'Season 5 Episode 5', 'Season 5 Episode 6', 'Season 5 Episode 7', 'Season 5 Episode 8', 'Season 5 Episode 9', 'Season 5 Episode 10', 'Season 5 Episode 11', 'Season 5 Episode 12', 'Season 5 Episode 13', 'Season 5 Episode 14', 'Season 5 Episode 15', 'Season 5 Episode 16', 'Season 5 Episode 17', 'Season 5 Episode 18', 'Season 5 Episode 19', 'Season 5 Episode 20', 'Season 5 Episode 21', 'Season 5 Episode 22', 'Season 5 Episode 23', 'Season 5 Episode 24', 'Season 6 Episode 1', 'Season 6 Episode 2', 'Season 6 Episode 3', 'Season 6 Episode 4', 'Season 6 Episode 5', 'Season 6 Episode 6', 'Season 6 Episode 7', 'Season 6 Episode 8', 'Season 6 Episode 9', 'Season 6 Episode 10', 'Season 6 Episode 11', 'Season 6 Episode 12', 'Season 6 Episode 13', 'Season 6 Episode 14', 'Season 6 Episode 15', 'Season 6 Episode 16', 'Season 6 Episode 17', 'Season 6 Episode 18', 'Season 6 Episode 19', 'Season 6 Episode 20', 'Season 6 Episode 21', 'Season 7 Episode 1', ];
    pilotArray = ['Images/Pliot/Pilot1.png', 'Images/Pliot/Pilot2.png', 'Images/Pliot/Pilot3.png', 'Images/Pliot/Pilot4.png', 'Images/Pliot/Pilot5.png', 'Images/Pliot/Pilot6.png', 'Images/Pliot/Pilot7.png', 'Images/Pliot/Pilot8.png', 'Images/Pliot/Pilot9.png', 'Images/Pliot/Pilot10.png', 'Images/Pliot/Pilot11.png', 'Images/Pliot/Pilot12.png', 'Images/Pliot/Pilot13.png', 'Images/Pliot/Pilot14.png', 'Images/Pliot/Pilot15.png', 'Images/Pliot/Pilot16.png', 'Images/Pliot/Pilot17.png', 'Images/Pliot/Pilot18.png', 'Images/Pliot/Pilot19.png', 'Images/Pliot/Pilot20.png', 'Images/Pliot/Pilot21.png', 'Images/Pliot/Pilot22.png', 'Images/Pliot/Pilot23.png', 'Images/Pliot/Pilot24.png', 'Images/Pliot/Pilot25.png', 'Images/Pliot/Pilot26.png', 'Images/Pliot/Pilot27.png', 'Images/Pliot/Pilot28.png', 'Images/Pliot/Pilot29.png', 'Images/Pliot/Pilot30.png', 'Images/Pliot/Pilot31.png', 'Images/Pliot/Pilot32.png', 'Images/Pliot/Pilot33.png', 'Images/Pliot/Pilot34.png', 'Images/Pliot/Pilot35.png', 'Images/Pliot/Pilot36.png', 'Images/Pliot/Pilot37.png', 'Images/Pliot/Pilot38.png', 'Images/Pliot/Pilot39.png', 'Images/Pliot/Pilot40.png', 'Images/Pliot/Pilot41.png', 'Images/Pliot/Pilot42.png', 'Images/Pliot/Pilot43.png', 'Images/Pliot/Pilot44.png', 'Images/Pliot/Pilot45.png', 'Images/Pliot/Pilot46.png', 'Images/Pliot/Pilot47.png', 'Images/Pliot/Pilot48.png', 'Images/Pliot/Pilot49.png', 'Images/Pliot/Pilot50.png', 'Images/Pliot/Pilot51.png', 'Images/Pliot/Pilot52.png', 'Images/Pliot/Pilot53.png', 'Images/Pliot/Pilot54.png', 'Images/Pliot/Pilot55.png', 'Images/Pliot/Pilot56.png', 'Images/Pliot/Pilot57.png', 'Images/Pliot/Pilot58.png', 'Images/Pliot/Pilot59.png', 'Images/Pliot/Pilot60.png', 'Images/Pliot/Pilot61.png', 'Images/Pliot/Pilot62.png', 'Images/Pliot/Pilot63.png', 'Images/Pliot/Pilot64.png', 'Images/Pliot/Pilot65.png', 'Images/Pliot/Pilot66.png', 'Images/Pliot/Pilot67.png', 'Images/Pliot/Pilot68.png', 'Images/Pliot/Pilot69.png', 'Images/Pliot/Pilot70.png', 'Images/Pliot/Pilot71.png', 'Images/Pliot/Pilot72.png', 'Images/Pliot/Pilot73.png', 'Images/Pliot/Pilot74.png', 'Images/Pliot/Pilot75.png', 'Images/Pliot/Pilot76.png', 'Images/Pliot/Pilot77.png', 'Images/Pliot/Pilot78.png', 'Images/Pliot/Pilot79.png', 'Images/Pliot/Pilot80.png', 'Images/Pliot/Pilot81.png', 'Images/Pliot/Pilot82.png', 'Images/Pliot/Pilot83.png', 'Images/Pliot/Pilot84.png', 'Images/Pliot/Pilot85.png', 'Images/Pliot/Pilot86.png', 'Images/Pliot/Pilot87.png', 'Images/Pliot/Pilot88.png', 'Images/Pliot/Pilot89.png', 'Images/Pliot/Pilot90.png', 'Images/Pliot/Pilot91.png', 'Images/Pliot/Pilot92.png', 'Images/Pliot/Pilot93.png', 'Images/Pliot/Pilot94.png', 'Images/Pliot/Pilot95.png', 'Images/Pliot/Pilot96.png', 'Images/Pliot/Pilot97.png', 'Images/Pliot/Pilot98.png', 'Images/Pliot/Pilot99.png', 'Images/Pliot/Pilot100.png', 'Images/Pliot/Pilot101.png', 'Images/Pliot/Pilot102.png', ];
    paternityArray = ['Images/Paternity/Paternity1.png', 'Images/Paternity/Paternity2.png', 'Images/Paternity/Paternity3.png', 'Images/Paternity/Paternity4.png', 'Images/Paternity/Paternity5.png', 'Images/Paternity/Paternity6.png', 'Images/Paternity/Paternity7.png', 'Images/Paternity/Paternity8.png', 'Images/Paternity/Paternity9.png', 'Images/Paternity/Paternity10.png', 'Images/Paternity/Paternity11.png', 'Images/Paternity/Paternity12.png', 'Images/Paternity/Paternity13.png', 'Images/Paternity/Paternity14.png', 'Images/Paternity/Paternity15.png', 'Images/Paternity/Paternity16.png', 'Images/Paternity/Paternity17.png', 'Images/Paternity/Paternity18.png', 'Images/Paternity/Paternity19.png', 'Images/Paternity/Paternity20.png', 'Images/Paternity/Paternity21.png', 'Images/Paternity/Paternity22.png', 'Images/Paternity/Paternity23.png', 'Images/Paternity/Paternity24.png', 'Images/Paternity/Paternity25.png', 'Images/Paternity/Paternity26.png', 'Images/Paternity/Paternity27.png', 'Images/Paternity/Paternity28.png', 'Images/Paternity/Paternity29.png', 'Images/Paternity/Paternity30.png', 'Images/Paternity/Paternity31.png', 'Images/Paternity/Paternity32.png', 'Images/Paternity/Paternity33.png', 'Images/Paternity/Paternity34.png', 'Images/Paternity/Paternity35.png', 'Images/Paternity/Paternity36.png', 'Images/Paternity/Paternity37.png', 'Images/Paternity/Paternity38.png', 'Images/Paternity/Paternity39.png', 'Images/Paternity/Paternity40.png', 'Images/Paternity/Paternity41.png', 'Images/Paternity/Paternity42.png', 'Images/Paternity/Paternity43.png', 'Images/Paternity/Paternity44.png', 'Images/Paternity/Paternity45.png', 'Images/Paternity/Paternity46.png', 'Images/Paternity/Paternity47.png', 'Images/Paternity/Paternity48.png', 'Images/Paternity/Paternity49.png', 'Images/Paternity/Paternity50.png', 'Images/Paternity/Paternity51.png', 'Images/Paternity/Paternity52.png', 'Images/Paternity/Paternity53.png', 'Images/Paternity/Paternity54.png', 'Images/Paternity/Paternity55.png', 'Images/Paternity/Paternity56.png', 'Images/Paternity/Paternity57.png', 'Images/Paternity/Paternity58.png', 'Images/Paternity/Paternity59.png', 'Images/Paternity/Paternity60.png', 'Images/Paternity/Paternity61.png', 'Images/Paternity/Paternity62.png', 'Images/Paternity/Paternity63.png', 'Images/Paternity/Paternity64.png', 'Images/Paternity/Paternity65.png', 'Images/Paternity/Paternity66.png', 'Images/Paternity/Paternity67.png', 'Images/Paternity/Paternity68.png', 'Images/Paternity/Paternity69.png', 'Images/Paternity/Paternity70.png', 'Images/Paternity/Paternity71.png', 'Images/Paternity/Paternity72.png', 'Images/Paternity/Paternity73.png', 'Images/Paternity/Paternity74.png', 'Images/Paternity/Paternity75.png', 'Images/Paternity/Paternity76.png', 'Images/Paternity/Paternity77.png', 'Images/Paternity/Paternity78.png', 'Images/Paternity/Paternity79.png', 'Images/Paternity/Paternity80.png', 'Images/Paternity/Paternity81.png', 'Images/Paternity/Paternity82.png', 'Images/Paternity/Paternity83.png', 'Images/Paternity/Paternity84.png', 'Images/Paternity/Paternity85.png', 'Images/Paternity/Paternity86.png', 'Images/Paternity/Paternity87.png', 'Images/Paternity/Paternity88.png', 'Images/Paternity/Paternity89.png', 'Images/Paternity/Paternity90.png', 'Images/Paternity/Paternity91.png', 'Images/Paternity/Paternity92.png', 'Images/Paternity/Paternity93.png', 'Images/Paternity/Paternity94.png', 'Images/Paternity/Paternity95.png', 'Images/Paternity/Paternity96.png', 'Images/Paternity/Paternity97.png', 'Images/Paternity/Paternity98.png', 'Images/Paternity/Paternity99.png', 'Images/Paternity/Paternity100.png', 'Images/Paternity/Paternity101.png', 'Images/Paternity/Paternity102.png', 'Images/Paternity/Paternity103.png', 'Images/Paternity/Paternity104.png', 'Images/Paternity/Paternity105.png', 'Images/Paternity/Paternity106.png', 'Images/Paternity/Paternity107.png', 'Images/Paternity/Paternity108.png', 'Images/Paternity/Paternity109.png', 'Images/Paternity/Paternity110.png', 'Images/Paternity/Paternity111.png', 'Images/Paternity/Paternity112.png', 'Images/Paternity/Paternity113.png', 'Images/Paternity/Paternity114.png', 'Images/Paternity/Paternity115.png', 'Images/Paternity/Paternity116.png', 'Images/Paternity/Paternity117.png', 'Images/Paternity/Paternity118.png', 'Images/Paternity/Paternity119.png', 'Images/Paternity/Paternity120.png', 'Images/Paternity/Paternity121.png', 'Images/Paternity/Paternity122.png', 'Images/Paternity/Paternity123.png', ];
    occamArray = ['Images/Occam/Occam1.png', 'Images/Occam/Occam2.png', 'Images/Occam/Occam3.png', 'Images/Occam/Occam4.png', 'Images/Occam/Occam5.png', 'Images/Occam/Occam6.png', 'Images/Occam/Occam7.png', 'Images/Occam/Occam8.png', 'Images/Occam/Occam9.png', 'Images/Occam/Occam10.png', 'Images/Occam/Occam11.png', 'Images/Occam/Occam12.png', 'Images/Occam/Occam13.png', 'Images/Occam/Occam14.png', 'Images/Occam/Occam15.png', 'Images/Occam/Occam16.png', 'Images/Occam/Occam17.png', 'Images/Occam/Occam18.png', 'Images/Occam/Occam18.png', 'Images/Occam/Occam19.png', 'Images/Occam/Occam20.png', 'Images/Occam/Occam21.png', 'Images/Occam/Occam22.png', 'Images/Occam/Occam23.png', 'Images/Occam/Occam24.png', 'Images/Occam/Occam25.png', 'Images/Occam/Occam26.png', 'Images/Occam/Occam27.png', 'Images/Occam/Occam28.png', 'Images/Occam/Occam29.png', 'Images/Occam/Occam30.png', 'Images/Occam/Occam31.png', 'Images/Occam/Occam32.png', 'Images/Occam/Occam33.png', 'Images/Occam/Occam34.png', 'Images/Occam/Occam35.png', 'Images/Occam/Occam36.png', 'Images/Occam/Occam37.png', 'Images/Occam/Occam38.png', 'Images/Occam/Occam39.png', 'Images/Occam/Occam40.png', 'Images/Occam/Occam41.png', 'Images/Occam/Occam42.png', 'Images/Occam/Occam43.png', 'Images/Occam/Occam44.png', 'Images/Occam/Occam45.png', 'Images/Occam/Occam46.png', 'Images/Occam/Occam47.png', 'Images/Occam/Occam48.png', 'Images/Occam/Occam49.png', 'Images/Occam/Occam50.png', 'Images/Occam/Occam51.png', 'Images/Occam/Occam52.png', 'Images/Occam/Occam53.png', 'Images/Occam/Occam54.png', 'Images/Occam/Occam55.png', 'Images/Occam/Occam56.png', 'Images/Occam/Occam57.png', 'Images/Occam/Occam58.png', 'Images/Occam/Occam59.png', 'Images/Occam/Occam60.png', 'Images/Occam/Occam61.png', 'Images/Occam/Occam62.png', 'Images/Occam/Occam63.png', 'Images/Occam/Occam64.png', 'Images/Occam/Occam65.png', 'Images/Occam/Occam66.png', 'Images/Occam/Occam67.png', 'Images/Occam/Occam68.png', 'Images/Occam/Occam69.png', 'Images/Occam/Occam70.png', 'Images/Occam/Occam71.png', 'Images/Occam/Occam72.png', 'Images/Occam/Occam73.png', 'Images/Occam/Occam74.png', 'Images/Occam/Occam75.png', 'Images/Occam/Occam76.png', 'Images/Occam/Occam77.png', 'Images/Occam/Occam78.png', 'Images/Occam/Occam79.png', 'Images/Occam/Occam80.png', 'Images/Occam/Occam81.png', 'Images/Occam/Occam82.png', 'Images/Occam/Occam83.png', 'Images/Occam/Occam84.png', 'Images/Occam/Occam85.png', 'Images/Occam/Occam86.png', 'Images/Occam/Occam87.png', 'Images/Occam/Occam88.png', 'Images/Occam/Occam89.png', 'Images/Occam/Occam90.png', 'Images/Occam/Occam91.png', 'Images/Occam/Occam92.png', 'Images/Occam/Occam93.png', 'Images/Occam/Occam94.png', 'Images/Occam/Occam95.png', 'Images/Occam/Occam96.png', 'Images/Occam/Occam97.png', 'Images/Occam/Occam98.png', 'Images/Occam/Occam99.png', 'Images/Occam/Occam100.png', 'Images/Occam/Occam101.png', 'Images/Occam/Occam102.png', 'Images/Occam/Occam103.png', 'Images/Occam/Occam104.png', 'Images/Occam/Occam105.png', 'Images/Occam/Occam106.png', 'Images/Occam/Occam107.png', 'Images/Occam/Occam108.png', 'Images/Occam/Occam109.png', 'Images/Occam/Occam110.png', 'Images/Occam/Occam111.png', 'Images/Occam/Occam112.png', 'Images/Occam/Occam113.png', 'Images/Occam/Occam114.png', 'Images/Occam/Occam115.png', 'Images/Occam/Occam116.png', 'Images/Occam/Occam117.png', 'Images/Occam/Occam118.png', 'Images/Occam/Occam119.png', 'Images/Occam/Occam120.png', 'Images/Occam/Occam121.png', 'Images/Occam/Occam122.png', 'Images/Occam/Occam123.png', 'Images/Occam/Occam124.png', 'Images/Occam/Occam125.png', 'Images/Occam/Occam126.png', 'Images/Occam/Occam127.png', 'Images/Occam/Occam128.png', 'Images/Occam/Occam129.png', 'Images/Occam/Occam130.png', 'Images/Occam/Occam131.png', 'Images/Occam/Occam132.png', 'Images/Occam/Occam133.png', 'Images/Occam/Occam134.png', 'Images/Occam/Occam135.png', 'Images/Occam/Occam136.png', 'Images/Occam/Occam137.png', 'Images/Occam/Occam138.png', 'Images/Occam/Occam139.png', 'Images/Occam/Occam140.png', 'Images/Occam/Occam141.png', 'Images/Occam/Occam142.png', 'Images/Occam/Occam143.png', 'Images/Occam/Occam144.png', 'Images/Occam/Occam145.png', 'Images/Occam/Occam146.png', 'Images/Occam/Occam147.png', 'Images/Occam/Occam148.png', 'Images/Occam/Occam149.png', 'Images/Occam/Occam150.png', ];
    MaternityArray = ['Images/Maternity/Maternity1.png', 'Images/Maternity/Maternity2.png', 'Images/Maternity/Maternity3.png', 'Images/Maternity/Maternity4.png', 'Images/Maternity/Maternity5.png', 'Images/Maternity/Maternity6.png', 'Images/Maternity/Maternity7.png', 'Images/Maternity/Maternity8.png', 'Images/Maternity/Maternity9.png', 'Images/Maternity/Maternity10.png', 'Images/Maternity/Maternity11.png', 'Images/Maternity/Maternity12.png', 'Images/Maternity/Maternity13.png', 'Images/Maternity/Maternity14.png', 'Images/Maternity/Maternity15.png', 'Images/Maternity/Maternity16.png', 'Images/Maternity/Maternity17.png', 'Images/Maternity/Maternity18.png', 'Images/Maternity/Maternity19.png', 'Images/Maternity/Maternity20.png', 'Images/Maternity/Maternity21.png', 'Images/Maternity/Maternity22.png', 'Images/Maternity/Maternity23.png', 'Images/Maternity/Maternity24.png', 'Images/Maternity/Maternity25.png', 'Images/Maternity/Maternity26.png', 'Images/Maternity/Maternity27.png', 'Images/Maternity/Maternity28.png', 'Images/Maternity/Maternity29.png', 'Images/Maternity/Maternity30.png', 'Images/Maternity/Maternity31.png', 'Images/Maternity/Maternity32.png', 'Images/Maternity/Maternity33.png', 'Images/Maternity/Maternity34.png', 'Images/Maternity/Maternity35.png', 'Images/Maternity/Maternity36.png', 'Images/Maternity/Maternity37.png', 'Images/Maternity/Maternity38.png', 'Images/Maternity/Maternity39.png', 'Images/Maternity/Maternity40.png', 'Images/Maternity/Maternity41.png', 'Images/Maternity/Maternity42.png', 'Images/Maternity/Maternity43.png', 'Images/Maternity/Maternity44.png', 'Images/Maternity/Maternity45.png', 'Images/Maternity/Maternity46.png', 'Images/Maternity/Maternity47.png', 'Images/Maternity/Maternity48.png', 'Images/Maternity/Maternity49.png', 'Images/Maternity/Maternity50.png', 'Images/Maternity/Maternity51.png', 'Images/Maternity/Maternity52.png', 'Images/Maternity/Maternity53.png', 'Images/Maternity/Maternity54.png', 'Images/Maternity/Maternity55.png', 'Images/Maternity/Maternity56.png', 'Images/Maternity/Maternity57.png', 'Images/Maternity/Maternity58.png', 'Images/Maternity/Maternity59.png', 'Images/Maternity/Maternity60.png', 'Images/Maternity/Maternity61.png', 'Images/Maternity/Maternity62.png', 'Images/Maternity/Maternity63.png', 'Images/Maternity/Maternity64.png', 'Images/Maternity/Maternity65.png', 'Images/Maternity/Maternity66.png', 'Images/Maternity/Maternity67.png', 'Images/Maternity/Maternity68.png', 'Images/Maternity/Maternity69.png', 'Images/Maternity/Maternity70.png', 'Images/Maternity/Maternity71.png', 'Images/Maternity/Maternity72.png', 'Images/Maternity/Maternity73.png', 'Images/Maternity/Maternity74.png', 'Images/Maternity/Maternity75.png', 'Images/Maternity/Maternity76.png', 'Images/Maternity/Maternity77.png', 'Images/Maternity/Maternity78.png', 'Images/Maternity/Maternity79.png', 'Images/Maternity/Maternity80.png', 'Images/Maternity/Maternity81.png', 'Images/Maternity/Maternity82.png', 'Images/Maternity/Maternity83.png', 'Images/Maternity/Maternity84.png', 'Images/Maternity/Maternity85.png', 'Images/Maternity/Maternity86.png', 'Images/Maternity/Maternity87.png', 'Images/Maternity/Maternity88.png', 'Images/Maternity/Maternity89.png', 'Images/Maternity/Maternity90.png', 'Images/Maternity/Maternity91.png', 'Images/Maternity/Maternity92.png', 'Images/Maternity/Maternity93.png', 'Images/Maternity/Maternity94.png', 'Images/Maternity/Maternity95.png', 'Images/Maternity/Maternity96.png', 'Images/Maternity/Maternity97.png', 'Images/Maternity/Maternity98.png', 'Images/Maternity/Maternity99.png', 'Images/Maternity/Maternity100.png', 'Images/Maternity/Maternity101.png', 'Images/Maternity/Maternity102.png', 'Images/Maternity/Maternity103.png', 'Images/Maternity/Maternity104.png', 'Images/Maternity/Maternity105.png', 'Images/Maternity/Maternity106.png', 'Images/Maternity/Maternity107.png', 'Images/Maternity/Maternity108.png', 'Images/Maternity/Maternity109.png', 'Images/Maternity/Maternity110.png', 'Images/Maternity/Maternity111.png', 'Images/Maternity/Maternity112.png', 'Images/Maternity/Maternity113.png', 'Images/Maternity/Maternity114.png', 'Images/Maternity/Maternity115.png', 'Images/Maternity/Maternity116.png', 'Images/Maternity/Maternity117.png', 'Images/Maternity/Maternity118.png', 'Images/Maternity/Maternity119.png', ]
    DamnedArray = ['Images/Damned/Damned1.png', 'Images/Damned/Damned2.png', 'Images/Damned/Damned3.png', 'Images/Damned/Damned4.png', 'Images/Damned/Damned4.png', 'Images/Damned/Damned5.png', 'Images/Damned/Damned6.png', 'Images/Damned/Damned7.png', 'Images/Damned/Damned8.png', 'Images/Damned/Damned9.png', 'Images/Damned/Damned10.png', 'Images/Damned/Damned11.png', 'Images/Damned/Damned12.png', 'Images/Damned/Damned13.png', 'Images/Damned/Damned14.png', 'Images/Damned/Damned15.png', 'Images/Damned/Damned16.png', 'Images/Damned/Damned17.png', 'Images/Damned/Damned18.png', 'Images/Damned/Damned19.png', 'Images/Damned/Damned20.png', 'Images/Damned/Damned21.png', 'Images/Damned/Damned22.png', 'Images/Damned/Damned23.png', 'Images/Damned/Damned24.png', 'Images/Damned/Damned25.png', 'Images/Damned/Damned26.png', 'Images/Damned/Damned27.png', 'Images/Damned/Damned28.png', 'Images/Damned/Damned29.png', 'Images/Damned/Damned30.png', 'Images/Damned/Damned31.png', 'Images/Damned/Damned32.png', 'Images/Damned/Damned33.png', 'Images/Damned/Damned34.png', 'Images/Damned/Damned35.png', 'Images/Damned/Damned36.png', 'Images/Damned/Damned37.png', 'Images/Damned/Damned38.png', 'Images/Damned/Damned39.png', 'Images/Damned/Damned40.png', 'Images/Damned/Damned41.png', 'Images/Damned/Damned42.png', 'Images/Damned/Damned43.png', 'Images/Damned/Damned44.png', 'Images/Damned/Damned45.png', 'Images/Damned/Damned46.png', 'Images/Damned/Damned47.png', 'Images/Damned/Damned48.png', 'Images/Damned/Damned49.png', 'Images/Damned/Damned50.png', 'Images/Damned/Damned51.png', 'Images/Damned/Damned52.png', 'Images/Damned/Damned53.png', 'Images/Damned/Damned54.png', 'Images/Damned/Damned55.png', 'Images/Damned/Damned56.png', 'Images/Damned/Damned57.png', 'Images/Damned/Damned58.png', 'Images/Damned/Damned59.png', 'Images/Damned/Damned60.png', 'Images/Damned/Damned61.png', 'Images/Damned/Damned62.png', 'Images/Damned/Damned63.png', 'Images/Damned/Damned64.png', 'Images/Damned/Damned65.png', 'Images/Damned/Damned66.png', 'Images/Damned/Damned67.png', 'Images/Damned/Damned68.png', 'Images/Damned/Damned69.png', 'Images/Damned/Damned70.png', 'Images/Damned/Damned71.png', 'Images/Damned/Damned72.png', 'Images/Damned/Damned73.png', 'Images/Damned/Damned74.png', 'Images/Damned/Damned75.png', 'Images/Damned/Damned76.png', 'Images/Damned/Damned77.png', 'Images/Damned/Damned78.png', 'Images/Damned/Damned79.png', 'Images/Damned/Damned80.png', 'Images/Damned/Damned81.png', 'Images/Damned/Damned82.png', 'Images/Damned/Damned83.png', 'Images/Damned/Damned84.png', 'Images/Damned/Damned85.png', 'Images/Damned/Damned86.png', 'Images/Damned/Damned87.png', 'Images/Damned/Damned88.png', 'Images/Damned/Damned89.png', 'Images/Damned/Damned90.png', 'Images/Damned/Damned91.png', 'Images/Damned/Damned92.png', 'Images/Damned/Damned93.png', 'Images/Damned/Damned94.png', 'Images/Damned/Damned95.png', 'Images/Damned/Damned96.png', 'Images/Damned/Damned97.png', 'Images/Damned/Damned98.png', 'Images/Damned/Damned99.png', 'Images/Damned/Damned100.png', 'Images/Damned/Damned100.png', 'Images/Damned/Damned101.png', 'Images/Damned/Damned102.png', 'Images/Damned/Damned103.png', 'Images/Damned/Damned104.png', 'Images/Damned/Damned105.png', 'Images/Damned/Damned106.png', 'Images/Damned/Damned107.png', 'Images/Damned/Damned108.png', 'Images/Damned/Damned109.png', 'Images/Damned/Damned110.png', 'Images/Damned/Damned111.png', 'Images/Damned/Damned112.png', 'Images/Damned/Damned113.png', 'Images/Damned/Damned114.png', 'Images/Damned/Damned115.png', 'Images/Damned/Damned116.png', 'Images/Damned/Damned117.png', 'Images/Damned/Damned118.png', 'Images/Damned/Damned119.png', 'Images/Damned/Damned120.png', 'Images/Damned/Damned121.png', 'Images/Damned/Damned122.png', 'Images/Damned/Damned123.png', 'Images/Damned/Damned124.png', 'Images/Damned/Damned125.png', 'Images/Damned/Damned126.png', 'Images/Damned/Damned127.png', 'Images/Damned/Damned128.png', 'Images/Damned/Damned129.png', 'Images/Damned/Damned130.png', 'Images/Damned/Damned131.png', 'Images/Damned/Damned132.png', 'Images/Damned/Damned133.png', 'Images/Damned/Damned134.png', 'Images/Damned/Damned135.png', 'Images/Damned/Damned136.png', 'Images/Damned/Damned137.png', 'Images/Damned/Damned138.png', 'Images/Damned/Damned139.png', ];
    MethodArray = ['Images/Method/Method (1).png', 'Images/Method/Method (2).png', 'Images/Method/Method (3).png', 'Images/Method/Method (4).png', 'Images/Method/Method (5).png', 'Images/Method/Method (6).png', 'Images/Method/Method (7).png', 'Images/Method/Method (8).png', 'Images/Method/Method (9).png', 'Images/Method/Method (10).png', 'Images/Method/Method (11).png', 'Images/Method/Method (12).png', 'Images/Method/Method (13).png', 'Images/Method/Method (14).png', 'Images/Method/Method (15).png', 'Images/Method/Method (16).png', 'Images/Method/Method (17).png', 'Images/Method/Method (18).png', 'Images/Method/Method (19).png', 'Images/Method/Method (20).png', 'Images/Method/Method (21).png', 'Images/Method/Method (22).png', 'Images/Method/Method (23).png', 'Images/Method/Method (24).png', 'Images/Method/Method (25).png', 'Images/Method/Method (26).png', 'Images/Method/Method (27).png', 'Images/Method/Method (28).png', 'Images/Method/Method (29).png', 'Images/Method/Method (30).png', 'Images/Method/Method (31).png', 'Images/Method/Method (32).png', 'Images/Method/Method (33).png', 'Images/Method/Method (34).png', 'Images/Method/Method (35).png', 'Images/Method/Method (36).png', 'Images/Method/Method (37).png', 'Images/Method/Method (38).png', 'Images/Method/Method (39).png', 'Images/Method/Method (40).png', 'Images/Method/Method (41).png', 'Images/Method/Method (42).png', 'Images/Method/Method (43).png', 'Images/Method/Method (44).png', 'Images/Method/Method (45).png', 'Images/Method/Method (46).png', 'Images/Method/Method (47).png', 'Images/Method/Method (48).png', 'Images/Method/Method (49).png', 'Images/Method/Method (50).png', 'Images/Method/Method (51).png', 'Images/Method/Method (52).png', 'Images/Method/Method (53).png', 'Images/Method/Method (54).png', 'Images/Method/Method (55).png', 'Images/Method/Method (56).png', 'Images/Method/Method (57).png', 'Images/Method/Method (58).png', 'Images/Method/Method (59).png', 'Images/Method/Method (60).png', 'Images/Method/Method (61).png', 'Images/Method/Method (62).png', 'Images/Method/Method (63).png', 'Images/Method/Method (64).png', 'Images/Method/Method (65).png', 'Images/Method/Method (66).png', 'Images/Method/Method (67).png', 'Images/Method/Method (68).png', 'Images/Method/Method (69).png', 'Images/Method/Method (70).png', 'Images/Method/Method (71).png', 'Images/Method/Method (72).png', 'Images/Method/Method (73).png', 'Images/Method/Method (74).png', 'Images/Method/Method (75).png', 'Images/Method/Method (76).png', 'Images/Method/Method (77).png', 'Images/Method/Method (78).png', 'Images/Method/Method (79).png', 'Images/Method/Method (80).png', 'Images/Method/Method (81).png', 'Images/Method/Method (82).png', 'Images/Method/Method (83).png', 'Images/Method/Method (84).png', 'Images/Method/Method (85).png', 'Images/Method/Method (86).png', 'Images/Method/Method (87).png', 'Images/Method/Method (88).png', 'Images/Method/Method (89).png', 'Images/Method/Method (90).png', 'Images/Method/Method (91).png', 'Images/Method/Method (92).png', 'Images/Method/Method (93).png', 'Images/Method/Method (94).png', 'Images/Method/Method (95).png', 'Images/Method/Method (96).png', 'Images/Method/Method (97).png', 'Images/Method/Method (98).png', 'Images/Method/Method (99).png', 'Images/Method/Method (100).png', 'Images/Method/Method (101).png', 'Images/Method/Method (102).png', 'Images/Method/Method (103).png', 'Images/Method/Method (104).png', 'Images/Method/Method (105).png', 'Images/Method/Method (106).png', 'Images/Method/Method (107).png', 'Images/Method/Method (108).png', 'Images/Method/Method (109).png', 'Images/Method/Method (110).png', 'Images/Method/Method (111).png', 'Images/Method/Method (112).png', 'Images/Method/Method (113).png', 'Images/Method/Method (114).png', 'Images/Method/Method (115).png', 'Images/Method/Method (116).png', 'Images/Method/Method (117).png', 'Images/Method/Method (118).png', 'Images/Method/Method (119).png', 'Images/Method/Method (120).png', 'Images/Method/Method (121).png', 'Images/Method/Method (122).png', 'Images/Method/Method (123).png', 'Images/Method/Method (124).png', 'Images/Method/Method (125).png', 'Images/Method/Method (126).png', 'Images/Method/Method (127).png', 'Images/Method/Method (128).png', 'Images/Method/Method (129).png', 'Images/Method/Method (130).png', 'Images/Method/Method (131).png', 'Images/Method/Method (132).png', 'Images/Method/Method (133).png', 'Images/Method/Method (134).png', ]
    FidelityArray = ['Images/Fidelity/fidelity (1).png', 'Images/Fidelity/fidelity (2).png', 'Images/Fidelity/fidelity (3).png', 'Images/Fidelity/fidelity (4).png', 'Images/Fidelity/fidelity (5).png', 'Images/Fidelity/fidelity (6).png', 'Images/Fidelity/fidelity (7).png', 'Images/Fidelity/fidelity (8).png', 'Images/Fidelity/fidelity (9).png', 'Images/Fidelity/fidelity (10).png', 'Images/Fidelity/fidelity (11).png', 'Images/Fidelity/fidelity (12).png', 'Images/Fidelity/fidelity (13).png', 'Images/Fidelity/fidelity (14).png', 'Images/Fidelity/fidelity (15).png', 'Images/Fidelity/fidelity (16).png', 'Images/Fidelity/fidelity (17).png', 'Images/Fidelity/fidelity (18).png', 'Images/Fidelity/fidelity (19).png', 'Images/Fidelity/fidelity (20).png', 'Images/Fidelity/fidelity (21).png', 'Images/Fidelity/fidelity (22).png', 'Images/Fidelity/fidelity (23).png', 'Images/Fidelity/fidelity (24).png', 'Images/Fidelity/fidelity (25).png', 'Images/Fidelity/fidelity (26).png', 'Images/Fidelity/fidelity (27).png', 'Images/Fidelity/fidelity (28).png', 'Images/Fidelity/fidelity (29).png', 'Images/Fidelity/fidelity (30).png', 'Images/Fidelity/fidelity (31).png', 'Images/Fidelity/fidelity (32).png', 'Images/Fidelity/fidelity (33).png', 'Images/Fidelity/fidelity (34).png', 'Images/Fidelity/fidelity (35).png', 'Images/Fidelity/fidelity (36).png', 'Images/Fidelity/fidelity (37).png', 'Images/Fidelity/fidelity (38).png', 'Images/Fidelity/fidelity (39).png', 'Images/Fidelity/fidelity (40).png', 'Images/Fidelity/fidelity (41).png', 'Images/Fidelity/fidelity (42).png', 'Images/Fidelity/fidelity (43).png', 'Images/Fidelity/fidelity (44).png', 'Images/Fidelity/fidelity (45).png', 'Images/Fidelity/fidelity (46).png', 'Images/Fidelity/fidelity (47).png', 'Images/Fidelity/fidelity (48).png', 'Images/Fidelity/fidelity (49).png', 'Images/Fidelity/fidelity (50).png', 'Images/Fidelity/fidelity (51).png', 'Images/Fidelity/fidelity (52).png', 'Images/Fidelity/fidelity (53).png', 'Images/Fidelity/fidelity (54).png', 'Images/Fidelity/fidelity (55).png', 'Images/Fidelity/fidelity (56).png', 'Images/Fidelity/fidelity (57).png', 'Images/Fidelity/fidelity (58).png', 'Images/Fidelity/fidelity (59).png', 'Images/Fidelity/fidelity (60).png', 'Images/Fidelity/fidelity (61).png', 'Images/Fidelity/fidelity (62).png', 'Images/Fidelity/fidelity (63).png', 'Images/Fidelity/fidelity (64).png', 'Images/Fidelity/fidelity (65).png', 'Images/Fidelity/fidelity (66).png', 'Images/Fidelity/fidelity (67).png', 'Images/Fidelity/fidelity (68).png', 'Images/Fidelity/fidelity (69).png', 'Images/Fidelity/fidelity (70).png', 'Images/Fidelity/fidelity (71).png', 'Images/Fidelity/fidelity (72).png', 'Images/Fidelity/fidelity (73).png', 'Images/Fidelity/fidelity (74).png', 'Images/Fidelity/fidelity (75).png', 'Images/Fidelity/fidelity (76).png', 'Images/Fidelity/fidelity (77).png', 'Images/Fidelity/fidelity (78).png', 'Images/Fidelity/fidelity (79).png', 'Images/Fidelity/fidelity (80).png', 'Images/Fidelity/fidelity (81).png', 'Images/Fidelity/fidelity (82).png', 'Images/Fidelity/fidelity (83).png', 'Images/Fidelity/fidelity (84).png', 'Images/Fidelity/fidelity (85).png', 'Images/Fidelity/fidelity (86).png', 'Images/Fidelity/fidelity (87).png', 'Images/Fidelity/fidelity (88).png', 'Images/Fidelity/fidelity (89).png', 'Images/Fidelity/fidelity (90).png', 'Images/Fidelity/fidelity (91).png', 'Images/Fidelity/fidelity (92).png', 'Images/Fidelity/fidelity (93).png', 'Images/Fidelity/fidelity (94).png', 'Images/Fidelity/fidelity (95).png', 'Images/Fidelity/fidelity (96).png', 'Images/Fidelity/fidelity (97).png', 'Images/Fidelity/fidelity (98).png', 'Images/Fidelity/fidelity (99).png', 'Images/Fidelity/fidelity (100).png', 'Images/Fidelity/fidelity (101).png', 'Images/Fidelity/fidelity (102).png', 'Images/Fidelity/fidelity (103).png', 'Images/Fidelity/fidelity (104).png', 'Images/Fidelity/fidelity (105).png', 'Images/Fidelity/fidelity (106).png', 'Images/Fidelity/fidelity (107).png', 'Images/Fidelity/fidelity (108).png', 'Images/Fidelity/fidelity (109).png', 'Images/Fidelity/fidelity (110).png', 'Images/Fidelity/fidelity (111).png', 'Images/Fidelity/fidelity (112).png', 'Images/Fidelity/fidelity (113).png', 'Images/Fidelity/fidelity (114).png', 'Images/Fidelity/fidelity (115).png', 'Images/Fidelity/fidelity (116).png', 'Images/Fidelity/fidelity (117).png', 'Images/Fidelity/fidelity (118).png', 'Images/Fidelity/fidelity (119).png', 'Images/Fidelity/fidelity (120).png', 'Images/Fidelity/fidelity (121).png', 'Images/Fidelity/fidelity (122).png', 'Images/Fidelity/fidelity (123).png', 'Images/Fidelity/fidelity (124).png', 'Images/Fidelity/fidelity (125).png', 'Images/Fidelity/fidelity (126).png', 'Images/Fidelity/fidelity (127).png', 'Images/Fidelity/fidelity (128).png', 'Images/Fidelity/fidelity (129).png', 'Images/Fidelity/fidelity (130).png', 'Images/Fidelity/fidelity (131).png', 'Images/Fidelity/fidelity (132).png', 'Images/Fidelity/fidelity (133).png', 'Images/Fidelity/fidelity (134).png', 'Images/Fidelity/fidelity (135).png', 'Images/Fidelity/fidelity (136).png', 'Images/Fidelity/fidelity (137).png', 'Images/Fidelity/fidelity (138).png', 'Images/Fidelity/fidelity (139).png', 'Images/Fidelity/fidelity (140).png', 'Images/Fidelity/fidelity (141).png', 'Images/Fidelity/fidelity (142).png', 'Images/Fidelity/fidelity (143).png', 'Images/Fidelity/fidelity (144).png', 'Images/Fidelity/fidelity (145).png', 'Images/Fidelity/fidelity (146).png', 'Images/Fidelity/fidelity (147).png', 'Images/Fidelity/fidelity (148).png', 'Images/Fidelity/fidelity (149).png', 'Images/Fidelity/fidelity (150).png', 'Images/Fidelity/fidelity (151).png', 'Images/Fidelity/fidelity (152).png', 'Images/Fidelity/fidelity (153).png', 'Images/Fidelity/fidelity (154).png', 'Images/Fidelity/fidelity (155).png', 'Images/Fidelity/fidelity (156).png', 'Images/Fidelity/fidelity (157).png', 'Images/Fidelity/fidelity (158).png', 'Images/Fidelity/fidelity (159).png', 'Images/Fidelity/fidelity (160).png', 'Images/Fidelity/fidelity (161).png', 'Images/Fidelity/fidelity (162).png', 'Images/Fidelity/fidelity (163).png', 'Images/Fidelity/fidelity (164).png', 'Images/Fidelity/fidelity (165).png', 'Images/Fidelity/fidelity (166).png', 'Images/Fidelity/fidelity (167).png', 'Images/Fidelity/fidelity (168).png', 'Images/Fidelity/fidelity (169).png', 'Images/Fidelity/fidelity (170).png', 'Images/Fidelity/fidelity (171).png', 'Images/Fidelity/fidelity (172).png', 'Images/Fidelity/fidelity (173).png', 'Images/Fidelity/fidelity (174).png', 'Images/Fidelity/fidelity (175).png', 'Images/Fidelity/fidelity (176).png', 'Images/Fidelity/fidelity (177).png', 'Images/Fidelity/fidelity (178).png', 'Images/Fidelity/fidelity (179).png', 'Images/Fidelity/fidelity (180).png', 'Images/Fidelity/fidelity (181).png', 'Images/Fidelity/fidelity (182).png', 'Images/Fidelity/fidelity (183).png', 'Images/Fidelity/fidelity (184).png', 'Images/Fidelity/fidelity (185).png', 'Images/Fidelity/fidelity (186).png', 'Images/Fidelity/fidelity (187).png', 'Images/Fidelity/fidelity (188).png', 'Images/Fidelity/fidelity (189).png', 'Images/Fidelity/fidelity (190).png', 'Images/Fidelity/fidelity (191).png', 'Images/Fidelity/fidelity (192).png', 'Images/Fidelity/fidelity (193).png', 'Images/Fidelity/fidelity (194).png', 'Images/Fidelity/fidelity (195).png', 'Images/Fidelity/fidelity (196).png', 'Images/Fidelity/fidelity (197).png', 'Images/Fidelity/fidelity (198).png', 'Images/Fidelity/fidelity (199).png', 'Images/Fidelity/fidelity (200).png', ]
    PoisonArray = ['Images/Poison/Poison (1).png', 'Images/Poison/Poison (2).png', 'Images/Poison/Poison (3).png', 'Images/Poison/Poison (4).png', 'Images/Poison/Poison (5).png', 'Images/Poison/Poison (6).png', 'Images/Poison/Poison (7).png', 'Images/Poison/Poison (8).png', 'Images/Poison/Poison (9).png', 'Images/Poison/Poison (10).png', 'Images/Poison/Poison (11).png', 'Images/Poison/Poison (12).png', 'Images/Poison/Poison (13).png', 'Images/Poison/Poison (14).png', 'Images/Poison/Poison (15).png', 'Images/Poison/Poison (16).png', 'Images/Poison/Poison (17).png', 'Images/Poison/Poison (18).png', 'Images/Poison/Poison (19).png', 'Images/Poison/Poison (20).png', 'Images/Poison/Poison (21).png', 'Images/Poison/Poison (22).png', 'Images/Poison/Poison (23).png', 'Images/Poison/Poison (24).png', 'Images/Poison/Poison (25).png', 'Images/Poison/Poison (26).png', 'Images/Poison/Poison (27).png', 'Images/Poison/Poison (28).png', 'Images/Poison/Poison (29).png', 'Images/Poison/Poison (30).png', 'Images/Poison/Poison (31).png', 'Images/Poison/Poison (32).png', 'Images/Poison/Poison (33).png', 'Images/Poison/Poison (34).png', 'Images/Poison/Poison (35).png', 'Images/Poison/Poison (36).png', 'Images/Poison/Poison (37).png', 'Images/Poison/Poison (38).png', 'Images/Poison/Poison (39).png', 'Images/Poison/Poison (40).png', 'Images/Poison/Poison (41).png', 'Images/Poison/Poison (42).png', 'Images/Poison/Poison (43).png', 'Images/Poison/Poison (44).png', 'Images/Poison/Poison (45).png', 'Images/Poison/Poison (46).png', 'Images/Poison/Poison (47).png', 'Images/Poison/Poison (48).png', 'Images/Poison/Poison (49).png', 'Images/Poison/Poison (50).png', 'Images/Poison/Poison (51).png', 'Images/Poison/Poison (52).png', 'Images/Poison/Poison (53).png', 'Images/Poison/Poison (54).png', 'Images/Poison/Poison (55).png', 'Images/Poison/Poison (56).png', 'Images/Poison/Poison (57).png', 'Images/Poison/Poison (58).png', 'Images/Poison/Poison (59).png', 'Images/Poison/Poison (60).png', 'Images/Poison/Poison (61).png', 'Images/Poison/Poison (62).png', 'Images/Poison/Poison (63).png', 'Images/Poison/Poison (64).png', 'Images/Poison/Poison (65).png', 'Images/Poison/Poison (66).png', 'Images/Poison/Poison (67).png', 'Images/Poison/Poison (68).png', 'Images/Poison/Poison (69).png', 'Images/Poison/Poison (70).png', 'Images/Poison/Poison (71).png', 'Images/Poison/Poison (72).png', 'Images/Poison/Poison (73).png', 'Images/Poison/Poison (74).png', 'Images/Poison/Poison (75).png', 'Images/Poison/Poison (76).png', 'Images/Poison/Poison (77).png', 'Images/Poison/Poison (78).png', 'Images/Poison/Poison (79).png', 'Images/Poison/Poison (80).png', 'Images/Poison/Poison (81).png', 'Images/Poison/Poison (82).png', 'Images/Poison/Poison (83).png', 'Images/Poison/Poison (84).png', 'Images/Poison/Poison (85).png', 'Images/Poison/Poison (86).png', 'Images/Poison/Poison (87).png', 'Images/Poison/Poison (88).png', 'Images/Poison/Poison (89).png', 'Images/Poison/Poison (90).png', 'Images/Poison/Poison (91).png', 'Images/Poison/Poison (92).png', 'Images/Poison/Poison (93).png', 'Images/Poison/Poison (94).png', 'Images/Poison/Poison (95).png', 'Images/Poison/Poison (96).png', 'Images/Poison/Poison (97).png', 'Images/Poison/Poison (98).png', 'Images/Poison/Poison (99).png', 'Images/Poison/Poison (100).png', 'Images/Poison/Poison (101).png', 'Images/Poison/Poison (102).png', 'Images/Poison/Poison (103).png', 'Images/Poison/Poison (104).png', 'Images/Poison/Poison (105).png', 'Images/Poison/Poison (106).png', 'Images/Poison/Poison (107).png', 'Images/Poison/Poison (108).png', 'Images/Poison/Poison (109).png', 'Images/Poison/Poison (110).png', 'Images/Poison/Poison (111).png', 'Images/Poison/Poison (112).png', 'Images/Poison/Poison (113).png', 'Images/Poison/Poison (114).png', 'Images/Poison/Poison (115).png', 'Images/Poison/Poison (116).png', 'Images/Poison/Poison (117).png', 'Images/Poison/Poison (118).png', 'Images/Poison/Poison (119).png', 'Images/Poison/Poison (120).png', 'Images/Poison/Poison (121).png', 'Images/Poison/Poison (122).png', 'Images/Poison/Poison (123).png', 'Images/Poison/Poison (124).png', 'Images/Poison/Poison (125).png', 'Images/Poison/Poison (126).png', 'Images/Poison/Poison (127).png', 'Images/Poison/Poison (128).png', 'Images/Poison/Poison (129).png', 'Images/Poison/Poison (130).png', 'Images/Poison/Poison (131).png', 'Images/Poison/Poison (132).png', 'Images/Poison/Poison (133).png', 'Images/Poison/Poison (134).png', 'Images/Poison/Poison (135).png', 'Images/Poison/Poison (136).png', 'Images/Poison/Poison (137).png', 'Images/Poison/Poison (138).png', 'Images/Poison/Poison (139).png', 'Images/Poison/Poison (140).png', 'Images/Poison/Poison (141).png', 'Images/Poison/Poison (142).png', 'Images/Poison/Poison (143).png', 'Images/Poison/Poison (144).png', 'Images/Poison/Poison (145).png', 'Images/Poison/Poison (146).png', 'Images/Poison/Poison (147).png', 'Images/Poison/Poison (148).png', 'Images/Poison/Poison (149).png', 'Images/Poison/Poison (150).png', 'Images/Poison/Poison (151).png', 'Images/Poison/Poison (152).png', 'Images/Poison/Poison (153).png', 'Images/Poison/Poison (154).png', 'Images/Poison/Poison (155).png', 'Images/Poison/Poison (156).png', 'Images/Poison/Poison (157).png', 'Images/Poison/Poison (158).png', 'Images/Poison/Poison (159).png', 'Images/Poison/Poison (160).png', 'Images/Poison/Poison (161).png', 'Images/Poison/Poison (162).png', 'Images/Poison/Poison (163).png', 'Images/Poison/Poison (164).png', 'Images/Poison/Poison (165).png', 'Images/Poison/Poison (166).png', 'Images/Poison/Poison (167).png', 'Images/Poison/Poison (168).png', 'Images/Poison/Poison (169).png', 'Images/Poison/Poison (170).png', 'Images/Poison/Poison (171).png', 'Images/Poison/Poison (172).png', 'Images/Poison/Poison (173).png', 'Images/Poison/Poison (174).png', 'Images/Poison/Poison (175).png', 'Images/Poison/Poison (176).png', 'Images/Poison/Poison (177).png', 'Images/Poison/Poison (178).png', 'Images/Poison/Poison (179).png', 'Images/Poison/Poison (180).png', 'Images/Poison/Poison (181).png', 'Images/Poison/Poison (182).png', 'Images/Poison/Poison (183).png', 'Images/Poison/Poison (184).png', 'Images/Poison/Poison (185).png', 'Images/Poison/Poison (186).png', 'Images/Poison/Poison (187).png', 'Images/Poison/Poison (188).png', 'Images/Poison/Poison (189).png', 'Images/Poison/Poison (190).png', 'Images/Poison/Poison (191).png', 'Images/Poison/Poison (192).png', 'Images/Poison/Poison (193).png', 'Images/Poison/Poison (194).png', 'Images/Poison/Poison (195).png', 'Images/Poison/Poison (196).png', 'Images/Poison/Poison (197).png', 'Images/Poison/Poison (198).png', 'Images/Poison/Poison (199).png', 'Images/Poison/Poison (200).png', 'Images/Poison/Poison (201).png', 'Images/Poison/Poison (202).png', 'Images/Poison/Poison (203).png', 'Images/Poison/Poison (204).png', 'Images/Poison/Poison (205).png', 'Images/Poison/Poison (206).png', 'Images/Poison/Poison (207).png', 'Images/Poison/Poison (208).png', 'Images/Poison/Poison (209).png', 'Images/Poison/Poison (210).png', 'Images/Poison/Poison (211).png', 'Images/Poison/Poison (212).png', 'Images/Poison/Poison (213).png', 'Images/Poison/Poison (214).png', 'Images/Poison/Poison (215).png', 'Images/Poison/Poison (216).png', 'Images/Poison/Poison (217).png', 'Images/Poison/Poison (218).png', 'Images/Poison/Poison (219).png', 'Images/Poison/Poison (220).png', 'Images/Poison/Poison (221).png', ]
    DNRArray = ['Images/DNR/DNR (1).png', 'Images/DNR/DNR (2).png', 'Images/DNR/DNR (3).png', 'Images/DNR/DNR (4).png', 'Images/DNR/DNR (5).png', 'Images/DNR/DNR (6).png', 'Images/DNR/DNR (7).png', 'Images/DNR/DNR (8).png', 'Images/DNR/DNR (9).png', 'Images/DNR/DNR (10).png', 'Images/DNR/DNR (11).png', 'Images/DNR/DNR (12).png', 'Images/DNR/DNR (13).png', 'Images/DNR/DNR (14).png', 'Images/DNR/DNR (15).png', 'Images/DNR/DNR (16).png', 'Images/DNR/DNR (17).png', 'Images/DNR/DNR (18).png', 'Images/DNR/DNR (19).png', 'Images/DNR/DNR (20).png', 'Images/DNR/DNR (21).png', 'Images/DNR/DNR (22).png', 'Images/DNR/DNR (23).png', 'Images/DNR/DNR (24).png', 'Images/DNR/DNR (25).png', 'Images/DNR/DNR (26).png', 'Images/DNR/DNR (27).png', 'Images/DNR/DNR (28).png', 'Images/DNR/DNR (29).png', 'Images/DNR/DNR (30).png', 'Images/DNR/DNR (31).png', 'Images/DNR/DNR (32).png', 'Images/DNR/DNR (33).png', 'Images/DNR/DNR (34).png', 'Images/DNR/DNR (35).png', 'Images/DNR/DNR (36).png', 'Images/DNR/DNR (37).png', 'Images/DNR/DNR (38).png', 'Images/DNR/DNR (39).png', 'Images/DNR/DNR (40).png', 'Images/DNR/DNR (41).png', 'Images/DNR/DNR (42).png', 'Images/DNR/DNR (43).png', 'Images/DNR/DNR (44).png', 'Images/DNR/DNR (45).png', 'Images/DNR/DNR (46).png', 'Images/DNR/DNR (47).png', 'Images/DNR/DNR (48).png', 'Images/DNR/DNR (49).png', 'Images/DNR/DNR (50).png', 'Images/DNR/DNR (51).png', 'Images/DNR/DNR (52).png', 'Images/DNR/DNR (53).png', 'Images/DNR/DNR (54).png', 'Images/DNR/DNR (55).png', 'Images/DNR/DNR (56).png', 'Images/DNR/DNR (57).png', 'Images/DNR/DNR (58).png', 'Images/DNR/DNR (59).png', 'Images/DNR/DNR (60).png', 'Images/DNR/DNR (61).png', 'Images/DNR/DNR (62).png', 'Images/DNR/DNR (63).png', 'Images/DNR/DNR (64).png', 'Images/DNR/DNR (65).png', 'Images/DNR/DNR (66).png', 'Images/DNR/DNR (67).png', 'Images/DNR/DNR (68).png', 'Images/DNR/DNR (69).png', 'Images/DNR/DNR (70).png', 'Images/DNR/DNR (71).png', 'Images/DNR/DNR (72).png', 'Images/DNR/DNR (73).png', 'Images/DNR/DNR (74).png', 'Images/DNR/DNR (75).png', 'Images/DNR/DNR (76).png', 'Images/DNR/DNR (77).png', 'Images/DNR/DNR (78).png', 'Images/DNR/DNR (79).png', 'Images/DNR/DNR (80).png', 'Images/DNR/DNR (81).png', 'Images/DNR/DNR (82).png', 'Images/DNR/DNR (83).png', 'Images/DNR/DNR (84).png', 'Images/DNR/DNR (85).png', 'Images/DNR/DNR (86).png', 'Images/DNR/DNR (87).png', 'Images/DNR/DNR (88).png', 'Images/DNR/DNR (89).png', 'Images/DNR/DNR (90).png', 'Images/DNR/DNR (91).png', 'Images/DNR/DNR (92).png', 'Images/DNR/DNR (93).png', 'Images/DNR/DNR (94).png', 'Images/DNR/DNR (95).png', 'Images/DNR/DNR (96).png', 'Images/DNR/DNR (97).png', 'Images/DNR/DNR (98).png', 'Images/DNR/DNR (99).png', 'Images/DNR/DNR (100).png', 'Images/DNR/DNR (101).png', 'Images/DNR/DNR (102).png', 'Images/DNR/DNR (103).png', 'Images/DNR/DNR (104).png', 'Images/DNR/DNR (105).png', 'Images/DNR/DNR (106).png', 'Images/DNR/DNR (107).png', 'Images/DNR/DNR (108).png', 'Images/DNR/DNR (109).png', 'Images/DNR/DNR (110).png', 'Images/DNR/DNR (111).png', 'Images/DNR/DNR (112).png', 'Images/DNR/DNR (113).png', 'Images/DNR/DNR (114).png', 'Images/DNR/DNR (115).png', 'Images/DNR/DNR (116).png', 'Images/DNR/DNR (117).png', 'Images/DNR/DNR (118).png', 'Images/DNR/DNR (119).png', 'Images/DNR/DNR (120).png', 'Images/DNR/DNR (121).png', 'Images/DNR/DNR (122).png', 'Images/DNR/DNR (123).png', 'Images/DNR/DNR (124).png', 'Images/DNR/DNR (125).png', 'Images/DNR/DNR (126).png', 'Images/DNR/DNR (127).png', 'Images/DNR/DNR (128).png', 'Images/DNR/DNR (129).png', 'Images/DNR/DNR (130).png', 'Images/DNR/DNR (131).png', 'Images/DNR/DNR (132).png', 'Images/DNR/DNR (133).png', 'Images/DNR/DNR (134).png', 'Images/DNR/DNR (135).png', 'Images/DNR/DNR (136).png', 'Images/DNR/DNR (137).png', 'Images/DNR/DNR (138).png', 'Images/DNR/DNR (139).png', 'Images/DNR/DNR (140).png', 'Images/DNR/DNR (141).png', 'Images/DNR/DNR (142).png', 'Images/DNR/DNR (143).png', 'Images/DNR/DNR (144).png', 'Images/DNR/DNR (145).png', 'Images/DNR/DNR (146).png', 'Images/DNR/DNR (147).png', 'Images/DNR/DNR (148).png', 'Images/DNR/DNR (149).png', 'Images/DNR/DNR (150).png', 'Images/DNR/DNR (151).png', 'Images/DNR/DNR (152).png', 'Images/DNR/DNR (153).png', 'Images/DNR/DNR (154).png', 'Images/DNR/DNR (155).png', 'Images/DNR/DNR (156).png', 'Images/DNR/DNR (157).png', 'Images/DNR/DNR (158).png', 'Images/DNR/DNR (159).png', 'Images/DNR/DNR (160).png', 'Images/DNR/DNR (161).png', 'Images/DNR/DNR (162).png', 'Images/DNR/DNR (163).png', 'Images/DNR/DNR (164).png', 'Images/DNR/DNR (165).png', 'Images/DNR/DNR (166).png', 'Images/DNR/DNR (167).png', 'Images/DNR/DNR (168).png', 'Images/DNR/DNR (169).png', 'Images/DNR/DNR (170).png', 'Images/DNR/DNR (171).png', 'Images/DNR/DNR (172).png', 'Images/DNR/DNR (173).png', 'Images/DNR/DNR (174).png', 'Images/DNR/DNR (175).png', 'Images/DNR/DNR (176).png', 'Images/DNR/DNR (177).png', 'Images/DNR/DNR (178).png', 'Images/DNR/DNR (179).png', 'Images/DNR/DNR (180).png', 'Images/DNR/DNR (181).png', 'Images/DNR/DNR (182).png', 'Images/DNR/DNR (183).png', 'Images/DNR/DNR (184).png', 'Images/DNR/DNR (185).png', 'Images/DNR/DNR (186).png', 'Images/DNR/DNR (187).png', 'Images/DNR/DNR (188).png', 'Images/DNR/DNR (189).png', 'Images/DNR/DNR (190).png', 'Images/DNR/DNR (191).png', 'Images/DNR/DNR (192).png', 'Images/DNR/DNR (193).png', 'Images/DNR/DNR (194).png', 'Images/DNR/DNR (195).png', 'Images/DNR/DNR (196).png', ]
    HistoriesArray = ['Images/Histories/Histories (1).png', 'Images/Histories/Histories (2).png', 'Images/Histories/Histories (3).png', 'Images/Histories/Histories (4).png', 'Images/Histories/Histories (5).png', 'Images/Histories/Histories (6).png', 'Images/Histories/Histories (7).png', 'Images/Histories/Histories (8).png', 'Images/Histories/Histories (9).png', 'Images/Histories/Histories (10).png', 'Images/Histories/Histories (11).png', 'Images/Histories/Histories (12).png', 'Images/Histories/Histories (13).png', 'Images/Histories/Histories (14).png', 'Images/Histories/Histories (15).png', 'Images/Histories/Histories (16).png', 'Images/Histories/Histories (17).png', 'Images/Histories/Histories (18).png', 'Images/Histories/Histories (19).png', 'Images/Histories/Histories (20).png', 'Images/Histories/Histories (21).png', 'Images/Histories/Histories (22).png', 'Images/Histories/Histories (23).png', 'Images/Histories/Histories (24).png', 'Images/Histories/Histories (25).png', 'Images/Histories/Histories (26).png', 'Images/Histories/Histories (27).png', 'Images/Histories/Histories (28).png', 'Images/Histories/Histories (29).png', 'Images/Histories/Histories (30).png', 'Images/Histories/Histories (31).png', 'Images/Histories/Histories (32).png', 'Images/Histories/Histories (33).png', 'Images/Histories/Histories (34).png', 'Images/Histories/Histories (35).png', 'Images/Histories/Histories (36).png', 'Images/Histories/Histories (37).png', 'Images/Histories/Histories (38).png', 'Images/Histories/Histories (39).png', 'Images/Histories/Histories (40).png', 'Images/Histories/Histories (41).png', 'Images/Histories/Histories (42).png', 'Images/Histories/Histories (43).png', 'Images/Histories/Histories (44).png', 'Images/Histories/Histories (45).png', 'Images/Histories/Histories (46).png', 'Images/Histories/Histories (47).png', 'Images/Histories/Histories (48).png', 'Images/Histories/Histories (49).png', 'Images/Histories/Histories (50).png', 'Images/Histories/Histories (51).png', 'Images/Histories/Histories (52).png', 'Images/Histories/Histories (53).png', 'Images/Histories/Histories (54).png', 'Images/Histories/Histories (55).png', 'Images/Histories/Histories (56).png', 'Images/Histories/Histories (57).png', 'Images/Histories/Histories (58).png', 'Images/Histories/Histories (59).png', 'Images/Histories/Histories (60).png', 'Images/Histories/Histories (61).png', 'Images/Histories/Histories (62).png', 'Images/Histories/Histories (63).png', 'Images/Histories/Histories (64).png', 'Images/Histories/Histories (65).png', 'Images/Histories/Histories (66).png', 'Images/Histories/Histories (67).png', 'Images/Histories/Histories (68).png', 'Images/Histories/Histories (69).png', 'Images/Histories/Histories (70).png', 'Images/Histories/Histories (71).png', 'Images/Histories/Histories (72).png', 'Images/Histories/Histories (73).png', 'Images/Histories/Histories (74).png', 'Images/Histories/Histories (75).png', 'Images/Histories/Histories (76).png', 'Images/Histories/Histories (77).png', 'Images/Histories/Histories (78).png', 'Images/Histories/Histories (79).png', 'Images/Histories/Histories (80).png', 'Images/Histories/Histories (81).png', 'Images/Histories/Histories (82).png', 'Images/Histories/Histories (83).png', 'Images/Histories/Histories (84).png', 'Images/Histories/Histories (85).png', 'Images/Histories/Histories (86).png', 'Images/Histories/Histories (87).png', 'Images/Histories/Histories (88).png', 'Images/Histories/Histories (89).png', 'Images/Histories/Histories (90).png', 'Images/Histories/Histories (91).png', 'Images/Histories/Histories (92).png', 'Images/Histories/Histories (93).png', 'Images/Histories/Histories (94).png', 'Images/Histories/Histories (95).png', 'Images/Histories/Histories (96).png', 'Images/Histories/Histories (97).png', 'Images/Histories/Histories (98).png', 'Images/Histories/Histories (99).png', 'Images/Histories/Histories (100).png', 'Images/Histories/Histories (101).png', 'Images/Histories/Histories (102).png', 'Images/Histories/Histories (103).png', 'Images/Histories/Histories (104).png', 'Images/Histories/Histories (105).png', 'Images/Histories/Histories (106).png', 'Images/Histories/Histories (107).png', 'Images/Histories/Histories (108).png', 'Images/Histories/Histories (109).png', 'Images/Histories/Histories (110).png', 'Images/Histories/Histories (111).png', 'Images/Histories/Histories (112).png', 'Images/Histories/Histories (113).png', 'Images/Histories/Histories (114).png', 'Images/Histories/Histories (115).png', 'Images/Histories/Histories (116).png', 'Images/Histories/Histories (117).png', 'Images/Histories/Histories (118).png', 'Images/Histories/Histories (119).png', 'Images/Histories/Histories (120).png', 'Images/Histories/Histories (121).png', 'Images/Histories/Histories (122).png', 'Images/Histories/Histories (123).png', 'Images/Histories/Histories (124).png', 'Images/Histories/Histories (125).png', 'Images/Histories/Histories (126).png', 'Images/Histories/Histories (127).png', 'Images/Histories/Histories (128).png', 'Images/Histories/Histories (129).png', 'Images/Histories/Histories (130).png', 'Images/Histories/Histories (131).png', 'Images/Histories/Histories (132).png', 'Images/Histories/Histories (133).png', 'Images/Histories/Histories (134).png', 'Images/Histories/Histories (135).png', 'Images/Histories/Histories (136).png', 'Images/Histories/Histories (137).png', 'Images/Histories/Histories (138).png', 'Images/Histories/Histories (139).png', 'Images/Histories/Histories (140).png', 'Images/Histories/Histories (141).png', 'Images/Histories/Histories (142).png', 'Images/Histories/Histories (143).png', 'Images/Histories/Histories (144).png', 'Images/Histories/Histories (145).png', 'Images/Histories/Histories (146).png', 'Images/Histories/Histories (147).png', 'Images/Histories/Histories (148).png', 'Images/Histories/Histories (149).png', 'Images/Histories/Histories (150).png', 'Images/Histories/Histories (151).png', 'Images/Histories/Histories (152).png', 'Images/Histories/Histories (153).png', 'Images/Histories/Histories (154).png', 'Images/Histories/Histories (155).png', 'Images/Histories/Histories (156).png', 'Images/Histories/Histories (157).png', 'Images/Histories/Histories (158).png', 'Images/Histories/Histories (159).png', 'Images/Histories/Histories (160).png', 'Images/Histories/Histories (161).png', 'Images/Histories/Histories (162).png', 'Images/Histories/Histories (163).png', 'Images/Histories/Histories (164).png', 'Images/Histories/Histories (165).png', 'Images/Histories/Histories (166).png', 'Images/Histories/Histories (167).png', 'Images/Histories/Histories (168).png', 'Images/Histories/Histories (169).png', 'Images/Histories/Histories (170).png', 'Images/Histories/Histories (171).png', 'Images/Histories/Histories (172).png', 'Images/Histories/Histories (173).png', 'Images/Histories/Histories (174).png', 'Images/Histories/Histories (175).png', 'Images/Histories/Histories (176).png', 'Images/Histories/Histories (177).png', 'Images/Histories/Histories (178).png', 'Images/Histories/Histories (179).png', 'Images/Histories/Histories (180).png', 'Images/Histories/Histories (181).png', 'Images/Histories/Histories (182).png', 'Images/Histories/Histories (183).png', 'Images/Histories/Histories (184).png', 'Images/Histories/Histories (185).png', 'Images/Histories/Histories (186).png', 'Images/Histories/Histories (187).png', 'Images/Histories/Histories (188).png', 'Images/Histories/Histories (189).png', 'Images/Histories/Histories (190).png', 'Images/Histories/Histories (191).png', 'Images/Histories/Histories (192).png', 'Images/Histories/Histories (193).png', 'Images/Histories/Histories (194).png', 'Images/Histories/Histories (195).png', 'Images/Histories/Histories (196).png', 'Images/Histories/Histories (197).png', 'Images/Histories/Histories (198).png', 'Images/Histories/Histories (199).png', 'Images/Histories/Histories (200).png', 'Images/Histories/Histories (201).png', 'Images/Histories/Histories (202).png', 'Images/Histories/Histories (203).png', 'Images/Histories/Histories (204).png', 'Images/Histories/Histories (205).png', 'Images/Histories/Histories (206).png', ]
	DetoxArray = ['Images/Detox/Detox (1).png', 'Images/Detox/Detox (2).png', 'Images/Detox/Detox (3).png', 'Images/Detox/Detox (4).png', 'Images/Detox/Detox (5).png', 'Images/Detox/Detox (6).png', 'Images/Detox/Detox (7).png', 'Images/Detox/Detox (8).png', 'Images/Detox/Detox (9).png', 'Images/Detox/Detox (10).png', 'Images/Detox/Detox (11).png', 'Images/Detox/Detox (12).png', 'Images/Detox/Detox (13).png', 'Images/Detox/Detox (14).png', 'Images/Detox/Detox (15).png', 'Images/Detox/Detox (16).png', 'Images/Detox/Detox (17).png', 'Images/Detox/Detox (18).png', 'Images/Detox/Detox (19).png', 'Images/Detox/Detox (20).png', 'Images/Detox/Detox (21).png', 'Images/Detox/Detox (22).png', 'Images/Detox/Detox (23).png', 'Images/Detox/Detox (24).png', 'Images/Detox/Detox (25).png', 'Images/Detox/Detox (26).png', 'Images/Detox/Detox (27).png', 'Images/Detox/Detox (28).png', 'Images/Detox/Detox (29).png', 'Images/Detox/Detox (30).png', 'Images/Detox/Detox (31).png', 'Images/Detox/Detox (32).png', 'Images/Detox/Detox (33).png', 'Images/Detox/Detox (34).png', 'Images/Detox/Detox (35).png', 'Images/Detox/Detox (36).png', 'Images/Detox/Detox (37).png', 'Images/Detox/Detox (38).png', 'Images/Detox/Detox (39).png', 'Images/Detox/Detox (40).png', 'Images/Detox/Detox (41).png', 'Images/Detox/Detox (42).png', 'Images/Detox/Detox (43).png', 'Images/Detox/Detox (44).png', 'Images/Detox/Detox (45).png', 'Images/Detox/Detox (46).png', 'Images/Detox/Detox (47).png', 'Images/Detox/Detox (48).png', 'Images/Detox/Detox (49).png', 'Images/Detox/Detox (50).png', 'Images/Detox/Detox (51).png', 'Images/Detox/Detox (52).png', 'Images/Detox/Detox (53).png', 'Images/Detox/Detox (54).png', 'Images/Detox/Detox (55).png', 'Images/Detox/Detox (56).png', 'Images/Detox/Detox (57).png', 'Images/Detox/Detox (58).png', 'Images/Detox/Detox (59).png', 'Images/Detox/Detox (60).png', 'Images/Detox/Detox (61).png', 'Images/Detox/Detox (62).png', 'Images/Detox/Detox (63).png', 'Images/Detox/Detox (64).png', 'Images/Detox/Detox (65).png', 'Images/Detox/Detox (66).png', 'Images/Detox/Detox (67).png', 'Images/Detox/Detox (68).png', 'Images/Detox/Detox (69).png', 'Images/Detox/Detox (70).png', 'Images/Detox/Detox (71).png', 'Images/Detox/Detox (72).png', 'Images/Detox/Detox (73).png', 'Images/Detox/Detox (74).png', 'Images/Detox/Detox (75).png', 'Images/Detox/Detox (76).png', 'Images/Detox/Detox (77).png', 'Images/Detox/Detox (78).png', 'Images/Detox/Detox (79).png', 'Images/Detox/Detox (80).png', 'Images/Detox/Detox (81).png', 'Images/Detox/Detox (82).png', 'Images/Detox/Detox (83).png', 'Images/Detox/Detox (84).png', 'Images/Detox/Detox (85).png', 'Images/Detox/Detox (86).png', 'Images/Detox/Detox (87).png', 'Images/Detox/Detox (88).png', 'Images/Detox/Detox (89).png', 'Images/Detox/Detox (90).png', 'Images/Detox/Detox (91).png', 'Images/Detox/Detox (92).png', 'Images/Detox/Detox (93).png', 'Images/Detox/Detox (94).png', 'Images/Detox/Detox (95).png', 'Images/Detox/Detox (96).png', 'Images/Detox/Detox (97).png', 'Images/Detox/Detox (98).png', 'Images/Detox/Detox (99).png', 'Images/Detox/Detox (100).png', 'Images/Detox/Detox (101).png', 'Images/Detox/Detox (102).png', 'Images/Detox/Detox (103).png', 'Images/Detox/Detox (104).png', 'Images/Detox/Detox (105).png', 'Images/Detox/Detox (106).png', 'Images/Detox/Detox (107).png', 'Images/Detox/Detox (108).png', 'Images/Detox/Detox (109).png', 'Images/Detox/Detox (110).png', 'Images/Detox/Detox (111).png', 'Images/Detox/Detox (112).png', 'Images/Detox/Detox (113).png', 'Images/Detox/Detox (114).png', 'Images/Detox/Detox (115).png', 'Images/Detox/Detox (116).png', 'Images/Detox/Detox (117).png', 'Images/Detox/Detox (118).png', 'Images/Detox/Detox (119).png', 'Images/Detox/Detox (120).png', 'Images/Detox/Detox (121).png', 'Images/Detox/Detox (122).png', 'Images/Detox/Detox (123).png', 'Images/Detox/Detox (124).png', 'Images/Detox/Detox (125).png', 'Images/Detox/Detox (126).png', 'Images/Detox/Detox (127).png', 'Images/Detox/Detox (128).png', 'Images/Detox/Detox (129).png', 'Images/Detox/Detox (130).png', 'Images/Detox/Detox (131).png', 'Images/Detox/Detox (132).png', 'Images/Detox/Detox (133).png', 'Images/Detox/Detox (134).png', 'Images/Detox/Detox (135).png', 'Images/Detox/Detox (136).png', 'Images/Detox/Detox (137).png', 'Images/Detox/Detox (138).png', 'Images/Detox/Detox (139).png', 'Images/Detox/Detox (140).png', 'Images/Detox/Detox (141).png', 'Images/Detox/Detox (142).png', 'Images/Detox/Detox (143).png', 'Images/Detox/Detox (144).png', 'Images/Detox/Detox (145).png', 'Images/Detox/Detox (146).png', 'Images/Detox/Detox (147).png', 'Images/Detox/Detox (148).png', 'Images/Detox/Detox (149).png', 'Images/Detox/Detox (150).png', 'Images/Detox/Detox (151).png', 'Images/Detox/Detox (152).png', 'Images/Detox/Detox (153).png', 'Images/Detox/Detox (154).png', 'Images/Detox/Detox (155).png', 'Images/Detox/Detox (156).png', 'Images/Detox/Detox (157).png', 'Images/Detox/Detox (158).png', 'Images/Detox/Detox (159).png', 'Images/Detox/Detox (160).png', 'Images/Detox/Detox (161).png', 'Images/Detox/Detox (162).png', 'Images/Detox/Detox (163).png', 'Images/Detox/Detox (164).png', 'Images/Detox/Detox (165).png', 'Images/Detox/Detox (166).png', 'Images/Detox/Detox (167).png', 'Images/Detox/Detox (168).png', 'Images/Detox/Detox (169).png', 'Images/Detox/Detox (170).png', 'Images/Detox/Detox (171).png', 'Images/Detox/Detox (172).png', 'Images/Detox/Detox (173).png', 'Images/Detox/Detox (174).png', 'Images/Detox/Detox (175).png', 'Images/Detox/Detox (176).png', 'Images/Detox/Detox (177).png', 'Images/Detox/Detox (178).png', 'Images/Detox/Detox (179).png', 'Images/Detox/Detox (180).png', 'Images/Detox/Detox (181).png', 'Images/Detox/Detox (182).png', 'Images/Detox/Detox (183).png', 'Images/Detox/Detox (184).png', 'Images/Detox/Detox (185).png', 'Images/Detox/Detox (186).png', 'Images/Detox/Detox (187).png', 'Images/Detox/Detox (188).png', 'Images/Detox/Detox (189).png', 'Images/Detox/Detox (190).png', 'Images/Detox/Detox (191).png', 'Images/Detox/Detox (192).png', 'Images/Detox/Detox (193).png', 'Images/Detox/Detox (194).png', 'Images/Detox/Detox (195).png', 'Images/Detox/Detox (196).png', 'Images/Detox/Detox (197).png', 'Images/Detox/Detox (198).png', 'Images/Detox/Detox (199).png', 'Images/Detox/Detox (200).png', 'Images/Detox/Detox (201).png', 'Images/Detox/Detox (202).png', 'Images/Detox/Detox (203).png', 'Images/Detox/Detox (204).png', 'Images/Detox/Detox (205).png', 'Images/Detox/Detox (206).png', 'Images/Detox/Detox (207).png', 'Images/Detox/Detox (208).png', 'Images/Detox/Detox (209).png', 'Images/Detox/Detox (210).png', 'Images/Detox/Detox (211).png', 'Images/Detox/Detox (212).png', 'Images/Detox/Detox (213).png', 'Images/Detox/Detox (214).png', 'Images/Detox/Detox (215).png', 'Images/Detox/Detox (216).png', 'Images/Detox/Detox (217).png', 'Images/Detox/Detox (218).png', 'Images/Detox/Detox (219).png', 'Images/Detox/Detox (220).png', 'Images/Detox/Detox (221).png', 'Images/Detox/Detox (222).png', 'Images/Detox/Detox (223).png', 'Images/Detox/Detox (224).png', 'Images/Detox/Detox (225).png', 'Images/Detox/Detox (226).png', 'Images/Detox/Detox (227).png', 'Images/Detox/Detox (228).png', 'Images/Detox/Detox (229).png', 'Images/Detox/Detox (230).png', 'Images/Detox/Detox (231).png', 'Images/Detox/Detox (232).png', 'Images/Detox/Detox (233).png', 'Images/Detox/Detox (234).png', 'Images/Detox/Detox (235).png', 'Images/Detox/Detox (236).png', 'Images/Detox/Detox (237).png', 'Images/Detox/Detox (238).png', 'Images/Detox/Detox (239).png', 'Images/Detox/Detox (240).png', 'Images/Detox/Detox (241).png', 'Images/Detox/Detox (242).png', 'Images/Detox/Detox (243).png', 'Images/Detox/Detox (244).png', 'Images/Detox/Detox (245).png',]
}	

function tryAgain() {
    episodeX = randomValueFromArray(episodes);
  //  episodeX = 'Season 1 Episode 11';
    updateImg();
    wrongOrRight.textContent = '';
    document.getElementById('housePNG').src = "houseNet.png";
    episodeGuess.value = '';
    episodeGuessEasy = '';
    alreadyGussed = false;
    if (episodes.length == 0) {
        restartArray();
    }
}
function updateImg() {
    if (episodeX == 'Season 1 Episode 1') {
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

    } else if (episodeX == 'Season 1 Episode 2') {
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

    } else if (episodeX == 'Season 1 Episode 3') {
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

    } else if (episodeX == 'Season 1 Episode 4') {
        var episodeImg = randomValueFromArray(MaternityArray);

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

    } else if (episodeX == 'Season 1 Episode 5') {
        var episodeImg = randomValueFromArray(DamnedArray);

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

    } else if (episodeX == 'Season 1 Episode 6') {
        var episodeImg = randomValueFromArray(MethodArray);

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

    } else if (episodeX == 'Season 1 Episode 7') {
        var episodeImg = randomValueFromArray(FidelityArray);

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

    } else if (episodeX == 'Season 1 Episode 8') {
        var episodeImg = randomValueFromArray(PoisonArray);

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

    } else if (episodeX == 'Season 1 Episode 9') {
        var episodeImg = randomValueFromArray(DNRArray);

        document.getElementById('episodePNG').src = episodeImg;
        if (noRepeatButt == true) {
            episodePreDelete = DNRArray.indexOf(episodeImg);
            episodeDelete = DNRArray.splice(episodePreDelete, 1);
        }
        if (DNRArray.length == 0) {
            if (noRepeatButt == true) {
                episodePreDelete = episodes.indexOf('Season 1 Episode 9');
                episodeDelete = episodes.splice(episodePreDelete, 1);
            }
        }

    } else if (episodeX == 'Season 1 Episode 10') {
        var episodeImg = randomValueFromArray(HistoriesArray);

        document.getElementById('episodePNG').src = episodeImg;
        if (noRepeatButt == true) {
            episodePreDelete = HistoriesArray.indexOf(episodeImg);
            episodeDelete = HistoriesArray.splice(episodePreDelete, 1);
        }
        if (HistoriesArray.length == 0) {
            if (noRepeatButt == true) {
                episodePreDelete = episodes.indexOf('Season 1 Episode 10');
                episodeDelete = episodes.splice(episodePreDelete, 1);
            }
        }

    } else if (episodeX == 'Season 1 Episode 11') {
        var episodeImg = randomValueFromArray(DetoxArray);

        document.getElementById('episodePNG').src = episodeImg;
        if (noRepeatButt == true) {
            episodePreDelete = DetoxArray.indexOf(episodeImg);
            episodeDelete = DetoxArray.splice(episodePreDelete, 1);
        }
        if (DetoxArray.length == 0) {
            if (noRepeatButt == true) {
                episodePreDelete = episodes.indexOf('Season 1 Episode 11');
                episodeDelete = episodes.splice(episodePreDelete, 1);
            }
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
    if (easyMode == true) {
        episodeGuessEasy = episodeGuess.value.toLowerCase();
    }
    if (episodeX == 'Season 1 Episode 1') {
        episodeName = 'Pilot';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (pilotArray.length == 0) {
            if (noRepeatButt == true) {
                episodePreDelete = episodes.indexOf('Season 1 Episode 1');
                episodeDelete = episodes.splice(episodePreDelete, 1);
            }
        }
    } else if (episodeX == 'Season 1 Episode 2') {
        episodeName = 'Paternity';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (paternityArray.length == 0) {
            if (noRepeatButt == true) {
                episodePreDelete = episodes.indexOf('Season 1 Episode 2');
                episodeDelete = episodes.splice(episodePreDelete, 1);
            }
        }
    } else if (episodeX == 'Season 1 Episode 3') {
        episodeName = "Occam's Razor";
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (occamArray.length == 0) {
            if (noRepeatButt == true) {
                episodePreDelete = episodes.indexOf('Season 1 Episode 3');
                episodeDelete = episodes.splice(episodePreDelete, 1);
            }
        }
    } else if (episodeX == 'Season 1 Episode 4') {
        episodeName = 'Maternity';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (MaternityArray.length == 0) {
            if (noRepeatButt == true) {
                episodePreDelete = episodes.indexOf('Season 1 Episode 4');
                episodeDelete = episodes.splice(episodePreDelete, 1);
            }
        }

    } else if (episodeX == 'Season 1 Episode 5') {
        episodeName = 'Damned If You Do';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (DamnedArray.length == 0) {
            if (noRepeatButt == true) {
                episodePreDelete = episodes.indexOf('Season 1 Episode 5');
                episodeDelete = episodes.splice(episodePreDelete, 1);
            }
        }

    } else if (episodeX == 'Season 1 Episode 6') {
        episodeName = 'The Socratic Method';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (MethodArray.length == 0) {
            if (noRepeatButt == true) {
                episodePreDelete = episodes.indexOf('Season 1 Episode 6');
                episodeDelete = episodes.splice(episodePreDelete, 1);
            }
        }
    } else if (episodeX == 'Season 1 Episode 7') {
        episodeName = 'Fidelity';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (FidelityArray.length == 0) {
            if (noRepeatButt == true) {
                episodePreDelete = episodes.indexOf('Season 1 Episode 7');
                episodeDelete = episodes.splice(episodePreDelete, 1);
            }
        }
    } else if (episodeX == 'Season 1 Episode 8') {
        episodeName = 'Poison';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (PoisonArray.length == 0) {
            if (noRepeatButt == true) {
                episodePreDelete = episodes.indexOf('Season 1 Episode 8');
                episodeDelete = episodes.splice(episodePreDelete, 1);
            }
        }
    } else if (episodeX == 'Season 1 Episode 9') {
        episodeName = 'DNR';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (DNRArray.length == 0) {
            if (noRepeatButt == true) {
                episodePreDelete = episodes.indexOf('Season 1 Episode 9');
                episodeDelete = episodes.splice(episodePreDelete, 1);
            }
        }
    } else if (episodeX == 'Season 1 Episode 10') {
        episodeName = 'Histories';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (HistoriesArray.length == 0) {
            if (noRepeatButt == true) {
                episodePreDelete = episodes.indexOf('Season 1 Episode 10');
                episodeDelete = episodes.splice(episodePreDelete, 1);
            }
        }
    } else if (episodeX == 'Season 1 Episode 11') {
        episodeName = 'Detox';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (HistoriesArray.length == 0) {
            if (noRepeatButt == true) {
                episodePreDelete = episodes.indexOf('Season 1 Episode 11');
                episodeDelete = episodes.splice(episodePreDelete, 1);
            }
        }
	}
}
function correct() {
    wrongOrRight.textContent = 'Right';
    wrongOrRight.style.color = 'green';
    document.getElementById('housePNG').src = "houseHappy.png";
    ++totCorrect;
}
function incorrect() {
    wrongOrRight.textContent = 'Wrong - ' + episodeName;
    wrongOrRight.style.color = 'red';
    document.getElementById('housePNG').src = "houseSad.png";
}
function debugMode() {
    setInterval(debugModeStart, 500);
}
function debugModeStart() {
    tryAgain();
    check2();
    wrongOrRight.textContent = episodeName;
    wrongOrRight.style.color = 'black';
    wrongOrRight.style.fontSize = '50px';
}

function updateImgOrder() {
	setInterval(updateImgOrderStart, 1000);
       
}
function updateImgOrderStart() {
	if (pilotArray.length !== 0) {
		episodex = 'Season 1 Episode 1';
		episodeImg = pilotArray[0]; 
		document.getElementById('episodePNG').src = episodeImg; 
		pilotArray.shift(); 
	} else if (paternityArray.length !== 0) {
		episodex = 'Season 1 Episode 2';
		episodeImg = paternityArray[0];
		document.getElementById('episodePNG').src = episodeImg; 
		paternityArray.shift();
	} else if (occamArray.length !== 0) {
		episodex = 'Season 1 Episode 3';
		episodeImg = occamArray[0];
		document.getElementById('episodePNG').src = episodeImg; 
		occamArray.shift();
	}else if (MaternityArray.length !== 0) {
		episodex = 'Season 1 Episode 4';
		episodeImg = MaternityArray[0];
		document.getElementById('episodePNG').src = episodeImg; 
		MaternityArray.shift();
	}else if (DamnedArray.length !== 0) {
		episodex = 'Season 1 Episode 5';
		episodeImg = DamnedArray[0];
		document.getElementById('episodePNG').src = episodeImg; 
		DamnedArray.shift();
	}else if (MethodArray.length !== 0) {
		episodex = 'Season 1 Episode 6';
		episodeImg = MethodArray[0];
		document.getElementById('episodePNG').src = episodeImg; 
		MethodArray.shift();
	}else if (FidelityArray.length !== 0) {
		episodex = 'Season 1 Episode 7';
		episodeImg = FidelityArray[0];
		document.getElementById('episodePNG').src = episodeImg; 
		FidelityArray.shift();
	}else if (PoisonArray.length !== 0) {
		episodex = 'Season 1 Episode 8';
		episodeImg = PoisonArray[0];
		document.getElementById('episodePNG').src = episodeImg; 
		PoisonArray.shift();
	}else if (DNRArray.length !== 0) {
		episodex = 'Season 1 Episode 9';
		episodeImg = DNRArray[0];
		document.getElementById('episodePNG').src = episodeImg; 
		DNRArray.shift();
	}else if (HistoriesArray.length !== 0) {
		episodex = 'Season 1 Episode 10';
		episodeImg = HistoriesArray[0];
		document.getElementById('episodePNG').src = episodeImg; 
		HistoriesArray.shift();
	} else if (DetoxArray.length !== 0) {
		episodex = 'Season 1 Episode 11';
		episodeImg = DetoxArray[0];
		document.getElementById('episodePNG').src = episodeImg; 
		DetoxArray.shift();
	}else if (episodes.length !==0) {
		restartArray();
	}
	
}

