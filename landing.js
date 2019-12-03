		var w = 1600
		var h = 850
		var padding = 40
var landingData;
		d3.csv("landing_page.csv").then(function(data){
				
				landingData = data;
				
				var svg = d3.select("#landing")
				.append("svg")
				.attr("width", w)
				.attr("height", h);
				
				svg.selectAll(".ci")
				.data(dataset)
				.enter()
				.append("circle")
				.attr("cx", function(d,i){
					return i%4*400+150
				})
				.attr("cy", function(d,i){
					return Math.floor(i/4)*360+100
				})
				.attr("r", function(d) {
					return d.dataValue
				})
				.attr("fill", "#008B8B")
				});
				
				svg.selectAll("circle")
				.data(landingData)
				.enter()
				.append("circle")
				.attr("cx", function(d,i){
					return i%4*400+200
				})
				.attr("cy", function(d,i){
					return Math.floor(i/4)*360+100
				})
				.attr("r", function(d) {
					return d.dataValue
				})
				.attr("fill", "#008080")
				// .scaleExtent([1/20])
				.on("click", function() {
					transformSize();
				});
				
				svg.selectAll("text")
				   .data(landingData)
				   .enter()
				   .append("text")
				   .text(function(d) {
				//console.log(d["dataName"])
				   		return d["dataName"]
				   })
				   .attr("x", function(d,i){
									return i%4*400+105
								})
				   .attr("y", function(d,i){
									return Math.floor(i/4)*360+280
								})
				   .attr("font-family", "helvetica")
				   .attr("font-size", "14px")
				   .attr("fill", "black");
   
   
				svg.selectAll(".hf")
				   .data(landingData)
				   .enter()
				   .append("text")
				   .attr('class',"hf")
				   .text(function(d) {
					 //  console.log(d["humanFriendly"])
				   		return d["humanFriendly"]
				   })
				   .attr("x", function(d,i){
									return i%4*400+105
								})
				   .attr("y", function(d,i){
									return Math.floor(i/4)*360+300
								})
				   .attr("font-family", "sans-serif")
				   .attr("font-size", "18px")
				   .attr("fill", "gray");
});
	
		var transformSize = function() {
			
			d3.selectAll("circle")
			.each(function(d,i){
				if(d!=undefined){
					d3.select(this)
					.transition()
					.duration(1000)
					.attr("cx", function(){
							return i%4*400+150
						})
						.attr("cy", function(){
							return Math.floor(i/4)*360+100
						})
						.attr("r", function() {
							return d.dataChange
						})
						.attr("fill", "#E9967A");
				
						d3.selectAll(".hf")
						.transition()
						.duration(1000)
						.text(function(d) {
						  // console.log(d["humanFriendlychange"])
					   		return d["humanFriendlychange"]
					   })
					
				}
			})
			
};