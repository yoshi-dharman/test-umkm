import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

//Components
import Navbar2 from "../Components/Navbar2";

function Soal2() {
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [tracker, setTracker] = useState([]);
	const [loadData, setLoadData] = useState(true);

	const saveLocal = () => {
		if (title !== "" && price !== "") {
			console.log("masuk");
			let data = {
				title,
				price,
			};

			setTracker([...tracker, data]);
			localStorage.tracker = JSON.stringify([...tracker, data]);
		}
	};

	useEffect(() => {
		if (localStorage.tracker && loadData) {
			setTracker(JSON.parse(localStorage.tracker));
			setLoadData(false);
		}
	}, [tracker, loadData]);

	return (
		<Container className="p-0" fluid>
			<Navbar2 />
			<Row className="mt-3 justify-content-center flex-column">
				<Col xs={11} md={5} className="mx-auto mx-auto shadow rounded-2 p-4">
					<h5>Add Expense</h5>
					<Form className="">
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label>Title</Form.Label>
							<Form.Control
								onChange={(e) => setTitle(e.target.value)}
								type="text"
								placeholder="Food, Bill, etc..."
								defaultValue={title}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
							<Form.Label>Price</Form.Label>
							<Form.Control
								onChange={(e) => setPrice(e.target.value)}
								type="number"
								placeholder="100"
								defaultValue={price}
							/>
						</Form.Group>
						<Button onClick={() => saveLocal()} variant="primary" className="w-100">
							Save
						</Button>
					</Form>
				</Col>

				<Col xs={11} md={5} className="mx-auto mt-4 mx-auto shadow rounded-2 p-4">
					<h5>Cash Flow</h5>
					<hr></hr>
					<div>
						{tracker.length === 0
							? "Empty"
							: tracker.map((item, index) => (
									<div key={index} className="d-flex justify-content-between mt-2">
										<div>{item.title}</div>
										<div>{item.price}</div>
									</div>
							  ))}
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default Soal2;
