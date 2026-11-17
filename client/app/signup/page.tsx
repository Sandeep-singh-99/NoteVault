import { AuthPage } from "@/components/auth-page";

export const metadata = { title: "Create account | NoteVault" };

export default function SignupPage() {
  return <AuthPage mode="signup" />;
}
