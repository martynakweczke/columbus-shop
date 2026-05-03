import { Header } from "@/components/header/Header";
import styles from "./page.module.css";
import { ProductList } from "@/components/productList/ProductList";
import { Footer } from "@/components/footer/Footer";
import { apiClient } from "@/api/apiClient";

export default async function Home() {
  const columbusRecruitmentData = await apiClient.getColumbusRecruitmentData();

  return (
    <div className={styles.root}>
      <header>
        <Header />
      </header>

      <main className={styles.main}>
        <ProductList products={columbusRecruitmentData.products} />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
