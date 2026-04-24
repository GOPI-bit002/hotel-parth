import { NextResponse } from "next/server";

type EnquiryPayload = {
  name?: string;
  phone?: string;
  email?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  roomType?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const data: EnquiryPayload = await request.json();

    if (!data.name || !data.phone || !data.email) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Log the enquiry server-side. Future: send via Resend / email service.
    console.log("[Hotel Parth] New booking enquiry:", {
      ...data,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        ok: true,
        message: "Enquiry received. We will respond within 24 hours.",
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }
}
