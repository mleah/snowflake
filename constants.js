// @flow
import * as d3 from 'd3'

export type TrackId = string
export type Milestone = 0 | 1 | 2 | 3 | 4 | 5

export type MilestoneMap = {
  [key: TrackId]: Milestone
}
export const milestones = [0, 1, 2, 3, 4, 5]

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0
    case 1: return 1
    case 2: return 3
    case 3: return 6
    case 4: return 12
    case 5: return 20
    default: return 0
  }
}

export const pointsToLevels = {
  '0': '1.1',
  '5': '1.2',
  '11': '1.3',
  '17': '2.1',
  '23': '2.2',
  '29': '2.3',
  '36': '3.1',
  '43': '3.2',
  '50': '3.3',
  '58': '4.1',
  '66': '4.2',
  '74': '4.3',
  '90': '5.1',
  '110': '5.2',
  '135': '5.3',
}

export const titles = [
  {label: 'Novice Developer', minPoints: 0, tier: 2, requiredCategories: [{categoryId: "DevCraft", points: 3}]},
  {label: 'Developer', minPoints: 20, tier: 3, requiredCategories: [{categoryId: "DevCraft", points: 6}]},
  {label: 'Experienced Developer', minPoints: 40, tier: 4, requiredCategories: [{categoryId: "DevCraft", points: 12}]},
  {label: 'Architect', minPoints: 40, tier: 4, requiredCategories: [{categoryId: "DevCraft", points: 12}, {categoryId: "ExpertDoer", points: 12}]},
  {label: 'Lead Developer', minPoints: 40, tier: 4, requiredCategories: [{categoryId: "DevCraft", points: 12}, {categoryId: "PeopleOps", points: 12}]},
  {label: 'Principle Developer', minPoints: 70, tier: 5, requiredCategories: [{categoryId: "DevCraft", points: 20}]},
  
  {label: 'Junior Designer', minPoints: 0, tier: 2, requiredCategories: [{categoryId: "DesignerCraft", points: 3}]},
  {label: 'Designer', minPoints: 20, tier: 3, requiredCategories: [{categoryId: "DesignerCraft", points: 6}]},
  {label: 'Senior Designer', minPoints: 40, tier: 4, requiredCategories: [{categoryId: "DesignerCraft", points: 12}]},
  
  {label: 'Junior Delivery Lead', minPoints: 0, tier: 2, requiredCategories: [{categoryId: "DLDLCraft", points: 3}]},
  {label: 'Delivery Lead', minPoints: 20, tier: 3, requiredCategories: [{categoryId: "DLDLCraft", points: 6}]},
  {label: 'Experienced Delivery Lead', minPoints: 40, tier: 4, requiredCategories: [{categoryId: "DLDLCraft", points: 12}]},
  
  {label: 'Tier 2 Quality Engineer', minPoints: 0, tier: 2, requiredCategories: [{categoryId: "QACraft", points: 3}]},
  {label: 'Tier 3 Quality Engineer', minPoints: 20, tier: 3, requiredCategories: [{categoryId: "QACraft", points: 6}]},
  {label: 'Tier 4 Quality Engineer', minPoints: 40, tier: 4, requiredCategories: [{categoryId: "QACraft", points: 12}]},
]

export type Category = {
  displayName: string,
  color: string,
  tracks: Tracks
}

export type Categories = {
  [key: string]: Category
}

export const categories : Categories = {
  "Growth": {
    displayName: 'Growth',
    color: '#F6893D'
  },
  "Team": {
    displayName: 'Team',
    color: '#FEBC38'
  },
  "Opportunity": {
    displayName: 'Opportunity',
    color: '#D8C684'
  },
  "Community": {
    displayName: 'Community',
    color: '#697F9B'
  },
  "DLDLCraft": {
    displayName: 'Delivery Lead',
    color: '#DA5526'
  },
  "DesignerCraft": {
    displayName: 'Designer',
    color: '#DA5526'
  },
  "DevCraft": {
    displayName: 'Developer',
    color: '#DA5526'
  },
  "QACraft": {
    displayName: 'Quality Engineering',
    color: '#DA5526'
  },
  "PeopleOps": {
    displayName: 'People Ops',
    color: '#FFFFFF'
  },
  "ExpertDoer": {
    displayName: 'Expert Doer',
    color: '#FFFFFF'
  }
}

