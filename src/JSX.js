import React from'react'
function  JSX(){
/*return(
	<div>
	<h1>good night</h1>
	</div>
	)*/
	return React.createElement(
		"div",

		{id:"one",className:"classone"},
		React.createElement("h1",null,"good night")
		)

}
export default JSX