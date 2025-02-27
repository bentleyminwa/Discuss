import { signIn, signOut } from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/profile";
import { Button } from "@heroui/react";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <h1>Home Page</h1>
      <form action={signIn}>
        <Button type="submit">Sign In</Button>
      </form>

      <form action={signOut}>
        <Button type="submit">Sign Out</Button>
      </form>

      {session?.user ? (
        <div>{JSON.stringify(session.user)}</div>
      ) : (
        <div>Signed Out!</div>
      )}

      <Profile />
    </div>
  );
}
