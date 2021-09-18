import colors from '../data/colors.json'

export default function Color({color}) {
    return <div className='color-page' style={{backgroundColor: color.hex}} >
        <h1>
            {color.name}
        </h1>
    </div>
}
export const getStaticPaths = async () => {
const paths = colors.map((color) => ({params: {
    color: color.name
}}));
return {paths, fallback: false}
};

export const getStaticProps = async ({params}) => {
    const color = colors.find((color)=>(color.name === params.color));
    return {props: {color}};
}