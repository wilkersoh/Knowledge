import Head from "next/head";

const Layout: React.FC = ({children}) => {
  return (
    <>
      <Head>
        <meta name='Description' content={"test descript"}></meta>
        <title>{"Title page"}</title>
      </Head>
      <main>
        <div>{children}</div>
      </main>
    </>
  );
};

export default Layout;
