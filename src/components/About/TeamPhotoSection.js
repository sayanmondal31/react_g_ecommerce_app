import React from "react"

export default function TeamPhotoSection() {
  return (
    <div className="row">
      <div className="col-10 col-sm-10 mx-auto">
        <div class="card-group">
          <div class="card">
            <img
              src="https://images.pexels.com/photos/1529621/pexels-photo-1529621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Name 1</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img
              src="https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Name 2</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae, blanditiis.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
