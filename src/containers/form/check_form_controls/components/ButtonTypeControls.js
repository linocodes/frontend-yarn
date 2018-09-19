import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import renderRadioButtonField from '../../../../components/form/RadioButton';
import renderCheckBoxField from '../../../../components/form/CheckBox';
import {translate} from 'react-i18next';

class DefaultControls extends PureComponent {
  render() {
    const {
      handleSubmit,
      // reset,
      t
    } = this.props;
    
    return (
      <Col md={12} lg={12} xl={6}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>{t('forms.check_form_controls.button_type_controls')}</h5>
              <h5 className='subhead'>Checkboxes and radio buttons. Use class
                <span className='red-text'> button</span>
              </h5>
            </div>
            <form className='form form--preview' onSubmit={handleSubmit}>
              <div>
                <p>Select color</p>
                <div className='form__select-color'>
                  <div className='form__form-group'>
                    <div className='form__form-group-field'>
                      <Field
                        name='4ce1b6'
                        component={renderCheckBoxField}
                        defaultChecked={true}
                        color='#4ce1b6'
                        class='colored'
                      />
                    </div>
                  </div>
                  <div className='form__form-group'>
                    <div className='form__form-group-field'>
                      <Field
                        name='70bbfd'
                        component={renderCheckBoxField}
                        color='#70bbfd'
                        class='colored'
                      />
                    </div>
                  </div>
                  <div className='form__form-group'>
                    <div className='form__form-group-field'>
                      <Field
                        name='fa4a86'
                        component={renderCheckBoxField}
                        color='#fa4a86'
                        class='colored'
                      />
                    </div>
                  </div>
                  <div className='form__form-group'>
                    <div className='form__form-group-field'>
                      <Field
                        name='f6da6e'
                        component={renderCheckBoxField}
                        color='#f6da6e'
                        class='colored'
                      />
                    </div>
                  </div>
                  <div className='form__form-group'>
                    <div className='form__form-group-field'>
                      <Field
                        name='7ed321'
                        component={renderCheckBoxField}
                        color='#7ed321'
                        class='colored'
                      />
                    </div>
                  </div>
                  <div className='form__form-group'>
                    <div className='form__form-group-field'>
                      <Field
                        name='b635ba'
                        component={renderCheckBoxField}
                        color='#b635ba'
                        class='colored'
                      />
                    </div>
                  </div>
                  <div className='form__form-group'>
                    <div className='form__form-group-field'>
                      <Field
                        name='ff4861'
                        component={renderCheckBoxField}
                        color='#ff4861'
                        class='colored'
                      />
                    </div>
                  </div>
                  <div className='form__form-group'>
                    <div className='form__form-group-field'>
                      <Field
                        name='38c3d7'
                        component={renderCheckBoxField}
                        color='#38c3d7'
                        class='colored'
                      />
                    </div>
                  </div>
                  <div className='form__form-group'>
                    <div className='form__form-group-field'>
                      <Field
                        name='f98330'
                        component={renderCheckBoxField}
                        color='#f98330'
                        class='colored'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className='form__form-group'>
                  <div className='form__form-group-field'>
                    <Field
                      name='checkbox_one'
                      component={renderCheckBoxField}
                      label='Checkbox 1'
                      defaultChecked={true}
                      class='button'
                    />
                  </div>
                </div>
                <div className='form__form-group'>
                  <div className='form__form-group-field'>
                    <Field
                      name='checkbox_two'
                      component={renderCheckBoxField}
                      label='Checkbox 2'
                      class='button'
                    />
                  </div>
                </div>
                <div className='form__form-group'>
                  <div className='form__form-group-field'>
                    <Field
                      name='checkbox_disable'
                      component={renderCheckBoxField}
                      label='Checkbox Disabled'
                      disabled
                      class='button'
                    />
                  </div>
                </div>
                <div className='form__form-group'>
                  <div className='form__form-group-field'>
                    <Field
                      name='checkbox_disable_check'
                      component={renderCheckBoxField}
                      label='Disabled & checked'
                      defaultChecked={true}
                      disabled
                      class='button'
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className='form__form-group'>
                  <div className='form__form-group-field'>
                    <Field
                      name='radio'
                      component={renderRadioButtonField}
                      label='Radio button 1'
                      radioValue='1'
                      defaultChecked
                      class='button'
                    />
                  </div>
                </div>
                <div className='form__form-group'>
                  <div className='form__form-group-field'>
                    <Field
                      name='radio'
                      component={renderRadioButtonField}
                      label='Radio button 2'
                      radioValue='2'
                      class='button'
                    />
                  </div>
                </div>
                <div className='form__form-group'>
                  <div className='form__form-group-field'>
                    <Field
                      name='radio_disabled'
                      component={renderRadioButtonField}
                      label='Radio button disabled'
                      radioValue='1'
                      disabled
                      class='button'
                    />
                  </div>
                </div>
                <div className='form__form-group'>
                  <div className='form__form-group-field'>
                    <Field
                      name='radio_disabled'
                      component={renderRadioButtonField}
                      label='Disabled & checked'
                      radioValue='2'
                      defaultChecked
                      disabled
                      class='button'
                    />
                  </div>
                </div>
              </div>
              {/*<ButtonToolbar className='form__button-toolbar'>*/}
              {/*<Button color='primary' type='submit'>Submit</Button>*/}
              {/*<Button type='button' onClick={reset}>*/}
              {/*Cancel*/}
              {/*</Button>*/}
              {/*</ButtonToolbar>*/}
            </form>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default reduxForm({
  form: 'button_type_controls', // a unique identifier for this form
})(translate('common')(DefaultControls));
