import classNames from 'classnames/bind';

import styles from './header.module.scss';
import Menu from '~/components/Menu';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('header__main')}>
                    <h1 className={cx('header__logo')}>Sample Logo</h1>
                    <Menu />
                </div>
            </div>
        </header>
    );
}

export default Header;
