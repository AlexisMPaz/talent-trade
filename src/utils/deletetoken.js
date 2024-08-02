'use server';

import { cookies } from 'next/headers';

export async function deleteToken(name) {
  cookies().delete(`${name}`);
}
