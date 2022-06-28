import "./Experience.scss";

export function Experience(): JSX.Element {
  const sample = [
    "place 1",
    "place 2",
    "place 3",
    "place 4",
    "place 5",
    "place 6",
    "place 7",
    "place 8",
    "place 9",
    "place 10",
  ];

  return (
    <div id="experience" className="section">
      <div>
        <h2 className="section-title">
          <span>02:</span> Experience and Work
        </h2>
        <div className="content">
          <div className="tabs">
            {/* 9 dummy items */}
            {sample.map((item, index) => (
              <div key={`smp-tab-${index}`} className="tab">{item}</div>
            ))}
          </div>
          <div className="text-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              explicabo quisquam illo perferendis non corporis modi cupiditate
              incidunt eius ab itaque amet neque, quam ex voluptates quo vero
              quia odit soluta unde rem enim delectus? In labore architecto
              possimus autem modi eligendi, ipsam nam nisi, fugiat non
              praesentium consectetur magni!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
