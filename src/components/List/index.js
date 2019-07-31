import React from "react";
import "./index.css";
import ListItem from "../ListItem";

class List extends React.Component {
  render() {
    const {
      notes,
      activeId,
      onListItemClick // 전달 받은 이벤트 핸들러
    } = this.props;
    return (
      <div className="list">
        {notes.map(item => {
          const { id, title, contents } = item;
          return (
            // 반복문을 돌 때에는 key가 필수! 리액트는 어떤 엘리먼트가 변경, 생성, 삭제 되었는지 판단할 때 key를 활용합니다.
            // 각 엘리먼트에 유일성(identity)을 보장하기 위해 id와 같은 unique한 키를 사용하시면 됩니다.
            <ListItem
              key={id}
              id={id}
              activeId={activeId}
              title={title}
              contents={contents}
              onClick={() => onListItemClick(id)} // 메소드 전달
            />
          );
        })}
      </div>
    );
  }
}

export default List;
