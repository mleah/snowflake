// @flow
import * as d3 from 'd3'

export type TrackId = string
export type Milestone = 0 | 1 | 2 | 3 | 4 | 5

export type MilestoneMap = {
  [key: TrackId]: Milestone
}
export const milestones = [0, 1, 2, 3, 4, 5];

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0;
    case 1: return 1;
    case 2: return 3;
    case 3: return 6;
    case 4: return 12;
    case 5: return 20;
    default: return 0;
  }
};

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
  // {label: 'Novice Developer', minPoints: 0, tier: 2, requiredCategories: [{categoryId: "DevCraft", points: 3}]},
  // {label: 'Developer', minPoints: 20, tier: 3, requiredCategories: [{categoryId: "DevCraft", points: 6}]},
  // {label: 'Experienced Developer', minPoints: 40, tier: 4, requiredCategories: [{categoryId: "DevCraft", points: 12}]},
  // {label: 'Architect', minPoints: 40, tier: 4, requiredCategories: [{categoryId: "DevCraft", points: 12}, {categoryId: "ExpertDoer", points: 12}]},
  // {label: 'Lead Developer', minPoints: 40, tier: 4, requiredCategories: [{categoryId: "DevCraft", points: 12}, {categoryId: "PeopleOps", points: 12}]},
  // {label: 'Principle Developer', minPoints: 70, tier: 5, requiredCategories: [{categoryId: "DevCraft", points: 20}]},
  //
  // {label: 'Junior Designer', minPoints: 0, tier: 2, requiredCategories: [{categoryId: "DesignerCraft", points: 3}]},
  // {label: 'Designer', minPoints: 20, tier: 3, requiredCategories: [{categoryId: "DesignerCraft", points: 6}]},
  // {label: 'Senior Designer', minPoints: 40, tier: 4, requiredCategories: [{categoryId: "DesignerCraft", points: 12}]},
  //
  // {label: 'Junior Delivery Lead', minPoints: 0, tier: 2, requiredCategories: [{categoryId: "DLDLCraft", points: 3}]},
  // {label: 'Delivery Lead', minPoints: 20, tier: 3, requiredCategories: [{categoryId: "DLDLCraft", points: 6}]},
  // {label: 'Experienced Delivery Lead', minPoints: 40, tier: 4, requiredCategories: [{categoryId: "DLDLCraft", points: 12}]},
  //
  // {label: 'Tier 2 Quality Engineer', minPoints: 0, tier: 2, requiredCategories: [{categoryId: "QACraft", points: 3}]},
  // {label: 'Tier 3 Quality Engineer', minPoints: 20, tier: 3, requiredCategories: [{categoryId: "QACraft", points: 6}]},
  // {label: 'Tier 4 Quality Engineer', minPoints: 40, tier: 4, requiredCategories: [{categoryId: "QACraft", points: 12}]},
];

export type Category = {
  displayName: string,
  color: string,
  tracks: Tracks
}

export type Categories = {
  [key: string]: Category
}

export const categories : Categories = {
  "Dev Role Aptitude": {
    displayName: "Dev Role Aptitude",
    color: '#016E82'
  },
  "Project Role Responsibilities": {
    displayName: "Project Role Responsibilities",
    color: '#0AB45A'
  },
  "Greater DL Responsibilities": {
    displayName: "Greater DL Responsibilities",
    color: '#FA7850'
  }
}

export type CategoryId = $Keys<typeof categories>

export const categoryIds: CategoryId[] = Object.keys(categories);

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