export type CategoryId = $Keys<typeof categories>

export const categoryIds: CategoryId[] = Object.keys(categories)

export type Track = {
  displayName: string,
  categories: CategoryId[],
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
}

export type Tracks = {
  [key: TrackId]: Track
}

export const dlValueTracks: Tracks = {
  
  "SelfGrowth": {
    "displayName": "Self Growth",
    "categories": ["Growth"],
    "description": "Grows oneself to better impact DL",
    "milestones": [{
      "summary": "Was a mentee or learned from a coach",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Better undestands how to direct learning with the help of a coach",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Can self-learn effectively without much interaction of a coach",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "[THIS IS NOT A MILESTONE]",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "[THIS IS NOT A MILESTONE]",
      "signals": [
      ],
      "examples": [
      ],
    }],
  },

  "Coaching": {
    "displayName": "Coaching",
    "categories": ["Growth","PeopleOps"],
    "description": "Coaches others to better impact DL",
    "milestones": [{
      "summary": "Mentored a person on a topic",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Has been mentoring others and understands how to focus new mentees on a topic",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Able to coach multiple topics at the same time. Has more advanced coaching techniques.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Coaches coaches for coaching others",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }],
  },

  "Recruiting": {
    "displayName": "Recruiting",
    "categories": ["Growth"],
    "description": "Focused on growing DL",
    "milestones": [{
      "summary": "Has reviewed a GTKY, interviewed a candidate, or referred a canidate.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Reviews GTKY and interviews canidates multiple times with high level of consistency. Referrs multiple canidates.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Reviews and actively encourages others to review GTKYs. Actively involved in improving the interview process. Referrs multiple senior level canidates.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }],
  },

  "Transparency": {
    "displayName": "Transparency",
    "categories": ["Team"],
    "description": "Provides clients and project team members with relevant status and other information needed to make decisions",
    "milestones": [{
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Provides clients and project team members with relevant status and other information needed to make decisions. Asks for help, when needed.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Provides clients and project team members with relevant status and other information needed to make decisions. Understands when to escalate issues to clients and founders. Asks for specific help when needed, in a way that makes it easy for the helper to understand and act on the request.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Provides clients with relevant status and other information needed to make decisions. Understands when to escalate issues to clients and founders. Asks for specific help when needed, in a way that makes it easy for the helper to understand and act on the request.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }],
  },

  "Leadership": {
    "displayName": "Leadership",
    "categories": ["Team","PeopleOps","ExpertDoer"],
    "description": "Influences team using Leadership skills",
    "milestones": [{
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }],
  },

  "DLProcess": {
    "displayName": "DL Process",
    "categories": ["Team","DLDLCraft","ExpertDoer"],
    "description": "Adopts our project process, which includes understanding project definition, scope, budget, timing, communication, iteration, and shipping.",
    "milestones": [{
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Adopts our project process, which includes understanding project definition, scope, budget, timing, communication, iteration, and shipping. Holds an understanding of common agile practices and how to apply them to a project.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Demonstrates our project process, which includes understanding project definition, scope, budget, timing, communication, iteration, and shipping. Begins to understand how to adapt a client’s process into our own. Holds an understanding of common agile practices and how, when, and why one would apply them to a project. Contributes to every part of the project process from estimation and SOW creation through development, and all the way to handoff to client, in order to influence project success. Identifies and manages risk. Proactively plans, and guides an internal and external team to execute against a plan.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Demonstrates a deep understanding of our project process. Adaptable and open to trying and testing other processes in order to get a team to their most effective point, including integrating client processes into ours. Holds an understanding of common agile practices and how, when, and why one would apply them to a project. Able to teach clients, team members, and other Detroit Labs co-workers about process and best practices in order to influence outcomes. Contributes to every part of the project process from estimation and SOW creation through development, and all the way to handoff to client, in order to ensure project success. Identifies and manages risk, and, where in our control, works to implement new policies that make sure those risks do not reappear in future projects. Proactively plans, and guides an internal and external team to execute against a plan. Delegates effectively - understands when and what to delegate, and clearly communicates what success looks like when the delegate takes responsibility of the task.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }],
  },

  "Innovation": {
    "displayName": "Innovation",
    "categories": ["Opportunity"],
    "description": "Seeks out and builds innovation",
    "milestones": [{
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }],
  },

  "Revenue": {
    "displayName": "Revenue",
    "categories": ["Opportunity","ExpertDoer"],
    "description": "Participates in finding new and maintaining current forms of revenue. This can be helping with Sales, maintaining Client Relations ships, or finding new revenue streams",
    "milestones": [{
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }],
  },
        
  "Flexibility": {
    "displayName": "Flexibility",
    "categories": ["Opportunity"],
    "description": "Demonstrates willingness and ability to go beyond their traditional role",
    "milestones": [{
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }],
  },

  "Internal": {
    "displayName": "Internal Community",
    "categories": ["Community","PeopleOps"],
    "description": "Involved in building and growing the culture of Labs",
    "milestones": [{
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }],
  },

  "Outreach": {
    "displayName": "Community Outreach",
    "categories": ["Community"],
    "description": "Involved in participating and increasing the outreach of Labs in the community",
    "milestones": [{
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }],
  },

  "Technical": {
    "displayName": "Technical Community",
    "categories": ["Community"],
    "description": "Involved in building and growing the prescence of Labs in our respective Technical Communinty",
    "milestones": [{
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }],
  }
}

export const devTracks: Tracks = {
  "iOS": {
    "displayName": "iOS",
    "categories": ["DevCraft"],
    "description": "Develops expertise in the iOS Platform",
    "milestones": [{
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
        "Able to understand and employ fundamental object-oriented principles, appropriately.",
        "Able to create basic user interfaces & interaction from a reference design.",
        "Demonstrates understanding of basic networking; able to use simple, RESTful web APIs to create dynamic applications.",
        "Demonstrates competency using a simple git workflow to collaborate on a project; including GitHub pull requests, code reviews, & resolving simple merge conflicts.",
        "Demonstrates basic understanding of Unix command line and simple shell commands & operations.",
        "Seeks out solutions to problems appropriately; understands when and how to use online resources, troubleshooting, and co-workers.",
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
        "Demonstrates a firm grasp of all object-oriented concepts & SOLID design principles.",
        "Writes clean, maintainable code that is easy for other developers to understand. Values readable code over clever code. Understands how and when to refactor code. Documents code effectively, as needed.",
        "Capable of writing simple tests; unit or BDD.",
        "Capable of building custom, non-native user interfaces, layouts & interactions; including basic animations.",
        "Demonstrates proficiency with networking concepts, including authentication (i.e. auth headers or OAuth); able to consume web services while being mindful of security concerns & device resource constraints. Able to design appropriate data models based on API resources.",
        "Confident performing more advanced git operations (i.e. revert, rebase/squash) branching strategies, and resolving more complex merge conflicts.",
        "Demonstrates competency with Unix command line and advanced shell commands & operations.",
        "Demonstrates understanding of build & release process, including; building for release, continuous integration, app signing, test build distribution, & app store submission.",
        "Capable of performing a thorough code review.",
        "Demonstrates knowledge of when to seek assistance.",
        "Capable of maintaining a legacy codebase.",
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
        "Demonstrates fluency in object-oriented concepts & able to leverage OOP design patterns, when appropriate.",
        "Creates tools (i.e. scripts, helper libraries) that help speed up & simplify development for their team, and documents their usage.",
        "Demonstrates proficiency in test writing and in writing testable code. Comfortable with concepts such as test doubles, fixtures, & mock APIs.",
        "Capable of creating complex, novel UI and animations from scratch. Demonstrates understanding of UI performance considerations and applies that knowledge to create responsive, dynamic user interfaces.",
        "Capable of creating apps that can consume any web service provided. Demonstrates fluency in RESTful API concepts and design, including authentication. Capable of designing a REST/JSON API to suit the needs of a project, be it mobile or web.",
        "Demonstrates fluency in git. Able to admin a GitHub repo, managing features such as protected branches & web hook integrations. Capable of designing or selecting a branching strategy for various types of projects with multiple release pipelines.",
        "Possesses breadth of knowledge of their primary platform (i.e. Android, iOS, web) and can answer technical questions about the platform’s capabilities and constraints.",
        "Capable of designing & creating a complete build-to-release process, including; writing any custom scripts that may be needed, handling complex signing and release scenarios, administration of CI servers, and management of either app store accounts & submission configuration (i.e. metadata) or server hosting of the web application.",
        "Able to contribute to any project when needed, regardless of technology stack.",
        "On a legacy codebase, having the wisdom to tell when simple bug fixing is enough or larger scale refactoring and rewrites are necessary, not just desirable.",
      ],
    },{
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }],
  },

  "Android": {
    "displayName": "Android",
    "categories": ["DevCraft"],
    "description": "Develops expertise in the Android Platform",
    "milestones": [{
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
        "Able to understand and employ fundamental object-oriented principles, appropriately.",
        "Able to create basic user interfaces & interaction from a reference design.",
        "Demonstrates understanding of basic networking; able to use simple, RESTful web APIs to create dynamic applications.",
        "Demonstrates competency using a simple git workflow to collaborate on a project; including GitHub pull requests, code reviews, & resolving simple merge conflicts.",
        "Demonstrates basic understanding of Unix command line and simple shell commands & operations.",
        "Seeks out solutions to problems appropriately; understands when and how to use online resources, troubleshooting, and co-workers.",
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
        "Demonstrates a firm grasp of all object-oriented concepts & SOLID design principles.",
        "Writes clean, maintainable code that is easy for other developers to understand. Values readable code over clever code. Understands how and when to refactor code. Documents code effectively, as needed.",
        "Capable of writing simple tests; unit or BDD.",
        "Capable of building custom, non-native user interfaces, layouts & interactions; including basic animations.",
        "Demonstrates proficiency with networking concepts, including authentication (i.e. auth headers or OAuth); able to consume web services while being mindful of security concerns & device resource constraints. Able to design appropriate data models based on API resources.",
        "Confident performing more advanced git operations (i.e. revert, rebase/squash) branching strategies, and resolving more complex merge conflicts.",
        "Demonstrates competency with Unix command line and advanced shell commands & operations.",
        "Demonstrates understanding of build & release process, including; building for release, continuous integration, app signing, test build distribution, & app store submission.",
        "Capable of performing a thorough code review.",
        "Demonstrates knowledge of when to seek assistance.",
        "Capable of maintaining a legacy codebase.",
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
        "Demonstrates fluency in object-oriented concepts & able to leverage OOP design patterns, when appropriate.",
        "Creates tools (i.e. scripts, helper libraries) that help speed up & simplify development for their team, and documents their usage.",
        "Demonstrates proficiency in test writing and in writing testable code. Comfortable with concepts such as test doubles, fixtures, & mock APIs.",
        "Capable of creating complex, novel UI and animations from scratch. Demonstrates understanding of UI performance considerations and applies that knowledge to create responsive, dynamic user interfaces.",
        "Capable of creating apps that can consume any web service provided. Demonstrates fluency in RESTful API concepts and design, including authentication. Capable of designing a REST/JSON API to suit the needs of a project, be it mobile or web.",
        "Demonstrates fluency in git. Able to admin a GitHub repo, managing features such as protected branches & web hook integrations. Capable of designing or selecting a branching strategy for various types of projects with multiple release pipelines.",
        "Possesses breadth of knowledge of their primary platform (i.e. Android, iOS, web) and can answer technical questions about the platform’s capabilities and constraints.",
        "Capable of designing & creating a complete build-to-release process, including; writing any custom scripts that may be needed, handling complex signing and release scenarios, administration of CI servers, and management of either app store accounts & submission configuration (i.e. metadata) or server hosting of the web application.",
        "Able to contribute to any project when needed, regardless of technology stack.",
        "On a legacy codebase, having the wisdom to tell when simple bug fixing is enough or larger scale refactoring and rewrites are necessary, not just desirable.",
      ],
    },{
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }],
  },

  "Javascript": {
    "displayName": "Javascript",
    "categories": ["DevCraft"],
    "description": "Develops expertise in the Javascript",
    "milestones": [{
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
        "Able to understand and employ fundamental object-oriented principles, appropriately.",
        "Able to create basic user interfaces & interaction from a reference design.",
        "Demonstrates understanding of basic networking; able to use simple, RESTful web APIs to create dynamic applications.",
        "Demonstrates competency using a simple git workflow to collaborate on a project; including GitHub pull requests, code reviews, & resolving simple merge conflicts.",
        "Demonstrates basic understanding of Unix command line and simple shell commands & operations.",
        "Seeks out solutions to problems appropriately; understands when and how to use online resources, troubleshooting, and co-workers.",
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
        "Demonstrates a firm grasp of all object-oriented concepts & SOLID design principles.",
        "Writes clean, maintainable code that is easy for other developers to understand. Values readable code over clever code. Understands how and when to refactor code. Documents code effectively, as needed.",
        "Capable of writing simple tests; unit or BDD.",
        "Capable of building custom, non-native user interfaces, layouts & interactions; including basic animations.",
        "Demonstrates proficiency with networking concepts, including authentication (i.e. auth headers or OAuth); able to consume web services while being mindful of security concerns & device resource constraints. Able to design appropriate data models based on API resources.",
        "Confident performing more advanced git operations (i.e. revert, rebase/squash) branching strategies, and resolving more complex merge conflicts.",
        "Demonstrates competency with Unix command line and advanced shell commands & operations.",
        "Demonstrates understanding of build & release process, including; building for release, continuous integration, app signing, test build distribution, & app store submission.",
        "Capable of performing a thorough code review.",
        "Demonstrates knowledge of when to seek assistance.",
        "Capable of maintaining a legacy codebase.",
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
        "Demonstrates fluency in object-oriented concepts & able to leverage OOP design patterns, when appropriate.",
        "Creates tools (i.e. scripts, helper libraries) that help speed up & simplify development for their team, and documents their usage.",
        "Demonstrates proficiency in test writing and in writing testable code. Comfortable with concepts such as test doubles, fixtures, & mock APIs.",
        "Capable of creating complex, novel UI and animations from scratch. Demonstrates understanding of UI performance considerations and applies that knowledge to create responsive, dynamic user interfaces.",
        "Capable of creating apps that can consume any web service provided. Demonstrates fluency in RESTful API concepts and design, including authentication. Capable of designing a REST/JSON API to suit the needs of a project, be it mobile or web.",
        "Demonstrates fluency in git. Able to admin a GitHub repo, managing features such as protected branches & web hook integrations. Capable of designing or selecting a branching strategy for various types of projects with multiple release pipelines.",
        "Possesses breadth of knowledge of their primary platform (i.e. Android, iOS, web) and can answer technical questions about the platform’s capabilities and constraints.",
        "Capable of designing & creating a complete build-to-release process, including; writing any custom scripts that may be needed, handling complex signing and release scenarios, administration of CI servers, and management of either app store accounts & submission configuration (i.e. metadata) or server hosting of the web application.",
        "Able to contribute to any project when needed, regardless of technology stack.",
        "On a legacy codebase, having the wisdom to tell when simple bug fixing is enough or larger scale refactoring and rewrites are necessary, not just desirable.",
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }],
  },

  "DevOps": {
    "displayName": "DevOps",
    "categories": ["DevCraft"],
    "description": "Develops expertise in the DevOps",
    "milestones": [{
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }],
  }
}

