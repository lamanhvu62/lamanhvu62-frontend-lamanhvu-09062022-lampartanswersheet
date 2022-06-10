import classNames from 'classnames/bind';
import { useRef } from 'react';
import styles from './menu.module.scss';

const cx = classNames.bind(styles);

function Hamburger({ onClick }) {
    const click = useRef();

    const handleClick = () => {
        const el = click.current;
        el.classList.toggle('active');
    };

    return (
        <div className={cx('hamburger-menu')} onClick={handleClick} ref={click}>
            <input id="menu__toggle" className={cx('hamburger-input')} type="checkbox" />
            <label className={cx('menu__btn')} htmlFor="menu__toggle">
                <span></span>
            </label>
        </div>
    );
}

export default Hamburger;
