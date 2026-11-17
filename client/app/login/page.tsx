import { AuthPage } from "@/components/auth-page";

export const metadata = { title: "Sign in | NoteVault" };

export default function LoginPage() {
  return <AuthPage mode="login" />;
}
