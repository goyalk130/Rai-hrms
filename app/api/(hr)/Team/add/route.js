// pages/api/hr/teams/[teamId]/add-member.js

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

    const data = await req.json();
    const {teamId, userId } = data;

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

        if (team.members.includes(user._id)) {
            return NextResponse.json({ error: 'User is already a member of the team' });
        }

        team.members.push(user._id);
        await team.save();

        user.team = team._id;
        await user.save();

        return NextResponse.json({ message: 'User added to the team successfully' });
    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
};
