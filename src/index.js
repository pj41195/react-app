import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
const API_KEY  = 'AIzaSyA0KvlSi74hOPJFcrD864RU7wyMO7iVxok';

const App = () => {
return (
<div>
     <SearchBar />
</div> );
}

ReactDOM.render(<App />, document.querySelector('.container'));