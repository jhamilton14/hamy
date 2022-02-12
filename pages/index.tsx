import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>hamy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/gradient-icon.ico" />
      </Head>

      <Main>
        <Title>hamy's art</Title>
        <SubTitle>it's art</SubTitle>
      </Main>
    </Container>
  );
};

export default Home;

const Title = styled.div`
  margin: 0;
  line-height: 1.15;
  font-size: 2rem;
`;

const SubTitle = styled.div`
  font-size: 1.25rem;
  color: #adadad;
`;

const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  padding: 0 2rem;
`;
