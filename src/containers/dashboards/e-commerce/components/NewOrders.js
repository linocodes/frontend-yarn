import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from 'reactstrap';
import DotsHorizontalIcon from 'mdi-react/DotsHorizontalIcon';
import {Link} from 'react-router-dom';
import {translate} from 'react-i18next';

import Panel from '../../../../components/Panel';
import Table from '../../../../components/table/Table';

class DropDownMore extends PureComponent {
  static propTypes = {
    index: PropTypes.number,
    handleDeleteRow: PropTypes.func
  };

  render() {
    return (
      <UncontrolledDropdown className='dashboard__table-more'>
        <DropdownToggle>
          <p><DotsHorizontalIcon/></p>
        </DropdownToggle>
        <DropdownMenu className='dropdown__menu'>
          <Link to={`/dashboard_e_commerce/edit/${this.props.index}`}><DropdownItem>Edit</DropdownItem></Link>
          <DropdownItem onClick={this.props.handleDeleteRow}>Delete</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
}

class NewOrderAmount extends PureComponent {
  static propTypes = {
    quantity: PropTypes.number
  };
  
  render(){
    let quantity = this.props.quantity;
    if (quantity > 150)
      return(
        <div className='dashboard__table-orders-amount'>
          <div/><div/><div/><div/><div/>
          <span>{this.props.quantity}</span>
        </div>
      );
    else if(quantity > 100)
      return(
        <div className='dashboard__table-orders-amount'>
          <div/><div/><div/><div/>
          <span>{this.props.quantity}</span>
        </div>
      );
    else if(quantity > 50)
      return(
        <div className='dashboard__table-orders-amount dashboard__table-orders-amount--medium'>
          <div/><div/><div/>
          <span>{this.props.quantity}</span>
        </div>
      );
    else if(quantity > 20)
      return(
        <div className='dashboard__table-orders-amount dashboard__table-orders-amount--medium'>
          <div/><div/>
          <span>{this.props.quantity}</span>
        </div>
      );
    else
      return(
        <div className='dashboard__table-orders-amount dashboard__table-orders-amount--low'>
          <div/>
          <span>{this.props.quantity}</span>
        </div>
      )
  }
}

class NewOrders extends PureComponent {
  static propTypes = {
    newOrder: PropTypes.object.isRequired,
    onDeleteRow: PropTypes.func,
  };

  render() {
    const {t, newOrder, onDeleteRow} = this.props;

    return (
      <Panel xl={5} lg={12} md={12} title={t('dashboard_commerce.new_orders')}
             subhead='Top sales of the last week'>
        <Table responsive striped className='dashboard__table-orders'>
          <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Sold</th>
            <th>Total</th>
            <th/>
          </tr>
          </thead>
          <tbody>
          {newOrder.items.map((order, index) =>
            <tr key={index}>
              <td className='dashboard__table-orders-title'>
                <div className='dashboard__table-orders-img-wrap'>
                  <div className='dashboard__table-orders-img' style={{backgroundImage: 'url(' + order.img + ')'}} />
                </div>
                {order.title}
                </td>
              <td>
                <NewOrderAmount quantity={order.quantity}/>
              </td>
              <td>{order.sold}</td>
              <td className='dashboard__table-orders-total'>{order.total}</td>
              <td>
                <DropDownMore index={index} handleDeleteRow={(e) => onDeleteRow(index, e)}/>
              </td>
            </tr>
          )}
          </tbody>
        </Table>
      </Panel>
    )
  }
}

export default translate('common')(NewOrders);
