import React, {useState, useEffect } from "react";
import axios from "axios";

const Posts = () => {
    const [posts, setPosts] = useState();   //setting inital value to nothing, all data will be stored in posts

    useEffect (() => {  //runs on initial rendering of page
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => { //returns data
            const responsePosts = res.data;  //setting data retrieved from link equal to responsePosts
            setPosts(responsePosts); //call function
        });
    }, []);
    return (    //must return some data, don't want to run unless we've pulled data
        <div>
            <h1>Posts Data</h1>
            {posts &&   /*if condition is true*/
            posts.map((post) => {   /*printing out contents of posts array*/
                const {id, title} = post;   /*type of data that we want to be pulled (found in link)*/
                return (    //must include div in order to map things with unique identifiers, otherwise error will occur*/
                    <div key={id}>
                        <h5>{title}</h5>
                        <h6>Assigned to user: {id}</h6>
                    </div>
                )
            })}
        </div>
    );
};

export default Posts;