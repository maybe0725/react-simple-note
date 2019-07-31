import React from "react";
import "./index.css";

class Header extends React.Component {
  render() {
    const { onAddNote, onDeleteNote } = this.props;
    return (
      <div className="header">
        <div className="title">
          <span>심플노트</span>
        </div>
        <div className="buttons">
          {/* onAddNote 를 추가 버튼의 onClick 이벤트에 작성 */}
          <button onClick={onAddNote}>추가</button>
          <button onClick={onDeleteNote}>삭제</button>
        </div>
      </div>
    );
  }
}

export default Header;
