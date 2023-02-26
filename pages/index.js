import ImageCarousel from "../components/ImageCarousel";
import Layout from "../components/common/Layout";
import Card from "../components/CardList";
import Notice from "../components/Notice";

export default function Home() {
  return (
    <Layout title="Home">
      <div>
        <ImageCarousel />
        <Card />
        <Notice />
      </div>
    </Layout>
  );
}
