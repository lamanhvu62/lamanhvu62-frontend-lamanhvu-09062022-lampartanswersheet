import classNames from 'classnames/bind';

import styles from './menu.module.scss';
import Button from '~/components/Button';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu() {
    const navItem = [
        {
            page: 'Home',
            to: './',
        },
        {
            page: 'About',
            to: './about',
        },
        {
            page: 'Services',
            to: './services',
        },
        {
            page: 'Portfolio',
            to: './portfolio',
        },
        {
            page: 'Contact Us',
            to: './contactus',
        },
    ];

    const innerWindow = window.innerWidth;
    const [isActive, setActive] = useState('false');
    const ToggleClass = () => {
        setActive(!isActive);
    };

    return (
        <>
            <nav className={cx('wrapper', isActive ? '' : 'active')}>
                <ul className={cx('nav__list')}>
                    {navItem.map((item, index) => {
                        return (
                            <li key={index}>
                                <Button href={item.to} title={item.page}>
                                    {item.page}
                                </Button>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            {innerWindow < 768 && (
                <div className={cx('hamburger-menu')}>
                    <input id="menu__toggle" className={cx('hamburger-input')} type="checkbox" onClick={ToggleClass} />
                    <label className={cx('menu__btn')} htmlFor="menu__toggle">
                        <span></span>
                    </label>
                </div>
            )}
        </>
    );
}

export default Menu;
