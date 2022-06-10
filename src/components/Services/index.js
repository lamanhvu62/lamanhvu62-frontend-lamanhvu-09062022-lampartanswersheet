import classNames from 'classnames/bind';
import Button from '../Button';
import styles from './Services.module.scss';

const cx = classNames.bind(styles);

function Services({ data }) {
    return (
        <div className={cx('service')}>
            <div className={cx('service__item')}>
                <p className={cx('service__icon')}>
                    <img src={data.img} alt={data.title} />
                </p>
                <h3 className={cx('service__title')}>{data.title}</h3>
                <p className={cx('service__info')}>{data.info}</p>
                <Button className={cx('service__button')} to={data.to} primary bigger>
                    Read more
                </Button>
            </div>
        </div>
    );
}

export default Services;
