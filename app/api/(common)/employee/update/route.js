import User from '@/models/User';
import { NextResponse } from 'next/server';
import { getSession } from 'next-auth/react';
import bcrypt from 'bcryptjs';
import authOptions from '@/app/api/auth/[...nextauth]/option';
import connectDB from '@/databse/db';
import { getServerSession } from 'next-auth';

export const PUT = async (req, res) => {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role == 'employee') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const data = await req.json();
    console.log(data)
    await connectDB();

    try {
        const updates = {};
        if (data.salary) updates.salary = data.salary;
        if (data.position) updates.position = data.position;
        if (data.password) updates.password = await bcrypt.hash(data.password, 10);

        const user = await User.findByIdAndUpdate(data.id, updates, { new: true }).select('-password');

        if (!user) {
            return NextResponse.json({ error: 'User not found' });
        }

        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
};
