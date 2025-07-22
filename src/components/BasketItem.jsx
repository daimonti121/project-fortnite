function BasketItem(props) {
    const { name, quantity, price } = props;

    return (
        <li className='collection-item'>
            {name} x {quantity} = {price?.regularPrice || 0}
            <span className='secondary-content'>
                <i className='material-icons'>close</i>
            </span>
        </li>
    );
}

export { BasketItem };
