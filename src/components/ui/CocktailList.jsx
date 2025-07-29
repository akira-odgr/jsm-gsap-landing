export const CocktailList = ({ title, items }) => (
    <>
        <h2>{title}</h2>
        <ul>
            {items.map(({ name, country, detail, price }) => (
                <li key={name}>
                    <div>
                        <h3>{name}</h3>
                        <p>
                            {country} | {detail}
                        </p>
                    </div>
                    <span>- {price}</span>
                </li>
            ))}
        </ul>
    </>
);
