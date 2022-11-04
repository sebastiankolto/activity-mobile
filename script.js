"use strict";
// ICONS FOR THE WORDS
const icons = [
  "gallery/drawing.svg",
  "gallery/talking.svg",
  "gallery/showing.svg",
  "gallery/drawing.svg",
  "gallery/talking.svg",
  "gallery/showing.svg",
];

// List of words with corresponding values
const listOfWords = [
  { word: "Ablak", value: 2 },
  { word: "Box", value: 3 },
  { word: "Mosópor", value: 4 },
  { word: "Ütő", value: 5 },
  { word: "Serpenyő", value: 6 },
  { word: "Valami", value: 2 },
  { word: "Teljesenmas", value: 4},
  { word: "Kutza", value: 5 },
  { word: "Verseny", value: 3 },
  { word: "Rendorseg", value: 6 },
  { word: "Bejeg", value: 2 },
];


// SELECTING MAIN ELEMENTS
const addaTeamBtn = document.querySelector(".add-a-team");
const startTheGameBtn = document.querySelector(".start-the-game");
const mainButtons = document.querySelector(".main-buttons");
const body = document.querySelector("body");
const main = document.querySelector("main");
const headerImg = document.querySelector(".header-image");
const headerMain = document.querySelector(".header-main");



// Selecting team elements
const teams = document.createElement("section");
teams.classList.add("teams");


// Points of the teams
let teamPoints1 = 0;
let teamPoints2 = 0;
let teamPoints3 = 0;
let teamPoints4 = 0;

// Player counters
let team1PlayerCount = 0;
let team2PlayerCount = 0;
let team3PlayerCount = 0;
let team4PlayerCount = 0;

// The number of teams to count
let numberOfTeams = 0;

let teamAddingWindowActive = false;

// CREATING HTML
// Small header
const smallHeader = document.createElement("header");
const headerSecondaryTitle = document.createElement("h2");
smallHeader.classList.add("header-secondary");
headerSecondaryTitle.innerHTML = "ACTIVITY ONLINE";
smallHeader.appendChild(headerSecondaryTitle);

// DRAWING A CARD SECTION
// DRAW A CARD BUTTON
const drawaCardBtn = document.createElement("button");
drawaCardBtn.classList.add("btn-primary", "draw-a-card");
drawaCardBtn.setAttribute("type", "button");
drawaCardBtn.innerHTML = `<img src="gallery/draw_cards_icon.svg" /> Draw a card`;

// ROUND HEADING
let roundCount = 1;
const roundHeading = document.createElement("h3");
roundHeading.classList.add("round-heading");

// Main buttons with small header container
const mainButtonsSmallHeader = document.createElement("div");
mainButtonsSmallHeader.classList.add("main-buttons--small-header");

// CARDS WINDOW
// Main container
const container = document.createElement("section");
container.classList.add("container");

// Choose a card instruction h6
const instructionChooseCard = document.createElement("h6");
instructionChooseCard.classList.add("instruction");
instructionChooseCard.innerHTML = "Choose a card";
container.appendChild(instructionChooseCard);

// START THE TIMER BTN
const startTheTimerBtn = document.createElement("button");
startTheTimerBtn.classList.add("btn-primary-timer", "btn-primary--inactive");
startTheTimerBtn.innerHTML = `<img src="gallery/timer_icon.svg" />Start the timer`;

// TIMER WINDOW
// XL CARD
const cardXL = document.createElement("div");
cardXL.classList.add("card-xl");

// XL card icon container
const cardXLiconContainer = document.createElement("div");
cardXLiconContainer.classList.add("card-xl__icon-container");
const cardXLimage = document.createElement("img");
cardXLimage.classList.add("card-xl-img");
cardXLiconContainer.appendChild(cardXLimage);
// XL card point container
const cardXLpointContainer = document.createElement("div");
cardXLpointContainer.classList.add("card-xl__point-container");
const cardXLpoint = document.createElement("h3");
cardXLpoint.classList.add("card-xl__point");
cardXLpointContainer.appendChild(cardXLpoint);
cardXL.append(cardXLiconContainer, cardXLpointContainer);

// Timer
const timer = document.createElement("div");
timer.classList.add("timer", "timer-active");
const timerTime = document.createElement("h1");
timerTime.classList.add("timer-time");
timerTime.innerHTML = "0:00";
timer.appendChild(timerTime);

