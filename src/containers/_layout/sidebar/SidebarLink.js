import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Badge} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import {translate} from 'react-i18next';



class SidebarLink extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    new: PropTypes.bool,
    route: PropTypes.string
  };

  render() {

    //const {t} = this.props;
    const {t} = this.props;

    return (
     // <div>{this.props.title}</div>
      <NavLink to={this.props.route ? this.props.route : '/'} onClick={this.props.onClick}
               activeClassName='sidebar__link-active'>
        <li className='sidebar__link'>
          {this.props.icon ? <span className={`sidebar__link-icon lnr lnr-${this.props.icon}`}/> : ''}
          <p className='sidebar__link-title'>
            {t(this.props.title)}
            {this.props.new ? <Badge className='sidebar__link-badge'><span>New</span></Badge> : ''}
          </p>
        </li>
      </NavLink>
    )
  }
}

export default translate('common')(SidebarLink);