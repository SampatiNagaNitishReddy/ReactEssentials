import TabButton from "./TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.jsx";
export default function Examples(){
    let [selectedTopic,setSelectedTopic]=useState('');
    function handleSelect(SelectedButton){
      setSelectedTopic(SelectedButton);
    }
    return(
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
    );
}