import React, { Component } from 'react';
import './App.css';
import Tabs from './tabsDir/Tabs';
import Footer from './components/Footer';
import SearchSec from './search/SearchSec';
import { Tab } from './tabsDir/types';
import { IdentifierType } from './types';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

interface AppProps {}

interface AppState {
  searchStr: string;
  idType: IdentifierType;
  security?: any; //TODO security contains template and data, need to define them in typescript.
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleIdTypeChange = this.handleIdTypeChange.bind(this);
    this.state = {
      searchStr: '',
      idType: IdentifierType.CUSIP,
    };
  }

  render() {
    return (
      <div className="page">
        <div className="cd-inline p-2 bg-secondary text-white text-center">
          <h3>Single Security Calculator</h3>
        </div>

        <div className="content">
          <div className="left-col">
            <SearchSec
              onSearchChange={this.handleSearchChange}
              onSearchSubmit={this.handleSearchSubmit}
              onIdTypeChange={this.handleIdTypeChange}
              idType={this.state.idType}
              searchStr={this.state.searchStr}
            />
          </div>
          <div className="right-col">
		  
            <Tabs tabs={this.getTabs()} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  handleSearchChange(e) {
    this.setState({ searchStr: e.target.value });
  }

  handleIdTypeChange(e) {
    this.setState({ idType: e.target.value });
  }

  handleSearchSubmit(e) {
    e.preventDefault();
    if (!this.state.searchStr.length) {
      return;
    }

    axios
      .get('/security', {
        //baseURL:"/", //TODO make this more robust.
        params: {
          identifierType: this.state.idType,
          id: this.state.searchStr,
        },
      })
      .then(response => {
        this.setState({ security: response.data });
      });
  }

  getTabs(): Tab[] {
    return [
      {
        id: 'IND_DATA',
        name: 'IND DATA',
        description: 'Indicative Data',
      },
      {
        id: 'PX_YIELD',
        name: 'Px / Yield',
        description: 'Pricing and Yield',
      },
      {
        id: 'CASHFLOW',
        name: 'Cashflows',
        description: 'Cashflow',
      },
      {
        id: 'VAR',
        name: 'VaR',
        description: 'Value at Risk',
      },
      {
        id: 'STRESS',
        name: 'Stress Test',
        description: 'Stress Tests',
      },
    ];
  }
}

export default App;