// Solved button
const solvedBtn = document.createElement("button");
solvedBtn.classList.add("btn-secondary", "btn-solved");
solvedBtn.innerHTML = `<img src="gallery/tick_icon.svg" />Solved`;

// TIMERS UP, FINAL WORD
const correctAnswer = document.createElement("h3");
correctAnswer.classList.add("correct-answer");
const correctAnswerBtn = document.createElement("button");
correctAnswerBtn.setAttribute("type", "button");
correctAnswerBtn.classList.add("btn-primary", "correct-answer-btn");
correctAnswerBtn.innerHTML = `<img src="gallery/tick_icon_white.svg" /> Correct answer`;

const noAnswerBtn = document.createElement("button");
noAnswerBtn.classList.add("btn-secondary", "btn-no-answer");
noAnswerBtn.setAttribute("type", "button");
noAnswerBtn.innerHTML = `<img src="gallery/x_icon.svg" />No answer`;


// WHO ANSWERED CORRECTLY
const correctAnswerByInstruction = document.createElement("h6");
correctAnswerByInstruction.innerHTML = "Correct answer by:";


// CREATING THE BUTTONS BASED ON HOW MANY TEAMS WE HAVE
const correctAnswerTeamButtons = [];
const teamPointsAssigned = []


//EVENT LISTENERS
addaTeamBtn.addEventListener("click", openTeamAdding);
startTheGameBtn.addEventListener("click", startTheGame);
drawaCardBtn.addEventListener("click", drawingCards);
startTheTimerBtn.addEventListener("click", startTheTimer);
correctAnswerBtn.addEventListener("click", answeredCorrectly);
solvedBtn.addEventListener("click", answeredCorrectly);

noAnswerBtn.addEventListener("click", noAnswer);