export const valueTracks: Tracks = {
  "PrimaryFocus": {
    "displayName": "Primary Focus",
    "categories": ["Dev Role Aptitude"],
    "description": "Category Description here",
    "milestones": [{
      "summary": "Summary text here",
      "signals": ["More generalized behaviors here"],
      "examples": ["Specific actions here"],
    }, {
      "summary": "Summary text here",
      "signals": ["More generalized behaviors here"],
      "examples": ["Specific actions here"],
    }, {
      "summary": "Summary text here",
      "signals": ["More generalized behaviors here"],
      "examples": ["Specific actions here"],
    }, {
      "summary": "Summary text here",
      "signals": ["More generalized behaviors here"],
      "examples": ["Specific actions here"],
    }, {
      "summary": "Summary text here",
      "signals": ["More generalized behaviors here"],
      "examples": ["Specific actions here"],
    }],
  },

  "Portability": {
    "displayName": "Portability",
    "categories": ["Dev Role Aptitude"],
    "description": "Category Description here",
    "milestones": [{
      "summary": "Summary text here",
      "signals": ["More generalized behaviors here"],
      "examples": ["Specific actions here"],
    }, {
      "summary": "Summary text here",
      "signals": ["More generalized behaviors here"],
      "examples": ["Specific actions here"],
    }, {
      "summary": "Summary text here",
      "signals": ["More generalized behaviors here"],
      "examples": ["Specific actions here"],
    }, {
      "summary": "Summary text here",
      "signals": ["More generalized behaviors here"],
      "examples": ["Specific actions here"],
    }, {
      "summary": "Summary text here",
      "signals": ["More generalized behaviors here"],
      "examples": ["Specific actions here"],
    }],
  },

  "PrinciplesPatterns": {
    "displayName": "Principles & Patterns",
    "categories": ["Dev Role Aptitude"],
    "description": "Category Description here",
    "milestones": [{
      "summary": "Summary text here",
      "signals": ["More generalized behaviors here"],
      "examples": ["Specific actions here"],
    }, {
      "summary": "Summary text here",
      "signals": ["More generalized behaviors here"],
      "examples": ["Specific actions here"],
    }, {
      "summary": "Summary text here",
      "signals": ["More generalized behaviors here"],
      "examples": ["Specific actions here"],
    }, {
      "summary": "Summary text here",
      "signals": ["More generalized behaviors here"],
      "examples": ["Specific actions here"],
    }, {
      "summary": "Summary text here",
      "signals": ["More generalized behaviors here"],
      "examples": ["Specific actions here"],
    }],
  },

    "Toolkit": {
        "displayName": "Toolkit",
        "categories": ["Dev Role Aptitude"],
        "description": "Category Description here",
        "milestones": [{
            "summary": "Summary text here",
            "signals": ["More generalized behaviors here"],
            "examples": ["Specific actions here"],
        }, {
            "summary": "Summary text here",
            "signals": ["More generalized behaviors here"],
            "examples": ["Specific actions here"],
        }, {
            "summary": "Summary text here",
            "signals": ["More generalized behaviors here"],
            "examples": ["Specific actions here"],
        }, {
            "summary": "Summary text here",
            "signals": ["More generalized behaviors here"],
            "examples": ["Specific actions here"],
        }, {
            "summary": "Summary text here",
            "signals": ["More generalized behaviors here"],
            "examples": ["Specific actions here"],
        }],
    },

  "Communication": {
    "displayName": "Communication",
    "categories": ["Project Role Responsibilities"],
    "description": "Category Description here",
    "milestones": [
    {
      "summary": "Summary text here",
      "signals": ["More generalized behaviors here"],
      "examples": ["Specific actions here"],
    },
    {
      "summary": "Summary text here",
      "signals": ["More generalized behaviors here"],
      "examples": ["Specific actions here"],
    },
    {
      "summary": "Summary text here",
      "signals": ["More generalized behaviors here"],
      "examples": ["Specific actions here"
      ],
    },
    {
      "summary": "Summary text here",
      "signals": ["More generalized behaviors here"],
      "examples": ["Specific actions here"],
    },
    {
      "summary": "Summary text here",
      "signals": ["More generalized behaviors here"],
      "examples": ["Specific actions here"],
    }
  ]},

  "Productivity": {
    "displayName": "Productivity ",
    "categories": ["Project Role Responsibilities"],
    "description": "Category Description here",
    "milestones": [
      {
          "summary": "Summary text here",
          "signals": ["More generalized behaviors here"],
          "examples": ["Specific actions here"],
      },
      {
          "summary": "Summary text here",
          "signals": ["More generalized behaviors here"],
          "examples": ["Specific actions here"],
      },
      {
          "summary": "Summary text here",
          "signals": ["More generalized behaviors here"],
          "examples": ["Specific actions here"
          ],
      },
      {
          "summary": "Summary text here",
          "signals": ["More generalized behaviors here"],
          "examples": ["Specific actions here"],
      },
      {
          "summary": "Summary text here",
          "signals": ["More generalized behaviors here"],
          "examples": ["Specific actions here"],
      }],
  },

  "Wellbeing": {
    "displayName": " Wellbeing ",
    "categories": ["Project Role Responsibilities"],
    "description": "Category Description here",
    "milestones": [
      {
          "summary": "Summary text here",
          "signals": ["More generalized behaviors here"],
          "examples": ["Specific actions here"],
      },
      {
          "summary": "Summary text here",
          "signals": ["More generalized behaviors here"],
          "examples": ["Specific actions here"],
      },
      {
          "summary": "Summary text here",
          "signals": ["More generalized behaviors here"],
          "examples": ["Specific actions here"
          ],
      },
      {
          "summary": "Summary text here",
          "signals": ["More generalized behaviors here"],
          "examples": ["Specific actions here"],
      },
      {
          "summary": "Summary text here",
          "signals": ["More generalized behaviors here"],
          "examples": ["Specific actions here"],
      }],
  },

    "Growth": {
        "displayName": " Growth ",
        "categories": ["Project Role Responsibilities"],
        "description": "Category Description here",
        "milestones": [
            {
                "summary": "Summary text here",
                "signals": ["More generalized behaviors here"],
                "examples": ["Specific actions here"],
            },
            {
                "summary": "Summary text here",
                "signals": ["More generalized behaviors here"],
                "examples": ["Specific actions here"],
            },
            {
                "summary": "Summary text here",
                "signals": ["More generalized behaviors here"],
                "examples": ["Specific actions here"
                ],
            },
            {
                "summary": "Summary text here",
                "signals": ["More generalized behaviors here"],
                "examples": ["Specific actions here"],
            },
            {
                "summary": "Summary text here",
                "signals": ["More generalized behaviors here"],
                "examples": ["Specific actions here"],
            }],
    },

  "Innovation": {
    "displayName": "Innovation",
    "categories": ["Greater DL Responsibilities"],
    "description": "Category Description here",
    "milestones": [
      {
          "summary": "Summary text here",
          "signals": ["More generalized behaviors here"],
          "examples": ["Specific actions here"],
      },
      {
          "summary": "Summary text here",
          "signals": ["More generalized behaviors here"],
          "examples": ["Specific actions here"],
      },
      {
          "summary": "Summary text here",
          "signals": ["More generalized behaviors here"],
          "examples": ["Specific actions here"
          ],
      },
      {
          "summary": "Summary text here",
          "signals": ["More generalized behaviors here"],
          "examples": ["Specific actions here"],
      },
      {
          "summary": "Summary text here",
          "signals": ["More generalized behaviors here"],
          "examples": ["Specific actions here"],
      }],
  },

  "Influencer": {
    "displayName": "Influencer",
    "categories": ["Greater DL Responsibilities"],
    "description": "Category Description here",
    "milestones": [
        {
            "summary": "Summary text here",
            "signals": ["More generalized behaviors here"],
            "examples": ["Specific actions here"],
        },
        {
            "summary": "Summary text here",
            "signals": ["More generalized behaviors here"],
            "examples": ["Specific actions here"],
        },
        {
            "summary": "Summary text here",
            "signals": ["More generalized behaviors here"],
            "examples": ["Specific actions here"
            ],
        },
        {
            "summary": "Summary text here",
            "signals": ["More generalized behaviors here"],
            "examples": ["Specific actions here"],
        },
        {
            "summary": "Summary text here",
            "signals": ["More generalized behaviors here"],
            "examples": ["Specific actions here"],
        }],
  },

  "Engagement": {
    "displayName": "Engagement",
    "categories": ["Greater DL Responsibilities"],
    "description": "Category Description here",
      "milestones": [
        {
            "summary": "Summary text here",
            "signals": ["More generalized behaviors here"],
            "examples": ["Specific actions here"],
        },
        {
            "summary": "Summary text here",
            "signals": ["More generalized behaviors here"],
            "examples": ["Specific actions here"],
        },
        {
            "summary": "Summary text here",
            "signals": ["More generalized behaviors here"],
            "examples": ["Specific actions here"
            ],
        },
        {
            "summary": "Summary text here",
            "signals": ["More generalized behaviors here"],
            "examples": ["Specific actions here"],
        },
        {
            "summary": "Summary text here",
            "signals": ["More generalized behaviors here"],
            "examples": ["Specific actions here"],
        }],
  },
    "Business": {
        "displayName": "Business",
        "categories": ["Greater DL Responsibilities"],
        "description": "Category Description here",
        "milestones": [
            {
                "summary": "Summary text here",
                "signals": ["More generalized behaviors here"],
                "examples": ["Specific actions here"],
            },
            {
                "summary": "Summary text here",
                "signals": ["More generalized behaviors here"],
                "examples": ["Specific actions here"],
            },
            {
                "summary": "Summary text here",
                "signals": ["More generalized behaviors here"],
                "examples": ["Specific actions here"
                ],
            },
            {
                "summary": "Summary text here",
                "signals": ["More generalized behaviors here"],
                "examples": ["Specific actions here"],
            },
            {
                "summary": "Summary text here",
                "signals": ["More generalized behaviors here"],
                "examples": ["Specific actions here"],
            }],
    }
};

