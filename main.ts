import inquirer from "inquirer";
const answer =await inquirer.prompt([
    {
        type:"number",
        name:"num1",
        message:"entre the first number:"
   },
{
        type:"number",
        name:"num2",
        message:"entre the second number:"
   
},
{
    type:"list",
    name:"operator",
    message:"select the operator you want to perform",
    choices:["add","subtract","multiply","divide"]
}

]);

let result:number;
switch(answer.operator){
    case "add":
        result=answer.num1 + answer.num2;
        console.log("the answer for addition is:" + result);
        break;

    case "subtract":
        result=answer.num1 - answer.num2;
        console.log("the answer for subtraction is:" + result);
        break;

    case "multiply":
        result=answer.num1 * answer.num2;
        console.log("the answer for multiplication is:" + result);
        break;

    case "divide":
        result=answer.num1 / answer.num2;
        console.log("the answer for division is:" + result);
        break;

}