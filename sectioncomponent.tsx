import React from 'react';
import { CalculatorData, Section } from '../types';
import parse from 'json-templates';
import Header from './HeaderComponent';
import './styles/cardstyle.css';

interface SectionProps {
  section: Section;
  data: CalculatorData;
}

export default class SectionComponent extends React.Component<
  SectionProps,
  undefined
> {
  constructor(props: SectionProps) {
    super(props);
  }

  render() {
    return (
      <div className="card cardstyle">
        <div className="card-title cardheadstyle bg-warning">
          <Header header={this.props.section.header} data={this.props.data} />
          <Header
            header={this.props.section.subHeader}
            data={this.props.data}
          />
        </div>
        <div className="card-body text-center">
      <table class="table table-bordered">
				<tbody>
                    {this.renderContent()}
				</tbody>
				</table>
      
      </div>
      </div>
    );
  }

  renderContent() {
    if (!this.props.section.content) {
      return null;
    }

    const template = parse(this.props.section.content);
    const content = template(this.props.data);
    return content.map((row, index) => {
      return (
        <div key={index}>
                        <tr><td>{row.label}:</td>
                        <td>{row.field}</td></tr>
                        </div>);
      );
    });
  }
}
