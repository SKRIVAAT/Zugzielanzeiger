let traintype = "Zugtyp";
let destination = "Zugziel";
let time = "15:46";
let annotation = "";
let stops = "";
let hours = 0;
let minutes = 0;
let seconds = 0;
let liveTime = true;

document.getElementById("traintype").innerHTML = traintype;
document.getElementById("destination").innerHTML = destination;
document.getElementById("time").innerHTML = time;
document.getElementById("annotation").innerHTML = annotation;

function setTraintype()
{
    traintype = document.getElementById("tbTraintype").value;
    if(traintype.length > 2)
        document.getElementById("traintype").innerHTML = traintype;
}

function setDestination()
{
    destination = document.getElementById("tbDestination").value;
    if(destination.length > 2)
        document.getElementById("destination").innerHTML = destination;
}

function setCurrTime()
{
    time = document.getElementById("tbCurrTime").value;
    const timeArray = time.split(":");
    if(time.length > 1)
    {
        hours = timeArray[0];
        minutes = timeArray[1];
        seconds = timeArray[2];
        liveTime = false;
    }
    else{
        liveTime = true;
    }
}

function setTime()
{
    time = document.getElementById("tbTime").value;
    if(time.length > 2)
        document.getElementById("time").innerHTML = time;
}

function setStops()
{
    stops = "über " + document.getElementById("tbIntermediatestops").value;
    if(stops.length > 5)
        document.getElementById("stops").innerHTML = stops;
    else
        document.getElementById("stops").innerHTML = "";
}

function setAnnotation()
{
    annotation = document.getElementById("tbAnnotation").value;
    if(annotation.length > 2)
    {
        document.getElementById("annotation").innerHTML = annotation;
        document.getElementById("stops").innerHTML = "";
    }
    else
    {
        document.getElementById("annotation").innerHTML = "";
        document.getElementById("stops").innerHTML = stops;
    }
}

setInterval(() => {
    d = new Date(); //object of date()
    
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();  

    if(liveTime)
    {
        hr = d.getHours();
        min = d.getMinutes();
        sec = d.getSeconds();  
    }
    else
    {
        hr = hours;
        min = minutes;
        sec = seconds;  
    }
    
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
 
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);

function saveTimetable(){
    html2canvas(document.querySelector("#timetable")).then(canvas => {
        document.body.appendChild(canvas)
    });
}