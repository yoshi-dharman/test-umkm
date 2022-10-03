import React, { useState, useEffect } from "react";
import { Table, Form, Row, Col, Container } from "react-bootstrap";

function Soal1() {
	const [rumus, setRumus] = useState("1");
	const [num1, setNum1] = useState("");
	const [num2, setNum2] = useState("");
	const [total, setTotal] = useState("");

	useEffect(() => {
		if (num1 !== "" && num2 !== "") {
			console.log("masuk");
			if (rumus === "1") {
				setTotal(parseInt(num1) * parseInt(num2));
			} else if (rumus === "3") {
				setTotal(0.5 * parseInt(num1) * parseInt(num2));
			}
		} else if (rumus === "2" && num1 !== "") {
			setTotal(3.14 * parseInt(num1) * parseInt(num1));
		} else {
			setTotal("");
		}
	}, [num1, num2, rumus]);

	return (
		<Container>
			<div className="mt-2">
				<Table striped bordered hover size="sm">
					<thead>
						<tr>
							<th>Nama Rumus</th>
							<th>Rumus</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Persegi Panjang</td>
							<td>Panjang * Lebar</td>
						</tr>
						<tr>
							<td>Segitiga</td>
							<td>3.14 * Jari * Jari</td>
						</tr>
						<tr>
							<td>Lingkaran</td>
							<td>0.5 * Alas * Tinggi</td>
						</tr>
					</tbody>
				</Table>
			</div>

			<div className="mt-2">
				<Form.Select
					className="w-auto"
					onChange={(e) => {
						setNum1("");
						setNum2("");
						setTotal("");
						setRumus(e.target.value);
					}}
				>
					<option value="1">Persegi Panjang</option>
					<option value="2">Segitiga</option>
					<option value="3">Lingkaran</option>
				</Form.Select>
			</div>

			<div className="mt-2">
				{rumus === "1" && (
					<div>
						<Form>
							<Form.Group as={Row} className="mb-3">
								<Form.Label column sm="2">
									Panjang
								</Form.Label>
								<Col sm="10">
									<Form.Control
										onChange={(e) => {
											setNum1(e.target.value);
										}}
										className="w-auto"
										type="text"
										defaultValue={num1}
									/>
								</Col>
							</Form.Group>

							<Form.Group as={Row} className="mb-3">
								<Form.Label column sm="2">
									Lebar
								</Form.Label>
								<Col sm="10">
									<Form.Control
										onChange={(e) => {
											setNum2(e.target.value);
										}}
										className="w-auto"
										type="text"
										defaultValue={num2}
									/>
								</Col>
							</Form.Group>
							<Form.Group as={Row} className="mb-3">
								<Form.Label column sm="2">
									Nilai
								</Form.Label>
								<Col sm="10">{total}</Col>
							</Form.Group>
						</Form>
					</div>
				)}

				{rumus === "2" && (
					<div>
						<Form>
							<Form.Group as={Row} className="mb-3">
								<Form.Label column sm="2">
									Jari Jari
								</Form.Label>
								<Col sm="10">
									<Form.Control
										onChange={(e) => {
											setNum1(e.target.value);
										}}
										className="w-auto"
										type="text"
										defaultValue={num1}
									/>
								</Col>
							</Form.Group>

							<Form.Group as={Row} className="mb-3">
								<Form.Label column sm="2">
									Nilai
								</Form.Label>
								<Col sm="10">{total}</Col>
							</Form.Group>
						</Form>
					</div>
				)}

				{rumus === "3" && (
					<div>
						<Form>
							<Form.Group as={Row} className="mb-3">
								<Form.Label column sm="2">
									Alas
								</Form.Label>
								<Col sm="10">
									<Form.Control
										onChange={(e) => {
											setNum1(e.target.value);
										}}
										className="w-auto"
										type="text"
										defaultValue={num1}
									/>
								</Col>
							</Form.Group>

							<Form.Group as={Row} className="mb-3">
								<Form.Label column sm="2">
									Lebar
								</Form.Label>
								<Col sm="10">
									<Form.Control
										onChange={(e) => {
											setNum2(e.target.value);
										}}
										className="w-auto"
										type="text"
										defaultValue={num2}
									/>
								</Col>
							</Form.Group>
							<Form.Group as={Row} className="mb-3">
								<Form.Label column sm="2">
									Tinggi
								</Form.Label>
								<Col sm="10">{total}</Col>
							</Form.Group>
						</Form>
					</div>
				)}
			</div>
		</Container>
	);
}

export default Soal1;
