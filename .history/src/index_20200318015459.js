import React from 'react';
import ReactDOM from 'react-dom';
//import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" timeAgo="Yesterday" commentText="Yo this is Rad!"/>
            <CommentDetail author="Alex" timeAgo="A Month Ago" commentText="Nice Blog Man"/>
            <CommentDetail author="Jane" timeAgo="2 weeks Ago" commentText="Do a flip!!!"/>
        </div>
    );
};  


ReactDOM.render(<App />, document.querySelector('#root'));
