function Post({ post }) {
  return (

    <div className="card post-card">

      <div className="post-title">

        <h2>{post.title}</h2>

      </div>

      <div className="card-body post-body">

        <p className="card-text">

          {post.body}

        </p>

      </div>

      <div className="post-tags">

        {post.tags.map((tag) => (

          <span
            key={tag}
            className="badge post-badge"
          >

            #{tag}

          </span>

        ))}

      </div>

    </div>

  );
}

export default Post;