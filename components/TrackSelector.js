// @flow

import React from 'react'
import { trackIds, tracks, categories, categoryIds } from '../constants'
import type { MilestoneMap, TrackId } from '../constants'

type Props = {
  milestoneByTrack: MilestoneMap,
  focusedTrackId: TrackId,
  setFocusedTrackIdFn: (TrackId) => void
}

class TrackSelector extends React.Component<Props> {
  render() {
    return (
      <table className="track-selector">
      <style jsx>{`
        h2 {
          margin: 5px 0 5px 0;
        }
        .track-selector {
          flex-grow: 0;
          flex-basis: 30%;
          margin-right: 50px;
          margin-top: -5px;
        }
        .track-selector-tracks {
          border-spacing: 3px;
          border-bottom: 2px solid #ccc;
          padding-bottom: 10px;
          margin-left: -3px;
        }
        .track-selector-value {
          line-height: 50px;
          width: 50px;
          text-align: center;
          background: #eee;
          font-weight: bold;
          font-size: 24px;
          border-radius: 3px;
          cursor: pointer;
        }
        .track-selector-label {
          max-width: 100px;
          text-align: center;
          font-size: 10px;
        }
        table {
            width: 100%;
            border-spacing: 3px;
            border-bottom: 2px solid #ccc;
            padding-bottom: 20px;
            margin-bottom: 20px;
            margin-left: -3px;
          }
      `}</style>
      <tbody>
      {categoryIds.map(categoryId => (
        <tr key={categoryId} className="track-selector-category">
          <h2>{categories[categoryId].displayName}</h2>
          <table key={categoryId} className="track-selector-tracks">
            <tbody>
              <tr>
              {Object.keys(categories[categoryId].tracks).map(trackId => (
                  <td key={trackId} className="track-selector-label" onClick={() => this.props.setFocusedTrackIdFn(trackId)}>
                    {tracks[trackId].displayName}
                  </td>
                                    ))}
                </tr>
                <tr>
                                    {Object.keys(categories[categoryId].tracks).map(trackId => (
                  <td key={trackId} className="track-selector-value"
                      style={{border: '4px solid ' + (trackId == this.props.focusedTrackId ? '#000': categories[tracks[trackId].categories[0]].color), background: categories[tracks[trackId].categories[0]].color}}
                      onClick={() => this.props.setFocusedTrackIdFn(trackId)}>
                    {this.props.milestoneByTrack[trackId]}
                  </td>
                                ))}
                </tr>
            </tbody>
          </table>
        </tr>  
      ))}
            </tbody>
      </table>
    )
  }
}

export default TrackSelector
