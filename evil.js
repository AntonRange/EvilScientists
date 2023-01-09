var allEvilScientists = document.querySelector(".allscientist");
var evilScientists = {
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
            NewPTag.innerHTML = "".concat(key, ": ").concat(test, " ");
            scientistSection.appendChild(NewPTag);
        }
        i++;
    }
}
scientistCards();
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
    var currentScientist = document.querySelector(".currentScientist");
    var wichCard = document.querySelectorAll('.evilScientistsCard');
    var _loop_1 = function (i) {
        wichCard[i].onclick = function () {
            console.log(wichCard[i]);
            for (var _i = 0, _a = Object.keys(evilScientists.scientists[i]); _i < _a.length; _i++) {
                var key = _a[_i];
                var test2 = evilScientists.scientists[i][key];
                var NewPTag = document.createElement("p");
                NewPTag.innerHTML = "".concat(key, ": ").concat(test2, " ");
                currentScientist.appendChild(NewPTag);
            }
        };
    };
    for (var i = 0; i < wichCard.length; i++) {
        _loop_1(i);
    }
}
testar();
