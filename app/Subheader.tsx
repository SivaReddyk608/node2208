import React from 'react'

export interface SubHeaderProps {
    title: string[];
    justification : 'center' | 'end' | 'around' |'between'; 
}

class SubHeader extends React.Component<SubHeaderProps, undefined> {
    constructor(props){
        super(props)
    }

    render() {
        var className = "row justify-content-" + this.props.justification; 
        return (
            <div className={className}>
                {this.props.title.map(value => {
                    return (<div className="col">{value}</div>)
                })}
            </div>
        );
    }
}

export default SubHeader
