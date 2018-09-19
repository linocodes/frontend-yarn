import React, {PureComponent} from 'react';
import {Card, CardBody, Col, Button} from 'reactstrap';
import MessageTextOutlineIcon from 'mdi-react/MessageTextOutlineIcon';

const Ava = process.env.PUBLIC_URL + '/img/12.png';

export default class ProfileMain extends PureComponent {
  render() {
    return (
      <Col md={12} lg={12} xl={12}>
        <Card>
          <CardBody className='profile__card'>





            <div className='profile__information'>
              <div className='profile__avatar'>
                <img src={Ava} alt='avatar'/>
              </div>
              <div className='profile__data'>
                <p className='profile__name'>Larry Boom</p>
                <p className='profile__work'>Senior Account Manager</p>
                <p className='profile__contact'>mailmethisletter@gmail.com</p>
                <p className='profile__contact'>+23-123-743-23-21</p>
                <Button color='primary' className='icon profile__btn'><p><MessageTextOutlineIcon/> Message</p></Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    )
  }
}