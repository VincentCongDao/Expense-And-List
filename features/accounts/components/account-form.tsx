import { z } from "zod";
import { Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { insertAccountsSchema } from "@/db/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";

const formSchema = insertAccountsSchema.pick({ name: true });

type FormValues = z.infer<typeof formSchema>;

type Prop = {
  id?: string;
  defaultValues?: FormValues;
  disabled?: boolean;
  onSubmit: (data: FormValues) => void;
  onDelete: () => void;
};

/**
 * A reusable form component for managing account data.
 *
 * @param {string} id - The unique identifier for the account.
 * @param {FormValues} defaultValues - The initial values for the form fields.
 * @param {boolean} disabled - A flag to disable the form.
 * @param {function} onSubmit - A callback function to handle form submission.
 * @param {function} onDelete - A callback function to handle account deletion.
 * @return {JSX.Element} The rendered form component.
 */
export const AccountForm = ({
  id,
  defaultValues,
  disabled,
  onSubmit,
  onDelete,
}: Prop) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  const handleSubmit = (data: FormValues) => {
    onSubmit(data);
    console.log(data);
  };
  const handleDelete = () => {
    onDelete?.();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-4 pt-4"
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  disabled={disabled}
                  placeholder="e.g. Cash, Bank, Credit Card"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="w-full" disabled={disabled}>
          {id ? "Save Changes" : "Create Account"}
        </Button>
        {!!id && (
          <Button
            type="button"
            variant="outline"
            onClick={handleDelete}
            className="w-full"
            disabled={disabled}
          >
            <Trash className="size-4 mr-2" />
          </Button>
        )}
      </form>
    </Form>
  );
};
