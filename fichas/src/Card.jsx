function Card({name, type,attribute, attack, defense })
{
    return(
        <div className="Card">
            <h1>{name}</h1>
            <h3>{type}</h3>
            <h3>{attribute}</h3>
            <p>{attack}</p>
            <p>{defense}</p>
            {attack >= 3000 && <span>fortissimo</span>}
        </div>
    );

}

export default Card