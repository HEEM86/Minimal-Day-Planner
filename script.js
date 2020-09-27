

var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// var primeTime = ["9AM","10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]

var currenthour = moment().hour();

function displayTime() {

    for ( let index = 0; index < workHours.length; index++) {

        var row = $("<div class = 'row'>"); // creating dynamic row
        var col1 = $("<div class = 'col-s-2 text-right col1'>"); // creating column within the row

        var getWorkHour = workHours[index] + "a.m.";
        console.log(getWorkHour);

        if(workHours[index] >= 12) {
            getWorkHour = workHours[index] + "p.m.";

            if(workHours[index] >=13) {
                getWorkHour = workHours[index] - 12 + "p.m.";

            }

        }

        col1.append(getWorkHour);

        //building the second column
        var col2 =  $("<div class = 'col-sm-8 col2'>"); // creating column within the row

        var textArea = $("<textarea>"); // create element
            textArea.attr("id", "textarea", + index)
            textArea.addClass("form-control")

            if (currenthour > workHours[index]) {
                textArea.addClass("bg-secondary");
            }
            
            if (currenthour === workHours[index]) {
                textArea.addClass("bg-danger");
            }
            if (currenthour < workHours[index]) {
                textArea.addClass("bg-success");
            }

        
        var saveTextArea = localStorage.getItem("textarea" + index)
        textArea.text(saveTextArea)
        col2.append(textArea);

        var col3 =  $("<div class = 'col-sm-2 col3'>"); // creating column within the row

        var button = $("<button>");
            button.addClass("saveBtn")
            button.text("Save!")
        
        col3.append(button);


        row.append(col1, col2, col3)
        $("#planner").append(row)
    }
}


displayTime();




// $(document).ready(function(){
//                     let time= moment().format("h:mm:ss");
//                     let timeSplit = time.split(":"); 
//                     let minutesToRefresh= 59 - parseInt(timeSplit[1]); 
//                     let secondsToRefresh= 60- parseInt(timeSplit[2]); 
//     let timeToRefresh= minutesToRefresh*60 + secondsToRefresh; 
//     let secondsElapsed=0; 
//     let timerUntilStartReloading= setInterval(function(){ 
//         secondsElapsed++
//         if (secondsElapsed === timeToRefresh){
//             console.log(moment()); 
//             let isReloading= confirm(); 
//             if (isReloading) {
//                 window.location.reload(true);
//             } else {
//                 alert(); 
//             }
//         }
//     },1000);
// }); 

// //Element names

// let timeSpaceContainer = $(".container"); 
// let presentDateEl= $("#presentDay"); 

// //Code generating the current date 
// todaysDateEl.text(moment().format("dddd, MMMM Do")); 

// var primeTime = ["9AM","10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]

// for (let i = 1; i < primeTime.length; i++){
//     let newTimeSpaceEL = $("#9AM").clone();
//     newTimeSpaceEL.attr("id", primeTime[i]); 
//     newTimeSpaceEL.children(".row").attr("style", "white-space: pre-Wrap"); 
//     newTimeSpaceEL.children(".row").children(".hour").text(primeTime[i]); 
//     newTimeSpaceEL.appendTo(".container"); 
// }


// const format1 = "YYYY-MM-DD HH:mm:ss"
// const format2 = "YYYY-MM-DD"
// var date1 = new Date("2020-06-24 22:57:36");
// var date2 = new Date();

// dateTime1 = moment(date1).format(format1);
// dateTime2 = moment(date2).format(format2);

// document.getElementById("demo1").innerHTML = dateTime1;
// document.getElementById("demo2").innerHTML = dateTime2;