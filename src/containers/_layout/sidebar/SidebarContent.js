import React, {Component} from 'react';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';
import {translate} from 'react-i18next';

class SidebarContent extends Component {

  hideSidebar = () => {
    this.props.onClick();
  };
  
  render() {
    return (
      <div className='sidebar__content'>
        <ul className='sidebar__block'>
          <SidebarLink title='tables.basic_tables.basic_table' icon='home' route='/dashboard_default' onClick={this.hideSidebar}>
          </SidebarLink>
        </ul>
        <ul className='sidebar__block'>
          <SidebarLink title='ConciliadorWeb' icon='envelope' route='forms/wizard_form' onClick={this.hideSidebar}/>
        </ul>
        <ul className='sidebar__block'>
          <SidebarCategory title='Account' icon='user'>
            <SidebarLink title='Profile' route='/account/profile' onClick={this.hideSidebar}/>
          </SidebarCategory>

        </ul>
      </div>
    )
  }
}

export default translate('common')(SidebarContent);