import {fetcher} from "../../../lib/api";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Header from "@/components/Header/Header";
import AdvertisingBlock from "@/components/AdvertisingBlock/AdvertisingBlock";
import Info from "@/components/Info/Info";
import Country from "@/components/Country/Country";
import Footer from "@/components/Footer /Footer";



const Blog = ({ blog }) => {
  const url = 'http://127.0.0.1:1337';
  const imageURL = url + `${blog.attributes.image.data[0].attributes.formats.large.url}`;
  return (
    <>
      <div  className='hero' style={{backgroundImage: `url(${imageURL})`}}>
        <Header />
        <p className='heading'>
          {blog.attributes.title}
        </p>
      </div>
      <div className='post'>
        <Info blog={ blog }/>
        <Country blog={ blog } />
      </div>
      <AdvertisingBlock />
      <Footer />
    </>
  )
}

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const blogResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/blog/${slug}?populate=*`
  );
  return {
    props: {
      blog: blogResponse.data,
    }
  }
}

export default Blog;