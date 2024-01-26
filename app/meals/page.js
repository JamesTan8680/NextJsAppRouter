import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "../components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <header className={classes.header}>
      <h1>
        Delicious meals, created
        <span className={classes.highlight}>by you</span>
      </h1>
      <p>
        Choose your favourite recipe and cook it yourself. It is easy and fun
      </p>
      <p className={classes.cta}>
        <Link href="/meals/share">Share your Favourite Recipe</Link>
      </p>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </header>
  );
}
