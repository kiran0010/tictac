var count=0;
function myFunction(){if(count===0 || count===2 || count===4 || count===6 || count===8){
    document.getElementById('myImage').src='x.jpg';
    }
    else{
    document.getElementById('myImage').src='y.jpg';
    }
    count=count+1;
    document.getElementById("b").disabled = true; 

    result();
       }




function myFunction1(){

    
        if(count===0 || count===2 || count===4 || count===6 || count===8){
    document.getElementById('myImage1').src='x.jpg';
    }
    else{
    document.getElementById('myImage1').src='y.jpg';
    }
    count=count+1;
    document.getElementById("b1").disabled = true; 
    result();
}
function myFunction2(){

    
        if(count===0 || count===2 || count===4 || count===6 || count===8){
    document.getElementById('myImage2').src='x.jpg';
    }
    else{
    document.getElementById('myImage2').src='y.jpg';
    }
    count=count+1;
    document.getElementById("b2").disabled = true; 
    result();
}
function myFunction3(){

    
        if(count===0 || count===2 || count===4 || count===6 || count===8){
    document.getElementById('myImage3').src='x.jpg';
    }
    else{
    document.getElementById('myImage3').src='y.jpg';
    }
    count=count+1;
    document.getElementById("b3").disabled = true;
    result();
}
function myFunction4(){

    
        if(count===0 || count===2 || count===4 || count===6 || count===8){
    document.getElementById('myImage4').src='x.jpg';
    }
    else{
    document.getElementById('myImage4').src='y.jpg';
    }
    count=count+1;
    document.getElementById("b4").disabled = true;
    result();
}
function myFunction5(){

    
        if(count===0 || count===2 || count===4 || count===6 || count===8){
    document.getElementById('myImage5').src='x.jpg';
    }
    else{
    document.getElementById('myImage5').src='y.jpg';
    }
    count=count+1;
    document.getElementById("b5").disabled = true;
    result();
}
function myFunction6(){

    
        if(count===0 || count===2 || count===4 || count===6 || count===8){
    document.getElementById('myImage6').src='x.jpg';
    }
    else{
    document.getElementById('myImage6').src='y.jpg';
    }
    count=count+1;
    document.getElementById("b6").disabled = true;
    result();
}
function myFunction7(){

    
        if(count===0 || count===2 || count===4 || count===6 || count===8){
    document.getElementById('myImage7').src='x.jpg';
    }
    else{
    document.getElementById('myImage7').src='y.jpg';
    }
    count=count+1;
    document.getElementById("b7").disabled = true;
    result();
}
function myFunction8(){

    
        if(count===0 || count===2 || count===4 || count===6 || count===8){
    document.getElementById('myImage8').src='x.jpg';
    }
    else{
    document.getElementById('myImage8').src='y.jpg';
    }
    count=count+1;
    document.getElementById("b8").disabled = true;
    result();
}

 function result(){
    console.log(document.getElementById('myImage8').src);
    if(document.getElementById('myImage').src.includes('x.jpg') && document.getElementById('myImage1').src.includes('x.jpg') && document.getElementById('myImage2').src.includes('x.jpg') || document.getElementById('myImage3').src.includes('x.jpg') && document.getElementById('myImage4').src.includes('x.jpg') && document.getElementById('myImage5').src.includes('x.jpg') || document.getElementById('myImage6').src.includes('x.jpg') && document.getElementById('myImage7').src.includes('x.jpg') && document.getElementById('myImage8').src.includes('x.jpg') || document.getElementById('myImage').src.includes('x.jpg') && document.getElementById('myImage3').src.includes('x.jpg') && document.getElementById('myImage6').src.includes('x.jpg') || document.getElementById('myImage1').src.includes('x.jpg') && document.getElementById('myImage4').src.includes('x.jpg') && document.getElementById('myImage7').src.includes('x.jpg') || document.getElementById('myImage2').src.includes('x.jpg') && document.getElementById('myImage5').src.includes('x.jpg') && document.getElementById('myImage8').src.includes('x.jpg') || document.getElementById('myImage').src.includes('x.jpg') && document.getElementById('myImage4').src.includes('x.jpg') && document.getElementById('myImage8').src.includes('x.jpg') || document.getElementById('myImage2').src.includes('x.jpg') && document.getElementById('myImage4').src.includes('x.jpg') && document.getElementById('myImage6').src.includes('x.jpg'))
    {
        document.getElementById("demo").innerHTML = "First Player Win";
        document.getElementById("b").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
    }
    else if(document.getElementById('myImage').src.includes('y.jpg') && document.getElementById('myImage1').src.includes('y.jpg') && document.getElementById('myImage2').src.includes('y.jpg') || document.getElementById('myImage3').src.includes('y.jpg') && document.getElementById('myImage4').src.includes('y.jpg') && document.getElementById('myImage5').src.includes('y.jpg') || document.getElementById('myImage6').src.includes('y.jpg') && document.getElementById('myImage7').src.includes('y.jpg') && document.getElementById('myImage8').src.includes('y.jpg') || document.getElementById('myImage').src.includes('y.jpg') && document.getElementById('myImage3').src.includes('y.jpg') && document.getElementById('myImage6').src.includes('y.jpg') || document.getElementById('myImage1').src.includes('y.jpg') && document.getElementById('myImage4').src.includes('y.jpg') && document.getElementById('myImage7').src.includes('y.jpg') || document.getElementById('myImage2').src.includes('y.jpg') && document.getElementById('myImage5').src.includes('y.jpg') && document.getElementById('myImage8').src.includes('y.jpg') || document.getElementById('myImage').src.includes('y.jpg') && document.getElementById('myImage4').src.includes('y.jpg') && document.getElementById('myImage8').src.includes('y.jpg') || document.getElementById('myImage2').src.includes('y.jpg') && document.getElementById('myImage4').src.includes('y.jpg') && document.getElementById('myImage6').src.includes('y.jpg'))
    {
        document.getElementById("demo").innerHTML = "Second Player Win";
        document.getElementById("b").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
    }
    else{
        document.getElementById("demo").innerHTML = "Tie";
    }

 }