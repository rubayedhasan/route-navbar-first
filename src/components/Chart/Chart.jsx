import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";

import { Bar, BarChart } from "recharts";

const Chart = () => {
  // fake data
  const students = [
    { id: 1, name: "Aiden Parker", math: 87, physics: 90, chemistry: 84 },
    { id: 2, name: "Sophia Ramirez", math: 93, physics: 95, chemistry: 91 },
    { id: 3, name: "Liam Bennett", math: 76, physics: 72, chemistry: 78 },
    { id: 4, name: "Mia Thompson", math: 82, physics: 80, chemistry: 83 },
    { id: 5, name: "Ethan Collins", math: 91, physics: 89, chemistry: 94 },
    { id: 6, name: "Isabella Nguyen", math: 88, physics: 92, chemistry: 86 },
    { id: 7, name: "Noah Mitchell", math: 69, physics: 65, chemistry: 71 },
    { id: 8, name: "Ava Carter", math: 95, physics: 97, chemistry: 96 },
    { id: 9, name: "Lucas Morgan", math: 73, physics: 70, chemistry: 75 },
    { id: 10, name: "Harper Rivera", math: 84, physics: 82, chemistry: 88 },
  ];

  return (
    <div>
      <LineChart
        width={1000}
        height={400}
        data={students}
        responsive
        margin={{
          top: 20,
          right: 20,
          bottom: 5,
          left: 0,
        }}
      >
        <CartesianGrid strokeDasharray="5 8" />
        <XAxis dataKey={"name"} />
        <YAxis />
        <Line dataKey={"math"} stroke="gray"></Line>
        <Line type="monotone" dataKey={"physics"} stroke="green"></Line>
        <Line dataKey={"chemistry"} stroke="blue"></Line>
        <Legend />
        <Tooltip />
      </LineChart>

      <BarChart width={500} height={400} data={students}>
        <XAxis dataKey={"name"} />
        <YAxis />

        <Bar dataKey={"math"} fill="#13131399"></Bar>
      </BarChart>
    </div>
  );
};

export default Chart;
