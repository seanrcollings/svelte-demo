import type { PageServerLoad, Actions } from "./$types";

const db = {
  val: 0,
};

export const load = (async () => {
  return { val: db.val };
}) satisfies PageServerLoad;

export const actions = {
  decrement: () => {
    db.val--;
  },
  increment: () => {
    db.val++;
  },
  reset: () => {
    db.val = 0;
  },
} satisfies Actions;
