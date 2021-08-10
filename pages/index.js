import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Courses | Aaron Panchal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="p-7 border-b sm:p-14 sticky top-0 bg-white">
        <h1 className="font-display font-bold lowercase text-xl sm:text-4xl">
          Courses
        </h1>
      </nav>

      <main className="p-7 sm:px-14 max-w-4xl">
        <div className="flex gap-x-7 text-sm sm:text-base">
          <div>
            <p className="font-mono text-lg sm:text-xl">CS-130</p>
            <p className="text-gray-500 font-normal">Fall 2021</p>
          </div>
          <p className="flex-1 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ultricies nulla nec elit venenatis, vel consequat nibh blandit.
            Praesent hendrerit consequat faucibus. Mauris vitae mattis nisi.
            Suspendisse potenti. Fusce rhoncus quis nisi id rhoncus. Nam
            pharetra iaculis fringilla. Aenean iaculis mauris leo, eu placerat
            nibh rutrum non. Nullam in lacus vel ex semper fringilla eleifend
            vel eros. Suspendisse feugiat erat est. Nunc lectus metus, facilisis
            non turpis et, tincidunt mollis leo. Vestibulum aliquet neque ut
            suscipit vehicula.
          </p>
        </div>
      </main>
    </div>
  );
}