// FUNCTIONS
function openTeamAdding() {
  headerMain.style.display = "none";

  smallHeader.classList.add("header-secondary--inactive");

  addaTeamBtn.classList.add("btn-primary--inactive");

  // ADD TEAM
  const addTeamWindow = document.createElement("section");
  addTeamWindow.classList.add("add-team");

  // Creating the header
  const addTeamHeader = document.createElement("div");
  addTeamHeader.classList.add("add-team__header");

  // Creating header h4
  const h4 = document.createElement("h4");
  h4.innerHTML = `TEAM ${numberOfTeams + 1}`;

  // Creating instruction h6
  const h6 = document.createElement("h6");
  h6.innerHTML = "Add players";

  // Creating the form and setting its class
  const form = document.createElement("form");
  form.classList.add("add-team__form");

  // Creating the inputs
  // Input player 1
  const inputPlayer1 = document.createElement("input");
  inputPlayer1.setAttribute("type", "text");
  inputPlayer1.setAttribute("value", "Player 1");
  inputPlayer1.classList.add("player", "input-player1");

  // Input player 2
  const inputPlayer2 = document.createElement("input");
  inputPlayer2.setAttribute("type", "text");
  inputPlayer2.setAttribute("value", "Player 2");
  inputPlayer2.classList.add("player", "input-player2");

  // BUTTONS
  // Creating the group for buttons
  const inputBtnGroup = document.createElement("div");
  inputBtnGroup.classList.add("input-buttons");

  // Creating the subtract button with the icon
  const subtractBtn = document.createElement("button");
  subtractBtn.classList.add("input__subtract", "input__subtract--inactive");
  subtractBtn.innerHTML = `<img src="gallery/minus.svg" />`;

  // Creating the add button with the icon
  const addBtn = document.createElement("button");
  addBtn.classList.add("input__add");
  addBtn.innerHTML = `<img src="gallery/add_icon.svg" />`;

  // Creating the submit button
  const submitBtn = document.createElement("button");
  submitBtn.classList.add("add-team__submit-btn");
  submitBtn.setAttribute("type", "submit");
  submitBtn.innerHTML = `<img src="gallery/add_icon.svg" />Add a team`;

  // Calling the functions on the addbtn and subtractbtn
  addBtn.addEventListener("click", addingMoreInputs);
  subtractBtn.addEventListener("click", deletingInputs);

  // APPENDING STUFF
  // Small header to the body
  body.append(smallHeader, main);
  // Team window inside main
  main.appendChild(addTeamWindow);
  // Adding the two buttons inside the button group
  inputBtnGroup.append(subtractBtn, addBtn);
  // h4 to teamheader
  addTeamHeader.appendChild(h4);
  // team header to team adding window
  addTeamWindow.append(addTeamHeader, h6, form);
  // Adding inputs and buttons to the form
  form.append(inputPlayer1, inputPlayer2, inputBtnGroup, submitBtn);

  // FUNCTION FOR ADDING INPUT FIELDS
  let player = 2;

  function addingMoreInputs(e) {
    e.preventDefault();
    player++;

    // Creating the new input
    const inputNew = document.createElement("input");
    inputNew.setAttribute("type", "text");
    inputNew.setAttribute("value", `Player ${player}`);
    inputNew.classList.add("player", `input-player${player}`);

    // To where you want to insert (form), what you want to insert (inputnew), before what (inputBtnGroup)
    form.insertBefore(inputNew, inputBtnGroup);

    // To handle the disabled and active states of the buttons
    switch (player) {
      case 3:
        subtractBtn.classList.remove("input__subtract--inactive");
        break;

      case 4:
        addBtn.classList.add("input__add--inactive");
        break;
    }
  }

  // FUNCTION FOR DELETING INPUT FIELDS
  function deletingInputs(e) {
    e.preventDefault();

    // Deleting the last input field
    const deleteInput = document.querySelector(`.input-player${player}`);
    deleteInput.remove();

    player--;

    // To handle the disabled and active states of the buttons
    switch (player) {
      case 2:
        subtractBtn.classList.add("input__subtract--inactive");
        addBtn.classList.remove("input__add--inactive");
        break;
    }
  }

  // SUBMITTING THE VALUES
  submitBtn.addEventListener("click", submitValues);

  function submitValues(e) {
    e.preventDefault();
    numberOfTeams++;

    // Small header gets high opacity when adding team window is closed
    smallHeader.classList.remove("header-secondary--inactive");

    const players = document.querySelectorAll(".player");

    // GETTING THE NAMES AS VALUES
    let playerValues = [""];
    // Take all the players, playervalues 0 = player.value
    // Playervalues 1 = player.value
    players.forEach((player, i) => {
      playerValues[i] = player.value;
    });

    // GETTING THE LETTERS FROM VALUES
    let letters = [""];
    playerValues.forEach((player, i) => {
      letters[i] = playerValues[i].charAt(0);

      // If the first letter is a p from player add the number of player
      if (letters[i] === "p" || letters[i] === "P") {
        letters[i] = letters[i] + [i + 1];
      }
    });

    // Remove the window when submit is clicked
    addTeamWindow.remove();

    // When we add a team, add a team button is active again
    addaTeamBtn.classList.remove("btn-primary--inactive");

    // ADDING SMALL TEAM WINDOW
    // Creating a section for teams only once,
    if (numberOfTeams >= 1) {
      main.appendChild(teams);
    }

    // Team window
    const team = document.createElement("div");
    team.classList.add("team", `team${numberOfTeams}`);
    teams.appendChild(team);

    // Team header
    const teamHeader = document.createElement("div");
    teamHeader.classList.add("team-header");
    const teamName = document.createElement("h5");
    teamName.innerHTML = `TEAM ${numberOfTeams}`;
    teamHeader.appendChild(teamName);

    // Team point
    const teamPoint = document.createElement("span");
    teamPoint.classList.add("team__points");

    // Assigning the correct points for team1 and team2
    if (team.classList.contains("team1")) {
      teamPoint.innerHTML = teamPoints1;
    } else if (team.classList.contains("team2")) {
      teamPoint.innerHTML = teamPoints2;
    } else if (team.classList.contains("team3")) {
      teamPoint.innerHTML = teamPoints3;
    } else if (team.classList.contains("team4")) {
      teamPoint.innerHTML = teamPoints4;
    }

    // Team members
    const teamMembers = document.createElement("div");
    teamMembers.classList.add("team__members");

    // LOOP FOR CREATING AS MANY PLAYERS IN THE TEAM WINDOW AS MANY INPUT FIELDS WHERE FILLED IN
    for (let i = 0; i < player; i++) {
      const teamMember = document.createElement("span");
      teamMember.classList.add("team__member", `player${i}`);
      teamMember.innerHTML = letters[i];
      teamMembers.appendChild(teamMember);
    }

    // Adding parts of team window
    team.append(teamHeader, teamPoint, teamMembers);

    // MAKE MAIN BUTTONS ACTIVE OR INACTIVE BASED IF THERE ARE 2 TEAMS ALREADY
    if (numberOfTeams === 4) {
      addaTeamBtn.classList.add("btn-primary--inactive");
    } else if (numberOfTeams >= 2) {
      startTheGameBtn.classList.remove("btn-primary--inactive");
    }

    //Outside clicking closes window
    teamAddingWindowActive = false;
    window.removeEventListener("mouseup", closeOutside);

    // FOR MOVING THE BUTTONS UP WHEN WE ADD A TEAM SO THEY ARE NOT BEHIND THE TEAMS
    let width = window.innerWidth;
    if(width < 700){
      mainButtons.style.marginBottom = "22vh";
    }
  }

  // CLOSING TEAM ADDING WINDOW WHEN CLICKING OUTSIDE
  teamAddingWindowActive = true;

  if (teamAddingWindowActive === true) {
    window.addEventListener("mouseup", closeOutside);
  }
}

