import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="">
      <p>This is authernation user</p>
      <UserButton />
    </div>
  );
}
