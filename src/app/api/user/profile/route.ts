import { createSupabaseServerClient } from "../../../../lib/supabase/server";
import { NextResponse } from "next/server";
import { UserProfile } from "../../../../types/UserProfile";

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

  const { data, error } = await supabase
    .from("user_profiles")
    .select("*")
    .eq("user_id", user.id)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

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

  const { name, avatar_url, website }: Partial<UserProfile> = await request.json();

  const { data, error } = await supabase
    .from("user_profiles")
    .upsert({
      user_id: user.id,
      name,
      avatar_url,
      website,
      updated_at: new Date().toISOString(),
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
