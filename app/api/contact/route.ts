import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // TODO: Wire up your preferred email service (Resend, SendGrid, Postmark, etc.)
    // Example with Resend:
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //   await resend.emails.send({ from: ..., to: ..., subject: ..., html: ... });

    console.log("New contact submission:", body);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to submit" },
      { status: 500 }
    );
  }
}
