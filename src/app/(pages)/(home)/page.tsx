import Image from "next/image";
import { cn } from "@/app/lib/utils";
import styles from "@/app/styles/home.module.scss";

export default function Home() {
  return (
    <main className={cn(styles.home)}>
      <div className={styles.home__hero}>
        <img className={styles.home__hero__image} src="/park-stroll.png" alt="Park Stroll"/>
        <h1 className={styles.home__hero__title}>
          FLAWLESSLY DESIGNED,
          <br />
          FRESH BLOOMS with
          <br />
          FIVE-STAR CRAFTSMANSHIP
        </h1>
      </div>
    </main>
  );
}
