export default function Tabs({children,buttons,ButtonContainer ='menu'}){//we can set default value as well
    
    return(
        <>
         <ButtonContainer>
            {buttons}
         </ButtonContainer>
        {children}
        </>
    );
}