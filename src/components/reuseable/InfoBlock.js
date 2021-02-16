import React from 'react'
import Heading from "./Heading"
import { Link } from 'gatsby'

export default function InfoBlock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">  {/*my = margin at y axis , py = padding at y axis*/ }
            <div className="container">
                <Heading title={heading}/>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Id quas quam quo doloribus iste asperiores fuga enim quidem explicabo 
                            culpa veritatis placeat possimus, sed debitis alias autem nisi repellat.
                            Repellendus, at ducimus! A alias perspiciatis harum aliquam deleniti aut
                            autem iusto quod asperiores non esse dignissimos eos, fugiat animi numquam
                            magni quaerat sapiente at quisquam. Sapiente pariatur quae porro a.
                        </p>
                        <Link to="/about/" >
                            <button className="btn btn-warning btn-lg" >
                                {heading}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
