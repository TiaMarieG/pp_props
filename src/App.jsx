import Hobbies from './components/Hobbies.jsx'
import './App.css'

function App() {

  // Creating a list of hobbies that I partake in
  const hobbyList = [
    {title: 'Web Design', description: 'Creating guide websites for games'},
    {title: 'Gaming', description: 'Playing various games that I enjoy'},
    {title: 'Cross-stitching', description: 'Threads in shape of an x to make an overall pattern'}
  ]

  return (
    // Rendering Hobbies and passing it the created list to be passed down
    <>
      <Hobbies hobbies={hobbyList} />
    </>
  )
}

export default App
