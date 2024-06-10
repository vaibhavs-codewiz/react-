# props : are the information that you pass to a JSX tag
props in react are passed from a component call and receive by function and then can be use with dot notation.
props can be variable object array or key value "".
we can also use the default value foe props if value is not passed while calling any componen , understand from example Card.jsx .
# react props
* React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.
*  React component functions accept a single argument, a props object.
* Don’t miss the pair of { and } curlies inside of ( and ) when declaring props:

function Avatar({ person, size }) {
  // ...
}
This syntax is called “destructuring” and is equivalent to reading properties from a function parameter:

function Avatar(props) {
  let person = props.person;
  let size = props.size;
  // ...
}
Specifying a default value for a prop 
If you want to give a prop a default value to fall back on when no value is specified, you can do it with the destructuring by putting = and the default value right after the parameter:

function Avatar({ person, size = 100 }) {
  // ...
}
* here is spread version of using props 

without spread
function Profile({ person, size, isSepia, thickBorder }) {
  return (
    <div className="card">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}

with spread
function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}