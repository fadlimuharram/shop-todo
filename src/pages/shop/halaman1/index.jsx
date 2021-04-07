import React from 'react';
import './style.scss';

const Halaman1 = () => {
	return (
		<>
			<div class="wrapper">
				<div class="container">
					<div class="header">
						<h1>
							Choose <span> as you want </span>
						</h1>
						<h1>
							Pay <span> as you can </span>{' '}
						</h1>
						<div class="shopnow">
							<a href="page_2.html">
								<button>Shop Now</button>
							</a>
						</div>
					</div>
				</div>
				<div class="dropdown">
					<div class="select">
						<p>LATEST</p>
						<p>ALL</p>
					</div>
					<div class="concept">
						<h2>
							New Concept <span> of Online Shopping </span>{' '}
						</h2>
					</div>
					<div class="text">
						<p>
							Lorem Ipsum will go here. Lorem Ipsum will go here. Lorem Ipsum will go
							here. Lorem Ipsum will go here.
						</p>
					</div>
				</div>
			</div>
			<div class="content">
				<div class="content-1">
					<h3>GALLERY</h3>
					<h4>SUBTITLE</h4>
				</div>
				<div class="content-2">
					<h3>ACTIVITIES</h3>
					<h4>SUBTITLE</h4>
				</div>
				<div class="content-3">
					<h3>KEYNOTES</h3>
					<h4>SUBTITLE</h4>
				</div>
			</div>
			<div class="footer">
				<i class="fa fa-th" aria-hidden="true"></i>
			</div>
		</>
	);
};

export { Halaman1 };
