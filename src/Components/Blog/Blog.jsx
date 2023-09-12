import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark}) => {
    const {title, cover,author, author_img, reading_time, posted_date, hash_tag} = blog
    return (
        <div className='space-y-5 mb-20'>
            <img className='' src={cover} alt={`Cover pic of ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex gap-3 items-center'>
                    <div className=''>
                        <img className='w-20 mx-auto' src={author_img} alt="Author Image" />
                    </div>
                    <div>
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-3 items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className='text-red-600 text-2xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>Title: {title}</h2>
            <p>
                {
                    hash_tag.map((hash, index) => <span key={index}><a href=""> #{hash_tag}</a></span>)
                }
            </p>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
}
export default Blog;