import React from 'react';
import { ListGroup, ListGroupItem } from "reactstrap";
import {FaCheckDouble} from "react-icons/fa";

const Todos = ({todos, markComplete}) => {
    return (
      <ListGroup classname="mt-5 mb-2 item">
          {todos.map(todo => (
              <ListGroupItem key={todo.id}>
                  {todo.todoString}
                  <span className="float-right"
                  onClick={() => markComplete(todo.id)}
                  ><FaCheckDouble/></span>
              </ListGroupItem>
          ))}
      </ListGroup>
    );
};

export default Todos;
