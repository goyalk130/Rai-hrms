// pages/api/hr/leaves/[id].js

import connectDB from '@/database/db';
import Leave from '@/models/Leaves';
import { NextResponse } from 'next/server';
import { getSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import authOptions from '@/app/api/auth/[...nextauth]/option';

export const PUT = async (req, res) => {
    const session = await getServerSession(authOptions)
    if (!session || session.role !== 'HR') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    await connectDB();
    const data = await req.json();

    try {
        const leave = await Leave.findByIdAndUpdate(data.id, {status:data.status}, { new: true });
        return NextResponse.json(leave);
    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
};
