import Counter from "./components/Counter/Counter"
import Toggle from "./components/Toggle/Toggle"
import Bgcolor from "./components/Bgcolor/Bgcolor"
import AddName from "./components/AddName/AddName"
import Propscomponent from "./components/Propscomponent/Propscomponent"


function App() {

return (
    <>
      {/* <Counter />
      <Toggle />
      <Bgcolor />
      <AddName /> */}
      
      <Propscomponent 
      username="Rajdeep Dey" 
      imagepath="https://v3.tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg" 
      content="“Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”"
      designation={'Staff Engineer, Algolia'}
      />
      <Propscomponent 
      username="Subho Dey" 
      imagepath="https://v3.tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg" 
      content="Lorem ipsum dolar"
      designation={'Solution Engineer, Toronto'}
      />
      <Propscomponent 
      imagepath="https://v3.tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg" 
      content="Lorem ipsum dolar"
      designation={'Engineer, Scarborough'}
      />
    </>
  )
}

export default App
