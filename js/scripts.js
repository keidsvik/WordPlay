$(document).ready(function() {
  $("form#input").submit(function(event) {
  event.preventDefault();

  const userInput = $("input#inputstring").val();
  const splitInput = userInput.split(" ");
  const inputArray = [];

  splitInput.forEach(function(element) {
    if(element.length >= 3) {
      inputArray.push(element);
    }
  });
  inputArray.reverse();
  const joinedInputArray = inputArray.join(' ');
  $("#result").text(joinedInputArray);
});
});

