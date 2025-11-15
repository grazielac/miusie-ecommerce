import { Suspense } from "react";
import SuccessContent from "./SuccessContent";

function SuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}

export default SuccessPage;
