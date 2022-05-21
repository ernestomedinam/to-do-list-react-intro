import React, { useState } from "react";
import { Task } from "./Task";

export const List = ({ tasks, setTasks, ...props }) => {
	const updateTask = (event) => {
		const taskID = event.target.id;
		console.log(taskID);
		const task = tasks.find((currentTask) => {
			return currentTask.id == taskID;
		});
		if (task.done) {
			setTasks(tasks.filter((currentTask) => currentTask.id !== task.id));
		} else {
			setTasks(
				tasks.map((currentTask) => {
					if (currentTask.id === task.id) {
						return {
							id: task.id,
							text: task.text,
							done: true,
						};
					}
					return currentTask;
				})
			);
		}
	};

	return (
		<div className="d-flex w-100 my-3 justify-content-center second-row">
			<div
				className="list bg-white d-flex flex-column p-3"
				style={{ width: "30rem" }}>
				{tasks.map((task, index) => {
					return (
						<Task
							key={task.id}
							text={task.text}
							id={task.id}
							done={task.done}
							onClick={updateTask}
						/>
					);
				})}
			</div>
		</div>
	);
};