export const dldlTracks: Tracks = {
  "DLDLToolkit": {
    "displayName": "DLDL Toolkit",
    "categories": ["DLDLCraft"],
    "description": "Knows which tool to use depending on the scope and phase of the project. These include tools like project management tools (Trello, JIRA), team performance metrics, Google Docs, story mapping, story cards, burn down, Basecamp, distribution tools, crash analysis tools, and analytics tools.",
    "milestones": [{
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Uses enthusiasm to steer the client and team toward long and short term project goals. Employs tools to solve problems and manage small or internal projects independently and successfully. These include tools like project management tools (Trello, JIRA), team performance metrics, Google Docs, story mapping, story cards, burn down, Basecamp, distribution tools, crash analysis tools, and analytics tools. Thinks about the current needs of a project, but also considers and plans for project needs weeks into the future.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Uses enthusiasm and knowledge to steer the client and team toward long and short term project goals. Employs tools to solve problems and manage small to medium projects independently and successfully. These include tools like project management tools (Trello, JIRA), team performance metrics, Google Docs, story mapping, story cards, burn down, Basecamp, distribution tools, crash analysis tools, and analytics tools. Knows which tool to use depending on the scope and phase of the project. Knows how to break down work into smaller, more digestible pieces. Thinks about the current needs of a project, but also considers and plans for project needs months into the future. Learns strategies for positive project movement regardless of noise, blockers, or indecision from the client.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Uses enthusiasm, knowledge, and motivation to steer the client and team toward long and short term project goals. Employs tools to solve problems and manage large or enterprise projects or programs independently and successfully. These include tools like project management tools (Trello, JIRA), team performance metrics, Google Docs, story mapping, story cards, burn down, Basecamp, distribution tools, crash analysis tools, and analytics tools. Knows which tool to use depending on the scope and phase of the project. Knows how to break down work into smaller, more digestible pieces, and teaches the team why that is important. Seeks out new techniques and tools, tries them out, and makes recommendations to their teams. Thinks about the current needs of a project, but also considers and plans for project needs in order to sustain a long-term and mutually beneficial client relationship. Develops strategies for positive project movement regardless of noise, blockers, or indecision from the client.",
      "signals": [
      ],
      "examples": [
      ],
    },{
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }],
  },
  "ProjectManagement": {
    "displayName": "Project Management",
    "categories": ["DLDLCraft"],
    "description": "Demonstrates fluency in the common languages of project management and Agile methodologies.",
    "milestones": [{
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Building fluency in the common languages of project management and Agile methodologies. Actively learning how to communicate with Designers, Developers, QA, Sales, and clients in their language, working with consideration for their cares and concerns.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Demonstrates fluency in the common languages of project management and Agile methodologies. Fosters a highly-collaborative project process and leans on the team to talk through both scope and technical challenges to negotiate thoughtful outcomes. Effectively communicates with Designers, Developers, QA, Sales, and clients in their language, working with consideration for their cares and concerns. Conducts difficult and actionable conversations with clients and team members, in person and via email, with positive outcomes. Understands business strategy. May participate in cross-discipline councils, bringing a delivery-focused voice to the conversation and building trust between the Delivery Lead team and other disciplines.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Demonstrates fluency in the common languages of project management and Agile methodologies. Fosters a highly-collaborative project process and, as a result, is trusted by their client and team to lead and actively participate in discussions for both scope and technical challenges, and negotiate thoughtful outcomes. Expertly communicates with Designers, Developers, QA, Sales, and clients in their language, working with consideration for their cares and concerns. Can conduct very difficult and actionable conversations with clients and team members, in person and via email, with consistently positive outcomes. Understands business strategy and actively pushes towards business goals for Detroit Labs and our clients. Enthusiastically participates in cross-discipline councils, bringing a delivery-focused voice to the conversation and building trust between the Delivery Lead team and other disciplines. Understands a client’s drivers and navigating its organization (Who is important, and who is creating noise? What is an emergency that you’ll need to work over the weekend for and call your team up, and what can wait?)",
      "signals": [
      ],
      "examples": [
      ],
    },{
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }],
  }
}

