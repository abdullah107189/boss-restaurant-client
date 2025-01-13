import { FaWallet, FaUsers, FaBoxes, FaTruck } from 'react-icons/fa';
import useAuth from '../../../../hooks/useAuth';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Sector, ResponsiveContainer, Legend } from 'recharts';
const AdminHome = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const [adminStatus, setAdminStatus] = useState({})
    useEffect(() => {
        axiosSecure.get('/admin-status')
            .then(res => {
                setAdminStatus(res.data)
            })
    }, [axiosSecure])

    // Stats data
    const stats = [
        {
            id: 1,
            title: 'Revenue',
            value: parseFloat(adminStatus?.revenue).toFixed(2),
            icon: <FaWallet className="text-white text-2xl" />,
            gradient: 'from-purple-500 to-purple-100'
        },
        {
            id: 2,
            title: 'Customers',
            value: adminStatus?.customer,
            icon: <FaUsers className="text-white text-2xl" />,
            gradient: 'from-amber-400 to-amber-100'
        },
        {
            id: 3,
            title: 'Products',
            value: adminStatus?.products,
            icon: <FaBoxes className="text-white text-2xl" />,
            gradient: 'from-pink-500 to-pink-100'
        },
        {
            id: 4,
            title: 'Orders',
            value: adminStatus?.orders,
            icon: <FaTruck className="text-white text-2xl" />,
            gradient: 'from-blue-400 to-blue-100'
        },
    ];

    // chart bar
    const { data: chartData = [] } = useQuery({
        queryKey: ['adminChart'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/order-stats')
            return data
        }
    })


    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // rigth side custom piechart 
    const paiChart = chartData.map(data => {
        return { name: data.category, value: data.quantity }
    })
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className="p-6 max-w-6xl mx-auto bg-white rounded-lg shadow-sm">
            <h1 className="text-2xl font-bold mb-6 font-serif">Hi, Welcome {user?.displayName}!</h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                {stats.map((stat) => (
                    <div
                        key={stat.id}
                        className={`bg-gradient-to-r ${stat.gradient} p-4 rounded-lg flex items-center justify-between`}
                    >
                        <div className="w-12 h-12 flex items-center justify-center">
                            {stat.icon}
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-white">{stat.value}</h2>
                            <p className="text-white/90">{stat.title}</p>
                        </div>

                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Bell Curve Chart */}
                <div className="bg-white p-4 rounded-lg md:w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>

                {/* Pie Chart */}
                <div className="bg-white p-4 rounded-lg md:w-1/2">

                    <PieChart width={400} height={400}>
                        <Pie
                            data={paiChart}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {paiChart.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend></Legend>
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;