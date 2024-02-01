// "use client";
import { deleteMeal, getMeal } from "@/lib/meals";
import classes from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
import DeleteMeal from "@/app/components/meals/DeleteMeal";

export default function MealDetailsPage({ params }) {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  } else {
    meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  }

  const handleDeleteMeal = () => {
    try {
      console.log("This title meal is deleted" + meal.title);
      // await deleteMeal(meal.title);
    } catch (error) {
      console.error("Error deleting meal:", error.message);
    }
  };

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>

          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
          <button onClick={handleDeleteMeal}>DELETE MEAL</button>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
