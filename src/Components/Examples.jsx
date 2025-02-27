import TabButton from "./TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.jsx";
import Section from "./Section.jsx";
export default function Examples(){
    let [selectedTopic,setSelectedTopic]=useState('');
    function handleSelect(SelectedButton){
      setSelectedTopic(SelectedButton);
    }
    return(
        <Section id="examples" title="Examples">
            <menu> {/* default html element*used to create list of buttonss*/}
              <TabButton isSelected={selectedTopic === 'components'} onClick={()=>handleSelect('components')}>Components</TabButton>
              <TabButton isSelected={selectedTopic === 'jsx'}onClick={()=>handleSelect('jsx')}>Jsx</TabButton>
              <TabButton  isSelected={selectedTopic === 'props'}onClick={()=>handleSelect('props')}>Props</TabButton>
              <TabButton  isSelected={selectedTopic === 'state'}onClick={()=>handleSelect('state')}>State</TabButton>
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
          </Section>
    );
}