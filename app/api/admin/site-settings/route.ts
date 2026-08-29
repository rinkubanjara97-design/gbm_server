import { NextRequest, NextResponse } from 'next/server'
import { getSiteSettings, saveSiteSettings } from '@/lib/supabase/service'

export async function GET() {
  const settings = await getSiteSettings()
  return NextResponse.json(settings)
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const result = await saveSiteSettings(body)
    if (result.success) {
      return NextResponse.json({ success: true })
    }
    return NextResponse.json({ success: false, error: result.error }, { status: 400 })
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}
