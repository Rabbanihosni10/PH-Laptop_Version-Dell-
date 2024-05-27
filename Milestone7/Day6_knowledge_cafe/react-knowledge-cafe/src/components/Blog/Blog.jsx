import PropTypes from 'prop-types';
import { RiBookmarkLine } from "react-icons/ri";
const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
    const {id,title,cover,author,author_img,posted_date,reading_time,hashtags}=blog;
    console.log(blog)
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4 '>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl mb-1'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className='mb-9 text-red-600 text-2xl'><RiBookmarkLine></RiBookmarkLine></button>
                </div>
            </div>
            <h2 className="text-4xl mb-4">{title}</h2>
            <p className='mb-4'>
                {
                    hashtags.map((hash, idx)=> <span key={idx} className='ml-2'><a href=''>{hash}</a></span>)
                }
            </p>
            <button onClick={
                ()=>handleMarkAsRead(reading_time,id)} 
            className=' text-purple-600 font-bold underline'>
                Mark as read..</button>
        </div>
    );
};

Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;