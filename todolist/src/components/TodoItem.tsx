import { useTodoDispatch } from "../App";
import { Todo } from "../Types";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/esm/Button";
import "../css/Button.css";
import { text } from "stream/consumers";

interface Props extends Todo {}

export default function TodoItem(props: Props) {
  const dispatch = useTodoDispatch();

  const onClickButton = () => {
    dispatch.onClickDelete(props.id);
  };

  const onClickDoneButton = () => {
    dispatch.onClickDone(props.content);
    dispatch.onClickDelete(props.id);
  };

  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        {formattedDate} : {props.content}
      </div>
      <div>
        {!props.completed && (
          <Button className="Button" onClick={onClickDoneButton}>
            완료
          </Button>
        )}
        <Button className="Button" onClick={onClickButton}>
          삭제
        </Button>
      </div>
    </div>
  );
}
