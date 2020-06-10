<template>
    <div class="container-outer ">
        <div class="content">
            <h1>Page Not Found <span>:(</span></h1>
            <p>Ops! Looks like the page you're looking for is not found.</p>
            <p><i>404</i></p>
            <p><router-link to="/"  class="home-btn">Back To Home</router-link></p>
        </div>
    </div>
</template>

<script>
export default {
    name: "pagenotfound"
}
</script>
<style >

body,
html {
	font-family: Arial, Helvetica, sans-serif;
	min-height: 100vh;
	width: 100%;
	background: rgba(245, 245, 245, 0.4);
	color: rgba(0, 0, 0, 0.7);
	font-size: 18px;
	-webkit-user-select: none;
	display: grid;
}

.container-outer {
	display: grid;
	align-items: center;
	justify-content: center;
	justify-items: center;
	text-align: center;
	padding: 80px 20px;
}

h1 {
    margin-bottom: 30px;
    text-transform: capitalize;
}

i {
	font-style: normal;
	font-size: 200px;
	display: inline-block;
	margin: 40px 0px;
}

.home-btn {
	height: 50px;
	line-height: 50px;
	display: inline-block;
	border-radius: 3px;
	border: solid 1px;
	border-color: rgba(0, 0, 0, 0.7);
	width: max-content;
	text-transform: uppercase;
	color: rgba(0, 0, 0, 0.7);
	font-size: 13px;
	padding-left: 25px;
	padding-right: 25px;
	text-decoration: none;
	transition: all 0.3s;
}

.home-btn:hover {
	background-color: rgba(0, 0, 0, 0.7);
	color: #ffffff;
}

@media screen and (max-width: 480px) {
	i {
		font-size: 150px;
	}
}
</style>