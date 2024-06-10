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