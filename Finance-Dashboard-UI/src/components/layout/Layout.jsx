import Header from "./Header";
import MobileNav from "./MobileNav";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-zinc-50 dark:bg-zinc-900">
      <div className="hidden md:flex w-64 shrink-0">
        <Sidebar />
      </div>

      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto px-4 py-4 pb-24 md:px-6 md:py-6 md:pb-6">
          {children}
        </main>
      </div>

      <MobileNav />
    </div>
  );
};

export default Layout;
