import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';

import { Preloader } from './Preloader';
import { GoodsList } from './GoodList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import { Alert } from './Alert';

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasket, setBasket] = useState(false);
    const [alertName, setAlertName] = useState('');

    const onAddCart = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.mainId === item.mainId
        );

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });

            setOrder(newOrder);            
        }
        setAlertName(item.name);
    };

    const onRemoveCart = (item) => {
        if (item.quantity <= 1) {
            return;
        }

        const itemIndex = order.findIndex(
            (orderItem) => orderItem.mainId === item.mainId
        );

        const newOrder = order.map((orderItem, index) => {
            if (index === itemIndex) {
                return {
                    ...orderItem,
                    quantity: orderItem.quantity - 1,
                };
            } else {
                return orderItem;
            }
        });

        setOrder(newOrder);
    };

    const handleBasketShow = () => {
        setBasket(!isBasket);
    };

    const onDeleteBasketItem = (itemId) => {
        const newOrder = order.filter((item) => item.mainId !== itemId);
        setOrder(newOrder);
    };

    const closeAlert = () => {
        setAlertName('');
    }

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setGoods(data.shop);
                setLoading(false);
            });
    }, []);

    return (
        <main className='container content'>
            <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
            {loading ? (
                <Preloader />
            ) : (
                <GoodsList goods={goods} onAddCart={onAddCart} />
            )}
            {isBasket && (
                <BasketList
                    order={order}
                    handleBasketShow={handleBasketShow}
                    onDeleteBasketItem={onDeleteBasketItem}
                    onAddCart={onAddCart}
                    onRemoveCart={onRemoveCart}
                />
            )}

            {alertName && <Alert name={alertName} closeAlert={closeAlert}/>}
        </main>
    );
}

export { Shop };
