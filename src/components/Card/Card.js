import React, { useState } from "react";

import "./Card.css";
import ListItem from "../ListItem/ListItem";

function Card(props) {
	const [insertInput, inputHandler] = useState("");
	const [sendToggle, setSendToggle] = useState(false);

	const inputOnChange = (data) => {
		inputHandler(data.target.value);
		if (data.target.value === "") {
			setSendToggle(false);
		} else {
			setSendToggle(true);
		}
	};

	const sendInput = () => {
		props.insertNewInput(insertInput);
		inputHandler("");
		setSendToggle(false);
	};

	const receiveItemIndex = (index) => {
		props.deleteItem(index);
	};
	return (
		<div className="card">
			<div className="inputField">
				<input
					type="text"
					placeholder="Write the task you wanna save"
					value={insertInput}
					onChange={inputOnChange}
				/>
				<button className={sendToggle ? "" : "not-allowed"} onClick={sendInput}>
					{insertInput === "" ? "Waiting" : "Add"}
				</button>
			</div>
			<div className="list">
				<ul>
					{props.list.map((item, index) => {
						return (
							<ListItem
								key={index}
								task={item}
								index={index}
								receiveItemIndex={receiveItemIndex}
							/>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
export default Card;
