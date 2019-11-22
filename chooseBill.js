		
    var w = 1600
    var h = 850
    var padding = 40
    
    var publicCurrentNetWorth = null
    d3.csv("billionaire_data.csv").then(function(data){
            
            dataset = data;
            
            var svg = d3.select("#chooseBilli")
            .append("svg")
            .attr("width", w)
            .attr("height", h);
            
            // var tooltip = d3.select("#chooseBilli")
 //            .append("div")
 //            .attr("id","tooltip")
 //            .style("posiiton", "absolute")
 //            .style("z-index", "0")
            
            svg.selectAll("img")
            .data(dataset)
            .enter()
            .append("svg:image")
            .attr("x", function(d,i){
                return i%10*150+70
            })
            .attr("y", function(d,i){
                return Math.floor(i/10)*155+70
            })
            .attr("width", 120)
            .attr("height", 120)
            .style("border","2px solid gold")	
            .attr("xlink:href", function(d) {
                return d["images"].replace("profile_images","real_images")
            }) 
            .on("mouseover", function(d){
                 tooltip.html(d["profileData"])
                 tooltip.style("visibility", "visible")
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY - 28) + "px");
            })	
            .on("mouseout", function(d){
                return tooltip.style("visibility", "hidden");})  
            .on("click", function(d){
              console.log("billionaire = ", d.netWorth)
                var netWorth = d.netWorth
                publicCurrentNetWorth = netWorth
            })

svg.selectAll("text")
.data(dataset)
.enter()
.append("text")
.text(function(d) {
  // console.log(d["billionaireName"])
       return d["billionaireName"]
})
.attr("x", function(d,i){
                return i%10*150+95
            })
.attr("y", function(d,i){
                return Math.floor(i/10)*155+200
            })
.attr("font-family", "helvetica")
.attr("font-size", "14px")
.attr("fill", "black");


svg.selectAll(".hf")
.data(dataset)
.enter()
.append("text")
.attr('class',"hf")
.text(function(d) {
 //  console.log(d["humanFriendly"])
       return d["humanFriendly"]
})
.attr("x", function(d,i){
                return i%10*150+98
            })
.attr("y", function(d,i){
                return Math.floor(i/10)*155+215
            })
.attr("font-family", "sans-serif")
.attr("font-size", "11px")
.attr("fill", "gray");
    });