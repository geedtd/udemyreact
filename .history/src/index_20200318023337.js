import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                <h4>Warning</h4>
                Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail 
                author="Sam" 
                timeAgo="Yesterday" 
                commentText="Yo this is Rad!" 
                avatarImage={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                author="Alex" 
                timeAgo="A Month Ago" 
                commentText="Nice Blog Man" 
                avatarImage={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
            author="Jane" 
            timeAgo="2 weeks Ago" 
            commentText="Do a flip!!!" 
            avatarImage={faker.image.avatar()} 
            />
            </ApprovalCard>
        </div>
    );
};  


ReactDOM.render(<App />, document.querySelector('#root'));
