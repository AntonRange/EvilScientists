var allEvilScientists = document.querySelector(".scientistCards");
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
function HighLightScientist() {
    var HighlightedScientist = document.querySelector('.HighlightedScientist');
    var wichCard = document.querySelectorAll('.evilScientistsCard');
    var _loop_1 = function (i_1) {
        wichCard[i_1].addEventListener('click', function () {
            HighlightedScientist.innerHTML = '';
            for (var _i = 0, _a = Object.keys(evilScientists.scientists[i_1]); _i < _a.length; _i++) {
                var key = _a[_i];
                var newKey = key.replace(/^./, key[0].toUpperCase());
                var test2 = evilScientists.scientists[i_1][key];
                var NewPTag = document.createElement('p');
                NewPTag.innerHTML = "".concat(newKey, ": ").concat(test2, " ");
                HighlightedScientist.appendChild(NewPTag);
            }
        });
    };
    for (var i_1 = 0; i_1 < wichCard.length; i_1++) {
        _loop_1(i_1);
    }
}
HighLightScientist();
var newScientist = {};
var i = 0;
function addScientist() {
    var inputs = document.querySelectorAll(".Inputs");
    var addButton = document.querySelector("#addButton");
    addButton.onclick = function () {
        for (var _i = 0, _a = Object.keys(evilScientists.scientists[1]); _i < _a.length; _i++) {
            var key = _a[_i];
            var newKey = key.replace(/^./, key[0].toUpperCase());
            if (key === "age" || key === "henchmen") {
                newScientist[key] = Number(inputs[i].value);
            }
            else {
                newScientist[key] = inputs[i].value;
            }
            i++;
        }
        i = 0;
        evilScientists.scientists.push(newScientist);
        newScientist = {};
        allEvilScientists.innerHTML = '';
        scientistCards();
        HighLightScientist();
        for (var i_2 = 0; i_2 < inputs.length; i_2++) {
            inputs[i_2].value = '';
        }
    };
}
addScientist();
