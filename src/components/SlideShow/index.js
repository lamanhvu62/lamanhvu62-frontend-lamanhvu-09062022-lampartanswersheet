import React from 'react';
import Slider from 'react-slick';
import classNames from 'classnames/bind';
import images from '~/assets';
import styles from './SlideShow.module.scss';

const cx = classNames.bind(styles);

function SlideShow() {
    const NextArrow = (props) => {
        const { className, onClick } = props;
        return (
            <div className={className} onClick={onClick}>
                <img src={images.dotsNext} alt="" />
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { className, onClick } = props;
        return (
            <div className={className} onClick={onClick}>
                <img src={images.dotsPrev} alt="" />
            </div>
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: true,
        nextArrow: <NextArrow className="test" />,
        prevArrow: <PrevArrow />,
    };

    const slideImages = [
        {
            url: images.slide1,
            titleSlide: 'Sample Services',
            desSlide:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem eum odit vitae impedit repudiandae nemo iure aperiam explicabo ullam, eaque corrupti nulla quaerat, eveniet ipsum sunt itaque fuga autem placeat?',
        },
        {
            url: images.slide2,
            titleSlide: 'Sample Services',
            desSlide:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem eum odit vitae impedit repudiandae nemo iure aperiam explicabo ullam, eaque corrupti nulla quaerat, eveniet ipsum sunt itaque fuga autem placeat?',
        },
    ];

    return (
        <div className={cx('slide', 'slide__custom')}>
            <Slider {...settings}>
                {slideImages.map((slide, index) => {
                    return (
                        <div key={index} className={cx('slide__item')}>
                            <div className={cx('slide__info')}>
                                <h2>{slide.titleSlide}</h2>
                                <p>{slide.desSlide}</p>
                            </div>
                            <p>
                                <img src={slide.url} alt="" />
                            </p>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}

export default SlideShow;
