import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { client } from "@/lib/hono";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

type ResponseType = InferResponseType<typeof client.api.accounts.$post>;
/**
 * RequestType is the type of the request that is accepting zValidator from POST hono
 */
type RequestType = InferRequestType<typeof client.api.accounts.$post>["json"];

export const useCreateAccount = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.accounts.$post({ json });
      if (!response.ok) {
        throw new Error("Failed to create account");
      }
      return response.json();
    },
    onSuccess: () => {
      toast.success("Welcome! Account created successfully");
      queryClient.invalidateQueries({ queryKey: ["accounts"] });
    },
    onError: () => {
      toast.error("Failed to create account");
    },
  });

  return mutation;
};
