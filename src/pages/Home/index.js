import SlideShow from '~/components/SlideShow';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Services from '~/components/Services';
import images from '~/assets';

const cx = classNames.bind(styles);

function Home() {
    const ServiceList = [
        {
            to: './services',
            title: 'Suspendisse',
            img: images.icon1,
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur neque eum nulla nobis eligendi quod qui omnis similique, atque quibusdam aliquam voluptatibus',
        },
        {
            to: './services',
            title: 'Maecenas',
            img: images.icon2,
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur neque eum nulla nobis eligendi quod qui omnis similique, atque quibusdam aliquam voluptatibus',
        },
        {
            to: './services',
            title: 'Aliquam',
            img: images.icon3,
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur neque eum nulla nobis eligendi quod qui omnis similique, atque quibusdam aliquam voluptatibus',
        },
        {
            to: './services',
            title: 'Habitasse',
            img: images.icon4,
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur neque eum nulla nobis eligendi quod qui omnis similique, atque quibusdam aliquam voluptatibus',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <SlideShow />
            <div className="container">
                <div className={cx('intro', 'mb-sp-30')}>
                    <h2>Some of our top services</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur neque eum nulla nobis eligendi
                        quod qui omnis similique, atque quibusdam aliquam voluptatibus, reprehenderit assumenda
                        accusantium deleniti nemo deserunt repudiandae harum.
                    </p>
                </div>
                <div className={cx('servces')}>
                    {ServiceList.map((data, index) => {
                        return <Services className={cx('servces__item')} key={index} data={data} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Home();
