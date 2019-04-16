/*****************************
 *     Generator limits      *
 * ***************************/

var maxGradientPoints = 100;
var minStrings = 10;
var maxStrings = 50;
var minStringLength = 3;
var maxStringLength = 10;
var minSize = 30;
var maxSize = 78;
var minCurves = 1;
var maxCurves = 10;
var minCurveWidth = 2;
var maxCurveWidth = 10;
var minCurveXY = -200;
var maxCurveXY = 200;
var minShadowBlur = 0;
var maxShadowBlur = 50;
var canvasWidth = 1900;
var canvasHeight = 300;


/*****************************
 *    Generator functions    *
 * ***************************/

function getRandomColor() {
    var letters = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomString(len, charSet) {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < len; i++) {
        var randomPos = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPos,randomPos+1);
    }
    return randomString;
}

function getRandomInt(min,max) {//Min and max included
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomNbStrings(){
    return getRandomInt(minStrings,maxStrings);
}

function getRandomStringLength(){
    return getRandomInt(minStringLength,maxStringLength);
}

function getRandomSize(){
    return getRandomInt(minSize,maxSize);
}

function getRandomNbGradientPoints(){
    return getRandomInt(0,maxGradientPoints-2);
}

function getRandomShadowBlur(){
    return getRandomInt(minShadowBlur,maxShadowBlur);
}

function getRandomCurveWidth(){
    return getRandomInt(minCurveWidth,maxCurveWidth);
}

function getRandomNbCurves(){
    return getRandomInt(minCurves,maxCurves);
}

function getRandomCurvePoints(){
    var points = [];
    for(var i=0; i<4;i++){
        points.push(getRandomInt(minCurveXY,maxCurveXY));
    }

    //if quadratic curve is chosen,
    //generate two more points
    if(Math.random()>0.5){
        points.push(getRandomInt(minCurveXY,maxCurveXY));
        points.push(getRandomInt(minCurveXY,maxCurveXY));
    }

    return points;
}

function randomX(){
    return Math.floor(Math.random() * canvasWidth);
}

function randomY(){
    return Math.floor(Math.random() * canvasHeight);
}

function getRandomRadialGradient(){

    //Center of the gradient
    var rX = randomX();  //between 0 and canvasWidth
    var rY = randomY(); //between 0 and canvasHeight

    //Generation of the colors
    var colors = [];
    colors.push({pos: "0", col: getRandomColor()});
    colors.push({pos: "1", col: getRandomColor()});
    var nbRandomPoints = getRandomNbGradientPoints();
    for(var i=0; i<nbRandomPoints; i++){
        colors.push({pos: Math.random().toString(), col: getRandomColor()});
    }

    return { x:rX , y:rY, colors: colors};
}


/*****************************
 *    Challenge generation   *
 * ***************************/
//Generation of random parameters
function generateChallenge(){

    var glyphs = [];
    var nbGlyphs = getRandomNbStrings();
    for(var j=0; j<nbGlyphs; j++){
        var str = getRandomString(getRandomStringLength());
        var size = getRandomSize();
        var rX = randomX(); //Random X
        var rY = randomY(); //Random Y
        var rAngle = Math.floor(Math.random() * 360) / 360; //Random rotation
        var gr =  getRandomRadialGradient();
        var sb = getRandomShadowBlur();
        var sc = getRandomColor();
        glyphs.push({str:str,si:size,rX:rX,rY:rY,rA:rAngle,gr:gr,sb:sb,sc:sc});
    }

    var curves = [];
    var nbCurves = getRandomNbCurves();
    for(var k=0; k<nbCurves; k++){
        var rX = randomX(); //Random X
        var rY = randomY(); //Random Y
        var points = getRandomCurvePoints();//Return 4 or 6 points depending on the curve
        var width = getRandomCurveWidth();
        var gr =  getRandomRadialGradient();
        var sb = getRandomShadowBlur();
        var sc = getRandomColor();
        curves.push({rX:rX,rY:rY,points:points,width:width,gr:gr,sb:sb,sc:sc});
    }

    return {"glyphs": glyphs, "curves": curves};
}