// CLOSING THE ADD TEAM WINDOW WHEN THE USER CLICKS OUTSIDE, mouseup is needed
function closeOutside(e) {
  e.preventDefault();

  const addTeamWindow = document.querySelector(".add-team");
  const isClickInsideElement = addTeamWindow.contains(e.target);

  if (!isClickInsideElement) {
    if (numberOfTeams === 0) {
      headerMain.style.display = "";
      smallHeader.remove();
    }

    addaTeamBtn.classList.remove("btn-primary--inactive");
    addTeamWindow.remove();

    teamAddingWindowActive = false;
  }

  if (teamAddingWindowActive === false) {
    window.removeEventListener("mouseup", closeOutside);
  }
}

function startTheGame(e) {  

  // CREATING THE BUTTONS BASED ON HOW MANY TEAMS WE HAVE
  for(let i=1; i<numberOfTeams+1; i++){
    correctAnswerTeamButtons[i] = document.createElement("button");
    correctAnswerTeamButtons[i].classList.add("btn-secondary", `correct-by-team${i}`, "correct-button");
    correctAnswerTeamButtons[i].setAttribute("type", "button");
    correctAnswerTeamButtons[i].innerHTML = `Team ${i}`;
    correctAnswerTeamButtons[i].addEventListener("click", function(e){

      // Resetting classes in buttons, so later we can choose only the first one and make it active 
      const currentButtons = document.querySelectorAll(".correct-button");
      console.log("Can I even see all the buttons?", currentButtons);
      currentButtons.forEach((button)=>{
      button.classList.add("btn-secondary");
      button.classList.remove("btn-primary");
  })

      countingTeams();
  
      let width = window.innerWidth;
      if(width < 700){
        mainButtonsSmallHeader.style.marginBottom = "22vh";
      }

      for(let i=1; i<numberOfTeams+1; i++){
       correctAnswerTeamButtons[i].remove();
      }

      roundHeading.innerHTML = `ROUND ${roundCount}`;
    
      // RREMOVING STUFF
      correctAnswer.remove();
      cardXL.remove();
      correctAnswerByInstruction.remove();
      // We remove display none, so it goes back to the original
      headerImg.style.display = "";
      drawaCardBtn.style.display = "";
      teams.style.display = "";
      roundHeading.style.display = "";
  
    
      // FOR COUNTING THE POINTS FOR TEAM
      switch(i){
        case 1:
          teamPoints1 = +teamPoints1 + +chosenPoint;
          const teamPointsAssigned1 = document.querySelector(`.team${i} .team__points`);
          teamPointsAssigned1.innerHTML = teamPoints1;
          break;
        case 2:
            teamPoints2 = +teamPoints2 + +chosenPoint;
            const teamPointsAssigned2 = document.querySelector(`.team${i} .team__points`);
            teamPointsAssigned2.innerHTML = teamPoints2;
            break;

        case 3:
            teamPoints3 = +teamPoints3 + +chosenPoint;
            const teamPointsAssigned3 = document.querySelector(`.team${i} .team__points`);
            teamPointsAssigned3.innerHTML = teamPoints3;
            break;

        case 4:
            teamPoints4 = +teamPoints4 + +chosenPoint;
            const teamPointsAssigned4 = document.querySelector(`.team${i} .team__points`);
            teamPointsAssigned4.innerHTML = teamPoints4;
            break;
      }

    wordNumber = [];
    iconNumber = [];

    })
  }

  mainButtons.remove();
  roundHeading.innerHTML = `Round ${roundCount}`;
  main.insertBefore(mainButtonsSmallHeader, teams);
  mainButtonsSmallHeader.append(roundHeading, drawaCardBtn);

  // Removing the innactive class from the team header 1
  const teamHeaderGlobal = document.querySelector(".team-header");
  teamHeaderGlobal.classList.add("active-header");

  // ADDING THE ACTIVE PLAYER CLASS FOR THE FIRST PLAYERS TO REFERENCE THE FUNCTION FROM THAT
  for(let i=0; i<numberOfTeams; i++){
    const allTeams = document.querySelectorAll(".team");
    allTeams.forEach((team)=>{
      team.querySelector(".team__member").classList.add("active-player");
    })
  }

  const activePlayers = document.querySelectorAll(".team__member");
  activePlayers[0].classList.add("team__member--active", "active-player");

  let width = window.innerWidth;
    if(width < 700){
      mainButtonsSmallHeader.style.marginBottom = "22vh";
    }
}

