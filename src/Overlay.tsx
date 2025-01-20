import { Container, TopLeft, BottomLeft, BottomRight, Hamburger } from './style'

export default function Overlay() {
  return (
    <Container>
      <TopLeft>
        <h1>
          PERFORMANCE
          <br />
          REVIEW
        </h1>
        <p>Kristina Vlasovets</p>
      </TopLeft>
      <BottomLeft>
        <a href="https://www.modsen-software.com/about-us">MODSEN</a>
      </BottomLeft>
      <BottomRight>
        Inspiration and ideas
        <br />
        Fundamentals
        <br />
        Finding models
        <br />
        Preparing them for the web
        <br />
        Displaying and changing models
        <br />
        Animation fundamentals
        <br />
        Effects and making things look good
        <br />
        Performance and time to load
        <br />
      </BottomRight>
      <Hamburger>
        <div />
        <div />
        <div />
      </Hamburger>

    </Container>
  )
}
