import { useEffect, useContext } from 'react';
import { API_KEY, API_URL } from '../config';

import { ShopContext } from '../Context';

import { Preloader } from './Preloader';
import { GoodsList } from './GoodList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import { Alert } from './Alert';

function Shop() {
    const { setGoods, loading, order, isBasket, alertName } =
        useContext(ShopContext);

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setGoods(data.shop);
            });
    // eslint-disable-next-line
    }, []);

    return (
        <main className='container content'>
            <Cart quantity={order.length} />
            {loading ? <Preloader /> : <GoodsList />}
            {isBasket && <BasketList />}
            {alertName && <Alert />}
        </main>
    );
}

export { Shop };