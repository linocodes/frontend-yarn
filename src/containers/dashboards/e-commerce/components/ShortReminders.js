import React, {PureComponent} from 'react';
import Slider from 'react-slick';
import EmoticonIcon from 'mdi-react/EmoticonIcon';
import CrosshairsGpsIcon from 'mdi-react/CrosshairsGpsIcon';
import Panel from '../../../../components/Panel';
import {translate} from 'react-i18next';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  swipeToSlide: true,
  slidesToScroll: 1,
  responsive: [
    {breakpoint: 992, settings: {slidesToShow: 1}},
    {breakpoint: 1200, settings: {slidesToShow: 2}},
    {breakpoint: 1536, settings: {slidesToShow: 1}},
    {breakpoint: 100000, settings: {slidesToShow: 2}}
  ]
};

class ShortReminders extends PureComponent {
  render() {
    const {t} = this.props;

    return (
      <Panel md={12} lg={12} xl={4} sm={12} xs={12} title={t('dashboard_commerce.short_reminders')}>
        <Slider {...settings} className='dashboard__carousel'>
          <div>
            <div className='dashboard__carousel-slide'>
              <CrosshairsGpsIcon/>
              <p className='dashboard__carousel-title'>Our goal</p>
              <p>is creating a chain of jewelery stores</p>
            </div>
          </div>
          <div>
            <div className='dashboard__carousel-slide dashboard__carousel-slide--red'>
              <EmoticonIcon/>
              <p className='dashboard__carousel-title'>Our mission</p>
              <p>is creating a chain of jewelery stores</p>
            </div>
          </div>
          <div>
            <div className='dashboard__carousel-slide'>
              <CrosshairsGpsIcon/>
              <p className='dashboard__carousel-title'>Our goal</p>
              <p>is creating a chain of jewelery stores</p>
            </div>
          </div>
          <div>
            <div className='dashboard__carousel-slide dashboard__carousel-slide--red'>
              <EmoticonIcon/>
              <p className='dashboard__carousel-title'>Our mission</p>
              <p>is creating a chain of jewelery stores</p>
            </div>
          </div>
        </Slider>
      </Panel>
    )
  }
}

export default translate('common')(ShortReminders);
