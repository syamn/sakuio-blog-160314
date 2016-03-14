/// <reference path="../../typings/browser.d.ts" />
 
import * as React from 'react'
import * as ReactDOM from 'react-dom'
 
interface CommentBoxProps extends React.Props<any> {
  user: string;
  link: string;
}
 
class CommentBox extends React.Component<any, any> {
  render() {
    return <div className="commentBox">
        Hello, world! It is comment posted by <a href={this.props.link}>{this.props.user}</a>.
      </div>;
  }
}
 
ReactDOM.render(
    <CommentBox user="Sakura Onishi" link="https://saku.io" />,
    document.getElementById("content")
);
