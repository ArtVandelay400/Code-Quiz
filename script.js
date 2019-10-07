var score= 0 
var totalTime= 150
var listEl = document.querySelector("#question-list");
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
  ];
//timer
// click event to start timer and update DOM with questions
// function accepting var questions as parameter

    for ( var i = 0; i < questions.length; i++){
        var titleItem = document.getElementById("#questionTitle");
        console.log(titleItem.textContent);
        titleItem.textContent = questions[i].title;
        }   

    for( var i=0; i< choices.length; i++){

    }
        
    
        
        listEl.addEventListener("click", function(event) {
            event.preventDefault();
            console.log(questions[0].answer);
            if(event.target.matches(questions[0].answer)) {
            
              var item = document.createElement("div");
              item.textContent = questions[event.target.parentElement.id];
              shoppingCartEl.append(item);
            }
          });

//How to end game when timer reaches zero? clear interval

  //  var remaining = totalTime-timeRemeaning 
  //  var finalScore = remaining + score
  // Var name = "Your score is " + finalScore ". Please enter your name" (how do we capture this outside of a prompt? .value? )

  //Click event 
    // write name and finalScore to localStorage
    // update DOM to show high score list pulling form localStorage (treat it like any other string/array/object?) array of objectsmj ,,jj,,,,j 

//Click event
    //clear localStorage

//Click event 
    //refresh page

