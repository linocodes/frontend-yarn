import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import AnimatedLineForm from './components/AnimatedLineForm';
import showResults from './components/Show';
import {translate} from 'react-i18next';

class MaterialForm extends PureComponent {
  render() {
    const {t} = this.props;

    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>{t('forms.material_from.title')}</h3>
            <h3 className='page-subhead subhead'>Use this elements, if you want to show some hints or additional
              information</h3>
          </Col>
        </Row>
        <Row>
          <AnimatedLineForm onSubmit={showResults}/>
        </Row>
      </Container>
    )
  }
}

export default translate('common')(MaterialForm);
