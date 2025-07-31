import { useContext } from "react";
import { ShopContext } from "../Context";

function BasketItem(props) {
    const {
        mainId,
        name,
        quantity,
        price,
    } = props;

    const {addCard, removeFromBasket, removeCart} = useContext(ShopContext);

    return (
        <li className='collection-item flex'>
            <i
                className='material-icons basket-item-close' style={{color: '#33a6ff'}} 
                onClick={() => addCard({ mainId, name, price })}
            >
                add
            </i>
            <i
                className='material-icons basket-item-close' style={{color: '#ff614b'}}
                onClick={() => removeCart({ mainId, name, price, quantity })}
            >
                remove
            </i>
            <span className="basket-item-text">{name} x{quantity} = {price?.regularPrice * quantity} грн.</span>
            <span className='secondary-content'>
                <i
                    className='material-icons basket-item-close'
                    onClick={() => removeFromBasket(mainId)}
                >
                    close
                </i>
            </span>
        </li>
    );
}

export { BasketItem };
