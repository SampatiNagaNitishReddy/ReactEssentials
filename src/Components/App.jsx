import Header from "./Header.jsx"
import Examples from "./Examples.jsx";
import CoreConcepts from "./CoreConcepts.jsx";
function App() {
 
    return (
      //removing div beacuse we dont need it we can use fragment to wrap
      <>
        <Header/>
        <main>
          <CoreConcepts/>
          <Examples/>  
        </main>
      </>
    );
    
}

export default App
