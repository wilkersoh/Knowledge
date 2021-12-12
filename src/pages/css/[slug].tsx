import { GetStaticProps, GetStaticPaths} from "next";

const Article = () => {
  return (
    <div>Show css article</div>
  )
};

export const getStaticPaths: GetStaticPaths = async () => {
  // const paths = await getLanguagePostPath();

  return {
    paths: [{ params: { slug: 'i-am-slug' } }],
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(`params: `, params)

  return {
    props: {
      data: [],
    },
  };
};



export default Article;
