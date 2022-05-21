import React, { useState } from "react";
import { InputRow } from "./InputRow";
import { List } from "./List";

//create your first component
const Home = (props) => {
	const [tasks, setTasks] = useState([]);
	return (
		<React.Fragment>
			<InputRow tasks={tasks} setTasks={setTasks} />
			<List tasks={tasks} setTasks={setTasks} />
		</React.Fragment>
	);
};

export default Home;
