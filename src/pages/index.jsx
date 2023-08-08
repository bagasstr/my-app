import Image from "next/image";
import { Inter } from "next/font/google";
import Product from "./component/Product";

const inter = Inter({ subsets: ["latin"] });

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/hello`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
const Home = ({ data }) => {
  return (
    <>
      <div className="">
        <Product data={data} />
      </div>
    </>
  );
};

export default Home;
