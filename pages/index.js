import ImageCarousel from "../components/home/ImageCarousel";
import Layout from "../components/common/Layout";
import Card from "../components/home/CardList";
import Notice from "../components/home/Notice";
import Events from "../components/home/Events";
import Achievements from "../components/home/Achievements";
import Collab from "../components/home/Collab";

export default function Home() {
  return (
    <Layout title="Home">
      <div>
        <ImageCarousel />
        <Card />
        <Notice />
        <Events />
        <Achievements />
        <Collab />
      </div>
    </Layout>
  );
}
