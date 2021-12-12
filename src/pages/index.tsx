import { GetStaticProps } from "next";
import Container from "@/components/Container";
import { getAllPostSlugs } from "@/utils/getPostData";

export default function Home({data}) {
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