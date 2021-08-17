import { getJsonData } from "../utils/tools"
import CarrouselComp from "../components/ui/carrousel"

const Home = ({data}) => {

console.log({data})

  return (
    <>
      <CarrouselComp data={data.carrousel}/>
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