export const designTracks: Tracks = {
  "UX": {
    "displayName": "UX Design",
    "categories": ["DesignerCraft"],
    "description": "Develops expertise in UX",
    "milestones": [{
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Familiarity with information architecture, multi-step and cross-platform flows. Consistently considers the holistic user experience and potential states (errors, success, dead-ends) in their work.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Demonstrates proficiency in and understanding of information architecture, multi-step and cross-platform flows. Consistently considers the holistic user experience and potential states (errors, success, dead-ends) in the projects they work on.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Demonstrates and articulates a strong understanding of information architecture, multi-step and cross-platform flows. Consistently considers the holistic user experience and potential states (errors, success, dead-ends) in the projects they work on.",
      "signals": [
      ],
      "examples": [
      ],
    },{
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }],
  },
  "VisualDesign": {
    "displayName": "Visual Design",
    "categories": ["DesignerCraft"],
    "description": "Demonstrates taste of layout, typography and visual hierarchy.",
    "milestones": [{
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Demonstrates taste of layout, typography and visual hierarchy.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Demonstrates understanding of layout, typography and visual hierarchy. Uses platform design principles and existing style guides.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Demonstrates and articulates understanding of layout, typography and visual hierarchy, as it pertains to mobile apps.",
      "signals": [
      ],
      "examples": [
      ],
    },{
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }],
  },
  "DesignToolkit": {
    "displayName": "Design Toolkit",
    "categories": ["DesignerCraft"],
    "description": "Employs design tools to solve and communicate user flows, interaction and motion.",
    "milestones": [{
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Works with their design mentor to employ the appropriate design tools to solve and communicate user flows, interaction and motion. These tools include sketching, diagramming, interface design tools (Sketch, Photoshop, Illustrator) and prototyping tools (InVision, Framer, Principle).",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Employs design tools to solve and communicate user flows, interaction and motion, and knows which tool to use depending on the scope and phase of the project. These tools include sketching, diagramming, interface design tools (Sketch, Photoshop, Illustrator) and prototyping tools (InVision, Framer, Principle).",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Employs a broad set of design tools to best solve and communicate user flows, interaction and motion, and knows which tool to use depending on the scope and phase of the project. These tools include sketching, diagramming, interface design tools (Sketch, Photoshop, Illustrator) and prototyping tools (InVision, Framer, Principle). Additionally, seeks out new techniques and tools, tries them out and makes recommendations to the Design team.",
      "signals": [
      ],
      "examples": [
      ],
    },{
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }],
  }
}

