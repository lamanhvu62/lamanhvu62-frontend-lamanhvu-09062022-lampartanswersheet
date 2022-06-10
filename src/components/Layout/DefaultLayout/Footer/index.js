import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('container')}>
                <address className={cx('footer__main')}>Copyright by Lam Anh Vu</address>
            </div>
        </footer>
    );
}

export default Footer;
