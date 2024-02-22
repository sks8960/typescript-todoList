import { useTodoDispatch, useCompletedDispatch } from "../page/TodoList";
import { Todo } from "../Types";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/esm/Button";
import "../css/TodoItem.css";

interface Props extends Todo {}

export default function TodoItem(props: Props) {
  const dispatch = useTodoDispatch();
  const Cdispatch = useCompletedDispatch();

  const onClickButton = () => {
    dispatch.onClickDelete(props.id);
    console.log(props.id);
  };

  const onClickDoneButton = () => {
    dispatch.onClickDone(props.content);
    dispatch.onClickDelete(props.id);
  };

  const onClickCDeleteButton = () => {
    Cdispatch.onClickCDelete(props.id);
  };

  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <div
        style={{
          borderRight: "1px solid gray", // 수직 구분선 추가
          paddingRight: "20px", // 오른쪽 여백 추가
        }}
      >
        <div style={{ fontSize: "16px", fontWeight: "bold" }}>
          {formattedDate}
        </div>
      </div>
      <div
        style={{
          marginLeft: "20px",
          fontSize: "14px",
          color: "#333",
        }}
      >
        <div style={{ fontWeight: "bold" }}>{props.content}</div>
      </div>
      <div>
        {!props.completed && (
          <Button className="DoneButton" onClick={onClickDoneButton}>
            완료
          </Button>
        )}
        {!props.completed && (
          <Button className="ADeleteButton" onClick={onClickButton}>
            삭제
          </Button>
        )}
        {props.completed && (
          <Button className="BDeleteButton" onClick={onClickCDeleteButton}>
            삭제
          </Button>
        )}
      </div>
    </div>
  );
}