export const qaTracks: Tracks = {
  "TestStrategy": {
    "displayName": "Test Strategy",
    "categories": ["QACraft"],
    "description": "Experience with using project definition, scope, and business requirements, to create test cases, bug reports, and regression testing.",
    "milestones": [{
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Adapts to the project processes used by Detroit Labs. This includes understanding project definition and scope, high-level understanding of business requirements, a general understanding of how to write a bug report and high-level understanding of the Agile development process. Takes initiative in getting involved and contributing.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Demonstrates a strong understand of the project processes used by Detroit Labs. This includes using project definition, scope, and business requirements to create a testing strategy and a test plan, if required. Demonstrates a proficiency in regression testing, writing detailed bug reports, identifying use cases, prioritizing issues, assigning severity, and working on a team.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Has an expertise in the project processes used by Detroit Labs. Uses project definition, scope, and business requirements to create a testing strategy. Is an expert in regression testing, writing detailed test cases and bug reports, identifying use cases, prioritizing issues, assigning severity, and being an overall high contributor to the team. Is highly competent in troubleshooting and finding solutions. ",
      "signals": [
      ],
      "examples": [
      ],
    },{
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }],
  },
  "AutomatedTesting": {
    "displayName": "Automated Testing",
    "categories": ["QACraft"],
    "description": "Develops expertise in writing and executing Automated Tests",
    "milestones": [{
      "summary": "Is actively learning or has done a few tutorials and exercises on Automated Tests.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Continued learning and implementing Automated Tests in a project.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Consistently implementing Automated Tests in a project and more advanced techniques.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Teaching and Leading Automated Testing at Labs.",
      "signals": [
      ],
      "examples": [
      ],
    },{
      "summary": "Industry Expert in Automated Testing.  Is creating the next better Automated Tests.",
      "signals": [
      ],
      "examples": [
      ],
    }],
  },
  "QATools": {
    "displayName": "QA Tools",
    "categories": ["QACraft"],
    "description": "Expierence with Agile tools such as Jira and Trello and API Testing tools such as Postman and Charles Proxy,",
    "milestones": [{
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Has fundamental knowledge (or experience) with bug-tracking software (Jira, Trello) and/or the ability to quickly ramp up on it. Has an openness to learn how to use technical software tools as required on a project by project basis.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Has advanced-level experience with Agile bug-tracking software (Jira, Trello), familiarity with API testing tools (Postman, Charles Proxy) or a willingness to learn them and the overall drive to learn and make use of tools used by the development team. Actively pursues training and professional development, keeps ahead of new industry trends and tools of the trade.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Has expert-level knowledge of Agile bug-tracking software (Jira, Trello) and API testing tools (Postman, Charles Proxy). Additionally, seeks out new techniques and tools, tries them out, and makes recommendations to the Quality Engineering team or the delivery team as a whole.",
      "signals": [
      ],
      "examples": [
      ],
    },{
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }],
  },
  "Accessibility": {
    "displayName": "Accessibility",
    "categories": ["QACraft"],
    "description": "Owns and promotes accessibility standards such as WCAG while pairing with team members to implement them into project work. Actively evaluates and provides suggestions to existing processes or suggests new processes in order to increase the chances of project success.",
    "milestones": [{
      "summary": "Has learned and understands some basic Accessibility standards",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Continued learning and calls out basic Accessibility standards from team.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Understands and catches more advanced Accessibility standards.",
      "signals": [
      ],
      "examples": [
      ],
    }, {
      "summary": "Owns and promotes Accessibility standards such as WCAG while pairing with team members to implement them into project work. Actively evaluates and provides suggestions to existing processes or suggests new processes in order to increase the chances of project success.",
      "signals": [
      ],
      "examples": [
      ],
    },{
      "summary": "Creates new standards of Accessibility in the industry.",
      "signals": [
      ],
      "examples": [
      ],
    }],
  }
}

