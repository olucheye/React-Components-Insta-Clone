import React from "react";
import "./App.css";
import PostsPage from './components/PostsContainer/PostsPage';
import SearchBar from './components/SearchBar/SearchBarContainer';
// import the PostsPage and SearchBar and add them to the App


const App = () => {

  return (
    <div className="App">
       {/* major components needed on design */}
       <SearchBar />
       <PostsPage />
    </div>
  );
};

export default App;
