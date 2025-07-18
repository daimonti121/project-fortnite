import { GoodsItem } from "./GoodsItem";

function GoodsList(props) {
    const {goods, onAddCart = Function.prototype} = props;

    const newArr = goods.slice(70, 80);

    if(!goods.length) {
        return <h3>Nothing here</h3>
    }

    return <div className="goods">
        {newArr.map(item => (
            <GoodsItem key={item.mainId} {...item} onAddCart={onAddCart}/>
        ))}
    </div>
}

export { GoodsList };