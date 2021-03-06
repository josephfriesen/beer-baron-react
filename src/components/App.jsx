import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
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
      redirect: '',
      kegs: {
        '4487692e-4934-4dc2-9627-fff21217060a': {
          'name': 'Pabst Blue Ribbon',
          'price': '3.00',
          'brewery': 'Pabst Brewing Company',
          'abv': '0.0474',
          'style': 'American Adjunct Lager',
          'pintsLeft': 41,
          'img': './images/pbr.jpg'
        },
        '6154b8f2-7648-4701-a6f7-311efe727349': {
          'name': 'Tecate',
          'price': '3.00',
          'brewery': 'Cervecería Cuauhtémoc Moctezuma, S.A. de C.V.',
          'abv': '0.0450',
          'style': 'American Adjunct Lager',
          'pintsLeft': 4,
          'img': './images/tecate.jpg'
        },
        '0b34fc7d-1d90-48ff-acfe-115a20bfcc44': {
          'name': 'Olde English 800',
          'price': '1.50',
          'brewery': 'Miller Brewing Company',
          'abv': '0.0590',
          'style': 'American Malt Liquor',
          'pintsLeft': 16,
          'img': './images/oe.jpg'
        },
        'c6d4f161-0e0f-4494-a58d-ae3434f3ace1': {
          'name': 'Hurricane High Gravity Malt Liquor',
          'price': '1.00',
          'brewery': 'Anheuser-Busch',
          'abv': '0.0810',
          'style': 'American Malt Liquor',
          'pintsLeft': 44,
          'img': './images/hurricane.jpg'
        },
        'f993f629-ec5b-4c56-b1ad-e376af4e8514': {
          'name': 'King Cobra Premium Malt Liquor',
          'price': '1.50',
          'brewery': 'Anheuser-Busch',
          'abv': '0.0600',
          'style': 'American Malt Liquor',
          'pintsLeft': 99,
          'img': './images/cobra.jpg'
        },
        'd25d1044-2a45-402a-9e63-434b0b1e5dd2': {
          'name': 'Rocket Fuel Malt Liquor',
          'price': '2.00',
          'brewery': 'Northrop-Grumman Corporation',
          'abv': '0.0874',
          'style': 'American Malt Liquor',
          'pintsLeft': 6,
          'img': './images/rocketfuel.jpg'
        },
        'd50f5b06-a64e-4535-9ef8-e9592cb1b1bc': {
          'name': 'Beer Baron\'s Disgusting Ultrabitter Hopsplosion',
          'price': '6.50',
          'brewery': 'Beer Baron Brewing',
          'abv': '0.0680',
          'style': 'Imperial IPA',
          'pintsLeft': 124,
          'img': './images/ipa.png'
        },
        'ee612386-b192-40ed-bece-18c6df993824': {
          'name': 'Steel Reserve 211 High Gravity',
          'price': '2.00',
          'brewery': 'Steel Brewing Company',
          'abv': '0.0810',
          'style': 'American Malt Liquor',
          'pintsLeft': 0,
          'img': './images/steelreserve.jpg'
        }
      }
    };
    this.handleViewChange = this.handleViewChange.bind(this);
    this.setActiveKeg = this.setActiveKeg.bind(this);
    this.handleAddingNewKeg = this.handleAddingNewKeg.bind(this);
    this.handleSellingAPint = this.handleSellingAPint.bind(this);
    this.handleKegRestock = this.handleKegRestock.bind(this);
    this.handleDeletingAKeg = this.handleDeletingAKeg.bind(this);
    this.handleEditingAKeg = this.handleEditingAKeg.bind(this);
  }

  componentDidMount() {
    if (this.props.location.pathname == '/employee') {
      this.setState({employeeView: true});
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const oldView = prevState.employeeView;
    const newView = this.state.employeeView;
    if (oldView != newView) {
      if (newView) {
        this.props.history.push('/employee');
      }
      else {
        this.props.history.push('/');
      }
    }
  }

  handleViewChange() {
    const newView = !this.state.employeeView;
    console.log('SWITCH ', newView, this.state.employeeView);
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

  handleSellingAPint() {
    const kegId = this.state.activeKeg; // copy active keg id
    let stateDupe = Object.assign({}, this.state); // copy state
    stateDupe.kegs = Object.assign({}, this.state.kegs); // copy kegs
    stateDupe.kegs[kegId] = Object.assign({}, this.state.kegs[kegId]); // copy keg being edited
    stateDupe.kegs[kegId].pintsLeft -= 1; // Edit property
    this.setState(stateDupe); // set state
  }

  handleKegRestock() {
    const kegId = this.state.activeKeg;
    let stateDupe = Object.assign({}, this.state);
    stateDupe.kegs = Object.assign({}, this.state.kegs);
    stateDupe.kegs[kegId] = Object.assign({}, this.state.kegs[kegId]);
    stateDupe.kegs[kegId].pintsLeft = 124;
    this.setState(stateDupe);
  }

  handleDeletingAKeg() {
    const kegId = this.state.activeKeg;
    let stateDupe = Object.assign({}, this.state, {
      activeKeg: null
    });
    stateDupe.kegs = Object.assign({}, this.state.kegs);
    delete stateDupe.kegs[kegId];
    this.setState(stateDupe);
  }

  handleEditingAKeg(editedKeg) {
    const kegId = this.state.activeKeg;
    let stateDupe = Object.assign({}, this.state);
    stateDupe.kegs = Object.assign({}, this.state.kegs);
    stateDupe.kegs[kegId] = editedKeg;
    this.setState(stateDupe);
  }

  render() {
    let renderKegDetailAfterSelection;
    if (this.state.activeKeg) {
      renderKegDetailAfterSelection = <KegDetail
        keg={this.state.kegs[this.state.activeKeg]}
        kegId={this.state.activeKeg}
        employeeView={this.state.employeeView}
        sellAPint={this.handleSellingAPint}
        restock={this.handleKegRestock}
        removeKeg={this.handleDeletingAKeg}
        onKegEditSubmission={this.handleEditingAKeg} />;
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
            currentPath={this.props.location.pathname}
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
              <Route path='/employee' render={() =>
                <EmployeeView
                  kegs={this.state.kegs}
                  onActiveKegChange={this.setActiveKeg}
                  onNewKegSubmission={this.handleAddingNewKeg} />} />
            </Switch>
          </div>
          <div className='flexbox-panel'>
            {renderKegDetailAfterSelection}
          </div>
        </div>
      </div>
    );
  }
}

App.PropTypes = {
  history: PropTypes.object // still says I'm missing this proptype? huh?!
};

export default withRouter(App);
