// Returns the ISO week of the date.
Date.prototype.getWeek = function() {
    var date = new Date(this.getTime());
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4 is always in week 1.
    var week1 = new Date(date.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                          - 3 + (week1.getDay() + 6) % 7) / 7);
  }
  
  // Returns the four-digit year corresponding to the ISO week of the date.
Date.prototype.getWeekYear = function() {
    var date = new Date(this.getTime());
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    return date.getFullYear();
  }




var games_array = new Array(63);

games_array[0] = 'rainbow';
games_array[1] = 'minecraft';
games_array[2] = 'dontStarve';
games_array[3] = 'rocket';
games_array[4] = 'battlefront';
games_array[5] = 'astroneer';
games_array[6] = 'seaOfThieves';

games_array[12] = 'rainbow';
games_array[11] = 'minecraft';
games_array[13] = 'dontStarve';
games_array[8] = 'rocket';
games_array[9] = 'battlefront';
games_array[7] = 'astroneer';
games_array[10] = 'seaOfThieves';

games_array[16] = 'rainbow';
games_array[14] = 'minecraft';
games_array[17] = 'dontStarve';
games_array[19] = 'rocket';
games_array[18] = 'battlefront';
games_array[15] = 'astroneer';
games_array[20] = 'seaOfThieves';

games_array[27] = 'rainbow';
games_array[26] = 'minecraft';
games_array[21] = 'dontStarve';
games_array[24] = 'rocket';
games_array[23] = 'battlefront';
games_array[25] = 'astroneer';
games_array[22] = 'seaOfThieves';

games_array[33] = 'rainbow';
games_array[32] = 'minecraft';
games_array[29] = 'dontStarve';
games_array[31] = 'rocket';
games_array[30] = 'battlefront';
games_array[28] = 'astroneer';
games_array[34] = 'seaOfThieves';

games_array[36] = 'rainbow';
games_array[35] = 'minecraft';
games_array[39] = 'dontStarve';
games_array[41] = 'rocket';
games_array[37] = 'battlefront';
games_array[40] = 'astroneer';
games_array[38] = 'seaOfThieves';

games_array[42] = 'rainbow';
games_array[47] = 'minecraft';
games_array[48] = 'dontStarve';
games_array[45] = 'rocket';
games_array[43] = 'battlefront';
games_array[44] = 'astroneer';
games_array[46] = 'seaOfThieves';

games_array[51] = 'rainbow';
games_array[54] = 'minecraft';
games_array[50] = 'dontStarve';
games_array[53] = 'rocket';
games_array[55] = 'battlefront';
games_array[52] = 'astroneer';
games_array[49] = 'seaOfThieves';

games_array[62] = 'rainbow';
games_array[59] = 'minecraft';
games_array[57] = 'dontStarve';
games_array[58] = 'rocket';
games_array[56] = 'battlefront';
games_array[61] = 'astroneer';
games_array[60] = 'seaOfThieves';

games_array[63] = 'NULL';


games_index_files = new Array(8);

games_index_files[0] = 'url("images/cover-rainbow.jpg")';
games_index_files[1] = 'url("images/cover-minecraft.jpg")';
games_index_files[2] = 'url("images/cover-dontStarve.jpg")';
games_index_files[3] = 'url("images/cover-rocket.jpg")';
games_index_files[4] = 'url("images/cover-battlefront.jpg")';
games_index_files[5] = 'url("images/cover-astroneer.jpg")';
games_index_files[6] = 'url("images/cover-seaOfThieves.jpg")';
games_index_files[7] = 'url("images/null.jpg")';

games_index_names = new Array(8);

games_index_names[0] = 'rainbow';
games_index_names[1] = 'minecraft'; 
games_index_names[2] = 'dontStarve';
games_index_names[3] = 'rocket';
games_index_names[4] = 'battlefront';
games_index_names[5] = 'astroneer'; 
games_index_names[6] = 'seaOfThieves';
games_index_names[7] = 'NULL';

function getWeekNumber() {
    var date = new Date();
    if (date.getFullYear() > date.getFullYear()) {
        return 63
    }
    else {
        return date.getWeek();
    }
}

function get_cover_file () {
    for (i = 0; i < 7; i++) {
        if (games_array[getWeekNumber()] == games_index_names[i]) {
            //console.log(games_index_files[i]);
            return games_index_files[i];
        }
    }
}
function set_image() {
    var fwver = document.getElementById('cover_image');
    cover_image.style.backgroundImage = get_cover_file();
}
set_image();


window.onload = function () {
    var cover_image = document.getElementById('cover_image');
    //cover_image.style.backgroundImage = cover_file;

    var darkener = document.getElementById('darkener');
    darkener.style.transitionDelay = "1s";
    darkener.style.transitionDuration = "2s";
    setTimeout(
        function() {
            darkener.style.transitionDuration = "0s";
            darkener.style.transitionDelay = "0s";
        }, 2000);
    darkener.style.backgroundColor = "rgba(0, 0, 0, 0.781)";


    var cover = document.getElementById('cover');
    cover.style.transitionDelay = "1.5s";
    cover.style.transitionDuration = "1.5s";
    cover_image.style.transitionDelay = "2s";
    cover_image.style.transitionDuration = "1s";
    setTimeout(
        function() {
            cover.style.transitionDuration = "0s";
            cover.style.transitionDelay = "0s";
            cover_image.style.transitionDuration = "0s";
            cover_image.style.transitionDelay = "0s";
        }, 2000);
    cover_image.style.boxShadow = "0px 0px 189px 43px rgba(255,218,143,0.4)";
    cover.style.top = "0vh";


    var text = document.getElementById('text');
    text.style.transitionDelay = "1.5s";
    text.style.transitionDuration = "1s";
    setTimeout(
        function() {
            text.style.transitionDuration = "0s";
            text.style.transitionDelay = "0s";
        }, 2000);
    text.style.top = "-20vh";

    /*var number_element = document.getElementById('number');
    number_element.innerHTML = games_array[getWeekNumber()];*/
}