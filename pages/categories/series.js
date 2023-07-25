import { Suspense, lazy } from "react";
const CommonRow = lazy(() =>
  import("../../components/subComponents/Rows/CommonRow")
);

export default function Series() {
  return (
    <>
      <div className="my-8 ml-[48px] text-3xl font-bold tracking-wide ">
        <h1>
          Toutes vos séries{" "}
          <span className="text-clairs-primeLogoColor">Prime</span>
        </h1>
      </div>
      <div className="rows__container">
        <CommonRow
          title="Drame et Action"
          searchHookChooser="select"
          type="tv"
          filter="genre"
          param="10759,18"
        />
        <CommonRow
          title="Comédies"
          searchHookChooser="select"
          type="tv"
          filter="genre"
          param="10768"
        />
      </div>
    </>
  );
}
