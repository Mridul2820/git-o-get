import React from 'react'
import { LineChart, Line, Tooltip, YAxis, XAxis, ResponsiveContainer, CartesianGrid } from 'recharts';

const ContributionGraph = ({ weeks,username }) => {
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
                        {`Date : ${label}`}
                    </p>

                </div>
            );
        }
      
        return null;
    };

    const tickDate = value => {
        const roundVal = new Date(value).getDate();

        return roundVal
    }

    return (
        <div className='py-3 px-5 shadow-bs1 rounded-md h-full w-full min-h-[400px] bg-white mt-5 relative'>
            <p className='text-center mb-5 text-xl font-semibold'>{username}&apos;s Contribution Graph</p>
            <p className='absolute -left-6 top-[50%] -rotate-90 hidden md:block'>Contributions</p>
            <p className='absolute left-[50%] bottom-3 translate-x-[-50%] whitespace-nowrap'>
                Days <span className="font-semibold">{'(' + contributions[0].date + ' - ' + contributions.slice(-1)[0].date  + ')'}</span>
            </p>
            <div className="pb-8 pl-0 md:pl-4">
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart 
                        width={800} 
                        height={300} 
                        data={contributions} 
                        className='mr-5' 
                        margin={{ top: 0, right: 10, left: 0, bottom: 0 }}
                    >
                        <CartesianGrid/>
                        <Tooltip 
                            content={<CustomTooltip />}
                        />
                        <XAxis 
                            dataKey="date"
                            tickFormatter={tickDate}
                            interval={1}
                        />
                        <YAxis 
                            width={32}
                        />
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
    )
}

export default ContributionGraph
