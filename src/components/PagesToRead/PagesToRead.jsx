import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer,Tooltip } from 'recharts';
import { getBook } from "../LocalStorage/localstorage";
import { useLoaderData } from "react-router-dom";




const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', '#Fd2801', 'skyblue', 'maroon', 'teal', 'salmon','rose', 'green'];

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


export default function PagesToRead() {

    // const [bookData, setBookData] = useState([])
    // console.log(bookData)

    const stored = getBook()
    const loadingData = useLoaderData()
    const filteredBooks = loadingData.filter(data => stored.includes(data.bookId))
    console.log(filteredBooks)





    return (
        <div className="mx-auto max-w-screen-2xl flex justify-center mt-28 ">
            <div className="lg:w-[1400px] mx-auto flex justify-center w-96">
                <ResponsiveContainer width='80%' height={500}>
                    <BarChart
                        width={500}
                        height={300}
                        data={filteredBooks}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="bookName" />
                        <YAxis />
                        <Tooltip></Tooltip>
                        <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {filteredBooks.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}