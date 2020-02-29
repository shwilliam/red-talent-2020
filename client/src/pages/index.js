import React from 'react'
import {Button, Collapsible, Banner, Navigation} from '../components'
import styled from 'styled-components'
import devLogo from '../../assets/images/dev.svg'
import dmLogo from '../../assets/images/dm.svg'
import uxuiLogo from '../../assets/images/ux_ui.svg'
import Footer from '../components/Footer'
import ReactGA from 'react-ga'
import TalentPhoto from '../../assets/images/talent-connect.jpg'
import Students from '../../assets/images/students.jpg'

if (typeof window !== 'undefined') ReactGA.pageview(location.pathname)

const TalentSection = styled.section`
  width: 90%;
  margin: 0 auto;
  background: #fff;
  text-align: center;
  padding: 2rem;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  margin-top: 6rem;
  margin-bottom: 2rem;

  @media only screen and (min-width: 768px) {
    background: transparent;
    color: #fff;
    box-shadow: none;
    margin-top: 10rem;
  }
`

const Title = styled.h1`
  font-size: 1.35rem;
  font-family: Lato;
  font-weight: 600;
  text-align: center;
  width: 60%;
  letter-spacing: 0.05rem;
  padding-bottom: 1.5rem;
  margin: 0 auto;
  color: #5c5c5c;

  @media only screen and (min-width: 768px) {
    color: #fff;
    font-size: 1.75rem;
  }
`

const WhoWeAreTitle = styled.h1`
  font-size: 1.35rem;
  font-family: Lato;
  font-weight: 600;
  text-align: center;
  width: 60%;
  letter-spacing: 0.05rem;
  padding-bottom: 1.5rem;
  margin: 0 auto;
  color: #5c5c5c;

  @media only screen and (min-width: 768px) {
    color: #5c5c5c;
    font-size: 1.75rem;
    margin-top: 13rem;
  }
`

const TalentDate = styled.p`
  padding-bottom: 1.5rem;
  font-size: 0.75rem;
  font-weight: 100;

  @media only screen and (min-width: 768px) {
    color: #fff;
    font-size: 1.25rem;
  }
`

const Paragraph = styled.p`
  width: 90%;
  margin: 0 auto;
  color: #5c5c5c;
  line-height: 1.5rem;
  padding: 0.5rem 0;
  margin-top: 0.5rem;

  @media only screen and (min-width: 1000px) {
    width: 570px;
  }
`

const DepParagraph = styled.p`
  width: 100%;
  color: #5c5c5c;
  line-height: 1.5rem;
  padding: 0.5rem 0;
  margin-bottom: 1.5rem;
  text-align: left;

  @media only screen and (min-width: 768px) {
    padding: 1rem 0;
    text-align: center;
  }
`

const KeySection = styled.section`
  margin-top: 2rem;

  @media only screen and (min-width: 768px) {
    margin: 5rem 0 0 0;
  }
`

const EventSection = styled.section`
  width: 90%;
  margin: 0 auto 1.5rem auto;

  @media only screen and (min-width: 1000px) {
    margin: 1.2rem auto 3rem auto;
    display: flex;
    justify-content: flex-start;
    max-height: 350px;
    width: 70%;
  }
`

const EventTitle = styled.h3`
  padding-top: 1rem;
  font-size: 0.85rem;
  color: #383838;

  @media only screen and (min-width: 1000px) {
    font-size: 1.25rem;
    margin-top: 0.5rem;
  }
`

const EventDesc = styled.p`
  padding: 0.5rem 0;
  font-size: 1rem;
  color: #383838;
  font-weight: 600;

  @media only screen and (min-width: 1200px) {
    font-size: 1.5rem;
  }
`

const Center = styled.div`
  width: 90%;
  margin: 1rem auto;
  text-align: center;
`

const WhoWeAreImg = styled.img`
  height: 300px;
  width: 100%;
  object-fit: contain;

  @media only screen and (min-width: 768px) {
    height: 375px;
    width: auto;
    margin: 0 auto;
    display: block;
    margin-bottom: 2rem;
  }
`

