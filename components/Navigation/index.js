import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  width: 305px;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

const StyledLink = styled.a`
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
        <Link href="/">
          <StyledLink> Spotlight Piece </StyledLink>
        </Link>
        <Link href="/art-pieces">
          <StyledLink> All Art Pieces </StyledLink>
        </Link>
      </Container>
    </nav>
  );
}
