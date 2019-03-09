import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./components/components/CommentDetail/CommentDetail";
import ApprovalCard from "./components/components/ApprovalCard/ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          imageSource={faker.image.avatar()}
          author={faker.name.firstName()}
          timeAgo="Today at 4:00PM"
          text="some text"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          imageSource={faker.image.avatar()}
          author={faker.name.firstName()}
          timeAgo="Today at 9:00AM"
          text="some more text"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          imageSource={faker.image.avatar()}
          author={faker.name.firstName()}
          timeAgo="Yesterday at 6:00PM"
          text="some text yet again"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
