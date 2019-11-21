import React, { useEffect, useState } from 'react';
import { VictoryStack, VictoryBar } from 'victory';
import { Text } from 'rebass';

/**
 * Renders a results graph for a given election result set.
 * @param {{electionDate: string, electionResults: [{ballot_id:number, election_id:string, issue_name:string, party:string, votes:number, winning_issue:number}]}}  props Election data object
 * @returns {JSX.Element} Graph UI Module
 */
export const ElectionGraph = (props) => {
  const [displayName, setDisplayName] = useState(null);
  const [dataset, setDataset] = useState([]);
  const [winInfo, setWinInfo] = useState(String(null));
  useEffect(() => {
    let newDataset = [];
    props.results.electionResults.forEach((resultSet) => {
      if (resultSet.winning_issue === 1) {
        setWinInfo(`District winner: ${resultSet.issue_name} (${resultSet.votes} votes)`);
      }
      newDataset.push(
        [
          { x: "a", y: resultSet.votes, name: `${resultSet.issue_name} (${resultSet.party})` }
        ]
      );
    });
    setDataset(newDataset);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div>
        <Text textAlign={'center'} fontWeight={'bold'}>{props.results.electionDate} Results</Text>
        {displayName !== null ?
          <Text textAlign={'center'}>{displayName}</Text>
          :
          <Text textAlign={'center'} color={'gray_text'} sx={{ fontStyle: 'italic' }}>
            Hover over data for more info
          </Text>
        }
      </div>
      <VictoryStack
        horizontal={true}
        height={60}
        colorScale={["#0F5257", "#E07A5F", "#3D405B", "#0B3142"]}
      >
        {dataset.map((data, i) => {
          return <VictoryBar
            data={data}
            key={i}
            style={{
              data: { width: 25 }
            }}
            events={[{
              target: "data",
              eventHandlers: {
                onMouseOver: (data, datum) => {
                  setDisplayName(datum.data[0].name + ': ' + datum.data[0].y);
                  return [
                    {
                      target: "data",
                      mutation: () => ({ style: { fill: '#55d6be', width: 35 } })
                    }
                  ];
                },
                onMouseOut: () => {
                  setDisplayName(null);
                  return [
                    {
                      target: "data",
                      mutation: () => { }
                    }
                  ];
                }
              }
            }]}
          />;
        })}
      </VictoryStack>
      <Text textAlign={'center'} color={'gray_text'} sx={{ fontStyle: 'italic' }}>{winInfo}</Text>
    </div>
  )
}