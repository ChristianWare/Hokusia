import Masonry from "react-masonry-css"
import CardItem from "../ui/cards";

const Articles = (props) => {

    const breakpoints = {
        default: 3,
        768: 2,
        500: 1
    }

    return (
      <div>
        <Masonry
          breakpointCols={breakpoints}
          className='my-masonry-grid'
          columnClassName='my-masonry-grid_column'
        >
          {props.data.map((article) => (
            <CardItem key={article.id} article={article}/>
          ))}
        </Masonry>
      </div>
    );
}

export default Articles;
