const timeCount = document.querySelector(".time");
const gameNum = document.querySelector(".gn");
const scoreCount = document.querySelector(".score");
const numberBtn = document.querySelectorAll(".num-btn");
const startGameBtn = document.querySelectorAll(".start-game");

function st(){
  scoreCount.textContent = "";
  let clickC = 0;

function clickB(btnV) {
  let ss = parseInt(btnV.target.textContent);
  let sss = parseInt(gameNum.textContent);

  if (ss === sss) {
    clickC ++;
    function updateSameNumberCount() {
      // Filter the numberBtn array to include only buttons with the same number as the game number
      const matchingButtons = Array.from(numberBtn).filter((btn) => parseInt(btn.textContent) === parseInt(gameNum.textContent));
    
      // Log or display the total number of buttons with the same number
      console.log("Amount of buttons with the same number: " + matchingButtons.length);

      let match = 100/matchingButtons.length;
      scoreCount.textContent = `${Math.floor(match * clickC)}%`;
    
      console.log(100/matchingButtons.length)
    }
    updateSameNumberCount();
    btnV.target.disabled =true;
  }

}
numberBtn.forEach((a) => {
  a.addEventListener("click", clickB);
});




function generateRandomNumber() {
  return Math.ceil(Math.random() * 10);
}

numberBtn.forEach((btn) => {
  const randomNumber = generateRandomNumber();
  btn.textContent = randomNumber;
});

gameNum.textContent = generateRandomNumber();


let time = 60;

function updatetime (){
    time--;

    timeCount.textContent = time;

    numberBtn.forEach((btn)=>{
      btn.disabled=false;
    })

    if(time === 0){
        clearInterval(timerInterval)
        alert("Game Over")

        numberBtn.forEach((btn)=>{
          btn.disabled=true;
        })
    }

    


}

const timerInterval = setInterval(  updatetime, 1000);
}

numberBtn.forEach((btn)=>{
  btn.textContent =0; 
})

// let clickC = 0;

// function clickB(btnV) {
//   let ss = parseInt(btnV.target.textContent);
//   let sss = parseInt(gameNum.textContent);

//   if (ss === sss) {
//     clickC ++;
//     function updateSameNumberCount() {
//       // Filter the numberBtn array to include only buttons with the same number as the game number
//       const matchingButtons = Array.from(numberBtn).filter((btn) => parseInt(btn.textContent) === parseInt(gameNum.textContent));
    
//       // Log or display the total number of buttons with the same number
//       console.log("Amount of buttons with the same number: " + matchingButtons.length);

//       let match = 100/matchingButtons.length;
//       scoreCount.textContent = `${match * clickC}%`;
    
//       console.log(100/matchingButtons.length)
//     }
//     updateSameNumberCount();
//   }

// }
// numberBtn.forEach((a) => {
//   a.addEventListener("click", clickB);
// });




// function generateRandomNumber() {
//   return Math.ceil(Math.random() * 99);
// }

// numberBtn.forEach((btn) => {
//   const randomNumber = generateRandomNumber();
//   btn.textContent = randomNumber;
// });

// gameNum.textContent = generateRandomNumber();


// let time = 60;

// function updatetime (){
//     time--;

//     timeCount.textContent = time;

//     if(time === 0){
//         clearInterval(timerInterval)
//         alert("Game Over")
//     }


// }

// const timerInterval = setInterval(  updatetime, 1000);