import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <>
      <Heading>
        <TitleContainer>Rick and Morty App</TitleContainer>
      </Heading>
      <Navbar>{children}</Navbar>
    </>
  );
};

export default Layout;

const Heading = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #ff3131;
`;

const TitleContainer = styled.h1`
  color: #ff3131;
`;

const Navbar = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 3rem;
  border-top: 2px solid #ff3131;
`;
