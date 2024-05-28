// pages/api/hr/employees/[id].js

import { NextResponse } from "next/server";
import User from "@/models/User";
import Team from "@/models/Teams";
import connectDB from "@/databse/db";
import authOptions from "@/app/api/auth/[...nextauth]/option";
import { getServerSession } from "next-auth";

export const GET = async (req, {params} ) => {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role == "employee") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }
  // Define the limit and page number for pagination
  const limit = 5;
  let page = parseInt(params.page);

  // Calculate the offset based on the page number and limit
  const offset = (page - 1) * limit;
  await connectDB();

  try {
    const user = await User.find({ role: "employee" }).skip(offset).limit(limit).select("-password");

    return NextResponse.json({ message: "Employees", users: user });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
};
