function chooseChild() {
    document.getElementById('gbtn').style.visibility = "visible";
    document.getElementById('sbtn').style.visibility = "visible";

    const btn1 = document.getElementById('cbtn');
    
    btn1.style.backgroundColor = 'green';
    btn1.style.color = 'white';

    const btn2 = document.getElementById('abtn');
    
    btn2.style.backgroundColor = 'white';
    btn2.style.color = 'black';
    btn2.disabled = true;

    let mysrc = "oneFourth.png";
    const img = document.getElementById("avatar");

    if(img.src != mysrc){
        img.src = mysrc;
    }
}

function chooseAdult() {
    document.getElementById('gbtn').style.visibility = "visible";
    document.getElementById('sbtn').style.visibility = "visible";

    const btn1 = document.getElementById('cbtn');
    
    btn1.style.backgroundColor = 'white';
    btn1.style.color = 'black';
    btn1.disabled = true;

    const btn2 = document.getElementById('abtn');
    
    btn2.style.backgroundColor = 'green';
    btn2.style.color = 'white';

    let mysrc = "oneFourth.png";
    const img = document.getElementById("avatar");

    if(img.src != mysrc){
        img.src = mysrc;
    }
}

function chooseGroup() {
    document.getElementById('animal').style.visibility = "visible";
    document.getElementById('profession').style.visibility = "visible";
    document.getElementById('media').style.visibility = "visible";
    document.getElementById('mythical').style.visibility = "visible";

    const btn1 = document.getElementById('gbtn');
    
    btn1.style.backgroundColor = 'green';
    btn1.style.color = 'white';

    const btn2 = document.getElementById('sbtn');
    
    btn2.style.backgroundColor = 'white';
    btn2.style.color = 'black';
    btn2.disabled = true;

    let mysrc = "twoFourths.png";
    const img = document.getElementById("avatar");

    if(img.src != mysrc){
        img.src = mysrc;
    }
}

function chooseSingle() {
    document.getElementById('animal').style.visibility = "visible";
    document.getElementById('profession').style.visibility = "visible";
    document.getElementById('media').style.visibility = "visible";
    document.getElementById('mythical').style.visibility = "visible";

    const btn1 = document.getElementById('gbtn');
    
    btn1.style.backgroundColor = 'white';
    btn1.style.color = 'black';
    btn1.disabled = true;

    const btn2 = document.getElementById('sbtn');
    
    btn2.style.backgroundColor = 'green';
    btn2.style.color = 'white';

    let mysrc = "twoFourths.png";
    const img = document.getElementById("avatar");

    if(img.src != mysrc){
        img.src = mysrc;
    }
}

function chooseAnimal() {
    //document.getElementById('haircolor').style.visibility = "hidden";

    const btn1 = document.getElementById('profession');
    
    btn1.style.backgroundColor = 'white';
    btn1.style.color = 'black';
    btn1.disabled = true;

    const btn2 = document.getElementById('animal');
    
    btn2.style.backgroundColor = 'green';
    btn2.style.color = 'white';

    const btn3 = document.getElementById('media');
    
    btn3.style.backgroundColor = 'white';
    btn3.style.color = 'black';
    btn3.disabled = true;

    const btn4 = document.getElementById('mythical');
    
    btn4.style.backgroundColor = 'white';
    btn4.style.color = 'black';
    btn4.disabled = true;

    let mysrc = "full.png";
    const img = document.getElementById("avatar");

    if(img.src != mysrc){
        img.src = mysrc;
    }
    document.getElementById('generate').style.visibility = "visible";
}

function chooseProfession() {
    //document.getElementById('haircolor').style.visibility = "hidden";

    const btn1 = document.getElementById('profession');
    
    btn1.style.backgroundColor = 'green';
    btn1.style.color = 'white';

    const btn2 = document.getElementById('animal');
    
    btn2.style.backgroundColor = 'white';
    btn2.style.color = 'black';
    btn2.disabled = true;

    const btn3 = document.getElementById('media');
    
    btn3.style.backgroundColor = 'white';
    btn3.style.color = 'black';
    btn3.disabled = true;

    const btn4 = document.getElementById('mythical');
    
    btn4.style.backgroundColor = 'white';
    btn4.style.color = 'black';
    btn4.disabled = true;

    let mysrc = "full.png";
    const img = document.getElementById("avatar");

    if(img.src != mysrc){
        img.src = mysrc;
    }

    document.getElementById('generate').style.visibility = "visible";
}

function chooseMedia() {
    //document.getElementById('haircolor').style.visibility = "visible";

    const btn1 = document.getElementById('profession');
    
    btn1.style.backgroundColor = 'white';
    btn1.style.color = 'black';
    btn1.disabled = true;

    const btn2 = document.getElementById('animal');
    
    btn2.style.backgroundColor = 'white';
    btn2.style.color = 'black';
    btn2.disabled = true;

    const btn3 = document.getElementById('media');
    
    btn3.style.backgroundColor = 'green';
    btn3.style.color = 'white';

    const btn4 = document.getElementById('mythical');
    
    btn4.style.backgroundColor = 'white';
    btn4.style.color = 'black';
    btn4.disabled = true;

    let mysrc = "full.png";
    const img = document.getElementById("avatar");

    if(img.src != mysrc){
        img.src = mysrc;
    }

    document.getElementById('generate').style.visibility = "visible";
}

function chooseMythical() {
    // document.getElementById('haircolor').style.visibility = "hidden";

    const btn1 = document.getElementById('profession');
    
    btn1.style.backgroundColor = 'white';
    btn1.style.color = 'black';
    btn1.disabled = true;

    const btn2 = document.getElementById('animal');
    
    btn2.style.backgroundColor = 'white';
    btn2.style.color = 'black';
    btn2.disabled = true;

    const btn3 = document.getElementById('media');
    
    btn3.style.backgroundColor = 'white';
    btn3.style.color = 'black';
    btn3.disabled = true;

    const btn4 = document.getElementById('mythical');
    
    btn4.style.backgroundColor = 'green';
    btn4.style.color = 'white';

    let mysrc = "full.png";
    const img = document.getElementById("avatar");

    if(img.src != mysrc){
        img.src = mysrc;
    }

    document.getElementById('generate').style.visibility = "visible";
}

