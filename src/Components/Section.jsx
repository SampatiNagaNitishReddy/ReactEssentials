export default function Section({title,children,...props}){//we can use spread operator also instead of id or any parameters
    return(
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}