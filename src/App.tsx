import { SVG, Rect } from "@svgdotjs/svg.js";
import { useEffect } from "react";
import img1 from "@assets/1661926712190619.png";

function App() {
  useEffect(() => {
    var canvas = SVG()
      .addTo("#drawing")
      .size("100%", "100%")
      .viewbox(0, 0, 800, 1000);

    // var rect = canvas.rect(100, 100);

    var rect = new Rect().size(100, 100);

    canvas.add(rect);
    var path = canvas.path(
      "m 357.64532,453.84097 c 17.62007,8.02216 -2.12058,27.70935 -13.33334,29.28571 -30.3859,4.27185 -48.34602,-29.97426 -45.23807,-55.9524 5.5594,-46.46879 56.1311,-70.59787 98.57145,-61.19043 62.28294,13.8058 93.32728,82.57702 77.1428,141.19051 C 453.21679,585.29693 365.67122,623.42358 290.97859,600.26951 196.98554,571.13248 151.71003,464.56996 181.93108,373.84089 218.53281,263.95583 344.23687,211.49702 450.97875,248.84102 576.77037,292.84963 636.43303,437.76771 591.93099,560.50775 540.55162,702.21597 376.3736,769.09583 237.6452,717.41234 80.01319,658.68628 5.9069261,475.21736 64.788247,320.50751 130.84419,146.94643 333.62587,65.607117 504.31214,131.69819 693.80625,205.0718 782.38357,427.18225 709.07382,613.84113"
    );

    var length = path.length();
    path.fill("none").stroke({ width: 1, color: "#ccc" });

    rect
      .animate(3000)
      .during(function (t: number) {
        var p = path.pointAt(t * length);
        rect.center(p.x, p.y);
      })
      .loop(0, true);

    const line1 = canvas
      .line(0, 100, 100, 0)
      .move(20, 20)
      .stroke({ width: 10, linecap: "round", color: "#f06" });

    line1.animate(3000).plot([
      [200, 200],
      [100, 150],
    ]);

    return () => {
      canvas.remove();
    };
  }, []);

  return (
    <section id="drawing" className="relative w-1/4 h-1/4">
      {/* <img src={img1} alt="" width="512" style={{ objectFit: "contain" }} /> */}
    </section>
  );
}

export default App;
