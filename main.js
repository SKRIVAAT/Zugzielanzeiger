let traintype = "IC";
let destination = "Bratislava-Petr.";
let time = "15:46";
let annotation = "";
let stops = "";

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
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
 
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);