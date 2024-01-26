"use server";

import { redirect } from "next/navigation";
import { storeMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInValidText(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(prevState, formData) {
  //form submission with help of server action
  //create a server action

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instruction: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInValidText(meal.title) ||
    isInValidText(meal.summary) ||
    isInValidText(meal.instruction) ||
    isInValidText(meal.creator) ||
    isInValidText(meal.creator_email) ||
    !meal.creator_email.includes("@") || //check whether the email creator do not have @
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input.",
    };
  }

  await storeMeal(meal);
  revalidatePath("/meals"); //remove the cache
  redirect("/meals");
}
