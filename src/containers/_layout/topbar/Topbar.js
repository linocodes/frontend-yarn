import React, {PureComponent} from 'react';
import TopbarSidebarButton from './TopbarSidebarButton';
import TopbarProfile from './TopbarProfile';
import TopbarMail from './TopbarMail';
import TopbarNotification from './TopbarNotification';
import TopbarSearch from './TopbarSearch';
import TopbarLanguage from './TopbarLanguage';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class Topbar extends PureComponent {
  static propTypes = {
    changeMobileSidebarVisibility: PropTypes.func,
    changeSidebarVisibility: PropTypes.func,
  };

  render() {
    let {changeMobileSidebarVisibility, changeSidebarVisibility} = this.props;

    return (
      <div className='topbar'>
        <div className='topbar__wrapper'>
          <div className='topbar__left'>
            <TopbarSidebarButton
              changeMobileSidebarVisibility={changeMobileSidebarVisibility}
              changeSidebarVisibility={changeSidebarVisibility}
            />
            <Link className='topbar__logo' to='/dashboard_default'/>
          </div>
          <div className='topbar__right'>
            <TopbarSearch/>
            <TopbarNotification/>
            <TopbarMail new/>
            <TopbarProfile/>
            <TopbarLanguage/>
          </div>
        </div>
      </div>
    )
  }
}

export default Topbar;