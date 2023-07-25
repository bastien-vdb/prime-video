import { Suspense, lazy } from "react";
const CommonRow = lazy(() =>
  import("../../components/subComponents/Rows/CommonRow")
);

export default function Ligue() {
  return (
    <>
      <div className="my-8 ml-[48px] text-3xl font-bold tracking-wide ">
        <h1>Retrouvez tous vos documentaires</h1>
      </div>
      <div className="rows__container">
        <CommonRow
          title="Films actuellement en tendance"
          searchHookChooser="select"
          type="movie"
          filter="genre"
          param="99"
        />
      </div>
    </>
  );
}
