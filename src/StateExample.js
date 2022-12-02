import React from 'react'
class StateExample extends React.Component{
	state={
		name:"Reactjs",
		year:2013,
		employee:[
		{id:1,name:"emp1"},
		{id:2,name:"emp2"},
		{id:3,name:"emp3"}
		]
		//employees:["emp1","emp2","emp3"]
	}
	render(){
		return(
		<div>
				<p>{this.state.name} {this.state.year}</p>
				{
					this.state.employee.map((emp)=>(
					<div>
					<p>{emp.id}</p>
					<p>{emp.name}</p>
					</div>
					))
				}
			{/*<p>
				{this.state.employee[0].id}&nbsp;
				{this.state.employee[0].name}
			</p>
			<p>
				{this.state.employee[1].id}&nbsp;
				{this.state.employee[1].name}
			</p>*/}
		</div>
		)
	}
}
export default StateExample