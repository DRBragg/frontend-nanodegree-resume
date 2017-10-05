let bio = {
    name: "Drew Bragg",
    role: "Junior Web Developer",
    contact: {
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

    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));

    $("#topContacts").append(HTMLemail.replace("%data%", bio.contact.email));

    $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contact.twitter));

    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contact.github));

    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contact.location));

    $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);

        for (i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
            $('#skills').append(formattedSkill);
        }

        $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));

        $("#footerContacts").append(HTMLemail.replace("%data%", bio.contact.email));

        $("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contact.twitter));

        $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contact.github));

        $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contact.location));
    }
};

work.display = function() {
    for (var job in work.jobs) {
        $('#workExperience').append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

projects.display = function() {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (var image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var school in education.schools) {
        $(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[school].name));
        $(".education-entry").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
        $(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[school].years));
        $(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
        $(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
    }

    $(".education-entry").append(HTMLonlineClasses);

    for (var onlineClass in education.onlineCourses) {
        $(".education-entry").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineClass].title));
        $(".education-entry").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineClass].school));
        $(".education-entry").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineClass].date));
        $(".education-entry").append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineClass].url));
    }
};

bio.display();
work.display();
projects.display();
education.display();

$('#mapDiv').append(googleMap);
