alert("Admin JS Loaded");
// ======================================
// SHREE AMCHA GANPATI MANDAL
// ADMIN PANEL - PART 1
// ======================================

// Dashboard Counter

let totalPhotos = 0;
let totalVideos = 0;
let totalMembers = 0;
let totalEvents = 0;

const photoCount = document.getElementById("photoCount");
const videoCount = document.getElementById("videoCount");
const memberCount = document.getElementById("memberCount");
const eventCount = document.getElementById("eventCount");

function updateDashboard(){

photoCount.textContent = totalPhotos;
videoCount.textContent = totalVideos;
memberCount.textContent = totalMembers;
eventCount.textContent = totalEvents;

}

updateDashboard();

// ==========================
// Upload Buttons
// ==========================

const uploadPhoto =
document.getElementById("uploadPhoto");

const uploadVideo =
document.getElementById("uploadVideo");

const addMember =
document.getElementById("addMember");

const addEvent =
document.getElementById("addEvent");
uploadPhoto.addEventListener("click", async () => {
  
alert("Upload Button Clicked");
alert(typeof supabase);
const file = document.getElementById("photoUpload").files[0];

if(!file){
alert("Please Select Photo");
return;
}

const fileName = Date.now() + "_" + file.name;

const { data, error } = await supabase.storage
.from("photos")
.upload(fileName, file);

if(error){
alert("Upload Failed");
console.log(error);
return;
}

alert("Photo Uploaded Successfully");

});


uploadVideo.addEventListener("click",()=>{

alert("Video Upload Feature Coming Soon");

});

addMember.addEventListener("click",()=>{

alert("Member Added Successfully");

});

addEvent.addEventListener("click",()=>{

alert("Event Published Successfully");

});
// ======================================
// ADMIN PANEL - PART 2
// ======================================

// Notice

const publishNotice =
document.getElementById("publishNotice");

if(publishNotice){

publishNotice.addEventListener("click",()=>{

const notice =
document.getElementById("noticeText").value;

if(notice===""){

alert("Please Write Notice");

return;

}

alert("Notice Published");

});

}

// Banner

const uploadBanner =
document.getElementById("uploadBanner");

if(uploadBanner){

uploadBanner.addEventListener("click",()=>{

alert("Banner Updated");

});

}

// Sponsor

const addSponsor =
document.getElementById("addSponsor");

if(addSponsor){

addSponsor.addEventListener("click",()=>{

alert("Sponsor Added");

});

}

// Quick Actions

const refreshWebsite =
document.getElementById("refreshWebsite");

const backupData =
document.getElementById("backupData");

const logoutAdmin =
document.getElementById("logoutAdmin");

if(refreshWebsite){

refreshWebsite.addEventListener("click",()=>{

location.reload();

});

}

if(backupData){

backupData.addEventListener("click",()=>{

alert("Backup Feature Coming Soon");

});

}

if(logoutAdmin){

logoutAdmin.addEventListener("click",()=>{

const ok = confirm("Logout Admin?");

if(ok){

window.location.href="index.html";

}

});

}

console.log("Admin Dashboard Ready");
