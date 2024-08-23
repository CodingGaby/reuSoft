import { defineDb, defineTable, column, NOW } from 'astro:db';

const Assistant = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text(),
    enrollment: column.number({ unique: true }),
    email: column.text({ unique: true }),
    social: column.text({ optional: true }),
    _createdAt: column.date({ default: NOW })
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    Assistant
  }
});
