// pages/api/hr/leaves/index.js

import connectDB from '@/database/db';
import Leave from '@/models/Leaves';
import { NextResponse } from 'next/server';
import { getSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import authOptions from '@/app/api/auth/[...nextauth]/option';

export const POST = async (req, res) => {
    const session = await getServerSession(authOptions)
    if (!session || session.role !== 'HR') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const data = await req.json();
    await connectDB();

    try {
        const leave = await Leave.create(data);
        return NextResponse.json(leave);
    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
};
