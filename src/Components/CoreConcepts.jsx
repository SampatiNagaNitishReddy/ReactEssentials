import { CORE_CONCEPTS } from "./data.jsx";// if it is not deafult export we need to use {} braces.
import CoreConcept from "./CoreConcept.jsx";
export default function CoreConcepts(){
    return(
         <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                       {CORE_CONCEPTS.map((conceptitem)=>(
                        <CoreConcept key={conceptitem.title} {...conceptitem}/>
                       ))}
                    </ul>
                  </section>
    );
}