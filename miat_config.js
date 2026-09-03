const brands = [
    { name: "Hill's", img: "img/hills.png" },
    { name: "Royal Canin", img: "img/royalcanin.png" }, 
    { name: "Purina Pro Plan", img:"img/purina.png" }, 
    { name: "Orijen", img:"img/orijen.png" },
    { name: "Drools", img:"img/drools.png" },
    { name: "Farmina Pet Foods", img:"img/farmina.png" },
    { name: "Acana", img:"img/acana.png" },
    { name: "Pedigree", img:"img/pedigree.png" }
  ];

const category = "Pet Food"

const attributes = ["Freedom","Discovery","Fighting spirit","Unconventional","Dynamic","Resilience","Boldness","Vigor","Transformative","Uniqueness","Pride","Perfection","Sophistication","Doing my best","Confidence","Optimization","Strong","Aspiration","Growth","Superior","Powerful","Control","Effective","Precision","Simplicity","Expertise","Proven","Scientific","Proactive","Trusted","Caring","Togetherness","Sense of harmony","Protection","Peace of mind","Devotion","Longevity","Companionship","Restore","Understanding","Joy","Carefreeness","Indulgence","Optimism","Naturalness","Happiness","Hope","Love","Wellness","Calm","Excitement","Zest for life","Vitality","Playfulness","Individuality","Energy","Proactive","Thrive","Extraordinary"];

const pretest_attributes = [
  "Hot", 
  "Cold", 
  "Dangerous",
  "Refreshing", 
  "Cute",
  "Soft"
];


const pretest_images = [
  {name: "Cat", img: "pretest_img/pretest_cat.png", correct: ["Cute", "Soft"]},
  {name: "Fire", img:"pretest_img/pretest_fire.png", correct:["Dangerous", "Hot"]}, 
  {name: "Icecube", img: "pretest_img/pretest_icecube.png", correct:["Cold", "Refreshing"]}
]

const pretest_attributes_multiple = ["Hot", "Cold", "Dangerous", "Refreshing", "Cute", "Soft", "Travel", "Excitement", "Precise", "Time", "Deep", "Wet"]

const pretest_images_multiple = [
  {name: "Cat", img: "pretest_img/pretest_cat.png", correct: ["Cute", "Soft"]},
  {name: "Fire", img:"pretest_img/pretest_fire.png", correct:["Dangerous", "Hot"]}, 
  {name: "Icecube", img: "pretest_img/pretest_icecube.png", correct:["Cold", "Refreshing"]}, 
  {name: "Driving", img: "pretest_img/pretest_driving.png", correct:["Travel", "Excitement"]}, 
  {name: "Ocean", img: "pretest_img/pretest_ocean.png", correct:["Deep", "Wet"]},
  {name: "Clock", img: "pretest_img/pretest_clock.png", correct:["Precise", "Time"]}
]


const survey_name = "Royal Canin Survey"
