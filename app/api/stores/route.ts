import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';

import prismadb from '@/lib/prismadb';

export async function POST(
  req: Request,
) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { name } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    // if there is user id and name then create a new store
    const store = await prismadb.store.create({
      data: {
        name,
        userId,
      }
    });
  
    return NextResponse.json(store);
  } catch (error) {
    console.log('[STORES_POST]', error);//from the store dir and post method
    return new NextResponse("Internal error", { status: 500 });
  }
};
