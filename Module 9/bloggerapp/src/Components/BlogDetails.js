function BlogDetails() {

    const blogs = [

        {
            id: 1,
            title: "React Hooks",
            author: "John"
        },

        {
            id: 2,
            title: "JavaScript ES6",
            author: "David"
        }

    ];

    return (

        <div>

            <h2>Blog Details</h2>

            <ul>

                {

                    blogs.map(blog => (

                        <li key={blog.id}>
                            <b>{blog.title}</b><br />
                            Author : {blog.author}
                            <br /><br />
                        </li>

                    ))

                }

            </ul>

        </div>

    );

}

export default BlogDetails;