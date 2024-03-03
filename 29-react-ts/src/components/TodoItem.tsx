import React from 'react';
import Todo from '../models/todo.ts';
import { useDispatch } from 'react-redux';
import { todoActions } from '../store';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const dispatch = useDispatch();

  const removeTodoHandler = () => {
    Swal.fire({
      title: '할 일을 삭제하시겠습니까?',
      text: '삭제한 할 일은 되돌릴 수 없습니다.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '삭제',
      cancelButtonText: '취소',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '삭제 완료',
          text: '할 일이 삭제되었습니다.',
          icon: 'success',
        });
        dispatch(todoActions.removeTodo(props.todo.id));
      }
    });
  };

  return (
    <li>
      <div className="checkbox"></div>
      <div className="text">{props.todo.text}</div>
      <button onClick={removeTodoHandler}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
};

export default TodoItem;