import coreconceptsimg from '../assets/react-core-concepts.png'
import './header.css'
const reactDescription=['Fundamental','Crucial','Core'];
function getRandomInt(max){
  return Math.floor(Math.random()*(max+1));
}
export default function header(){
    return (
        <header>
         <img src={coreconceptsimg} alt="React Core Concepts" />
          <h1>React Essentials</h1>
          <p>
            {reactDescription[getRandomInt(2)]} React concepts you will need for almost any app you are going to build!
          </p>
        </header>
      );
}