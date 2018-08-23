import React, { Component } from 'react';
import './Tabs.css';

import {Tab} from './types';
import TabView from './TabView';

interface TabsProps {
  tabs: Tab[]
}

interface TabsState {
  activeTabId: string;
}

class Tabs extends Component<TabsProps, TabsState> {
  constructor(props: TabsProps) {
    super(props);

    this.state={ activeTabId: props.tabs.length > 0 ? props.tabs[0].id : ""};

    this.openTab = this.openTab.bind(this);  
    this.renderTabButtons = this.renderTabButtons.bind(this);
    this.renderTabContent = this.renderTabContent.bind(this);
  }
  
  openTab(tabId: string){
    console.log(tabId);
    this.setState({activeTabId: tabId});
  }

  renderTabButtons(tab: Tab){
	  var style = this.state.activeTabId == tab.id ?  "nav-item nav-link tabselected " : "nav-item nav-link text-secondary";
  var styleh=this.state.activeTabId == tab.id ?  {color: "#8A2BE2"} : {color : "#778899"};
    return (
	 <a key={tab.id} className={style} id={tab.id} onClick={()=>this.openTab(tab.id)} title={tab.description}><h6 style={styleh}>{tab.name}</h6></a>
      //<button key={tab.id} className="bg-primary"  id={tab.id} onClick={()=>this.openTab(tab.id)} title={tab.description}>{tab.name}</button>
    );
  }

  renderTabContent(tab: Tab){
    var style = this.state.activeTabId == tab.id ? {display: "block"} : {display: "none"};
    return (
      <div key={tab.id} id={tab.id} className="" style={style}>
        <TabView tab={tab}/>
      </div> 
    );
  }

  render() {
    return (
      <div className="tab">
	  <div className="tabheader ">
       <nav class="nav nav-pills nav-justified">
          {this.props.tabs.map(this.renderTabButtons)}
        </nav>
		</div>
		<div className="tabcontent" >
        {this.props.tabs.map(this.renderTabContent)}
		</div>
      </div>
    );
  }
}

export default Tabs;
