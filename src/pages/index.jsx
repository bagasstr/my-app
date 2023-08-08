import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Home = ({ data }) => {
  return (
    <>
      <div className="">
        {data.map((item) => (
          <h1>{item.title}</h1>
        ))}
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch("https://my-app-livid-alpha.vercel.app/api/hello");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
export default Home;
