var currentDay = moment();

$("#currentDay").text(currentDay.format("dddd, MMMM Do YYYY, h:mm:ss a"));

{/* <div class="time-block row">
        <h3 class="hour">9:00AM</h3>
        <textarea class="description"></textarea>
        <button class="saveBtn">save</button>
      </div> */}
var timeArray = ["9:00Am", "10:00AM", "11:00AM", "12:00PM", "1:00PM", "2:00PM", "3:00PM", "4:00PM"];

var hourArray = [9, 10, 11, 12, 13, 14, 15, 16];

var currentTime = currentDay.format("H");

var content = localStorage.getItem("textArea");


for (var i = 0; i < 8; i++) {
  
  var containerDiv = document.querySelector(".container");
  var timeBlockDiv = document.createElement("div");
  var timeH3 = document.createElement("h3");
  var textArea = document.createElement("textarea");
  var button = document.createElement("button");
  
  timeBlockDiv.classList = "time-block row";
  timeH3.classList = "hour";

  if(hourArray[i] < currentTime) {
    textArea.classList = "description past";
  } else if (hourArray[i] == currentTime) {
    textArea.classList = "description present";
  } else {
    textArea.classList = "description future";
  }

  button.classList = "saveBtn";
  
  timeH3.textContent = timeArray[i];
  button.textContent = "save";
  

  // addEventlistener
  // button.addEventlistener
  
  

  



  timeBlockDiv.append(timeH3);
  timeBlockDiv.append(textArea);
  timeBlockDiv.append(button);
  containerDiv.append(timeBlockDiv);
}
