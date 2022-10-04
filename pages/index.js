import About from "../components/About";
import ImageSlider from "../components/ImageSlider";
import Layout from "../components/Layout";
import Notice from "../components/Notice";

export default function Home() {
  return (
    <Layout title="Home">
      <ImageSlider />
      <About />
      <Notice />
    </Layout>
  );
}
