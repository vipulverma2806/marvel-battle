const buttons = document.querySelectorAll('button');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const button4 = document.querySelector('#button4');
const heroName = document.querySelector('#heroName');
const text = document.querySelector('#text');
const villainName = document.querySelector('#villainName');
const heroHealth = document.querySelector('#heroHealth');
const villainHealth = document.querySelector('#villainHealth');
let hHealth = 100;
let vHealth = 100;
let min = 0;
let max = 100;
let count = 0;
button4.style.display = "none";


const allContent = [
    {
        name : "Home",
        "button text": ["Select your Hero", "Go to War","Rules"],
        functions : [selectHero, selectVillain, rules],
        textBox: "Let's play"

    },
    {
        name: "Heroes",
        "button text": ["IronMan", "Thor", "Dr.Strange"],
        functions:[ironMan, thor, drStrange,back],
        textBox: "Choose your Hero here."
    },
    {
        name: "Villains",
        "button text": ["Thanos", "Kang", "Ultron"],
        functions:[thanos, kang, ultron],
        textBox: "Choose your Villain here."
    },
    {
        name: "atWar",
        "button text": ["Attack", "Accept Defeat", "Run"],
        functions:[attack, accept, run],
        textBox:"Now Attack. Don't Accept defeat."
    }
];

button1.onclick = allContent[0].functions[0];
button3.onclick = allContent[0].functions[2];

function selectHero(){
    update(allContent[1]);    
}
function selectVillain(){
    update(allContent[2]);   
}
function goToWar(){
    update(allContent[3]);
    text.innerText = "Now Attack. Don't Accept defeat";      
}

function update(content){
    button1.innerText= content["button text"][0];
    button2.innerText= content["button text"][1];
    button3.innerText= content["button text"][2];
    text.style.textAlign = 'center';
    button1.onclick = content.functions[0];
    if(allContent[0]===content)
        {
            if(hHealth == heroHealth.innerText){
            button2.onclick = content.functions[1];

            }else if('NA' === heroHealth.innerText){
                
                function textBox(){
                    text.innerText = "Choose your hero first";
                }
                button2.onclick= textBox;
            }
        }else{
            button2.onclick = content.functions[1];   
        }
        
    button3.onclick = content.functions[2];
    text.innerText = content.textBox;

    if(allContent[1]===content){
    button4.onclick = content.functions[3];
    button4.style.display = "inline";
     }
    }

function ironMan(){
    heroName.innerText = "Ironman";
    heroHealth.innerText = hHealth ;
    text.innerText = "You selected IronMan.";    
}
function thor(){
    heroName.innerText = "Thor";
    heroHealth.innerText = hHealth ;
    text.innerText = "You selected Thor.";   
}
function drStrange(){
    heroName.innerText = "Dr. Strange";
    heroHealth.innerText = hHealth ;    
    text.innerText = "You selected Dr. Strange.";
}

function thanos(){
    villainName.innerText = "Thanos";
    villainHealth.innerText = vHealth ;
    goToWar();   
}
function kang(){
    villainName.innerText = "Kang";
    villainHealth.innerText = vHealth ;
    goToWar();   
}
function ultron(){
    villainName.innerText = "Ultron";
    villainHealth.innerText = vHealth ;
    goToWar();   
}

function back(){
    button4.style.display = "none";
    update(allContent[0]);
}

function attack(){
    let vMinus = Math.floor(Math.random()*30);
    let hMinus = Math.floor(Math.random()*25);
    
    count += 1;
    vHealth -= vMinus;
    hHealth -= hMinus;

    vHealth = healthRange(vHealth, min, max);
    hHealth = healthRange(hHealth, min, max);

    villainHealth.innerText = vHealth ;
    heroHealth.innerText = hHealth ;
    if(hHealth>0){
        if(vHealth <= 0){
            villainHealth.innerText = 0;
            text.innerText = "You won. Attempts to Kill: "+ count;
            button1.onclick= won;
            function won(){
                button1.innerText = "You Won";
                button1.disabled = true;
                button2.disabled = true;
            }
        }
    }else{
        button1.onclick = lose;
        heroHealth.innerText = 0 ;  
    }
}
function accept(){
    text.innerText = "Stan Lee is Ashamed of you. You are kicked out of the Team Avengers."
    lose();
}
function run(){
    location.reload(true);
}
function rules(){
text.innerText = "Rules:\n 1.You need to select your Hero first.\n 2. Then select Villain. \n 3. You'll be redirected to the war zone. \n 4. Use Attack button to decrease Villain's Health. It will also decreases Hero's health. \n  5. Whoever Health reaches zero first will lose.";
text.style.textAlign = 'left';
}
function lose(){
    button1.innerText= "You lose";
    button1.disabled = true;
    button2.disabled = true; 
    text.innerText = "You lose. Total attempts: "+ count;
}

function healthRange(heroHealth, min, max) {
    return Math.min(Math.max(heroHealth, min), max);
}

function healthRange(villainHealth, min, max) {
    return Math.min(Math.max(villainHealth, min), max);
}

