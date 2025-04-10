// Destructuring the props to explicitly call title and description
function Hobby({ title, description}) {
   return(
      <div>
         <h2>{title}</h2>
         <p>{description}</p>
      </div>
   )
}

export default Hobby