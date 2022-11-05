// Creating variables to tell which buttons have been clicked
var childClicked = false;
var adultClicked = false;
var groupClicked = false;
var singleClicked = false;
var animalClicked = false;
var professionClicked = false;
var mediaClicked = false;
var mythicalClicked = false;

// Function for if child button is pressed
function chooseChild() {
    // show group or single options
    document.getElementById('gbtn').style.visibility = "visible";
    document.getElementById('sbtn').style.visibility = "visible";

    // set colors for child and adult buttons
    const btn1 = document.getElementById('cbtn');
    
    btn1.style.backgroundColor = 'green';
    btn1.style.color = 'white';

    const btn2 = document.getElementById('abtn');
    
    btn2.style.backgroundColor = 'white';
    btn2.style.color = 'black';
    btn2.disabled = true; // make other choice disabled

    // update loading avatar
    let mysrc = "oneFourth.png";
    const img = document.getElementById("avatar");

    if(img.src != mysrc){
        img.src = mysrc;
    }

    // update that child button has been clicked
    childClicked = true;
}

// Function for if adult button is pressed
function chooseAdult() {
    // show group or single options
    document.getElementById('gbtn').style.visibility = "visible";
    document.getElementById('sbtn').style.visibility = "visible";

    // set colors for child and adult buttons
    const btn1 = document.getElementById('cbtn');
    
    btn1.style.backgroundColor = 'white';
    btn1.style.color = 'black';
    btn1.disabled = true; // make other choice disabled

    const btn2 = document.getElementById('abtn');
    
    btn2.style.backgroundColor = 'green';
    btn2.style.color = 'white';

    // update loading avatar
    let mysrc = "oneFourth.png";
    const img = document.getElementById("avatar");

    if(img.src != mysrc){
        img.src = mysrc;
    }

    // update that adult button has been clicked
    adultClicked = true;
}

// Function for if group button is pressed
function chooseGroup() {
    // show animal, profession, media, and mythical options
    document.getElementById('animal').style.visibility = "visible";
    document.getElementById('profession').style.visibility = "visible";
    document.getElementById('media').style.visibility = "visible";
    document.getElementById('mythical').style.visibility = "visible";

    // set colors for group and single buttons
    const btn1 = document.getElementById('gbtn');
    
    btn1.style.backgroundColor = 'green';
    btn1.style.color = 'white';

    const btn2 = document.getElementById('sbtn');
    
    btn2.style.backgroundColor = 'white';
    btn2.style.color = 'black';
    btn2.disabled = true; // make other choice disabled

    // update loading avatar
    let mysrc = "twoFourths.png";
    const img = document.getElementById("avatar");

    if(img.src != mysrc){
        img.src = mysrc;
    }

    // update that group button has been clicked
    groupClicked = true;
}

// Function for if single button is pressed
function chooseSingle() {
    // show animal, profession, media, and mythical options
    document.getElementById('animal').style.visibility = "visible";
    document.getElementById('profession').style.visibility = "visible";
    document.getElementById('media').style.visibility = "visible";
    document.getElementById('mythical').style.visibility = "visible";

    // set colors for group and single buttons
    const btn1 = document.getElementById('gbtn');
    
    btn1.style.backgroundColor = 'white';
    btn1.style.color = 'black';
    btn1.disabled = true; // make other choice disabled

    const btn2 = document.getElementById('sbtn');
    
    btn2.style.backgroundColor = 'green';
    btn2.style.color = 'white';

    // update loading avatar
    let mysrc = "twoFourths.png";
    const img = document.getElementById("avatar");

    if(img.src != mysrc){
        img.src = mysrc;
    }

    // update that single button has been clicked
    singleClicked = true;
}

