import * as React from "react";

export interface HelloProps {
    message: string
}

class Hello extends React.Component<HelloProps, undefined> {
    render() {
        return (
            <div>
                {this.props.message}
            </div>
        );
    }
}
export default Hello;
