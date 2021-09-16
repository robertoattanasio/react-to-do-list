import "./ListItem.css";

function ListItem(props) {
	const sendItemKey = () => {
		props.receiveItemIndex(props.index);
	};
	return (
		<li>
			<span className="listTitle">{props.task}</span>
			<i className="fas fa-trash-alt" onClick={sendItemKey}></i>
		</li>
	);
}

export default ListItem;
