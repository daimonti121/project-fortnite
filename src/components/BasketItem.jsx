function BasketItem(props) {
    const {id, name, quantity, price} = props;
    
    return (
        <>
            <li className='collection-item'>{name} x {quantity} = {price} <span class="secondary-content"><i class="material-icons">close</i></span></li>   
        </>
    )
}

export { BasketItem };
