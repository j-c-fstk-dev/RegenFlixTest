import { createSupabaseServerClient } from "../../../lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json(
      {
        error: "You are not authorized to make this request.",
      },
      { status: 401 }
    );
  }

  const {
    content_id,
    content_type,
    percentage_complete,
    current_video_time,
    completed_lessons,
  } = await request.json();

  const { data, error } = await supabase
    .from("user_progress")
    .upsert({
      user_id: user.id,
      content_id,
      content_type,
      percentage_complete,
      current_video_time,
      completed_lessons,
      updated_at: new Date().toISOString(),
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function GET(request: Request) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json(
      {
        error: "You are not authorized to make this request.",
      },
      { status: 401 }
    );
  }

  const { searchParams } = new URL(request.url);
  const content_id = searchParams.get("content_id");

  if (!content_id) {
    return NextResponse.json(
      { error: "content_id is required" },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("user_progress")
    .select("*")
    .eq("user_id", user.id)
    .eq("content_id", content_id)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
