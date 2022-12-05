import { NextFont } from "@next/font/dist/types";
import localFont from "@next/font/local";

const headFont: NextFont = localFont({
  src: "../public/fonts/ClashDisplay-Variable.woff2",
});
const bodyFont: NextFont = localFont({
  src: "../public/fonts/Satoshi-Variable.woff2",
});

export default bodyFont;
export { headFont };
