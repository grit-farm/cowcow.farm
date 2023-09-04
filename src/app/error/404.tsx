import Link from "next/link";

export default function Custom404() {
  return (
    <section className="bg-white min-h-screen flex">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 flex content-center items-center">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600">
            😅 404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
            That page doesn’t exist.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 ">
            Sorry, we can&apos;t find that page. <br />
            You&apos;ll find lots to explore on the home page.
          </p>
          <Link
            href="/"
            className="inline-flex font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4 bg-gradient-to-r from-sky-200 to-violet-200 hover:from-sky-300 hover:to-violet-300"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
