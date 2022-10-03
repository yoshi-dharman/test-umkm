import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

// Pages
import Index from "./Pages/Index";
import Soal1 from "./Pages/Soal1";
import Soal2 from "./Pages/Soal2";
import Soal3 from "./Pages/Soal3";
import NotFound from "./Pages/NotFound";

function App() {
	return (
		<Container className="p-0" fluid>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Index />}></Route>
					<Route path="/soal1" element={<Soal1 />}></Route>
					<Route path="/soal2" element={<Soal2 />}></Route>
					<Route path="/soal3" element={<Soal3 />}></Route>

					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</BrowserRouter>
		</Container>
	);
}

export default App;
