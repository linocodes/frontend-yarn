import React, {PureComponent} from 'react';
import Panel from '../../../../components/Panel';
import {Progress} from 'reactstrap';
import {translate} from 'react-i18next';

class GoalsCompletion extends PureComponent {
  render() {
    const {t} = this.props;

    return (
      <Panel xs={12} md={12} lg={12} xl={4} title={t('dashboard_default.goals_completion')} subhead={`What's your progress`} >
        <div className='progress-wrap progress-wrap--small'>
          <p>Completed Purchase</p>
          <Progress value={46}>46%</Progress>
        </div>
        <div className='progress-wrap progress-wrap--small'>
          <p>New clients</p>
          <Progress value={67}>67%</Progress>
        </div>
        <div className='progress-wrap progress-wrap--small'>
          <p>New subscribers</p>
          <Progress value={87}>87%</Progress>
        </div>
        <div className='progress-wrap progress-wrap--small'>
          <p>Site visits from ADS banners</p>
          <Progress value={24}>24%</Progress>
        </div>
        <div className='progress-wrap progress-wrap--small'>
          <p>Total page views</p>
          <Progress value={56}>56%</Progress>
        </div>
        <div className='progress-wrap progress-wrap--small'>
          <p>Positive feedback</p>
          <Progress value={46}>46%</Progress>
        </div>
      </Panel>
    )
  }
}

export default translate('common')(GoalsCompletion);
