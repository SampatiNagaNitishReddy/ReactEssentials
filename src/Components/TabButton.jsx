export default function TabButton({children,onSelect,isSelected}){ //called component composiion

    return(
      <li><button className={isSelected ? "active" : undefined} onClick={onSelect}>{children}</button></li>
    );
} 