function getData(challenge){
    //var canvas = document.createElement("canvas");
    var canvas = document.getElementById("canvas1");
    canvas.width = 1900;
    canvas.height = 300;
    var ctx = canvas.getContext("2d");
    canvas.style.display = "inline";
    ctx.textBaseline = "alphabetic";

    for (var i = 0; i < challenge.glyphs.length; i++) {
        var st = challenge.glyphs[i];
        ctx.translate(st.rX, st.rY);
        ctx.rotate(Math.PI * st.rA);
        ctx.fillStyle = getGradient(ctx,st.gr,canvas.width);
        ctx.shadowBlur = st.sb;
        ctx.shadowColor = st.sc;
        ctx.font = st.si+"pt no-real-font-123";
        ctx.fillText(st.str, 0, 0);
        ctx.rotate(-Math.PI * st.rA);
        ctx.translate(-st.rX,-st.rY);
    }

    for (var k = 0; k < challenge.curves.length; k++) {
        var cu = challenge.curves[k];
        ctx.translate(cu.rX, cu.rY);
        ctx.beginPath();
        ctx.lineWidth = cu.width;
        ctx.strokeStyle = getGradient(ctx,cu.gr,canvas.width);
        ctx.shadowBlur = cu.sb;
        ctx.shadowColor = cu.sc;
        if(cu.points.length == 4){
            ctx.quadraticCurveTo(cu.points[0],cu.points[1],cu.points[2],cu.points[3]);
        } else {
            ctx.bezierCurveTo(cu.points[0],cu.points[1],cu.points[2],cu.points[3],cu.points[4],cu.points[5]);
        }
        ctx.stroke();
        ctx.translate(-cu.rX,-cu.rY);
    }

    var data = canvas.toDataURL();
    //canvas.remove();

    return data;
}

function getGradient(ctx,gr,width){
    var grX = gr.x;
    var grY = gr.y;
    var gradient = ctx.createRadialGradient(grX, grY, 0, grX, grY, width-grY);
    for (var j = 0; j < gr.colors.length; j++) {
        var color = gr.colors[j];
        gradient.addColorStop(color.pos,color.col);
    }
    return gradient;
}