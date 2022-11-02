const exparienceInfo = document.getElementById("exparienceInfo");
const educationInfo = document.getElementById("educationInfo");
const langInfo = document.getElementById("langInfo");

function addExparience() {
  const domLenth = document.querySelectorAll(".exparience-info-count").length;

  var node_1 = document.createElement("DIV");
  node_1.setAttribute(
    "class",
    "inp-block exparience-info-count exparience-info-remove" + domLenth
  );

  var node_button = document.createElement("BUTTON");
  node_button.setAttribute("type", "button");
  node_button.setAttribute("onclick", "removeExparience(" + domLenth + ")");
  var node_button_text = document.createTextNode(
    new String("Remove" + domLenth)
  );
  node_button.appendChild(node_button_text);
  node_1.appendChild(node_button);

  var node_2 = document.createElement("DIV");
  node_2.setAttribute("class", "row");
  node_1.appendChild(node_2);

  var node_3 = document.createElement("DIV");
  node_3.setAttribute("class", "fild");
  node_2.appendChild(node_3);

  var node_4 = document.createElement("INPUT");
  node_4.setAttribute("type", "text");
  node_4.setAttribute("class", "institute[" + domLenth + "]");
  node_4.setAttribute("placeholder", "Institute name");
  node_4.setAttribute("autocomplete", "off");
  node_3.appendChild(node_4);

  var node_5 = document.createElement("DIV");
  node_5.setAttribute("class", "fild");
  node_2.appendChild(node_5);

  var node_6 = document.createElement("INPUT");
  node_6.setAttribute("type", "text");
  node_6.setAttribute("class", "i-location[" + domLenth + "]");
  node_6.setAttribute("placeholder", "Institute location");
  node_5.appendChild(node_6);

  var node_7 = document.createElement("DIV");
  node_7.setAttribute("class", "row");
  node_1.appendChild(node_7);

  var node_8 = document.createElement("DIV");
  node_8.setAttribute("class", "fild");
  node_7.appendChild(node_8);

  var node_9 = document.createElement("INPUT");
  node_9.setAttribute("class", "e-year-from[" + domLenth + "]");
  node_9.setAttribute("type", "number");
  node_9.setAttribute("placeholder", "Year from");
  node_8.appendChild(node_9);

  var node_10 = document.createElement("DIV");
  node_10.setAttribute("class", "fild");
  node_7.appendChild(node_10);

  var node_11 = document.createElement("INPUT");
  node_11.setAttribute("class", "e-year-to[" + domLenth + "]");
  node_11.setAttribute("type", "number");
  node_11.setAttribute("placeholder", "Year to");
  node_10.appendChild(node_11);

  var node_12 = document.createElement("TEXTAREA");
  node_12.setAttribute("class", "job-des[" + domLenth + "]");
  node_12.setAttribute("placeholder", "Job description");
  node_1.appendChild(node_12);
  exparienceInfo.appendChild(node_1);
}

function removeExparience(id) {
  document.querySelectorAll(".exparience-info-remove" + id)[0].remove();
}

