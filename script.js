

var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

var currenthour = moment().hour();

function displayTime() {

    for ( let index = 0; index < workHours.length; index++) {

        var row = $("<div class = 'row'>"); // creating dynamic row
        var col1 = $("<div class = 'col-md-2 text-right col1'>"); // creating column within the row

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
        var col2 =  $("<div class = 'col-md-8 col2'>"); // creating column within the row

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

