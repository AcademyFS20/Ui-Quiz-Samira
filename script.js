const inputName=document.getElementById('namea');
/*const inputBtnSub=document.getElementById('btn');*/
const inputNamee=document.getElementById('namev');
const form1 = document.querySelector('.formulaire');
const regex = /^[a-zA-Z]{6,20}$/;
const formulaire2 = document.querySelectorAll('[type="radio"]', checked)


form1.addEventListener('submit',e=>{

    e.preventDefault();

    if(regex.test(inputName.value.trim())){

      alert("yes")
    }
    else{

        alert('Enter a valid name')
    }

    /*window.scrollTo({top:0,behavior:"smooth"})*/


})

document.getElementByID("btnn").addEventListener("click", result);

function result() {
    let score=0;
    if (document.getElementsById('no').checked)
    {
        score++;
    }
    if (document.getElementsById('dom2').checked)
    {
        score++;
    }
    if (document.getElementsById('array').checked)
    {
        score++;
    }
    if (document.getElementsById('ob2').checked)
    {
        score++;
    }
    
}

function animaterToScore(score){
    let scoreHolder = document.getElementById("result");
    scoreHolder.classList.remove("d-none");
    score = parseInt(score);
    step = 0;
    setInterval(() => {
        if(step >= score){ return false;}
        step++;
        document.querySelector(".score").innerText = " "+step+"% ";
    }, 50);
}







