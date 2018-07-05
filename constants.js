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

export const maxLevel = 135

export type Category = {
  color: string
}

export type Categories = {
  [key: string]: Category
}

export const categories : Categories = {
  "Craft": {
    color: '#DA5526'
  },
  "Growth": {
    color: '#F6893D'
  },
  "Team": {
    color: '#FEBC38'
  },
  "Opportunity": {
    color: '#D8C684'
  },
  "Community": {
    color: '#697F9B'
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

export const tracks: Tracks = {
  "iOS": {
    "displayName": "iOS",
    "category": "Craft",
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
    "category": "Craft",
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
    "category": "Craft",
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

  "________": {
    "displayName": "________",
    "category": "Craft",
    "description": "Develops expertise in the ________",
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

  "Self Growth": {
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

  "Grows Others": {
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

  "Grows DL": {
    "displayName": "Grows DL",
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

  "Project Management": {
    "displayName": "Project Management",
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

  "Communication": {
    "displayName": "Communication",
    "category": "Team",
    "description": "Develops communication skills for better working in a team",
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

  "__________": {
    "displayName": "_________",
    "category": "Team",
    "description": "Teamy thing",
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

  "Recruiting": {
    "displayName": "Recruiting",
    "category": "Opportunity",
    "description": "Involved in recruitment for Labs",
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

export const trackIds: TrackId[] = Object.keys(tracks)

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

export const titles = [
  {label: 'Engineer I', minPoints: 0, maxPoints: 16},
  {label: 'Engineer II', minPoints: 17, maxPoints: 35},
  {label: 'Senior Engineer', minPoints: 36, maxPoints: 57},
  {label: 'Group Lead', minPoints: 36, maxPoints: 57},
  {label: 'Staff Engineer', minPoints: 58, maxPoints: 89},
  {label: 'Senior Group Lead', minPoints: 58, maxPoints: 89},
  {label: 'Principal Engineer', minPoints: 90},
  {label: 'Director of Engineering', minPoints: 90}
]

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