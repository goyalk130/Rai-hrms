// pages/api/hr/teams/[teamId].js

import connectDB from '@/database/db';
import Team from '@/models/Teams';
import User from '@/models/User';
import { NextResponse } from 'next/server';
import { getSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import authOptions from '@/app/api/auth/[...nextauth]/option';

export const DELETE = async (req, res) => {
    const session = await getServerSession(authOptions)
    if (!session || session.user.role !== 'HR') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const { teamId } = req.query;

    await connectDB();

    try {
        const team = await Team.findByIdAndDelete(teamId);
        if(!team) {
            return NextResponse.json({ error: 'Team not found' });
        }

        // Remove the team reference from all users
        await User.updateMany(
            { _id: { $in: team.members } },
            { $set: { team: null } }
        );

        return NextResponse.json({ message: 'Team deleted and users removed from team successfully' });
    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
};
