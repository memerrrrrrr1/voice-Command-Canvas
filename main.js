x=0;
y=0;

shape_circ="";
shape_rect="";

wwsr= window.webkitSpeechRecognition;
rec= new wwsr()

function mystart(){
    document.getElementById("status").innerHTML="The system is listening. Please speak circle or rectangle."
    rec.start()
}

rec.onresult=function(myparam){
    console.log(myparam)
    var content= myparam.results[0][0].transcript;

    document.getElementById("status").innerHTML="The speech has been recognised as:"+content;
    if(content=="Circle"){
        x= Math.floor(Math.random()  *  900)
        y= Math.floor(Math.random()  *  600)
        document.getElementById("status").innerHTML="Started drawing circle.";
        shape_circ="set"
        console.log(shape_circ)
    }

    if(content=="rectangle"){
        x= Math.floor(Math.random()  *  900)
        y= Math.floor(Math.random()  *  450)
        document.getElementById("status").innerHTML="Started drawing rectangle.";
        shape_rect="set"
    }
   
}

function setup(){
    canvas=createCanvas(1050,500)
}

function draw(){
    fill("#64C0DD")
    console.log(shape_circ)
    if(shape_circ == "set"){
       
        radius=Math.floor(Math.random()  *  100)
        circle(x,y,radius)
        document.getElementById("status").innerHTML="Circle is drawn.";
        shape_circ="";
    }
    if(shape_rect== "set"){
       
        rect(x,y,70,50)
        document.getElementById("status").innerHTML="Rectangle is drawn.";
        shape_rect="";
    }
}

