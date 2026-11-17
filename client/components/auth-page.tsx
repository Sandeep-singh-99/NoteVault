import Link from "next/link";
import { ArrowLeft, BookOpen, Check, FileText } from "lucide-react";
import { AuthForm } from "@/components/auth-form";

export function AuthPage({ mode }: { mode: "login" | "signup" }) {
  const signup = mode === "signup";
  return (
    <main className="grid min-h-svh bg-background text-foreground lg:grid-cols-2">
      <aside className="relative hidden flex-col justify-between overflow-hidden border-r border-border bg-surface p-12 lg:flex xl:p-16">
        <Link href="/" className="flex w-fit items-center gap-3 text-xl font-semibold"><BookOpen aria-hidden="true" className="text-accent" />NoteVault<span className="text-accent">.</span></Link>
        <div className="relative mx-auto w-full max-w-lg py-16">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-accent">A little space for big ideas</p>
          <h2 className="text-5xl font-semibold leading-[1.12] tracking-tight xl:text-6xl">Your thoughts.<br />All together.<br /><span className="text-accent">Beautifully simple.</span></h2>
          <p className="mt-6 max-w-sm text-base leading-7 text-muted-foreground">From a fleeting thought to your next big project. Give every idea a place to grow.</p>
          <div className="mt-10 rounded-2xl border border-border bg-background p-6">
            <div className="mb-5 flex items-center gap-2 border-b border-border pb-4 text-xs text-muted-foreground"><FileText aria-hidden="true" size={16} />My workspace<span className="ml-auto rounded bg-accent/10 px-2 py-1 text-accent">Personal</span></div>
            <p className="mb-4 text-lg font-medium">Make room for what matters.</p>
            {["Capture that spark of inspiration", "Connect the dots between ideas", "Build something worth keeping"].map((text) => <p key={text} className="mt-3 flex items-center gap-3 text-sm text-muted-foreground"><Check aria-hidden="true" className="size-4 text-accent" />{text}</p>)}
          </div>
        </div>
        <p className="text-xs text-muted-foreground">Less clutter. More clarity.</p>
      </aside>
      <section className="flex min-w-0 flex-col px-6 py-8 sm:px-12">
        <Link href="/" className="flex min-h-11 w-fit items-center gap-2 rounded text-sm text-muted-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent"><ArrowLeft aria-hidden="true" size={16} />Back to NoteVault</Link>
        <div className="m-auto w-full max-w-sm py-10">
          <div className="mb-8 flex size-12 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10 text-accent"><BookOpen aria-hidden="true" size={24} /></div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{signup ? "Start your next chapter" : "Your ideas are waiting"}</p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{signup ? "Create your account" : "Welcome back"}</h1>
          <p className="mb-8 mt-3 text-sm leading-6 text-muted-foreground">{signup ? "A home for your notes, projects, and everything in between." : "Sign in and pick up right where you left off."}</p>
          <AuthForm mode={mode} />
        </div>
        <p className="text-center text-xs text-muted-foreground">Your next great idea starts with a note.</p>
      </section>
    </main>
  );
}
