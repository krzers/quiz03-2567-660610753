import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Nattapat bootsing",
    studentId: "660610753",
  });
};
