export default [
    {
        roleClass: 'school-space',
        name: 'School Space',
        logo: 'school-space.svg',
        blurb:
            'Social enterprise that raises money for schools by letting out their facilities to the community outside school hours.',
        roles: [
            {
                key: 'cto',
                title: 'Chief Technology Officer',
                duration: 'since November 2018',
                description: [
                    "Before I joined School Space, they were operating on an off-the-shelf booking system that had very much reached it's capacity. I came aboard as the companies first tech hire, with the task of architecting and building out a bespoke booking platform.",
                    'Aside from developing the platform, I also direct the technical strategy of the business, as well as managing product development end-to-end. Starting from scratch, and with one other developer, we had customers using the platform in five months and the company entirely operational on the platform within nine months.',
                    'Having started with the backend and the customer, school and admin interfaces, we continue to iterate the platform and are working towards a new public frontend where customers are able to explore and book spaces instantly.',
                    'The platform is made with React, Node, Express, and Postgres, with the infrastructure hosted on AWS. Sketch is used for designing and prototyping.'
                ]
            }
        ]
    },
    {
        roleClass: 'twsu',
        name: 'Tech Will Save Us',
        logo: 'twsu.svg',
        blurb:
            'Mission-driven startup aiming to inspire children to get creative with technology through DIY electronics and coding kits.',
        roles: [
            {
                key: 'twsu-lead',
                title: 'Lead Developer',
                duration: 'for one and a half years',
                description: [
                    'Having taken on a Lead Developer role, I hired a team of four developers. We continued to develop Club Make, as well as working on the digital experiences for a number of new products.',
                    'Our first project was The Dough Universe, an animated storytelling app designed to accompany a new range of toys for young children. This was a React Native app, developed for iOS and Android.',
                    'Following a partnership with Disney, we then launched the Electro Hero Dough Kit, released with a set of Marvel superhero-themed interactive learning resources.',
                    'Outside of product development, I architected a data pipeline to combine data from all our apps and our e-commerce site into a set of business intelligence dashboards.'
                ]
            },
            {
                key: 'twsu-engineer',
                title: 'Software Engineer',
                duration: 'for one and a half years',
                description: [
                    'My first project at Tech Will Save Us was to build Club Make, an interactive learning platform for children. I worked in a team of three to architect and build Make from scratch.',
                    'Following on from this, I began work on the digital experience for the Creative Coder Kit, a wearable with a ring of programmable LEDs that respond to movement. This consisted of a drag-and-drop coding interface on Make, the infrastructure to compile and download the program onto the device, and the embedded gesture-detection software.',
                    'The frontend was made using React and Redux, while the backend was built on Node, with an Express API and a MongoDB database.',
                    'Electron was used along with Socket.io to get code onto the device. The platform was hosted on AWS, using Docker and CircleCI.'
                ]
            }
        ]
    },
    {
        roleClass: 'gousto',
        name: 'Gousto',
        logo: 'gousto.svg',
        blurb:
            'Technology-focused startup aiming to put the joy back into cooking, selling recipe kits on a subscription model.',
        roles: [
            {
                key: 'gousto-engineer',
                title: 'Software Engineer',
                duration: 'for one year',
                description: [
                    ' I joined Gousto as a graduate, hungry to pick up everything I could about technology and the startup world. Although they sell food, Gousto is really a technology company, and provided a great environment for me to learn the ropes.',
                    'Here I not only learnt modern web development techniques, but I also learnt plenty about product development: agile methodologies, user flows, analytical marketing techniques, A/B testing.',
                    'I worked on range of full-stack projects: rebuilding the user account section of the website, an end-to-end recipe development and management system, and an automated image-optimisation system to name a few.',
                    'On the backend, we worked primarily with PHP, using Laravel and then Lumen for microservices. On the frontend it was originally jQuery and Knockout, but we transitioned pretty quickly to React.'
                ]
            }
        ]
    },
    {
        roleClass: 'oxford',
        name: 'Oxford University',
        logo: 'oxford.png',
        blurb:
            'Four-year course covering all disciplines of engineering, with a focus on the theoretical principles of the subject.',
        roles: [
            {
                key: 'masters',
                title: 'Master of Engineering',
                duration: 'graduated in 2014',
                description: [
                    'My undergraduate studies provided an excellent foundation in mathematics and science, as well as an overall appreciation for design, efficiency, and process. While initially focused on all engineering disciplines, I later specialised into software engineering, machine learning, electronics, and robotics.',
                    "For my Master's project, I developed a machine-learning system to automatically recognise the content of films or TV shows, and then categorise them accordingly. Additionally, I created a web interface for users to browse movies based on this categorisation, and explored ways to visualise the data to users.",
                    'In terms of technology, I was working primarily with MATLAB and Python for machine learning, as well as picking up foundational web development skills from a short course.'
                ]
            }
        ]
    }
];
