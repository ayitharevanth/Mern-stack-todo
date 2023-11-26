import { useQuery } from "react-query";
import ClipLoader from 'react-spinners/ClipLoader'
import readTodosRequest from "../../api/readTodosRequest";

export default function Home() {
    const { isLoading, data: todos } = useQuery('todos', readTodosRequest);


    return (
      <div>
        {isLoading 
        ? <ClipLoader size={150} />
        : (todos.map((todo) => (
          <div key={todo._id}>
            {todo.text}
            {`${todo.completed}`}
          </div>
        )))
        }
      </div>
    );
}