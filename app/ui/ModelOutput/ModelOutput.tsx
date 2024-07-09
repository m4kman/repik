import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

function ModelOutput({
  restoredPhoto,
  originalPhoto,
}: {
  restoredPhoto: string;
  originalPhoto: string;
}) {
  return (
    <div>
      {restoredPhoto === "" ? (
        <span className="mt-20 text-sm font-light italic text-slate-500">
          Your output will be shown here!
        </span>
      ) : (
        <div className="relative max-h-[1500px] min-h-[768px] min-w-[768px] max-w-[1500px] rounded-lg">
          <ReactCompareSlider
            className="rounded-lg"
            itemOne={
              <ReactCompareSliderImage
                src={originalPhoto}
                alt="Original Photo"
                className="rounded-lg"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src={restoredPhoto}
                alt="Restored Photo"
                className="rounded-lg"
              />
            }
          />{" "}
        </div>
      )}
    </div>
  );
}

export default ModelOutput;
