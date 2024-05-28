// pages/api/hr/leaves/index.js

import connectDB from '@/database/db';
import Leave from '@/models/Leaves';
import { NextResponse } from 'next/server';
import { getSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import authOptions from '@/app/api/auth/[...nextauth]/option';

export const GET = async (req, res) => {
    const session = await getServerSession(authOptions)
    if (!session || session.role !== 'HR') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    await connectDB();

    try {
        const leaves = await Leave.find().populate('user', 'name email');
        return NextResponse.json(leaves);
    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
};
