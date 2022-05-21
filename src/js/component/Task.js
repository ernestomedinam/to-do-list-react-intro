import React from "react";

export function Task({ id, done, ...props }) {
	return (
		<div
			className={`d-flex w-100 ps-2 bg-${
				done === true ? "success" : "warning"
			}`}
			key={id}
			id={id}
			style={{ cursor: "pointer" }}
			onClick={props.onClick}>
			{props.text}
		</div>
	);
}
