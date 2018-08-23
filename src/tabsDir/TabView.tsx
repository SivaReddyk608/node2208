import React from 'react'
import { Tab } from './types';

interface TabViewProps {
    tab: Tab;
}

class TabView extends React.Component<TabViewProps> {
    render() {
        return (
            <h5>{this.props.tab.name} Tabs</h5>
			
				        );
    }
}

export default TabView;