let cardContainer = [""];
let cardIcon = [""];
let cardPicture = [""];

// GENERATE NUMBER for icons
let iconNumber = [];

function generateUniqueRandomIcons(maxNr) {
  //Generate random number
  let random = (Math.random() * maxNr).toFixed();

  //Coerce to number by boxing
  random = Number(random);

  if (!iconNumber.includes(random)) {
    iconNumber.push(random);
    return random;
  } else {
    if (iconNumber.length <= maxNr) {
      return generateUniqueRandomIcons(maxNr);
    } else {
      console.log("No more numbers available.");
      return false;
    }
  }
}

// Generate numbers for the words
let wordNumber = [];
let randomWords;

function generateUniqueRandomWords(maxNr) {
  let random = (Math.random() * maxNr).toFixed();
  random = Number(random);


  if (!wordNumber.includes(random)) {
    wordNumber.push(random);
    return random;
  } else {
    if (wordNumber.length <= maxNr) {
      return generateUniqueRandomWords(maxNr);
    } else {
      console.log("No more numbers available.");
      return false;
    }
  }
}

// The chosen things in the word section which are stored in these variables for later use
let chosenIcon;
let chosenPoint;
let chosenWord;

// Drawing 6 cards with icons and values
function drawingCards() {

  let width = window.innerWidth;
    if(width < 700){
      mainButtonsSmallHeader.style.marginBottom = "0";
    }

  headerImg.style.display = "none";
  drawaCardBtn.style.display = "none";
  teams.style.display = "none";
  instructionChooseCard.style.display = "";

  roundHeading.innerHTML = `Round ${roundCount}`;
  console.log("roundcount", roundCount);

  for (var i = 0; i < 6; i++) {
    let randomIcons = generateUniqueRandomIcons(5);
    randomWords = generateUniqueRandomWords(5);

    // 1 WHOLE CARD CREATION 6 TIMES
    cardContainer[i] = document.createElement("div");
    cardContainer[i].classList.add("card-container");

    // Card icon container
    cardIcon[i] = document.createElement("div");
    cardIcon[i].classList.add("card__icon");
    // Card picture itself
    cardPicture[i] = document.createElement("img");
    cardPicture[i].classList.add("card-picture");
    // We assign to src icons with an index number which is always random
    cardPicture[i].setAttribute("src", icons[randomIcons]);
    cardIcon[i].appendChild(cardPicture[i]);
    cardContainer[i].appendChild(cardIcon[i]);

    // Card word and point container
    const cardWordContainer = document.createElement("div");
    cardWordContainer.classList.add("card__word-container");
    // Word
    const cardWord = document.createElement("h6");
    cardWord.classList.add("card-word");
    // We use an object for the words
    // Based on a random number we choose a different object, and the parameter that is word
    cardWord.innerHTML = listOfWords[randomWords].word;
    cardWordContainer.appendChild(cardWord);
    // Point
    const cardPoint = document.createElement("h6");
    cardPoint.classList.add("card-point");
    // Based on a random number we choose an object and get its value which will be the same as words.
    cardPoint.innerHTML = listOfWords[randomWords].value;
    cardWordContainer.appendChild(cardPoint);
    cardContainer[i].appendChild(cardWordContainer);

    container.appendChild(cardContainer[i]);
  }

  container.appendChild(startTheTimerBtn);

  // SELECTING THE WORD AND MAKING THE START THE TIMER BUTTON ACTIVE
  cardContainer.forEach((item) => {
    item.addEventListener("click", wordClicked);
    function wordClicked() {
      // TO MAKE ONLY ONE CARD CLICKED
      for (let i = 0; i < 6; i++) {
        cardContainer[i].classList.remove("card--active");
      }
      item.classList.add("card--active");

      //  GETTING THE CHOSEN, ASSIGNING IT TO AN OUTSIDE VARIABLE SO IT IS AVAILABLE GLOBALLY
      chosenIcon = document
        .querySelector(".card--active img")
        .getAttribute("src");
      chosenPoint = document.querySelector(
        ".card--active .card-point"
      ).innerHTML;
      chosenWord = document.querySelector(".card--active .card-word").innerHTML;

      if (item.classList.contains(`card--active`)) {
        startTheTimerBtn.classList.remove("btn-primary--inactive");
      } else {
        startTheTimerBtn.classList.add("btn-primary--inactive");
      }
    }
  });

  // JUST APPENDING WORDS
  main.appendChild(container);
}

