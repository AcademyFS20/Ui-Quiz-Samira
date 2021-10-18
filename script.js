const inputName=document.getElementById(namea);
const inputbtnsub=document.getElementById(btn);
const inputNamee=document.getElementById(namev);


const form=document.getElementsByName(form);
form.addEventlistener('button', (e)=>{
    let message=[]
    if (inputName.value===''|| inputName.value===null)
    {
        message.push('name is required')
        if(message.length>0){
            e.preventDefault()

        errorElement.innertext=message.join(',')
        }
    }})
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



