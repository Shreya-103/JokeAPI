const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.get("/random", (req,res)=>{
    const randomIndex = Math.floor(Math.random()*jokes.length);
    res.json(jokes[randomIndex]);
});
//getting jokes by id
app.use(bodyParser.urlencoded({extended: true}));
app.get("/jokes/:id", (req,res)=>{
  const id = parseInt(req.params.id);
  const foundJoke = jokes.find((joke)=> joke.id === id);
  res.json(foundJoke);
})
//getting joke by type
app.get("/filter", (req,res)=>{
  const type = req.query.type;
  const jokeByType = jokes.filter((joke)=> joke.type === type);
  res.json(jokeByType);
})
const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});

var jokes = 
    [
  {
    "id": 1,
    "joke": "Why don't scientists trust atoms? Because they make up everything!",
    "type": "science"
  },
  {
    "id": 2,
    "joke": "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "type": "one-liner"
  },
  {
    "id": 3,
    "joke": "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "type": "dad-joke"
  },
  {
    "id": 4,
    "joke": "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    "type": "math"
  },
  {
    "id": 5,
    "joke": "I asked my dog what's two minus two. He said nothing.",
    "type": "animal"
  },
  {
    "id": 6,
    "joke": "What do you call fake spaghetti? An impasta.",
    "type": "pun"
  },
  {
    "id": 7,
    "joke": "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
    "type": "sports"
  },
  {
    "id": 8,
    "joke": "What’s orange and sounds like a parrot? A carrot.",
    "type": "one-liner"
  },
  {
    "id": 9,
    "joke": "I used to play piano by ear, but now I use my hands.",
    "type": "music"
  },
  {
    "id": 10,
    "joke": "What do you call a belt made of watches? A waist of time.",
    "type": "pun"
  },
  {
    "id": 11,
    "joke": "This is joke number 11, and it's still funny!",
    "type": "dad-joke"
  },
  {
    "id": 12,
    "joke": "This is joke number 12, and it's still funny!",
    "type": "pun"
  },
  {
    "id": 13,
    "joke": "This is joke number 13, and it's still funny!",
    "type": "animal"
  },
  {
    "id": 14,
    "joke": "This is joke number 14, and it's still funny!",
    "type": "tech"
  },
  {
    "id": 15,
    "joke": "This is joke number 15, and it's still funny!",
    "type": "math"
  },
  {
    "id": 16,
    "joke": "This is joke number 16, and it's still funny!",
    "type": "science"
  },
  {
    "id": 17,
    "joke": "This is joke number 17, and it's still funny!",
    "type": "office"
  },
  {
    "id": 18,
    "joke": "This is joke number 18, and it's still funny!",
    "type": "school"
  },
  {
    "id": 19,
    "joke": "This is joke number 19, and it's still funny!",
    "type": "sports"
  },
  {
    "id": 20,
    "joke": "This is joke number 20, and it's still funny!",
    "type": "one-liner"
  },
  {
    "id": 21,
    "joke": "This is joke number 21, and it's still funny!",
    "type": "dad-joke"
  },
  {
    "id": 22,
    "joke": "This is joke number 22, and it's still funny!",
    "type": "pun"
  },
  {
    "id": 23,
    "joke": "This is joke number 23, and it's still funny!",
    "type": "animal"
  },
  {
    "id": 24,
    "joke": "This is joke number 24, and it's still funny!",
    "type": "tech"
  },
  {
    "id": 25,
    "joke": "This is joke number 25, and it's still funny!",
    "type": "math"
  },
  {
    "id": 26,
    "joke": "This is joke number 26, and it's still funny!",
    "type": "science"
  },
  {
    "id": 27,
    "joke": "This is joke number 27, and it's still funny!",
    "type": "office"
  },
  {
    "id": 28,
    "joke": "This is joke number 28, and it's still funny!",
    "type": "school"
  },
  {
    "id": 29,
    "joke": "This is joke number 29, and it's still funny!",
    "type": "sports"
  },
  {
    "id": 30,
    "joke": "This is joke number 30, and it's still funny!",
    "type": "one-liner"
  },
  {
    "id": 31,
    "joke": "This is joke number 31, and it's still funny!",
    "type": "dad-joke"
  },
  {
    "id": 32,
    "joke": "This is joke number 32, and it's still funny!",
    "type": "pun"
  },
  {
    "id": 33,
    "joke": "This is joke number 33, and it's still funny!",
    "type": "animal"
  },
  {
    "id": 34,
    "joke": "This is joke number 34, and it's still funny!",
    "type": "tech"
  },
  {
    "id": 35,
    "joke": "This is joke number 35, and it's still funny!",
    "type": "math"
  },
  {
    "id": 36,
    "joke": "This is joke number 36, and it's still funny!",
    "type": "science"
  },
  {
    "id": 37,
    "joke": "This is joke number 37, and it's still funny!",
    "type": "office"
  },
  {
    "id": 38,
    "joke": "This is joke number 38, and it's still funny!",
    "type": "school"
  },
  {
    "id": 39,
    "joke": "This is joke number 39, and it's still funny!",
    "type": "sports"
  },
  {
    "id": 40,
    "joke": "This is joke number 40, and it's still funny!",
    "type": "one-liner"
  },

  {
    "id": 41,
    "joke": "Why don’t skeletons fight each other? They don’t have the guts.",
    "type": "halloween"
  }
    ];