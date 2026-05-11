import { RefreshCw, WifiOff } from "lucide-react";

const OfflinePage = () => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F0F7FF] px-5">
      <div className="offline-card w-full max-w-lg rounded-[2rem] border border-[#D8E8EE] bg-white p-8 text-center shadow-[0_28px_90px_rgba(16,42,67,0.12)] sm:p-10">
        <div className="offline-icon-wrap mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#F3F8FA]">
          <img
            src="/enekem-medicals-icon.svg"
            alt="Enekem Medicals"
            className="h-14 w-14"
          />
        </div>

        <div className="mx-auto mt-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF8EC] text-[#A56A13]">
          <WifiOff size={24} strokeWidth={2.5} />
        </div>

        <p className="mt-6 text-sm font-bold uppercase tracking-[0.22em] text-[#2F8F68]">
          Connection Lost
        </p>

        <h1 className="mt-4 text-2xl font-semibold text-[#102A43] sm:text-3xl">
          You appear to be offline.
        </h1>

        <p className="mt-4 leading-relaxed text-[#64748B]">
          Please check your internet connection and try again. Once your
          connection is restored, the website will return automatically.
        </p>

        <button
          type="button"
          onClick={handleRetry}
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#102A43] px-7 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#0E3442]"
        >
          <RefreshCw size={18} strokeWidth={2.5} />
          Try Again
        </button>
      </div>
    </main>
  );
};

export default OfflinePage;