import { BasketItem } from './BasketItem';

function BasketList(props) {
    const { order = [] } = props;

    return (
        <ul className='collection'>
            <li className='collection-item Active'>Корзина</li>
            {order.length ? (
                order.map((item) => <BasketItem key={item.id} {...item} />)
            ) : (
                <li className='collection-item'>Корзина пуста</li>
            )}
            <li className='collection-item Active'>Общая стоимость: </li>
        </ul>
    );
}

export { BasketList };
