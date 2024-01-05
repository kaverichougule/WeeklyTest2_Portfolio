import "./More.css";
export default function More() {
  let moreDataArr = [
    {
      img: "https://oktayshakirov.com/assets/images/projects/pigletz.jpg",
      type: "Marketing & BizDev • Content Creator",
      title: "Pigletz",
      para: "I create and manage the Pigletz community's social media presence, including producing and editing high-quality Web3 content for their YouTube channel. I also work on expanding the community's reach and impact through partnerships in the Web3 space.",
      website: "https://pigletz.com/",
      insta: "https://www.instagram.com/pigletznft",
      youtube: "https://www.youtube.com/@PigletzNFT",
    },
    {
      img: "https://oktayshakirov.com/assets/images/projects/sha-beats.jpg",
      type: "Beat Making • Sound Design",
      title: "Music Production",
      para: "Produced over 100 instrumentals in different genres, collaborated with artists and my beats are on popular streaming platforms like Spotify, iTunes, Amazon and Deezer. They can also be purchased exclusively on my beatstore for musicians to create their unique sound.",
      website:
        "https://open.spotify.com/artist/0veyQeAcyLxXfbbnZpa3mf?si=0Xk9lBtDTP24o8w1nrPfRw",
      insta: "https://www.instagram.com/sha.beats",
      youtube: "https://www.youtube.com/@SHABEATS",
    },
    {
      img: "https://oktayshakirov.com/assets/images/projects/sha-pixels.png",
      type: "Multimedia Design • 3D Rendering",
      title: "Digital Content Creation",
      para: "My digital art portfolio, which includes a wide collection of graphic designs, 3D models and short video animations created for various purposes. I have long experience working with popular softwares like Adobe Photoshop, After Effects, Premiere Pro and Blender.",
      website: "",
      insta: "https://www.instagram.com/sha.pixels",
      youtube: "",
    },
  ];
  return (
    <div className="MoreSec">
      <h2>Side Projects</h2>

      <div className="MoreProjects">
        {moreDataArr.map((ele) => {
          return (
            <div className="SingleProjectMoreSec">
              <div className="moreImgCont">
                <img src={ele.img} className="Moreimg" alt="" />
              </div>
              <div className="content">
                <p className="cardType">{ele.type}</p>
                <h2>{ele.title}</h2>
                <p>{ele.para}</p>
              </div>
              <div className="buttonsInMore">
                <a href={ele.website} className="webLink">
                  <button className="webBtn">
                    <i class="fa-solid fa-globe"></i> Website
                  </button>
                </a>
                <a href={ele.insta} className="instaLink">
                  <button className="instaBtn">
                    <i class="fa-brands fa-instagram"></i>Instagram
                  </button>
                </a>
                <a href={ele.youtube} className="ytLink">
                  <button className="ytBtn">
                    <i class="fa-brands fa-youtube"></i> Youtube
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
