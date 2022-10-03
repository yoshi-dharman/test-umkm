import React from "react";
import { Container } from "react-bootstrap";

function Soal3() {
	return (
		<Container>
			<div>Data yang dibutuhkan apabila hendak menyewa ruangan sebagai restoran dalam gedung </div>
			<ul>
				<li>ID</li>
				<li>Nama</li>
				<li>No Ruangan</li>
				<li>Jumlah Anggota</li>
				<li>Pesanan</li>
				<li>Waktu</li>
				<li>Status Pembayaran (Lunas / Belum Bayar / DP)</li>
			</ul>
		</Container>
	);
}

export default Soal3;
