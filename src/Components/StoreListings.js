import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"

function StoreListings() {
    return (
        <div>
            <h2>Browse stores in Houston</h2>
            <Container style={{ marginTop: "40px", textAlign: "center" }}>
                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
                    <Row>
                        <Col xs=".5" >
                            <Image src="https://www.instacart.com/image-server/90x90/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" roundedCircle />
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5">
                            <Image src="https://www.instacart.com/image-server/90x90/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/1425/841f212e-4938-4245-9a31-62f61dd99d6b.jpg" roundedCircle />
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>Dollar Tree</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5" >
                            <Image src="https://www.instacart.com/image-server/90x90/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/118/6ede4bd3-cc58-4e32-b10b-24ed1d656131.png" roundedCircle />
                        </Col>
                        <Col md="6">
                            <h5 style={{ fontWeight: "bold" }}>CVS</h5>
                            <p>Delivery</p>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </div>
    )
}



export default StoreListings