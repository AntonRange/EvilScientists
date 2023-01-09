
const allEvilScientists = document.querySelector(".allscientist")
const evilScientists = {
    scientists: [
        {
            name: 'Gandalf',
            age: 35,
            henchmen: 4,
            description: 'En galen vetenskapsman som använder sin trollstav för att skapa förödelse bland byborna.'
        },
        {
            name: 'Dr boom',
            age: 45,
            henchmen: 2,
            description: 'Dr boom älskar att spränga sina bomber överallt. Även om folk blir skadade!'
        },
        {
            name: 'Andre',
            age: 50,
            henchmen: 6,
            description: 'Ingen klarar av denna mannen. Han har skapat ett serum som gör han sjukt jobbig'
        },
        {
            name: 'Putricide',
            age: 35,
            henchmen: 3,
            description: 'Professor Putricide var en människa i sitt tidigare liv, men efter experiment förvandlas han till en zombie. Han spred sedan detta viruset vidare'
        },
        {
            name: 'Max',
            age: 40,
            henchmen: 10,
            description: 'Max använde sina kunskaper inom virus forskning för att skapa ett virus som gör att alla som blir smittade blev till apor'
        },
    ]
}

function scientistCards() {
    let i = 0;

    while (i <= (evilScientists.scientists.length - 1)) {
        
        const scientistSection = document.createElement("section")
        scientistSection.tabIndex = `${i}`;
        scientistSection.className = "evilScientistsCard" 
        allEvilScientists.appendChild(scientistSection)

        for (const [key, value] of Object.entries(evilScientists.scientists[i])) {
            if (key === "age") {
                break;
            }

        const NewPTag = document.createElement("p");
        
        NewPTag.innerHTML = `${key}: ${value}`;
        
        scientistSection.appendChild(NewPTag)

        console.log(i)
    }
    console.log("hej")
        i++;
}
}

scientistCards()