function GoodsItem(props) {
    const {
        displayName,
        displayDescription,
        price,
        displayAssets,
        mainId,
        onAddCart = Function.prototype,
    } = props;

    const name = displayName || 'Без названия';
    const description = displayDescription || 'Нет описания';
    const priceValue = price?.regularPrice || 0;
    const image = displayAssets[0].full_background || 'Нет картинки';

    if (!displayDescription) {
        return null;
    }

    return (
        <div className='card'>
            <div className='card-image'>
                <img src={image} alt={name} />
            </div>
            <div className='card-content'>
                <p className='card-title'>{name}</p>
                <p>{description}</p>
            </div>
            <div
                className='card-action'
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <button
                    className='btn'
                    onClick={() => onAddCart({ mainId, name, price })}
                >
                    Купить
                </button>
                <span className='right'>{priceValue} грн.</span>
            </div>
        </div>
    );
}

export { GoodsItem };
