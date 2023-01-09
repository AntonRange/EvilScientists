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
            var newKey = key.replace(/^./, key[0].toUpperCase());
            var test = evilScientists.scientists[i][key];
            if (key === "age") {
                break;
            }
            var NewPTag = document.createElement("p");
            NewPTag.innerHTML = "".concat(newKey, ": ").concat(test, " ");
            scientistSection.appendChild(NewPTag);
        }
        i++;
    }
}
scientistCards();
function testar() {
    var HighlightedScientist = document.querySelector(".HighlightedScientist");
    var wichCard = document.querySelectorAll('.evilScientistsCard');
    var _loop_1 = function (i) {
        wichCard[i].onclick = function () {
            HighlightedScientist.innerHTML = '';
            console.log(wichCard[i]);
            for (var _i = 0, _a = Object.keys(evilScientists.scientists[i]); _i < _a.length; _i++) {
                var key = _a[_i];
                var newKey = key.replace(/^./, key[0].toUpperCase());
                var test2 = evilScientists.scientists[i][key];
                var NewPTag = document.createElement("p");
                NewPTag.innerHTML = "".concat(newKey, ": ").concat(test2, " ");
                HighlightedScientist.appendChild(NewPTag);
            }
        };
    };
    for (var i = 0; i < wichCard.length; i++) {
        _loop_1(i);
    }
}
testar();
