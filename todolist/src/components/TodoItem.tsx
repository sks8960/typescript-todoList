import { useTodoDispatch } from "../App";
import { Todo } from "../Types";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/esm/Button";
import "../css/Button.css";
interface Props extends Todo {}

export default function TodoItem(props: Props) {
  const dispatch = useTodoDispatch();

  const onClickButton = () => {
    dispatch.onClickDelete(props.id);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        {props.id}번 : {props.content}
      </div>
      <div>
        <Button className="Button">완료</Button>
        <Button className="Button" onClick={onClickButton}>
          삭제
        </Button>
      </div>
    </div>
  );
}
