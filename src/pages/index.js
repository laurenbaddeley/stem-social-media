import React from "react"
import { CardDeck, Card } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import aloevera from "../images/aloevera.jpeg"
import autumn from "../images/autumn.jpeg"
import coffee from "../images/coffee.jpeg"
import cookies from "../images/cookies.jpeg"
import food from "../images/food.jpeg"
import forest from "../images/forest.jpeg"
import ice from "../images/ice.jpeg"
import map from "../images/map.jpeg"
import oranges from "../images/oranges.jpeg"
import puppies from "../images/puppies.jpeg"
import skateboarder from "../images/skateboarder.jpeg"
import spices from "../images/spices.jpeg"
import surfer from "../images/surfer.jpeg"
import winter from "../images/winter.jpeg"
import quiz from "../images/superhero_quiz.png" 
import marissa from "../images/marissa_mayer.png"

export default ({ data }) => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`stem`, `social`, `media`]} />
    <CardDeck>
      <Card>
        <Card.Img variant="top" src={marissa} alt="marissa" />
        <Card.Body>
          <Card.Title>Marissa Mayer</Card.Title>
          <Card.Text>
            <p>Date of Birth: 30th May, 1975</p>
            <p>Location: US</p>
            <p>About Me: I am a CEO at ACME Corporation and I work in Artificial Intelligence. I am a strong advocate for Women in Engineering, and I have been listed in the '50 Most Powerful Women in Business' several years in a row. In my spare time I love to read, travel and stay active.</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Posted on 28/08/2019</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={autumn} alt="autumn"/>
        <Card.Body>
          <Card.Title>Autumn is approaching</Card.Title>
          <Card.Text>
            Look at the lovely colours in this leaf. That is Summer finishing!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Posted on 18/10/2019</small>
        </Card.Footer>
      </Card>
    </CardDeck>
    <br />
    <CardDeck>
      <Card>
        <Card.Img variant="top" src={food} alt="food" />
        <Card.Body>
          <Card.Title>Yum yum in my tum</Card.Title>
          <Card.Text>
            Decided to treat myself to the most delicious dinner ever last night. 3 Michelin Star restaurent - expensive but toooooootally worth it. Would highly recommend.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Posted on 15/10/2019</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={quiz} alt="quiz"/>
        <Card.Body>
          <Card.Title>What is Your Superhero Name?</Card.Title>
          <Card.Text>
            Haha I got 'Patch Hunter' for my Superhero name - what did everyone else get?
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Posted on 08/10/2019</small>
        </Card.Footer>
      </Card>
    </CardDeck>
    <br />
    <CardDeck>
      <Card>
        <Card.Img variant="top" src={aloevera} alt="aloevera"/>
        <Card.Body>
          <Card.Title>New work plant</Card.Title>
          <Card.Text>
            My desk was looking very bare so I decided to buy myself an aloe vera plant to brighten the place up. 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Posted on 29/09/2019</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={surfer} alt="surfer"/>
        <Card.Body>
          <Card.Title>Catching some waves</Card.Title>
          <Card.Text>
            Decided to practice my surfing skills while away on holiday. Forgot how much I love to surf! 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Posted on 05/09/2019</small>
        </Card.Footer>
      </Card>
    </CardDeck>
    <br />
    <CardDeck>
      <Card>
        <Card.Img variant="top" src={cookies} alt="cookies" />
        <Card.Body>
          <Card.Title>Mmm cookies</Card.Title>
          <Card.Text>
            Baked some home made choc chip cookies today. And they are delicious! If I have any leftover, I'll bring some into work on Monday! ;)
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Posted on 21/08/2019   15 likes</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={forest} alt="forest"/>
        <Card.Body>
          <Card.Title>Walking helps clear the mind</Card.Title>
          <Card.Text>
            I have been so busy with work recently, that I decided to have a tech-free weekend. No phone, no computer, no Internet. It was quite refreshing! I got back out into nature and had a long walk in the woods. The fresh pine smell was great, and it was so peaceful out! 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Posted on 16/08/2019</small>
        </Card.Footer>
      </Card>
    </CardDeck>
    <br />
    <CardDeck>
      <Card>
        <Card.Img variant="top" src={oranges} alt="oranges"/>
        <Card.Body>
          <Card.Title>One of my 5 a day</Card.Title>
          <Card.Text>
            How good do these oranges look? They were at a farmers market and I couldn't resist buying some. I'm going to make some freshly squeezed orange juice when I get home. 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Posted on 11/08/2019</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={map} alt="map" />
        <Card.Body>
          <Card.Title>Adventure time</Card.Title>
          <Card.Text>
            Away with friends for the weekend and we are off on an adventure. Got a map and a compass - lets hope we can find our cabin before dark.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Posted on 05/06/2019   15 likes</small>
        </Card.Footer>
      </Card>
    </CardDeck>
    <br />
    <CardDeck>
      <Card>
        <Card.Img variant="top" src={skateboarder} alt="skateboarder"/>
        <Card.Body>
          <Card.Title>Proud Aunt</Card.Title>
          <Card.Text>
            Look at my Nephew go on his new skateboard. He's a pro already! 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Posted on 19/04/2019</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={coffee} alt="coffee"/>
        <Card.Body>
          <Card.Title>Coffee break time</Card.Title>
          <Card.Text>
            A little pick me up with some delicious tasting coffee. 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Posted on 10/03/2019</small>
        </Card.Footer>
      </Card>
    </CardDeck>
    <br />
    <CardDeck>
      <Card>
        <Card.Img variant="top" src={spices} alt="spices" />
        <Card.Body>
          <Card.Title>Learning to cook in the new year</Card.Title>
          <Card.Text>
            My new years resolution is to cook more at home. So I've gone and bought myself a whole spice rack to encourage me to make some tasty dishes. Does anyone have any recipes that they can recommend? 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Posted on 05/01/2019   15 likes</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={winter} alt="winter"/>
        <Card.Body>
          <Card.Title>Snow day!</Card.Title>
          <Card.Text>
            Look how snowy it was overnight! No going into work for me today woop! :) I'm going to go for a walk and build a snowman.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Posted on 28/12/2018</small>
        </Card.Footer>
      </Card>
    </CardDeck>
    <br />
    <CardDeck>
    <Card>
        <Card.Img variant="top" src={puppies} alt="puppies"/>
        <Card.Body>
          <Card.Title>Best Christmas present ever!</Card.Title>
          <Card.Text>
            I got puppies!! 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Posted on 25/12/2018</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={ice} alt="ice"/>
        <Card.Body>
          <Card.Title>Global Warming</Card.Title>
          <Card.Text>
            It makes me so sad that the planet is warming at an incredible rate. We need to take action before our ice caps are completely melted.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Posted on 20/12/2018</small>
        </Card.Footer>
      </Card>
    </CardDeck>
  </Layout>
)