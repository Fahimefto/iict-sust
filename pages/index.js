import ImageCarousel from "../components/home/ImageCarousel";
import Layout from "../components/common/Layout";
import Card from "../components/home/CardList";
import Notice from "../components/home/Notice";
import Events from "../components/home/Events";

export default function Home() {
  return (
    <Layout title="Home">
      <div>
        <ImageCarousel />
        <Card />
        <Notice />
        <Events />
        <Notice />
        <Notice />
      </div>
    </Layout>
  );
}
