
const allEvilScientists = document.querySelector(".allscientist") as HTMLElement;

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
          let test = evilScientists.scientists[i][key];
            if (key === "age") {
                break;
            }

        const NewPTag = document.createElement("p");
        NewPTag.innerHTML = `${key}: ${test} `;
        
        scientistSection.appendChild(NewPTag)

       
    }
   
        i++;
}
}

scientistCards()

// Denna funktionen gör så att beroende på vilket monsterCard du klickar på så att du kan edita just den
// function CardClicker() {
//   const wichCard = document.querySelectorAll('.evilScientistsCard');
//   for (const key of wichCard.keys()) {
      
//       wichCard[key].onclick = function() {
//           for (let [key1, key2] of Object.entries(monsterObject.monsters[key])) {
              
//               if (key1 == "apperences") {
//                   for (let k = 0; k < apperence.length; k++) {
//                       let key1 = Editinput[k].value
//                       key2[k] = `${apperence[k]}: ${key1}`
//                   }
//               }
//               monsterInformation.innerHTML = '';
//           }
//           monsterObject.createMonsters()
//       }
//       } 
//   }


  function testar() {
    const currentScientist = document.querySelector(".currentScientist") as HTMLElement;
    const wichCard = document.querySelectorAll('.evilScientistsCard') as NodeList;
      for (let i = 0; i < wichCard.length; i++) {
        wichCard[i].onclick = () => {
      console.log(wichCard[i])
      for (const key of Object.keys(evilScientists.scientists[i])) {
        let test2 = evilScientists.scientists[i][key];
          
      const NewPTag = document.createElement("p");
      NewPTag.innerHTML = `${key}: ${test2} `;
      
      currentScientist.appendChild(NewPTag)
      }
  };
}
   

  }
  testar()
  