import ImageCarousel from "../components/ImageCarousel";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <div>
        <ImageCarousel />
      </div>
    </Layout>
  );
}
