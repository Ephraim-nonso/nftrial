// const fs = require("fs");
import fs from "fs";
const { imageToChunks } = require("split-images");
import ImageToSplit from "./../assests/leader-image-three.png";

(async () => {
  try {
    const chunckSize = 6;
    const chuncks = await imageToChunks({ ImageToSplit }, chunckSize);
    console.log("Number of chunks", chuncks.length);

    //Fs performing the cut
    let i = 0;
    chuncks.forEach((c) => {
      i++;
      fs.writeFileSync(`slice_${i}.png`, c);
      console.log(c);
    });
  } catch (e) {
    console.log(e);
  }
})();

export default function SplitImages() {
  return;
}
