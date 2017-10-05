let bio = {
    name: "Drew Bragg",
    role: "Junior Web Developer",
    contacts: {
        mobile: "267-555-1234",
        email: "DRBragg@gmail.com",
        location: "Warrington, PA",
        github: "https://github.com/DRBragg",
        twitter: "@Nope"
    },
    bioPic: "images/me.jpg",
    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Ruby",
        "SQL"
    ]
};

let work = {
    jobs: [{
            employer: "Rezzio",
            title: "Web Development Consultant",
            location: "Philadelphia, PA",
            dates: "5/2017 - Present",
            description: "Assist in development of upcoming website."
        },
        {
            employer: "AAA Car Care",
            title: "Service Manager",
            location: "Warminster, PA",
            dates: "8/2014 - 5/2017",
            description: "Ran automotive service center."
        }
    ]
};

let education = {
    schools: [{
        name: "Udacity",
        location: "Philadelphia, PA",
        degree: "Nanodegree",
        majors: ["Front-End Web Developmet"],
        years: "2017-2018"
    }],
    onlineCourses: [{
        title: "Intro to JavaScript",
        school: "Udemy",
        date: "2017",
        url: "udemy.com"
    }]
};

let projects = {
    projects: [{
            title: "Online JS Resume",
            dates: "7/2017-8/2017",
            description: "This project",
            images: ["http://via.placeholder.com/350x350"]
        },
        {
            title: "Portfolio Project",
            dates: "7/2017-8/2017",
            description: "Made a portfolio site using HTML and CSS",
            images: ["http://via.placeholder.com/350x350"]
        }
    ]
};

bio.display = function() {
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));

    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));

    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));

    $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));

    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));

    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

    $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));

    if (bio.skills.length > 0) {
      $('#header').append(HTMLskillsStart);

      for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
        $('#skills').append(formattedSkill);
      }
    }

    $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));

    $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));

    $("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));

    $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));

    $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
};

work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        $('#workExperience').append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[i].images.length > 0) {
            projects.projects[i].images.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedImage);
            })
        }
    }
};

education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var i = 0; i < education.schools.length; i++) {
        $(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[i].name));
        $(".education-entry").append(HTMLschoolDegree.replace("%data%", education.schools[i].degree));
        $(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[i].years));
        $(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
        $(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors));
    }

    $(".education-entry").append(HTMLonlineClasses);

    for (var i = 0; i < education.onlineCourses.length; i++) {
        $(".education-entry").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title));
        $(".education-entry").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school));
        $(".education-entry").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].date));
        $(".education-entry").append(HTMLonlineURL.replace("%data%", education.onlineCourses[i].url));
    }
};

bio.display();
work.display();
projects.display();
education.display();

$('#mapDiv').append(googleMap);
