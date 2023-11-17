let traintype = "Zugtyp";
let destination = "Zugziel";
let time = "15:46";
let annotation = "";
let stops = "";
let hours = 0;
let minutes = 0;
let seconds = 0;
let liveTime = true;
let destinations = ["Abfaltersbach",
"Achau",
"Achenlohe",
"Admont",
"Aich-Assach",
"Aigen-Schlägl",
"Aisthofen",
"Allentsteig",
"Altach",
"Altenhof",
"Altenstadt",
"Amstetten",
"Andorf",
"Angern",
"Annenheim",
"Ansfelden",
"Antiesenhofen",
"Arbing",
"Ardning",
"Arnoldstein",
"Aspang",
"Atzenbrugg",
"Aurachkirchen",
"Aurolzmünster",
"Bad Aussee",
"Bad Blumau",
"Bad Erlach",
"Bad Fischau",
"Bad Gastein",
"Bad Goisern",
"Bad Ischl",
"Bad Ried",
"Bad Vigaun",
"Bad Vöslau",
"Baden",
"Bergern",
"Bernhardsthal",
"Bierbaum",
"Bisamberg",
"Bischofshofen",
"Bleiburg",
"Blindenmarkt",
"Bludenz",
"Böckstein",
"Böheimkirchen",
"Bregenz",
"Bregenz Hafen",
"Breitenbrunn",
"Breitensee",
"Breitenstein",
"Breitenwaida",
"Brixlegg",
"Bruck a.d.Mur",
"Bruck-Fusch",
"Buchberg",
"Deutschkreutz",
"Dölsach",
"Dorf a.d.Enns",
"Dorfgastein",
"Dornach",
"Dornbirn",
"Dreistetten",
"Drösing",
"Dürnbach",
"Dürnberg",
"Dürnkrut",
"Dürrwien",
"Ebenfurth",
"Ebensee",
"Eberschwang",
"Ebreichsdorf",
"Eggenburg",
"Ehrenhausen",
"Eichberg",
"Eisenstadt",
"Elsbethen",
"Emmersdorf",
"Enns",
"Ennsdorf",
"Erlauf",
"Ernsthofen",
"Eschenau",
"Etsdorf-Straß",
"Eugendorf",
"Faak am See",
"Fehring",
"Feldbach",
"Feldkirch",
"Felixdorf",
"Fels",
"Ferndorf",
"Fieberbrunn",
"Finkenstein",
"Fischamend",
"Flaurling",
"Floridsdorf",
"Föderlach",
"Forst Hilti",
"Franckstraße",
"Frankenmarkt",
"Frastanz",
"Frättingsdorf",
"Freistadt",
"Friedberg",
"Friedburg",
"Friesach",
"Frohnleiten",
"Fürnitz",
"Fürstenfeld",
"Furth",
"Furth-Palt",
"Gaflenz",
"Gaishorn",
"Gaisruck",
"Gänserndorf",
"Garsten",
"Gars-Thunau",
"Gattendorf",
"Gedersdorf",
"Geinberg",
"Gemeinlebarn",
"Gerasdorf",
"Gerling OÖ",
"Gersthof",
"Getzersdorf",
"Gießenbach",
"Gisingen",
"Glandorf",
"Glanegg",
"Gleisdorf",
"Gleißenfeld",
"Glinzendorf",
"Gloggnitz",
"Gmünd N.Ö.",
"Gmunden",
"Gniebing",
"Gobelsburg",
"Gödersdorf",
"Göllersdorf",
"Göpfritz",
"Gopperding",
"Gosdorf",
"Götzendorf",
"Götzis",
"Grafendorf",
"Grafenstein",
"Granitztal",
"Graz Hbf",
"Graz Puntigam",
"Grein Stadt",
"Greinsfurth",
"Gries",
"Grieswirt",
"Grillgasse",
"Gröbming",
"Groß Sierning",
"Großendorf",
"Großraming",
"Gunskirchen",
"Guntersdorf",
"Gurten",
"Gutenstein",
"Haiding",
"Haiming",
"Hainfeld",
"Halbenrain",
"Hall in Tirol",
"Hallein",
"Hallstatt",
"Hall-Thaur",
"Handelskai",
"Handelskai",
"Hard-Fussach",
"Hart bei Graz",
"Hartberg",
"Haselstauden",
"Haslach",
"Hatlerdorf",
"Hatting",
"Hatzendorf",
"Haus",
"Hausleiten",
"Hausruck",
"Hautzendorf",
"Heinfels",
"Helmahof",
"Hengsberg",
"Hennersdorf",
"Hermagor",
"Hernals",
"Herzogenburg",
"Herzograd",
"Hieflau",
"Hilm-Kematen",
"Himberg",
"Hinterstoder",
"Hirschbach",
"Hirtenberg",
"Höbersdorf",
"Hochfilzen",
"Hochzirl",
"Hofstatt",
"Hohenau",
"Hohenems",
"Hollabrunn",
"Holzleithen",
"Hopfgarten",
"Hörersdorf",
"Horn",
"Hörsching",
"Hüttau Ort",
"Iglmühle",
"Imsterberg",
"Imst-Pitztal",
"Innsbruck Hbf",
"Inzing",
"Irnfritz",
"Irschen",
"Jedenspeigen",
"Jedlersdorf",
"Jenbach",
"Jennersdorf",
"Jois",
"Judenburg",
"Kainisch",
"Kalsdorf",
"Kalwang",
"Kamegg",
"Kammern",
"Kapellerfeld",
"Kapfenberg",
"Kastenreith",
"Katsdorf",
"Katzelsdorf",
"Kefermarkt",
"Kimpling",
"Kindberg",
"Kirchbichl",
"Kirchstetten",
"Kittsee",
"Kitzbühel",
"Klaus",
"Kleblach-Lind",
"Kledering",
"Kleinreifling",
"Kleinzell",
"Knittelfeld",
"Kolbnitz",
"Korneuburg",
"Kothmühle",
"Kottingbrunn",
"Kranebitten",
"Kraubath",
"Kreisbach",
"Kremsmünster",
"Krieglach",
"Kritzendorf",
"Kröllendorf",
"Krummnußbaum",
"Krumpendorf",
"Küb",
"Kuchl",
"Kuchl Garnei",
"Kufstein",
"Kumpfmühl",
"Laa a.d.Thaya",
"Lacken",
"Ladendorf",
"Lähn",
"Lahrndorf",
"Lambach",
"Lambach Markt",
"Landeck-Zams",
"Langenlebarn",
"Langenlois",
"Langenwang",
"Langkampfen",
"Lanzenkirchen",
"Laßnitzhöhe",
"Laßnitzthal",
"Lauffen",
"Lauterach",
"Lebring",
"Ledenitzen",
"Leibnitz",
"Leithen",
"Lend",
"Lendorf",
"Lengau",
"Lenzing",
"Lenzing Ort",
"Leoben Hbf",
"Leobersdorf",
"Leogang",
"Leonding",
"Leopoldau",
"Lermoos",
"Lichendorf",
"Lienz",
"Lienz-Peggetz",
"Liesing",
"Liezen",
"Lilienfeld",
"Lind-Rosegg",
"Linz Hbf",
"Linz Oed",
"Linz Pichling",
"Linz Urfahr",
"Lödersdorf",
"Loosdorf",
"Losenstein",
"Ludesch",
"Lungitz",
"Lustenau",
"Mandling",
"Mannswörth",
"Marchegg",
"Marchtrenk",
"Maria Anzbach",
"Maria Ellend",
"Maria Rain",
"Maria Saal",
"Marktl",
"Marz-Rohrbach",
"Matrei",
"Mattersburg",
"Mattighofen",
"Mauerkirchen",
"Mauer-Öhling",
"Mautbrücken",
"Mautern",
"Mauthausen",
"Melk",
"Micheldorf",
"Michelhausen",
"Mining",
"Mistelbach",
"Mittlern",
"Mödling",
"Mogersdorf",
"Mötz",
"Mühlheim",
"Mühling",
"Münchendorf",
"Munderfing",
"Mureck",
"Mürzzuschlag",
"Musau",
"Nendeln",
"Nenzing",
"Nettingsdorf",
"Neudorf",
"Neudörfl",
"Neufelden",
"Neulengbach",
"Neuratting",
"Nickelsdorf",
"Niederöblarn",
"Niklasdorf",
"Nikolsdorf",
"Nötsch",
"Nußbach",
"Nußdorf",
"Nüziders",
"Ober Piesting",
"Ober Radlberg",
"Oberalm",
"Oberbrunn",
"Oberdrauburg",
"Obereggendorf",
"Oberhart",
"Obersee",
"Oberweiden",
"Öblarn",
"Oed",
"Oepping",
"Oftering",
"Ollersbach",
"Ortmann",
"Ottakring",
"Ottensheim",
"Ötztal",
"Paasdorf",
"Pama",
"Parndorf",
"Parndorf Ort",
"Pasching",
"Passering",
"Patsch",
"Paudorf",
"Perg",
"Pernegg",
"Peterskirchen",
"Pettenbach",
"Petzenkirchen",
"Pfaffstätten",
"Pfarrwerfen",
"Pfennigbach",
"Pflach",
"Pichl",
"Piesting",
"Pinggau Markt",
"Pinsdorf",
"Pitten",
"Plank am Kamp",
"Platt",
"Pöchlarn",
"Pöckau",
"Pöham",
"Pöndorf",
"Pottenbrunn",
"Pottschach",
"Pram-Haag",
"Pregarten",
"Pressbaum",
"Prinzersdorf",
"Pritschitz",
"Pruggern",
"Puch",
"Puch Urstein",
"Puchenau",
"Puchenau West",
"Pulgarn",
"Pürgg",
"Purgstall",
"Purkla",
"Pusarnitz",
"Raaba",
"Raasdorf",
"Rabensburg",
"Radstadt",
"Rankweil",
"Redl-Zipf",
"Regelsbrunn",
"Reichraming",
"Reith",
"Rekawinkel",
"Rennweg",
"Retz",
"Riedau",
"Riedenburg",
"Rietz",
"Rohr",
"Rohrbach-Berg",
"Rohr-Bad Hall",
"Rohrendorf",
"Roppen",
"Rosenau",
"Rosenbach",
"Rosenburg",
"Roßleithen",
"Rothengrub",
"Rothenthurn",
"Rottenegg",
"Rum",
"Saalfelden",
"Saffen",
"Salzburg Hbf",
"Salzburg Sam",
"Salzburg Süd",
"Sarasdorf",
"Sattendorf",
"Sattledt",
"Säusenstein",
"Saxen",
"Schaan-Vaduz",
"Schaftenau",
"Schärding",
"Scharnitz",
"Schauboden",
"Schauersberg",
"Scheibbs",
"Scheifling",
"Schladming",
"Schlägl",
"Schleinbach",
"Schlierbach",
"Schlöglmühl",
"Schloß Haus",
"Schlüßlberg",
"Schönwies",
"Schrambach",
"Schwanenstadt",
"Schwarza",
"Schwarzenau",
"Schwarzsee",
"Schwaz",
"Schwechat",
"Schwertberg",
"Sebersdorf",
"Seebenstein",
"Selzthal",
"Semmering",
"Seyring",
"Siebenhirten",
"Siemensstraße",
"Sierndorf",
"Silberwald",
"Sillian",
"Silz",
"Söchau",
"Sollenau",
"Sölling",
"Sonntagberg",
"Spielberg",
"Spillern",
"St.Egyden",
"St.Jodok",
"St.Michael",
"St.Pantaleon",
"St.Paul",
"St.Paul Bad",
"St.Pölten Hbf",
"St.Valentin",
"Staatz",
"Stadl-Paura",
"Stadt Haag",
"Stallegg",
"Stams",
"Stans",
"Statzendorf",
"Steeg-Gosau",
"Steinhaus",
"Steinkogl",
"Steyr",
"Steyregg",
"Steyrling",
"Stiefern",
"Stillfried",
"Stockerau",
"Straßwalchen",
"Stübing",
"Suben",
"Sulz-Röthis",
"Summerau",
"Tainach-Stein",
"Tallesbrunn",
"Tassenbach",
"Tattendorf",
"Tauplitz",
"Teesdorf",
"Teichstätt",
"Tenneck",
"Terfens-Weer",
"Ternberg",
"Ternitz",
"Thal",
"Thalheim-Pöls",
"Theresienfeld",
"Thörl-Maglern",
"Tiffen",
"Timelkam",
"Tisis",
"Töschling",
"Traisen",
"Traisen Markt",
"Traismauer",
"Trasdorf",
"Trattenbach",
"Traun",
"Traunkirchen",
"Traxenbichl",
"Trieben",
"Trumau",
"Tulln Stadt",
"Tullnerfeld",
"Übersbach",
"Unter Höflein",
"Unterhart",
"Unterretzbach",
"Unzmarkt",
"Urschendorf",
"Viechtwang",
"Viehofen",
"Villach Hbf",
"Vils Stadt",
"Vitis",
"Vöcklabruck",
"Vöcklamarkt",
"Voitsdorf",
"Völs",
"Waldegg",
"Walding",
"Wallersee",
"Wampersdorf",
"Wankham",
"Weigelsdorf",
"Weitlanbrunn",
"Weizelsdorf",
"Wels Hbf",
"Wels Messe",
"Wendling",
"Werfen",
"Werndorf",
"Wernstein",
"Westendorf",
"Weyer",
"Wien Hbf",
"Wien Meidling",
"Wien Mitte",
"Wien Penzing",
"Wien Speising",
"Wien Stadlau",
"Wien Westbf",
"Wiesen-Sigleß",
"Wiesmühle",
"Wildon",
"Wildungsmauer",
"Wilfleinsdorf",
"Wilfling",
"Willendorf",
"Windau",
"Winden",
"Winzendorf",
"Wittmannsdorf",
"Wolfsberg",
"Wolfshütte",
"Wolfsthal",
"Wolfurt",
"Wolkersdorf",
"Wöllersdorf",
"Wopfing",
"Wörgl Hbf",
"Wörgl Kundl",
"Zell a.d.Pram",
"Zell am See",
"Zellerndorf",
"Zeltweg",
"Ziersdorf",
"Zirl",
"Zöbing",
"Zurndorf"];

