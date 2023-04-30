import React from "react";
import {
  LineChart,
  Line,
  Tooltip,
  YAxis,
  XAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import CustomTooltip from "../reuse/CustomTooltip";

const ContributionGraph = ({ weeks, username }) => {
  let contributions = [];
  //slicing last 6 weeks
  weeks.slice(weeks.length - 6, weeks.length).map((week) =>
    week.contributionDays.map((contributionCount) => {
      contributions.push({
        contributionCount: contributionCount.contributionCount,
        date: contributionCount.date,
      });
    })
  );

  //returning data of last 31 days
  const presentDay = new Date().getDay();
  contributions = contributions.slice(5 + presentDay, 36 + presentDay);

  const tickDate = (value) => {
    const roundVal = new Date(value).getDate();

    return roundVal;
  };

  return (
    <div className="card-item py-3 px-3 md:px-5 min-h-[400px] mt-5 relative">
      <p className="text-center mb-5 text-xl font-semibold">
        {username}&apos;s Contribution Graph
      </p>
      <p className="absolute -left-6 top-1/2 -rotate-90 hidden md:block">
        Contributions
      </p>
      <p className="absolute left-1/2 bottom-3 -translate-x-1/2 whitespace-nowrap">
        Days{" "}
        <span className="font-semibold">
          {"(" +
            contributions[0].date +
            " - " +
            contributions.slice(-1)[0].date +
            ")"}
        </span>
      </p>
      <div className="pb-8 pl-0 md:pl-4">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            width={800}
            height={300}
            data={contributions}
            className="mr-5"
            margin={{ top: 0, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid />
            <Tooltip
              content={
                <CustomTooltip
                  customLabel1="Date"
                  customLabel2="Contribution"
                />
              }
            />
            <XAxis dataKey="date" tickFormatter={tickDate} interval={1} />
            <YAxis width={32} />
            <Line
              type="monotone"
              dataKey="contributionCount"
              stroke="#9a65fd"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ContributionGraph;
