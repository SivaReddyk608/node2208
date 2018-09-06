import React from 'react'
import { Tab } from './types';

interface TabViewProps {
    tab: Tab;
}

export default class TabView extends React.Component<TabViewProps> {
    constructor(props: TabViewProps) {
        super(props);
    }

    render() {
      return this.props.tab.content;
    }
}
