import { Container } from './styles';

import { ProductCardData } from './ProductCardData';

export const ProductCard = ({ title, price, codeNumber, id, category }) => {
    return (
        <Container>
            <ul>
                {ProductCardData.map((val, key) => {
                    return (
                        <div key={key}>
                            <header>
                                <h4>{val.title}</h4>
                            </header>
                            <main>
                                <p>{val.price}</p>
                                <span>{val.codeNumber}</span>
                                <span>{val.category}</span>
                            </main>
                            <div className="edit">{val.icon}</div>
                        </div>
                    );
                })}
            </ul>
        </Container>
    );
};