export const allTracks: Tracks[] = [dlValueTracks, devTracks, dldlTracks, designTracks, qaTracks]

const combineAllTracks = (tracksToCombine: Tracks[]) => {
  let combinedTracks: Tracks = {}
  tracksToCombine.forEach((tracks) => {
    let trackIds = Object.keys(tracks)
    trackIds.forEach((trackId) => {
      combinedTracks[trackId] = tracks[trackId]
    })
  })
  return combinedTracks
}

export const tracks: Tracks = combineAllTracks(allTracks)

export const trackIds: TrackId[] = Object.keys(tracks)

const setCategoryTracks = () => {
  categoryIds.forEach((categoryId) => {
    categories[categoryId].tracks = {}
  })
  trackIds.forEach((trackId) => {
    const track = tracks[trackId]
    track.categories.forEach((categoryId) => {
        categories[categoryId].tracks[trackId] = track
    })
  })
}
setCategoryTracks()

export const pointsByCategoryFromMilestoneMap = (milestoneMap: MilestoneMap, ignoreAdditionalCategories: Boolean = true) => {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    let firstCategoryFound = false
    tracks[trackId].categories.forEach(categoryId => {
      if (!ignoreAdditionalCategories || !firstCategoryFound) {
        let currentPoints = pointsByCategory.get(categoryId) || 0
        pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
      }  
      firstCategoryFound = true
    })
  })
  return pointsByCategory
}

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  const pointsByCategory = pointsByCategoryFromMilestoneMap(milestoneMap)
  return categoryIds.map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => (sum + addend), 0)

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const pointsByCategory = pointsByCategoryFromMilestoneMap(milestoneMap, false)
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => {
    let eligible = true
    title.requiredCategories.forEach(requiredCategory => {
      let categoryPoints = pointsByCategory.get(requiredCategory.categoryId)
      eligible = eligible && (categoryPoints >= requiredCategory.points)
    })
    return eligible
  }).filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints))
    .map(title => title.label)
}

export const emptyMilestoneMap = (): MilesoneMap => {
  let milestoneMap = {}
  trackIds.forEach((trackId) => {
    milestoneMap[trackId]= 0
  })
  return milestoneMap
}

export const defaultMilestoneMap = (): MilestoneMap => {
  let milestoneMap = {}
  trackIds.forEach((trackId) => {
    milestoneMap[trackId]= 2
  })
  return milestoneMap
}