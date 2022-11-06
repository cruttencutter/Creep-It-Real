function loading () {
    document.getElementById('getStarted').style.visibility = 'hidden';
    document.getElementById('header').style.visibility = 'hidden';
    document.getElementById('loader').style.visibility = 'visible';
    document.body.style.backgroundColor = '#96A0A8';

    document.getElementById('pumpkin').src = 'CREEP-2.png';

    setTimeout(switchSites, 1500);
}

function switchSites () {
    window.location.href = 'mainWebsite.html';
}

// Creating variables to tell which buttons have been clicked
var childClicked = false;
var adultClicked = false;
var groupClicked = false;
var singleClicked = false;
var spicyClicked = false;
var cuteClicked = false;
var funnyClicked = false;
var scaryClicked = false;
var animalClicked = false;
var professionClicked = false;
var mediaClicked = false;
var mythicalClicked = false;

// function toggleCandy(){
//     const cButton = document.querySelector('.Buttons');
//     cButton.classList.add('candyButton');

// }
// Function for if child button is pressed
function chooseChild() {
    // show group or single options
    document.getElementById('gbtn').style.visibility = "visible";
    document.getElementById('sbtn').style.visibility = "visible";

    // set colors for child and adult buttons
    const btn1 = document.getElementById('cbtn');
    
   // btn1.style.backgroundColor = 'green';
   // btn1.style.color = 'white';
    btn1.style.color = "black";
    btn1.className = 'candyButton';
    btn1.disabled = true;

    const btn2 = document.getElementById('abtn');
    
    btn2.style.color = 'black';
    btn2.style.opacity = 0.5;
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
    
    btn1.style.color = 'black';
    btn1.style.opacity = 0.5;
    btn1.disabled = true; // make other choice disabled

    const btn2 = document.getElementById('abtn');
    
    btn2.style.color = "black";
    btn2.className = 'candyButton';
    btn2.disabled = true;

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
    if (adultClicked) {
        // show spicy, cute, funny, scary options
        document.getElementById('spicy').style.visibility = "visible";
        document.getElementById('cute').style.visibility = "visible";
        document.getElementById('funny').style.visibility = "visible";
        document.getElementById('scary').style.visibility = "visible";
    } else {
        // show animal, profession, media, and mythical options
        document.getElementById('animal').style.visibility = "visible";
        document.getElementById('profession').style.visibility = "visible";
        document.getElementById('media').style.visibility = "visible";
        document.getElementById('mythical').style.visibility = "visible";
    }

    // set colors for group and single buttons
    const btn1 = document.getElementById('gbtn');

    btn1.style.color = "black";
    btn1.className = 'candyButton';
    btn1.disabled = true;

    const btn2 = document.getElementById('sbtn');
    
    btn2.style.color = 'black';
    btn2.style.opacity = 0.5;
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
    if (adultClicked) {
        // show spicy, cute, funny, scary options
        document.getElementById('spicy').style.visibility = "visible";
        document.getElementById('cute').style.visibility = "visible";
        document.getElementById('funny').style.visibility = "visible";
        document.getElementById('scary').style.visibility = "visible";
    } else {
        // show animal, profession, media, and mythical options
        document.getElementById('animal').style.visibility = "visible";
        document.getElementById('profession').style.visibility = "visible";
        document.getElementById('media').style.visibility = "visible";
        document.getElementById('mythical').style.visibility = "visible";
    }

    // set colors for group and single buttons
    const btn1 = document.getElementById('gbtn');
    
    btn1.style.color = 'black';
    btn1.style.opacity = 0.5;
    btn1.disabled = true; // make other choice disabled

    const btn2 = document.getElementById('sbtn');
    
    btn2.style.color = "black";
    btn2.className = 'candyButton';
    btn2.disabled = true;

    // update loading avatar
    let mysrc = "twoFourths.png";
    const img = document.getElementById("avatar");

    if(img.src != mysrc){
        img.src = mysrc;
    }

    // update that single button has been clicked
    singleClicked = true;
}

