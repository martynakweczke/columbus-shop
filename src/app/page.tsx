import { Header } from "@/components/header/Header";
import styles from "./page.module.css";
import { ProductList } from "@/components/productList/ProductList";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className={styles.root}>
      <header>
        <Header title="Columbus Shop" />
      </header>

      <main className={styles.main}>
        <ProductList />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
