import React, { useState } from "react";
import "./App.css";

//  COMPONENTS
import Wrapper from "./components/Wrapper/Wrapper";
import Card from "./components/Card/Card";

// FUNCTION
function App() {
	const [toDoList, setListItem] = useState([
		"Learn Javascript",
		"Learn React",
		"Learn Components",
		"Improve FrontEnd Skills",
	]);

	const insertNewInput = (data) => {
		if (data === "") {
			alert("You didn't tap any task.");
		} else {
			setListItem([...toDoList, data]);
		}
	};

	const deleteItem = (index) => {
		let newToDoList = [...toDoList];
		newToDoList.splice(index, 1);
		setListItem(newToDoList);
	};

	return (
		<Wrapper>
			<Card
				list={toDoList}
				insertNewInput={insertNewInput}
				deleteItem={deleteItem}
			/>
		</Wrapper>
	);
}

export default App;
