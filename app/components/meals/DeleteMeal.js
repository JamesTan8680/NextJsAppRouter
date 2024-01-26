"use client";

import { deleteMeal } from "@/lib/meals";

export default function DeleteMeal({ slug }) {
  const handleDeleteMeal = async () => {
    try {
      await deleteMeal(slug);
    } catch (error) {
      console.error("Error deleting meal:", error.message);
    }
  };

  return <button onClick={handleDeleteMeal}>DELETE MEAL</button>;
}
