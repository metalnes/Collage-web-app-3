    var SpeechRecognition=window.webkitSpeechRecognition;
  var recognition=new SpeechRecognition()  

  function start(){
     document.getElementById("SpeechText").innerHTML="Pls Speak System is listening"
     recognition.start()
  }
recognition.onresult=function(event){
    console.log(event)
    content=event.results[0][0].transcript
document.getElementById("SpeechText").innerHTML=content
if(content=="take my selfie"||content=="take my selfie"||content=="selfie")
speak()

}
function speak(){
    var synth=window.speechSynthesis
    setTimeout( function(){
        img_id="selfie1"
        takesnapshot()
        speak_data="Taking your selfie in 5 seconds"
        var utterthis=new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterthis)
    },5000)
    setTimeout( function(){
        img_id="selfie2"
        takesnapshot()
        speak_data="Taking another selfie in 5 seconds"
        var utterthis=new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterthis)
    },5000)
    setTimeout( function(){
        img_id="selfie3"
        takesnapshot()
        speak_data="Taking last selfie in 5 seconds"
        var utterthis=new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterthis)
    },5000)
}

function takesnapshot(){
    console.log(img_id);

    Webcam.snap(function(data_uri){
if(img_id=="selfie1")
{document.getElementById("result1").innerHTML="<img id='selfie1'src='"+data_uri+"'>";
    }
 
    if(img_id=="selfie2")
{document.getElementById("result2").innerHTML="<img id='selfie2'src='"+data_uri+"'>";}

if(img_id=="selfie3")
{document.getElementById("result3").innerHTML="<img id='selfie3'src='"+data_uri+"'>";}

})
}
Webcam.set({
   width: 350 ,
   height: 450,
   image_format:"jpeg",
   jpeg_quality:100
})

camera=document.getElementById("camera")
Webcam.attach(camera)