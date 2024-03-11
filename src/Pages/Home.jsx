import React from 'react'
import { Button1 } from './Button';
import { Button2 } from './Button'
import Card from './Card';


const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <h1>Present your business in a whole new way</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nam impedit exercitationem porro similique veniam molestias cum dolorum accusamus soluta!</p>
          <div className="home-btns">
            <Button1>Get Started</Button1>
            <Button2>Learn More</Button2>
          </div>
        </div>
      </div>
      <div className="cards">
        <Card>
          <div className="card-icon"><i class="fa-solid fa-layer-group"></i></div>
          <h2 className="card-title">Featured title</h2>
          <div className="card-info">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words</div>
          <div className="card-link">
            <a href="#">
              Call to action
            <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </Card>
        <Card>
          <div className="card-icon"><i class="fa-solid fa-building"></i></div>
          <h2 className="card-title">Featured title</h2>
          <div className="card-info">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words</div>
          <div className="card-link">
            <a href="#">
              Call to action
            <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </Card>
        <Card>
          <div className="card-icon"><i class="fa-solid fa-layer-group"></i></div>
          <h2 className="card-title">Featured title</h2>
          <div className="card-info">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words</div>
          <div className="card-link">
            <a href="#">
              Call to action
            <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </Card>
      </div>
    </>
  )
}

export default Home