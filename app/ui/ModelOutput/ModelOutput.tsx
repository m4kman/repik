"use client";
import { useState } from "react";
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
  const [loaded, setLoaded] = useState(0);
  const imageStyle = {
    opacity: loaded === 2 ? 1 : 0,
    transition: "opacity 1s 0.5s ease-in-out",
  };
  return (
    <div>
      {restoredPhoto === "" ? (
        <span className="mt-20 text-sm font-light italic text-slate-500">
          Your output will be shown here!
        </span>
      ) : (
        <div className="relative max-h-[1500px] min-h-[768px] min-w-[768px] max-w-[1500px] rounded-lg">
          <ReactCompareSlider
            changePositionOnHover={true}
            className="rounded-lg bg-gradient-to-r from-slate-900 to-slate-700"
            itemOne={
              <ReactCompareSliderImage
                style={imageStyle}
                src={originalPhoto}
                alt="Original Photo"
                className="rounded-lg"
                onLoad={() => setLoaded((prev) => prev + 1)}
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                style={imageStyle}
                src={restoredPhoto}
                alt="Restored Photo"
                className="rounded-lg"
                onLoad={() => setLoaded((prev) => prev + 1)}
              />
            }
          />
        </div>
      )}
    </div>
  );
}

export default ModelOutput;
