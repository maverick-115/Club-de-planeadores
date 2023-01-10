import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useTranslation } from "react-i18next";
import LocaleContext from "../LocaleContext";
import i18n from "../i18n";
import { useContext } from "react";
import { useState, useEffect } from "react";


const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();
  const { locale } = useContext(LocaleContext);
  
  
  
  useEffect(() => {
    
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  
 

  function idioma(){
    var checkedValue = document.querySelector('#idiomaC');
    if (checkedValue.checked){
      i18n.changeLanguage('en');
    }else{
      i18n.changeLanguage('es');

    }

 }
  

  function changeLocale (l) {
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  }

  return (
    <Navbar expand="lg"  className={scrolled ? "scrolled": ""} >
      <Container>
        <Navbar.Brand href="#home">CLUB PLANEADORES BS AS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
        <Navbar.Collapse id="basic-navbar-nav" className="menu" >
          <Nav className="me-auto">
          <NavDropdown title={t('language')} id="basic-nav-dropdown" className="ms-auto">
              <NavDropdown.Item onClick={() => changeLocale('en')}>English</NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeLocale('es')}>Español</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={t('aboutUs')}
              id="basic-nav-dropdown"
              className="ms-auto"
            >
              <NavDropdown.Item href="#action/3.1" >{t('history')}</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">{t('fleet')}</NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link href="#" className="ms-auto">
            {t('partners')}
            </Nav.Link>
            
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#wheater" className="ms-auto">
              {t('weatherReport')}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
