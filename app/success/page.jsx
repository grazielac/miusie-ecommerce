import { Suspense } from "react";
import SuccessContent from "./SuccessContent";

// tels next.js to render this page dynamically on each request instead of trying to pre-render it at build time
export const dynamic = 'force-dynamic';

function SuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}

export default SuccessPage;
