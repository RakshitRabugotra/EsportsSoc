import './App.css'
import Form from './components/Form'
import Navbar from './components/Navbar'
import Card from './components/Card'
import { Gallery } from "react-grid-gallery";

const images = [
   {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      width: 320,
      height: 174,
      isSelected: true,
      caption: "After Rain (Jeshu John - designerspics.com)",
   },
   {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      width: 320,
      height: 212,
      tags: [
         { value: "Ocean", title: "Ocean" },
         { value: "People", title: "People" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
   },

   {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      width: 320,
      height: 212,
   },
];


function App() {

  return (
    <>
      <Navbar/>
      <div className='content'>
      <Card/>
      </div>

      <h2>Feature</h2>
      <Gallery images={images} />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ab consectetur molestiae quam consequuntur dolorum in ipsa totam cumque cum laudantium, quaerat libero quae saepe aut voluptas quidem iusto. At ipsa blanditiis illum numquam quisquam deleniti enim nesciunt illo soluta non consectetur laborum quasi eum sit voluptatibus eveniet, itaque rerum cum sequi aliquid unde. Dolorem libero at voluptatibus, amet commodi unde quo nobis ut. Harum fuga facilis totam est amet delectus earum illo. Temporibus distinctio blanditiis, quam rerum tenetur quis quisquam nobis? Doloremque dicta nihil quos accusantium praesentium, in vel fugiat ex sed porro nesciunt sunt officiis consectetur odio laboriosam?
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ab consectetur molestiae quam consequuntur dolorum in ipsa totam cumque cum laudantium, quaerat libero quae saepe aut voluptas quidem iusto. At ipsa blanditiis illum numquam quisquam deleniti enim nesciunt illo soluta non consectetur laborum quasi eum sit voluptatibus eveniet, itaque rerum cum sequi aliquid unde. Dolorem libero at voluptatibus, amet commodi unde quo nobis ut. Harum fuga facilis totam est amet delectus earum illo. Temporibus distinctio blanditiis, quam rerum tenetur quis quisquam nobis? Doloremque dicta nihil quos accusantium praesentium, in vel fugiat ex sed porro nesciunt sunt officiis consectetur odio laboriosam?
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ab consectetur molestiae quam consequuntur dolorum in ipsa totam cumque cum laudantium, quaerat libero quae saepe aut voluptas quidem iusto. At ipsa blanditiis illum numquam quisquam deleniti enim nesciunt illo soluta non consectetur laborum quasi eum sit voluptatibus eveniet, itaque rerum cum sequi aliquid unde. Dolorem libero at voluptatibus, amet commodi unde quo nobis ut. Harum fuga facilis totam est amet delectus earum illo. Temporibus distinctio blanditiis, quam rerum tenetur quis quisquam nobis? Doloremque dicta nihil quos accusantium praesentium, in vel fugiat ex sed porro nesciunt sunt officiis consectetur odio laboriosam?
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ab consectetur molestiae quam consequuntur dolorum in ipsa totam cumque cum laudantium, quaerat libero quae saepe aut voluptas quidem iusto. At ipsa blanditiis illum numquam quisquam deleniti enim nesciunt illo soluta non consectetur laborum quasi eum sit voluptatibus eveniet, itaque rerum cum sequi aliquid unde. Dolorem libero at voluptatibus, amet commodi unde quo nobis ut. Harum fuga facilis totam est amet delectus earum illo. Temporibus distinctio blanditiis, quam rerum tenetur quis quisquam nobis? Doloremque dicta nihil quos accusantium praesentium, in vel fugiat ex sed porro nesciunt sunt officiis consectetur odio laboriosam?
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ab consectetur molestiae quam consequuntur dolorum in ipsa totam cumque cum laudantium, quaerat libero quae saepe aut voluptas quidem iusto. At ipsa blanditiis illum numquam quisquam deleniti enim nesciunt illo soluta non consectetur laborum quasi eum sit voluptatibus eveniet, itaque rerum cum sequi aliquid unde. Dolorem libero at voluptatibus, amet commodi unde quo nobis ut. Harum fuga facilis totam est amet delectus earum illo. Temporibus distinctio blanditiis, quam rerum tenetur quis quisquam nobis? Doloremque dicta nihil quos accusantium praesentium, in vel fugiat ex sed porro nesciunt sunt officiis consectetur odio laboriosam?
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ab consectetur molestiae quam consequuntur dolorum in ipsa totam cumque cum laudantium, quaerat libero quae saepe aut voluptas quidem iusto. At ipsa blanditiis illum numquam quisquam deleniti enim nesciunt illo soluta non consectetur laborum quasi eum sit voluptatibus eveniet, itaque rerum cum sequi aliquid unde. Dolorem libero at voluptatibus, amet commodi unde quo nobis ut. Harum fuga facilis totam est amet delectus earum illo. Temporibus distinctio blanditiis, quam rerum tenetur quis quisquam nobis? Doloremque dicta nihil quos accusantium praesentium, in vel fugiat ex sed porro nesciunt sunt officiis consectetur odio laboriosam?
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ab consectetur molestiae quam consequuntur dolorum in ipsa totam cumque cum laudantium, quaerat libero quae saepe aut voluptas quidem iusto. At ipsa blanditiis illum numquam quisquam deleniti enim nesciunt illo soluta non consectetur laborum quasi eum sit voluptatibus eveniet, itaque rerum cum sequi aliquid unde. Dolorem libero at voluptatibus, amet commodi unde quo nobis ut. Harum fuga facilis totam est amet delectus earum illo. Temporibus distinctio blanditiis, quam rerum tenetur quis quisquam nobis? Doloremque dicta nihil quos accusantium praesentium, in vel fugiat ex sed porro nesciunt sunt officiis consectetur odio laboriosam?
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ab consectetur molestiae quam consequuntur dolorum in ipsa totam cumque cum laudantium, quaerat libero quae saepe aut voluptas quidem iusto. At ipsa blanditiis illum numquam quisquam deleniti enim nesciunt illo soluta non consectetur laborum quasi eum sit voluptatibus eveniet, itaque rerum cum sequi aliquid unde. Dolorem libero at voluptatibus, amet commodi unde quo nobis ut. Harum fuga facilis totam est amet delectus earum illo. Temporibus distinctio blanditiis, quam rerum tenetur quis quisquam nobis? Doloremque dicta nihil quos accusantium praesentium, in vel fugiat ex sed porro nesciunt sunt officiis consectetur odio laboriosam?
      </p>
    </>
  )
}

export default App