// Function for if adult chooses spicy
function chooseSpicy() {
    // show animal, profession, media, and mythical options
    document.getElementById('animal').style.visibility = "visible";
    document.getElementById('profession').style.visibility = "visible";
    document.getElementById('media').style.visibility = "visible";
    document.getElementById('mythical').style.visibility = "visible";

    const btn1 = document.getElementById('spicy');

    btn1.style.color = "black";
    btn1.className = 'candyButton';
    btn1.disabled = true;

    const btn2 = document.getElementById('cute');

    btn2.style.color = 'black';
    btn2.style.opacity = 0.5;
    btn2.disabled = true; // make other choice disabled

    const btn3 = document.getElementById('funny');

    btn3.style.color = 'black';
    btn3.style.opacity = 0.5;
    btn3.disabled = true; // make other choice disabled

    const btn4 = document.getElementById('scary');

    btn4.style.color = 'black';
    btn4.style.opacity = 0.5;
    btn4.disabled = true; // make other choice disabled

    // update loading avatar
    let mysrc = "threeFourths.png";
    const img = document.getElementById("avatar");

    if(img.src != mysrc){
        img.src = mysrc;
    }

    // update that spicy button has been clicked
    spicyClicked = true;
}

// Function for if adult chooses cute
function chooseCute() {
    // show animal, profession, media, and mythical options
    document.getElementById('animal').style.visibility = "visible";
    document.getElementById('profession').style.visibility = "visible";
    document.getElementById('media').style.visibility = "visible";
    document.getElementById('mythical').style.visibility = "visible";

    const btn1 = document.getElementById('spicy');

    btn1.style.color = 'black';
    btn1.style.opacity = 0.5;
    btn1.disabled = true; // make other choice disabled

    const btn2 = document.getElementById('cute');

    btn2.style.color = "black";
    btn2.className = 'candyButton';
    btn2.disabled = true;

    const btn3 = document.getElementById('funny');

    btn3.style.color = 'black';
    btn3.style.opacity = 0.5;
    btn3.disabled = true; // make other choice disabled

    const btn4 = document.getElementById('scary');

    btn4.style.color = 'black';
    btn4.style.opacity = 0.5;
    btn4.disabled = true; // make other choice disabled

    // update loading avatar
    let mysrc = "threeFourths.png";
    const img = document.getElementById("avatar");

    if(img.src != mysrc){
        img.src = mysrc;
    }

    // update that cute button has been clicked
    cuteClicked = true;
}

// Function for if adult chooses funny
function chooseFunny() {
    // show animal, profession, media, and mythical options
    document.getElementById('animal').style.visibility = "visible";
    document.getElementById('profession').style.visibility = "visible";
    document.getElementById('media').style.visibility = "visible";
    document.getElementById('mythical').style.visibility = "visible";

    const btn1 = document.getElementById('spicy');

    btn1.style.color = 'black';
    btn1.style.opacity = 0.5;
    btn1.disabled = true; // make other choice disabled

    const btn2 = document.getElementById('cute');

    btn2.style.color = 'black';
    btn2.style.opacity = 0.5;
    btn2.disabled = true; // make other choice disabled

    const btn3 = document.getElementById('funny');

    btn3.style.color = "black";
    btn3.className = 'candyButton';
    btn3.disabled = true;

    const btn4 = document.getElementById('scary');

    btn4.style.color = 'black';
    btn4.style.opacity = 0.5;
    btn4.disabled = true; // make other choice disabled

    // update loading avatar
    let mysrc = "threeFourths.png";
    const img = document.getElementById("avatar");

    if(img.src != mysrc){
        img.src = mysrc;
    }

    // update that funny button has been clicked
    funnyClicked = true;
}

// Function for if adult chooses scary
function chooseScary() {
    // show animal, profession, media, and mythical options
    document.getElementById('animal').style.visibility = "visible";
    document.getElementById('profession').style.visibility = "visible";
    document.getElementById('media').style.visibility = "visible";
    document.getElementById('mythical').style.visibility = "visible";

    const btn1 = document.getElementById('spicy');

    btn1.style.color = 'black';
    btn1.style.opacity = 0.5;
    btn1.disabled = true; // make other choice disabled

    const btn2 = document.getElementById('cute');

    btn2.style.color = 'black';
    btn2.style.opacity = 0.5;
    btn2.disabled = true; // make other choice disabled

    const btn3 = document.getElementById('funny');

    btn3.style.color = 'black';
    btn3.style.opacity = 0.5;
    btn3.disabled = true; // make other choice disabled

    const btn4 = document.getElementById('scary');

    btn4.style.color = "black";
    btn4.className = 'candyButton';
    btn4.disabled = true;

    // update loading avatar
    let mysrc = "threeFourths.png";
    const img = document.getElementById("avatar");

    if(img.src != mysrc){
        img.src = mysrc;
    }

    // update that scary button has been clicked
    scaryClicked = true;
}

