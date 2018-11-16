import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { v4 } from 'uuid';
import TopBar from './TopBar';
import Banner from './Banner';
import EmployeeView from './EmployeeView';
import PatronView from './PatronView';
import KegDetail from './KegDetail';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      employeeView: false,
      activeKeg: null,
      // redirect: '',
      kegs: {
        '4487692e-4934-4dc2-9627-fff21217060a': {
          'name': 'Pabst Blue Ribbon',
          'price': '3.00',
          'brewery': 'Pabst Brewing Company',
          'abv': '0.0474',
          'style': 'American Adjunct Lager',
          'pintsLeft': 41,
          'img': 'https://images.heb.com/is/image/HEBGrocery/000942934-1?id=ZkuRh0&fmt=jpg&fit=constrain,1&wid=296&hei=296'
        },
        '6154b8f2-7648-4701-a6f7-311efe727349': {
          'name': 'Tecate',
          'price': '3.00',
          'brewery': 'Cervecería Cuauhtémoc Moctezuma, S.A. de C.V.',
          'abv': '0.0450',
          'style': 'American Adjunct Lager',
          'pintsLeft': 4,
          'img': 'https://cdn.shopify.com/s/files/1/2017/0991/products/Tecate_Beer_24_oz_Can_800x.jpeg?v=1513468824'
        },
        '0b34fc7d-1d90-48ff-acfe-115a20bfcc44': {
          'name': 'Olde English 800',
          'price': '1.50',
          'brewery': 'Miller Brewing Company',
          'abv': '0.0590',
          'style': 'American Malt Liquor',
          'pintsLeft': 16,
          'img': 'https://images.heb.com/is/image/HEBGrocery/000112994-1?id=gvXRV2&fmt=jpg&fit=constrain,1&wid=296&hei=296'
        },
        'c6d4f161-0e0f-4494-a58d-ae3434f3ace1': {
          'name': 'Hurricane High Gravity Malt Liquor',
          'price': '1.00',
          'brewery': 'Anheuser-Busch',
          'abv': '0.0810',
          'style': 'American Malt Liquor',
          'pintsLeft': 44,
          'img': 'https://images.heb.com/is/image/HEBGrocery/prd-small/hurricane-high-gravity-malt-liquor-bottle-001006516.jpg'
        },
        'f993f629-ec5b-4c56-b1ad-e376af4e8514': {
          'name': 'King Cobra Premium Malt Liquor',
          'price': '1.50',
          'brewery': 'Anheuser-Busch',
          'abv': '0.0600',
          'style': 'American Malt Liquor',
          'pintsLeft': 99,
          'img': 'https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_9c4b5a93-e016-4a81-a836-b72a81a658f1.JPG'
        },
        'd25d1044-2a45-402a-9e63-434b0b1e5dd2': {
          'name': 'Rocket Fuel Malt Liquor',
          'price': '2.00',
          'brewery': 'Northrop-Grumman Corporation',
          'abv': '0.0874',
          'style': 'American Malt Liquor',
          'pintsLeft': 6,
          'img': 'https://www.yourprops.com/movieprops/default/4b5bb6b8aa7fb/NewsRadio-Rocket-Fuel-Malt-Liquor-Prop-from-NewsRadio-1.jpg'
        },
        'd50f5b06-a64e-4535-9ef8-e9592cb1b1bc': {
          'name': 'Beer Baron\'s Disgusting Ultrabitter Hopsplosion',
          'price': '6.50',
          'brewery': 'Beer Baron Brewing',
          'abv': '0.0680',
          'style': 'Imperial IPA',
          'pintsLeft': 124,
          'img': 'https://static.shoplightspeed.com/shops/609604/files/003884483/156x230x1/sierra-nevada-hoptimum-imperial-ipa-12oz-sgl.jpg'
        },
        'ee612386-b192-40ed-bece-18c6df993824': {
          'name': 'Steel Reserve 211 High Gravity',
          'price': '2.00',
          'brewery': 'Steel Brewing Company',
          'abv': '0.0810',
          'style': 'American Malt Liquor',
          'pintsLeft': 0,
          'img': 'https://images.heb.com/is/image/HEBGrocery/000683820'
        }
      }
    };
    this.handleViewChange = this.handleViewChange.bind(this);
    this.setActiveKeg = this.setActiveKeg.bind(this);
    this.handleAddingNewKeg = this.handleAddingNewKeg.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    // TODO: Move the Redirect component into state, and have it render if and only if this.state.employeeView has been updated, otherwise have this.state.redirect = ''.
    // BAD! Infinite loop!
    // if (prevState.employeeView != this.state.employeeView) {
    //   if (this.state.employeeView) {
    //     this.setState({redirect: `<Redirect to='/employee' />`});
    //   } else {
    //     this.setState({redirect: `<Redirect to='/' />`});
    //   }
    // } else {
    //   this.setState({redirect: ''});
    // }
  }

  handleViewChange() {
    const newView = !this.state.employeeView;
    this.setState({employeeView: newView});
  }

  setActiveKeg(kegId) {
    this.setState({activeKeg: kegId});
  }
  
  handleAddingNewKeg(newKeg) {
    const kegId = v4();
    const newKegs = Object.assign({}, this.state.kegs, {
      [kegId]: newKeg
    });
    this.setState({kegs: newKegs});
  }

  render() {
    let renderKegDetailAfterSelection;
    if (this.state.activeKeg) {
      renderKegDetailAfterSelection = <KegDetail
        keg={this.state.kegs[this.state.activeKeg]}
        kegId={this.state.activeKeg} />;
    } else {
      renderKegDetailAfterSelection = <p></p>;
    }
    return (
      <div>
        <style jsx>{`
            .banner {
              text-align: center;
            }
            .body-flexbox {
              display: flex;
              width: calc(100% - 40px);
              flex-direction: row;
              justify-content: space-between;
              padding: 0 20px;
            }
            .flexbox-panel {
              width: 50%;
            }
          `}</style>
        <div>
          <TopBar
            onViewChange={this.handleViewChange}
            employeeView={this.state.employeeView} />
        </div>
        <div className='banner'>
          <Banner />
        </div>
        <div className='body-flexbox'>
          <div className='flexbox-panel'>
            <Switch>
              <Route exact path='/' render={() =>
                <PatronView
                  kegs={this.state.kegs}
                  onActiveKegChange={this.setActiveKeg} />} />
              <Route path='/employee' render={(props) =>
                <EmployeeView
                  kegs={this.state.kegs}
                  onActiveKegChange={this.setActiveKeg}
                  routerPath={props.location.pathname}
                  onNewKegSubmission={this.handleAddingNewKeg} />} />
            </Switch>
            {this.state.employeeView ? <Redirect to='/employee' /> : <Redirect to='/' />}
          </div>
          <div className='flexbox-panel'>
            {renderKegDetailAfterSelection}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
