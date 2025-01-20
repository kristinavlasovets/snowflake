import {
  Container,
  TopLeft,
  BottomLeft,
  BottomRight,
  Hamburger,
} from "./style";

export default function Overlay() {
  return (
    <Container>
      <TopLeft>
        <h1>
          PERFORMANCE
          <br />
          REVIEW 22/01
          <br />
        </h1>
        <p>KRISTINA VLASOVETS</p>
        <p>22/01/2025</p>
      </TopLeft>
      <BottomLeft>
      <h4><a href="https://www.modsen-software.com/about-us">MODSEN</a></h4>
      </BottomLeft>
      <BottomRight>
        <h3>
THANK YOU AND
        </h3>
        <h3>
          HAPPY NEW YEAR!
        </h3>

        <h3>
          ❄️ 🎄 🎅🏼
        </h3>
      </BottomRight>
      <Hamburger>
        <div />
        <div />
        <div />
      </Hamburger>
    </Container>
  );
}
