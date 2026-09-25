import { NextRequest, NextResponse } from 'next/server';

const LEAD_ENDPOINTS = {
  corporate: 'https://testhook.jrcompliance.com/corporate',
  technical: 'https://testhook.jrcompliance.com/technical',
  global: 'https://testhook.jrcompliance.com/global',
} as const;

type LeadType = keyof typeof LEAD_ENDPOINTS;

function isLeadType(value: string): value is LeadType {
  return value in LEAD_ENDPOINTS;
}

function isLeadPayload(
  value: unknown
): value is Record<string, unknown> & {
  name: string;
  email: string;
  phone: string;
} {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return false;
  }

  const payload = value as Record<string, unknown>;

  return ['name', 'email', 'phone'].every(
    (field) =>
      typeof payload[field] === 'string' &&
      payload[field].trim().length > 0
  );
}

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ leadType: string }> }
) {
  const { leadType } = await context.params;

  if (!isLeadType(leadType)) {
    return NextResponse.json(
      { error: 'Unsupported lead type' },
      { status: 404 }
    );
  }

  try {
    const payload: unknown = await request.json();

    if (!isLeadPayload(payload)) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 }
      );
    }

    const webhookResponse = await fetch(LEAD_ENDPOINTS[leadType], {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
      signal: AbortSignal.timeout(12000),
    });

    if (!webhookResponse.ok) {
      console.error(
        `${leadType} lead webhook failed with status ${webhookResponse.status}`
      );

      return NextResponse.json(
        { error: 'Unable to submit your request right now' },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Lead submitted successfully',
    });
  } catch (error) {
    console.error(`${leadType} lead proxy failed:`, error);

    return NextResponse.json(
      { error: 'Unable to submit your request right now' },
      { status: 502 }
    );
  }
}
