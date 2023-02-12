



const elGenderList = document.getElementById("gender")
const elFemaleAnswer = document.querySelector(".femaleanswer")
const elMaleAnswer = document.getElementById("year")
const elBTN = document.querySelector(".btn")
const elHello = document.querySelector(".userHello")

elMaleAnswer.style.display = "none";
elFemaleAnswer.style.display = "none"; 

elGenderList.addEventListener('change', (ev) => {

    let GenderChoose = ev.target.value;



    if (GenderChoose === 'female'){

        elFemaleAnswer.style.display = "block";

    }
    else {
        elMaleAnswer.style.display = "block";
        elFemaleAnswer.style.display = "none"; 

    }
})



for (let year = 1920; year <= 2023; year++) {


    let options = document.createElement("OPTION");
    document.getElementById("year").appendChild(options).innerHTML = year;
  }


  let endName;

  const Letters = (correctName) => {
    if (!correctName) return correctName;
    
    endName =  correctName.slice(0,1).toUpperCase() + 
    correctName.slice(1).toLowerCase();
    return endName;
    }


  elBTN.addEventListener('click', () =>{

    function takeName(){
        const elInput = document.querySelector('input')

        const elName = elInput.value;

        Letters(elName);

            elHello.innerText = 'Вітаю,' + " " + endName + '!'

    }
    takeName();


});


