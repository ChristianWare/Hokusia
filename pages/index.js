import { getJsonData } from "../utils/tools"
import CarrouselComp from "../components/ui/carrousel"
import Articles from "../components/home/articles"


const Home = ({data}) => {

console.log({data})

  return (
    <>
      <CarrouselComp data={data.carrousel}/>
      <Articles data={data.articles}/>
    </>
  )
}

export const getStaticProps = async() => {
  const data = await getJsonData();

  return{
    props:{
      data: data
    }
  }
}

export default Home
