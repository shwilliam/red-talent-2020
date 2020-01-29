import React from 'react'
import { Button, Title, Collapsible, SubTitle } from '../components'

const Event = () => {
  return (
    <main>
      <Button to='/contact'>Join Event</Button>
      <section>
        <Title>Who are we?</Title>
        <p>
          RED Academy is a leading-edge design and technology school, with
          programs designed unlike any other. We also produce the professionals
          of tomorrow unlike any other- With the real workplace in mind, staying
          up to date with the ever-growing tech industry. Whether you are a
          start-up looking for a new member for your great idea, or an
          established company looking to grow your team, you are sure to find
          your next great hire at our Talent Connect Event.
        </p>
      </section>
      <section>
        <Title>Our Key Qualificaitons</Title>
        <Collapsible dep='UI/UX DESIGN'>
          <p>
            UI & UX students take a human-centric approach in designing
            delightful experiences that meet business goals while balancing
            seamless interactivity and navigation.
          </p>
        </Collapsible>
        <Collapsible dep='DEVELOPMENT'>
          <p>
            Web and App Development students code websites and build web and
            mobile applications using the most in-demand technologies.
          </p>
        </Collapsible>
        <Collapsible dep='DIGITAL MARKETING'>
          <p>
            Digital Marketing students create and deploy online strategies, and
            are versed in today’s core industry skills.
          </p>
        </Collapsible>
      </section>
      <section>
        <Title>Event Details</Title>
        <section>
          <img
            src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'
            width='200'
          />
          <SubTitle>Date and Time</SubTitle>
          <Title>05 March, 2020 6PM</Title>
          <SubTitle>Location</SubTitle>
          <Title>Red Academy</Title>
        </section>
      </section>
      <Button to='/contact'>Join Event</Button>
    </main>
  )
}

export default Event
