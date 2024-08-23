"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useNewAccounts } from "../hooks/use-new-accounts";
import { AccountForm } from "./account-form";
import { insertAccountsSchema } from "@/db/schema";
import { z } from "zod";
import { useCreateAccount } from "../api/use-create-account";

const formSchema = insertAccountsSchema.pick({ name: true });

type FormValues = z.infer<typeof formSchema>;

const NewAccountSheet = () => {
  const { isOpen, onClose } = useNewAccounts();

  const mutation = useCreateAccount();
  /**
   * Handles form submission by triggering the create account mutation.
   *
   * @param {FormValues} data - The form data to be submitted.
   * @return {void}
   */
  const onSubmit = (data: FormValues) => {
    mutation.mutate(data, {
      onSuccess: () => {
        onClose();
      },
    });
  };
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>New Account</SheetTitle>
          <SheetDescription>
            Create a new account to track your transactions
          </SheetDescription>
          <AccountForm
            onSubmit={onSubmit}
            disabled={mutation.isPending}
            defaultValues={{
              name: "",
            }}
            onDelete={() => {}}
          />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default NewAccountSheet;
