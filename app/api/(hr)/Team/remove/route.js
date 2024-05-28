// pages/api/hr/teams/[teamId]/remove-member.js

import connectDB from '@/database/db';
import Team from '@/models/Teams';
import User from '@/models/User';
import { NextResponse } from 'next/server';
import { getSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import authOptions from '@/app/api/auth/[...nextauth]/option';

export const PUT = async (req, res) => {
    const session = await getServerSession(authOptions)
    if (!session || session.user.role !== 'HR') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const { teamId,userId } = await req.json();

    await connectDB();

    try {
        const team = await Team.findById(teamId);
        if (!team) {
            return NextResponse.json({ error: 'Team not found' });
        }

        const user = await User.findById(userId);
        if (!user) {
            return NextResponse.json({ error: 'User not found' });
        }

        if (!team.members.includes(user._id)) {
            return NextResponse.json({ error: 'User is not a member of the team' });
        }

        team.members = team.members.filter(member => member.toString() !== userId);
        await team.save();

        user.team = null;
        await user.save();

        return NextResponse.json({ message: 'User removed from the team successfully' });
    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
};
