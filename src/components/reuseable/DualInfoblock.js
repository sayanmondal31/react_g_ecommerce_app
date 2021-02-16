import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"
import { Card, Button } from "react-bootstrap"

export default function DualInfoblock({ heading }) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="lead text-white mb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem, odio dolorum harum dolor molestias veniam, a
              dignissimos asperiores autem eum aut sapiente quaerat at deleniti
              molestiae facere, maxime enim sint in perspiciatis expedita qui
              aliquam fugiat distinctio? Aliquam nostrum accusamus
              necessitatibus, repellat harum quod, officia magni dolorum
              reiciendis nam excepturi! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Tenetur quam repellendus suscipit. Ipsum aut
              officia, eum, autem explicabo est atque a at cum, qui tempora
              rerum ab labore quidem. Earum commodi nostrum, quia corrupti
              reiciendis tenetur quo veniam voluptates perferendis voluptate
              atque quidem id vero cum? Nihil earum corrupti rem harum libero!
              Magni ipsam ducimus excepturi pariatur corrupti voluptatem
              reprehenderit optio odit odio culpa ut aperiam, quia a illum
              numquam sed inventore, aspernatur quasi saepe molestiae!
              Cupiditate a repellat voluptatibus accusantium necessitatibus.
              Eligendi, vero est veniam amet ut, molestias voluptatibus quos
              tenetur, corrupti expedita nesciunt reprehenderit animi vel
              sapiente iusto?
            </p>
          </div>
          <div className="col-4">
            <div class="card bg-dark">
              <img
                src="https://images.pexels.com/photos/3881256/pexels-photo-3881256.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                class="card-img-top"
                alt="image goes here"
                // height="30%"
                
              />
              <div class="card-body">
                <h5 class="card-title text-success">Just click photos</h5>
                <p class="card-text text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis facilis molestiae unde eveniet quae dignissimos,
                  quasi illo expedita quis! Nesciunt eligendi beatae non debitis
                  cupiditate fugit sequi iusto quae porro!
                </p>
                <Link href="#" class="btn btn-warning btn-block">
                  {heading}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