let min;
let sec;

function startTheTimer() {

  // Remove the cards
  cardContainer.forEach((item) => {
    item.remove();
  });

  startTheTimerBtn.classList.add("btn-primary--inactive");

  instructionChooseCard.style.display = "none";
  startTheTimerBtn.remove();

  // We put the card XL in the container
  container.append(cardXL, timer, solvedBtn);
  solvedBtn.style.visibility = "hidden";
  // Setting the source to the chosen icon
  cardXLimage.setAttribute("src", chosenIcon);
  // Setting the point to the chosen point
  cardXLpoint.innerHTML = chosenPoint;



  // CREATING THE TIMER
  min = 0;
  sec = 0;

  var interval = setInterval(function () {

    if(sec>0){
      solvedBtn.style.visibility = "visible";
    }
    // INTERVAL FUNCTION STOPS WHEN THE LOGIC IS REACHED
    if (min > 0 && sec > 35) {
      clearInterval(interval);
    }

    // CREATING THE TIMER LOGIC
    sec++;
    if (sec > 59) {
      sec = 0;
      min++;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }
    timerTime.innerHTML = min + ":" + sec;

    // Time is up
    if (min > 0 && sec > 30) {
      timerTime.innerHTML = "TIME'S UP";
      solvedBtn.remove();
    }
    if (min > 0 && sec > 33) {
      timer.remove();
    }

    // What elements should be appended when the time is done
    if (min > 0 && sec > 34) {
      correctAnswer.innerHTML = chosenWord;
      container.appendChild(correctAnswer);
      container.appendChild(correctAnswerBtn);
      container.appendChild(noAnswerBtn);
    }

    // Changing the color of the timer
    if (sec > 29) {
      timer.classList.remove("timer-active");
      timer.classList.add("timer--warning");
    }

    if (sec < 29) {
      timer.classList.add("timer-active");
      timer.classList.remove("timer--warning");
      timer.classList.remove("timer--warning2");
    }

    if (min > 0) {
      timer.classList.remove("timer--warning");
      timer.classList.add("timer--warning2");
    }

    // Clicking the solved button also stops the function so it doesnt repeat until the end
    solvedBtn.addEventListener("click", function () {
      clearInterval(interval);
    });

    noAnswerBtn.addEventListener("click", function () {
      clearInterval(interval);
    });
  }, 1000);
}

// Clicking the solved or noanswer button sets back the timer to the original state
solvedBtn.addEventListener("click", function () {
  timer.classList.remove("timer--warning");
  timer.classList.remove("timer--warning2");
  timer.classList.add("timer-active");
  timerTime.innerHTML = "0:00";
});

noAnswerBtn.addEventListener("click", function () {
  timer.classList.remove("timer--warning");
  timer.classList.remove("timer--warning2");
  timer.classList.add("timer-active");
  timerTime.innerHTML = "0:00";
});

