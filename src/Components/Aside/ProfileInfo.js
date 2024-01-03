import "./ProfileInfo.css";

export default function ProfileInfo() {
  let arr = [
    {
      id: 1,
      heading: "AGE",
      data: "29 years old",
      icon: "fa-solid fa-hourglass",
    },
    {
      id: 2,
      heading: "LOCATION",
      data: "Berlin, Germany",
      icon: "fa-solid fa-location-dot",
    },
    {
      id: 3,
      heading: "PERSONALITY TYPE",
      data: "INTJ-T",
      icon: "fa-solid fa-user",
    },
  ];
  return (
    <div className="AsideSubSection">
      {
        arr.map((ele) => {
        return <div className="details">
          <div className="iconSection">
            <i class={ele.icon}></i>
          </div>
          <div className="iconDetails">
            <p className="iconHeading">{ele.heading}</p>
            <p className="iconData">{ele.data}</p>
          </div>
        </div>;
      })
    }
    </div>
  );
}
