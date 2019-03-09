import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./components/components/CommentDetail/CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        imageSource={faker.image.avatar()}
        author={faker.name.firstName()}
        timeAgo="Today at 4:00PM"
        text="some text"
      />
      <CommentDetail
        imageSource={faker.image.avatar()}
        author={faker.name.firstName()}
        timeAgo="Today at 9:00AM"
        text="some more text"
      />
      <CommentDetail
        imageSource={faker.image.avatar()}
        author={faker.name.firstName()}
        timeAgo="Yesterday at 6:00PM"
        text="some text yet again"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
