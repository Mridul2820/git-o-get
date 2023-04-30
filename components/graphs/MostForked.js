import React from "react";
import { truncate } from "lodash";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CustomTooltip from "../reuse/CustomTooltip";

const MostForked = ({ repos }) => {
  const sortByFork = repos
    .slice(0)
    .sort((a, b) => (a.forkCount > b.forkCount ? -1 : 1))
    .slice(0, 4);

  const tickFork = (value) => {
    let roundVal = value > 1000 ? (value / 1000).toFixed(1) + "k" : value;

    return roundVal;
  };

  const tickRepo = (value) => {
    let shaortVal = truncate(value, { length: 10 });

    return shaortVal;
  };

  return (
    <div className="card-item p-3 min-h-[400px]">
      <p className="text-center mb-5 text-xl font-semibold">
        Most Forked Repositories
      </p>
      <ResponsiveContainer
        className="dark:bg-dark-color dark:text-white border dark:border-gray-700"
        width="100%"
        height={420}
      >
        <BarChart
          width={200}
          height={250}
          data={sortByFork}
          margin={{
            top: 5,
            right: 10,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="name" interval={0} tickFormatter={tickRepo} />
          <YAxis dataKey="forkCount" width={24} tickFormatter={tickFork} />
          <Tooltip
            content={
              <CustomTooltip
                customLabel1="Repository"
                customLabel2="Fork Count"
              />
            }
          />
          <Bar dataKey="forkCount" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

      <div className="flex items-center justify-center mt-3 gap-2">
        <span className="h-3 w-3 bg-[#8884d8]"></span>
        <p className="text-base font-bold">Fork Count</p>
      </div>
    </div>
  );
};

export default MostForked;
