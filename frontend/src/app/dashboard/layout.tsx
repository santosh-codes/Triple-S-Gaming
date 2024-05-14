import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className=" ">
        {/* <Sidebar /> */}
        {/* <Navbar /> */}
        <div className="">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
