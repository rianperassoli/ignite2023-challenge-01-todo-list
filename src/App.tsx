import {
  useState,
  useMemo,
  InputHTMLAttributes,
  ChangeEvent,
  InvalidEvent,
} from "react";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { AddButton } from "./components/AddButton";
import { Task, TaskList } from "./components/TaskList";
import { EmptyTaskList } from "./components/EmptyTaskList";

import styles from "./App.module.css";

import "./globals.css";

function App() {
  const [list, setList] = useState<Task[]>([]);
  const [newTaskText, setNewTaskText] = useState("");

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  const createNewTask = () => {
    const newTask: Task = {
      id: new Date().getTime(),
      done: false,
      description: newTaskText,
    };
    setList([newTask, ...list]);
    setNewTaskText("");
  };

  const toggleDone = (task: Task) => {
    const newList = list.map((item) => {
      if (item.id === task.id) {
        return { ...item, done: !item.done };
      }
      return item;
    });

    setList(newList);
  };

  const removeTask = (taskId: number) => {
    setList(list.filter((item) => item.id !== taskId));
  };

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.createTask}>
          <Input
            placeholder="Adicione uma nova tarefa"
            value={newTaskText}
            onChange={handleNewTaskChange}
            required
          />
          <AddButton onClick={createNewTask} />
        </div>
        <div>
          <div className={styles.tasksHeader}>
            <p>
              Tarefas criadas <span>{list.length}</span>
            </p>
            <p>
              Concluídas
              <span>
                {`${list.filter((item) => item.done).length} de ${list.length}`}
              </span>
            </p>
          </div>
          <div>
            {!!list.length ? (
              <TaskList
                tasks={list}
                onClickDone={toggleDone}
                onDeleteTask={removeTask}
              />
            ) : (
              <EmptyTaskList />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
