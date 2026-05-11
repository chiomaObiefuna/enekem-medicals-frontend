type PageLoaderProps = {
  message?: string;
};

const PageLoader = ({ message = "Loading your care experience..." }: PageLoaderProps) => {
  return (
    <div
      className="flex min-h-[70vh] items-center justify-center bg-[#F0F7FF] px-5"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="flex flex-col items-center text-center">
        <div className="page-loader-icon-wrap relative flex h-28 w-28 items-center justify-center">
          <span className="page-loader-ring absolute inset-0 rounded-full border-2 border-[#102A43]/10 border-t-[#2F8F68]" />
          <span className="page-loader-glow absolute inset-3 rounded-full bg-[#2F8F68]/10" />

          <img
            src="/enekem-medicals-icon.svg"
            alt="Enekem Medicals"
            className="page-loader-icon relative z-10 h-16 w-16"
          />
        </div>

        <p className="mt-6 text-lg font-bold tracking-wide text-[#102A43]">
          ENEKEM MEDICALS
        </p>

        <p className="mt-2 text-sm text-[#64748B]">{message}</p>

        <div className="page-loader-line mt-5 h-1 w-32 overflow-hidden rounded-full bg-[#102A43]/10">
          <span className="block h-full w-[45%] rounded-full bg-[#2F8F68]" />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;