import React, { useState } from 'react';
import { VictoryStack, VictoryBar } from 'victory';
import { Text } from 'rebass';



export const ElectionGraph = (props) => {
  const [displayName, setDisplayName] = useState(null);
  const myDataset = [
    [
      { x: "a", y: props.election.win.votes, name: props.election.win.name }
    ],
    [
      { x: "a", y: props.election.lose.votes, name: props.election.lose.name }
    ],
    [
      { x: "a", y: props.election.other.votes, name: props.election.other.name }
    ]
  ];

  return (
    <div>
      <div>
        <Text textAlign={'center'} fontWeight={'bold'}>2016 Results</Text>
        {displayName !== null ? <Text textAlign={'center'}>{displayName}</Text> : <Text textAlign={'center'} color={'gray_text'} sx={{ fontStyle: 'italic' }}>Hover over data for more info</Text>}
      </div>
      <VictoryStack
        horizontal={true}
        height={60}
        colorScale={["tomato", "orange", "gold"]}
        style={{
          data: { padding: 10 }
        }}

      >
        {myDataset.map((data, i) => {
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
      <Text textAlign={'center'} color={'gray_text'} sx={{ fontStyle: 'italic' }}>Note: placeholder data</Text>
    </div>
  )
}