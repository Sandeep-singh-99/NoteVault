"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { ArrowRight, Camera, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { validateProfilePhoto } from "@/lib/profile-photo";

export function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const signup = mode === "signup";
  const id = useId();
  const [preview, setPreview] = useState("");
  const [photoError, setPhotoError] = useState("");
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => () => { if (preview) URL.revokeObjectURL(preview); }, [preview]);

  return (
    <form className="space-y-5" onSubmit={(event) => {
      event.preventDefault();
      // shortcut: UI only until authentication and upload endpoints are available.
      setMessage("Authentication is not connected yet. Your details and photo have not been sent or saved.");
    }}>
      <Button
        type="button"
        variant="outline"
        className="h-12 w-full gap-3 rounded-full border-[#747775] bg-white font-medium text-[#1F1F1F] shadow-none hover:border-[#747775] hover:bg-[#F2F2F2] hover:text-[#1F1F1F] active:scale-100"
        onClick={() => setMessage("Google sign-in is not connected yet. Please try again once authentication is configured.")}
      >
        <svg aria-hidden="true" focusable="false" className="size-5 shrink-0" viewBox="0 0 48 48">
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z" />
          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6C44.4 38.03 46.98 31.87 46.98 24.55Z" />
          <path fill="#FBBC05" d="M10.53 28.59C10.05 27.14 9.78 25.6 9.78 24s.27-3.14.75-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24s.92 7.54 2.56 10.78l7.97-6.19Z" />
          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.15 1.45-4.92 2.3-8.18 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z" />
        </svg>
        Continue with Google
      </Button>
      <div className="flex items-center gap-3 text-xs text-muted-foreground">
        <span aria-hidden="true" className="h-px flex-1 bg-border" />
        <span>or continue with email</span>
        <span aria-hidden="true" className="h-px flex-1 bg-border" />
      </div>
      {signup && <>
        <div className="flex items-center gap-4 rounded-xl border border-border bg-background p-4">
          <div className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-accent/10 text-accent">
            {/* eslint-disable-next-line @next/next/no-img-element -- Local object URL preview. */}
            {preview ? <img src={preview} alt="Selected profile photo" className="size-full object-cover" /> : <Camera aria-hidden="true" className="size-6" />}
          </div>
          <div className="min-w-0 space-y-1">
            <label htmlFor={`${id}-photo`} className="text-sm font-medium text-foreground">Profile photo <span className="font-normal text-muted-foreground">(optional)</span></label>
            <input id={`${id}-photo`} name="photo" type="file" accept="image/jpeg,image/png,image/webp" aria-describedby={`${id}-photo-help ${id}-photo-error`} aria-invalid={!!photoError} className="block w-full text-xs file:mr-2 file:cursor-pointer file:rounded-md file:border-0 file:bg-accent/15 file:px-2 file:py-2 file:text-accent focus-visible:outline-2 focus-visible:outline-accent" onChange={(event) => {
              const file = event.target.files?.[0];
              if (!file) return;
              const error = validateProfilePhoto(file);
              if (error) {
                setPhotoError(error);
                event.target.value = "";
                return;
              }
              setPhotoError("");
              setPreview(URL.createObjectURL(file));
            }} />
            <p id={`${id}-photo-help`} className="text-xs text-muted-foreground">JPG, PNG or WebP. Max 5 MB.</p>
          </div>
        </div>
        <p id={`${id}-photo-error`} role="alert" className="empty:hidden text-sm text-red-400">{photoError}</p>
        <div className="space-y-2">
          <label htmlFor={`${id}-name`} className="text-sm font-medium text-foreground">Full name</label>
          <Input id={`${id}-name`} name="name" autoComplete="name" placeholder="Alex Morgan" required maxLength={100} pattern=".*\S.*" />
        </div>
      </>}
      <div className="space-y-2">
        <label htmlFor={`${id}-email`} className="text-sm font-medium text-foreground">Email address</label>
        <Input id={`${id}-email`} name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
      </div>
      <div className="space-y-2">
        <label htmlFor={`${id}-password`} className="text-sm font-medium text-foreground">Password</label>
        <div className="relative">
          <Input id={`${id}-password`} name="password" type={visible ? "text" : "password"} autoComplete={signup ? "new-password" : "current-password"} placeholder={signup ? "Create a password" : "Enter your password"} minLength={signup ? 8 : undefined} required className="pr-14" aria-describedby={signup ? `${id}-password-help` : undefined} />
          <button type="button" aria-label={visible ? "Hide password" : "Show password"} aria-pressed={visible} onClick={() => setVisible(!visible)} className="absolute inset-y-0 right-0 flex w-12 cursor-pointer items-center justify-center rounded-xl text-muted-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent">
            {visible ? <EyeOff aria-hidden="true" size={18} /> : <Eye aria-hidden="true" size={18} />}
          </button>
        </div>
        {signup && <p id={`${id}-password-help`} className="text-xs text-muted-foreground">Use at least 8 characters.</p>}
      </div>
      <Button type="submit" className="h-12 w-full" disabled={!!photoError}>{signup ? "Create account" : "Sign in"}<ArrowRight aria-hidden="true" size={16} /></Button>
      <p role="status" className="empty:hidden rounded-xl border border-accent/30 bg-accent/10 p-3 text-sm text-foreground">{message}</p>
      <p className="text-center text-sm text-muted-foreground">{signup ? "Already have an account?" : "New to NoteVault?"}{" "}<Link href={signup ? "/login" : "/signup"} className="rounded text-accent underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-accent">{signup ? "Sign in" : "Create an account"}</Link></p>
    </form>
  );
}
