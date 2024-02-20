import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../css/Input.css";

import { useState } from "react";
import { TodoDispatchContext, useTodoDispatch } from "../App";
interface Props {}

export default function Editor(props: Props) {
  const dispatch = useTodoDispatch();
  const [text, setText] = useState("");
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    dispatch.onClickAdd(text);
    setText("");
  };
  return (
    <div className="InputWithButton">
      <InputGroup>
        <Form.Control
          placeholder="데이터 입력"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={text}
          onChange={onChangeInput}
        />
        <Button variant="outline-secondary" onClick={onClickButton}>
          추가
        </Button>
      </InputGroup>
    </div>
  );
}
