import React from 'react';
import ReactDOM from 'react-dom';
//import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" timeAgo="Yesterday" />
            <CommentDetail author="Alex" timeAgo="A Month Ago"/>
            <CommentDetail author="Jane" timeAgo="2 weeks Ago"/>
        </div>
    );
};  


ReactDOM.render(<App />, document.querySelector('#root'));
