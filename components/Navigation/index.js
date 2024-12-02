import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
  width: 305px;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

const StyledLink = styled(Link)`
  position: relative;
  padding: 10px 20px;
  font-size: 16px;
  color: #333;
  text-decoration: none;
  border: none;
  transition: all 0.3s ease;
  display: inline-block;
  cursor: pointer;

  &:hover {
    background-color: lightgrey;
    border-radius: 5px;
  }
`;

export default function Navigation() {
  return (
    <nav>
      <Container>
        <StyledLink href="/"> Spotlight Piece </StyledLink>
        <StyledLink href="/art-pieces"> All Art Pieces </StyledLink>
      </Container>
    </nav>
  );
}
