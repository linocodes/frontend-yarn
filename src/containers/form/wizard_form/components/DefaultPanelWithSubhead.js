import React, {PureComponent} from 'react';
import Panel from '../../../../components/Panel';
import Table from '../../../../components/table/Table';

import { Col, Container, Row } from 'reactstrap';
import { Button, ButtonToolbar } from 'reactstrap';
import { Card, CardBody, CardFooter } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';

import {Progress} from 'reactstrap';
import {translate} from 'react-i18next';

const Brasil = process.env.PUBLIC_URL + '/img/flags/Brasil.svg';
const Argentina = process.env.PUBLIC_URL + '/img/flags/Argentina.svg';
const Gabon = process.env.PUBLIC_URL + '/img/flags/Gabon.svg';
const Ireland = process.env.PUBLIC_URL + '/img/flags/Ireland.svg';
const Italia = process.env.PUBLIC_URL + '/img/flags/Italia.svg';
const Sierra = process.env.PUBLIC_URL + '/img/flags/Sierra.svg';

class DefaultPanelWithSubhead extends PureComponent {
  render() {
    const { handleSubmit, previousPage, t } = this.props;
    return (


      <Table responsive className='table--bordered dashboard__audience-table'>
        <thead>
          <tr>
            <th>Country</th>
            <th>Page views</th>
            <th>Device</th>
            <th>Bounce rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img className='dashboard__table-flag' src={Brasil} alt='flag' /> Brasil</td>
            <td>12134</td>
            <td>Desktop</td>
            <td>
              <div className='progress-wrap progress-wrap--blue'>
                <Progress value={41}>41%</Progress>
              </div>
            </td>
          </tr>
          <tr>
            <td><img className='dashboard__table-flag' src={Argentina} alt='flag' /> Argentina</td>
            <td>47584</td>
            <td>Mobile</td>
            <td>
              <div className='progress-wrap progress-wrap--blue'>
                <Progress value={30}>30%</Progress>
              </div>
            </td>
          </tr>
          <tr>
            <td><img className='dashboard__table-flag' src={Gabon} alt='flag' /> Gabon</td>
            <td>24235</td>
            <td>Mobile</td>
            <td>
              <div className='progress-wrap progress-wrap--blue'>
                <Progress value={65}>65%</Progress>
              </div>
            </td>
          </tr>
          <tr>
            <td><img className='dashboard__table-flag' src={Italia} alt='flag' /> Italia</td>
            <td>2255</td>
            <td>Desktop7</td>
            <td>
              <div className='progress-wrap progress-wrap--blue'>
                <Progress value={41}>41%</Progress>
              </div>
            </td>
          </tr>
          <tr>
            <td><img className='dashboard__table-flag' src={Sierra} alt='flag' /> Sierra Leone</td>
            <td>2421</td>
            <td>Tablet</td>
            <td>
              <div className='progress-wrap progress-wrap--blue'>
                <Progress value={31}>30%</Progress>
              </div>
            </td>
          </tr>
          <tr>
            <td><img className='dashboard__table-flag' src={Ireland} alt='flag' /> Ireland</td>
            <td>805</td>
            <td>Mobile</td>
            <td>
              <div className='progress-wrap progress-wrap--blue'>
                <Progress value={70}>70%</Progress>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>



    )
  }
}

export default translate('common')(DefaultPanelWithSubhead);
