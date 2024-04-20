// import PropTypes from 'prop-types';
import { LineChart as MathChart, Line,XAxis,YAxis,BarChart,Bar, PieChart, Pie, Legend, Tooltip} from 'recharts';
const LineChart = () => {
    const MathMarksData = [
        { id: 1, name: 'Student 1', mathMark: 85, physicsMark: 78, chemistryMark: 90 },
        { id: 2, name: 'Student 2', mathMark: 78, physicsMark: 82, chemistryMark: 85 },
        { id: 3, name: 'Student 3', mathMark: 92, physicsMark: 90, chemistryMark: 88 },
        { id: 4, name: 'Student 4', mathMark: 64, physicsMark: 68, chemistryMark: 70 },
        { id: 5, name: 'Student 5', mathMark: 75, physicsMark: 72, chemistryMark: 78 },
        { id: 6, name: 'Student 6', mathMark: 88, physicsMark: 85, chemistryMark: 92 },
        { id: 7, name: 'Student 7', mathMark: 70, physicsMark: 65, chemistryMark: 68 },
        { id: 8, name: 'Student 8', mathMark: 95, physicsMark: 92, chemistryMark: 96 },
        { id: 9, name: 'Student 9', mathMark: 81, physicsMark: 80, chemistryMark: 84 },
        { id: 10, name: 'Student 10', mathMark: 87, physicsMark: 86, chemistryMark: 88 },
    ];

    return (
        <div>
            <MathChart width={800} height={400} data={MathMarksData }>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Line dataKey="mathMark" stroke='red'></Line>
                <Line dataKey={'physicsMark'} stroke='blue'></Line>
            </MathChart>
            
            <BarChart width={1000} height={400} data={MathMarksData}>
                <XAxis dataKey="name" />
                <YAxis dataKey="mathMark" />
                <Bar dataKey="mathMark" fill="#8884d8" />
            </BarChart>
            <PieChart width={800} height={800}>
                <Pie
                dataKey="mathMark"
                data={MathMarksData}
                isAnimationActive={true}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
                ></Pie>
                <Tooltip />
            </PieChart>
        </div>
    );
};
// LineChart.propTypes={
//     MathMarksData:PropTypes.array.isRequired,
// }
export default LineChart;