import { useContext } from "react";
import { ShopContext } from "../Context";

import { BasketItem } from './BasketItem';

function BasketList() {

    const {order = [], handleBasketShow = Function.prototype} = useContext(ShopContext)

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price?.regularPrice * el.quantity;
    }, 0);

    return (
        <ul className='collection basket-list'>
            <li className='collection-item active'>Корзина</li>
            {order.length ? (
                order.map((item) => (
                    <BasketItem
                        key={item.mainId}
                        {...item}
                    />
                ))
            ) : (
                <li key='empty' className='collection-item'>
                    Корзина пуста
                </li>
            )}
            <li className='collection-item active'>
                Общая стоимость: {totalPrice} грн.
                <button className='secondory-content btn btn-small white black-text'>Оформить</button>
            </li>
            <i
                className='material-icons basket-close'
                onClick={handleBasketShow}
            >
                close
            </i>
        </ul>
    );
}

export { BasketList };