export const allTracks: Tracks[] = [
    valueTracks
];

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
  let pointsByCategory = new Map();
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId];
    let firstCategoryFound = false
    tracks[trackId].categories.forEach(categoryId => {
      if (!ignoreAdditionalCategories || !firstCategoryFound) {
        let currentPoints = pointsByCategory.get(categoryId) || 0;
        pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
      }  
      firstCategoryFound = true
    })
  });
  return pointsByCategory
}

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  const pointsByCategory = pointsByCategoryFromMilestoneMap(milestoneMap);
  return categoryIds.map(categoryId => {
    const points = pointsByCategory.get(categoryId);
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
};

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => (sum + addend), 0)

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const pointsByCategory = pointsByCategoryFromMilestoneMap(milestoneMap, false);
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap);

  return titles.filter(title => {
    let eligible = true;
    title.requiredCategories.forEach(requiredCategory => {
      let categoryPoints = pointsByCategory.get(requiredCategory.categoryId);
      eligible = eligible && (categoryPoints >= requiredCategory.points)
    });
    return eligible
  }).filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints))
    .map(title => title.label)
};

export const emptyMilestoneMap = (): MilesoneMap => {
  let milestoneMap = {};
  trackIds.forEach((trackId) => {
    milestoneMap[trackId]= 0
  });
  return milestoneMap
};

export const defaultMilestoneMap = (): MilestoneMap => {
  let milestoneMap = {};
  trackIds.forEach((trackId) => {
    milestoneMap[trackId]= 0
  });
  return milestoneMap
};