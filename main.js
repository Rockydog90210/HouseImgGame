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
	MethodArray = ['Method (1).png', 'Method (1).png', 'Method (2).png', 'Method (3).png', 'Method (4).png', 'Method (5).png', 'Method (6).png', 'Method (7).png', 'Method (8).png', 'Method (9).png', 'Method (10).png', 'Method (11).png', 'Method (12).png', 'Method (13).png', 'Method (14).png', 'Method (15).png', 'Method (16).png', 'Method (17).png', 'Method (18).png', 'Method (19).png', 'Method (20).png', 'Method (21).png', 'Method (22).png', 'Method (23).png', 'Method (24).png', 'Method (25).png', 'Method (26).png', 'Method (27).png', 'Method (28).png', 'Method (29).png', 'Method (30).png', 'Method (31).png', 'Method (32).png', 'Method (33).png', 'Method (34).png', 'Method (35).png', 'Method (36).png', 'Method (37).png', 'Method (38).png', 'Method (39).png', 'Method (40).png', 'Method (41).png', 'Method (42).png', 'Method (43).png', 'Method (44).png', 'Method (45).png', 'Method (46).png', 'Method (47).png', 'Method (48).png', 'Method (49).png', 'Method (50).png', 'Method (51).png', 'Method (52).png', 'Method (53).png', 'Method (54).png', 'Method (55).png', 'Method (56).png', 'Method (57).png', 'Method (58).png', 'Method (59).png', 'Method (60).png', 'Method (61).png', 'Method (62).png', 'Method (63).png', 'Method (64).png', 'Method (65).png', 'Method (66).png', 'Method (67).png', 'Method (68).png', 'Method (69).png', 'Method (70).png', 'Method (71).png', 'Method (72).png', 'Method (73).png', 'Method (74).png', 'Method (75).png', 'Method (76).png', 'Method (77).png', 'Method (78).png', 'Method (79).png', 'Method (80).png', 'Method (81).png', 'Method (82).png', 'Method (83).png', 'Method (84).png', 'Method (85).png', 'Method (86).png', 'Method (87).png', 'Method (88).png', 'Method (89).png', 'Method (90).png', 'Method (91).png', 'Method (92).png', 'Method (93).png', 'Method (94).png', 'Method (95).png', 'Method (96).png', 'Method (97).png', 'Method (98).png', 'Method (99).png', 'Method (100).png', 'Method (101).png', 'Method (102).png', 'Method (103).png', 'Method (104).png', 'Method (105).png', 'Method (106).png', 'Method (107).png', 'Method (108).png', 'Method (109).png', 'Method (110).png', 'Method (111).png', 'Method (112).png', 'Method (113).png', 'Method (114).png', 'Method (115).png', 'Method (116).png', 'Method (117).png', 'Method (118).png', 'Method (119).png', 'Method (120).png', 'Method (121).png', 'Method (122).png', 'Method (123).png', 'Method (124).png', 'Method (125).png', 'Method (126).png', 'Method (127).png', 'Method (128).png', 'Method (129).png', 'Method (130).png', 'Method (131).png', 'Method (132).png', 'Method (133).png', 'Method (134).png', ]

}

function tryAgain() {
    episodeX = randomValueFromArray(episodes);
   //episodeX = 'Season 1 Episode 1';
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
	   } else if (noRepeatButt == true) {
        episodePreDelete = episodes.indexOf('Season 1 Episode 1');
        episodeDelete = episodes.splice(episodePreDelete, 1);
    }
}
function S1E2Img() {
   var episodeImg = randomValueFromArray(paternityArray);
        document.getElementById('episodePNG').src = episodeImg;
        if (noRepeatButt == true) {
            episodePreDelete = paternityArray.indexOf(episodeImg);
            episodeDelete = paternityArray.splice(episodePreDelete, 1);
        } else if (noRepeatButt == true) {
        episodePreDelete = episodes.indexOf('Season 1 Episode 2');
        episodeDelete = episodes.splice(episodePreDelete, 1);
    }
}
function S1E3Img() {
   var episodeImg = randomValueFromArray(occamArray);
        document.getElementById('episodePNG').src = episodeImg;
        if (noRepeatButt == true) {
            episodePreDelete = occamArray.indexOf(episodeImg);
            episodeDelete = occamArray.splice(episodePreDelete, 1);
        } else if (noRepeatButt == true) {
        episodePreDelete = episodes.indexOf('Season 1 Episode 3');
        episodeDelete = episodes.splice(episodePreDelete, 1);
    }
}
function S1E4Img() {
    episodeImg = randomValueFromArray(MaternityArray);
   
        document.getElementById('episodePNG').src = episodeImg;
        if (noRepeatButt == true) {
            episodePreDelete = MaternityArray.indexOf(episodeImg);
            episodeDelete = MaternityArray.splice(episodePreDelete, 1);
        }
   if (noRepeatButt == true) {
        episodePreDelete = episodes.indexOf('Season 1 Episode 4');
        episodeDelete = episodes.splice(episodePreDelete, 1);
    }
}

function S1E5Img() {
    episodeImg = randomValueFromArray(DamnedArray);
    
        document.getElementById('episodePNG').src = episodeImg;
        if (noRepeatButt == true) {
            episodePreDelete = DamnedArray.indexOf(episodeImg);
            episodeDelete = DamnedArray.splice(episodePreDelete, 1);
        }
    if (noRepeatButt == true) {
        episodePreDelete = episodes.indexOf('Season 1 Episode 5');
        episodeDelete = episodes.splice(episodePreDelete, 1);
    }
}
function S1E6Img() {

    episodeImg = randomValueFromArray(MethodArray);

    
        document.getElementById('episodePNG').src = "Method (1).png";
        if (noRepeatButt == true) {
            episodePreDelete = MethodArray.indexOf('Method (1).png');
            episodeDelete = MethodArray.splice(episodePreDelete, 1);
        }
    (noRepeatButt == true) {
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
