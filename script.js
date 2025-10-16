let userscore=0;
let computerscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user");
const compscorepara=document.querySelector("#computer");


const gencomchoice=()=>{
    const options=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}

const showwinner=(userwin,userchoice,compchoice)=>{
    if (userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`you win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        computerscore++;
        compscorepara.innerText=computerscore;
        msg.innerText=`you lost! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";

    } 
}
const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
    let compchoice=gencomchoice();
    console.log("computer choice =",compchoice);
    if (userchoice===compchoice){
        msg.innerText="it's Draw play again";
        msg.style.backgroundColor="black";


    }else{
        let userwin=true;
        if (userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
    showwinner(userwin ,userchoice,compchoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        let userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});