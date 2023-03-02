<template>
    <div class="sidebar">
        <div class="sidebar-widget style4">
            <div class="search-box">
                <div class="form-group">
                    <input type="search" placeholder="Search">
                    <button type="submit"> 
                        <i class="flaticon-search"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="sidebar-widget categories">
            <h4>News Category</h4>
            <div class="category-box">
                <ul class="list-style">
                    <li>
                        <router-link to="blog">
                            <i class="ri-login-box-line"></i>
                            Business Card
                            <span>(2)</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="blog">
                            <i class="ri-login-box-line"></i>
                            Uncategorized
                            <span>(6)</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="blog">
                            <i class="ri-login-box-line"></i>
                            Online Banking
                        <span>(5)</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="blog">
                            <i class="ri-login-box-line"></i>
                            Digital Payment
                            <span>(9)</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="sidebar-widget popular-post">
            <h4>Popular Posts</h4>
            <div class="popular-post-widget">
                <div class="pp-post-item">
                    <router-link to="blog-details-left-sidebar" class="pp-post-img">
                        <img src="../../assets/images/blog/post-thumb-1.jpg" alt="Image">
                    </router-link>
                    <div class="pp-post-info">
                        <span><i class="flaticon-calendar"></i>01 Nov, 2021</span>
                        <h6>
                            <router-link to="blog-details">
                                Bank Is The Best Way To Save In The Future
                            </router-link>
                        </h6>
                    </div>
                </div>
                <div class="pp-post-item">
                    <router-link to="blog-details-left-sidebar" class="pp-post-img">
                        <img src="../../assets/images/blog/post-thumb-2.jpg" alt="Image">
                    </router-link>
                    <div class="pp-post-info">
                        <span><i class="flaticon-calendar"></i>25 Sep, 2021</span>
                        <h6>
                            <router-link to="blog-details">
                                Available Financial Loans For Business
                            </router-link>
                        </h6>
                    </div>
                </div>
                <div class="pp-post-item">
                    <router-link to="blog-details-left-sidebar" class="pp-post-img">
                        <img src="../../assets/images/blog/post-thumb-3.jpg" alt="Image">
                    </router-link>
                    <div class="pp-post-info">
                        <span><i class="flaticon-calendar"></i>12 Sep, 2021</span>
                        <h6>
                            <router-link to="blog-details">
                                5 Benefit Of Credit Card In Payment
                            </router-link>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
        <div class="sidebar-widget tags">
            <h4>Popular Tags </h4>
            <div class="tag-list">
                <ul class="list-style">
                    <li><router-link to="/blog">Business</router-link></li>
                    <li><router-link to="/blog">Costs</router-link></li>
                    <li><router-link to="/blog">Interest</router-link></li>
                    <li><router-link to="/blog">Loan</router-link></li>
                    <li><router-link to="/blog">Payment</router-link></li>
                    <li><router-link to="/blog">Cards</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogSidebar'
}
</script>