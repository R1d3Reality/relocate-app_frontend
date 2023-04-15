import Blog from "@/components/Blog/Blog";
import {fetcher} from "../../../lib/api";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const Index = ({ blogs }) => {

  return (
    <>
      <Blog blogs={ blogs } />
    </>
  )
}


export default Index;

export async function getStaticProps() {
  const dataResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?populate=*`);
  console.log(dataResponse);
  return {
    props: {
      blogs: dataResponse
    }
  }
}