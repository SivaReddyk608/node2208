import React from 'react'
import SubHeader, {SubHeaderProps} from './SubHeader';

interface ViewProps {
    name: string;
    description: string;
    header: string;
    subHeader: SubHeaderProps;
    sections: Section[]
}

interface Section {
    name: string;
    header: string;
    columns: number;
    content: Field[];
}

interface Field {
    label: string;
    value: string;
}

export class View extends React.Component<ViewProps, undefined> {
    constructor(props: ViewProps){
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1>{this.props.name}</h1>
                    <p>{this.props.header}</p>
                </div>
                <SubHeader {...this.props.subHeader} />
            </div>
        );
    }
}
