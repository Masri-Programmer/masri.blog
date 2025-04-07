---
title: "Making a Browser Based Game With Vanilla JS and CSS – SitePoint"
source: "https://www.sitepoint.com/browser-game-with-vanilla-js-and-css/?ref=dailydev"
author:
published: 2025-03-13
created: 2025-04-03
description: "Learn how to build a flag guessing game using pure JavaScript and CSS without any other frameworks or libraries."
tags:
  - "clippings"
---
## Making a Browser Based Game With Vanilla JS and CSS

Published in [CSS](https://www.sitepoint.com/html-css/css/) · [JavaScript](https://www.sitepoint.com/javascript/) · [Vanilla JavaScript](https://www.sitepoint.com/javascript/vanilla-javascript/) · · Updated:

Share this article

Developing for the web these days can seem overwhelming. There is an almost infinitely rich choice of libraries and frameworks to pick from.

You’ll probably also need to implement a build step, version control, and a deploy pipeline. All before you’ve written a single line of code. How about a fun suggestion? Let’s take a step back and remind ourselves just how succinct and powerful modern JavaScript and CSS can be, without the need for any shiny extras.

Interested? Come with me then, on a journey to make a browser-based game using only vanilla JS and CSS.

## The Idea

We’ll be building a flag guessing game. The player is presented with a flag and a multiple-choice style list of answers.

## Step 1. Basic structure

First off, we’re going to need a list of countries and their respective flags. Thankfully, we can harness the power of emojis to display the flags, meaning we don’t have to source or, even worse, create them ourselves. I’ve prepared this in [JSON form](https://github.com/sitepoint-editors/flag-guessing-game/blob/main/js/data.json).

At its simplest the interface is going to show a flag emoji and five buttons:

![](https://uploads.sitepoint.com/wp-content/uploads/2025/03/1741723629screenshot1-294x300.png)

A dash of CSS using the grid to center everything and relative sizes so it displays nicely from the smallest screen up to the biggest monitor.

Now grab a copy of our [starter shim](https://github.com/sitepoint-editors/flag-guessing-game/blob/main/step1.html), we will be building on this throughout  
the tutorial.

The file structure for our project looks like this:

```javascript
step1.html

  step2.html // etc

  js/

    data.json

    // more js files

  helpers/

    // we'll get to this in step 3.

  css/

  i/
```

At the end of each section, there will be a link to our code in its current state.

AD

## Step 2. A Simple Prototype

Let’s get cracking. First off, we need to grab our [data.json](https://github.com/sitepoint-editors/flag-guessing-game/blob/main/js/data.json) file.

```javascript
async function loadCountries(file) {

      try {

        const response = await fetch(file);

        return await response.json();

      } catch (error) {

        throw new Error(error);

      }

    }

    // data.json contains an array of objects that looks like this:

    // { flag: <Flag emoji>, name: <Country name>}

    loadCountries('./js/data.json')

    .then((data) => {

        startGame(data.countries)

    });
```

Now that we have the data, we can start the game. The following code is generously commented on. Take a couple of minutes to read through and get a handle on what is happening.

```javascript
function startGame(countries) {

      // we want a randomized list of countries

      // first, get all the keys from our JSON object

      // now shuffle

      shuffle(countries);

      // pick answer

      let answer = countries.shift();

      // pick 4 more countries, merge our answer and shuffle

      let selected = shuffle([answer, ...countries.slice(0, 4)]);

      // update the DOM, starting with the flag

      document.querySelector('h2.flag').innerText = answer.flag;

      // update each button with a country name

      document.querySelectorAll('.suggestions button')

          .forEach((button, index) => {

        const countryName = selected[index].name;

        button.innerText = countryName;

        // this will allow us to check if the clicked button

        // corresponds to the answer

        button.dataset.correct = (countryName === answer.name);

        button.onclick = checkAnswer;

      })

    }
```

And some logic to check the answer:

```javascript
function checkAnswer(e) {

      const button = e.target;

      if (button.dataset.correct === 'true') {

        button.classList.add('correct');

        alert('Correct! Well done!');

      } else {

        button.classList.add('wrong');

        alert('Wrong answer try again');

      }

    }
```

You’ve probably noticed that our `startGame` function calls a shuffle function. Here is a simple implementation of the Fisher-Yates algorithm:

```javascript
// Fisher-Yates shuffle

    // https://bost.ocks.org/mike/shuffle/

    function shuffle(array) {

      var m = array.length, t, i;

      // While there remain elements to shuffle…

      while (m) {

        // Pick a remaining element…

        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.

        t = array[m];

        array[m] = array[i];

        array[i] = t;

      }

      return array;

    }
```

[Code from this step](https://github.com/sitepoint-editors/flag-guessing-game/blob/main/step2.html)

## Step 3. A bit of class

Time for a bit of [housekeeping](https://www.sitepoint.com/organize-project-files/). Modern libraries and frameworks often force certain conventions that help apply structure to apps. As things start to grow this makes sense and having all code in one file soon gets messy.

Let’s leverage the power of modules to keep our code, errm, modular. Update your HTML file, replacing the inline script with this:

```markup
<script type="module" src="./js/step3.js"></script>
```

Now, in js/step3.js we can load our helpers:

```javascript
import loadCountries from "./helpers/loadCountries.js";

  import shuffle from "./helpers/shuffle.js";
```

Be sure to move the shuffle and loadCountries functions to their respective files.

**Note:** Ideally we would also import our data.json as a module but, unfortunately, Firefox does not support import assertions.

You’ll also need to start each function with export default. For example:

```javascript
export default function shuffle(array) {

  ...
```

We’ll also encapsulate our game logic in a Game class. This helps maintain the integrity of the data and makes the code more secure and maintainable. Take a minute to read through the code comments.

```javascript
loadCountries('js/data.json')

  .then((data) => {

    const countries = data.countries;

    const game = new Game(countries);

    game.start();

  });

class Game {

  constructor(countries) {

    // because we shift & slice the array we'll need to keep

    // an intact copy

    this.masterCountries = countries;

    // easier access to elements

    this.DOM = {

      flag: document.querySelector('h2.flag'),

      answerButtons: document.querySelectorAll('.suggestions button')

    }

    // trigger the checkAnswer method when clicked

    this.DOM.answerButtons.forEach((button) => {

      button.onclick = (e) => {

        this.checkAnswer(e.target);

      }

    })

  }

  start() {

    // note: using the spread operator allows us to make

    // a copy of the array rather than a reference which

    // would mean changes to countries affects masterCountries

    // see 4.3 https://github.com/airbnb/javascript#arrays

    this.countries = shuffle([...this.masterCountries]);

    // get our answer & remove from the array so

    // it doesn't repeat.

    const answer = this.countries.shift();

    // pick 4 more countries, merge our answer and shuffle

    const selected = shuffle([answer, ...this.countries.slice(0, 4)]);

    // update the DOM, starting with the flag

    this.DOM.flag.innerText = answer.flag;

    // update each button with a country name

    selected.forEach((country, index) => {

      const button = this.DOM.answerButtons[index];

      // remove any classes from previous turn

      button.classList.remove('correct', 'wrong');

      button.innerText = country.name;

      button.dataset.correct = country.name === answer.name;

    });

  }

  checkAnswer(button) {

    const correct = button.dataset.correct === 'true';

    if (correct) {

      button.classList.add('correct');

      alert('Correct! Well done!');

      this.start();

    } else {

      button.classList.add('wrong');

      alert('Wrong answer try again');

    }

  }

}
```

[Code from this step](https://github.com/sitepoint-editors/flag-guessing-game/blob/main/step3.html)

## Step 4. Scoring And A Gameover Screen

Let’s update the Game constructor to handle multiple rounds:

```javascript
class Game {

  constructor(countries, numTurns = 3) {

    // number of turns in a game

    this.numTurns = numTurns;

    ...
```

Our DOM will need to be updated so we can handle the game over state, add a replay button and display the score.

```markup
<main>

      <div class="score">0</div>

      <section class="play">

      ...

      </section>

      <section class="gameover hide">

       <h2>Game Over</h2>

        <p>You scored:

          <span class="result">

          </span>

        </p>

        <button class="replay">Play again</button>

      </section>

    </main>
```

We just hide the game over the section until it is required.

Now, add references to these new DOM elements in our game constructor:

```javascript
this.DOM = {

      score: document.querySelector('.score'),

      play: document.querySelector('.play'),

      gameover: document.querySelector('.gameover'),

      result: document.querySelector('.result'),

      flag: document.querySelector('h2.flag'),

      answerButtons: document.querySelectorAll('.suggestions button'),

      replayButtons: document.querySelectorAll('button.replay'),

    }
```

We’ll also tidy up our Game start method, moving the logic for displaying the countries to a separate method. This will help keep things clean and manageable.

```javascript
start() {

    this.countries = shuffle([...this.masterCountries]);

    this.score = 0;

    this.turn = 0;

    this.updateScore();

    this.showCountries();

  }

  showCountries() {

    // get our answer

    const answer = this.countries.shift();

    // pick 4 more countries, merge our answer and shuffle

    const selected = shuffle([answer, ...this.countries.slice(0, 4)]);

    // update the DOM, starting with the flag

    this.DOM.flag.innerText = answer.flag;

    // update each button with a country name

    selected.forEach((country, index) => {

      const button = this.DOM.answerButtons[index];

      // remove any classes from previous turn

      button.classList.remove('correct', 'wrong');

      button.innerText = country.name;

      button.dataset.correct = country.name === answer.name;

    });

  }

  nextTurn() {

    const wrongAnswers = document.querySelectorAll('button.wrong')

          .length;

    this.turn += 1;

    if (wrongAnswers === 0) {

      this.score += 1;

      this.updateScore();

    }

    if (this.turn === this.numTurns) {

      this.gameOver();

    } else {

      this.showCountries();

    }

  }

  updateScore() {

    this.DOM.score.innerText = this.score;

  }

  gameOver() {

    this.DOM.play.classList.add('hide');

    this.DOM.gameover.classList.remove('hide');

    this.DOM.result.innerText = \`${this.score} out of ${this.numTurns}\`;

  }
```

At the bottom of the Game constructor method, we will  
listen for clicks to the replay button(s). In the  
event of a click, we restart by calling the start method.

```javascript
this.DOM.replayButtons.forEach((button) => {

      button.onclick = (e) => {

        this.start();

      }

    });
```

Lastly, let’s add a dash of style to the buttons, position the score and  
add our.hide class to toggle game over as needed.

```javascript
button.correct { background: darkgreen; color: #fff; }

button.wrong { background: darkred; color: #fff; }

.score { position: absolute; top: 1rem; left: 50%; font-size: 2rem; }

.hide { display: none; }
```

Progress! We now have a very simple game.  
It is a little bland, though. Let’s address that  
in the next step.

[Code from this step](https://github.com/sitepoint-editors/flag-guessing-game/blob/main/step4.html)

## Step 5. Bring The Bling!

CSS animations are a very simple and succinct way to  
bring static elements and interfaces to life.

Keyframes  
allow us to define keyframes of an animation sequence with changing  
CSS properties. Consider this for sliding our country list on and off screen:

```javascript
.slide-off { animation: 0.75s slide-off ease-out forwards; animation-delay: 1s;}

.slide-on { animation: 0.75s slide-on ease-in; }

@keyframes slide-off {

  from { opacity: 1; transform: translateX(0); }

  to { opacity: 0; transform: translateX(50vw); }

}

@keyframes slide-on {

  from { opacity: 0; transform: translateX(-50vw); }

  to { opacity: 1; transform: translateX(0); }

}
```

We can apply the sliding effect when starting the game…

```javascript
start() {

    // reset dom elements

    this.DOM.gameover.classList.add('hide');

    this.DOM.play.classList.remove('hide');

    this.DOM.play.classList.add('slide-on');

    ...

  }
```

…and in the nextTurn method

```javascript
nextTurn() {

    ...

    if (this.turn === this.numTurns) {

      this.gameOver();

    } else {

      this.DOM.play.classList.remove('slide-on');

      this.DOM.play.classList.add('slide-off');

    }

  }
```

We also need to call the nextTurn method once we’ve checked the answer. Update the checkAnswer method to achieve this:

```javascript
checkAnswer(button) {

    const correct = button.dataset.correct === 'true';

    if (correct) {

      button.classList.add('correct');

      this.nextTurn();

    } else {

      button.classList.add('wrong');

    }

  }
```

Once the slide-off animation has finished we need to slide it back on and update the country list. We could set a timeout, based on animation length, and the perform this logic. Thankfully, there is an easier way using the animationend event:

```javascript
// listen to animation end events

    // in the case of .slide-on, we change the card,

    // then move it back on screen

    this.DOM.play.addEventListener('animationend', (e) => {

      const targetClass = e.target.classList;

      if (targetClass.contains('slide-off')) {

        this.showCountries();

        targetClass.remove('slide-off', 'no-delay');

        targetClass.add('slide-on');

      }

    });
```

[Code from this step](https://github.com/sitepoint-editors/flag-guessing-game/blob/main/step5.html)

## Step 6. Final Touches

Wouldn’t it be nice to add a title screen? This way the user is given a bit of context and not thrown straight into the game.

Our markup will look like this:

```markup
<!-- hide score until game.start() is called -->

      <div class="score hide">0</div>

      <section class="intro fade-in">

       <h1>

          Guess the flag

      </h1>

       <p class="guess">🌍</p>

      <p>How many can you recognize?</p>

      <button class="replay">Start</button>

      </section>

      <!-- hide play until game.start() is called -->

      <section class="play hide">

      ...
```

Let’s hook the intro screen into the game.  
We’ll need to add a reference to it in the DOM elements:

```javascript
// in Game constructor

    this.DOM = {

      intro: document.querySelector('.intro'),

      ....
```

Then simply hide it when starting the game:

```javascript
start() {

    // hide intro

    this.DOM.intro.classList.add('hide');

    // show score

    this.DOM.score.classList.remove('hide');

    ...
```

Also, don’t forget to add the new styling:

```markup
section.intro p { margin-bottom: 2rem; }

section.intro p.guess { font-size: 8rem; }

.fade-in { opacity: 0; animation: 1s fade-in ease-out forwards; }

@keyframes fade-in {

  from { opacity: 0; }

  to { opacity: 1; }

}
```

Now wouldn’t it be nice to provide the player with a rating based on their score too? This is super easy to implement. As can be seen, in the updated gameOver method:

```javascript
const ratings = ['💩','🤣','😴','🤪','👎','😓','😅','😃','🤓','🔥','⭐'];

    const percentage = (this.score / this.numTurns) * 100;

    // calculate rating based on score

    const rating = Math.ceil(percentage / ratings.length);

    this.DOM.play.classList.add('hide');

    this.DOM.gameover.classList.remove('hide');

    // reuse our fade-in class from the intro

    this.DOM.gameover.classList.add('fade-in');

    this.DOM.result.innerHTML = \`

      ${this.score} out of ${this.numTurns}

      

      Your rating: ${this.ratings[rating]}

      \`;

  }
```

One final finishing touch; a nice animation when the player guesses correctly. We can turn once more to CSS animations to achieve this effect.

```markup
button::before { content: ' '; background: url(../i/star.svg); height: 32px; width: 32px; position: absolute; bottom: -2rem; left: -1rem; opacity: 0; }

button::after {  content: ' '; background: url(../i/star.svg); height: 32px; width: 32px; position: absolute; bottom: -2rem; right: -2rem; opacity: 0; }

/* for the above to work the button must be positioned relatively */

button { position: relative; }

button.correct::before { animation: sparkle .5s ease-out forwards; }

button.correct::after { animation: sparkle2 .75s ease-out forwards; }

@keyframes sparkle {

  from { opacity: 0; bottom: -2rem; scale: 0.5 }

  to { opacity: 0.5; bottom: 1rem; scale: 0.8; left: -2rem; transform: rotate(90deg); }

}

@keyframes sparkle2 {

  from { opacity: 0; bottom: -2rem; scale: 0.2}

  to { opacity: 0.7; bottom: -1rem; scale: 1; right: -3rem; transform: rotate(-45deg); }

}
```

We use the::before and::after pseudo elements to [attach background image (star.svg)](https://www.sitepoint.com/css-with-svg/) but keep it hidden via setting opacity to 0. It is then activated by invoking the sparkle animation when the button has the class name correct. Remember, we already apply this class to the button when the correct answer is selected.

[Code from this step](https://github.com/sitepoint-editors/flag-guessing-game/blob/main/step6.html)

## Wrap-Up And Some Extra Ideas

In less than 200 lines of (liberally commented) javascript, we have a fully  
working, mobile-friendly game. And not a single dependency or library in sight!

Of course, there are endless features and improvements we could add to our game.  
If you fancy a challenge here are a few ideas:

- [Add basic sound effects](https://www.sitepoint.com/web-audio-api-add-sound-to-web-page/) for correct and incorrect answers.
- Make the game available offline using web workers
- Store stats such as the number of plays, overall ratings in localstorage, and display
- Add a way to share your score and challenge friends on social media.

[Eoin McGrath](https://eoinmcgrath.com/) is a full stack developer with over 20 years of experience in web development. He specializes in Laravel, React, and Vue.js frameworks, alongside vanilla JavaScript. He's also passionate about browser-based games and uses them as a creative outlet to explore new techniques.

Share this article

Related articles [![DevOps by Example: Tools, Pros and Cons of a DevOps Culture](https://uploads.sitepoint.com/wp-content/uploads/2016/09/1474960018devops_feature-300x169.jpg)](https://www.sitepoint.com/devops-by-example-tools-pros-and-cons-of-a-devops-culture/) [DevOps by Example: Tools, Pros and Cons of a DevOps Culture](https://www.sitepoint.com/devops-by-example-tools-pros-and-cons-of-a-devops-culture/)

Published in

· [Docker](https://www.sitepoint.com/web/docker/) · [Programming](https://www.sitepoint.com/programming/) · [Software](https://www.sitepoint.com/web/software/) · [Software Development](https://www.sitepoint.com/programming/software-development/) · [Web](https://www.sitepoint.com/web/) ·

September 27, 2016

[![Functional Reactive Programming with Elm: An Introduction](https://uploads.sitepoint.com/wp-content/uploads/2023/08/1692781397fallback.svg)](https://www.sitepoint.com/functional-reactive-programming-elm-introduction/) [Functional Reactive Programming with Elm: An Introduction](https://www.sitepoint.com/functional-reactive-programming-elm-introduction/)

Published in

· [JavaScript](https://www.sitepoint.com/javascript/) ·

March 21, 2016

[![Introducing Bootcards: Bootstrap Cards Made Easy](https://uploads.sitepoint.com/wp-content/uploads/2016/10/1476096824bootcards2-01-300x167.png)](https://www.sitepoint.com/introducing-bootcards-bootstrap-cards-made-easy/) [Introducing Bootcards: Bootstrap Cards Made Easy](https://www.sitepoint.com/introducing-bootcards-bootstrap-cards-made-easy/)

Published in

· [Bootstrap](https://www.sitepoint.com/html-css/bootstrap/) · [CSS](https://www.sitepoint.com/html-css/css/) · [Frameworks](https://www.sitepoint.com/html-css/frameworks-css/) · [HTML & CSS](https://www.sitepoint.com/html-css/) ·

October 18, 2016

[![Optimizing React Performance with Stateless Components](https://uploads.sitepoint.com/wp-content/uploads/2017/05/1493834605evolutionB-01-300x167.png)](https://www.sitepoint.com/optimizing-react-performance-stateless-components/) [Optimizing React Performance with Stateless Components](https://www.sitepoint.com/optimizing-react-performance-stateless-components/)

Published in

· [JavaScript](https://www.sitepoint.com/javascript/) · [React](https://www.sitepoint.com/javascript/react/) ·

May 3, 2017

[![CSS Debugging and Optimization: Code-quality Tools](https://uploads.sitepoint.com/wp-content/uploads/2018/10/1538450144code-quality-300x190.jpg)](https://www.sitepoint.com/css-debugging-and-optimization-code-quality-tools/) [CSS Debugging and Optimization: Code-quality Tools](https://www.sitepoint.com/css-debugging-and-optimization-code-quality-tools/)

Published in

· [CSS](https://www.sitepoint.com/html-css/css/) · [HTML & CSS](https://www.sitepoint.com/html-css/) ·

October 4, 2018

[![Exploring the Hero Section](https://uploads.sitepoint.com/wp-content/uploads/2023/08/1692781397fallback.svg)](https://www.sitepoint.com/exploring-hero-section/) [Exploring the Hero Section](https://www.sitepoint.com/exploring-hero-section/)

Published in

· [Design](https://www.sitepoint.com/design-ux/design/) · [Design & UX](https://www.sitepoint.com/design-ux/) · [Illustration](https://www.sitepoint.com/design-ux/illustration/) · [Photography & Imagery](https://www.sitepoint.com/design-ux/photography-and-imagery/) ·

July 14, 2015

[![10 Essential Material Design Resources and Tutorials](https://uploads.sitepoint.com/wp-content/uploads/2023/08/1692781397fallback.svg)](https://www.sitepoint.com/10-essential-material-design-resources-and-tutorials/) [10 Essential Material Design Resources and Tutorials](https://www.sitepoint.com/10-essential-material-design-resources-and-tutorials/)

Published in

· [Android](https://www.sitepoint.com/mobile/android/) · [Design](https://www.sitepoint.com/design-ux/design/) · [Mobile](https://www.sitepoint.com/mobile/) · [Mobile Web Development](https://www.sitepoint.com/mobile/web-mobile/) ·

August 18, 2015

[![Java’s Binary Search API in Five Minutes](https://uploads.sitepoint.com/wp-content/uploads/2017/03/1490686205binary-search-300x160.jpg)](https://www.sitepoint.com/javas-binary-search-api-tutorial/) [Java’s Binary Search API in Five Minutes](https://www.sitepoint.com/javas-binary-search-api-tutorial/)

Published in

· [Java](https://www.sitepoint.com/java/) ·

March 29, 2017