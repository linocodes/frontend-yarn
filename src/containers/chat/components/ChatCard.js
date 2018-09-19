import React, {PureComponent} from 'react';
import {Card, Col} from 'reactstrap';
import Chat from './Chat';
import myContacts from './contacts';

export default class ChatCard extends PureComponent {
  render() {
    return (
      <Col md={12} lg={12}>
        <Card>
          <Chat contacts={myContacts}
                currentUser={{
                  avatar: process.env.PUBLIC_URL + '/img/ava.png',
                  name: 'Marcelo Lino',
                  userName: 'dragonKing'
                }}
          />
        </Card>
      </Col>
    )
  }
}