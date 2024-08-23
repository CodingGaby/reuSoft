import { db, Assistant } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Assistant).values(
    [
      {
        id: crypto.randomUUID(),
        name: "Edgar Torres",
        enrollment: 20109645,
        email: "edgarlb28@outlook.com",
        social: "",
      },
    ]
  )
}
