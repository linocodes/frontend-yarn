import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import {BarChart, Bar, Cell, ResponsiveContainer} from 'recharts';
import TrendingUpIcon from 'mdi-react/TrendingUpIcon';
import {translate} from 'react-i18next';

const data = [
  {name: 'Page A', amt: 2400},
  {name: 'Page B', amt: 2210},
  {name: 'Page C', amt: 2290},
  {name: 'Page D', amt: 2000},
  {name: 'Page E', amt: 2181},
  {name: 'Page F', amt: 2500},
  {name: 'Page G', amt: 2100},
  {name: 'Page H', amt: 2290},
  {name: 'Page I', amt: 2000},
  {name: 'Page J', amt: 2181},
];

class TotalPageViews extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      activeIndex: 0
    };
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(data, index) {
    this.setState({
      activeIndex: index,
    });
  }
  
  render() {
    const {activeIndex, data} = this.state;
    const activeItem = data[activeIndex];
    const {t} = this.props;
    
    return (
      <Col md={12} xl={3} lg={6} xs={12}>
        <Card>
          <CardBody className='dashboard__card-widget'>
            <div className='card__title'>
              <h5 className='bold-text'>{t('dashboard_default.total_page_views')}</h5>
            </div>
            <div className='dashboard__total'>
              <TrendingUpIcon className='dashboard__trend-icon'/>
              <p className='dashboard__total-stat'>
                {activeItem.amt}
              </p>
              <ResponsiveContainer height={50} className='dashboard__chart-container'>
                <BarChart data={data}>
                  <Bar dataKey='amt' onClick={this.handleClick}>
                    {
                      data.map((entry, index) => (
                        <Cell cursor='pointer' fill={index === activeIndex ? '#4ce1b6' : '#70bbfd'}
                              key={`cell-${index}`}/>
                      ))
                    }
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default translate('common')(TotalPageViews);
