type Props = {}
const AsidePosts = (props: Props) => {
    return (
        <div className="posts">
            <div className="posts_title">
                <p>Read Latest Posts</p>
            </div>

            <ul className="post_items">
                <li>
                    <img src="/images/post_img_1.jpg" alt="post img 1" />
                    <div className="posts_inf">
                        <p className="post_name">
                            Active and Passive <br /> Voice
                        </p>
                        <p className="post_date">20 February, 2020 </p>
                    </div>
                </li>
                <li>
                    <img src="/images/post_img_2.jpg" alt="post img 2" />
                    <div className="posts_inf">
                        <p className="post_name">
                            23 Ways to Improve Your Draft
                        </p>
                        <p className="post_date">20 February, 2020 </p>
                    </div>
                </li>
                <li>
                    <img src="/images/post_img_3.jpg" alt="post img 3" />
                    <div className="posts_inf">
                        <p className="post_name">
                            Advice for Writing Personal Statements
                        </p>
                        <p className="post_date">20 February, 2020 </p>
                    </div>
                </li>
                <li>
                    <img src="/images/post_img_4.jpg" alt="post img 4" />
                    <div className="posts_inf">
                        <p className="post_name">
                            Good writing is like a windowpane.
                        </p>
                        <p className="post_date">20 February, 2020 </p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default AsidePosts
