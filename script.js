const inputName=document.getElementById('namea');
/*const inputBtnSub=document.getElementById('btn');*/
const inputNamee=document.getElementById('namev');
const form1 = document.querySelector('.formulaire');
const regex = /^[a-zA-Z]{6,20}$/;

form1.addEventListener('submit',e=>{

    e.preventDefault();

    if(regex.test(inputName.value.trim())){

      alert("yes")
    }
    else{

        alert('no')
    }

    window.scrollTo({top:0,behavior:"smooth"})


})





function ValidateName(inputName) 
{
if (/^[a-z A-Z]{6,20}$/.test(form.namea.value))
{
    return (true)
}
else
{ 
    alert("You have entered an invalid name!")
    return (false)

    
}}
/*function ValidateName(inputName){

    let namea = /^([a-z A-Z]).{6-20}$/.test(value)
    if(inputName.value.match(namea))
    {
       return true;
    }
    else{
        return false;
    }}*/



