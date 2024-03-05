import React, { useState } from 'react';
import _ from 'lodash';
import AuthorCard from './components/AuthorCard/AuthorCard';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState('');
  
  const getData = async (name) => {
    try{
      setIsLoading(true);
      const data = await fetch(`https://openlibrary.org/search/authors.json?q=${name}&limit=10`);
      const authorData = await data.json();
      setData(authorData.docs);
      setIsLoading(false);
    }catch(error){
      console.log(error);
      setIsLoading(false);
    }
  }
  
  const debouncedSearch = _.debounce((value) => {
    getData(value);
  } , 1000);
  
  const onInputChange = (event) => {
    console.log(event.target.value);
    debouncedSearch(event.target.value)
  }

  const authorSelectHandler = (name) => {
    console.log(name);
    setSelectedAuthor(name);
    setData([]);
  }

  return (
    <div className="App">
      <div className='selected-author'>Selected Author: {selectedAuthor}</div>
      <input onChange={onInputChange}></input>
      {isLoading && <div>Fetching...</div> }
      {data.length ? data.map((author,id) => {
        return (
          <div key={id} className='author'>
            <AuthorCard 
              name={author?.name} 
              totalBooks={author?.work_count} 
              work={author?.top_work}
              onChange={(name) => authorSelectHandler(name)}
            ></AuthorCard>
          </div>
        )
      }) : ''}
    </div>
  );
}

export default App;
