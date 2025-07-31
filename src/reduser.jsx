export function reducer(state, { type, payload }) {
    switch (type) {
        case 'SET_GOODS': 
            return {
                ...state,
                goods: payload || [],
                loading: false
            }
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: '',
            };
        case 'REMOVE_FROM_BASKET':
            console.log('Удаляю элемент с id:', payload);
            return {
                ...state,
                order: state.order.filter((item) => item.mainId !== payload.id),
            };
        case 'BASKET_SHOW':
            return {
                ...state,
                isBasket: !state.isBasket,
            };
        case 'ADD_CART': {
            const itemIndex = state.order.findIndex(
                (orderItem) => orderItem.mainId === payload.mainId
            );

            let newOrder = null;

            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1,
                };
                newOrder = [...state.order, newItem];
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                });
            }

            return {
                ...state,
                order: newOrder,
                alertName: payload.name,
            };
        }
        case 'REMOVE_CART': {
            const itemIndex = state.order.findIndex(
                (orderItem) => orderItem.mainId === payload.mainId
            );

            if (itemIndex < 0) return state; // элемента нет

            const item = state.order[itemIndex];

            let newOrder;
            if (item.quantity <= 1) {
                return state;
            } else {
                // уменьшаем количество
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity - 1,
                        };
                    } else {
                        return orderItem;
                    }
                });
            }

            return {
                ...state,
                order: newOrder,
            };
        }
        default:
            return state;
    }
}
