    var rusMonth = new Array();
    rusMonth[0] = 'января';
    rusMonth[1] = 'февраля';
    rusMonth[2] = 'марта';
    rusMonth[3] = 'апреля';
    rusMonth[4] = 'мая';
    rusMonth[5] = 'июня';
    rusMonth[6] = 'июля';
    rusMonth[7] = 'августа';
    rusMonth[8] = 'сентября';
    rusMonth[9] = 'октября';
    rusMonth[10] = 'ноября';
    rusMonth[11] = 'декабря';
    
var Clock = function( param ){
    var currentTime = new Date();
    var hour = currentTime.getHours();
    var minute = currentTime.getMinutes();
    var month = currentTime.getMonth();
    var day = currentTime.getDate();
    var year = currentTime.getFullYear();
    data = day+" "+rusMonth[month]+" "+year;
    if (minute < 10){
        minute = "0" + minute;
    }
    var clock = "<img src=\"./image/system/clock.png\" style=\"padding-left: 3px;\"><span style=\"color: white; position: relative;top: -4px;font-size: 32px;\">&nbsp;"+hour+":"+minute+"</span>";
    clock += "<div style=\"font-size: 16px; text-align: center;\">"+data+"</div>"

    $("#ClockDiv").html(clock);
    setTimeout("Clock()", 10000);
}