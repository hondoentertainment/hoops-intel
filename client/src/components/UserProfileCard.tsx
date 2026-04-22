import type { User } from "../lib/supabaseClient";

export default function UserProfileCard({ user }: { user: User }) {
  const name = user.user_metadata?.display_name ?? user.email.split("@")[0];
  const avatar = user.user_metadata?.avatar_url;

  return (
    <div className="flex items-center gap-2 px-2.5 py-1.5 rounded" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
      {avatar ? (
        <img src={avatar} alt={name} className="w-5 h-5 rounded-full" />
      ) : (
        <div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ background: "rgba(14,165,233,0.15)", color: "#0EA5E9" }}>
          {name.slice(0, 1).toUpperCase()}
        </div>
      )}
      <div className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>{name}</div>
    </div>
  );
}
