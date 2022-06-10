import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
            />
            <div className="postInfo">
                <div className="postCast">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit </span>
                <hr />
                <span className="postDate">1 hour agp</span>
            </div>
        </div>
    )
}
