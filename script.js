function addNewInterest() {
 
    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('interestField')
    newNode.classList.add('mt-2')
    newNode.setAttribute("placeholder","Your Interests")

    let interestOb=document.getElementById("interest")
    let interestAddButtonOb=document.getElementById('add-interest-button')

    interestOb.insertBefore(newNode, interestAddButtonOb)
}

function addNewQualification() {

    let QualificationNode=document.createElement('textarea')
    QualificationNode.classList.add('form-control')
    QualificationNode.classList.add('academicField')
    QualificationNode.classList.add('mt-2')
    QualificationNode.setAttribute("placeholder","Enter Here")

    let qualificationOb=document.getElementById("qualification")
    let qualificationAddButtonOb=document.getElementById('add-qualification-button')

    qualificationOb.insertBefore(QualificationNode, qualificationAddButtonOb)
}

function addProjects() {
    let ProjectNode=document.createElement('textarea')
    ProjectNode.classList.add('form-control');
    ProjectNode.classList.add('projectField')
    ProjectNode.classList.add('mt-2')
    ProjectNode.setAttribute("placeholder","Enter Here")

    let projectsOb = document.getElementById("projects")
    let projectAddButtonOb = document.getElementById("add-project-button")

    projectsOb.insertBefore(ProjectNode, projectAddButtonOb)
}
function addExperience() {
    let ExperienceNode=document.createElement('textarea')
    ExperienceNode.classList.add('form-control');
    ExperienceNode.classList.add('experienceField')
    ExperienceNode.classList.add('mt-2')
    ExperienceNode.setAttribute("placeholder","Enter Here")

    let experienceOb = document.getElementById("experience")
    let experienceAddButtonOb = document.getElementById("add-experience-button")

    experienceOb.insertBefore(ExperienceNode,  experienceAddButtonOb)
}

function addSkills() {
    let SkillsNode=document.createElement('textarea')
    SkillsNode.classList.add('form-control');
    SkillsNode.classList.add('skillsField')
    SkillsNode.classList.add('mt-2')
    SkillsNode.setAttribute("placeholder","Enter Here")

    let skillsOb = document.getElementById("skills")
    let skillsAddButtonOb = document.getElementById("add-skills-button")

    skillsOb.insertBefore(SkillsNode, skillsAddButtonOb)
}

function addAchievements() {
    console.log('clicked')
    let AchievementsNode=document.createElement('textarea')
    AchievementsNode.classList.add('form-control');
    AchievementsNode.classList.add('skillsField')
    AchievementsNode.classList.add('mt-2')
    AchievementsNode.setAttribute("placeholder","Enter Here")

    let achievementsOb = document.getElementById("achievements")
    let achievementsAddButtonOb = document.getElementById("add-achievement-button")

    achievementsOb.insertBefore(AchievementsNode, achievementsAddButtonOb)
}

// generating resume
function generateResume() {
   let nameField=document.getElementById("nameField").value;
   let nameT1 = document.getElementById('nameT1');
   nameT1.innerHTML=nameField;

   document.getElementById('nameT2').innerHTML=nameField;
   document.getElementById('contacttempelate').innerHTML=document.getElementById("contactField").value;
   document.getElementById('addresstempelate').innerHTML=document.getElementById("addressField").value;
   document.getElementById('mailtempelate').innerHTML=document.getElementById("mailField").value;
   document.getElementById('instagramtempelate').innerHTML=document.getElementById("instagramField").value;
   document.getElementById('linkedtempelate').innerHTML=document.getElementById("linkedField").value;
   document.getElementById('interesttempelate').innerHTML=document.getElementById("interestField").value;
   document.getElementById('objectivetempelate').innerHTML=document.getElementById("objectiveField").value;

//    academic qualification
   let aqf=document.getElementsByClassName('academicField')
   let str=''

   for(let e of aqf ){
       str = str + `<li> ${e.value} </li>`;
   }

   document.getElementById('qualificationtempelate').innerHTML=str;

//    personal projects field
   let pp=document.getElementsByClassName('projectField')
   let strp=''

   for(let e of pp ){
       strp = strp + `<li> ${e.value} </li>`;
   }

   document.getElementById('projectstempelate').innerHTML=strp;

//    work experience field
   let we=document.getElementsByClassName('experienceField')
   let strw=''

   for(let e of we ){
       strw = strw + `<li> ${e.value} </li>`;
   }

   document.getElementById('experiencetempelate').innerHTML=strw;

//    skills field
let sl=document.getElementsByClassName('skillsField')
let strs=''

for(let e of sl ){
    strs = strs + `<li> ${e.value} </li>`;
}

document.getElementById('skillstempelate').innerHTML=strs;

// achievement field
let ach=document.getElementsByClassName('achievementsField')
let stra=''

for(let e of ach ){
    stra = stra + `<li> ${e.value} </li>`;
}

document.getElementById('achievementtempelate').innerHTML=stra;

document.getElementById('resume-form').style.display='none'
document.getElementById('resume-templates').style.display='block'
}
// print resume

function printResume(){
    window.print();
}