// Function for if animal button is pressed
function chooseAnimal() {
    //document.getElementById('haircolor').style.visibility = "hidden";

    // set colors for profession, animal, media, and mythical buttons
    const btn1 = document.getElementById('profession');
    
    btn1.style.color = 'black';
    btn1.style.opacity = 0.5;
    btn1.disabled = true; // make other choice disabled

    const btn2 = document.getElementById('animal');
    
    btn2.style.color = "black";
    btn2.className = 'candyButton';
    btn2.disabled = true;

    const btn3 = document.getElementById('media');
    
    btn3.style.color = 'black';
    btn3.style.opacity = 0.5;
    btn3.disabled = true; // make other choice disabled

    const btn4 = document.getElementById('mythical');
    
    btn4.style.color = 'black';
    btn4.style.opacity = 0.5;
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
    
    btn1.style.color = "black";
    btn1.className = 'candyButton';
    btn1.disabled = true;

    const btn2 = document.getElementById('animal');
    
    btn2.style.color = 'black';
    btn2.style.opacity = 0.5;
    btn2.disabled = true; // make other choice disabled

    const btn3 = document.getElementById('media');
    
    btn3.style.color = 'black';
    btn3.style.opacity = 0.5;
    btn3.disabled = true; // make other choice disabled

    const btn4 = document.getElementById('mythical');
    
    btn4.style.color = 'black';
    btn4.style.opacity = 0.5;
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
    
    btn1.style.color = 'black';
    btn1.style.opacity = 0.5;
    btn1.disabled = true; // make other choice disabled

    const btn2 = document.getElementById('animal');
    
    btn2.style.color = 'black';
    btn2.style.opacity = 0.5;
    btn2.disabled = true; // make other choice disabled

    const btn3 = document.getElementById('media');
    
    btn3.style.color = "black";
    btn3.className = 'candyButton';
    btn3.disabled = true;

    const btn4 = document.getElementById('mythical');
    
    btn4.style.color = 'black';
    btn4.style.opacity = 0.5;
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
    
    btn1.style.color = 'black';
    btn1.style.opacity = 0.5;
    btn1.disabled = true; // make other choice disabled

    const btn2 = document.getElementById('animal');
    
    btn2.style.color = 'black';
    btn2.style.opacity = 0.5;
    btn2.disabled = true; // make other choice disabled

    const btn3 = document.getElementById('media');
    
    btn3.style.color = 'black';
    btn3.style.opacity = 0.5;
    btn3.disabled = true; // make other choice disabled

    const btn4 = document.getElementById('mythical');
    
    btn4.style.color = "black";
    btn4.className = 'candyButton';
    btn4.disabled = true;

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

function answer() {

    // Update images on answer.html based on which buttons have been clicked
const img1 = document.getElementById("avatar");
img1.className = 'imageOutput';
const img2 = document.getElementById("secondImage");
img2.className = 'imageOutput';

if (childClicked) {
    if (singleClicked) {
        if (animalClicked) {
            document.getElementById("result").innerHTML = "Try a: cat";
            img1.src = "children/black cat boy.jpg"; // cat boy
            img2.src = "children/black-cat-costume-girls.webp"; // cat girl
        } else if (professionClicked) {
            document.getElementById("result").innerHTML = "Try a: cowboy/cowgirl";
            img1.src = "children/cowboy.webp"; // cowboy
            img2.src = "children/cowgirl.jpg"; // cowgirl
        } else if (mediaClicked) {
            document.getElementById("result").innerHTML = "Try a: minion";
            img1.src = "children/minion boy.webp"; // minion boy
            img2.src = "children/minion girl.jpg"; // minion girl
        } else if (mythicalClicked) {
            document.getElementById("result").innerHTML = "Try a: unicorn";
            img1.src = "children/unicorn boys.webp"; // unicorn boy
            img2.src = "children/girls unicorn.jpg"; // unicorn girl
        }
    } else if (groupClicked){
        if (animalClicked) {
            document.getElementById("result").innerHTML = "Try: dinosaurs";
            img1.src = "children/dinosaur.jpg"; // dinosaur
            img2.style.visibility = 'hidden';
        } else if (professionClicked) {
            document.getElementById("result").innerHTML = "Try: boxers";
            img1.src = "children/boxer boy.webp"; // boxer girl
            img2.src = "children/boxer girl.png"; // boxer boy
        } else if (mediaClicked) {
            document.getElementById("result").innerHTML = "Try: minions";
            img1.src = "children/minion boy.webp"; // minion
            img2.src = "children/minion girl.jpg"; // minion
        } else if (mythicalClicked) {
            document.getElementById("result").innerHTML = "Try: greek gods/goddesses";
            img1.src = "children/greek gods group.jpg"; // greek god
            img2.style.visibility = 'hidden';
        }
    }
} else if (adultClicked) {
    if (singleClicked) {
        if (spicyClicked) {
            if (animalClicked) {
                document.getElementById("result").innerHTML = "Try a: bunny";
                img1.src = "adult/malebunny.jpg"; // bunny
                img2.src = "adult/girlbunny.jpg";
            } else if (professionClicked) {
                document.getElementById("result").innerHTML = "Try a: cowboy/cowgirl";
                img1.src = "adult/cowboy.jpg"; // cowboy
                img2.src = "adult/cowgirl.jpg"; // cowgirl
            } else if (mediaClicked) {
                document.getElementById("result").innerHTML = "Try: Cher from Clueless";
                img1.src = "adult/malecher.jpg"; // cher from clueless
                img2.src = "adult/girlcher.jpg"; 
            } else if (mythicalClicked) {
                document.getElementById("result").innerHTML = "Try a: fairy/pirate";
                img1.src = "adult/fairy.jpg"; // fairy
                img2.src = "adult/pirate.jpg"; // pirate
            }
        } else if (cuteClicked) {
            if (animalClicked) {
                document.getElementById("result").innerHTML = "Try a: cat";
                img1.src = "adult/cat.jpg"; // cat
                img2.style.visibility = 'hidden';
            } else if (professionClicked) {
                document.getElementById("result").innerHTML = "Try a: nurse";
                img1.src = "adult/nursemale.jpeg"; // nurse
                img2.src = "adult/womannurse.jpeg";
            } else if (mediaClicked) {
                document.getElementById("result").innerHTML = "Try: Audrey Hepburn in Breakfast at Tiffany's";
                img1.src = "adult/tiffanys.jpg"; // tiffany
                img2.style.visibility = 'hidden';
            } else if (mythicalClicked) {
                document.getElementById("result").innerHTML = "Try a: unicorn";
                img1.src = "adult/unicorn.jpg"; // unicorn
                img2.style.visibility = 'hidden';
            }
        } else if (funnyClicked) {
            if (animalClicked) {
                document.getElementById("result").innerHTML = "Try a: chicken";
                img1.src = "adult/chicken.jpeg"; // chicken
                img2.style.visibility = 'hidden';
            } else if (professionClicked) {
                document.getElementById("result").innerHTML = "Try a: chick magnet";
                img1.src = "adult/chickmagnet.jpg"; // chick magnet
                img2.style.visibility = 'hidden';
            } else if (mediaClicked) {
                document.getElementById("result").innerHTML = "Try a: bag of Cheetos";
                img1.src = "adult/cheetos.jpg"; // Cheetos
                img2.style.visibility = 'hidden';
            } else if (mythicalClicked) {
                document.getElementById("result").innerHTML = "Try: Big Foot";
                img1.src = "adult/bigfoot.jpg"; // big foot costume
                img2.style.visibility = 'hidden';
            }
        } else if (scaryClicked) {
            if (animalClicked) {
                document.getElementById("result").innerHTML = "Try a: werewolf";
                img1.src = "adult/werewolf.jpg"; // werewolf
                img2.style.visibility = 'hidden';
            } else if (professionClicked) {
                document.getElementById("result").innerHTML = "Try a: clown";
                img1.src = "adult/maleclown.jpg"; // clown
                img2.src = "adult/clowngirl.jpg";
            } else if (mediaClicked) {
                document.getElementById("result").innerHTML = "Try: Pennywise";
                img1.src = "adult/maleIT.jpg"; // pennywise
                img2.src = "adult/girlIT.jpg";
            } else if (mythicalClicked) {
                document.getElementById("result").innerHTML = "Try: Edward Scissorhands";
                img1.src = "adult/edwardscissor.jpg"; // edward scissor hands
                img2.src = "adult/edwardscissorgirl.jpg";
            }
        }
    } else if (groupClicked){
        if (spicyClicked) {
            if (animalClicked) {
                document.getElementById("result").innerHTML = "Try: safari group";
                img1.src = "adult/malesafari.jpg"; // safari
                img2.src = "adult/girlsafari.jpg";
            } else if (professionClicked) {
                document.getElementById("result").innerHTML = "Try: priests/priestesses";
                img1.src = "adult/priest.jpg"; // priest
                img2.src = "adult/priestess.jpg";
            } else if (mediaClicked) {
                document.getElementById("result").innerHTML = "Try: Scooby Doo gang";
                img1.src = "adult/scoobydoo1.jpg"; // scooby doo
                img2.src = "adult/scoobydoo2.jpg";
            } else if (mythicalClicked) {
                document.getElementById("result").innerHTML = "Try: vampires";
                img1.src = "adult/vampire man.jpeg"; // vampires
                img2.src = "adult/vampire woman.jpg";
            }
        } else if (cuteClicked) {
            if (animalClicked) {
                document.getElementById("result").innerHTML = "Try: pokemons";
                img1.src = "adult/pokemongroup.jpeg"; // pokemon
                img2.style.visibility = 'hidden';
            } else if (professionClicked) {
                document.getElementById("result").innerHTML = "Try: doctors";
                img1.src = "adult/doctorgroup.jpg"; // doctor
                img2.style.visibility = 'hidden';
            } else if (mediaClicked) {
                document.getElementById("result").innerHTML = "Try: money heist";
                img1.src = "adult/moneyheistgroup.jpeg"; // money heist
                img2.style.visibility = 'hidden';
            } else if (mythicalClicked) {
                document.getElementById("result").innerHTML = "Try: superheroes";
                img1.src = "adult/superhereosgroup.jpeg"; // superheroes
                img2.style.visibility = 'hidden';
            }
        } else if (funnyClicked) {
            if (animalClicked) {
                document.getElementById("result").innerHTML = "Try: madagascar";
                img1.src = "adult/madagascargroup.jpg"; // madagascar
                img2.style.visibility = 'hidden';
            } else if (professionClicked) {
                document.getElementById("result").innerHTML = "Try: plumber's crack";
                img1.src = "adult/plumberscrack.jpg"; // plumber's crack
                img2.style.visibility = 'hidden';
            } else if (mediaClicked) {
                document.getElementById("result").innerHTML = "Try: gnomes";
                img1.src = "adult/gnomes.jpg"; // gnomes
                img2.style.visibility = 'hidden';
            } else if (mythicalClicked) {
                document.getElementById("result").innerHTML = "Try: The Simpsons";
                img1.src = "adult/simpsons.jpg"; // simpsons costume
                img2.style.visibility = 'hidden';
            }
        } else if (scaryClicked) {
            if (animalClicked) {
                document.getElementById("result").innerHTML = "Try: werewolves";
                img1.src = "adult/werewolves.jpg"; // werewolves
                img2.style.visibility = 'hidden';
            } else if (professionClicked) {
                document.getElementById("result").innerHTML = "Try: Horror Movie Killers";
                img1.src = "adult/killers.jpg"; // serial killers
                img2.style.visibility = 'hidden';
            } else if (mediaClicked) {
                document.getElementById("result").innerHTML = "Try: Silent Hill";
                img1.src = "adult/silent_hill.jpg"; // silent hill
                img2.style.visibility = 'hidden';
            } else if (mythicalClicked) {
                document.getElementById("result").innerHTML = "Try: zombies";
                img1.src = "adult/zombiegroup.png"; // zombies
                img2.style.visibility = 'hidden';
            }
        }
    }
}
document.getElementById('generate').style.visibility = 'hidden';
document.getElementById('return').style.visibility = 'visible';
}