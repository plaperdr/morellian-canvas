//Canvas n°1 - Normal test (radial gradient)
canvas = document.getElementById ("canvas1");
ctx = canvas.getContext("2d");
canvas.style.display = "inline";
ctx.textBaseline = "alphabetic";
var gradient = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 0, canvas.width/2, canvas.height/2, canvas.width/2);
gradient.addColorStop("0","red");
gradient.addColorStop("0.5","green");
gradient.addColorStop("1.0","blue");
ctx.fillStyle = gradient;
ctx.font = "15pt no-real-font-123";
ctx.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 15, 50);
var canvasData1 = canvas.toDataURL();

//Canvas n°2 - Normal test + stroke
canvas = document.getElementById ("canvas2");
ctx = canvas.getContext("2d");
canvas.style.display = "inline";
ctx.textBaseline = "alphabetic";
ctx.strokeStyle = gradient;
ctx.font = "15pt no-real-font-123";
ctx.strokeText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 15, 50);
var canvasData2 = canvas.toDataURL();


//Canvas n°3 - Normal test + different string
canvas = document.getElementById ("canvas3");
ctx = canvas.getContext("2d");
canvas.style.display = "inline";
ctx.textBaseline = "alphabetic";
ctx.fillStyle = gradient;
ctx.font = "15pt no-real-font-123";
ctx.fillText("\ud83d\ude03 ,zuiq txev shpylg knabdrojf mwC", 15, 50);
var canvasData3 = canvas.toDataURL();

//Canvas n°4 - Normal test + longer string
canvas = document.getElementById ("canvas4");
ctx = canvas.getContext("2d");
canvas.style.display = "inline";
ctx.textBaseline = "alphabetic";
ctx.fillStyle = gradient;
ctx.font = "15pt no-real-font-123";
ctx.fillText("Cwm f1jor2dban3k4 gly56phs ve7xt 8 quiz9 ,10 \ud83d\ude03", 15, 50);
var canvasData4 = canvas.toDataURL();


//Canvas n°5 - Normal test + different font size
canvas = document.getElementById ("canvas5");
ctx = canvas.getContext("2d");
canvas.style.display = "inline";
ctx.textBaseline = "alphabetic";
var gradient2 = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 0, canvas.width/2, canvas.height/2, canvas.width/2);
gradient2.addColorStop("0","red");
gradient2.addColorStop("0.5","green");
gradient2.addColorStop("1.0","blue");
ctx.fillStyle = gradient2;
ctx.font = "30pt no-real-font-123";
ctx.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 30, 100);
var canvasData5 = canvas.toDataURL();

//Canvas n°6 - Normal test + different font size + stroke
canvas = document.getElementById ("canvas6");
ctx = canvas.getContext("2d");
canvas.style.display = "inline";
ctx.textBaseline = "alphabetic";
ctx.strokeStyle = gradient2;
ctx.font = "30pt no-real-font-123";
ctx.strokeText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 30, 100);
var canvasData6 = canvas.toDataURL();


//Canvas n°7 - Normal test + different rotation
canvas = document.getElementById ("canvas7");
ctx = canvas.getContext("2d");
canvas.style.display = "inline";
ctx.textBaseline = "alphabetic";
ctx.fillStyle = gradient;
ctx.font = "15pt no-real-font-123";
//ctx.translate( canvas.width / 2, canvas.height / 2 );
ctx.rotate(Math.PI/16);
ctx.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 20, 15);
var canvasData7 = canvas.toDataURL();


//Canvas n°8 - Normal test + different font
canvas = document.getElementById ("canvas8");
ctx = canvas.getContext("2d");
canvas.style.display = "inline";
ctx.textBaseline = "alphabetic";
ctx.fillStyle = gradient;
ctx.font = "15pt Arial";
ctx.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 15, 50);
var canvasData8 = canvas.toDataURL();