document.getElementById("traintype").innerHTML = traintype;
document.getElementById("destination").innerHTML = destination;
document.getElementById("time").innerHTML = time;
document.getElementById("annotation").innerHTML = annotation;
document.getElementById("ab").innerHTML = "⟼ ab";

document.getElementById("traintype2").innerHTML = traintype;
document.getElementById("destination2").innerHTML = destination;
document.getElementById("time2").innerHTML = time;
document.getElementById("annotation2").innerHTML = annotation;
document.getElementById("ab2").innerHTML = "⟼ ab";

function setTraintype()
{
    traintype = document.getElementById("tbTraintype").value;
    if(traintype.length > 0)
    {
        document.getElementById("traintype").innerHTML = traintype;
        document.getElementById("traintype2").innerHTML = traintype;
    }
}

function setDestination()
{
    destination = document.getElementById("tbDestination").value;
    if(destination.length > 2)
    {
        document.getElementById("destination").innerHTML = destination;
        document.getElementById("destination2").innerHTML = destination;
    }
}

function setAbAn()
{
    if(document.getElementById("ab").innerHTML == "⟼ ab")
    {
        document.getElementById("ab").innerHTML = "⇤ an";
        document.getElementById("ab2").innerHTML = "⇤ an";
        document.getElementById("btnAbfahrt").innerHTML = "Ankunft";
    }
    else
    { 
        document.getElementById("ab").innerHTML = "⟼ ab";
        document.getElementById("ab2").innerHTML = "⟼ ab";
        document.getElementById("btnAbfahrt").innerHTML = "Abfahrt";
    }
}