// Which team answered correctly
function answeredCorrectly() {

  // We delete the chosen word only if someone answered correctly
  deletingChosenWords();
  
  timer.classList.remove("timer--warning");
  timer.classList.remove("timer--warning2");
  timer.classList.add("timer-active");
  timerTime.innerHTML = "0:00";

  correctAnswer.innerHTML = chosenWord;
  container.appendChild(correctAnswer);
  timer.remove();
  solvedBtn.remove();
  noAnswerBtn.remove();
  correctAnswerBtn.remove();

  // GETTING TEAM HEADERS TO CHECK WHICH ONE IS ACTIVE SO WE CAN APPEND THE BUTTONS CORRECTLY
  const teamHeader1 = document.querySelector(".team1 .team-header");
  const teamHeader2 = document.querySelector(".team2 .team-header");
  const teamHeader3 = document.querySelector(".team3 .team-header");
  const teamHeader4 = document.querySelector(".team4 .team-header");




  // APPENDING BUTTONS BASED ON WHICH TEAM IS GOING
  // Appending the buttons in the correct order when we have 2 teams
  if (numberOfTeams === 2) {
    if (teamHeader1.classList.contains("active-header")) {

      

      container.append(
        correctAnswerByInstruction,
        correctAnswerTeamButtons[1],
        correctAnswerTeamButtons[2]
      );

      // Only selecting first element after they have been appended, and adding the primary class
      // Might need to simplify this, it is in every example
      const firstButton = document.querySelector(".correct-button");
      firstButton.classList.add("btn-primary");
      firstButton.classList.remove("btn-secondary");
      

    } else if (teamHeader2.classList.contains("active-header")) {
      container.append(
        correctAnswerByInstruction,
        correctAnswerTeamButtons[2],
        correctAnswerTeamButtons[1]
      );
      
      const firstButton = document.querySelector(".correct-button");
      firstButton.classList.add("btn-primary");
      firstButton.classList.remove("btn-secondary");
     
    }
  }

  // Appending the buttons in the correct order when we have 3 teams
  if (numberOfTeams === 3) {
    if (teamHeader1.classList.contains("active-header")) {
      container.append(
        correctAnswerByInstruction,
        correctAnswerTeamButtons[1],
        correctAnswerTeamButtons[2],
        correctAnswerTeamButtons[3]
      );

      const firstButton = document.querySelector(".correct-button");
      firstButton.classList.add("btn-primary");
      firstButton.classList.remove("btn-secondary");

    } else if (teamHeader2.classList.contains("active-header")) {
      container.append(
        correctAnswerByInstruction,
        correctAnswerTeamButtons[2],
        correctAnswerTeamButtons[1],
        correctAnswerTeamButtons[3]
      );

      const firstButton = document.querySelector(".correct-button");
      firstButton.classList.add("btn-primary");
      firstButton.classList.remove("btn-secondary");

    } else if (teamHeader3.classList.contains("active-header")) {
      container.append(
        correctAnswerByInstruction,
        correctAnswerTeamButtons[3],
        correctAnswerTeamButtons[1],
        correctAnswerTeamButtons[2]
      );

      const firstButton = document.querySelector(".correct-button");
      firstButton.classList.add("btn-primary");
      firstButton.classList.remove("btn-secondary");
    }
  }

  // Appending the buttons in the correct order when we have 4 teams
  if (numberOfTeams === 4) {
    // Leave 2
    if (teamHeader1.classList.contains("active-header")) {
      container.append(
        correctAnswerByInstruction,
        correctAnswerTeamButtons[1],
        correctAnswerTeamButtons[2],
        correctAnswerTeamButtons[3],
        correctAnswerTeamButtons[4]
      );

      const firstButton = document.querySelector(".correct-button");
      firstButton.classList.add("btn-primary");
      firstButton.classList.remove("btn-secondary");

      // Leave 3
    } else if (teamHeader2.classList.contains("active-header")) {
      container.append(
        correctAnswerByInstruction,
        correctAnswerTeamButtons[2],
        correctAnswerTeamButtons[1],
        correctAnswerTeamButtons[3],
        correctAnswerTeamButtons[4]
      );

      const firstButton = document.querySelector(".correct-button");
      firstButton.classList.add("btn-primary");
      firstButton.classList.remove("btn-secondary");

      // Leave 4
    } else if (teamHeader3.classList.contains("active-header")) {
      container.append(
        correctAnswerByInstruction,
        correctAnswerTeamButtons[3],
        correctAnswerTeamButtons[1],
        correctAnswerTeamButtons[2],
        correctAnswerTeamButtons[4]
      );

      const firstButton = document.querySelector(".correct-button");
      firstButton.classList.add("btn-primary");
      firstButton.classList.remove("btn-secondary");

      // Leave 1
    } else if (teamHeader4.classList.contains("active-header")) {
      container.append(
        correctAnswerByInstruction,
        correctAnswerTeamButtons[4],
        correctAnswerTeamButtons[1],
        correctAnswerTeamButtons[2],
        correctAnswerTeamButtons[3]
      );

      const firstButton = document.querySelector(".correct-button");
      firstButton.classList.add("btn-primary");
      firstButton.classList.remove("btn-secondary");
    }
  }

}

