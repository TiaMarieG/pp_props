import Hobby from "./Hobby.jsx"

function Hobbies( { hobbies }) {
   return(
      <div>
         {hobbies.map((hobby, index) => <Hobby key={`${index}${hobby.title}`} title={hobby.title} description={hobby.description} />)}
      </div>
   )
}

export default Hobbies