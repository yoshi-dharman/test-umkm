import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function index() {
	return (
		<div className="mt-2 d-flex justify-content-between">
			<Link to="/soal1">
				<Button variant="primary">Soal 1</Button>
			</Link>
			<Link to="/soal2">
				<Button variant="primary">Soal 2</Button>
			</Link>
			<Link to="/soal3">
				<Button variant="primary">Soal 3</Button>
			</Link>
		</div>
	);
}

export default index;
