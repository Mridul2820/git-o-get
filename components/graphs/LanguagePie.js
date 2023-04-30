import React, { useState } from "react";
import { motion } from "framer-motion";
import { sumBy } from "lodash";
import { v4 as uuidv4 } from "uuid";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const LanguagePie = ({ repositories }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (index) => {
    setActiveIndex(index);
  };

  let langObjFull = [];

  repositories?.map((repo) =>
    repo.languages.edges.map((lang) => {
      langObjFull.push({
        name: lang.node.name,
        color: lang.node.color,
        size: lang.size,
      });
    })
  );

  const allLangs = Array.from(
    langObjFull
      .reduce((acc, { size, ...r }) => {
        const key = JSON.stringify(r);
        const current = acc.get(key) || { ...r, size: 0 };
        return acc.set(key, { ...current, size: current.size + size });
      }, new Map())
      .values()
  ).sort((a, b) => (a.size < b.size ? 1 : -1));

  const formatLangs = [];

  if (allLangs.length >= 5) {
    const mainLangs = allLangs.slice(0, 4);

    const sum_of_other = sumBy(allLangs.slice(4), "size");

    formatLangs.push(...mainLangs, {
      name: "Others",
      color: "#bbb",
      size: sum_of_other,
    });
  } else {
    formatLangs.push(...allLangs);
  }

  const sum_of_all_values = sumBy(formatLangs, "size");

  const renderActiveShape = ({
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
  }) => {
    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 12}
          fill={fill}
        />
      </g>
    );
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip backdrop-blur-sm shadow-bs1 bg-slate-50 p-2 dark:bg-dark-gray dark:text-white border dark:border-gray-500">
          {payload[0].name +
            ": " +
            ((payload[0].value * 100) / sum_of_all_values).toFixed(2) +
            "%"}
        </div>
      );
    }
    return null;
  };

  const RenderLegend = () => {
    return (
      <div className="flex justify-center mb-2">
        <ul className="mx-auto">
          {formatLangs?.map((entry) => (
            <li key={uuidv4()} className="flex items-center gap-2">
              <div className="h-3 w-3" style={{ background: entry.color }} />
              <span className="text-sm select-none">{entry.name}</span>
              <span>
                {((entry.size * 100) / sum_of_all_values).toFixed(2) + "%"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <motion.div
      className="card-item dark:border-gray-700 p-3 pb-0 min-h-[442px] max-w-[380px]"
      transition={{ duration: 1 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      <p className="text-center mb-3 text-xl font-semibold">Language Card</p>
      <RenderLegend />
      <ResponsiveContainer width="100%" height={250}>
        <PieChart width={280} height={500}>
          <Pie
            data={formatLangs}
            dataKey="size"
            cx="50%"
            cy="50%"
            labelLine={false}
            activeShape={renderActiveShape}
            activeIndex={activeIndex}
            outerRadius={100}
          >
            {formatLangs.map((entry, index) => (
              <Cell
                key={uuidv4()}
                fill={entry.color}
                onMouseOver={() => onPieEnter(index)}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} isAnimationActive={true} />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default LanguagePie;
