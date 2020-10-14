import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Image, Grid, Dropdown, List, Input, Button, Icon } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item href="#">
              <Image className="menulogo"
                  src="https://cdn.shopify.com/s/files/1/2166/8231/files/TeddyFreshlogo_500_color_180x.png?v=1559171259"/>
            </Menu.Item>
            <Menu.Item position="right" href="#">
              <b>Account</b>
            </Menu.Item>
            <Menu.Item href="#">
              <b>Search</b>
            </Menu.Item>
            <Menu.Item href="#">
              <b>Cart (0)</b>
            </Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="midmenu">
          <Grid container centered>
            <Menu.Item href="#">
              <b>New Arrivals</b>
            </Menu.Item>
            <Menu.Item href="#">
              <b>TeddyFresh X Spongebob</b>
            </Menu.Item>
            <Dropdown item text={<b>Apparel</b>}>
              <Dropdown.Menu>
                <Dropdown.Item>Hoodies</Dropdown.Item>
                <Dropdown.Item>T-Shirts</Dropdown.Item>
                <Dropdown.Item>Pants</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text={<b>Accessories</b>}>
              <Dropdown.Menu>
                <Dropdown.Item>Hats & Beanies</Dropdown.Item>
                <Dropdown.Item>Bags</Dropdown.Item>
                <Dropdown.Item>Jewelry</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item href='#'>
              <b>Gift Card</b>
            </Menu.Item>
            <Menu.Item href='#'>
              <b>Sale</b>
            </Menu.Item>
            <Dropdown item text={<b>Artist Spotlight</b>}>
              <Dropdown.Menu>
                <Dropdown.Item>Dan Isaac Bortz</Dropdown.Item>
                <Dropdown.Item>Hila Klein</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Grid>
        </Menu>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Image fluid
               src="https://cdn.shopify.com/s/files/1/2166/8231/files/Teddy_Fresh_X_Dan_Bortz_homepage_banner_1800x.jpg?v=1600966595"/>
    )
  }
}

class ThreeImages extends React.Component {
  render() {
    return (
        <Grid columns={3}>
          <Grid.Column className="firstcol" href="#">
            <h4>NEW ARRIVALS</h4>
          </Grid.Column>
          <Grid.Column className="secondcol" href="#">
            <h4>SWEATERS & HOODIES</h4>
          </Grid.Column>
          <Grid.Column className="thirdcol" href="#">
            <h4>T-SHIRTS</h4>
          </Grid.Column>
        </Grid>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div className="footer">
          <Grid>
            <Grid.Column width={5}>
              Join Our Newsletter
              <List relaxed>
                <List.Item>Get Notifications About New Arrivals And Restocked Items!</List.Item>
                <List.Item><Input fluid placeholder="Enter your email address"/></List.Item>
                <List.Item><Button color="black">SUBSCRIBE</Button></List.Item>
              </List>
              <List.Item><Image className="bear" src="https://cdn.shopify.com/s/files/1/2166/8231/files/TF_logo.png?v=1581132641"/></List.Item>
              <List.Item href="#" className="copyright">T E D D Y F R E S H © 2 0 2 0</List.Item>
            </Grid.Column>
            <Grid.Column width={3}>
              Main Menu
              <List relaxed>
                <List.Item><a href="#">Shop</a></List.Item>
                <List.Item><a href="#">New Arrivals</a></List.Item>
                <List.Item><a href="#">Accessories</a></List.Item>
                <List.Item><a href="#">Lookbook</a></List.Item>
                <List.Item><a href="#">Gift Cards</a></List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              Help
              <List relaxed>
                <List.Item><a href="#">FAQ & Shipping/Returns</a></List.Item>
                <List.Item><a href="#">Private Policy</a></List.Item>
                <List.Item><a href="#">Accessibility</a></List.Item>
                <List.Item><a href="#">Wholesale Inquiries</a></List.Item>
                <List.Item><a href="#">Careers</a></List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              <Image className="logo" src="https://cdn.shopify.com/s/files/1/2166/8231/files/TeddyFreshlogo_500_white_500x.png?v=1559164516"
                     alt="logo"/>
              <a href="#" className="copyright">SUPPORT@TEDDYFRESH.COM</a>
              <List horizontal relaxed>
                <List.Item href="#"><Icon name="facebook f"/></List.Item>
                <List.Item href="#"><Icon name="twitter"/></List.Item>
                <List.Item href="#"><Icon name="instagram"/></List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </div>
    )
  }
}

class TeddyFresh extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleMenu/>
          <FullWidthImage/>
          <ThreeImages/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<TeddyFresh/>, document.getElementById('root'));
