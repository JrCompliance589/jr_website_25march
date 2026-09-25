import { NextRequest, NextResponse } from 'next/server';

const TRACKING_ENDPOINTS = {
  call: 'https://testhook.jrcompliance.com/call',
  whatsapp: 'https://testhook.jrcompliance.com/whatsapp',
} as const;

type TrackingEventType = keyof typeof TRACKING_ENDPOINTS;

function isTrackingEventType(value: string): value is TrackingEventType {
  return value in TRACKING_ENDPOINTS;
}

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ eventType: string }> }
) {
  const { eventType } = await context.params;

  if (!isTrackingEventType(eventType)) {
    return NextResponse.json(
      { error: 'Unsupported tracking event' },
      { status: 404 }
    );
  }

  try {
    const payload: unknown = await request.json();

    if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
      return NextResponse.json(
        { error: 'Invalid tracking payload' },
        { status: 400 }
      );
    }

    const webhookResponse = await fetch(TRACKING_ENDPOINTS[eventType], {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
      signal: AbortSignal.timeout(8000),
    });

    if (!webhookResponse.ok) {
      console.error(
        `${eventType} tracking webhook failed with status ${webhookResponse.status}`
      );

      return NextResponse.json(
        { error: 'Tracking webhook rejected the event' },
        { status: 502 }
      );
    }

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error(`${eventType} tracking proxy failed:`, error);

    return NextResponse.json(
      { error: 'Unable to deliver tracking event' },
      { status: 502 }
    );
  }
}
