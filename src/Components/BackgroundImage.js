import Card from "react-bootstrap/Card"

function BackgroundImage() {
    return (
        <div>
            <Card className="text-dark">
                <Card.Img src="https://d2d8wwwkmhfcva.cloudfront.net/1500x1520/d2guulkeunn7d8.cloudfront.net/assets/homepage/homepage-mobile-background-m3-high-res-ca3279087ea0a3337f671b694b196d43fd207443d5825e61295b0996974835e9.jpg" alt="background image"/>
                <Card.ImgOverlay>
                    <Card.Title>Order groceries for delivery or pickup today</Card.Title>
                    <Card.Text>Whatever you want from local stores, brought right to your door</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}



export default BackgroundImage