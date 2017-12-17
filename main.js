let magicBallResponses = ["It is certain","It is decidedly so", "Without a doubt", "Yes, definitely", "You may rely on it", "As I see it, yes","Most        likely", "Outlook good","Yes","Signs point to yes","Reply hazy try again","Ask again later","Better not tell you now","Cannot predict now",
"Concentrate and ask again","Don't count on it","My reply is no","My sources say no","Outlook not so good","Very doubtful"];

let randomIndex = (length) => {
  return Math.floor((Math.random() *length))
};

answerIndex = randomIndex(4);
mainDiv = document.getElementById("main");
mainDiv.innerHTML = magicBallResponses[answerIndex];
mainDiv.innerHTML = magicBallResponses[0];
mainDiv.innerHTML = magicBallResponses[magicBallResponses.length-1];

positiveResponses = []
for (i = 0; i < 10; i++) {
  positiveResponses.push("<br>" + magicBallResponses[i]);
}

mainDiv.innerHTML = positiveResponses;

negativeResponses = []
for (i = 10; i < 20; i++) {
  negativeResponses.push("<br>" + magicBallResponses[i]);
}

mainDiv.innerHTML = negativeResponses;

magicBallResponses[0] = "Ask again later";

magicBallResponses.unshift("I bet you would");
magicBallResponses.splice(10,0,"Only on Friday the 13th...");
magicBallResponses.push("Nice try");
