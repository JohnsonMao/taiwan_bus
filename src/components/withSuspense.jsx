import { Suspense, lazy } from "react";

export default function withSuspense(importer, loading = null) {
  if (typeof importer !== "function") return null;

  const LazyComponent = lazy(importer);

  return (
    <Suspense fallback={loading}>
      <LazyComponent />
    </Suspense>
  );
}
