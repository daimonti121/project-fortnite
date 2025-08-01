import { useContext } from 'react';
import { ShopContext } from '../Context';

import { useEffect } from 'react';

function Alert() {
    const { alertName: name = '', closeAlert = Function.prototype } = useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 2000);

        return () => {
            clearTimeout(timerId);
        };
        // eslint-disable-next-line
    }, [name]);

    return (
        <div id='toast-container'>
            <div className='toast'>{name} добавлен в корзину</div>
        </div>
    );
}

export { Alert };
