import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './components/components/CommentDetail/CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail />
    </div>  
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
