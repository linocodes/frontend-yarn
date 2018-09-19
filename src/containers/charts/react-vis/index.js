import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import Plots from './components/Plots';
import LineSeriesCanvas from './components/LineSeriesCanvas';
import MarkSeriesCanvas from './components/MarkSeriesCanvas';
import LineSeries from './components/LineSeries';
import LineSeriesWithManyColors from './components/LineSeriesWithManyColors';
import Bar from './components/Bar';
import {translate} from 'react-i18next';

class ReactVis extends PureComponent {
  render() {
    const {t} = this.props;

    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>{t('charts.react_vis.title')}</h3>
            <h3 className='page-subhead subhead'>Use this elements, if you want to show some hints or additional
              information</h3>
          </Col>
        </Row>
        <Row>
          <Plots/>
          <LineSeriesCanvas/>
          <MarkSeriesCanvas/>
          <LineSeries/>
          <LineSeriesWithManyColors/>
          <Bar/>
        </Row>
      </Container>
    )
  }
}

export default translate('common')(ReactVis);
