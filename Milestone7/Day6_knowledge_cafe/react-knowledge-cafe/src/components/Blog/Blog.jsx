import PropTypes from 'prop-types';
import { RiBookmarkLine } from "react-icons/ri";
const Blog = ({blog,handleAddToBookmark}) => {
    const {title,cover,author,author_img,posted_date,reading_time,hashtags}=blog;
    console.log(blog)
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl mb-1'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <span>{reading_time} min read</span>
                    <button onClick={handleAddToBookmark} className='mb-9 text-red-600 text-2xl'><RiBookmarkLine></RiBookmarkLine></button>
                </div>
            </div>
            <h2 className="text-4xl mb-4">{title}</h2>
            <p className='mb-4'>
                {
                    hashtags.map((hash, idx)=> <span key={idx} className='ml-2'><a href=''>{hash}</a></span>)
                }
            </p>
            <button className='border mb-2 ml-1'>Mark as read..</button>
        </div>
    );
};

Blog.propTypes={
    blog:PropTypes.object.isRequired
}
export default Blog;