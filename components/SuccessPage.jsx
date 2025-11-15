import { Suspense } from "react";
import SuccessContent from "./SuccessContent";

function SuccessPage() {
  return (
    <Suspense>
      <SuccessContent />
    </Suspense>
  );
}

export default SuccessPage;
