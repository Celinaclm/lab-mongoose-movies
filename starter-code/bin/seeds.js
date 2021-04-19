const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity.model");

const celebrities = [
  {
    name: "Rachel McAdams",
    occupation: "actress",
    catchPhrase: "I drink maple syrup",
  },
  {
    name: "Will Ferrel",
    occupation: "actor",
    catchPhrase: "YOU SIT ON A THRONE OF LIES!",
  },
  {
    name: "Dan Stevens",
    occupation: "actor",
    catchPhrase: "The comfort zone is the great enemy to creativity",
  },
];

mongoose.connect('mongodb://localhost/celebrity-app', {useNewUrlParser: true})
    .then(() => {
        console.log('Connected to database');
        Celebrity.insertMany(celebrities)
            .then((celebrities) => {
                console.log(`${celebrities.length} inserted`)
        })
})
    .catch(error => console.error(error));
