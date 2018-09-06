import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import SearchSec from './search/SearchSec';
import Views from './components/ViewsComponent';
import { IdentifierType } from './types';
import { ViewData } from './types';
import axios from 'axios';
import './main.scss';
import 'font-awesome/css/font-awesome.min.css';

interface AppProps {}

interface AppState {
  searchStr: string;
  idType: IdentifierType;
  loadingclass: string;
  security?: ViewData;
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
      loadingclass: 'whenloaded',
    };
  }

  render() {
    const viewData = this.state.security;
    const hasViewData = !!viewData;
    const layout = hasViewData ? viewData.layout : null;
    const calculatorData = hasViewData ? viewData.data : null;
    return (
      <div>
        <div className={this.state.loadingclass}>
          <i className="fa fa-spinner fa-spin spin-size " />
          <h1>page is loading</h1>
        </div>
        <div className="container-fluid">
          <div className="row py-3 bg-dark">
            <div className="col-lg-12 text-center text-white">
              <h2>Single Security Calculator</h2>
            </div>
          </div>
          <div className="row pt-1 justify-content-center">
            <SearchSec
              onSearchChange={this.handleSearchChange}
              onSearchSubmit={this.handleSearchSubmit}
              onIdTypeChange={this.handleIdTypeChange}
              idType={this.state.idType}
              searchStr={this.state.searchStr}
            />
          </div>
          <div className="row">
            <div className="col-sm-12">
              <Views viewData={this.state.security} />
            </div>
          </div>
          <Footer />
        </div>
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
    this.setState({ loadingclass: 'whileloading' });

    axios
      .get('/security', {
        //baseURL:"/", //TODO make this more robust.
        params: {
          identifierType: this.state.idType,
          id: this.state.searchStr,
        },
        onDownloadProgress: progressEvent => {
          console.log('catching log');
          console.log(progressEvent);
          var progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          if (progress === 100) {
            console.log('100');
            this.setState({ loadingclass: 'whenloaded' });
          } else {
            console.log(progress);
          }
        },
      })
      .then(response => {
        this.setState({ loadingclass: 'whenloaded' });
        const viewData = response.data.data;
        const calculatorData = viewData.data;
        calculatorData.originSecurity = calculatorData.security;
        calculatorData.security = calculatorData.security.attributes;
        this.setState({ security: viewData });
      });
  }
}

export default App;
