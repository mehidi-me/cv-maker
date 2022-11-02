let fName,
  lName,
  birthday,
  gender,
  email,
  phone,
  certificateName,
  school,
  SyearFrom,
  SyearEnd,
  certificateType,
  gpa,
  eduDes,
  iName,
  iLocation,
  EyearFrom,
  EyearEnd,
  jobDes,
  lang,
  langLevel,
  city,
  road,
  zip,
  country,
  bio;

fName = document.querySelector(".fname");
lName = document.querySelector(".lname");
birthday = document.querySelector(".birthday");
gender = document.querySelector(".gender");
email = document.querySelector(".email");
phone = document.querySelector(".phone");
certificateName = document.querySelectorAll(".certificate");
school = document.querySelectorAll(".school");
SyearFrom = document.querySelectorAll(".s-year-from");
SyearEnd = document.querySelectorAll(".s-year-to");
certificateType = document.querySelectorAll(".certificate-type");
gpa = document.querySelectorAll(".gpa");
eduDes = document.querySelectorAll(".edu-des");
iName = document.querySelectorAll(".institute");
iLocation = document.querySelectorAll(".i-location");
EyearFrom = document.querySelectorAll(".e-year-from");
EyearEnd = document.querySelectorAll(".e-year-to");
jobDes = document.querySelectorAll(".job-des");
lang = document.querySelectorAll(".lang");
langLevel = document.querySelectorAll(".lang-level");
city = document.querySelector(".city");
road = document.querySelector(".road");
zip = document.querySelector(".zip");
country = document.querySelector(".country");
bio = document.querySelector(".bio");
let cv = document.querySelector(".cv");
function genarate() {
  cv.innerHTML = `
        <div class="intro">
            <h1 class="name">
            ${fName.value} ${lName.value}
            </h1>
            <address>
              ${road.value}, ${city.value}, ${country.value} 
            </address>
          </div>

          <div class="block">
            <h1 class="title">Profile</h1>
            <div class="block-content">
              <p>
                ${bio.value}
              </p>
            </div>
          </div>

          <div class="block">
            <h1 class="title">Experience</h1>
            ${exparience()}
          </div>
          <div class="block">
            <h1 class="title">Education</h1>
            <div class="block-content">
              <div class="info">
                <p>Degree, School, City, State</p>
                <div class="duration">
                  <p>2013 - Present</p>
                </div>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
                amet aliquid ipsum eveniet voluptatem quia! Quisquam iure
                delectus minima reprehenderit? Eius, accusantium. Consectetur
                consequuntur nobis laudantium doloribus nam atque modi.
              </p>
            </div>
          </div>

          <div class="block">
            <h1 class="title">Language</h1>
            <div class="block-content">
              <div class="item">
                <p>English:</p>
                <span>Native</span>
              </div>
              <div class="item">
                <p>English:</p>
                <span>Native</span>
              </div>
              <div class="item">
                <p>English:</p>
                <span>Native</span>
              </div>
            </div>
          </div>
    `;
  function exparience() {
    `<div class="block-content">
      <div class="info">
        <p>
          $
          {iName.forEach((e) => {
            return e.value;
          })}
          , $
          {iLocation.forEach((e) => {
            return e.value;
          })}
        </p>
        <div class="duration">
          <p>
            $
            {EyearFrom.forEach((e) => {
              return e.value;
            })}{" "}
            - ${EyearEnd.forEach((e) => {
              return e.value;
            })}
          </p>
        </div>
      </div>
      <p>
        ${jobDes.forEach((e) => {
          return e.value;
        })}
      </p>
    </div>`;
  }
}
