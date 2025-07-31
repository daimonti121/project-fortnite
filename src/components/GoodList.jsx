import { useContext } from 'react';
import { ShopContext } from '../Context';

import { GoodsItem } from "./GoodsItem";

function GoodsList() {
    const {goods = []} = useContext(ShopContext);

    // const newArr = goods.slice(10, 80);

    if(!goods.length) {
        return <h3>Nothing here</h3>
    }

    return <div className="goods">
        {goods.map(item => (
            <GoodsItem key={item.mainId} {...item} />
        ))}
    </div>
}

export { GoodsList };