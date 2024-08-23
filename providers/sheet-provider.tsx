"use client";

import { useMountedState } from "react-use";
import NewAccountSheet from "@/features/accounts/components/new-account-sheet";

const SheetProvider = () => {
  const isMounted = useMountedState();
  /*
   * Using useMountedState is similar to useEffect except that it does not return a cleanup function.
   * The example below will not return a cleanup function.
   * The orginal way is:
   * const [isMounted, setIsMounted] = useState(false);
   * useEffect(() => {
   *   setIsMounted(true);
   * }, []);
   */
  if (!isMounted) {
    return null;
  }
  return (
    <>
      <NewAccountSheet></NewAccountSheet>
    </>
  );
};

export default SheetProvider;
