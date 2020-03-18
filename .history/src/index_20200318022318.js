import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                author="Sam" 
                timeAgo="Yesterday" 
                commentText="Yo this is Rad!" 
                avatarImage={faker.image.avatar()}
                />
            </ApprovalCard>
            <CommentDetail 
            author="Alex" 
            timeAgo="A Month Ago" 
            commentText="Nice Blog Man" 
            avatarImage={faker.image.avatar()}
            />
            <CommentDetail 
            author="Jane" 
            timeAgo="2 weeks Ago" 
            commentText="Do a flip!!!" 
            avatarImage={faker.image.avatar()} 
            />
        </div>
    );
};  


ReactDOM.render(<App />, document.querySelector('#root'));
