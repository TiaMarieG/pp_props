import Hobby from "./Hobby.jsx"

// Passing hobbies in from App.jsx to this function as a parameter and using it with a map
function Hobbies({ hobbies }) {
   return(
      <div>
         {hobbies.map((hobby, index) => <Hobby key={`${index}${hobby.title}`} title={hobby.title} description={hobby.description} />)}
      </div>
   )
}

export default Hobbies