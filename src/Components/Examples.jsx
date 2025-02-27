import TabButton from "./TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
export default function Examples(){
    let [selectedTopic,setSelectedTopic]=useState('');
    function handleSelect(SelectedButton){
      setSelectedTopic(SelectedButton);
    }
    let tabContent;
    if(!selectedTopic){
      tabContent=<p>Please select a topic</p>
    }
    else{
      tabContent=<div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>
                  {EXAMPLES[selectedTopic].code}
                  </code>
                </pre>
            </div>
    }
    return(
        <Section id="examples" title="Examples">
          <Tabs buttons={
            <>
              <TabButton isSelected={selectedTopic === 'components'} onClick={()=>handleSelect('components')}>Components</TabButton>
              <TabButton isSelected={selectedTopic === 'jsx'}onClick={()=>handleSelect('jsx')}>Jsx</TabButton>
              <TabButton  isSelected={selectedTopic === 'props'}onClick={()=>handleSelect('props')}>Props</TabButton>
              <TabButton  isSelected={selectedTopic === 'state'}onClick={()=>handleSelect('state')}>State</TabButton>
            </>
          }>
          {tabContent}
          </Tabs>
          </Section>
    );
}