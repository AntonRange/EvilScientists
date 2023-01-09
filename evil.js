var allEvilScientists = document.querySelector(".allscientist");
var evilScientists = {
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
};
function scientistCards() {
    var i = 0;
    while (i <= (evilScientists.scientists.length - 1)) {
        var scientistSection = document.createElement("section");
        scientistSection.tabIndex = i;
        scientistSection.className = "evilScientistsCard";
        allEvilScientists.appendChild(scientistSection);
        for (var _i = 0, _a = Object.keys(evilScientists.scientists[i]); _i < _a.length; _i++) {
            var key = _a[_i];
            var test = evilScientists.scientists[i][key];
            if (key === "age") {
                break;
            }
            var NewPTag = document.createElement("p");
            console.log(key);
            NewPTag.innerHTML = "".concat(key, ": ").concat(test, " ");
            scientistSection.appendChild(NewPTag);
        }
        i++;
    }
}
scientistCards();
