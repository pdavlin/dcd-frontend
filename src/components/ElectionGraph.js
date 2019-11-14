import React from 'react';
import { VictoryStack, VictoryBar, VictoryTooltip } from 'victory';

export const ElectionGraph = (props) => {
  const results = {
    win: props.win,
    lose: props.lose,
    other: props.other
  }
  return (
    <VictoryStack
      labelComponent={
        <VictoryTooltip
          dx={(datum) => { return -(datum.y * 5)}}
          orientation={"bottom"}
        />
      }
      horizontal={true}
      height={30}
      colorScale={["tomato", "orange", "gold"]}
    >
      <VictoryBar
        labelComponent={<VictoryTooltip />}
        barWidth={15}
        data={[{ x: "a", y: results.win, label: "winner" }]}
      />
      <VictoryBar
        labelComponent={<VictoryTooltip />}
        barWidth={15}
        data={[{ x: "a", y: results.lose, label: "loser" }]}
      />
      <VictoryBar
        labelComponent={<VictoryTooltip />}
        barWidth={15}
        data={[{ x: "a", y: results.other, label: "other" }]}
      />
    </VictoryStack>
  )
}