//Canvas n°9 - Normal test + different color
canvas = document.getElementById ("canvas9");
ctx = canvas.getContext("2d");
canvas.style.display = "inline";
ctx.textBaseline = "alphabetic";
var gradient3 = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 0, canvas.width/2, canvas.height/2, canvas.width/2);
gradient3.addColorStop("0","purple");
gradient3.addColorStop("0.5","brown");
gradient3.addColorStop("1.0","cyan");
ctx.fillStyle = gradient3;
ctx.font = "15pt no-real-font-123";
ctx.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 15, 50);
var canvasData9 = canvas.toDataURL();

//Canvas n°10 - Normal test + different position of the points in the gradient
canvas = document.getElementById ("canvas10");
ctx = canvas.getContext("2d");
canvas.style.display = "inline";
ctx.textBaseline = "alphabetic";
var gradient4 = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 0, canvas.width/2, canvas.height/2, canvas.width/2);
gradient4.addColorStop("0","red");
gradient4.addColorStop("0.25","green");
gradient4.addColorStop("1.0","blue");
ctx.fillStyle = gradient4;
ctx.font = "15pt no-real-font-123";
ctx.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 15, 50);
var canvasData10 = canvas.toDataURL();

//Canvas n°11 - Normal test + higher number of points for the gradient
canvas = document.getElementById ("canvas11");
ctx = canvas.getContext("2d");
canvas.style.display = "inline";
ctx.textBaseline = "alphabetic";
var gradient5 = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 0, canvas.width/2, canvas.height/2, canvas.width/2);
gradient5.addColorStop("0","red");
gradient5.addColorStop("0.2","azure");
gradient5.addColorStop("0.4","chartreuse");
gradient5.addColorStop("0.6","darkorchid");
gradient5.addColorStop("0.8","crimson");
gradient5.addColorStop("1.0","lavender");
ctx.fillStyle = gradient5;
ctx.font = "15pt no-real-font-123";
ctx.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 15, 50);
var canvasData11 = canvas.toDataURL();

//Canvas n°12 - Normal test + linear gradient
canvas = document.getElementById ("canvas12");
ctx = canvas.getContext("2d");
canvas.style.display = "inline";
ctx.textBaseline = "alphabetic";
var gradient6 = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient6.addColorStop("0","red");
gradient6.addColorStop("0.5","green");
gradient6.addColorStop("1.0","blue");
ctx.fillStyle = gradient6;
ctx.font = "15pt no-real-font-123";
ctx.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 15, 50);
var canvasData12 = canvas.toDataURL();

//Canvas n°13 - Normal test + more complex linear gradient
canvas = document.getElementById ("canvas13");
ctx = canvas.getContext("2d");
canvas.style.display = "inline";
ctx.textBaseline = "alphabetic";
var gradient7 = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient7.addColorStop("0","red");
gradient7.addColorStop("0.2","azure");
gradient7.addColorStop("0.4","chartreuse");
gradient7.addColorStop("0.6","darkorchid");
gradient7.addColorStop("0.8","crimson");
gradient7.addColorStop("1.0","lavender");
ctx.fillStyle = gradient7;
ctx.font = "15pt no-real-font-123";
ctx.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 15, 50);
var canvasData13 = canvas.toDataURL();


//Canvas n°14 - Normal test + radial gradient at a different position
canvas = document.getElementById ("canvas14");
ctx = canvas.getContext("2d");
canvas.style.display = "inline";
ctx.textBaseline = "alphabetic";
var gradient8 = ctx.createRadialGradient(canvas.width/4, canvas.height/4, 0, canvas.width/2, canvas.height*3/4, canvas.width*3/4);
gradient8.addColorStop("0","red");
gradient8.addColorStop("0.5","green");
gradient8.addColorStop("1.0","blue");
ctx.fillStyle = gradient8;
ctx.font = "15pt no-real-font-123";
ctx.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 15, 50);
var canvasData14 = canvas.toDataURL();

//Canvas n°15 - Normal test + different Emoji
canvas = document.getElementById ("canvas15");
ctx = canvas.getContext("2d");
canvas.style.display = "inline";
ctx.textBaseline = "alphabetic";
ctx.fillStyle = gradient;
ctx.font = "15pt no-real-font-123";
ctx.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude18", 15, 50);
var canvasData15 = canvas.toDataURL();