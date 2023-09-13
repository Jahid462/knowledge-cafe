import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks, readingTime}) => {

    return (
        <div className="w-1/3">
            <div>
                <h3 className='text-2xl mb-5'>Total Spend Time: {readingTime}</h3>
            </div>
            <h2 className='text-4xl font-bold'>Bookmarked Blogs: </h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;