import React, {PureComponent} from 'react';
import {Card, CardBody, Col, ButtonToolbar} from 'reactstrap';
import EmailIcon from 'mdi-react/EmailIcon'
import CheckboxMarkedCircleIcon from 'mdi-react/CheckboxMarkedCircleIcon'
import {Link} from 'react-router-dom';

export default class EmailConfirmationCard extends PureComponent {
  render() {

    return (

            <div className='email-confirmation'>
              <div className='email-confirmation__icon'>
                <EmailIcon className='email-confirmation__mail'/>
                <CheckboxMarkedCircleIcon className='email-confirmation__check'/>
              </div>
              <h3 className='email-confirmation__title'>Your e-mail address has been successfully verified</h3>
              <p className='email-confirmation__sub'>Thank you for choosing the EasyDev</p>

            </div>

    )
  }
}

