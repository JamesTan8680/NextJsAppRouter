import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";

//Output a bunch of meal items in a grid
export default function MealsGrid({ meals }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
