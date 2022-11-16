import "../styles/globals.css";
import Link from "next/link";
import Layout from "./components/Layout";
import styled from "styled-components";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <NavContainer>
        <Link href="/home">Home</Link>
        <Link href="/favourites">Favourites</Link>
        <Link href="/random">Random</Link>
        <Link href="/profile">Profile</Link>
      </NavContainer>
    </Layout>
  );
}

export default MyApp;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  color: #ff3131;
`;
