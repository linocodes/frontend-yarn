import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Topbar from './topbar/Topbar';
import TopbarWithNavigation from './topbar_with_navigation/TopbarWithNavigation';
import Sidebar from './sidebar/Sidebar';
import SidebarMobile from './topbar_with_navigation/sidebar_mobile/SidebarMobile';
//import Customizer from './customizer/Customizer';
//import NotificationSystem from 'rc-notification';
//import {BasicNotification} from '../../components/Notification';
import {changeMobileSidebarVisibility, changeSidebarVisibility} from '../../redux/actions/sidebarActions';
import {changeThemeToDark, changeThemeToLight} from '../../redux/actions/themeActions';
import {changeBorderRadius, toggleBoxShadow, toggleTopNavigation} from '../../redux/actions/customizerActions';

//let notification = null;

/*
const showNotification = () => {
  notification.notice({
    content: <BasicNotification title='👋 Welcome to the EasyDev!'
                                message='You have successfully registered in the EasyDev. Now you can start to explore the dashboard
                interface with a bunch of components and applications. Enjoy!'/>,
    duration: 5,
    closable: true,
    style: {top: 0, left: 'calc(100vw - 100%)'},
    className: 'right-up'
  });
};
*/

class Layout extends Component {

  componentDidMount() {
    //NotificationSystem.newInstance({}, (n) => notification = n);
    //setTimeout(() => showNotification(), 700);
  };

  componentWillUnmount() {
    //notification.destroy();
  };

  changeSidebarVisibility = () => {
    this.props.dispatch(changeSidebarVisibility());
  };

  changeMobileSidebarVisibility = () => {
    this.props.dispatch(changeMobileSidebarVisibility());
  };

  changeToDark = () => {
    this.props.dispatch(changeThemeToDark());
  };

  changeToLight = () => {
    this.props.dispatch(changeThemeToLight());
  };

  toggleTopNavigation = () => {
    this.props.dispatch(toggleTopNavigation());
  };

  changeBorderRadius = () => {
    this.props.dispatch(changeBorderRadius());
  };

  toggleBoxShadow = () => {
    this.props.dispatch(toggleBoxShadow());
  };

  render() {
    let {sidebar} = this.props;

    return (
      <div>
        {this.props.customizer.topNavigation ?
          <TopbarWithNavigation
            changeMobileSidebarVisibility={this.changeMobileSidebarVisibility}
          /> :
          <Topbar
            changeMobileSidebarVisibility={this.changeMobileSidebarVisibility}
            changeSidebarVisibility={this.changeSidebarVisibility}
          />
        }
        {this.props.customizer.topNavigation ?
          <SidebarMobile
            sidebar={sidebar}
            changeToDark={this.changeToDark}
            changeToLight={this.changeToLight}
            changeMobileSidebarVisibility={this.changeMobileSidebarVisibility}
          /> :
          <Sidebar
            sidebar={sidebar}
            changeToDark={this.changeToDark}
            changeToLight={this.changeToLight}
            changeMobileSidebarVisibility={this.changeMobileSidebarVisibility}
          />
        }
      </div>
    )
  }
}

export default withRouter(connect(state => {
  return {
    customizer: state.customizer,
    sidebar: state.sidebar,
    theme: state.theme
  }
})(Layout));