import React, { PureComponent } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Button, ButtonToolbar } from 'reactstrap';
import { Card, CardBody, CardFooter } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import EyeIcon from 'mdi-react/EyeIcon';
import InboxCard from './InboxCard';
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { translate } from 'react-i18next';

const data01 = [
  { name: 'Chrome', value: 12934, fill: '#4ce1b6' },
  { name: 'Safari', value: 9934, fill: '#70bbfd' },
  { name: 'Mozilla', value: 20432, fill: '#f6da6e' },
  { name: 'IE', value: 15432, fill: '#ff4861' }
];

const style = {
  left: 0,
  width: 150,
  lineHeight: '24px'
};


class WizardFormOne extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
    };

    this.showPassword = this.showPassword.bind(this);
  }

  showPassword(e) {
    e.preventDefault();
    this.setState({
      showPassword: !this.state.showPassword
    })
  }

  render() {
    const { handleSubmit, previousPage, t } = this.props;
    return (
      <Col md={12} lg={12}>
        <form className='form' onSubmit={handleSubmit}>
          <Card>
            <CardBody>
              <div className='card__title'>
                <h5 className='bold-text'>{t('forms.basic_form.vertical_form')}</h5>
                <h5 className='subhead'>Labels are above fields</h5>
              </div>
              <InboxCard />
            </CardBody>
            <CardFooter>
              <ButtonToolbar className='form__button-toolbar wizard__toolbar'>
                <Button color='primary' type='button' className='previous' onClick={previousPage}>Back</Button>
                <Button color='primary' type='submit'>Finaliza</Button>
              </ButtonToolbar>
            </CardFooter>
          </Card>
        </form>
      </Col>
    )
  }
}

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(translate('common')(WizardFormOne));