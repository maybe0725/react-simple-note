import React from "react";
import "./index.css";
import Header from "../Header";
import List from "../List";
import Note from "../Note";
import { generateId } from "../../utils"; // 랜덤 ID 생성 함수

class App extends React.Component {
  state = {
    notes: [],
    activeId: "initial"
  };

  handleListItemClick = id => {
    this.setState({ activeId: id });
  };

  handleAddNote = () => {
    const id = generateId(); // 랜덤 ID 생성
    this.setState({
      notes: [
        ...this.state.notes,
        {
          id,
          title: "제목",
          contents: "내용"
        }
      ],
      activeId: id
    });
  };

  handleDeleteNote = () => {
    const notes = this.state.notes.filter(
      item => item.id !== this.state.activeId
    );
    this.setState({
      notes,
      activeId: notes.length === 0 ? null : notes[0].id
    });
  };

  // 편집 이벤트 핸들러
  handleEditNote = (type, e) => {
    // 새 notes array 생성
    const notes = [...this.state.notes];

    // notes 에서 현재 activeId 와 일치하는 노트 객체 찾기
    const note = notes.find(item => item.id === this.state.activeId);

    // 객체의 속성에 값 할당. note.title 또는 note.contents
    note[type] = e.target.value;

    // notes 에 새 array 를 할당하여 state 변경
    this.setState({
      notes
    });
  };

  render() {
    const { notes, activeId } = this.state;
    // 현재 활성화 된 객체를 찾아서 activeNote 변수에 할당
    const activeNote = notes.filter(item => item.id === activeId)[0];
    return (
      <div className="app">
        <Header
          onAddNote={this.handleAddNote}
          onDeleteNote={this.handleDeleteNote}
        />
        <div className="container">
          {/* notes와 activeId를 props 로 전달 */}
          <List
            notes={notes}
            activeId={activeId}
            onListItemClick={this.handleListItemClick} // 메소드 전달
          />
          {/* activeNote 가 존재할 때 <Note /> 를 랜더링 */}
          {/* note 속성에 activeNote 전달 */}
          {notes.length !== 0 && (
            <Note
              note={activeNote}
              onEditNote={this.handleEditNote} // 메소드 전달
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
