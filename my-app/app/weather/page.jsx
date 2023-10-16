import Sidebar from "@/components/Sidebar";
import Weather from "@/components/Weather";

export default function page() {
  return (
    <>
      {" "}
      <div className="flex  h-screen">
        <Weather />
      </div>
    </>
  );
}