const KeyDesktopStyles = styled.section`
  @media only screen and (min-width: 768px) {
    max-width: 1300px;
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2.5rem;
  }
`

const EventImg = styled.img`
  width: 100%;
  margin: 0 auto;
  height: auto;
  border-radius: 4px;

  @media only screen and (min-width: 1000px) {
    margin: unset;
  }
`

const EventDetails = styled.section`
  width: 50%;
  margin: 0 auto;
  text-align: left;
  padding-bottom: 15px;
  @media only screen and (min-width: 1000px) {
    display: flex;
    text-align: left;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 50%;
    border-radius: 6px;
  }
`

const EventImgContainer = styled.section`
  color: #fff;
  position: relative;
  overflow: hidden;
  flex-basis: 50%;
`

const EventImgText = styled.p`
  @media only screen and (min-width: 768px) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.75rem;
    text-align: center;
    background: rgba(208, 56, 43, 0.8);
    font-size: 2rem;
  }
`

const Event = () => {
  return (
    <main>
      <Navigation white transparentMobile route="/" />
      <Banner />

      <TalentSection>
        <Title>Talent Connect at RED Academy</Title>
        <TalentDate>05 March, 2020</TalentDate>
        <Button to="https://www.eventbrite.ca/e/red-academy-co-op-talent-connect-tickets-90332810869">
          Join Event
        </Button>
      </TalentSection>
      <WhoWeAreTitle>Who Are We?</WhoWeAreTitle>
      <WhoWeAreImg src={Students} />
      <Paragraph>
        RED Academy is a leading-edge design and technology school,
        with programs designed unlike any other. We also produce the
        professionals of tomorrow unlike any other.
      </Paragraph>
      <Paragraph>
        With the real workplace in mind, staying up to date with the
        ever-growing tech industry.
      </Paragraph>
      <Paragraph>
        Whether you are a start-up looking for a new member for your
        great idea, or an established company looking to grow your
        team, you are sure to find your next great hire at our Talent
        Connect Event.
      </Paragraph>
      <KeySection>
        <Title style={{color: '#5c5c5c'}}>
          Our Key Qualifications
        </Title>
        <KeyDesktopStyles>
          <Collapsible icon={uxuiLogo} dep="UI/UX DESIGN">
            <DepParagraph>
              UI & UX students take a human-centric approach in
              designing delightful experiences that meet business
              goals while balancing seamless interactivity and
              navigation.
            </DepParagraph>
          </Collapsible>
          <Collapsible icon={devLogo} dep="DEVELOPMENT">
            <DepParagraph>
              Web and App Development students code websites and build
              web and mobile applications using the most in-demand
              technologies.
            </DepParagraph>
          </Collapsible>
          <Collapsible icon={dmLogo} dep="DIGITAL MARKETING">
            <DepParagraph>
              Digital Marketing students create and deploy online
              strategies, and are versed in today’s core industry
              skills.
            </DepParagraph>
          </Collapsible>
        </KeyDesktopStyles>
      </KeySection>
      <Center style={{margin: '1rem auto 4rem auto'}}>
        <Button noFill to="/graduates">
          See Graduates
        </Button>
      </Center>
      <Title style={{color: '#5c5c5c', marginTop: '6rem'}}>
        Event Details
      </Title>
      <EventSection>
        <EventImgContainer>
          <EventImg src={TalentPhoto} />
          <EventImgText>RED Academy Talent Connect</EventImgText>
        </EventImgContainer>
        <EventDetails>
          <EventTitle>Date and Time</EventTitle>
          <EventDesc>05 March, 2020 6PM</EventDesc>
          <EventTitle>Location</EventTitle>
          <EventDesc style={{marginBottom: '1.5rem'}}>
            RED Academy
          </EventDesc>
          <Button to="https://www.eventbrite.ca/e/red-academy-co-op-talent-connect-tickets-90332810869">
            Join Event
          </Button>
        </EventDetails>
      </EventSection>
      <Footer />
    </main>
  )
}

export default Event
