function BasketItem(props) {
    const {
        mainId,
        name,
        quantity,
        price,
        onDeleteBasketItem = Function.prototype,
        onAddCart = Function.prototype,
        onRemoveCart = Function.prototype,
    } = props;

    return (
        <li className='collection-item flex'>
            <i
                className='material-icons basket-item-close' style={{color: '#33a6ff'}} 
                onClick={() => onAddCart({ mainId, name, price })}
            >
                add
            </i>
            <i
                className='material-icons basket-item-close' style={{color: '#ff614b'}}
                onClick={() => onRemoveCart({ mainId, name, price, quantity })}
            >
                remove
            </i>
            <span className="basket-item-text">{name} x{quantity} = {price?.regularPrice || 0 * quantity} грн.</span>
            <span className='secondary-content'>
                <i
                    className='material-icons basket-item-close'
                    onClick={() => onDeleteBasketItem(mainId)}
                >
                    close
                </i>
            </span>
        </li>
    );
}

export { BasketItem };
