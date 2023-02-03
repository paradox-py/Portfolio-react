import {Container,Row , Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"

export const Banner = () => {

    return (

        <section className="banner" id="home">

            <Container>
                <Row className="align-items-centre">
                    <Col xs={12} md={6} xl={7}>

                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{'Hi Im webdddd'}<span className="wrap">Web Developer</span></h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <button onClick={() => console.log('connect')}>Let’s connect</button>
                    <Col  xs={12} md={6} xl={7}/>
                    <Col/>


                    </Col>

                </Row>
            </Container>
            
        </section>        

    )
        
    
        
   
}