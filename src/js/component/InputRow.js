import React, { useState } from "react";

export const InputRow = ({ tasks, setTasks, ...props }) => {
	const [newTask, setNewTask] = useState("");
	const addTask = (event) => {
		let task = {
			id: Math.random().toString(16).slice(2),
			text: newTask,
			done: false,
		};
		const newTasks = [...tasks, task];
		setTasks(newTasks);
		setNewTask("");
	};
	return (
		<div className="d-flex w-100 my-3 justify-content-center ">
			<input
				className="form-control w-50"
				value={newTask}
				onChange={(event) => setNewTask(event.target.value)}
			/>
			<button
				className="btn btn-success mx-2"
				style={{
					fontWeight: 700,
				}}
				onClick={addTask}>
				{"+"}
			</button>
		</div>
	);
};
