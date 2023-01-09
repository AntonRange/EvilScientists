
const allEvilScientists = document.querySelector(".allscientist") as HTMLElement;

let age: number;
let henchmen: number;

const evilScientists = {
    scientists: [
        {
            name: 'Gandalf',
            age: 35,
            henchmen: 4,
            description: 'Gandalf is a mad scientist that uses his staff to create chaos and destruction amongst the villages.'
        },
        {
            name: 'Dr boom',
            age: 45,
            henchmen: 2,
            description: 'Dr Boom loves to blow things up with his bombs, even if other people get hurt!'
        },
        {
            name: 'Andre',
            age: 50,
            henchmen: 6,
            description: 'No one can stand this man. He has created a serum that makes him incredibly irritating.'
            
        },
        {
            name: 'Putricide',
            age: 35,
            henchmen: 3,
            description: 'Professor Putricide was a human in his previous life, but after experiments he turns into a zombie. He then spread this virus further'
        },
        {
            name: 'Max',
            age: 40,
            henchmen: 10,
            description: 'Max used his skills in virus research to create a virus that turns everyone infected into monkeys'
        },
        
    ]
}

function scientistCards() {
    let i = 0;

    while (i <= (evilScientists.scientists.length - 1)) {
        
        const scientistSection = document.createElement("section")
        scientistSection.tabIndex = i;
        scientistSection.className = "evilScientistsCard" 
        allEvilScientists.appendChild(scientistSection)

        for (const key of Object.keys(evilScientists.scientists[i])) {
          const newKey = key.replace(/^./, key[0].toUpperCase());
          let test = evilScientists.scientists[i][key];
            if (key === "age") {
                break;
            }

        const NewPTag = document.createElement("p");
        NewPTag.innerHTML = `${newKey}: ${test} `;
        
        scientistSection.appendChild(NewPTag)

       
    }
   
        i++;
}
}

scientistCards()

  function testar() {
    const HighlightedScientist = document.querySelector(".HighlightedScientist") as HTMLElement;
    
    const wichCard = document.querySelectorAll('.evilScientistsCard') as NodeList;
      for (let i = 0; i < wichCard.length; i++) {
        wichCard[i].onclick = () => {
          HighlightedScientist.innerHTML = '';
      console.log(wichCard[i])
      for (const key of Object.keys(evilScientists.scientists[i])) {
        const newKey = key.replace(/^./, key[0].toUpperCase());
        let test2 = evilScientists.scientists[i][key];
          
      const NewPTag = document.createElement("p");
      NewPTag.innerHTML = `${newKey}: ${test2} `;
      
      HighlightedScientist.appendChild(NewPTag)
      }
  };
}
   

  }
  testar()
  



let newScientist = {

}
let i = 0;
function addScientist() {

  const inputs = document.querySelectorAll(".Inputs") as NodeListOf<HTMLInputElement>;
  const addButton = document.querySelector("#addButton") as HTMLButtonElement;

  addButton.onclick = function() {
    
    for (const key of Object.keys(evilScientists.scientists[1])) {
      
      const newKey = key.replace(/^./, key[0].toUpperCase());

      newScientist[key] = inputs[i].value

      
    i++;
}
i = 0;
evilScientists.scientists.push(newScientist)
newScientist = {}
}
};
addScientist()