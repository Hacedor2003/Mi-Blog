import { Button, Navbar, Container, Form, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';

export const BarraNavegacion = () => {
	const expand = 'xl';
	return (
		<Navbar
			key={expand}
			expand={expand}
			className='bg-body-tertiary mb-3'>
			<Container fluid>
				<Navbar.Brand href='#'>Bryan Espinosa</Navbar.Brand>
				<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
				<Navbar.Offcanvas
					id={`offcanvasNavbar-expand-${expand}`}
					aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
					placement='end'>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>Panel de Navegacion</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className='justify-content-end flex-grow-1 pe-3'>
							<Nav.Link href='#action1'>Home</Nav.Link>
						</Nav>
						<Form className='d-flex'>
							<Form.Control
								type='search'
								placeholder='Search'
								className='me-2'
								aria-label='Search'
							/>
							<Button variant='outline-success'>Search</Button>
						</Form>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
};
