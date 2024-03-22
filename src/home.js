import './App.css';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import image1 from './images/newPic2.jpg';
import image2 from './images/newPic1.jpg';
import image3 from './images/newPic3.jpg';
// import image4 from './images/newPic4.jpg';
import image5 from './images/newPic7.jpg';
import image6 from './images/bg11.avif'
import image7 from './images/bg10.avif'
// import img from './images/u22.jpg';

export default function Home(){
  let style={color:'#9d75cf',textAlign:"center"}

return<>

<div id="main-page" class="homeContent">
{/* <img src={img}/> */}
  <div id='cardDiv'>
  
    <Card style={{"border-radius": "60px 20px 60px 20px", "overflow": "hidden","animation": "moving 3s linear alternate" ,border:"none"}}>
   
     
    <Carousel>

    <Carousel.Item interval={500}>
    <img src={image3} className="d-block w-100"/>
    </Carousel.Item>

    <Carousel.Item interval={500}>
    <img src={image1} className="d-block w-100"/>
    </Carousel.Item>

    <Carousel.Item interval={500}>
    <img src={image2} className="d-block w-100"/>
    </Carousel.Item>

    <Carousel.Item interval={500}>
    <img src={image5} className="d-block w-100"/>
    </Carousel.Item>

    <Carousel.Item interval={500}>
    <img src={image7} className="d-block w-100"/>
    </Carousel.Item>

    <Carousel.Item interval={500}>
    <img src={image6} className="d-block w-100"/>
    </Carousel.Item>
    </Carousel>
 
    </Card>
  </div>
<div id='words'>
  <h1>Welcome to bad bank</h1>
<h4>It's time to kick off our bad bank initiative and tackle those distressed assets head-on.</h4>
<button id='home-btn'>Kick off ...</button>
</div>
</div>

    
    </>
}