function setRandomDestination()
{
    destination = destinations[Math.floor(Math.random() * destinations.length)];
    document.getElementById("tbDestination").value = destination;
    document.getElementById("destination").innerHTML = destination;
    document.getElementById("destination2").innerHTML = destination;
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
    {
        document.getElementById("time").innerHTML = time;
        document.getElementById("time2").innerHTML = time;
    }
}

function setStops()
{
    stops = "über " + document.getElementById("tbIntermediatestops").value;
    if(stops.length > 5)
    {
        document.getElementById("stops").innerHTML = stops;
        document.getElementById("stops2").innerHTML = stops;
    }
    else
    {
        document.getElementById("stops").innerHTML = "";
        document.getElementById("stops2").innerHTML = "";
    }
}

function setAnnotation()
{
    annotation = document.getElementById("tbAnnotation").value;
    if(annotation.length > 2)
    {
        document.getElementById("annotation").innerHTML = annotation;
        document.getElementById("stops").innerHTML = "";
        document.getElementById("annotation2").innerHTML = annotation;
        document.getElementById("stops2").innerHTML = "";
    }
    else
    {
        document.getElementById("annotation").innerHTML = "";
        document.getElementById("stops").innerHTML = stops;
        document.getElementById("annotation2").innerHTML = "";
        document.getElementById("stops2").innerHTML = stops;
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

    hour2.style.transform = `rotate(${hr_rotation}deg)`;
    minute2.style.transform = `rotate(${min_rotation}deg)`;
    second2.style.transform = `rotate(${sec_rotation}deg)`;

}, 1000);

function saveTimetable(){
    html2canvas(document.querySelector("#timetable")).then(canvas => {
        document.body.appendChild(canvas)
    });
    html2canvas(document.querySelector("#timetable2")).then(canvas => {
        document.body.appendChild(canvas)
    });
}