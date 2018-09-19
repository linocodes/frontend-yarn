import React, {PureComponent} from 'react';
import {Button} from 'reactstrap';
import MailBox from './MailBox';
import ComposeEmail from './ComposeEmail';
import PropTypes from 'prop-types';
import Email from './Email';

import showResults from '../../form/basic_form/components/Show';

import PenIcon from 'mdi-react/PenIcon';
import InboxArrowDownIcon from 'mdi-react/InboxArrowDownIcon';
import EmailIcon from 'mdi-react/EmailIcon';
import TooltipEditIcon from 'mdi-react/TooltipEditIcon';
import StarIcon from 'mdi-react/StarIcon';
import DeleteIcon from 'mdi-react/DeleteIcon';
import MenuIcon from 'mdi-react/MenuIcon';
import InboxTable from "./InboxTable";

const mailboxes = [
  {icon: <InboxArrowDownIcon/>, title: 'Inbox', amount: 21},
  {icon: <EmailIcon/>, title: 'Sent Mail'},
  {icon: <TooltipEditIcon/>, title: 'Drafts', amount: 2},
  {icon: <StarIcon/>, title: 'Tagged'},
  {icon: <DeleteIcon/>, title: 'Deleted'}
];

const labels = [
  {color: 'green', title: 'Freelance'},
  {color: 'red', title: 'Work'},
  {color: 'blue', title: 'Travel'},
  {color: 'yellow', title: 'Clients'}
];

const emailExample = [{
  ava: process.env.PUBLIC_URL + '/img/24_mail_ava.png',
  name: 'Nikolay Morris',
  email: 'mailexample@mail.com',
  favorite: true,
  time: 'July 12 11:30 PM',
  body: <div><h4><b>Congratulations! You are win!</b></h4><p>Knowledge nay estimable questions repulsive daughters boy.
    Solicitude gay way unaffected expression for. His mistress ladyship required off horrible disposed rejoiced.
    Unpleasing pianoforte unreserved as oh he unpleasant no inquietude insipidity. Advantages can discretion possession
    add favourable cultivated admiration far. Why rather assure how esteem end hunted nearer and before. By an truth
    after heard going early given he. Charmed to it excited females whether at examine. Him abilities suffering may are
    yet dependent. Barton did feebly change man she afford square add. Want eyes by neat so just must. Past draw tall up
    face show rent oh mr.</p><p>Best regards,</p><p>Nikolay</p></div>,
  attachment: [
    {name: 'Project Design.psd', size: '11Mb', link: './fav.ico'},
    {name: 'Report.txt', size: '1Mb', link: './fav.ico'}
  ]
}];

export default class Inbox extends PureComponent {
  static propTypes = {
    emails: PropTypes.array
  };
  
  constructor() {
    super();
    this.state = {
      compose: false,
      email: false,
      mailbox: 0,
      label: 0,
      openMailboxes: false
    };
  }

  onCompose = (e) => {
    e.preventDefault();
    this.setState({compose: true, openMailboxes: false, email: false});
  };
  
  onMailBox = (mailbox, e) => {
    e.preventDefault();
    this.setState({mailbox: mailbox, compose: false, email: false, openMailboxes: false})
  };
  
  onLabel = (label, e) => {
    e.preventDefault();
    this.setState({label: label, compose: false, email: false, openMailboxes: false})
  };
  
  onLetter = (e) => {
    e.preventDefault();
    this.setState({email: true})
  };
  
  onOpenMailboxes = () => {
    this.setState({openMailboxes: !this.state.openMailboxes});
  };
  
  render() {
    let {compose, openMailboxes, email, mailbox, label} = this.state;

    return (
      <div className={`inbox${openMailboxes ? ' inbox--show-mailboxes' : ''}`}>
        <div className='inbox__mailbox-list'>
          <Button color='primary' className='icon inbox__mailbox-list-btn' size='sm'
                  onClick={this.onCompose}>
            <PenIcon/>Compose
          </Button>
          {mailboxes.map((m, i) =>
            <a key={i} onClick={(e) => this.onMailBox(i, e)}>
              <MailBox title={m.title} amount={m.amount} selected={i === mailbox}>
                {m.icon}
              </MailBox>
            </a>
          )}
          <p className='inbox__labels'>Labels</p>
          {labels.map((l, i) =>
            <span key={i} onClick={(e) => this.onLabel(i, e)}
               className={`inbox__label${label === i ? ' active' : ''}`}>
              <span className={`inbox__label-color inbox__label-color--${l.color}`}/>{l.title}
            </span>
          )}
        </div>
        <div className='inbox__container'>
          <div className={`inbox__topbar${email ? ' inbox__topbar--hide' : ''}`}>
            <button className='inbox__topbar-button' onClick={this.onOpenMailboxes}>
              <MenuIcon className='inbox__topbar-button-icon'/>
            </button>
          </div>
          {!compose ?
            <div>
              {email ?
                <Email email={emailExample[0]} onReply={this.onCompose} onSubmit
                       onBack={(e) => this.onMailBox(mailbox, e)}/>
                :
                <InboxTable emails={this.props.emails} onLetter={this.onLetter}/>
              }
            </div>
            :
            <ComposeEmail onSubmit={showResults}/>}
        </div>
      </div>
    )
  }
}