function noAnswer() {
  countingTeams();
  roundHeading.style.display = "";

  let width = window.innerWidth;
    if(width < 700){
      mainButtonsSmallHeader.style.marginBottom = "22vh";
    }

  roundHeading.innerHTML = `ROUND ${roundCount}`;

  correctAnswer.remove();
  cardXL.remove();
  correctAnswerByInstruction.remove();
  correctAnswerBtn.remove();
  noAnswerBtn.remove();

  headerImg.style.display = "";
  drawaCardBtn.style.display = "";
  teams.style.display = "";

  wordNumber = [];
  iconNumber = [];
}




function countingTeams(){
  const teamHeaderss = []

  for(let i=1; i<numberOfTeams+1; i++){
    teamHeaderss[i] = document.querySelector(`.team${i} .team-header`);
  }
  
  // ALL PLAYERS TO BE ABLE TO REMOVE ACTIVE LOOK
  const allThePlayers = document.querySelectorAll(".team__member")

  if(teamHeaderss[numberOfTeams].classList.contains("active-header")){
    roundCount++;
    teamHeaderss[numberOfTeams].classList.remove("active-header");
    const firstHeader = document.querySelector(".team-header")
    firstHeader.classList.add("active-header")
    allThePlayers.forEach((player) => {
      player.classList.remove("team__member--active")
    });

    const firstTeamHeader = document.querySelector(".team-header");
    firstTeamHeader.classList.add("active-header");

    // Starting the round 2 with the 2nd player from team1
    const newActivePlayer = document.querySelector(".active-player").nextSibling;
    const currentActivePlayer = document.querySelector(".active-player");
    if(currentActivePlayer.nextSibling){
      newActivePlayer.classList.add("team__member--active", "active-player");
      newActivePlayer.previousSibling.classList.remove("active-player");
    } else {
      document.querySelector(".team__member").classList.add("active-player", "team__member--active");
      currentActivePlayer.classList.remove("active-player");

    }
    return;
  }

  // HEADERS
  const activeHeader = document.querySelector(".active-header");
  const nextActiveHeader = activeHeader.parentElement.nextSibling.firstChild;

  // HEADERS
  activeHeader.classList.remove("active-header");
  nextActiveHeader.classList.add("active-header");

  // When some of the teams are active
  if(nextActiveHeader.classList.contains("active-header")){

    // Remove active members for all players from the current team
    allThePlayers.forEach((player) => {
      player.classList.remove("team__member--active")
    });


    // GETTING CURRENT ACTIVE PLAYER, ADDING ACTIVE LOOK, IF THERE IS NEXT SIBLING ADDING ACTIVE CLASS TO THE NEXT ONE, AND REMOVING THE ACTIVE FROM THE CURRENT
    const currentActivePlayer = nextActiveHeader.parentElement.querySelector(".active-player");
    currentActivePlayer.classList.add("team__member--active");
    if(currentActivePlayer.nextSibling){
      currentActivePlayer.nextSibling.classList.add("active-player");
    } else {
      nextActiveHeader.parentElement.querySelector(".team__member").classList.add("active-player");
    }
    currentActivePlayer.classList.remove("active-player");
  }
}

// Deleting the word that was already chosen before
function deletingChosenWords(){

  // Finding the index number of the chosen word
  // From the listOfWords the word that equals to the chosen word, so we get its index number
  const indexNumber = listOfWords.findIndex((item)=>{
    return item.word === chosenWord;
  })

  // We delete the chosen word, by choosing its index number and deleting 1 item so that item
  listOfWords.splice(indexNumber,1);

  // listOfWords.splice(1, 1)
}