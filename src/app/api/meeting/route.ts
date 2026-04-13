import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, meetingDate, meetingTime, message, formName, source } = body;

    if (!name || !email || !phone || !meetingDate || !meetingTime) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const timestamp = new Date().toISOString();
    const entry = [
      `========================================`,
      `Meeting Request - ${timestamp}`,
      `========================================`,
      `Name: ${String(name).slice(0, 200)}`,
      `Email: ${String(email).slice(0, 200)}`,
      `Phone: ${String(phone).slice(0, 30)}`,
      `Meeting Date: ${String(meetingDate).slice(0, 20)}`,
      `Meeting Time: ${String(meetingTime).slice(0, 20)}`,
      `Message: ${message ? String(message).slice(0, 1000) : 'N/A'}`,
      `Form: ${formName ? String(formName).slice(0, 200) : 'N/A'}`,
      `Source: ${source ? String(source).slice(0, 500) : 'N/A'}`,
      ``,
      ``,
    ].join('\n');

    const filePath = path.join(process.cwd(), 'public', 'meetings.txt');

    fs.appendFileSync(filePath, entry, 'utf-8');

    return NextResponse.json({ success: true, message: 'Meeting request saved' });
  } catch (error) {
    console.error('Error saving meeting:', error);
    return NextResponse.json({ error: 'Failed to save meeting request' }, { status: 500 });
  }
}
