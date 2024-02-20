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
    <div>
      {props.id}번 : {props.content}
      <Button className="Button" onClick={onClickButton}>
        삭제
      </Button>
    </div>
  );
}
