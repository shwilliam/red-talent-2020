import path from "path";
import scrapedin from "scrapedin";
import { LINKEDIN_IDS } from "./data";

const DEVELOPING = true;

require("dotenv").config();

export default {
  getRoutes: async () => {
    // fetch students linkedin profile data
    let profiles;
    if (DEVELOPING) {
      profiles = [
        {
          contact: {},
          profileAlternative: {
            name: "William Lindvall",
            headline: "Teaching Assistant at RED Academy",
            imageurl:
              "https://media-exp1.licdn.com/dms/image/C5603AQFWv8NJrUZcBA/profile-displayphoto-shrink_200_200/0?e=1585785600&v=beta&t=1YDem1CQP7VbbkiBuFtlu80NdRWt-CbtXayvynRoRwc",
            location: "Vancouver, British Columbia, Canada",
            connections: "73",
            summary:
              "I am a self-taught, full-stack web developer recently enrolled in RED Academy’s Full-stack Developer Work-study program, specializing in writing modern JavaScript that is accessible, performant and reusable.\n\nWith a background as a formally trained and exhibiting fine-art photographer, I am currently looking for new ways to utilize the unique sensibilities and ideals that my education and background has provided me to help craft a better web experience for everyone.\n\nI am also a big proponent for Open Source Software and actively engage with and contribute to the OS community by publishing micro-libraries and reusable front-end components that attempt to solve recurring problems with an appropriate level of abstraction that balances flexibility and developer experience."
          },
          aboutAlternative: {
            text:
              "I am a self-taught, full-stack web developer recently enrolled in RED Academy’s Full-stack Developer Work-study program, specializing in writing modern JavaScript that is accessible, performant and reusable.\n\nWith a background as a formally trained and exhibiting fine-art photographer, I am currently looking for new ways to utilize the unique sensibilities and ideals that my education and background has provided me to help craft a better web experience for everyone.\n\nI am also a big proponent for Open Source Software and actively engage with and contribute to the OS community by publishing micro-libraries and reusable front-end components that attempt to solve recurring problems with an appropriate level of abstraction that balances flexibility and developer experience."
          },
          positions: [
            {
              title: "Teaching Assistant",
              companyName: "RED Academy",
              location: "Vancouver, Canada Area",
              date1: "Oct 2019 – Present",
              date2: "4 mos"
            },
            {
              title: "Lead Web Developer",
              companyName: "Vancouver Co-op Radio",
              location: "Vancouver, Canada",
              description:
                "- Managed a small group of developers building out a WordPress site for a local radio station\n- Built out persistent custom audio player\n- Collaborated with UI & UX teams on website design throughout development",
              date1: "Feb 2019 – Mar 2019",
              date2: "2 mos"
            },
            {
              title: "Marketing Intern",
              companyName: "IKEA Group",
              location: "Hong Kong",
              description:
                "- Produced multimedia content for internal & external platforms\n- Assisted in curation of social media promotion\n- Content management and editing of client-facing website",
              date1: "Sep 2015 – Nov 2015",
              date2: "3 mos"
            },
            {
              title: "Server",
              companyName: "W Hotels",
              location: "Sentosa, Singapore",
              description: "- Pool-side server at luxury hotel",
              date1: "Jun 2014 – Aug 2014",
              date2: "3 mos"
            },
            {
              title: "RED Academy",
              companyName: "Field Of Study\nFull-stack developer",
              description:
                "- Work collaboratively with UI, UX and digital marketing students to build out full-stack web apps with modern tools & libraries\n- Collaboratively build out full-stack web apps with modern frameworks (Meteor / React)\n- Develop open-source WordPress themes and plugins"
            },
            {
              title: "RMIT University",
              companyName: "Degree Name\nBachelor of Arts (BA)",
              description: "Melbourne, Australia"
            },
            {
              title: "UWC South East Asia",
              companyName: "Degree Name\nInternational Baccalaureate",
              description: "Singapore, Singapore"
            },
            {
              title: "American School of the Hague",
              description: "The Hague, The Netherlands"
            },
            {
              title: "Volunteer Staff",
              companyName: "PERTAPIS Children's Home",
              description:
                "- Organized weekly activities to build empathy and curiosity for children aged 4 to 16 coming from families in need",
              date1: "Aug 2011 – Jun 2013"
            },
            {
              title: "Volunteer Staff",
              companyName: "Ladakh Global Concern",
              description:
                "- Helped plan awareness- and fund-raising for the Lamdon School of the Ladakh region in India",
              date1: "Aug 2012 – Jun 2013"
            },
            {
              title: "Co-head of Communications",
              companyName: "Hand in Hand India",
              description:
                "- Worked in strict collaboration with HIH to provide funds and support in promoting microfinance, poverty alleviation and women empowerment in India\n- Produced multimedia content featured in social-media and school campaigns\n- Put together awareness- and fund-raising events (eg. annual Holi festival, Bollywood dance) with small team",
              date1: "Sep 2013 – May 2015"
            },
            {
              title: "Volunteer Staff",
              companyName: "Lighthouse School",
              description:
                "- Planned and carried out weekly group activities bringing together young children with severe hearing and learning disabilities",
              date1: "Aug 2013 – Jun 2015"
            },
            {
              title: "Volunteer Staff",
              companyName: "Maya Universe Academy",
              description:
                "- Helped build local school garden to provide food and an opportunity to sell produce for profit",
              date1: "Jun 2014"
            }
          ],
          educations: [
            {
              title: "RED Academy",
              degree: "Full-stack developer",
              fieldofstudy: "Full-stack developer",
              date1: "2019",
              date2: "2020"
            },
            {
              title: "RMIT University",
              degree: "Bachelor of Arts (BA)",
              fieldofstudy: "Photography",
              date1: "2016",
              date2: "2018"
            },
            {
              title: "UWC South East Asia",
              degree: "International Baccalaureate",
              fieldofstudy: "Design Technology, Mathematics, Physics",
              date1: "2011",
              date2: "2015"
            },
            {
              title: "American School of the Hague",
              date1: "2000",
              date2: "2011"
            }
          ],
          skills: [
            {
              title: "Adobe Photoshop"
            },
            {
              title: "Adobe Lightroom"
            },
            {
              title: "Adobe Premiere Pro"
            },
            {
              title: "Social Media"
            },
            {
              title: "Microsoft Office"
            },
            {
              title: "React.js",
              count: "2"
            },
            {
              title: "GatsbyJS",
              count: "2"
            },
            {
              title: "WordPress"
            },
            {
              title: "Vue.js"
            },
            {
              title: "D3.js"
            },
            {
              title: "SASS"
            },
            {
              title: "GraphQL",
              count: "1"
            },
            {
              title: "JavaScript",
              count: "2"
            },
            {
              title: "HTML5",
              count: "1"
            },
            {
              title: "Cascading Style Sheets (CSS)",
              count: "1"
            },
            {
              title: "Meteor.js"
            },
            {
              title: "Git",
              count: "1"
            },
            {
              title: "Leadership"
            },
            {
              title: "Full-Stack Development"
            }
          ],
          recommendations: {
            givenCount: "0",
            receivedCount: "0",
            given: [],
            received: []
          },
          accomplishments: [
            {
              count: "3",
              title: "Languages",
              items: [
                "English",
                "Spanish",
                "Swedish",
                "BUD Exhibition",
                "Opening Eyes Photo Contest (book and exhibition)"
              ]
            }
          ],
          peopleAlsoViewed: [
            {
              user: "https://www.linkedin.com/in/vanessaxlopez/",
              text:
                "Relationship builder and educational advisor at RED Academy"
            },
            {
              user: "https://www.linkedin.com/in/lauraatan/",
              text: "Full Stack Developer"
            },
            {
              user: "https://www.linkedin.com/in/kimalser/",
              text: "2019 Computer Science Grad Seeking Position In Tech"
            },
            {
              user:
                "https://www.linkedin.com/in/meaganne-alexis-encio-71a075196/",
              text: "Fast Food Team Member at Tim Hortons"
            },
            {
              user: "https://www.linkedin.com/in/jeremiah-aguirre-606708181/",
              text: "Frontend Developer at Absolute Software"
            },
            {
              user: "https://www.linkedin.com/in/mayu-imanaka-19a306194/",
              text: "Front End Developer, Full-stack Student at RED Academy"
            },
            {
              user: "https://www.linkedin.com/in/miri-markovitz/",
              text: "Full Stack Developer/ Student for hire"
            },
            {
              user: "https://www.linkedin.com/in/becky-parmiter-2a4724132/",
              text: "Digital Marketing Wizard for Hire"
            },
            {
              user: "https://www.linkedin.com/in/camilaserrano/",
              text:
                "UI/UX Designer at QHR Technologies and UX Design Instructor at RED Academy"
            },
            {
              user: "https://www.linkedin.com/in/richard-lam12/",
              text: "Web Developer"
            }
          ],
          volunteerExperience: [
            {
              title: "Volunteer Staff",
              experience: "PERTAPIS Children's Home",
              description: "Children",
              date1: "Aug 2011 – Jun 2013",
              date2: "1 yr 11 mos"
            },
            {
              title: "Volunteer Staff",
              experience: "Ladakh Global Concern",
              description: "Education",
              date1: "Aug 2012 – Jun 2013",
              date2: "11 mos"
            },
            {
              title: "Co-head of Communications",
              experience: "Hand in Hand India",
              description: "Economic Empowerment",
              date1: "Sep 2013 – May 2015",
              date2: "1 yr 9 mos"
            },
            {
              title: "Volunteer Staff",
              experience: "Lighthouse School",
              description: "Education",
              date1: "Aug 2013 – Jun 2015",
              date2: "1 yr 11 mos"
            },
            {
              title: "Volunteer Staff",
              experience: "Maya Universe Academy",
              description: "Education",
              date1: "Jun 2014",
              date2: "1 mo"
            }
          ],
          profile: {
            name: "William Lindvall",
            headline: "Teaching Assistant at RED Academy",
            imageurl:
              "https://media-exp1.licdn.com/dms/image/C5603AQFWv8NJrUZcBA/profile-displayphoto-shrink_200_200/0?e=1585785600&v=beta&t=1YDem1CQP7VbbkiBuFtlu80NdRWt-CbtXayvynRoRwc",
            location: "Vancouver, British Columbia, Canada",
            connections: "73",
            summary:
              "I am a self-taught, full-stack web developer recently enrolled in RED Academy’s Full-stack Developer Work-study program, specializing in writing modern JavaScript that is accessible, performant and reusable.\n\nWith a background as a formally trained and exhibiting fine-art photographer, I am currently looking for new ways to utilize the unique sensibilities and ideals that my education and background has provided me to help craft a better web experience for everyone.\n\nI am also a big proponent for Open Source Software and actively engage with and contribute to the OS community by publishing micro-libraries and reusable front-end components that attempt to solve recurring problems with an appropriate level of abstraction that balances flexibility and developer experience."
          }
        },
        {
          contact: {},
          profileAlternative: {
            name: "Edin Kaymakqi",
            headline: "Developer at LYF Marketing",
            imageurl:
              "https://media-exp1.licdn.com/dms/image/C4D03AQGvS_Y0mEavhg/profile-displayphoto-shrink_200_200/0?e=1585785600&v=beta&t=QzNqY4VCFzCLGEJJuvL--vgQAelE-8drEyGcbcSgt9E",
            location: "Vancouver, British Columbia, Canada",
            connections: "71",
            summary:
              "Skilled in creating beautiful, modern looking websites and user interfaces."
          },
          aboutAlternative: {
            text:
              "Skilled in creating beautiful, modern looking websites and user interfaces."
          },
          positions: [
            {
              title: "Web Developer",
              companyName: "LYF Marketing",
              location: "Vancouver, Canada Area",
              date1: "Oct 2019 – Present",
              date2: "4 mos"
            },
            {
              title: "RED Academy",
              companyName: "Degree Name\nDiploma",
              description:
                "- Team leader of a community project for a real client.\n- Build real world projects with various technologies.\n- Collaborate with UI, UX and building different projects."
            }
          ],
          educations: [
            {
              title: "RED Academy",
              degree: "Diploma",
              fieldofstudy: "Full Stack Web Development",
              date1: "2019",
              date2: "2021"
            }
          ],
          skills: [
            {
              title: "JavaScript",
              count: "4"
            },
            {
              title: "React.js",
              count: "2"
            },
            {
              title: "WordPress",
              count: "1"
            },
            {
              title: "Responsive Web Design"
            },
            {
              title: "HTML5"
            },
            {
              title: "SASS"
            },
            {
              title: "Github"
            },
            {
              title: "Git"
            },
            {
              title: "AJAX"
            },
            {
              title: "jQuery"
            },
            {
              title: "JSON"
            },
            {
              title: "Webpack"
            },
            {
              title: "Node.js"
            },
            {
              title: "GraphQL"
            },
            {
              title: "Bootstrap"
            },
            {
              title: "Cascading Style Sheets (CSS)"
            },
            {
              title: "React Native"
            },
            {
              title: "Jest"
            },
            {
              title: "SQL"
            },
            {
              title: "PostgreSQL"
            },
            {
              title: "Apollo GraphQL"
            },
            {
              title: "Gulp.js"
            },
            {
              title: "npm"
            },
            {
              title: "Parcel"
            }
          ],
          recommendations: {
            givenCount: "0",
            receivedCount: "0",
            given: [],
            received: []
          },
          accomplishments: [{}],
          peopleAlsoViewed: [
            {
              user: "https://www.linkedin.com/in/dan-kerr-1ababa48/",
              text: "Director @ LYF Marketing"
            },
            {
              user: "https://www.linkedin.com/in/franklinilo234/",
              text:
                "NetSuite Certified SuiteCloud Developer, Administrator and ERP Consultant"
            },
            {
              user: "https://www.linkedin.com/in/lauraatan/",
              text: "Full Stack Developer"
            },
            {
              user: "https://www.linkedin.com/in/kimalser/",
              text: "2019 Computer Science Grad Seeking Position In Tech"
            },
            {
              user: "https://www.linkedin.com/in/richard-lam12/",
              text: "Web Developer"
            },
            {
              user: "https://www.linkedin.com/in/cherylcam/",
              text: "Front End Web Developer at Sparkjoy Studios"
            },
            {
              user: "https://www.linkedin.com/in/mayu-imanaka-19a306194/",
              text: "Front End Developer, Full-stack Student at RED Academy"
            },
            {
              user: "https://www.linkedin.com/in/camilaserrano/",
              text:
                "UI/UX Designer at QHR Technologies and UX Design Instructor at RED Academy"
            },
            {
              user: "https://www.linkedin.com/in/sarahmaledy/",
              text: "Talent Acquisition Specialist at Thinkific | WE’RE HIRING!"
            },
            {
              user: "https://www.linkedin.com/in/yenyinhing-developer/",
              text: "Full-Stack Developer seeking new opportunities!"
            }
          ],
          volunteerExperience: [],
          profile: {
            name: "Edin Kaymakqi",
            headline: "Developer at LYF Marketing",
            imageurl:
              "https://media-exp1.licdn.com/dms/image/C4D03AQGvS_Y0mEavhg/profile-displayphoto-shrink_200_200/0?e=1585785600&v=beta&t=QzNqY4VCFzCLGEJJuvL--vgQAelE-8drEyGcbcSgt9E",
            location: "Vancouver, British Columbia, Canada",
            connections: "71",
            summary:
              "Skilled in creating beautiful, modern looking websites and user interfaces."
          }
        },
        {
          contact: {},
          profileAlternative: {
            name:
              "Open to job opportunities\n\nSee all details\n\nOnly recruiters",
            headline: "Full Stack Developer",
            imageurl:
              "https://media-exp1.licdn.com/dms/image/C4E03AQHeA02i5JJXPA/profile-displayphoto-shrink_200_200/0?e=1585785600&v=beta&t=gSIP11qpBMKEfxGzO0I4jT6kS6pQXTU07lIdnUuoS6A",
            summary:
              "I am a design-oriented Web Developer with a passion for building safer, faster and more accessible web content. I strive to build immersive and efficient web applications, which is where my passion for design and development converge."
          },
          aboutAlternative: {
            text:
              "I am a design-oriented Web Developer with a passion for building safer, faster and more accessible web content. I strive to build immersive and efficient web applications, which is where my passion for design and development converge."
          },
          positions: [
            {
              title: "Frontend Web Developer",
              companyName: "Beyond the Conversation Society",
              location: "Vancouver, Canada Area",
              description:
                "- Worked with a developer team in building a custom WordPress site for Beyond the Conversation\n- Collaborated with UX/UI teams to create a fully functional website",
              date1: "Sep 2019 – Oct 2019",
              date2: "2 mos"
            },
            {
              title: "Santander Global Corporate Banking",
              location: "Mexico City Area, Mexico",
              date1: "Jan 2018 – Mar 2018",
              date2: "3 mos",
              roles: [
                {
                  title: "Acquisition Finance & Loan Syndication Analyst",
                  date1: "Jan 2018 – Mar 2018",
                  date2: "3 mos",
                  location: "Mexico City Area, Mexico"
                },
                {
                  title: "Acquisition Finance & Loan Syndication Intern",
                  date1: "Jul 2017 – Dec 2017",
                  date2: "6 mos",
                  location: "Mexico City Area, Mexico"
                }
              ]
            },
            {
              title: "RED Academy",
              companyName: "Degree Name\nFull Stack Web Developer"
            },
            {
              title: "Tecnológico de Monterrey",
              companyName: "Degree Name\nBachelor's degree"
            }
          ],
          educations: [
            {
              title: "RED Academy",
              degree: "Full Stack Web Developer",
              fieldofstudy: "Computer Programming",
              date1: "2019",
              date2: "2021"
            },
            {
              title: "Tecnológico de Monterrey",
              degree: "Bachelor's degree",
              fieldofstudy: "Financial Management",
              date1: "2014",
              date2: "2018"
            }
          ],
          skills: [
            {
              title: "JavaScript"
            },
            {
              title: "React.js"
            },
            {
              title: "GraphQL"
            },
            {
              title: "Front-end Development"
            },
            {
              title: "Corporate Finance",
              count: "3"
            },
            {
              title: "Financial Analysis",
              count: "3"
            },
            {
              title: "Web Design"
            },
            {
              title: "Responsive Web Design"
            },
            {
              title: "HTML5"
            },
            {
              title: "CSS"
            },
            {
              title: "PHP"
            },
            {
              title: "WordPress"
            },
            {
              title: "SASS"
            },
            {
              title: "jQuery"
            },
            {
              title: "AJAX"
            },
            {
              title: "Node.js"
            },
            {
              title: "HTML"
            },
            {
              title: "Git"
            },
            {
              title: "Full-Stack Development"
            },
            {
              title: "GatsbyJS"
            },
            {
              title: "Gulp.js"
            },
            {
              title: "Node"
            }
          ],
          recommendations: {
            givenCount: "1",
            receivedCount: "1",
            given: [
              {
                user:
                  "https://www.linkedin.com/in/ra%C3%BAl-villegas-bonilla-209b417a/",
                text:
                  "Roberto is an individual with a calm mind, quality that gives him the ability to solve problems fast and with ease, even in difficult situations, his work ethic and compromise with whatever job he does are astounding and worth acknowledging them."
              }
            ],
            received: [
              {
                user:
                  "https://www.linkedin.com/in/ra%C3%BAl-villegas-bonilla-209b417a/",
                text:
                  "Raúl has proven to have a great interest in his academic, personal and professional development. Those attitudes lead him to several good professional ventures. His mind works with simplicity to solve the most complex problems.\n\n... See more"
              }
            ]
          },
          accomplishments: [
            {
              count: "0",
              title: "Course",
              items: [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "English",
                "French",
                "Portuguese",
                "Spanish"
              ]
            }
          ],
          peopleAlsoViewed: [
            {
              user: "https://www.linkedin.com/in/mayu-imanaka-19a306194/",
              text: "Front End Developer, Full-stack Student at RED Academy"
            },
            {
              user: "https://www.linkedin.com/in/richard-lam12/",
              text: "Web Developer"
            },
            {
              user: "https://www.linkedin.com/in/michal-prokop-zv24/",
              text: "Junior Web Developer"
            },
            {
              user: "https://www.linkedin.com/in/yenyinhing-developer/",
              text: "Full-Stack Developer seeking new opportunities!"
            },
            {
              user: "https://www.linkedin.com/in/edin-kaymakqi-3243b3163/",
              text: "Developer at LYF Marketing"
            },
            {
              user: "https://www.linkedin.com/in/irina-shakhova/",
              text: "Freelance Developer"
            },
            {
              user: "https://www.linkedin.com/in/matt-waraich-36b291160/",
              text: "Full Stack Developer"
            },
            {
              user: "https://www.linkedin.com/in/sheefa-karel-0b5bab127/",
              text: "An experienced and efficient web developer."
            },
            {
              user: "https://www.linkedin.com/in/dankell/",
              text: "Web Application Developer at Adion Systems"
            },
            {
              user: "https://www.linkedin.com/in/gabrielmartinsphoto/",
              text: "Business Owner at Gabriel Martins Photography"
            }
          ],
          volunteerExperience: [],
          profile: {
            name:
              "Open to job opportunities\n\nSee all details\n\nOnly recruiters",
            headline: "Full Stack Developer",
            imageurl:
              "https://media-exp1.licdn.com/dms/image/C4E03AQHeA02i5JJXPA/profile-displayphoto-shrink_200_200/0?e=1585785600&v=beta&t=gSIP11qpBMKEfxGzO0I4jT6kS6pQXTU07lIdnUuoS6A",
            summary:
              "I am a design-oriented Web Developer with a passion for building safer, faster and more accessible web content. I strive to build immersive and efficient web applications, which is where my passion for design and development converge."
          }
        }
      ];
    } else {
      profiles = await scrapedin({
        email: process.env.REACT_APP_LINKEDIN_EMAIL,
        password: process.env.REACT_APP_LINKEDIN_PASSWORD
      })
        .then(scraper =>
          Promise.all(
            Object.keys(LINKEDIN_IDS).map(id =>
              scraper(`https://www.linkedin.com/in/${id}`)
            )
          )
        )
        .then(console.log);
    }

    return [
      {
        path: "/",
        getData: () => ({
          profiles
        })
      }
    ];
  },
  plugins: [
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages")
      }
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap")
  ]
};