function addAducationInfo() {
  const domLenth = document.querySelectorAll(".education-info-count").length;
  var node_1 = document.createElement("DIV");
  node_1.setAttribute(
    "class",
    "inp-value education-info-count education-info-remove" + domLenth
  );
  var node_button = document.createElement("BUTTON");
  node_button.setAttribute("type", "button");
  node_button.setAttribute("onclick", "removeAducationInfo(" + domLenth + ")");
  var node_button_text = document.createTextNode(
    new String("Remove" + domLenth)
  );
  node_button.appendChild(node_button_text);
  node_1.appendChild(node_button);
  var node_2 = document.createElement("DIV");
  node_2.setAttribute("class", "row");
  node_1.appendChild(node_2);

  var node_3 = document.createElement("DIV");
  node_3.setAttribute("class", "fild");
  node_2.appendChild(node_3);

  var node_4 = document.createElement("INPUT");
  node_4.setAttribute("class", "certificate[" + domLenth + "]");
  node_4.setAttribute("type", "text");
  node_4.setAttribute("placeholder", "Certificate name");
  node_3.appendChild(node_4);

  var node_5 = document.createElement("DIV");
  node_5.setAttribute("class", "fild");
  node_2.appendChild(node_5);

  var node_6 = document.createElement("INPUT");
  node_6.setAttribute("class", "school[" + domLenth + "]");
  node_6.setAttribute("type", "text");
  node_6.setAttribute("placeholder", "School/College name");
  node_5.appendChild(node_6);

  var node_7 = document.createElement("DIV");
  node_7.setAttribute("class", "row");
  node_1.appendChild(node_7);

  var node_8 = document.createElement("DIV");
  node_8.setAttribute("class", "fild");
  node_7.appendChild(node_8);

  var node_9 = document.createElement("INPUT");
  node_9.setAttribute("class", "s-year-from[" + domLenth + "]");
  node_9.setAttribute("type", "number");
  node_9.setAttribute("placeholder", "Year from");
  node_8.appendChild(node_9);

  var node_10 = document.createElement("DIV");
  node_10.setAttribute("class", "fild");
  node_7.appendChild(node_10);

  var node_11 = document.createElement("INPUT");
  node_11.setAttribute("class", "s-year-to[" + domLenth + "]");
  node_11.setAttribute("type", "number");
  node_11.setAttribute("placeholder", "End year");
  node_10.appendChild(node_11);

  var node_12 = document.createElement("DIV");
  node_12.setAttribute("class", "row");
  node_1.appendChild(node_12);

  var node_13 = document.createElement("DIV");
  node_13.setAttribute("class", "fild");
  node_12.appendChild(node_13);

  var node_14 = document.createElement("INPUT");
  node_14.setAttribute("class", "certificate-type[" + domLenth + "]");
  node_14.setAttribute("type", "text");
  node_14.setAttribute("placeholder", "Certificate type");
  node_13.appendChild(node_14);

  var node_15 = document.createElement("DIV");
  node_15.setAttribute("class", "fild");
  node_12.appendChild(node_15);

  var node_16 = document.createElement("INPUT");
  node_16.setAttribute("class", "gpa[" + domLenth + "]");
  node_16.setAttribute("type", "text");
  node_16.setAttribute("placeholder", "G.P.A");
  node_15.appendChild(node_16);

  var node_17 = document.createElement("TEXTAREA");
  node_17.setAttribute("placeholder", "Education description");
  node_17.setAttribute("class", "edu-des[" + domLenth + "]");
  node_1.appendChild(node_17);
  educationInfo.appendChild(node_1);
}

function removeAducationInfo(id) {
  document.querySelectorAll(".education-info-remove" + id)[0].remove();
}

function addLanguage() {
  const domLenth = document.querySelectorAll(".lang-info-count").length;
  var node_1 = document.createElement("DIV");
  node_1.setAttribute(
    "class",
    "inp-block lang-info-count lang-info-remove" + domLenth
  );

  var node_button = document.createElement("BUTTON");
  node_button.setAttribute("type", "button");
  node_button.setAttribute("onclick", "removeLanguage(" + domLenth + ")");
  var node_button_text = document.createTextNode(
    new String("Remove" + domLenth)
  );
  node_button.appendChild(node_button_text);
  node_1.appendChild(node_button);

  var node_2 = document.createElement("DIV");
  node_2.setAttribute("class", "row");
  node_1.appendChild(node_2);

  var node_3 = document.createElement("DIV");
  node_3.setAttribute("class", "fild");
  node_2.appendChild(node_3);

  var node_4 = document.createElement("INPUT");
  node_4.setAttribute("type", "text");
  node_4.setAttribute("class", "lang[" + domLenth + "]");
  node_4.setAttribute("placeholder", "Language name");
  node_3.appendChild(node_4);

  var node_5 = document.createElement("DIV");
  node_5.setAttribute("class", "fild");
  node_2.appendChild(node_5);

  var node_6 = document.createElement("SELECT");
  node_6.setAttribute("class", "lang-level[" + domLenth + "]");
  node_5.appendChild(node_6);

  var node_7 = document.createElement("OPTION");
  node_7.setAttribute("value", "Native");
  node_6.appendChild(node_7);

  var node_8 = document.createTextNode(new String("Native"));
  node_7.appendChild(node_8);

  var node_9 = document.createElement("OPTION");
  node_9.setAttribute("value", "Fluent");
  node_6.appendChild(node_9);

  var node_10 = document.createTextNode(new String("Fluent"));
  node_9.appendChild(node_10);

  var node_11 = document.createElement("OPTION");
  node_11.setAttribute("value", "Intermidiet");
  node_6.appendChild(node_11);

  var node_12 = document.createTextNode(new String("Intermidiet"));
  node_11.appendChild(node_12);
  langInfo.appendChild(node_1);
}

function removeLanguage(id) {
  document.querySelectorAll(".lang-info-remove" + id)[0].remove();
}

function cTov(className) {
  return document.getElementsByClassName(className)[0].value;
}

