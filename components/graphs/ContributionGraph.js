import React from 'react'
import { LineChart, Line, Tooltip, YAxis, XAxis, ResponsiveContainer } from 'recharts';

const ContributionGraph = ({ weeks }) => {
    const dateShort = { 
        day: 'numeric',
        month: 'short'
    }

    let contributions = []
    //slicing last 6 weeks
    weeks.slice(weeks.length - 6, weeks.length).map((week) =>
        week.contributionDays.map((contributionCount) => {
            contributions.push({
                contributionCount: contributionCount.contributionCount,
                date: contributionCount.date
            });
        })
    );

    //returning data of last 31 days
    const presentDay = new Date().getDay();
    contributions = contributions.slice(
        5 + presentDay,
        36 + presentDay
    );

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip backdrop-blur-sm shadow-sm bg-slate-50 p-2">
                    <p className="intro font-semibold">
                        {`Contribution : ${payload[0].value}`}
                    </p>

                    <p className="label">
                        {`Date : ${new Date(label).toDateString()}`}
                    </p>

                </div>
            );
        }
      
        return null;
    };

    const tickDate = value => {
        const roundVal = new Date(value).toLocaleDateString("en-US", dateShort);

        return roundVal
    }

    return (
        <div className='py-3 px-5 shadow-bs1 rounded-md h-full w-full min-h-[400px] bg-white mt-5'>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart width={800} height={300} data={contributions}>
                    <Tooltip 
                        content={<CustomTooltip />}
                    />
                    <XAxis 
                        dataKey="date"
                        tickFormatter={tickDate}
                        tickSize={4}
                    />
                    <YAxis 
                        padding={{ top: 10, bottom: 10 }}
                        width={32}
                    />
                    <Line 
                        type="monotone" 
                        dataKey="contributionCount"
                        stroke="#9a65fd"
                        strokeWidth={1}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ContributionGraph
