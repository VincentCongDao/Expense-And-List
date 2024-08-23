"use client";
import { Button } from "@/components/ui/button";
import NewAccountSheet from "@/features/accounts/components/new-account-sheet";
import { useNewAccounts } from "@/features/accounts/hooks/use-new-accounts";

export default function Home() {
  const { onOpen } = useNewAccounts();
  return (
    <div>
      Dashboard Page
      <Button onClick={onOpen}>Add a new account</Button>
    </div>
  );
}
