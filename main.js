let cookies = 0;
let CookiePerSec = 0;
let cookiePerClick = 1;
let costOfgrans = 100;
let costOfClicker = 100;
let grans = 0;
let clickers = 0;
let granMult = 0.1;
let farmMult = 1;
let costOfFarm = 2000;
let farms = 0;
let CookieClickMult = 0;
let totalMult = 1;
let factory = 0;
let factoryMult = 10;
let costOfFactory = 35000;
let space = 0;
let spaceMult = 100;
let costOfSpace = 400000;
let portal = 0;
let portalMult = 1000;
let costOfPortal = 5000000

document.getElementById("cookienum").innerHTML = (Math.round(cookies));
function cookieclick() {
    cookies += (CookieClickMult * CookiePerSec) + cookiePerClick;
    document.getElementById("cookienum").innerHTML = (Math.round(cookies));

    
}
document.getElementById("clickercost").innerHTML = costOfClicker;
document.getElementById("clickercount").innerHTML = cookiePerClick;

document.getElementById("grancount").innerHTML = grans;
document.getElementById("grancost").innerHTML = costOfgrans;

document.getElementById("farmcount").innerHTML = farms;
document.getElementById("farmcost").innerHTML = costOfFarm;

document.getElementById("factorycount").innerHTML = factory;
document.getElementById("factorycost").innerHTML = costOfFactory;

document.getElementById("spacecount").innerHTML = space;
document.getElementById("spacecost").innerHTML = costOfSpace;

document.getElementById("portalcount").innerHTML = portal;
document.getElementById("portalcost").innerHTML = costOfPortal;

function clickerclick() {
    if (cookies >= costOfClicker) {
        cookies -= costOfClicker;
        clickers += 1;
        cookiePerClick += (CookieClickMult * CookiePerSec) + cookiePerClick;
        costOfClicker += Math.round(costOfClicker * 5);
        document.getElementById("clickercost").innerHTML = costOfClicker;
        document.getElementById("clickercount").innerHTML = clickers;


    }
}

function granclick() {
    if (cookies >= costOfgrans) {
        cookies -= costOfgrans;
        grans += 1;
        if (grans === 10) {
            granMult *= 4;
            cookiePerClick += cookiePerClick;
            costOfgrans *= 2;
        }
        if (grans === 25) {
            totalMult *= 3;
            costOfgrans *= 2;
        }
        if (grans < 10) {
            costOfgrans += Math.round(costOfgrans / 10);
        }
        else {
            costOfgrans += Math.round(costOfgrans / 5);
        }
        
        document.getElementById("grancost").innerHTML = costOfgrans;
        document.getElementById("grancount").innerHTML = grans;
    }
}

function farmclick() {
    if (cookies >= costOfFarm) {
        cookies -= costOfFarm;
        farms += 1;
        if (farms === 10) {
            totalMult *= 2;
            farmMult *= 2;
            cookiePerClick += cookiePerClick
            costOfFarm *= 2;

        }
        if (farms < 10) {
            costOfFarm += Math.round(costOfFarm / 10);
        }
        else {
            costOfFarm += Math.round(costOfFarm / 5);
        }
        document.getElementById("farmcost").innerHTML = costOfFarm;
        document.getElementById("farmcount").innerHTML = farms;
    }
}
function factoryclick() {
    if (cookies >= costOfFactory) {
        cookies -= costOfFactory;
        factory += 1;
        if (factory === 10) {
            totalMult *= 2;
            CookieClickMult += .09;
            cookies += costOfFactory;
            costOfFactory *= 2;
        }
        if (factory < 10) {
            costOfFactory += Math.round(costOfFactory / 10);
        }
        else {
            costOfFactory += Math.round(costOfFactory / 5);
        }
        document.getElementById("factorycost").innerHTML = costOfFactory;
        document.getElementById("factorycount").innerHTML = factory;
    }
}

function spaceclick() {
    if (cookies >= costOfSpace) {
        cookies -= costOfSpace;
        space += 1;
        if (space === 10) {
            granMult *= 20;
            costOfSpace *= 2;
            
        }
        if (space < 10) {
            costOfSpace += Math.round(costOfSpace / 10);
        }
        else {
            costOfSpace += Math.round(costOfSpace / 5);
        }
        document.getElementById("spacecost").innerHTML = costOfSpace;
        document.getElementById("spacecount").innerHTML = space;
    }
}
function portalclick() {
    if (cookies >= costOfPortal) {
        cookies -= costOfPortal;
        portal += 1;
        if (portal === 10) {
            totalMult *= 100;
            cookiePerClick *= 100;
        }
        if (portal < 10) {
            costOfPortal += Math.round(costOfPortal / 10);
        }
        else {
            costOfPortal += Math.round(costOfPortal / 5);
        }
        
        document.getElementById("portalcost").innerHTML = costOfPortal;
        document.getElementById("portalcount").innerHTML = portal;
    }
}


function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
const loop = async() => {
    while(true) {

        CookiePerSec = totalMult*(grans * granMult + farms * farmMult + factory * factoryMult + space * spaceMult + portal * portalMult);
        cookies += CookiePerSec;
        document.getElementById("CPC").innerHTML = Math.round((CookieClickMult * CookiePerSec) + cookiePerClick);
        document.getElementById("CPS").innerHTML = Math.round(50 * CookiePerSec) / 10;
        document.getElementById("clickercount").innerHTML = clickers;
        document.getElementById("cookienum").innerHTML = (Math.round(cookies));
        await sleep(200);
        if (cookies >= costOfClicker) {
            document.getElementById("clickercost").style = "color: green;";
        }
        else{
            document.getElementById("clickercost").style = "color: red;";
        }
        if (cookies >= costOfgrans) {
            document.getElementById("grancost").style = "color: green;";
        }
        else{
            document.getElementById("grancost").style = "color: red;";
        }
        if (cookies >= costOfFarm) {
            document.getElementById("farmcost").style = "color: green;";
        }
        else{
            document.getElementById("farmcost").style = "color: red;";
        }
        if (cookies >= costOfFactory) {
            document.getElementById("factorycost").style = "color: green;";
        }
        else{
            document.getElementById("factorycost").style = "color: red;";
        }
        if (cookies >= costOfSpace) {
            document.getElementById("spacecost").style = "color: green;";
        }
        else{
            document.getElementById("spacecost").style = "color: red;";
        }
        if (cookies >= costOfPortal) {
            document.getElementById("portalcost").style = "color: green;";
        }
        else{
            document.getElementById("portalcost").style = "color: red;";
        }
    }

}
loop();