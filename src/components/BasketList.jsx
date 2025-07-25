import { BasketItem } from './BasketItem';

function BasketList(props) {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        onDeleteBasketItem = Function.prototype,
        onAddCart = Function.prototype,
        onRemoveCart = Function.prototype,
    } = props;

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
                        onDeleteBasketItem={onDeleteBasketItem}
                        onAddCart={onAddCart}
                        onRemoveCart={onRemoveCart}
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
