import Link from "next/link";

export default function MealDetailPage({ params }) {
  return (
    <main>
      <h1>Meal Detail Page</h1>
      <p>{params.mealSlug}</p>
      <p>
        <Link href="/meals">Go Back</Link>
      </p>
    </main>
  );
}
