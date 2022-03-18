import { GetStaticProps } from "next";
import Container from "@/components/Container";

export default function Home({ data }) {
  console.log(`data: `, data)
  return (
    <Container>
      <div>Listing Homepage</div>
    </Container>
  );
}


export const getStaticProps: GetStaticProps = async () => {

    return {
      props: {
        data: []
      }
    };
}