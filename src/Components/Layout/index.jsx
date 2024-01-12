import { Container } from 'react-bootstrap';
import { BarraNavegacion } from './Navbar';
import { Footer } from './Footer';
import './styles.css'


export const Layout = ({ children }) => {
	return (
		<Container>
			<BarraNavegacion />
			<h1>Posts:</h1>
			<Container id='contenedorLayaout'>
				{children}
			</Container>
			<Footer />
		</Container>
	);
};
