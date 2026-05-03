import { Header } from "@/components/header/Header";
import styles from "./page.module.css";
import { ProductList } from "@/components/productList/ProductList";
import { Footer } from "@/components/footer/Footer";
import { apiClient } from "@/api/apiClient";

export default async function Home() {
  const exerciseData = await apiClient.getExerciseData();

  return (
    <div className={styles.root}>
      <header>
        <Header title="Columbus Shop" />
      </header>

      <main className={styles.main}>
        <ProductList products={exerciseData.products} />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
