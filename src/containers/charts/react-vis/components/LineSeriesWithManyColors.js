import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import {HorizontalGridLines, LineSeries, VerticalGridLines, XAxis, FlexibleWidthXYPlot, YAxis} from 'react-vis';
import {translate} from 'react-i18next';

const data = [];

for (let i = 0; i < 20; i++) {
  const series = [];
  for (let j = 0; j < 100; j++) {
    series.push({x: j, y: (i / 10 + 1) * Math.sin(Math.PI * (i + j) / 50)});
  }
  data.push({color: i, key: i, data: series, opacity: 0.8});
}

class LineSeriesWithManyColors extends PureComponent {
  render() {
    const {t} = this.props;

    return (
      <Col xs={12} md={12} lg={12} xl={4}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>{t('charts.react_vis.line_series_with_many_colors')}</h5>
            </div>
            <div className='react-vis'>
              <FlexibleWidthXYPlot
                height={250}
                colorType='linear'
                colorDomain={[0, 9]}
                colorRange={['#70bbfd', '#c88ffa']}
              >
                <HorizontalGridLines/>
                <VerticalGridLines/>
                <XAxis/>
                <YAxis/>
                {data.map(props => <LineSeries className='react-vis__svg-line' {...props}/>)}
              </FlexibleWidthXYPlot>
            </div>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default translate('common')(LineSeriesWithManyColors);
