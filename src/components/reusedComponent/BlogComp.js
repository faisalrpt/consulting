import './blogComp.css';
import blogmg1 from '../../assets/images/blog/news-1.jpg';
import blogmg2 from '../../assets/images/blog/news-2.jpg';
import blogmg3 from '../../assets/images/blog/news-3.jpg';
const BlogComp = (props) =>{
    return(
        <>
        <div class="blog-section">
		<div class="container">
        <div className="sec-title">
				<div class="title">our blog</div>
				<h2 class="heading"><span>Latest </span>From Our Press</h2>
			</div>
			<div class="inner-container">
				<div class="clearfix row g-0">
					<div class="column col-lg-8 col-md-12 col-sm-12">
						<div class="news-block">
							<div class="inner-box">
								<div class="clearfix">
									<div class="image-column col-lg-6 col-md-6 col-sm-12">
										<div class="inner-column">
											<div class="image">
												<a href="blog-detail.html"><img src={blogmg1} alt=""/></a>
											</div>
										</div>
									</div>
									<div class="content-column col-lg-6 col-md-6 col-sm-12">
										<div class="inner-column">
											<div class="arrow-one"></div>
											<div class="title">business</div>
											<h4><a href="blog-detail.html">Problems About <br /> Social Insurance For <br /> Truck Drivers</a></h4>
											<div class="post-date">Decmber 14th, 2020 by <span>Admin</span></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div class="news-block">
							<div class="inner-box">
								<div class="clearfix row g-0">
									<div class="content-column col-lg-6 col-md-6 col-sm-12 order-lg-1 order-2">
										<div class="inner-column">
											<div class="arrow-two"></div>
											<div class="title">bank &amp; finance</div>
											<h4><a href="blog-detail.html">Payment Online - <br /> Things That You Know To <br /> Project Your Money</a></h4>
											<div class="post-date">Decmber 14th, 2020 by <span>Admin</span></div>
										</div>
									</div>
									<div class="image-column col-lg-6 col-md-6 col-sm-12 order-lg-2 order-1">
										<div class="inner-column">
											<div class="image">
												<a href="blog-detail.html"><img src={blogmg2} alt="" /></a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
					</div>
					
					<div class="column col-lg-4 col-md-12 col-sm-12">
						<div class="news-block-two">
							<div class="inner-box">
								<div class="image">
									<a href="blog-detail.html"><img src={blogmg3} alt="" /></a>
									<div class="arrow"></div>
								</div>
								<div class="lower-content">
									<div class="title">tips &amp; tricks</div>
									<h4><a href="blog-detail.html">5 Secrets To <br /> Coaching Your Employees <br /> To Greatness</a></h4>
									<div class="post-date">Decmber 14th, 2020 by <span>Admin</span></div>
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
        </>
    )
}
export default BlogComp;