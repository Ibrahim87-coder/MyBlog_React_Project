import BlogList from "./BlogList";
import useFetch from "./useFtech"; // my custom hook

const Home = () => {

    
    const {data: blogs,isPending , error} = useFetch('http://localhost:8000/blogs');
    
    return ( 
        <div className="home">
            {Error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
           {blogs && <BlogList blogs={blogs} title="All Blogs" /> }
        </div>
     );
}
 
export default Home;