// Function for if animal button is pressed
function chooseAnimal() {
    //document.getElementById('haircolor').style.visibility = "hidden";

    // set colors for profession, animal, media, and mythical buttons
    const btn1 = document.getElementById('profession');
    
    btn1.style.backgroundColor = 'white';
    btn1.style.color = 'black';
    btn1.disabled = true; // make other choice disabled

    const btn2 = document.getElementById('animal');
    
    btn2.style.backgroundColor = 'green';
    btn2.style.color = 'white';

    const btn3 = document.getElementById('media');
    
    btn3.style.backgroundColor = 'white';
    btn3.style.color = 'black';
    btn3.disabled = true; // make other choice disabled

    const btn4 = document.getElementById('mythical');
    
    btn4.style.backgroundColor = 'white';
    btn4.style.color = 'black';
    btn4.disabled = true; // make other choice disabled

    // update loading avatar
    let mysrc = "full.png";
    const img = document.getElementById("avatar");

    if(img.src != mysrc){
        img.src = mysrc;
    }

    // make generate answer button visible
    document.getElementById('generate').style.visibility = "visible";

    // update that animal button has been clicked
    animalClicked = true;
}

// Function for if professional button is pressed
function chooseProfession() {
    //document.getElementById('haircolor').style.visibility = "hidden";

    // set colors for profession, animal, media, and mythical buttons
    const btn1 = document.getElementById('profession');
    
    btn1.style.backgroundColor = 'green';
    btn1.style.color = 'white';

    const btn2 = document.getElementById('animal');
    
    btn2.style.backgroundColor = 'white';
    btn2.style.color = 'black';
    btn2.disabled = true; // make other choice disabled

    const btn3 = document.getElementById('media');
    
    btn3.style.backgroundColor = 'white';
    btn3.style.color = 'black';
    btn3.disabled = true; // make other choice disabled

    const btn4 = document.getElementById('mythical');
    
    btn4.style.backgroundColor = 'white';
    btn4.style.color = 'black';
    btn4.disabled = true; // make other choice disabled

    // update loading avatar
    let mysrc = "full.png";
    const img = document.getElementById("avatar");

    if(img.src != mysrc){
        img.src = mysrc;
    }

    // make generate answer button visible
    document.getElementById('generate').style.visibility = "visible";

    // update that profession button has been clicked
    professionClicked = true;
}

// Function for if media button is pressed
function chooseMedia() {
    //document.getElementById('haircolor').style.visibility = "visible";

    // set colors for profession, animal, media, and mythical buttons
    const btn1 = document.getElementById('profession');
    
    btn1.style.backgroundColor = 'white';
    btn1.style.color = 'black';
    btn1.disabled = true; // make other choice disabled

    const btn2 = document.getElementById('animal');
    
    btn2.style.backgroundColor = 'white';
    btn2.style.color = 'black';
    btn2.disabled = true; // make other choice disabled

    const btn3 = document.getElementById('media');
    
    btn3.style.backgroundColor = 'green';
    btn3.style.color = 'white';

    const btn4 = document.getElementById('mythical');
    
    btn4.style.backgroundColor = 'white';
    btn4.style.color = 'black';
    btn4.disabled = true; // make other choice disabled

    // update loading avatar
    let mysrc = "full.png";
    const img = document.getElementById("avatar");

    if(img.src != mysrc){
        img.src = mysrc;
    }

    // make generate answer button visible
    document.getElementById('generate').style.visibility = "visible";

    // update that media button has been clicked
    mediaClicked = true;
}

// Function for if mythical button is pressed
function chooseMythical() {
    // document.getElementById('haircolor').style.visibility = "hidden";

    // set colors for profession, animal, media, and mythical buttons
    const btn1 = document.getElementById('profession');
    
    btn1.style.backgroundColor = 'white';
    btn1.style.color = 'black';
    btn1.disabled = true; // make other choice disabled

    const btn2 = document.getElementById('animal');
    
    btn2.style.backgroundColor = 'white';
    btn2.style.color = 'black';
    btn2.disabled = true; // make other choice disabled

    const btn3 = document.getElementById('media');
    
    btn3.style.backgroundColor = 'white';
    btn3.style.color = 'black';
    btn3.disabled = true; // make other choice disabled

    const btn4 = document.getElementById('mythical');
    
    btn4.style.backgroundColor = 'green';
    btn4.style.color = 'white';

    // update loading avatar
    let mysrc = "full.png";
    const img = document.getElementById("avatar");

    if(img.src != mysrc){
        img.src = mysrc;
    }

    // make generate answer button visible
    document.getElementById('generate').style.visibility = "visible";

    // update that media button has been clicked
    mythicalClicked = true;
}