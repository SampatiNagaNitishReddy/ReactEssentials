import Header from "./Header.jsx"
import { useState } from "react";
import { CORE_CONCEPTS } from "./data.jsx";// if it is not deafult export we need to use {} braces.
import { EXAMPLES } from "./data.jsx";
import CoreConcepts from "./CoreConcepts.jsx";
import TabButton from "./TabButton.jsx";
function App() {
  let [selectedTopic,setSelectedTopic]=useState('');
  function handleSelect(SelectedButton){
    setSelectedTopic(SelectedButton);
  }
    return (
      <div>
        <Header/>
        <main>
          <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
              {/*<CoreConcepts title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/>
              <CoreConcepts title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} img={CORE_CONCEPTS[1].image}/>
              <CoreConcepts title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} img={CORE_CONCEPTS[2].image}/>
              <CoreConcepts title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} img={CORE_CONCEPTS[3].image}/>
              
              <CoreConcepts {...CORE_CONCEPTS[1]}/>
              <CoreConcepts {...CORE_CONCEPTS[2]}/>
              <CoreConcepts {...CORE_CONCEPTS[3]}/>
            
               */}
               {CORE_CONCEPTS.map((conceptitem)=>(
                <CoreConcepts key={conceptitem.title} {...conceptitem}/>
               ))}
            </ul>
          </section>
          <section id="examples">
            <h2>Examples</h2>
            <menu> {/* default html element*used to create list of buttonss*/}
              <TabButton isSelected={selectedTopic === 'components'} onSelect={()=>handleSelect('components')}>Components</TabButton>
              <TabButton isSelected={selectedTopic === 'jsx'}onSelect={()=>handleSelect('jsx')}>Jsx</TabButton>
              <TabButton  isSelected={selectedTopic === 'props'}onSelect={()=>handleSelect('props')}>Props</TabButton>
              <TabButton  isSelected={selectedTopic === 'state'}onSelect={()=>handleSelect('state')}>State</TabButton>
            </menu>
            {/*there are three ways one approch you cansee at the bottom
            other is using && ,other is element variable outside return*/}
            {!selectedTopic ? (
              <p>Please select a topic</p>
            ):(
              <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>
                  {EXAMPLES[selectedTopic].code}
                  </code>
                </pre>
            </div>
            )}
          </section>
          
        </main>
      </div>
    );
    
}

export default App
