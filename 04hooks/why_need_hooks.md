# vite new project steps
in command terminal 
1. npm create vite@latest
2. type project name
3. select framework (react)
4. select variant js
5. cd projectname then npm install
6. to run app : npm run dev

# need of hooks
React does not give control to us to control the ui updation ,
react allow us to update the value of variables but when we need to print that value window we need to use the hooks
hooks are some methods which help to achieve this .
example : if we wanna display a variable on screen at 5 differnet places whoes value changes , then doing this using js will be tedious as we need to select 5 different element , but hooks rescue as from this situation.
* hooks are methods which are very modular , there is very specific task is perform by single hook. 
* to include the hooks method : import {useState} from "react"(one of the hook)
useState ,method is reponsible for propagating the state change on ui.
useState return the 2 values in array form , second value is function which give first array value .
* ex. const [counter, setCounter] = useState(anyvalue);
now counter is control by setCounter method.
* useState sync the ui and state.

# interview question related to counter 
* if inside the addVale method there are multiple setvalue(counter+1) 4 times than what will happen :
->counter will not increase by 4 on clicking add counter because , all the set counter are sent in badges and if there is similar kind of work for set counter than by fibre algorithm in react counter increase by 1 only.
-> to handle this task , setCounter method acccepts a call back in which prev state of button is pass as parameter and than perform operation on that .
so , by this approach separate badge are created for every call although the tasks are similar .
this is possible because every call need previous state and which is only achived when only one task perform .
avoid putting inside the conditionals.