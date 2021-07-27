import React from "react"
import { Navbar, Nav } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)

  const content = { message: ""}


  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar">
        <Navbar.Brand as="span">{content.message}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default CustomNavbar
