export default function Post({post}){
    console.log(post);
     
    const {userId,title,body} = post
       
    return(
        <div className="card2">
            <h3>{userId}</h3>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    )
}