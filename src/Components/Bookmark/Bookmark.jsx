import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div>
            <h3 className='bg-gray-200 p-4 my-4 rounded-xl'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}
export default Bookmark;