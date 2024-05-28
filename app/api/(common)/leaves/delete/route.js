// pages/api/hr/leaves/[id].js

import connectDB from '@/database/db';
import Leave from '@/models/Leaves';
import { NextResponse } from 'next/server';
import { getSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import authOptions from '@/app/api/auth/[...nextauth]/option';

export const DELETE = async (req, res) => {
    const session = await getServerSession(authOptions)
    if (!session || session.user.role !== 'HR') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    await connectDB();
    const { id } = await req.json();

    try {
        await Leave.findByIdAndDelete(id);
        return NextResponse.json({ message: 'Leave request deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
};