function cvHtml(v) {
  let html = `<div class="container">
  <div class="wraper">
    <div class="intro">
      <h1 class="name">${v.fname} ${v.lname}</h1>
      <address>${v.zip} - ${v.road} ${v.city}, ${v.country}, ${v.phone} - ${v.email}</address>
    </div>

    <div class="block">
      <h1 class="title">Profile</h1>
      <div class="block-content">
        <p>
          ${v.bio}
        </p>
      </div>
    </div>

    <div class="block">
      <h1 class="title">Experience</h1>`;
  v.exparienceInfo.forEach((data) => {
    html += `
      <div class="block-content">
      <div class="info">
        <p>${data.institute}</p>
        <p>${data.iLocation}</p>
        <div class="duration">
            <p>${data.eYearFrom} - ${data.eYearTo}</p>
          </div>
      </div>
      <p>
      ${data.jobDes}
    </p>
    </div>
      `;
  });

  html += `</div>
    <div class="block">
      <h1 class="title">Education</h1>`;

  v.educationInfo.forEach((data) => {
    html += `
      
      <div class="block-content">
      <div class="info">
        <p>${data.school}, ${data.certificate}</p>
        <p>${data.certificateType}</p>
        <p>${data.gpa}</p>
        <div class="duration">
        <p>${data.sYearFrom} - ${data.sYearTo}</p>
      </div>
      </div>
      <p>
      ${data.eduDes}
    </p>
    </div>
      `;
  });

  html += `</div>

    <div class="block">
      <h1 class="title">Language</h1><div class="block-content">`;

  v.langInfo.forEach((data) => {
    html += `
        <div class="item">
          <p>${data.lang}:</p>
          <span>${data.langLevel}</span>
        </div>`;
  });

  html += `
  </div></div>
  </div>
</div>`;
  return html;
}

function inputError(className, type) {
  if (type == "empty") {
    let ElSelect = document.getElementsByClassName(className)[0];
    ElSelect.focus();
    alert(ElSelect.placeholder + " is not empty!");
    return false;
  }
}

function validationForm() {
  const formAllInput = document.querySelectorAll("input");
  for (let i = 0; i < formAllInput.length; i++) {
    if (cTov(formAllInput[i].className) == "")
      return inputError(formAllInput[i].className, "empty");
  }

  return true;
}

function genarate() {
  const notError = validationForm();
  //const notError = true;
  if (notError) {
    let educationData = [];
    let exparienceData = [];
    let langData = [];
    const edudomLenth = document.querySelectorAll(
      ".education-info-count"
    ).length;
    const exparidomLenth = document.querySelectorAll(
      ".exparience-info-count"
    ).length;
    const langdomLenth = document.querySelectorAll(".lang-info-count").length;

    for (let i = 0; i < edudomLenth; i++) {
      educationData.push({
        certificate: cTov(`certificate[${i}]`),
        school: cTov(`school[${i}]`),
        sYearFrom: cTov(`s-year-from[${i}]`),
        sYearTo: cTov(`s-year-to[${i}]`),
        certificateType: cTov(`certificate-type[${i}]`),
        gpa: cTov(`gpa[${i}]`),
        eduDes: cTov(`edu-des[${i}]`),
      });
    }
    for (let i = 0; i < exparidomLenth; i++) {
      exparienceData.push({
        institute: cTov(`institute[${i}]`),
        iLocation: cTov(`i-location[${i}]`),
        eYearFrom: cTov(`e-year-from[${i}]`),
        eYearTo: cTov(`e-year-to[${i}]`),
        jobDes: cTov(`job-des[${i}]`),
      });
    }
    for (let i = 0; i < langdomLenth; i++) {
      langData.push({
        lang: cTov(`lang[${i}]`),
        langLevel: cTov(`lang-level[${i}]`),
      });
    }

    let allData = {
      fname: cTov("fname"),
      lname: cTov("lname"),
      birthday: cTov("birthday"),
      gender: cTov("gender"),
      city: cTov("city"),
      road: cTov("road"),
      zip: cTov("zip"),
      country: cTov("country"),
      bio: cTov("bio"),
      email: cTov("email"),
      phone: cTov("phone"),
      educationInfo: educationData,
      exparienceInfo: exparienceData,
      langInfo: langData,
    };

    let mywindow = window.open(
      "",
      "PRINT",
      "height=650,width=900,top=100,left=150"
    );

    mywindow.document
      .write(`<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" /><title>my cv</title>`);
    mywindow.document.write("</head><body >");
    mywindow.document.write(cvHtml(allData));
    mywindow.document.write("</body></html>");

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.onafterprint = () => mywindow.close();
    //mywindow.close();

    return true;
  }
}
