import { MAX_FILE_SIZE } from "@oauhub/shared";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
      {MAX_FILE_SIZE}
    </div>
  );
}
