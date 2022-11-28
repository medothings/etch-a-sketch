# Etch-A-Sketch

Now, before reading this README.md, go visit [the live weblink](https://medothings.github.io/etch-a-sketch) so that you know what I'm talking about.
Also you should probbaly know that this page is based on [Project: Etch-A-Sketch](https://www.theodinproject.com/lessons/foundations-etch-a-sketch) of the [Foundatins Course](https://www.theodinproject.com/paths/foundations/courses/foundations) from [the Odin Project](https://www.theodinproject.com)

## What I learnt
- How to create a color picker (also I'm not very sure what each part of the code does, but it works, so, that's great)
``` html
<label for="color-picker"></label>
<input id="color-picker" type="color"  name="color-picker">
```
- How to create a slider and also give the minimum number and maximun number (assuming that you have no idea what I am talking about with all the "minimum number" and "maximum number", just look at the code below)
``` html
<label id="size-label" for="size">16 x 16</label>
<input id="grid-size"type="range" name="size" min="1" max="100">
```
- Ok, this may be a bit surprising since it's considered "basic css", but I actually had no idea how to put an image as the background image until yesterday (as in the day before I finished this project). And since it is considered "basic css" and I'm assuming you know how to do it, I won't be writing below how to use it (or how to size it).
  - Just kidding, I will!
``` css 
body {
    background-image: url('picture.jpeg');
    background-size: 100% auto;
}
```
- If you are also going to do the color picker but don't know how to make it round, that's ok, it's way above what you know (that's why I didn't learn)
- You can make a class in css, and then you can assign the class to something in javascript (personally, I think that is very cool)
``` css
/* css */
.clicked {
    background-color: rgb(0,0,0);
    color: rgba(255, 255, 255, 0.925);
}
```
``` js
// js
buttonEl.addEventListener("click"), () => {
    buttonEl.classList.add("clicked");
}
```
- So this is actually something that I forgot how to do during my coding, and if anyone else has the same experience (no one), here is how to change the value of a variable
``` js
// So over here, I'll define a variable
let num = 5

// And here, I'll change the value
buttonEl.addEventListener("click", () => {
  num = 10
});
```
Also note that the code I write in the README.md isn't the same code as in my actual program
- I also learnt something about event that happens whenever something happens are screen, and if you `console.log()` is, event is really really really long, like literally super long, and I doubt that anyone would even need half the things there, but the target is pretty useful. Now I don't completely understand event, so I won't elaborate in case my understanding of it is completely wrong

## Future development
Currently, I don't have any ideas, so 
- Nil

## Credits
The background image is by [Henry Be] (https://unsplash.com/@henry_be) from [Unsplash] (https://unsplash.com/)

## Issues
-Nil (of course)