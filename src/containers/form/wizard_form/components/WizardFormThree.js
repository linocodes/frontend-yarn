import React, { PureComponent } from 'react';
import { Button, ButtonToolbar } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Col, CardFooter, Row } from 'reactstrap';
import renderToggleButtonField from '../../../../components/form/ToggleButton';
import renderSelectField from '../../../../components/form/Select';
import { translate } from 'react-i18next';

import CardBasic from './CardBasic';
import CardSpecial from './CardSpecial';
import CardPro from './CardPro';
import CardPremium from './CardPremium';

class WizardFormOne extends PureComponent {
  render() {
    const {handleSubmit, previousPage, t} = this.props;
    return (

      <Col md={12} lg={12}>
        <form className='form' onSubmit={handleSubmit}>
          <Card>
            <CardBody>
              <div className='card__title'>
                <h5 className='bold-text'>{t('forms.basic_form.vertical_form')}</h5>
                <h5 className='subhead'>Labels are above fields</h5>
              </div>
              <Row>
          <CardBasic/>
          <CardSpecial/>
          <CardPro/>
          <CardPremium/>
        </Row>              

            </CardBody>
            <CardFooter>
              <ButtonToolbar className='form__button-toolbar wizard__toolbar'>
                <Button color='primary' type='button' className='previous' onClick={previousPage}>Back</Button>
                <Button color='primary' type='submit'>Next</Button>
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
