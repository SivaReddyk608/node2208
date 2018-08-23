import React, { Component } from 'react';
import './Search.css';
import InputForm from './InputForm';
import SearchResult from './SearchResult';

export interface SearchSecProps{
  onSearchChange(event: React.ChangeEvent<HTMLInputElement>): void;
  onSearchSubmit(event: React.FormEvent<HTMLFormElement>): void;
  onIdTypeChange(event: React.FormEvent<HTMLSelectElement>): void;
  idType: string;
  searchStr: string;
}

class SearchSec extends Component<SearchSecProps> {
  render() {
    return (
	<div>
	<InputForm  {...this.props}/>
	<SearchResult/>
	</div>
	
    );
  }
}

export default SearchSec;
