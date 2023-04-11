import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
} from "recharts";

export const Data = [
    { name: "2016", "EV market": 7.4, "Raw Material Market": -4.5 },
    { name: "2017", "EV market": 9.5, "Raw Material Market": -7.3 },
    { name: "2018", "EV market": 32.5, "Raw Material Market": -20.1 },
    { name: "2019", "EV market": 43.5, "Raw Material Market": -27.9 },
    { name: "2020", "EV market": 56.5, "Raw Material Market": -30.7 },
    { name: "2021", "EV market": 72.5, "Raw Material Market": -33.5 },
    { name: "2022", "EV market": 91.5, "Raw Material Market": -46.3 },
    { name: "2023", "EV market": 113.5, "Raw Material Market": -60.1 },
    { name: "2024", "EV market": 138.5, "Raw Material Market": -74.9 },
    { name: "2025", "EV market": 166.5, "Raw Material Market": -90.7 },
    { name: "2026", "EV market": 197.5, "Raw Material Market": -107.5 },
    { name: "2027", "EV market": 231.5, "Raw Material Market": -125.3 },
    { name: "2028", "EV market": 268.5, "Raw Material Market": -144.1 },
    { name: "2029", "EV market": 308.5, "Raw Material Market": -163.9 },
    { name: "2030", "EV market": 351.5, "Raw Material Market": -184.7 },
];

export function Growth({ data }) {
    return (
        <div style={{ width: "100%", height: "80%", padding: "4rem" }}>
            <ResponsiveContainer>
                <BarChart
                    width={1000}
                    height={500}
                    align="center"
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <ReferenceLine y={0} stroke="#000" />
                    <Bar dataKey="EV market" fill="#5837d0" />
                    <Bar dataKey="Raw Material Market" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
