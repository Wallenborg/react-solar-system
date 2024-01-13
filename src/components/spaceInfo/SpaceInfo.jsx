import { spaceInfoText } from "../../data";

function SpaceInfo() {
  return (
    <>
      {spaceInfoText.map((info) => (
        <p
          key={info.place}
          style={{
            position: "absolute",
            top: `${info.place}px`,
            color: "rgba(240, 248, 255, 0.7)",
            textAlign: "center",
            zIndex: "-1",
            border: "solid 2px firebrick",
            borderRadius: "10px",
            fontFamily: "monospace",
            fontSize: "1.2rem",
            width: "70%",
            padding: "30px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {info.text}
        </p>
      ))}
    </>
  );
}

export default SpaceInfo;
