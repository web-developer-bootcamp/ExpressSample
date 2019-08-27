var express = require("express");
var app = express();

app.get("/", (req, res) => res.send("Hi there! Welcome to my assignment"));

app.get("/speak/:animal", function (req, res) {
    var sounds = {
        pig: 'Oink',
        cow: 'Moo',
        dog: 'Woof Woof',
        cat: 'I hate you human',
        goldfish: '...'
    };

    var animal = req.params.animal;
    var sound = sounds[animal];
    res.send("The " + animal + " says " + sound);
})

app.get("/repeat/:message/:times", function (req, res) {
    var message = req.params.message;
    var times = req.params.times;
    var result = "";
    for (var i = 0; i < times; i++) {
        result += message + " ";
    }
    res.send(result);
});

app.get("*", (req, res) => res.send("The page not found....................."))
app.listen(3000, () => console.log("Server is started!"))