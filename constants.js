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
  {label: 'Apprentice', minPoints: 0, maxPoints: 5},
  {label: 'Intern', minPoints: 3, maxPoints: 5},
  {label: 'Novice', minPoints: 5, maxPoints: 18},
  {label: 'Developer', minPoints: 18, maxPoints: 36},
  {label: 'Group Lead', minPoints: 36, maxPoints: 58},
  {label: 'Senior', minPoints: 36, maxPoints: 58},
  {label: 'Senior Group Lead', minPoints: 58, maxPoints: 89},
  {label: 'Principal Engineer', minPoints: 90},
  {label: 'Director of Engineering', minPoints: 90}
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
  "DevCraft": {
    displayName: 'Developer Craft',
    color: '#DA5526'
  },
  "DLDLCraft": {
    displayName: 'Delivery Lead Craft',
    color: '#DA5526'
  },
  "DesignerCraft": {
    displayName: 'Designer Craft',
    color: '#DA5526'
  },
  "QACraft": {
    displayName: 'Quality Engineering Craft',
    color: '#DA5526'
  }
}

export type CategoryId = $Keys<typeof categories>

export const categoryIds: CategoryId[] = Object.keys(categories)

export type Track = {
  displayName: string,
  category: CategoryId,
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
    "category": "Growth",
    "description": "Grows oneself to better impact DL",
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

  "GrowsOthers": {
    "displayName": "Grows Others",
    "category": "Growth",
    "description": "Grows others to better impact DL",
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

  "Recruiting": {
    "displayName": "Recruiting",
    "category": "Growth",
    "description": "Focused on growing DL",
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

  "Collobaration": {
    "displayName": "Collaboration",
    "category": "Team",
    "description": "Focused on the success of the team",
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

  "Leadership": {
    "displayName": "Leadership",
    "category": "Team",
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
    "category": "Team",
    "description": "Adopts our project process, which includes understanding project definition, scope, budget, timing, communication, iteration, and shipping.",
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

  "Innovation": {
    "displayName": "Innovation",
    "category": "Opportunity",
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
    "category": "Opportunity",
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
    "category": "Opportunity",
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
    "category": "Community",
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
    "category": "Community",
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
    "category": "Community",
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
    "category": "DevCraft",
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
    "category": "DevCraft",
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
    "category": "DevCraft",
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

  "DevOps": {
    "displayName": "DevOps",
    "category": "DevCraft",
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
    "category": "DLDLCraft",
    "description": "Knows which tool to use depending on the scope and phase of the project. These include tools like project management tools (Trello, JIRA), team performance metrics, Google Docs, story mapping, story cards, burn down, Basecamp, distribution tools, crash analysis tools, and analytics tools.",
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
    "category": "DLDLCraft",
    "description": "Demonstrates fluency in the common languages of project management and Agile methodologies.",
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
    "category": "DesignerCraft",
    "description": "Develops expertise in UX",
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
    "category": "DesignerCraft",
    "description": "Demonstrates taste of layout, typography and visual hierarchy.",
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
    "category": "DesignerCraft",
    "description": "Employs design tools to solve and communicate user flows, interaction and motion.",
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
    "category": "QACraft",
    "description": "Experience with using project definition, scope, and business requirements, to create test cases, bug reports, and regression testing.",
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
    "category": "QACraft",
    "description": "Develops expertise in writing and executing Automated Tests",
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
    },{
      "summary": "",
      "signals": [
      ],
      "examples": [
      ],
    }],
  },
  "QATools": {
    "displayName": "QA Tools",
    "category": "QACraft",
    "description": "Expierence with Agile tools such as Jira and Trello and API Testing tools such as Postman and Charles Proxy,",
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
    "category": "QACraft",
    "description": "Experience with accessibility standards and promotion",
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
    },{
      "summary": "",
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
    const categoryId = tracks[trackId].category
    categories[categoryId].tracks[trackId] = tracks[trackId]
  })
}
setCategoryTracks()

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
  })
  return categoryIds.map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => (sum + addend), 0)

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
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