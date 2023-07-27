import type { NextPage } from "next";

import UserLayout from "@/components/UserLayout";
import { Container } from "@/components/Common/Container.styled";

const Home: NextPage = () => {
  return (
    <UserLayout title={"Головна"}>
      <Container>
        
        <br />
        <p>Головна</p>
      </Container>
    </UserLayout>
  );
};

export default Home;
