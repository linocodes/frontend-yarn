import React, {Component} from 'react';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';

class SidebarContent extends Component {

  hideSidebar = () => {
    this.props.onClick();
  };
  
  render() {
    return (
      <div className='sidebar__content'>
        <ul className='sidebar__block'>
          <SidebarLink title='Dashboard Default' icon='home' route='/dashboard_default' onClick={this.hideSidebar}/>
          <SidebarLink title='Dashboard E-commerce' icon='store' route='/dashboard_e_commerce'
                       onClick={this.hideSidebar}/>
          <SidebarLink title='Dashboard Fitness' icon='heart-pulse' new route='/dashboard_fitness'
                       onClick={this.hideSidebar}/>
          <SidebarLink title='Dashboard Crypto' icon='rocket' new route='/dashboard_crypto' onClick={this.hideSidebar}/>
          <SidebarCategory title='Layout' icon='layers'>
            <li className='sidebar__link' onClick={this.props.changeToLight}>
              <p className='sidebar__link-title'>Light Theme</p>
            </li>
            <li className='sidebar__link' onClick={this.props.changeToDark}>
              <p className='sidebar__link-title'>Dark Theme</p>
            </li>
          </SidebarCategory>
        </ul>
        <ul className='sidebar__block'>
          <SidebarCategory title='Account' icon='user'>
            <SidebarLink title='Email Confirmation' route='/account/email_confirmation' new/>
            <SidebarLink title='Lock Screen' route='/lock_screen'/>
            <SidebarLink title='Log In' route='/log_in'/>
            <SidebarLink title='Log In Photo' route='/log_in_photo'/>
            <SidebarLink title='Profile' route='/account/profile' onClick={this.hideSidebar}/>
            <SidebarLink title='Register' route='/register'/>
            <SidebarLink title='Register Photo' route='/register_photo'/>
          </SidebarCategory>
          <SidebarCategory title='E-commerce' icon='cart'>
            <SidebarLink title='Cart' route='/e-commerce/cart' onClick={this.hideSidebar}/>
            <SidebarLink title='Catalog' route='/e-commerce/catalog' onClick={this.hideSidebar}/>
            <SidebarLink title='Orders List' route='/e-commerce/orders_list' onClick={this.hideSidebar}/>
            <SidebarLink title='Payment' route='/e-commerce/payment' onClick={this.hideSidebar}/>
            <SidebarLink title='Product Edit' route='/e-commerce/product_edit' onClick={this.hideSidebar}/>
            <SidebarLink title='Product Page' route='/e-commerce/product_page' onClick={this.hideSidebar}/>
            <SidebarLink title='Products List' route='/e-commerce/products_list' onClick={this.hideSidebar}/>
          </SidebarCategory>
          <SidebarCategory title='Default Pages' icon='file-empty'>
            <SidebarLink title='404' route='/404'/>
            <SidebarLink title='Calendar' route='/default_pages/calendar' onClick={this.hideSidebar}/>
            <SidebarLink title='FAQs' route='/default_pages/faq' onClick={this.hideSidebar}/>
            <SidebarLink title='Gallery' route='/default_pages/gallery' onClick={this.hideSidebar}/>
            <SidebarLink title='Invoice template' route='/default_pages/invoice_template' onClick={this.hideSidebar}/>
            <SidebarLink title='Pricing Cards' route='/default_pages/pricing_cards' onClick={this.hideSidebar}/>
            <SidebarLink title='Project Summary' route='/default_pages/project_summary' onClick={this.hideSidebar}/>
            <SidebarLink title='Search Results' route='/default_pages/search_results' onClick={this.hideSidebar}/>
            <SidebarLink title='Text Editor' route='/default_pages/text_editor' onClick={this.hideSidebar}/>
          </SidebarCategory>
          <SidebarCategory title='Multilevel Menu ' icon='menu'>
            <SidebarLink title='Second Level Item'/>
            <SidebarCategory title='Second Level Item'>
              <SidebarLink title='Third Level Item'/>
              <SidebarLink title='Third Level Item'/>
            </SidebarCategory>
          </SidebarCategory>
        </ul>
        <ul className='sidebar__block'>
          <SidebarLink title='Log Out' icon='exit' route='/log_in'/>
        </ul>
        <ul className='sidebar__block'>
          <SidebarLink title='Documentation' icon='text-align-justify' route='/documentation/introduction'
                       onClick={this.hideSidebar}/>
        </ul>
      </div>
    )
  }
}

export default SidebarContent;