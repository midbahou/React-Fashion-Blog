import photo1 from "../../assets/blog-image-1.jpg"
import photo2 from "../../assets/blog-image-2.jpg"
import "../Article/Article.css"

function Article() {
    
    return (
        <div>
            <section>
                <article>
                    <time dateTime="02/26/2025">26 Feb 2025</time>
                    <h2>On the Street in Brooklyn</h2>
                    <img src={photo1} alt="A woman in Brooklyn street" />
                    <p>Forem ipsum dolor sit, amet consectetur adipisicing elit. Facere aliquam itaque, facilis enim sint eligendi ea quae magni praesentium, nihil labore quod reiciendis perferendis non impedit repellat blanditiis voluptatum quasi!
                    Deleniti repudiandae obcaecati vel deserunt voluptates mollitia nesciunt quibusdam dolorem neque fuga possimus, suscipit sed aspernatur! Rerum, eum molestiae? Odio consequuntur laudantium magni id similique. Alias in maxime molestias rem.
                    Natus dignissimos quia, quidem aliquam, blanditiis molestias hic iste quaerat cum eum ex beatae nostrum quis vel? Consequatur nobis maiores facere minus quos autem quas. Sequi numquam laudantium alias perspiciatis?
                    Ipsum ipsam atque, sequi possimus consectetur itaque vitae pariatur! Veniam harum odio commodi doloribus provident aut, ab voluptas molestias eligendi doloremque culpa omnis est qui voluptatum! Odit qui quod fugiat.
                    Provident, quos minima asperiores cum perspiciatis amet et labore deserunt ab perferendis, rem totam? Ex dicta delectus consequatur voluptas reprehenderit possimus nesciunt recusandae. Amet eos a illum porro illo reprehenderit.s</p>
                    <a href="#">Continues ...</a>
            </article>

            <hr />

            <article>
                    <time dateTime="02/25/2025">25 Feb 2025</time>
                    <h2>Vintage in Vogue</h2>
                    <img src={photo2} alt="Classic Picture" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere aliquam itaque, facilis enim sint eligendi ea quae magni praesentium, nihil labore quod reiciendis perferendis non impedit repellat blanditiis voluptatum quasi!
                    Deleniti repudiandae obcaecati vel deserunt voluptates mollitia nesciunt quibusdam dolorem neque fuga possimus, suscipit sed aspernatur! Rerum, eum molestiae? Odio consequuntur laudantium magni id similique. Alias in maxime molestias rem.
                    Natus dignissimos quia, quidem aliquam, blanditiis molestias hic iste quaerat cum eum ex beatae nostrum quis vel? Consequatur nobis maiores facere minus quos autem quas. Sequi numquam laudantium alias perspiciatis?
                    Ipsum ipsam atque, sequi possimus consectetur itaque vitae pariatur! Veniam harum odio commodi doloribus provident aut, ab voluptas molestias eligendi doloremque culpa omnis est qui voluptatum! Odit qui quod fugiat.
                    Provident, quos minima asperiores cum perspiciatis amet et labore deserunt ab perferendis, rem totam? Ex dicta delectus consequatur voluptas reprehenderit possimus nesciunt recusandae. Amet eos a illum porro illo reprehenderit.s</p>
                    <a href="#">Continues ...</a>
            </article>
            </section>
        </div>
    )
}

export default Article;